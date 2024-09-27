import express from 'express';
import { generatePrismaClient } from './prisma-client.js';
import cors from "cors";
import { checkMemoryUsage } from './check-memory-usage.js';

const app = express();

const allowedOrigins = ['http://202.138.247.174'];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin) {
            callback(new Error('Origin is undefined. Not allowed by CORS'));
        } else if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/customers', async (req, res) => {
    console.log('get all customer');
    try {
        const customers = await prismaClient.customer.findMany();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching customers' });
    }
});

app.get('/customer/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const customers = await prismaClient.customer.findUnique({
            where: {
                id: id
            }
        });
        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching customers' });
    }
});

app.get('/customers/verified_by_pajak', async (req, res) => {

    const company = ["favour", "blessing", "grace"];
    const prismaClient = generatePrismaClient(company);

    const tgl_awal = new Date('2023-10-09');
    const customers = {};

    for (const list of company) {
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
