import { describe, it, beforeEach, afterEach, expect, vi } from 'vitest';
import { barangMasterAssigned, barangMasterSKUAssigned } from '../../src/rabbitmq/barangSKU_consumer.js';
import { cleanupDatabase } from './helpers/database.js';
import { prismaClient } from '../../src/prisma-client.js';
import { getRabbitMQ } from '../../src/rabbitmq/connection.js';

// Mock RabbitMQ connection
vi.mock('../../src/rabbitmq/connection.js', () => ({
    getRabbitMQ: vi.fn()
}));

describe('barangSKU_consumer Integration Tests', () => {
    const company = 'test';
    let mockChannel;
    let mockMessage;

    beforeEach(() => {
        // Setup mock RabbitMQ channel
        mockChannel = {
            consume: vi.fn(),
            sendToQueue: vi.fn()
        };

        // Mock RabbitMQ connection
        getRabbitMQ.mockResolvedValue({
            connection: true,
            channel: mockChannel
        });
    });

    afterEach(async () => {
        await cleanupDatabase(company);
        vi.clearAllMocks();
    });

    describe('barangMasterAssigned', () => {
        it('should create new barang and satuan when they do not exist', async () => {
            const testData = {
                company: company,
                barang_id: 123,
                nama_barang: 'Test Barang',
                nama_satuan: 'PCS',
                satuan_id: 1
            };

            mockMessage = {
                content: Buffer.from(JSON.stringify(testData)),
                properties: {
                    replyTo: 'reply-queue',
                    correlationId: 'test-correlation-id'
                }
            };

            await barangMasterAssigned();

            // Verify channel.consume was called
            expect(mockChannel.consume).toHaveBeenCalledWith(
                'add_barang_master_toko',
                expect.any(Function)
            );

            // Execute the consume callback
            const consumeCallback = mockChannel.consume.mock.calls[0][1];
            await consumeCallback(mockMessage);

            // Verify the database state
            const createdBarang = await prismaClient[company].barang.findFirst({
                where: {
                    nama_jual: 'Test Barang',
                }
            });

            expect(createdBarang).toBeTruthy();


            const createdMasterBarang = await prismaClient[company].master_barang.findFirst({
                where: {
                    barang_id_master: 123
                }
            });

            expect(createdMasterBarang).toBeTruthy();
            expect(createdMasterBarang.nama_master).toBe('Test Barang');

            const createdSatuan = await prismaClient[company].satuan.findFirst({
                where: {
                    nama: 'PCS'
                }
            });
            expect(createdSatuan).toBeTruthy();


            const createdMasterSatuan = await prismaClient[company].master_satuan.findFirst({
                where: {
                    nama_master: 'PCS'
                }
            });
            expect(createdMasterSatuan).toBeTruthy();

            // Verify response was sent
            expect(mockChannel.sendToQueue).toHaveBeenCalledWith(
                'reply-queue',
                expect.any(Buffer),
                expect.objectContaining({
                    correlationId: 'test-correlation-id'
                })
            );
        });

        it('should handle existing barang correctly', async () => {
            // First create a barang
            const existingBarang = await prismaClient[company].barang.create({
                data: {
                    nama_jual: 'Existing Barang',
                    satuan_id: 1
                }
            });

            await prismaClient[company].master_barang.create({
                data: {
                    barang_id_master: 123,
                    nama_master: 'Existing Barang',
                    barang_id_toko: existingBarang.id
                }
            });

            const testData = {
                company: company,
                barang_id: 123,
                nama_barang: 'Test Barang',
                nama_satuan: 'PCS',
                satuan_id: 1
            };

            mockMessage = {
                content: Buffer.from(JSON.stringify(testData)),
                properties: {
                    replyTo: 'reply-queue',
                    correlationId: 'test-correlation-id'
                }
            };

            await barangMasterAssigned();

            const consumeCallback = mockChannel.consume.mock.calls[0][1];
            await consumeCallback(mockMessage);

            // Verify response indicates barang already exists
            expect(mockChannel.sendToQueue).toHaveBeenCalledWith(
                'reply-queue',
                expect.any(Buffer),
                expect.objectContaining({
                    correlationId: 'test-correlation-id'
                })
            );

            const response = JSON.parse(mockChannel.sendToQueue.mock.calls[0][1]);
            expect(response.status).toBe('success');
            expect(response.message).toContain('Barang sudah pernah didaftarkan');
        });
    });

    describe('barangMasterSKUAssigned', () => {
        it('should create new SKU entries and warna', async () => {
            const testData = {
                company: company,
                barang_id: 123,
                satuan_id: 1,
                data: [{
                    id: 'SKU1',
                    nama_barang: 'Test Barang Red Roll',
                    nama_jual: 'Test Barang Red',
                    barang_id: 123,
                    warna_id: 5,
                    warna_jual_master: 'Red',
                    satuan_id: 1
                }]
            };

            mockMessage = {
                content: Buffer.from(JSON.stringify(testData)),
                properties: {
                    replyTo: 'reply-queue',
                    correlationId: 'test-correlation-id'
                }
            };

            await barangMasterSKUAssigned();

            const consumeCallback = mockChannel.consume.mock.calls[0][1];
            await consumeCallback(mockMessage);

            // Verify warna and SKU were created
            const createdSKU = await prismaClient[company].master_barang_sku.findFirst({
                where: {
                    barang_sku_id: 'SKU1'
                }
            });

            console.log(createdSKU, 'createdSKU');

            expect(createdSKU).toBeTruthy();
            expect(createdSKU.barang_id_master).toBe(123);

            // Verify response
            expect(mockChannel.sendToQueue).toHaveBeenCalledWith(
                'reply-queue',
                expect.any(Buffer),
                expect.objectContaining({
                    correlationId: 'test-correlation-id'
                })
            );

            const response = JSON.parse(mockChannel.sendToQueue.mock.calls[0][1]);
            expect(response.status).toBe('success');
            expect(response.message).toBe('SKU berhasil ditambahkan');
        });
    });
});