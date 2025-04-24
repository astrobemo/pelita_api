import { prismaClient } from "../../../src/prisma-client.js";

export async function cleanupDatabase(company) {
    const tables = ['master_barang', 'master_barang_sku', 'barang', 'satuan', 'master_satuan', 'warna', 'master_warna'];
    
    for (const table of tables) {
        if (prismaClient[company][table]) {
            await prismaClient[company][table].deleteMany();
        }
    }
}

export async function createTestSatuan(company, data = {}) {
    return await prismaClient[company].satuan.create({
        data: {
            nama: data.nama || 'Test Satuan',
            ...data
        }
    });
}

export async function createTestMasterSatuan(company, data = {}) {
    return await prismaClient[company].master_satuan.create({
        data: {
            satuan_id_master: data.satuan_id_master || '1',
            nama_master: data.nama_master || 'Test Master Satuan',
            satuan_id_toko: data.satuan_id_toko,
            ...data
        }
    });
}

export async function createTestBarang(company, data = {}) {
    return await prismaClient[company].barang.create({
        data: {
            nama_jual: data.nama_jual || 'Test Barang',
            satuan_id: data.satuan_id,
            ...data
        }
    });
}