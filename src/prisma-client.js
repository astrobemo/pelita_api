import { PrismaClient } from "@prisma/client"
import { COMPANY, ENVIRONMENT } from "./config/loadEnv.js";

const isProd = ENVIRONMENT === 'production' ? true : false;
const logLevels = isProd ? ['error', 'warn'] : ['query', 'info', 'warn', 'error'];

const prismaClient = {};
function newClient(company) {

    const dbUrlKey = `DATABASE_URL_${company.toUpperCase()}`;

    if (!process.env[dbUrlKey]) {
        throw new Error(`DATABASE_URL_${company.toUpperCase()} is not defined in the environment variables`);
    }

    return new PrismaClient({
        datasources: {
            db: {
                url: process.env[dbUrlKey],
            },
        },
        errorFormat: "pretty",
        log: logLevels
    });
}

COMPANY.forEach((value) => {
    prismaClient[value.toLowerCase()] = newClient(value);
});


const gracefulShutdown = async () => {
    console.log('Closing Prisma Client connections...');
    for (const client of Object.values(prismaClient)) {
        await client.$disconnect();
    }
    console.log('All Prisma Client connections closed.');
};

process.on('beforeExit', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);

export { prismaClient };