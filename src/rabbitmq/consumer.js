import { connect } from "amqplib";
import dotenv from "dotenv";

dotenv.config({ path: `../../.env` });

const rabbitMqUrl = process.env.RABBITMQ_URL;
const rabbitMqUser = process.env.RABBITMQ_USER;
const rabbitMqPassword = process.env.RABBITMQ_PASSWORD;

console.log(rabbitMqUrl, rabbitMqUser, rabbitMqPassword);

const connection =  await connect(`amqp://${rabbitMqUser}:${rabbitMqPassword}@${rabbitMqUrl}:5672/`);
const channel = await connection.createChannel();

await channel.consume("webapp_notif", (message) => {
    console.info(message.fields.routingKey);
    // console.info(message);
    console.log('Received message:', message.content.toString());
}, { noAck: true });

// await channel.close();
// await connection.close();
