import { connect } from "amqplib";
import dotenv from "dotenv";
import e from "express";
dotenv.config({ path: `../../.env` });

const rabbitMqUrl = process.env.RABBITMQ_URL;
const rabbitMqUser = process.env.RABBITMQ_USER;
const rabbitMqPassword = process.env.RABBITMQ_PASSWORD;

const connection =  await connect(`amqp://${rabbitMqUser}:${rabbitMqPassword}@${rabbitMqUrl}:5672/master`);
const channel = await connection.createChannel();

for (let i = 0; i < 2; i++) {
    // channel.publish(exchange, routingKey, content, options);
    channel.publish('customer_legacy_events', 'customer_legacy.choosen',Buffer.from(`new insert to id:1`));
}

await channel.close();
await connection.close();