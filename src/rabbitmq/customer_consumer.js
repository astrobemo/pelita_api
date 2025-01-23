import { connect } from "amqplib";
import { prismaClient } from "../prisma-client.js"
import axios from "axios";
import { getAuthToken, isTokenValid, authToken } from "../helpers/getAuthentication.js";

import { COMPANY as COMPANY_ALL, RABBITMQ_URL, RABBITMQ_USER, RABBITMQ_PASSWORD, RABBITMQ_PORT, NODE1_URL, AUTH_URL, API_KEY } from "../../config/loadEnv.js";

const COMPANY = COMPANY_ALL.split(',');
const rabbitMqUrl = RABBITMQ_URL;
const rabbitMqUser = RABBITMQ_USER;
const rabbitMqPassword = RABBITMQ_PASSWORD;
const rabbitMqPort = RABBITMQ_PORT;
const nodeUrl = NODE1_URL;

const authUrl = AUTH_URL;
const apiKey = API_KEY;

// console.log(rabbitMqUrl, rabbitMqUser, rabbitMqPassword);
const rabbitMqParam = [rabbitMqUrl, rabbitMqUser, rabbitMqPassword, rabbitMqPort];

let channel;
const connection =  await connect(`amqp://${rabbitMqUser}:${rabbitMqPassword}@${rabbitMqUrl}:${rabbitMqPort}/master`).catch((err) => {
    console.error('connection error', err);
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

                    console.log('customer.chosen success');

                    const data = JSON.parse(msg.content.toString());
                    const company_indexes = data.company_indexes;
                    const keyName = data.keyName;
                    const keyValue = data.keyValue;
                    const id = data.id;

                    if (!isTokenValid()) {
                        try {
                            await getAuthToken(authUrl, apiKey);
                        } catch (error) {
                            console.log('Failed to process message, requeueing', error);
                            if (!msg.fields.redelivered) {
                                console.log('Requeuing message...');
                                channel.nack(msg, false, true); // Requeue the message only if it hasn't been redelivered
                                console.log('Message requeued successfully');
                            } else {
                                console.log('Message has already been redelivered, discarding');
                                channel.nack(msg, false, false); // Discard the message if it has been redelivered
                            }
                        }
                    }
                    console.log('customer.chosen accessed', data, authToken);

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
                    }, {
                        headers: {
                            Authorization: `Bearer ${authToken}` // Add this line to include the JWT token in the request headers
                        }
                    });

                    const updateData = response.data.data.customer;

                    console.log('updatedData', updateData);

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

                        console.log('new data', newData);
                        console.log('keyName', keyName);
                        console.log('keyValue', keyValue);

                        const existingCustomer = await prismaClient[COMPANY[index]].customer.findUnique({
                            where: {
                                [keyName]: keyValue
                            }
                        });

                        if (!existingCustomer) {
                            console.log(`Customer with ${keyName}: ${keyValue} not found in company index ${index}`);
                            continue;
                        }else{
                            
                            await prismaClient[COMPANY[index]].customer_backup.create({
                                data: existingCustomer,
                            });
                        }

                        if (keyName == "" || keyValue == "") {
                            console.log('keyName or keyValue is empty');
                            continue;
                        }else{
                            await prismaClient[COMPANY[index]].customer.updateMany({
                                data: newData,
                                where: {
                                    [keyName]: keyValue
                                },
                            });
                        }
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

                    if (!isTokenValid()) {
                        try {
                            await getAuthToken(authUrl, apiKey);
                        } catch (error) {
                            console.log('Failed to process message, requeueing', error);
                            if (!msg.fields.redelivered) {
                                console.log('Requeuing message...');
                                channel.nack(msg, false, true); // Requeue the message only if it hasn't been redelivered
                                console.log('Message requeued successfully');
                            } else {
                                console.log('Message has already been redelivered, discarding');
                                channel.nack(msg, false, false); // Discard the message if it has been redelivered
                            }
                        }
                    }
                    console.log('customer.chosen accessed', authToken);
    
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
                    }, {
                        headers: {
                            Authorization: `Bearer ${authToken}` // Add this line to include the JWT token in the request headers
                        }
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
                    if (!isTokenValid()) {
                        try {
                            await getAuthToken(authUrl, apiKey);
                        } catch (error) {
                            console.log('Failed to process message, requeueing', error);
                            if (!msg.fields.redelivered) {
                                console.log('Requeuing message...');
                                channel.nack(msg, false, true); // Requeue the message only if it hasn't been redelivered
                                console.log('Message requeued successfully');
                            } else {
                                console.log('Message has already been redelivered, discarding');
                                channel.nack(msg, false, false); // Discard the message if it has been redelivered
                            }
                        }
                    }

                    console.log(msg.content);
                    const data = JSON.parse(msg.content.toString());
                    const company_indexes = data.company_indexes;
                    const keyName = data.keyName;
                    const keyValue = data.keyValue;
                    const id = data.id;

                    console.log('customer.testing accessed', data);


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
                    }, {
                        headers: {
                            Authorization: `Bearer ${authToken}` // Add this line to include the JWT token in the request headers
                        }
                    });

                    const getData = response.data.data.customer;

                    console.log('axios success getData', getData);

                    for (const index of company_indexes) {

                        console.log('new data', newData);
                        console.log('keyName', keyName);
                        console.log('keyValue', keyValue);

                        const existingCustomer = await prismaClient[COMPANY[index]].customer.findUnique({
                            where: {
                                [keyName]: keyValue
                            }
                        });

                        if (!existingCustomer) {
                            console.log(`Customer with ${keyName}: ${keyValue} not found in company index ${index}`);
                            continue;
                        }else{
                            
                            await prismaClient[COMPANY[index]].customer_backup.create({
                                data: existingCustomer,
                            });
                        }

                    }

                    channel.ack(msg);
                    break;
                }
            default:
                break;
        }
    }, { noAck: false });
}

export { consumeMessages, rabbitMqParam };

// await channel.close();
// await connection.close();
