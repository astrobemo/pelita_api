import {connection, channel} from "./connection";

channel.consume("add_barang_master_toko", async (msg) => {

    if(!connection){
        throw new Error("RabbitMQ connection is not established");
    }

    if (msg !== null) {
        const messageContent = msg.content.toString();
        console.log("Received message:", messageContent);
        // validate if barang_id and warna_id is known

        try {
            const company = barangSKU.company;
            const barangId = barangSKU.barang_id;
            
            const existingBarang = await prismaClient[COMPANY[company]].findMany({
                where: {
                    barang_id_master: barangId
                }
            });

            if(existingBarang.length === 0){
                
                await prismaClient[COMPANY[company]].create({
                    data: {
                        barang_id_master: barangId
                    }
                });
                return;
            }

            channel.ack(msg);

        } catch (error) {
            console.error(error);
            channel.nack(msg);
        }
    }
});