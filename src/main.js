import express from 'express';
import { prismaClientFavour, prismaClientBlessing, prismaClientGrace } from "./prisma-client.js";
import cors from "cors";


const app = express();

const allowedOrigins = ['http://202.138.247.174'];

const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
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

    const company = ["Favour", "Blessing", "Grace"];

    company.forEach((value) => {
        
    });

    const aggeratedCustomer = await prismaClientFavour.rekam_faktur_pajak_detail.groupBy({
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

    const customerIds = aggeratedCustomer.map((item) => item.customer_id);
    const customers = await prismaClientFavour.customer.findMany({
        where: {
            id: {
                in: customerIds
            }
        },
    });
});


export default app;

/* app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); */
