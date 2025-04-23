import { prismaClient } from "../prisma-client.js";
import { getRabbitMQ } from "./connection.js";
import { COMPANY } from "../../config/loadEnv.js";

export const barangMasterAssigned = async () =>{

    const { connection, channel } = await getRabbitMQ();

    if(!connection){
        throw new Error("RabbitMQ connection is not established");
    }

    await channel.consume("add_barang_master_toko", async (msg) => {
    
        console.log("Received message:", msg.content.toString());
        const content = msg.content.toString();
        const mContent = JSON.parse(content);
        if (msg !== null) {
            // validate if barang_id and warna_id is known
            // 1 barang 1 toko

            const replyTo = msg.properties.replyTo;
            const correlationId = msg.properties.correlationId;
            let response = {};
    
            try {
                const company = mContent.company.toString().toLowerCase(); 
                const barangId = mContent.barang_id;
                const namaBarang = mContent.nama_barang;
                const namaSatuan = mContent.nama_satuan;
                const satuanIdMaster = mContent.satuan_id;
                let satuanId = '';

                const existingBarang = await prismaClient[company].master_barang.findMany({
                    where: {
                        barang_id_master: barangId
                    }
                });

                const existingSatuan = await prismaClient[company].satuan.findMany({
                    where: {
                        nama: namaSatuan
                    }
                });

                if(existingSatuan.length === 0){
                    const newSatuan = await prismaClient[company].satuan.create({
                        data: {
                            nama: namaSatuan
                        }
                    });
                    satuanId = newSatuan.id;

                    await prismaClient[company].master_satuan.create({
                        data: {
                            satuan_id_master: satuanIdMaster,
                            nama_master: namaSatuan,
                            satuan_id_toko: satuanId
                        }
                    });
                }else{
                    satuanId = existingSatuan[0].id;
                }
    
                // by SOP klo barang ga ada artinya harus dipastikan barang baru
                if(existingBarang.length === 0){

                    const newBarang = await prismaClient[company].barang.create({
                        nama_jual: namaBarang,
                        satuan_id: satuanId
                    });

                    const insertedId = newBarang.id;
                    
                    await prismaClient[company].master_barang.create({
                        data: {
                            barang_id_master: barangId,
                            nama_master: namaBarang,
                            barang_id_toko: insertedId
                        }
                    });
                    
                    response = {
                        status: "success",
                        message: "Barang berhasil ditambahkan",
                        data: {
                            barang_id: insertedId
                        }
                    };

                }else{
                    
                    const existingBarangNama = existingBarang[0].nama_master;
                    console.log("Barang sudah ada");
                    response = {
                        status: "success",
                        message: `Barang sudah pernah didaftarkan: ${existingBarangNama}`,
                    };
                }                

    
            } catch (error) {
                console.error(error);
                response = {
                    status: "failed",
                    message: "Terjadi kesalahan pada server"
                }
            }

            channel.sendToQueue(replyTo, Buffer.from(JSON.stringify(response)), {
                correlationId: correlationId
            });
        }
    });
}

export const barangMasterSKUAssigned = async () =>{
    if(!connection){
        throw new Error("RabbitMQ connection is not established");
    }

    channel.consume("add_barang_sku_master_toko", async (msg) => {
    
        if (msg !== null) {
            const mContent = msg.content.toString();
            console.log("Received message:", messageContent);
            const mData = JSON.parse(mContent);
            // validate if barang_id and warna_id is known

            let response = {};

            const replyTo = msg.properties.replyTo;
            const correlationId = msg.properties.correlationId;
    
            try {
                const company = mData.company;
                const barangId = mData.barang_id;
                const satuanId = mData.satuan_id;
                const skuList = mData.data;

                const warnaIdMaster = [];
                const namaWarnaMaster = [];

                const barangList = skuList.map(async (sku) => {
                    warnaIdMaster.push(sku.warna_id);
                    namaWarnaMaster.push(sku.warna_jual_master);
                    return {
                        barang_sku_id: sku.id,
                        nama_barang: sku.nama_barang,
                        barang_id_master: sku.barang_id,
                        warna_id_master: sku.warna_id,
                        satuan_id_master: sku.satuan_id
                    }
                });

                const queryCheckWarna = await prismaClient[company].master_warna.findMany({
                    where: {
                        warna_id_master: {
                            in: warnaIdMaster
                        }
                    }
                });

                const listedWarna = queryCheckWarna.map((item) => item.warna_id_master);
                const newWarna = warnaIdMaster.filter((item) => !listedWarna.includes(item));

                if(newWarna.length > 0){
                    const newWarna = newWarna.map((item) => {
                        return {
                            nama_master: namaWarnaMaster[warnaIdMaster.indexOf(item)]
                        }
                    });

                    await prismaClient[company].warna.createMany({
                        data: newWarna
                    });

                    const newWarnaId = await prismaClient[company].warna.findMany({
                        where: {
                            nama: {
                                in: newWarna.map((item) => item.nama_master)
                            }
                        }
                    });

                    const newWarnaList = newWarna.map((item) => {
                        return {
                            warna_id_toko: newWarnaId.find((warna) => warna.nama === item.nama_master).id,
                            warna_id_master: item,
                            nama_master: namaWarnaMaster[warnaIdMaster.indexOf(item)]
                        }
                    });

                    await prismaClient[company].master_warna.createMany({
                        data: newWarnaList
                    });

                }

                const newList = await prismaClient[company].master_barang_sku.createMany({
                    data: barangList
                });

                const affectedRows = newList.count;
                response = {
                    status: "success",
                    message: "SKU berhasil ditambahkan",
                    affectedRows: affectedRows
                };
                
    
            } catch (error) {
                console.error(error);
                response = {
                    status: "failed",
                    message: "Terjadi kesalahan pada server"
                }
            }

            channel.sendToQueue(replyTo, Buffer.from(JSON.stringify(response)), {
                correlationId: correlationId
            });
        }
    });
}
