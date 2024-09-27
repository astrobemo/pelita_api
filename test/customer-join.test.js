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

        for (const customer of customers) {
            console.table(customer);
        }

        const groupedCustomers = new Map();
        Object.entries(customers).forEach(([company, companyCustomers]) => {
            companyCustomers.forEach(customer => {
                const {npwp,nik} = {customer};
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

        const result = Object.fromEntries(groupedCustomers);

        

        checkMemoryUsage();        

        // const rekam_faktur_pajak2 = await prismaClient.rekam_faktur_pajak_detail.find

    });
});