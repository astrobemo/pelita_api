import { PrismaClient } from "@prisma/client"

const company = ["Favour", "Blessing", "Grace"];
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

company.forEach((value) => {
    prismaClient[value.toLowerCase()] = newClient(value);
});

export { prismaClient };