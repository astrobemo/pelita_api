import { describe, it, expect, vi, beforeEach } from "vitest";
import { consumeMessages } from "../../src/rabbitmq/customer_consumer.js";
import { prismaClient } from "../../src/prisma-client.js";
import axios from "axios";
import { getRabbitMQ } from "../../src/rabbitmq/connection.js";
import { getAuthToken, isTokenValid } from "../../src/helpers/getAuthentication.js";

vi.mock("../../src/prisma-client.js", () => ({
    prismaClient: {
        COMPANY1: {
            customer: {
                findMany: vi.fn(),
                updateMany: vi.fn(),
            },
            customer_backup: {
                create: vi.fn(),
            },
        },
    },
}));

vi.mock("axios", () => ({
    default: {
        post: vi.fn(),
    },
}));

vi.mock("../../src/rabbitmq/connection.js", () => ({
    getRabbitMQ: vi.fn().mockResolvedValue({
        channel: {
            consume: vi.fn(),
            ack: vi.fn(),
            nack: vi.fn(),
        },
        connection: true,
    }),
}));

vi.mock("../../src/helpers/getAuthentication.js", () => ({
    getAuthToken: vi.fn(),
    isTokenValid: vi.fn(() => true),
    authToken: "mockedAuthToken",
}));

describe("consumeMessages", () => {
    const mockMessage = {
        fields: { routingKey: "customer.chosen", redelivered: false },
        content: Buffer.from(
            JSON.stringify({
                company_indexes: [0],
                keyName: "id",
                keyValue: "123",
                id: 1,
            })
        ),
    };

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("should process 'customer.chosen' event and update customer data", async () => {
        const mockChannel = getRabbitMQ().channel;

        mockChannel.consume.mockImplementation((queue, callback) => {
            callback(mockMessage);
        });

        axios.post.mockResolvedValue({
            data: {
                data: {
                    customer: {
                        tipe_company: "type1",
                        nama: "John Doe",
                        alamat: "123 Street",
                        blok: "A",
                        no: "1",
                        rt: "01",
                        rw: "02",
                        kecamatan: "District",
                        kelurahan: "Subdistrict",
                        kota: "City",
                        provinsi: "Province",
                        kode_pos: "12345",
                        npwp: "123456789",
                        nik: "987654321",
                        status_aktif: true,
                    },
                },
            },
        });

        prismaClient.COMPANY1.customer.findMany.mockResolvedValue([
            { id: 1, nama: "John Doe" },
        ]);

        await consumeMessages();

        expect(mockChannel.consume).toHaveBeenCalledWith(
            "customer_legacy_que",
            expect.any(Function),
            { noAck: false }
        );
        expect(axios.post).toHaveBeenCalled();
        expect(prismaClient.COMPANY1.customer.updateMany).toHaveBeenCalled();
        expect(mockChannel.ack).toHaveBeenCalledWith(mockMessage);
    });

    it("should requeue message if token is invalid", async () => {
        const mockChannel = getRabbitMQ().channel;

        isTokenValid.mockReturnValue(false);
        getAuthToken.mockRejectedValue(new Error("Auth error"));

        mockChannel.consume.mockImplementation((queue, callback) => {
            callback(mockMessage);
        });

        await consumeMessages();

        expect(getAuthToken).toHaveBeenCalled();
        expect(mockChannel.nack).toHaveBeenCalledWith(mockMessage, false, true);
    });

    it("should discard message if redelivered and token retrieval fails", async () => {
        const mockChannel = getRabbitMQ().channel;

        isTokenValid.mockReturnValue(false);
        getAuthToken.mockRejectedValue(new Error("Auth error"));

        const redeliveredMessage = { ...mockMessage, fields: { ...mockMessage.fields, redelivered: true } };

        mockChannel.consume.mockImplementation((queue, callback) => {
            callback(redeliveredMessage);
        });

        await consumeMessages();

        expect(getAuthToken).toHaveBeenCalled();
        expect(mockChannel.nack).toHaveBeenCalledWith(redeliveredMessage, false, false);
    });
});
