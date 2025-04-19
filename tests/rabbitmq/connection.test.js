import { describe, it, expect, vi, beforeEach } from "vitest";
import { getRabbitMQ } from "../../src/rabbitmq/connection";

// Mock rabbitmqConfig
vi.mock("../../src/config/rabbitmqConfig", () => ({
    rabbitMqUrl: "localhost",
    rabbitMqUser: "my_user",
    rabbitMqPassword: "my_password",
}));

// Mock amqplib
vi.mock("amqplib", () => ({
    connect: vi.fn(() => ({
        createChannel: vi.fn(() => ({
            consume: vi.fn((queue, callback, options) => {
                const mockMessage = {
                    fields: { routingKey: "test.key" },
                    content: Buffer.from("Test message"),
                };
                callback(mockMessage);
            }),
        })),
        createConfirmChannel: vi.fn(() => ({})),
        on: vi.fn(),
    })),
}));

let mockConnection, mockChannel, mockConfirmChannel;

describe("RabbitMQ Connection", () => {
    it("should initialize and return RabbitMQ connection, channel, and confirmChannel", async () => {
        const result = await getRabbitMQ();

        expect(result.connection).toBeDefined();
        expect(result.channel).toBeDefined();
        expect(result.confirmChannel).toBeDefined();

        expect(result.connection.createChannel).toHaveBeenCalled();
        expect(result.connection.createConfirmChannel).toHaveBeenCalled();
    });

    it("should consume messages from the channel", async () => {
        const { channel } = await getRabbitMQ();

        const consumeSpy = vi.spyOn(channel, "consume");

        channel.consume("webapp_notif", (message) => {
            expect(message.fields.routingKey).toBe("test.key");
            expect(message.content.toString()).toBe("Test message");
        }, { noAck: true });

        expect(consumeSpy).toHaveBeenCalledWith(
            "webapp_notif",
            expect.any(Function),
            { noAck: true }
        );
    });
});