import { prismaClient } from "../prisma-client";
import {connection, channel} from "./connection";

export const barangSKUassigned = async () =>{
    if(!connection){
        throw new Error("RabbitMQ connection is not established");
    }

    channel.consume("add_barang_master_toko", async (msg) => {
    
        if (msg !== null) {
            const mContent = msg.content.toString();
            console.log("Received message:", messageContent);
            // validate if barang_id and warna_id is known
    
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
                if(existingBarang.length !== 0){

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
                    return;
                }else{
                    console.log("Barang sudah ada");
                }
    
                channel.ack(msg);
    
            } catch (error) {
                console.error(error);
                channel.nack(msg);
            }
        }
    });
}
