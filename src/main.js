import express from 'express';
import { COMPANY, ALLOWED_IPS, ALLOWED_ORIGINS, ENVIRONMENT, API_KEY } from '../config/loadEnv.js';
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
import { type } from 'os';
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
    }else{
        const apiKey = req.headers['x-api-key'];

        if (req.headers['x-api-key'] && apiKey === API_KEY) {
            console.log(`Access from machine: Hostname: ${hostname}`);
            next();
        }else{
            res.status(403).send({error: 'Access restricted'});
        }
    }
    
    /* else if(ENVIRONMENT === 'development' || ENVIRONMENT === 'staging') {
        console.log('testing/staging environment');
        next();
    }else {
        next();
        // ipFilter(req, res, next);
    } */
});

app.get('/testing-consumer', (req, res) => {
    res.send('Testing World!');
});

const getCompanyByName = (company_name) => {
    
    let company_index = null;
    switch (company_name) {
        case 'abadi':
            company_index = 0;
            break;
        case 'lestari':
            company_index = 1;
            break;
        case 'sejati':
            company_index = 2;
            break;
        default:
            throw new Error(`Invalid company name: ${company_name}`);
    }

    return company_index;
};


//==========================customers data====================================


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
        const aggeratedCustomer = await prismaClient[company].nd_rekam_faktur_pajak_detail.groupBy({
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
        customers[company] = await prismaClient[company].nd_customer.findMany({
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

app.get('/customerById', async (req, res) => {
    const id = parseInt(req.query.id);
    const company_index = parseInt(req.query.company_index);
    const company_name = req.query.company_name;

    if(company_index == "" && company_name == ""){
        return res.status(400).json({ error: 'company or company_name is required' });
    }

    if(company_index == "" && company_name != ""){
        company_index = getCompanyByName(company_name);
    }

    try {
        const customer = await prismaClient[COMPANY_LIST[company_index]].customer.findUnique({
            where: {
                id: id
            }
        });
        res.json(customer);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching customers' });
    }
});

//==========================supplier====================================

app.get('/supplierById', async (req, res) => {
    const id = parseInt(req.query.id);
    let company_index = parseInt(req.query.company_index);
    const company_name = req.query.company_name;
    if(company_index == "" && company_name == ""){
        return res.status(400).json({ error: 'company or company_name is required' });
    }

    if( ( typeof company_index === "undefined" || Number.isNaN(company_index) )  && company_name != ""){
        company_index = getCompanyByName(company_name);
    }

    if(typeof COMPANY_LIST[company_index] === 'undefined'){
        console.log('COMPANY_LIST', COMPANY_LIST, COMPANY_LIST[0]);
        console.log('company_index', 
            '1'+company_index, 
            '2'+typeof company_index, 
            '3'+req.params.company_index, 
            '4'+req.query.company_index, 
            '5'+req.query.params
        );
        console.log('test',COMPANY_LIST[1]);
        return res.status(400).json({ error: 'Invalid company or client id' });
    }

    try {
        const supplier = await prismaClient[COMPANY_LIST[company_index]].nd_supplier.findUnique({
            where: {
                id: id
            }
        });
        res.json(supplier);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching suppliers', details: error.message });
    }
});

//==========================barangWarna====================================

app.get('/barang_warna_by_sku', async (req, res) => {
    const barang_sku_id = parseInt(req.query.barang_sku_id);
    const company_index = parseInt(req.params.company_index);
    const company_name = req.query.company_name;

    if(company_index == "" && company_name == ""){
        return res.status(400).json({ error: 'company or company_name is required' });
    }

    if(company_index == "" && company_name != ""){
        company_index = getCompanyByName(company_name);
    }

    try {
        const barangWarna = await prismaClient[COMPANY_LIST[company_index]].$queryRaw`
        SELECT barang_id, warna_id, nama_jual as nama_barang, warna_jual as nama_warna, harga_jual, harga_beli
        FROM (
            SELECT barang_id_master as barang_id, warna_id_master as warna_id
            FROM nd_master_barang_sku
            WHERE id = ${barang_sku_id}
        )bsku
        LEFT JOIN nd_master_toko_barang tBarang
        ON bsku.barang_id = tBarang.barang_id_master
        LEFT JOIN nd_master_toko_warna tWarna
        ON bsku.warna_id = tWarna.warna_id_master
        LEFT JOIN nd_barang
        ON tBarang.barang_id_toko = nd_barang.id
        `;
        res.json(barangWarna);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching barang warna' });
    }
});



//==========================pajak coretax====================================


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

        console.log('Error generating faktur pajak:', error);
        res.status(500).json({ error: 'An error occurred while fetching pajak' });
    }
    
});

//==========================penerimaan barang====================================

app.get('/penerimaan_barang_by_tanggal/:company_index', async (req, res) => {
    
    let company_index ='';
    console.log('ENV', ENVIRONMENT);
    company_index = req.params.company_index;
    console.log('param', req.params);
    if(ENVIRONMENT !== 'test' && ENVIRONMENT !== 'staging'){
        
        if(ENVIRONMENT === 'development' && typeof COMPANY_LIST[company_index] !== 'undefined'){
            company_index = company_index.toLowerCase();
        }else if(ENVIRONMENT === 'development' && COMPANY_LIST.includes(company_index.toLowerCase())){
            company_index = company_index.toLowerCase();
        }
    }else if(typeof req.params.company_index !== 'undefined'){
        company_index = req.params.company_index.toLowerCase();
    }
    

    if(typeof prismaClient[company_index] === 'undefined'){
        console.log('COMPANY_LIST', COMPANY_LIST);
        return  res.status(400).json({ error: 'Invalid company or client id' });
    }

    
    console.log('isPrismaClient', typeof prismaClient[company_index]);
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

        const daftarSupplier = await prismaClient[company_index].$queryRaw`SELECT id, kode, nama FROM nd_supplier`;
        
        const penerimaan = await prismaClient[company_index].$queryRaw`
            SELECT nd_penerimaan_barang.id, tanggal_input, no_plat, penerimaan_barang_id, supplier_id, 
            no_penerimaan_lengkap as no_penerimaan
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
                tSKU.nama_barang as nama_barang, sum(qty) as qty, sum(jumlah_roll) as jumlah_roll, penerimaan_barang_id,
                tBarang.barang_id_toko
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
            WHERE pembelian.penerimaan_barang_id IS NOT NULL
            AND qty IS NOT NULL
            GROUP BY barang_sku_id, penerimaan_barang_id
            ORDER BY nama_barang
        `;
        

        const barangMap = new Map();
        daftarBarang.forEach((barang) => {
            const penerimaanId = barang.penerimaan_barang_id;
            if (!barangMap.has(penerimaanId)) {
                barangMap.set(penerimaanId, []);
            }
            barangMap.get(penerimaanId).push(barang);
        });

        const supplierMap = new Map();
        daftarSupplier.forEach((supplier) => {
            supplierMap.set(supplier.id, supplier);
        });

        penerimaanBarang = penerimaan.map((penerimaanItem) => {
            return {
                ...penerimaanItem,
                supplier: supplierMap.get(penerimaanItem.supplier_id) || null,
                daftarBarang: barangMap.get(penerimaanItem.penerimaan_barang_id) || []
            };
            
        });


        /* penerimaanData = penerimaan.map((penerimaan) => {
            const supplier = daftarSupplier.find(supplier => supplier.id === penerimaan.supplier_id);
            return {
                ...penerimaan,
                supplier: supplier ? supplier : null
            };
        });
        
        penerimaanBarang = penerimaan.map((penerimaan) => {
            const barangList = daftarBarang.filter(
            (barang) => barang.penerimaan_barang_id === penerimaan.penerimaan_barang_id
            );
            return {
            ...penerimaanData,
            daftarBarang: barangList,
            };
        }); */

        
        res.json({
            success: true,
            data: { penerimaanBarang }
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
            SELECT tanggal_input, no_plat, id as penerimaan_barang_id, no_penerimaan_lengkap as no_penerimaan
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

app.get('/nd_penerimaan_barang_status/:company_index', async (req, res) => {
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

        const respond = await prismaClient[company_index].nd_penerimaan_barang_status.findMany({
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
    console.log('penerimaan_barang_update_status called');
    const { id, status_penerimaan } = req.body.params;
    let company_index ='';
    
    try {
        if(ENVIRONMENT !== 'test' && ENVIRONMENT !== 'staging'){
            company_index = (req.params.company_index);
        }else{
            company_index = req.params.company_index.toLowerCase();
        }

        if(status_penerimaan === '' || typeof status_penerimaan === 'undefined'){
            // res.status(400).json({ error: 'Status is required' });
            // throw new Error('Status is required');
            console.error('Status is required');
            res.json({
                success: false,
                message: 'Status is required',
            });
            return;
        }

        if(status_penerimaan === 'SUDAH_KONFIRMASI'){
            // res.status(403).json({ error: 'Status SUDAH_KONFIRMASI dilakukan oleh admin/akunting' });
            // throw new Error('Update Status SUDAH_KONFIRMASI hanya oleh admin/akunting');
            console.error('Update Status SUDAH_KONFIRMASI hanya oleh admin/akunting');
            res.json({
                success: false,
                message: 'Update Status SUDAH_KONFIRMASI hanya oleh admin/akunting',
            });
            return;
        }

        const getLastStatus = await prismaClient[company_index].nd_penerimaan_barang_status.findFirst({
            where: {
                penerimaan_barang_id: parseInt(id)
            },
            orderBy: {
                id: 'desc'
            }
        });

        if(getLastStatus && getLastStatus.status_penerimaan === status_penerimaan){
            // res.status(400).json({ error: `Status is already ${status_penerimaan}` });
            // throw new Error(`Status is already ${status_penerimaan}`);
            console.error(`Status is already ${status_penerimaan}`);
            res.json({
                success: false,
                message: `Status is already ${status_penerimaan}`,
            });
            return;
        }

        await prismaClient[company_index].nd_penerimaan_barang_status.create({
            data: {
                penerimaan_barang_id: parseInt(id),
                status_penerimaan: status_penerimaan
            }
        });

        res.json({
            success: true,
            message: `Status updated to ${status_penerimaan} successfully`,
        });

        
    } catch (error) {
        console.error('Error fetching penerimaan barang status', error);
        res.status(500).json({ error: 'An error occurred while fetching barang status' });
    }
});

app.put('/verifikasi_penerimaan_barang/:company_index', async (req, res) => {
    console.log('verifikasi_penerimaan_barang called');
    const { id, daftar_barang } = req.body.params;
    let company_index ='';
    
    try {
        if(ENVIRONMENT !== 'test' && ENVIRONMENT !== 'staging'){
            company_index = (req.params.company_index);
        }else{
            company_index = req.params.company_index.toLowerCase();
        }

        const getLastStatus = await prismaClient[company_index].nd_penerimaan_barang_status.findFirst({
            where: {
                penerimaan_barang_id: parseInt(id)
            },
            orderBy: {
                id: 'desc'
            }
        });

        const status_penerimaan = getLastStatus?.status_penerimaan;


        if(status_penerimaan === 'MENUNGGU_INPUT_AKUNTING'){
            console.log('Masih dalam proses input oleh akunting');
            res.json({
                success: false,
                message: 'Masih dalam proses input oleh akunting',
            });
            return;
        }else if(status_penerimaan !== 'MENUNGGU_DATA_GUDANG'){
            // res.status(403).json({ error: 'Status SUDAH_KONFIRMASI dilakukan oleh admin/akunting' });
            // throw new Error('Update Status SUDAH_KONFIRMASI hanya oleh admin/akunting');
            console.error('Status ');
            res.json({
                success: false,
                message: 'Status saat ini '+status_penerimaan+', tidak bisa diverifikasi gudang',
            });
            return;
        }else{

            if (!daftar_barang || !Array.isArray(daftar_barang) || daftar_barang.length === 0) {
                res.json({
                    success: false,
                    message: 'daftar_barang is required and must be a non-empty array',
                });
                return;
            }

            const daftarBarang = await prismaClient[company_index].$queryRaw`
                SELECT no_plat, pB.id as penerimaan_barang_id, 
                    tSKU.barang_sku_id as barang_sku_id, tSKU.barang_id_master as barang_id, tSKU.warna_id_master as warna_id,
                    tSKU.satuan_id_master as satuan_id, tSKU.nama_barang, sum(pD.qty * pD.jumlah_roll) as qty, sum(pD.jumlah_roll) as jumlah_roll
                FROM (
                    SELECT *
                    FROM nd_penerimaan_barang
                    WHERE id = ${parseInt(id)}
                ) pB
                LEFT JOIN nd_pembelian p ON p.penerimaan_barang_id = pB.id
                LEFT JOIN nd_pembelian_detail pD ON p.id = pD.pembelian_id
                LEFT JOIN nd_master_toko_barang tBarang ON pD.barang_id = tBarang.barang_id_toko
                LEFT JOIN nd_master_toko_warna tWarna ON pD.warna_id = tWarna.warna_id_toko
                LEFT JOIN nd_master_barang_sku tSKU ON tBarang.barang_id_master = tSKU.barang_id_master
                    AND tWarna.warna_id_master = tSKU.warna_id_master
                    WHERE pD.qty IS NOT NULL
                    GROUP BY tSKU.id
            `;

            let isVerified = true;
            // compare daftar_barang with daftarBarang
            for (const item of daftar_barang) {
                const matchedItem = daftarBarang.find(
                    (dbItem) => dbItem.barang_sku_id === item.barang_sku_id
                );
                if (!matchedItem) {
                    isVerified = false;
                    break;
                }
                if (matchedItem.qty !== item.qty || matchedItem.jumlah_roll !== item.jumlah_roll) {
                    isVerified = false;
                    break;
                }
            }

            if (!isVerified) {
                res.json({
                    success: false,
                    message: 'Data barang tidak sesuai dengan penerimaan barang',
                    unmatchedData: {
                        erpItems : daftarBarang,
                        inputItems: daftar_barang
                    }
                });
                return;
            }
            
        }

        if(isVerified){
            await prismaClient[company_index].nd_penerimaan_barang_status.create({
                data: {
                    penerimaan_barang_id: parseInt(id),
                    status_penerimaan: "SUDAH_KONFIRMASI"
                }
            });
        }


        res.json({
            success: true,
            message: `Status updated to ${status_penerimaan} successfully`,
        });

        
    } catch (error) {
        console.error('Error fetching penerimaan barang status', error);
        res.status(500).json({ error: 'An error occurred while fetching barang status' });
    }
});

//==========================mutasi barang====================================

app.post('/mutasi_barang_keluar/:company_index', async (req, res) => {
    const { barang_sku_id, barcode_id, qty, tanggal, gudang_id_tujuan } = req.body;

    let company_index ='';
    if(ENVIRONMENT !== 'test' && ENVIRONMENT !== 'staging'){
        company_index = req.params.company_index;
    }else{
        company_index = req.params.company_index.toLowerCase();
    }

    if(company_index === ''){
        return res.status(400).json({ error: 'Company index is required' });
    }

    if(!barang_sku_id || !barcode_id || !qty || !tanggal || !gudang_id_tujuan){
        return res.status(400).json({ error: 'barang_sku_id, sku_id, qty, tanggal_mutasi, gudang_id_asal, gudang_id_tujuan (tujuan) are required' });
    }

});




//==========================middleware====================================

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