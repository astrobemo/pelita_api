import { generatePrismaClient } from "../src/prisma-client.js";

const checkMemoryUsage = () => {
    const used = process.memoryUsage();
    const heapUsed = used.heapUsed / 1024 / 1024;
    const heapTotal = used.heapTotal / 1024 / 1024;
    console.log(`Heap Used: ${heapUsed.toFixed(2)} MB`);
    console.log(`Heap Total: ${heapTotal.toFixed(2)} MB`);

    if (heapUsed > 100) { // Example threshold of 100 MB
        console.warn('Memory usage is high!');
    }
};

describe("Prisma Client aggregate ", () => {
    it("Test groupby", async () => {
        checkMemoryUsage();

        const company = ["Favour", "Blessing", "Grace"];
        const prismaClient = generatePrismaClient(company);

        const tgl_awal = new Date('2023-10-09');
        customers = [];

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
            customers[company] = await prismaClient[key].customer.findMany({
                where: {
                    id: {
                        in: customerIds
                    }
                },
            });
        };

        console.table(customers);

        checkMemoryUsage();
        

        // const rekam_faktur_pajak2 = await prismaClient.rekam_faktur_pajak_detail.find

    });
});