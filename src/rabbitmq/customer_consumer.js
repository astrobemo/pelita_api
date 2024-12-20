import { connect } from "amqplib";
import dotenv from "dotenv";
import { prismaClient } from "../prisma-client.js"
import axios from "axios";

dotenv.config({ path: `../../.env` });

const COMPANY = process.env.COMPANY.split(',');
const rabbitMqUrl = process.env.RABBITMQ_URL;
const rabbitMqUser = process.env.RABBITMQ_USER;
const rabbitMqPassword = process.env.RABBITMQ_PASSWORD;
const rabbitMqPort = process.env.RABBITMQ_PORT;
const nodeUrl = process.env.NODE1_URL;

// console.log(rabbitMqUrl, rabbitMqUser, rabbitMqPassword);
const rabbitMqParam = [rabbitMqUrl, rabbitMqUser, rabbitMqPassword, rabbitMqPort];

let channel;
const connection =  await connect(`amqp://${rabbitMqUser}:${rabbitMqPassword}@${rabbitMqUrl}:${rabbitMqPort}/master`).catch((err) => {
    console.error('connection error', err);
    // process.exit(1);
});

if(connection){
    channel = await connection.createChannel();
}


const consumeMessages = async () => {
    await channel.consume("customer_legacy_que", async (msg) => {
        const event = msg.fields.routingKey;
        switch (event) {
            case 'customer.chosen': 
                {

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
                }
            case 'customer.master_updated':
                {

                    const data = JSON.parse(msg.content.toString());
                    const keyName = data.keyName;
                    const keyValue = data.keyValue;
                    const id = data.id;
    
                    const response = await axios.post(nodeUrl, {
                        query: `
                            query Customer {
                                customer(id: ${id}) {
                                    tipe_company
                                    nama
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
                                    status_aktif
                                }
                            }
                        `,
                    });
    
                    const customerData = response.data.data.customer;
                    const key = []
                    const params = [];
                    console.log(customerData);
                    /* for (const [key, value] of customerData) {
                        key.push(key);
                        params.push(value);
                    } */
                    
                    const newData = {};
                    for(const key in customerData){
                        if(customerData.hasOwnProperty(key)){
                            newData[key] = customerData[key];
                        }
                    }
                    

                    const currentDate = new Date();
                    const verified_time = new Date(currentDate.setHours(currentDate.getHours() + 7));
                    
                    newData['customer_id_central'] = parseInt(id);
                    newData['verified_time'] = verified_time;
                    const company_indexes = [];
                    for (const [index,company] of COMPANY.entries()) {
                        const result = await prismaClient[company].customer.findMany({
                            where: {
                                [keyName]: keyValue
                            }
                        });

                        if(result.length > 0){
                            company_indexes.push(index);
                        }
                    }
                    // console.log('company_index', company_indexes);
                    for (const index of company_indexes) {
                        await prismaClient[COMPANY[index]].customer.updateMany({
                            data: newData,
                            where: {
                                [keyName]: keyValue
                            },
                        });
                    }

                    break;
                }
            case 'customer.testing':
                {
                    console.log('customer.testing success');
                    break;
                }
            default:
                break;
        }
    }, { noAck: true });
}

export { consumeMessages, rabbitMqParam };

// await channel.close();
// await connection.close();
