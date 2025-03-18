import { consumeMessages as consumeCustomer } from "./customer_consumer.js";

const consumersApp = async () => {
    await consumeCustomer();
    console.log('Consumer is running');
}

export { consumersApp };
