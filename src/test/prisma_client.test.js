import { PrismaClient } from "@prisma/client";

describe("PrismaClient", () => {
    it(`should be able to connect to the database`, async () => {
        const prisma = new PrismaClient();

        // do something
        await prisma.$connect();
        await prisma.$disconnect();
    });
});