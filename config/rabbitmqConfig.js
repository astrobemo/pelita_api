import dotenv from "dotenv";

dotenv.config({ path: `../../.env` });

export const rabbitMqUrl = process.env.RABBITMQ_URL;
export const rabbitMqUser = process.env.RABBITMQ_USER;
export const rabbitMqPassword = process.env.RABBITMQ_PASSWORD;
