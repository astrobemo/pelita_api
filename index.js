import app from "./src/main.js";
import dotenv from 'dotenv';
import { consumersApp } from "./src/rabbitmq/index.js";

const ENVIRONMENT = process.env.NODE_ENV || 'development';
console.log(`Environment: ${ENVIRONMENT}`);
dotenv.config({ path: `./.env.${ENVIRONMENT}` });
const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Server is running ${ENVIRONMENT} on http://localhost:${port}`);
});

consumersApp();