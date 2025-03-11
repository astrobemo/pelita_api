import { connect } from "amqplib";
import { prismaClient } from "../prisma-client.js"
import axios from "axios";
import { getAuthToken, isTokenValid, authToken } from "../helpers/getAuthentication.js";

import { COMPANY as COMPANY_ALL, RABBITMQ_URL, RABBITMQ_USER, RABBITMQ_PASSWORD, RABBITMQ_PORT, NODE1_URL, AUTH_URL, API_KEY } from "../../config/loadEnv.js";

const COMPANY = COMPANY_ALL.split(',');
const rabbitMqUrl = RABBITMQ_URL;
const rabbitMqUser = RABBITMQ_USER;
const rabbitMqPassword = RABBITMQ_PASSWORD;
const rabbitMqPort = RABBITMQ_PORT;
const nodeUrl = NODE1_URL;

const authUrl = AUTH_URL;
const apiKey = API_KEY;

// console.log(rabbitMqUrl, rabbitMqUser, rabbitMqPassword);
const rabbitMqParam = [rabbitMqUrl, rabbitMqUser, rabbitMqPassword, rabbitMqPort];

let channel;
const connection =  await connect(`amqp://${rabbitMqUser}:${rabbitMqPassword}@${rabbitMqUrl}:${rabbitMqPort}/master`).catch((err) => {
    console.error('connection error', err);
});

if(connection){
    channel = await connection.createChannel();
}

const consumeMessages = async () => {
    const queue = 'your_queue_name';

    await channel.assertQueue(queue, { durable: true });

    channel.consume(queue, async (msg) => {
        if (msg !== null) {
            const messageContent = msg.content.toString();
            console.log("Received message:", messageContent);

            // Process the message here

            channel.ack(msg);
        }
    });
}

export { consumeMessages, rabbitMqParam };

// await channel.close();
// await connection.close();
