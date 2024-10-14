import { connect } from "amqplib";
import dotenv from "dotenv";

dotenv.config({ path: `../../.env` });

const rabbitMqUrl = process.env.RABBITMQ_URL;
const rabbitMqUser = process.env.RABBITMQ_USER;
const rabbitMqPassword = process.env.RABBITMQ_PASSWORD;

console.log(rabbitMqUrl, rabbitMqUser, rabbitMqPassword);

const connection =  await connect(`amqp://${rabbitMqUser}:${rabbitMqPassword}@${rabbitMqUrl}:5672/master`);
const channel = await connection.createChannel();

/* await channel.consume(queuenName, (message) => {
    console.info(message.fields.routingKey);
    // console.info(message);
    console.log('Received message:', message.content.toString());
}, { noAck: true }); */

await channel.consume("customer_legacy_que", (msg) => {
    console.info(msg.fields);
    console.info(msg.properties);
    const event = msg.fields.routingKey;
    console.log(event);
    switch (event) {
        case 'customer.chosen':
            const data = (msg.content.toString());
            const cust = JSON.parse(data);
            console.log(cust.original_id);
            break;
        case 'customer.updated':
            console.log('customer has been Updated');
            console.log('Received message:', msg.content.toString());
            break;
        default:
            break;
    }
}, { noAck: true });

// await channel.close();
// await connection.close();
