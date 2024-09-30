import express from 'express';
import { prismaClient } from './prisma-client.js';
import { checkMemoryUsage } from './check-memory-usage.js';
import { expressjwt } from "express-jwt";
import cors from "cors";
import dotenv from 'dotenv';


const ENVIRONMENT = process.env.ENVIRONMENT;
dotenv.config({ path: `./.env.${ENVIRONMENT}` });
const secret = process.env.TOKEN_SECRET;

const app = express();

const COMPANY = ["favour", "blessing", "grace"];

app.use(expressjwt({
    secret: secret,
    algorithms: ['HS256']
}).unless({
    path:['/hello']
}));

const allowedOrigins = ['http://202.138.247.174', 'http://localhost'];

const corsOptions = {
    
    origin: function (origin, callback) {
        if (origin === 'http://localhost') {
            console.log('Request from localhost');
        }

        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            console.log('origin', origin);
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
};  

app.options('*', cors());

app.use(cors(corsOptions));

app.get('/hello', (req, res) => {
    const origin = req.get('origin');
    const allowedIPs = [`127.0.0.1`,'::1', `::ffff:127.0.0.1`];
    const clientIP = req.headers.origin || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    
    const hostname = req.headers.origin ? new URL(req.headers.origin).hostname : '';

    console.log('Origin:', origin);
    console.log('if !Origin:', !origin);
    console.log('ClientIp:', clientIP);
    console.log("allowedIPs", allowedOrigins.indexOf(origin));
    console.log('Hostname:', hostname);
    res.send('Hello World!');
});

app.get('/customers/all', async (req, res) => {
    console.log('get all customer');
    const customers = {}
    try {
        for (const company of COMPANY) {
            console.log('company', company);
            customers[company] = await prismaClient[company].customer.findMany();
        }
        checkMemoryUsage();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching customers' });
    }
});

app.get('/customers/verified_by_pajak', async (req, res) => {
    console.log('get customer verified by pajak');

    const tgl_awal = new Date('2023-10-09');
    const customers = {};

    for (const list of COMPANY) {
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
                ...customer
            });
        });
    });
    
    checkMemoryUsage();
    
    const result = Object.fromEntries(groupedCustomers);
    res.json(result);

    
});

app.get('/customers/:company_index', async (req, res) => {
    console.log('get customer by company index');
    const company_index = parseInt(req.params.company_index);
    console.log('company_index', company_index);

    try {
        const customers = await prismaClient[COMPANY[company_index]].customer.findMany();
        console.log(customers);
        res.json(customers);
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
        res.status(403).send('Not allowed by CORS');
    } else {
        next();
    }
});


export default app;

/* app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); */
