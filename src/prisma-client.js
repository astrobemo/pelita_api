import { PrismaClient } from "@prisma/client"
import dotenv from 'dotenv';
import path from "path";
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ENVIRONMENT = process.env.NODE_ENV;

dotenv.config({ path: path.resolve(__dirname, `../.env.${ENVIRONMENT}`) });
const COMPANY = process.env.COMPANY.split(',');

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

COMPANY.forEach((value) => {
    prismaClient[value.toLowerCase()] = newClient(value);
});

export { prismaClient };