import { prismaClient } from "../prisma-client.js"
import axios from "axios";
import { getAuthToken, isTokenValid, authToken } from "../helpers/getAuthentication.js";
import { COMPANY as COMPANY_ALL, NODE1_URL, AUTH_URL, API_KEY } from "../../config/loadEnv.js";
import { getRabbitMQ } from "./connection.js";


const COMPANY = COMPANY_ALL.split(',');
const nodeUrl = NODE1_URL;
const authUrl = AUTH_URL;
const apiKey = API_KEY;


const consumeMessages = async () => {

    const { connection, channel } = await getRabbitMQ();

    if (!connection && !channel) {
        throw new Error("RabbitMQ connection is not established");
    }

    console.log('RabbitMQ consumeMessage started...');
    
    await channel.consume("customer_legacy_que", async (msg) => {
        const event = msg.fields.routingKey;
        switch (event) {
            case 'customer.chosen': 
            try {
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
    
                console.log('chosenData', updateData);
    
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

                    const company = index.toString().toLowerCase();
    
                    console.log('new data', newData);
                    console.log('keyName', keyName);
                    console.log('keyValue', keyValue);

                    console.log('cek existing customers',index, COMPANY[company]);

    
                    const existingCustomer = await prismaClient[COMPANY[company]].customer.findMany({
                        where: {
                            [keyName]: keyValue
                        }
                    });

                    console.log('existingCustomer', existingCustomer);
    
                    if (!existingCustomer.length) {
                        console.log(`Customer with ${keyName}: ${keyValue} not found in company index ${index}`);
                        continue;
                    }else{

                        console.log('existingCustomer exist do backup');
                        
                        const backupData = existingCustomer[0];
                        await prismaClient[COMPANY[company]].customer_backup.create({
                            data: {
                                // Map the fields from existingCustomer to the customer_backup model
                                id_original: backupData.id,
                                tipe_company: backupData.tipe_company,
                                nama: backupData.nama,
                                alamat: backupData.alamat,
                                blok: backupData.blok,
                                no: backupData.no,
                                rt: backupData.rt,
                                rw: backupData.rw,
                                kecamatan: backupData.kecamatan,
                                kelurahan: backupData.kelurahan,
                                kota: backupData.kota,
                                provinsi: backupData.provinsi,
                                kode_pos: backupData.kode_pos,
                                npwp: backupData.npwp,
                                nik: backupData.nik,
                                status_aktif: backupData.status_aktif,
    
                                contact_person: backupData.contact_person,
                                email: backupData.email,
                                telepon1: backupData.telepon1,
                                telepon2: backupData.telepon2,
                                tempo_kredit: backupData.tempo_kredit,
                                warning_kredit: backupData.warning_kredit,
                                limit_warning_type: backupData.limit_warning_type,
                                limit_amount: backupData.limit_amount,
                                limit_atas: backupData.limit_atas,
                                limit_warning_amount: backupData.limit_warning_amount, 
                                updated_at: backupData.updated_at,
                                created_register: backupData.created_register,
                                
                                // Add any other fields that are required in the customer_backup model
                            },
                        });
                    }
    
                    if (keyName == "" || keyValue == "") {
                        console.log('keyName or keyValue is empty');
                        continue;
                    }else{

                        console.log('update customer', COMPANY[company]);
                        await prismaClient[COMPANY[company]].customer.updateMany({
                            data: newData,
                            where: {
                                [keyName]: keyValue
                            },
                        });
                    }
                }
    
                console.log('customer has been Updated');
                channel.ack(msg);
                
            } catch (error) {
                console.error('Error processing message:', error);
            } 
            break;
                
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
                        await prismaClient[COMPANY[company]].customer.updateMany({
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

                        console.log('cek existing customers', company_indexes, COMPANY[company]);
                        const existingCustomer = await prismaClient[COMPANY[company]].customer.findMany({
                            where: {
                                [keyName]: keyValue
                            }
                        });
                        
                        if (!existingCustomer.length) {
                            console.log(`Customer with ${keyName}: ${keyValue} not found in company index ${index}`);
                            continue;
                        }else{
                            
                            console.log('existingCustomer exist do backup', existingCustomer);
                            const backupData = existingCustomer[0];
                            await prismaClient[COMPANY[company]].customer_backup.create({
                                data: {
                                    // Map the fields from existingCustomer to the customer_backup model
                                    id_original: backupData.id,
                                    tipe_company: backupData.tipe_company,
                                    nama: backupData.nama,
                                    alamat: backupData.alamat,
                                    blok: backupData.blok,
                                    no: backupData.no,
                                    rt: backupData.rt,
                                    rw: backupData.rw,
                                    kecamatan: backupData.kecamatan,
                                    kelurahan: backupData.kelurahan,
                                    kota: backupData.kota,
                                    provinsi: backupData.provinsi,
                                    kode_pos: backupData.kode_pos,
                                    npwp: backupData.npwp,
                                    nik: backupData.nik,
                                    status_aktif: backupData.status_aktif,

                                    contact_person: backupData.contact_person,
                                    email: backupData.email,
                                    telepon1: backupData.telepon1,
                                    telepon2: backupData.telepon2,
                                    tempo_kredit: backupData.tempo_kredit,
                                    warning_kredit: backupData.warning_kredit,
                                    limit_warning_type: backupData.limit_warning_type,
                                    limit_amount: backupData.limit_amount,
                                    limit_atas: backupData.limit_atas,
                                    limit_warning_amount: backupData.limit_warning_amount, 
                                    updated_at: backupData.updated_at,
                                    created_register: backupData.created_register,
                                    
                                    // Add any other fields that are required in the customer_backup model
                                },
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

//rabbitMqParam
export { consumeMessages };

// await channel.close();
// await connection.close();
