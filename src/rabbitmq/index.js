import { consumeMessages as consumeCustomer, rabbitMqParam } from "./customer_consumer.js";

console.log(rabbitMqParam);
const consumersApp = async () => {
    await consumeCustomer();
    console.log('Consumer is running');
}

export { consumersApp };
