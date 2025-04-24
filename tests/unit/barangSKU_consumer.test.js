import { describe, it, expect, vi, beforeEach } from "vitest";
import { barangMasterAssigned, barangMasterSKUAssigned } from "../../src/rabbitmq/barangSKU_consumer";
import { prismaClient } from "../../src/prisma-client";
import { getRabbitMQ } from "../../src/rabbitmq/connection";

// File: /tests/unit/barangSKU_consumer.test.js

vi.mock("../../src/prisma-client.js", () => ({
    prismaClient: {
        test: {
            customer: {
                findMany: vi.fn(),
                updateMany: vi.fn(),
            },
            customer_backup: {
                create: vi.fn(),
            },
            master_barang: {
                findMany: vi.fn(),
                create: vi.fn(),
            },
            barang: {
                create: vi.fn(),
            },
            master_warna: {
                findMany: vi.fn(),
                create: vi.fn(),
                createMany: vi.fn(),
            },
            warna:{
                findMany: vi.fn(),
                create: vi.fn(),
                createMany: vi.fn(),
            },
            master_satuan: {
                findMany: vi.fn(),
                create: vi.fn(),
            },
            satuan: {
                findMany: vi.fn(),
                create: vi.fn(),
            },
            master_barang_sku: {
                findMany: vi.fn(),
                create: vi.fn(),
                createMany: vi.fn(),
            }
        },
    },
}));

vi.mock("../../src/rabbitmq/connection", () => ({
    getRabbitMQ: vi.fn().mockResolvedValue({
        channel: {
            consume: vi.fn(),
            sendToQueue: vi.fn(),
        },
        connection: true,
    }),
}));

describe("barangMasterAssigned", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("should add a new barang successfully", async () => {
        const {channel } = await getRabbitMQ();
        
        const mockMsg = {
            content: Buffer.from(
                JSON.stringify({
                    company: "test",
                    barang_id: 1,
                    nama_barang: "Test Barang",
                    satuan_id: 2,
                })
            ),
            properties: {
                replyTo: "testQueue",
                correlationId: "12345",
            },
        };

        prismaClient.test.master_barang.findMany.mockResolvedValue([]);
        prismaClient.test.satuan.findMany.mockResolvedValue([{
            id: 2,
            nama: "ROLL",
        }]);
        prismaClient.test.barang.create.mockResolvedValue({ id: 10, nama_jual: "Test Barang", satuan_id: 2 });
        
        await barangMasterAssigned();
        const consumeCallback = channel.consume.mock.calls[0][1];
        await consumeCallback(mockMsg);

        expect(prismaClient["test"].barang.create).toHaveBeenCalledWith({
            nama_jual: "Test Barang",
            satuan_id: 2,
        });


        expect(prismaClient["test"].master_barang.create).toHaveBeenCalledWith({
            data: {
                barang_id_master: 1,
                nama_master: "Test Barang",
                barang_id_toko: 10,
            },
        });
        expect(channel.sendToQueue).toHaveBeenCalledWith(
            "testQueue",
            Buffer.from(
                JSON.stringify({
                    status: "success",
                    message: "Barang berhasil ditambahkan",
                    data: { barang_id: 10 },
                })
            ),
            { correlationId: "12345" }
        );
    });

    it("should return a message if barang already exists", async () => {
        const {channel } = await getRabbitMQ();

        const mockMsg = {
            content: Buffer.from(
                JSON.stringify({
                    company: "test",
                    barang_id: 1,
                    nama_barang: "Test Barang",
                    satuan_id: 2,
                })
            ),
            properties: {
                replyTo: "testQueue",
                correlationId: "12345",
            },
        };

        prismaClient.test.master_barang.findMany.mockResolvedValue([{ nama_master: "Existing Barang" }]);
        prismaClient.test.satuan.findMany.mockResolvedValue([{
                    id: 2,
                    nama: "ROLL",
                }]);

        await barangMasterAssigned();
        const consumeCallback = channel.consume.mock.calls[0][1];
        await consumeCallback(mockMsg);

        expect(channel.sendToQueue).toHaveBeenCalledWith(
            "testQueue",
            Buffer.from(
                JSON.stringify({
                    status: "success",
                    message: "Barang sudah pernah didaftarkan: Existing Barang",
                })
            ),
            { correlationId: "12345" }
        );
    });

    it("should handle errors gracefully", async () => {
        const {channel } = await getRabbitMQ();
        const mockMsg = {
            content: Buffer.from(
                JSON.stringify({
                    company: "test",
                    barang_id: 1,
                    nama_barang: "Test Barang",
                    satuan_id: 2,
                })
            ),
            properties: {
                replyTo: "testQueue",
                correlationId: "12345",
            },
        };

        /* prismaClient["test"] = {
            master_barang: {
                findMany: vi.fn().mockRejectedValue(new Error("Database error")),
            },
        }; */

        prismaClient.test.master_barang.findMany.mockRejectedValue(new Error("Database error"));

        await barangMasterAssigned();
        const consumeCallback = channel.consume.mock.calls[0][1];
        await consumeCallback(mockMsg);

        expect(channel.sendToQueue).toHaveBeenCalledWith(
            "testQueue",
            Buffer.from(
                JSON.stringify({
                    status: "failed",
                    message: "Terjadi kesalahan pada server",
                })
            ),
            { correlationId: "12345" }
        );
    });
});

describe("barangMasterSKUAssigned", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("should add a new barang SKU successfully", async () => {
        const {channel } = await getRabbitMQ();
        
        const mockMsg = {
            content: Buffer.from(
                JSON.stringify({
                    company: "test",
                    barang_id: 1,
                    satuan_id: 2,
                    data:[
                        {
                            id: 1,
                            nama_barang: "Test Barang HIJAU ROLL",
                            nama_jual: "Test Barang HIJAU",
                            warna_jual_master: "HIJAU",
                            barang_id: 1,
                            warna_id: 1,
                            satuan_id: 2
                        },
                        {
                            id: 2,
                            nama_barang: "Test Barang HITAM ROLL",
                            nama_jual: "Test Barang HITAM",
                            warna_jual_master: "HITAM",
                            barang_id: 1,
                            warna_id: 2,
                            satuan_id: 2
                        },
                        {
                            id: 3,
                            nama_barang: "Test Barang KETAN ROLL",
                            nama_jual: "Test Barang KETAN",
                            warna_jual_master: "KETAN",
                            barang_id: 1,
                            warna_id: 3,
                            satuan_id: 2
                        },
                    ]
                })
            ),
            properties: {
                replyTo: "testQueue",
                correlationId: "12345",
            },
        };

        prismaClient.test.master_warna.findMany.mockResolvedValue([
            { warna_id_master: 1, warna_jual_master: "HIJAU" },
            { warna_id_master: 2, warna_jual_master: "HITAM" },
            { warna_id_master: 3, warna_jual_master: "KETAN" },
        ]);
        prismaClient.test.master_barang.findMany.mockResolvedValue([]);
        prismaClient.test.barang.create.mockResolvedValue({ id: 10, nama_jual: "Test Barang", satuan_id: 2 });
        
        await barangMasterSKUAssigned();
        const consumeCallback = channel.consume.mock.calls[0][1];
        await consumeCallback(mockMsg);

        expect(prismaClient.test.warna.createMany).not.toHaveBeenCalled();
        expect(prismaClient.test.master_warna.createMany).not.toHaveBeenCalled();
        expect(prismaClient.test.master_barang_sku.createMany).toHaveBeenCalled(1);

        
    });

    
    it("should handle errors gracefully", async () => {
        const {channel } = await getRabbitMQ();
        const mockMsg = {
            content: Buffer.from(
                JSON.stringify({
                    company: "test",
                    barang_id: 1,
                    nama_barang: "Test Barang",
                    satuan_id: 2,
                })
            ),
            properties: {
                replyTo: "testQueue",
                correlationId: "12345",
            },
        };

        

        await barangMasterSKUAssigned();
        const consumeCallback = channel.consume.mock.calls[0][1];
        await consumeCallback(mockMsg);

        expect(channel.sendToQueue).toHaveBeenCalledWith(
            "testQueue",
            Buffer.from(
                JSON.stringify({
                    status: "failed",
                    message: "Terjadi kesalahan pada server",
                })
            ),
            { correlationId: "12345" }
        );
    });
});