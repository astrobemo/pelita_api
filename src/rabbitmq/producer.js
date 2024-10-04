import { connect } from "amqplib";
import dotenv from "dotenv";
dotenv.config({ path: `../../.env` });

const rabbitMqUrl = process.env.RABBITMQ_URL;
const rabbitMqUser = process.env.RABBITMQ_USER;
const rabbitMqPassword = process.env.RABBITMQ_PASSWORD;

const connection =  await connect(`amqp://${rabbitMqUser}:${rabbitMqPassword}@${rabbitMqUrl}:5672/`);
const channel = await connection.createChannel();

for (let i = 0; i < 10; i++) {
    channel.publish('notification', 'pa_webapp_notif', Buffer.from(`Hello World ${i}`),{
        headers: {
            "sample":"value"
        }
    });
}

await channel.close();
await connection.close();