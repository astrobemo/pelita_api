import dotenv from "dotenv";

import path from "path";
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/*if (fs.existsSync(envFile)) {
  dotenv.config({ path: path.resolve(__dirname, '../'+envFile) });
  console.log(`Loaded environment variables from ${envFile}`);
} else {
  console.warn(`Environment file ${envFile} not found.`);
}*/


// Your application logic starts here

export const ENVIRONMENT = process.env.NODE_ENV;
const envConfig = dotenv.config({ path: path.resolve(__dirname, `../.env.${ENVIRONMENT}`) });

if(envConfig.error) {
    throw new Error(`Failed to load environment variables: ${envConfig.error}`);
}else{
    console.log(`Loaded environment variables from .env.${ENVIRONMENT}`);
}

export const LIFETIME = process.env.TOKEN_LIFETIME;
export const TOKENSECRET = process.env.TOKEN_SECRET;
export const FRONTEND_URL = process.env.FRONTEND_URL;
export const PORT_APP = process.env.PORT_APP;
export const PORT_GATEWAY = process.env.PORT_GATEWAY;

export const TRUSTED_ORIGINS = process.env.TRUSTED_ORIGINS;
export const ALLOWED_IPS = process.env.ALLOWED_IPS;
export const NODE1_URL = process.env.NODE1_URL;

export const RABBITMQ_URL = process.env.RABBITMQ_URL;
export const RABBITMQ_USER = process.env.RABBITMQ_USER;
export const RABBITMQ_PASSWORD = process.env.RABBITMQ_PASSWORD;
export const RABBITMQ_PORT = process.env.RABBITMQ_PORT;

export const API_KEY = process.env.API_KEY;
export const PORT_AUTH = process.env.PORT_AUTH;
export const MACHINE_URL = process.env.MACHINE_URL;

export const AUTH_URL = process.env.AUTH_URL;
export const COMPANY = process.env.COMPANY;

console.log(LIFETIME, TOKENSECRET, COMPANY, PORT_APP, PORT_GATEWAY, ENVIRONMENT, API_KEY, MACHINE_URL);


