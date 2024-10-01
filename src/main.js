import express from 'express';
import { prismaClient } from './prisma-client.js';
import { checkMemoryUsage } from './check-memory-usage.js';
import { expressjwt } from "express-jwt";
import cors from "cors";
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ENVIRONMENT = process.env.ENVIRONMENT;
dotenv.config({ path: `./.env.${ENVIRONMENT}` });
const secret = process.env.TOKEN_SECRET || 'development';

process.env.TZ = 'UTC';

const app = express();

const COMPANY = ["favour", "blessing", "grace"];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const swaggerDocument = fs.readFileSync(path.join(__dirname, '../pelita_api.json'), 'utf8');


app.use('/api-docs', 
    swaggerUi.serve, swaggerUi.setup(JSON.parse(swaggerDocument))
);

app.use(expressjwt({
    secret: secret,
    algorithms: ['HS256']
}).unless({
    path:['/hello','/api-docs']
}));

// Read allowed IPs from environment variable and split into an array
const allowedIPs = process.env.ALLOWED_IPS.split(',');

const corsOptions = {
    
    origin: function (origin, callback) {
        if (allowedIPs.includes(origin) || !origin) {
            console.log('origin success', origin);
            callback(null, true);
        } else {
            console.log('origin denied', origin);
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
};  

app.options('*', cors());

app.use(cors(corsOptions));

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
        next();
    } else {    
        res.status(403).send({error: 'Access restricted'});
    }
}

app.use(ipFilter);


app.get('/testing', (req, res) => {
    res.send('Testing World!');
});

/* app.get('/customers/all', async (req, res) => {
    console.log('get all customer');
    const customers = {}
    try {
        for (const company of COMPANY) {
            console.log('company', company);
            const limit = parseInt(req.query.limit) || 10; // Default limit to 10 if not provided
            const offset = parseInt(req.query.offset) || 0; // Default offset to 0 if not provided

            customers[company] = await prismaClient[company].customer.findMany({
                take: limit,
                skip: offset
            });
        }
        checkMemoryUsage();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching customers' });
    }
}); */

app.get('/customers/sudah_verifikasi_oleh_pajak', async (req, res) => {
    console.log('get customer verified by pajak');

    const tgl_awal = new Date('2023-10-09');
    const customers = {};

    const { page = 1, limit = 10 } = req.query; // Default to page 1 and limit 10
    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);

    for (const list of COMPANY) {
        const companyIndex = COMPANY.indexOf(list);
        const company = list.toLowerCase();
        const aggeratedCustomer = await prismaClient[company].rekam_faktur_pajak_detail.groupBy({
            by: ['customer_id'],
            _max: {
                tanggal:true
            },
            where:{
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
                }
            },
        });
    };

    const groupedCustomers = new Map();
    Object.entries(customers).forEach(([company, companyCustomers]) => {
        companyCustomers.forEach(customer => {
            const npwp = customer.npwp;
            const nik = customer.nik;
            const nKey = npwp || nik;
            if(!groupedCustomers.has(nKey)){
                groupedCustomers.set(nKey, []);
            }

            groupedCustomers.get(nKey).push({
                company,
                customerIndex: COMPANY.indexOf(company),
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

app.get('/customers/:company_index', async (req, res) => {
    console.log('get customer by company index');
    const company_index = parseInt(req.params.company_index);
    console.log('company_index', company_index);

    try {
        const { page = 1, limit = 10, orderByField = ['nama'], orderDirection = 'asc' } = req.query; // Default to page 1 and limit 10
        const pageNumber = parseInt(page, 10);
        const pageSize = parseInt(limit, 10);
        const orderByFieldList = orderByField ;
        const orderDirectionList = orderDirection;


        const customers = await prismaClient[COMPANY[company_index]].customer.findMany({
            skip: (pageNumber - 1) * pageSize, // Calculate skip
            take: pageSize,
            [orderByFieldList]: orderDirectionList,
        });

        const totalCount = await prismaClient[COMPANY[company_index]].customer.count();
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

app.get('/customer/:company_index/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const company_index = parseInt(req.params.company_index);
    try {
        const customers = await prismaClient.customer.findUnique({
            where: {
                company_index: company_index,
                id: id
            }
        });
        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching customers' });
    }
});



// Error handling middleware
app.use((err, req, res, next) => {
    if (err) {
        /* console.log(`${req.method} ${req.url}`);
        console.log('TOKEN_SECRET:', secret);
        console.log('Authorization Header:', req.headers.authorization); */    
        res.status(403).send(` errors: ${err.message}`);
        
    } else {
        next();
    }
});


export default app;

/* app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); */
