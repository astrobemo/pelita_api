import express from 'express';
import { COMPANY, ALLOWED_IPS, ALLOWED_ORIGINS, ENVIRONMENT } from '../config/loadEnv.js';
import { checkMemoryUsage } from './check-memory-usage.js';
import { expressjwt } from "express-jwt";
import cors from "cors";
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import path, { join } from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import { prismaClient } from './prisma-client.js';

import { coretaxPajak, coretaxPajakGunggung } from './helpers/coretax_xml.js';
import http from 'http';
// import { Server as WebSocketServer } from 'ws';

const COMPANY_LIST = COMPANY.split(',');
// const secret = process.env.TOKEN_SECRET || 'development';

process.env.TZ = 'UTC';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const swaggerDocument = fs.readFileSync(path.join(__dirname, '../pelita_api.json'), 'utf8');


app.use('/api-docs', 
    swaggerUi.serve, swaggerUi.setup(JSON.parse(swaggerDocument))
);

/* app.use(expressjwt({
    secret: secret,
    algorithms: ['HS256']
}).unless({
    path:['/hello','/api-docs']
})); */

// Read allowed IPs from environment variable and split into an array
console.log('env', ENVIRONMENT);
const allowedIPs = ALLOWED_IPS.split(',');
const allowedCors = ALLOWED_ORIGINS.split(',');

const corsOptions = {
    
    origin: function (origin, callback) {
        if (!origin || allowedCors.indexOf(origin) !== -1) {
            callback(null, true); // Allow the request
        } else {
            console.log('origin', origin);
            callback(new Error('Not allowed by CORS')); // Reject the request
        }
    },
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
};

app.use(cors(corsOptions)); 


// Middleware to parse JSON bodies
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});


const ipFilter = (req, res, next) => {
    const clientIp = (req.ip).replace(/^::ffff:/, '');
    console.log('filtering ip address');
    console.log('clientIp', clientIp);
    console.log('allowedIp', allowedIPs);
    console.log('clientIp a/n', allowedIPs.includes(clientIp));
    if(allowedIPs.includes(clientIp)){
        console.log("access granted");
        next();
    } else {
        console.log("access resricted");
        res.status(403).send({error: 'Access restricted'});
    }
}

app.set('trust proxy', true);
app.use((req, res, next) => {
    const clientIp = (req.ip).replace(/^::ffff:/, '');
    console.log('========================');
    console.log('path', req.path);
    console.log('clientIp', clientIp);
    console.log(req.headers['x-forwarded-for']);
    console.log('========================');
    if (req.path === '/api-docs') {
      next();
    }else if(ENVIRONMENT === 'development' || ENVIRONMENT === 'staging') {
        console.log('testing/staging environment');
        next();
    }else {
        ipFilter(req, res, next);
    }
});

app.get('/testing-consumer', (req, res) => {
    res.send('Testing World!');
});

app.get('/customers_bounce_back', async (req, res) => {
    
});

app.get('/customers/sudah_verifikasi_oleh_pajak', async (req, res) => {
    console.log('get customer verified by pajak');

    const tgl_awal = new Date('2023-10-09');
    const customers = {};

    const { page = 1, limit = 10 } = req.query; // Default to page 1 and limit 10
    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);

    for (const list of COMPANY_LIST) {
        const companyIndex = COMPANY_LIST.indexOf(list);
        const company = list.toLowerCase();
        const aggeratedCustomer = await prismaClient[company].rekam_faktur_pajak_detail.groupBy({
            by: ['customer_id'],
            _max: {
            tanggal: true
            },
            where: {
                rekam_faktur_pajak: {
                    tanggal_awal: {
                    gte: tgl_awal
                    }
                }
            },
        });

        // console.log(aggeratedCustomer.length);
        

        const customerIds = aggeratedCustomer.map((item) => item.customer_id);
        customers[company] = await prismaClient[company].customer.findMany({
            where: {
                id: {
                    in: customerIds
                },
                customer_id_central: null
            },
        });
    };

    const groupedCustomers = new Map();
    Object.entries(customers).forEach(([company, companyCustomers]) => {
        companyCustomers.forEach(customer => {
            const npwp = customer.npwp;
            const nik = customer.nik;
            const nKey = npwp || nik;
            const keyName = npwp ? 'npwp' : 'nik';
            if(!groupedCustomers.has(nKey)){
                groupedCustomers.set(nKey, {
                    keyName: keyName,
                    keyValue : nKey,
                    company_indexes: [COMPANY_LIST.indexOf(company)],
                    data_list: []
                });
            }else{
                
                groupedCustomers.get(nKey).company_indexes.push(COMPANY_LIST.indexOf(company));
            }

            groupedCustomers.get(nKey).data_list.push({
                company,
                companyIndex: COMPANY_LIST.indexOf(company),
                ...customer
            });
        });
    });
    
    const resultCustomers = Object.fromEntries(groupedCustomers);

    const totalCount = Object.keys(resultCustomers).length;
    const totalPages = Math.ceil(totalCount / pageSize);

    const result = Object.entries(resultCustomers).slice((pageNumber - 1) * pageSize, pageNumber * pageSize);    

    checkMemoryUsage();

    res.json({
        data: result,                // The paginated data
        totalCount: totalCount,     // Total number of records
        totalPages: totalPages,     // Total number of pages
        currentPage: pageNumber,    // Current page number
        pageSize: pageSize          // Number of records per page
    });
    
    // const result = Object.fromEntries(groupedCustomers);
    // res.json(result);
});

app.get('/customers/customer-central/:id', async (req, res) => {

    let query = "";

    if(req.params.id != "all"){
        query = `
            query {
                customer(id:${req.params.id}) {
                    id
                    tipe_company
                    nama
                    alamat
                    blok
                    no
                    rt
                    rw
                    kelurahan
                    kecamatan
                    kota
                    provinsi
                    kode_pos
                    npwp
                    nik
                }
            }`;
    }else{
        query = `
            query {
                allCustomer {
                    id
                    tipe_company
                    nama
                    alamat
                    blok
                    no
                    rt
                    rw
                    kelurahan
                    kecamatan
                    kota
                    provinsi
                    kode_pos
                    npwp
                    nik
                }
            }`;
    }


    try {
        const response = await axios.post('http://localhost:3301/graphql', { query }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        let customers = {};
        if(req.params.id == "all"){
            customers = await response.data.data.allCustomer;
        }else{
            customers = await response.data.data.customer;
        }

        res.status(200).send(customers);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching customers from the GraphQL backend' });
    }
});

app.get('/customers/:company_index', async (req, res) => {
    console.log('get customer by company index');
    const company_index = parseInt(req.params.company_index);
    
    try {
        const { page = 1, limit = 10, orderByField = ['nama'], orderDirection = 'asc' } = req.query;
        
        const pageNumber = parseInt(page, 10);
        const pageSize = parseInt(limit, 10);
        const orderByFieldList = orderByField;
        const orderDirectionList = orderDirection;


        const customers = await prismaClient[COMPANY_LIST[company_index]].customer.findMany({
            skip: (pageNumber - 1) * pageSize, // Calculate skip
            take: pageSize,
            orderBy:{
                [orderByFieldList]: orderDirectionList,
            }
        });

        const totalCount = await prismaClient[COMPANY_LIST[company_index]].customer.count();
        const totalPages = Math.ceil(totalCount / pageSize);
        
        res.json({
            data: customers,                // The paginated data
            totalCount: totalCount,     // Total number of records
            totalPages: totalPages,     // Total number of pages
            currentPage: pageNumber,    // Current page number
            pageSize: pageSize          // Number of records per page
          });
        // res.json(customers);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching customers' });
    }
});

app.get('/customers/:company_index/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const company_index = parseInt(req.params.company_index);

    console.log('params',id, company_index);
    try {
        const customers = await prismaClient[COMPANY_LIST[company_index]].customer.findUnique({
            where: {
                id: id
            }
        });
        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching customers' });
    }
});


app.get('/pajak/generate_faktur_pajak_coretax', async (req, res) => {
    const company_name = req.query.company_name;
    const rekam_faktur_pajak_id = req.query.rekam_faktur_pajak_id;


    try {
        let fileXML = await coretaxPajak(rekam_faktur_pajak_id, company_name);

        res.setHeader('Content-Disposition', 'attachment; filename=faktur_pajak.xml');
        res.setHeader('Content-Type', 'application/xml');
        res.send(fileXML);

    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching customers' });
    }
    
});

app.get('/pajak/generate_faktur_pajak_gunggung', async (req, res) => {
    const company_name = req.query.company_name;
    const rekam_faktur_pajak_id = req.query.rekam_faktur_pajak_id;

    try {
        let fileXML = await coretaxPajakGunggung(rekam_faktur_pajak_id, company_name);

        res.setHeader('Content-Disposition', 'attachment; filename=faktur_pajak_gunggung.xml');
        res.setHeader('Content-Type', 'application/xml');
        res.send(fileXML);

    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching customers' });
    }
    
});

//==========================penerimaan barang====================================

app.get('/penerimaan_barang_by_tanggal/:company_index', async (req, res) => {
    
    let company_index ='';
    console.log('ENV', ENVIRONMENT);
    if(ENVIRONMENT !== 'test' && ENVIRONMENT !== 'staging'){
        company_index = req.params.company_index;
    }else{
        company_index = req.params.company_index.toLowerCase();
    }
    
    const { tanggal_start, tanggal_end } = req.query;
    console.log(tanggal_start, tanggal_end);
    let penerimaanBarang = [];
    
    if (!tanggal_start || !tanggal_end) {
        return res.status(400).json({ 
            error: 'Start date and end date are required' 
        });
    }

    const dateValidation = (date) => {
        return new Date(date).toString() !== 'Invalid Date';
    };

    if (!dateValidation(tanggal_start) || !dateValidation(tanggal_end)) {
        return res.status(400).json({ 
            error: 'Invalid date format. Use YYYY-MM-DD' 
        });
    }
    
    try {
        
        const penerimaan = await prismaClient[company_index].$queryRaw`
            SELECT tanggal_input, no_plat, penerimaan_barang_id 
            FROM 
                (
                    SELECT * FROM nd_pembelian
                    WHERE 
                        tanggal >= ${tanggal_start} 
                        AND tanggal <= ${tanggal_end}
                ) AS pembelian
            LEFT JOIN nd_penerimaan_barang
            ON pembelian.penerimaan_barang_id = nd_penerimaan_barang.id
            WHERE pembelian.penerimaan_barang_id IS NOT NULL
            GROUP BY pembelian.penerimaan_barang_id
        `;

        const daftarBarang = await prismaClient[company_index].$queryRaw`
            SELECT barang_sku_id, tSKU.barang_id_master as barang_id, tSKU.warna_id_master as warna_id, tSKU.satuan_id_master as satuan_id, 
                tSKU.nama_barang as nama_barang, sum(qty) as qty, sum(jumlah_roll) as jumlah_roll, penerimaan_barang_id
            FROM 
                (
                    SELECT * FROM nd_pembelian
                    WHERE 
                        tanggal >= ${tanggal_start} 
                        AND tanggal <= ${tanggal_end}
                ) AS pembelian
            LEFT JOIN nd_pembelian_detail
            ON pembelian.id = nd_pembelian_detail.pembelian_id
            LEFT JOIN nd_gudang 
            ON pembelian.gudang_id = nd_gudang.id
            LEFT JOIN nd_barang
            ON nd_pembelian_detail.barang_id = nd_barang.id
            LEFT JOIN nd_penerimaan_barang
            ON pembelian.penerimaan_barang_id = nd_penerimaan_barang.id
            LEFT JOIN nd_master_toko_barang tBarang
            ON nd_pembelian_detail.barang_id = tBarang.barang_id_toko
            LEFT JOIN nd_master_toko_warna tWarna
            ON nd_pembelian_detail.warna_id = tWarna.warna_id_toko
            LEFT JOIN nd_master_toko_satuan tSatuan
            ON nd_barang.satuan_id = tSatuan.satuan_id_toko
            LEFT JOIN nd_master_barang_sku tSKU
            ON tBarang.barang_id_master = tSKU.barang_id_master
            AND tWarna.warna_id_master = tSKU.warna_id_master
            AND tSatuan.satuan_id_master = tSKU.satuan_id_master
            GROUP BY barang_sku_id, penerimaan_barang_id
            ORDER BY nama_barang
        `;
        
        
        penerimaanBarang = penerimaan.map((penerimaan) => {
            const barangList = daftarBarang.filter(
            (barang) => barang.penerimaan_barang_id === penerimaan.penerimaan_barang_id
            );
            return {
            ...penerimaan,
            daftarBarang: barangList,
            };
        });

        
        res.json({
            success: true,
            data: { penerimaanBarang}
        });

    } catch (error) {
        console.log('Error fetching penerimaan barang:', error, error.message);
        if (!res.headersSent) {
            res.status(500).json({ error: 'An error occurred while fetching customers' });
        }
    }
});

app.get('/penerimaan_barang_by_id/:company_index', async (req, res) => {
    
    const { id } = req.query;
    let company_index ='';
    if(ENVIRONMENT !== 'test' && ENVIRONMENT !== 'staging'){
        company_index = req.params.company_index;
    }else{
        company_index = req.params.company_index.toLowerCase();
    }

    let penerimaanBarang = [];
    
    try {
        const penerimaan = await prismaClient[company_index].$queryRaw`
            SELECT tanggal_input, no_plat, id as penerimaan_barang_id 
            FROM nd_penerimaan_barang
            WHERE id = ${id}
        `;

        const daftarBarang = await prismaClient[company_index].$queryRaw`
            SELECT barang_sku_id, tSKU.barang_id_master as barang_id, tSKU.warna_id_master as warna_id, tSKU.satuan_id_master as satuan_id, 
                tSKU.nama_barang as nama_barang, sum(qty) as qty, sum(jumlah_roll) as jumlah_roll, penerimaan_barang_id
            FROM 
                (
                    SELECT * FROM nd_pembelian
                    WHERE penerimaan_barang_id = ${id}
                ) AS pembelian
            LEFT JOIN nd_pembelian_detail
            ON pembelian.id = nd_pembelian_detail.pembelian_id
            LEFT JOIN nd_gudang 
            ON pembelian.gudang_id = nd_gudang.id
            LEFT JOIN nd_barang
            ON nd_pembelian_detail.barang_id = nd_barang.id
            LEFT JOIN nd_penerimaan_barang
            ON pembelian.penerimaan_barang_id = nd_penerimaan_barang.id
            LEFT JOIN nd_master_toko_barang tBarang
            ON nd_pembelian_detail.barang_id = tBarang.barang_id_toko
            LEFT JOIN nd_master_toko_warna tWarna
            ON nd_pembelian_detail.warna_id = tWarna.warna_id_toko
            LEFT JOIN nd_master_toko_satuan tSatuan
            ON nd_barang.satuan_id = tSatuan.satuan_id_toko
            LEFT JOIN nd_master_barang_sku tSKU
            ON tBarang.barang_id_master = tSKU.barang_id_master
            AND tWarna.warna_id_master = tSKU.warna_id_master
            AND tSatuan.satuan_id_master = tSKU.satuan_id_master
            GROUP BY barang_sku_id, penerimaan_barang_id
            ORDER BY nama_barang
        `;
        
        penerimaanBarang = {
            tanggal_input: penerimaan[0].tanggal_input,
            no_plat: penerimaan[0].no_plat,
            penerimaan_barang_id: penerimaan[0].penerimaan_barang_id,
            daftarBarang: daftarBarang
        };

        res.json({
            success: true,
            data: { penerimaanBarang}
        });
        
    } catch (error) {
        console.error('Error fetching penerimaan barang:', error);
        res.status(500).json({ error: 'An error occurred while fetching barang' });
    }
});

app.get('/penerimaan_barang_status/:company_index', async (req, res) => {
    const { id } = req.query;
    let company_index ='';
    
    try {
        if(ENVIRONMENT !== 'test' && ENVIRONMENT !== 'staging'){
            company_index = (req.params.company_index);
        }else{
            company_index = req.params.company_index.toLowerCase();
        }

        const penerimaan = await prismaClient[company_index].penerimaan_barang.findUnique({
            where: {
                id: parseInt(id)
            }
        });

        const respond = await prismaClient[company_index].penerimaan_barang_status.findMany({
            where: {
                penerimaan_barang_id: parseInt(id)
            }
        });

        const statusPenerimaan = {
            id: penerimaan.id,
            no_plat: penerimaan.no_plat,
            tanggal_input: penerimaan.tanggal_input,
            daftar_status: respond
        }

        res.json({
            success: true,
            data: statusPenerimaan
        });

        
    } catch (error) {
        console.error('Error fetching penerimaan barang status:', error);
        res.status(500).json({ error: 'An error occurred while fetching barang status' });
    }
});

app.put('/penerimaan_barang_update_status/:company_index', async (req, res) => {
    const { id, status } = req.query;
    let company_index ='';
    
    try {
        if(ENVIRONMENT !== 'test' && ENVIRONMENT !== 'staging'){
            company_index = (req.params.company_index);
        }else{
            company_index = req.params.company_index.toLowerCase();
        }

        if(status === 'SUDAH_KONFIRMASI'){
            res.status(403).json({ error: 'Status SUDAH_KONFIRMASI dilakukan oleh admin/akunting' });
            throw new Error('Update Status SUDAH_KONFIRMASI hanya oleh admin/akunting');
        }

        const respond = await prismaClient[company_index].penerimaan_barang_status.create({
            data: {
                penerimaan_barang_id: parseInt(id),
                status_penerimaan: status
            }
        });

        res.json({
            success: true
        });

        
    } catch (error) {
        console.error('Error fetching penerimaan barang status', error);
        res.status(500).json({ error: 'An error occurred while fetching barang status' });
    }
});

app.put('/customers/:company_index/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const company_index = parseInt(req.params.company_index);
    const updateData = req.body;

    try {
        console.log(updateData)
        const updatedCustomer = await prismaClient[COMPANY_LIST[company_index]].customer.update({
            data: updateData,
            where: {
                id: id
            },
        });
        res.json(updatedCustomer);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the customer' });
    }
});

// Middleware to handle non-existent endpoints
app.use((err, req, res, next) => {
    if(err){
        console.log('error ...',err);
    }
    if (err.status === 401) {
        res.status(401).json({ error: 'Unauthorized access' });
    }else if(err.status === 404){
        res.status(404).json({ error: 'Endpoint not found' });
    }else if(err.status === 403){
        res.status(403).json({ error: 'Forbidden' });
    }else{
        next(err);
    }
    
});

/* const server = http.createServer(app);

const wss = new WebSocketServer({ server, path: '/ws' });

wss.on('connection', (ws, req) => {
    console.log('WebSocket client connected');
    ws.on('message', (message) => {
        console.log('Received:', message.toString());
        // Echo message back
        ws.send(`Echo: ${message}`);
    });
    ws.on('close', () => {
        console.log('WebSocket client disconnected');
    });
});

// Start HTTP + WebSocket server
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log(`WebSocket server running at ws://localhost:${port}/ws`);
}); */

// Error handling middleware
/* app.use((err, req, res, next) => {
    if (err) {
        res.status(403).send(` errors: ${err.message}`);
        
    } else {
        next();
    }
}); */




export default app;

/* app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); */