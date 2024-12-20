import { consumeMessages as consumeCustomer, rabbitMqParam } from "./customer_consumer.js";

const consumersApp = async () => {
    console.log('params',rabbitMqParam);
    await consumeCustomer();
    console.log('Consumer is running');
}

export { consumersApp };
