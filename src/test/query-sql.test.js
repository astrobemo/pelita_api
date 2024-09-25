import { prismaClient } from "../prisma-client.js";

describe("Prisma Client", () => {
    it("should be able to query SQL", async () => {
        const customers = await prismaClient.$queryRaw`SELECT * FROM nd_customer`;
        
        console.info(customers);
    });
}); 