import { describe, it, expect, vi, beforeEach } from "vitest";
import { getRabbitMQ } from "../../src/rabbitmq/connection";
import { connect } from "amqplib";

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
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("should initialize and return RabbitMQ connection, channel, and confirmChannel", async () => {
        const result = await getRabbitMQ();

        expect(result.connection).toBeDefined();
        expect(result.channel).toBeDefined();
        expect(result.confirmChannel).toBeDefined();

        expect(connect).toHaveBeenCalled();
        expect(result.connection.createChannel).toHaveBeenCalled();
        expect(result.connection.createConfirmChannel).toHaveBeenCalled();
    });

    it("should retry connection on error", async () => {
        const mockOn = vi.fn((event, callback) => {
            if (event === "error") {
                callback(new Error("Connection error"));
            }
        });

        connect.mockResolvedValueOnce({
            createChannel: vi.fn(),
            createConfirmChannel: vi.fn(),
            on: mockOn,
        });

        await expect(getRabbitMQ()).rejects.toThrow("Connection error");
        expect(mockOn).toHaveBeenCalledWith("error", expect.any(Function));
    });

    it("should retry connection on close", async () => {
        const mockOn = vi.fn((event, callback) => {
            if (event === "close") {
                callback();
            }
        });

        connect.mockResolvedValueOnce({
            createChannel: vi.fn(),
            createConfirmChannel: vi.fn(),
            on: mockOn,
        });

        await expect(getRabbitMQ()).rejects.toThrow();
        expect(mockOn).toHaveBeenCalledWith("close", expect.any(Function));
    });

    it("should consume messages from the channel", async () => {
        const { channel } = await getRabbitMQ();

        const consumeSpy = vi.spyOn(channel, "consume");

        channel.consume(
            "webapp_notif",
            (message) => {
                expect(message.fields.routingKey).toBe("test.key");
                expect(message.content.toString()).toBe("Test message");
            },
            { noAck: true }
        );

        expect(consumeSpy).toHaveBeenCalledWith(
            "webapp_notif",
            expect.any(Function),
            { noAck: true }
        );
    });
});