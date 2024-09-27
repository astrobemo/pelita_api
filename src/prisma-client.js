import { PrismaClient } from "@prisma/client"

const prismaClient = {};

function newClient(company) {
    return new PrismaClient({
        datasources: {
            db: {
                url: process.env[`DATABASE_URL_${company.toUpperCase()}`],
            },
        },
        errorFormat: "pretty",
        log: ["query", "info", "error", "warn"]
    });
}

function generatePrismaClient(company) {
    company.forEach((value) => {
        prismaClient[value.toLowerCase()] = newClient(value);
    });

    return prismaClient;

}

export { generatePrismaClient };