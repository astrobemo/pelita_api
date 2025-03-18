import { connect } from "amqplib";
import dotenv from "dotenv";
import { prismaClient } from "../prisma-client";

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

channel.consume("add_barang_master_toko", async (msg) => {
    if (msg !== null) {
        const messageContent = msg.content.toString();
        console.log("Received message:", messageContent);
        // validate if barang_id and warna_id is known

        try {
            const company = barangSKU.company;
            const barangId = barangSKU.barang_id;
            
            const existingBarang = await prismaClient[COMPANY[company]].findMany({
                where: {
                    barang_id_master: barangId
                }
            });

            if(existingBarang.length === 0){
                
                await prismaClient[COMPANY[company]].create({
                    data: {
                        barang_id_master: barangId
                    }
                });
                return;
            }

            channel.ack(msg);

        } catch (error) {
            console.error(error);
            channel.nack(msg);
        }
    }
});