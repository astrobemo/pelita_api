import { PrismaClient } from "@prisma/client"
import dotenv from 'dotenv';

dotenv.config();
const prismaClient = {};
const COMPANY = process.env.COMPANY.split(',');

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

COMPANY.forEach((value) => {
    prismaClient[value.toLowerCase()] = newClient(value);
});

export { prismaClient };