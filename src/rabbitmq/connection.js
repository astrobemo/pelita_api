import { connect } from "amqplib";
import { rabbitMqUrl, rabbitMqUser, rabbitMqPassword } from "../../config/rabbitmqConfig";

console.log('rmq', rabbitMqUrl, rabbitMqUser, rabbitMqPassword);

let channel = null;
let confirmChannel = null;
let connection = null;

const initializeRabbitMQ = async () => {
    try {
        if (!connection) {
            console.log('param status', rabbitMqUrl, rabbitMqUser, rabbitMqPassword);
            connection = await connect(`amqp://${rabbitMqUser}:${rabbitMqPassword}@${rabbitMqUrl}:5672/master`);

            connection.on('error', async (err) => {
                console.error('Connection error:', err);

                if (err.message !== "Connection closing") {
                    connection = null;
                    channel = null;
                    confirmChannel = null;

                    setTimeout(async () => {
                        console.log('Reconnecting to RabbitMQ...');
                        await initializeRabbitMQ();
                    }, 2000); // Retry after 1 second
                }
            });

            connection.on("close", async () => {
                console.warn("RabbitMQ connection closed. Reconnecting...");

                connection = null;
                channel = null;
                confirmChannel = null;

                setTimeout(async () => {
                    console.log('Reconnecting to RabbitMQ...');
                    await initializeRabbitMQ();
                }, 2000); // Retry after 1 second
            });
        }
        console.log('Connected to RabbitMQ');
    } catch (error) {
        console.error('Connection Failed', error.message);
        throw error;
    }
};

export const getRabbitMQ = async () => {
    console.log('Getting RabbitMQ connection...');
    if (!connection) {
        await initializeRabbitMQ();
    }

    if (!channel) {
        channel = await connection.createChannel();
    }
    if (!confirmChannel) {
        confirmChannel = await connection.createConfirmChannel();
    }

    return { channel, confirmChannel, connection };
};