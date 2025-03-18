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
    const queue = 'pairing_sku_master_toko';

    await channel.assertQueue(queue, { durable: true });

    channel.consume(queue, async (msg) => {
        if (msg !== null) {
            const messageContent = msg.content.toString();
            console.log("Received message:", messageContent);
            // validate if barang_id and warna_id is known

            try {
                const barangSKU = JSON.parse(messageContent);
                const company = barangSKU.company;
                const barangId = barangSKU.barang_id;
                const warnaId = barangSKU.warna_id;

                const existingBarang = await prismaClient[COMPANY[company]].findMany({
                    where: {
                        barang_id_master: barangId
                    }
                });

                if(existingBarang.length === 0){
                    console.log("Barang not found");
                    channel.nack(msg);
                    return;
                }

                if(existingBarang[0].warna_id_master !== warnaId){
                    console.log("Warna not found");
                    channel.nack(msg);
                    return;
                }

            } catch (error) {
                console.error("Error:", error);
                channel.ack(msg);
                return;
                
            }
        }
    });
}

export { consumeMessages, rabbitMqParam };

// await channel.close();
// await connection.close();
