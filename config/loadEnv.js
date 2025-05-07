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

// Add these debug logs at the top of the file
console.log('Initial NODE_ENV:', process.env.NODE_ENV);
console.log('Initial ENV_FILE:', process.env.ENV_FILE);

// After loading dotenv
const envFile = process.env.ENV_FILE || `.env.${process.env.NODE_ENV}`;
const envConfig = dotenv.config({ path: path.resolve(__dirname, `../.env.${ENVIRONMENT}`) });
console.log('Loaded env file path:', path.resolve(__dirname, `../.env.${ENVIRONMENT}`));
console.log('Environment after load:', ENVIRONMENT);


console.log('Loading environment file:', envFile);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('ENV_FILE:', process.env.ENV_FILE);

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
export const PORT = process.env.PORT;

export const TRUSTED_ORIGINS = process.env.TRUSTED_ORIGINS;
export const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS;
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

export const DATABASE_URL = process.env.DATABASE_URL;
<<<<<<< HEAD
=======

console.log(LIFETIME, TOKENSECRET, COMPANY, PORT_APP, PORT_GATEWAY, ENVIRONMENT, API_KEY, MACHINE_URL, DATABASE_URL);

>>>>>>> a2639147d34b5a1f55fecc0734a840a96c0e03c3

console.log(LIFETIME, TOKENSECRET, COMPANY, PORT_APP, PORT_GATEWAY, ENVIRONMENT, API_KEY, MACHINE_URL, DATABASE_URL);