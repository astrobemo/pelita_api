import { connect } from "amqplib";
import dotenv from "dotenv";
import { prismaClient } from "../prisma-client.js"
import axios from "axios";

dotenv.config({ path: `../../.env` });

const COMPANY = process.env.COMPANY.split(',');
const rabbitMqUrl = process.env.RABBITMQ_URL;
const rabbitMqUser = process.env.RABBITMQ_USER;
const rabbitMqPassword = process.env.RABBITMQ_PASSWORD;
const nodeUrl = process.env.NODE1_URL;

console.log(rabbitMqUrl, rabbitMqUser, rabbitMqPassword);

let channel;
const connection =  await connect(`amqp://${rabbitMqUser}:${rabbitMqPassword}@${rabbitMqUrl}:5672/master`).catch((err) => {
    console.error(err);
    // process.exit(1);
});

if(connection){
    channel = await connection.createChannel();
}


const consumeMessages = async () => {
    await channel.consume("customer_legacy_que", async (msg) => {
        const event = msg.fields.routingKey;
        console.log(msg.content.toString());
        switch (event) {
            case 'customer.chosen':
                const data = JSON.parse(msg.content.toString());
                const company_indexes = data.company_indexes;
                const keyName = data.keyName;
                const keyValue = data.keyValue;
                const id = data.id;


                const response = await axios.post(nodeUrl, {
                    query: `
                        query Customer {
                            customer(id: ${id}) {
                                tipe_company
                                nama
                                alias
                                alamat
                                blok
                                no
                                rt
                                rw
                                kecamatan
                                kelurahan
                                kota
                                provinsi
                                kode_pos
                                npwp
                                nik
                                email
                                contact_person
                                tempo_kredit
                                warning_kredit
                                limit_warning_type
                                limit_warning_amount
                                limit_amount
                                limit_atas
                                img_link
                                npwp_link
                                ktp_link
                                medsos_link
                                locked_status
                                user_id
                                jenis_pekerjaan
                                jenis_produk
                                created_at
                                updated_at
                                status_aktif
                            }
                        }
                    `,
                });

                const updateData = response.data.data.customer;

                const { 
                    tipe_company, nama,
                    alamat, blok, no, rt, rw,
                    kecamatan, kelurahan, kota, provinsi, kode_pos,
                    npwp, nik, 
                    tempo_kredit, warning_kredit,
                    limit_warning_type, limit_warning_amount,
                    limit_amount, limit_atas,
                    contact_person, email, 
                    status_aktif 
        
                } = updateData;

                const currentDate = new Date();
                const verified_time = new Date(currentDate.setHours(currentDate.getHours() + 7));
                const newData = {
                    tipe_company: tipe_company,
                    nama: nama,
                    alamat: alamat,
                    blok: blok,
                    no: no,
                    rt: rt,
                    rw: rw,
                    kecamatan: kecamatan,
                    kelurahan: kelurahan,
                    kota: kota,
                    provinsi: provinsi,
                    kode_pos: kode_pos,
                    npwp: npwp,
                    nik: nik,
                    verified_time : verified_time,
                    customer_id_central : id,
                    status_aktif: status_aktif
                };

                for (const index of company_indexes) {
                    await prismaClient[COMPANY[index]].customer.updateMany({
                        data: newData,
                        where: {
                            [keyName]: keyValue
                        },
                    });
                }

                console.log('customer has been Updated');
                
                break;
            case 'customer.updated':
                console.log('customer has been Updated');
                console.log('Received message:', msg.content.toString());
                break;
            default:
                break;
        }
    }, { noAck: true });
}

export { consumeMessages };

// await channel.close();
// await connection.close();
