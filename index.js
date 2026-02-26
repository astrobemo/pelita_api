import app from "./src/main.js";
import { ENVIRONMENT, PORT } from "./config/loadEnv.js";
import { consumersApp } from "./src/rabbitmq/index.js";
import { startPembayaranCron } from "./src/cron/get-pembayaran-data.js";

console.log(`Environment: ${ENVIRONMENT}`);
const port = PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running ${ENVIRONMENT} on http://localhost:${port}`);
});

consumersApp();
startPembayaranCron();