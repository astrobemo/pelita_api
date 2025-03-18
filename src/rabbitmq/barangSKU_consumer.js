import { prismaClient } from "../prisma-client";
import {connection, channel} from "./connection";

export const barangMasterAssigned = async () =>{
    if(!connection){
        throw new Error("RabbitMQ connection is not established");
    }

    channel.consume("add_barang_master_toko", async (msg) => {
    
        if (msg !== null) {
            const mContent = msg.content.toString();
            console.log("Received message:", messageContent);
            // validate if barang_id and warna_id is known

            const replyTo = msg.properties.replyTo;
            const correlationId = msg.properties.correlationId;
            let response = {};
    
            try {
                const company = mContent.company;
                const barangId = mContent.barang_id;
                const namaBarang = mContent.nama_barang;
                const satuanId = mContent.satuan_id;

                
                
                const existingBarang = await prismaClient[COMPANY[company]].master_barang.findMany({
                    where: {
                        barang_id_master: barangId
                    }
                });
    
                // by SOP klo barang ga ada artinya harus dipastikan barang baru
                if(existingBarang.length === 0){

                    const newBarang = await prismaClient[COMPANY[company]].barang.create({
                        nama_jual: namaBarang,
                        satuan_id: satuanId
                    });

                    const insertedId = newBarang.barang_id;
                    
                    await prismaClient[COMPANY[company]].master_barang.create({
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
                const skuList = mData.data;

                const barangList = skuList.map(async (sku) => {
                    return {
                        barang_sku_id: sku.id,
                        nama_barang: sku.nama_barang,
                        barang_id_master: sku.barang_id,
                        warna_id_master: sku.warna_id
                    }
                });

                const newList = await prismaClient[COMPANY[company]].master_barang_sku.createMany({
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
