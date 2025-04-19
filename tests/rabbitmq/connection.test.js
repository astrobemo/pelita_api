import { describe, it, expect, vi, beforeEach } from "vitest";
import { getRabbitMQ } from "../../src/rabbitmq/connection";


let mockConnection, mockChannel, mockConfirmChannel;

beforeEach(() => {

    mockConnection = {
        createChannel: vi.fn(() => mockChannel),
        createConfirmChannel: vi.fn(() => mockConfirmChannel),
        on: vi.fn(),
    };
    mockChannel = {
        consume: vi.fn(),
    };
    mockConfirmChannel = {};
    vi.mocked(mockConnection.createChannel).mockReturnValue(mockChannel);
    vi.mocked(mockConnection.createConfirmChannel).mockReturnValue(mockConfirmChannel);
});

describe("RabbitMQ Connection", () => {
    it("should initialize and return RabbitMQ connection, channel, and confirmChannel", async () => {

        

    process.env.RABBITMQ_URL = "localhost";
    process.env.RABBITMQ_USER = "my_user";
    process.env.RABBITMQ_PASSWORD = "my_password";

        const result = await getRabbitMQ();

        expect(result.connection).toBeDefined();
        expect(result.channel).toBeDefined();
        expect(result.confirmChannel).toBeDefined();

        expect(mockConnection.createChannel).toHaveBeenCalled();
        expect(mockConnection.createConfirmChannel).toHaveBeenCalled();
    });

});