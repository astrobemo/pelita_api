import { prismaClient } from '../prisma-client.js';

export const coretaxPajak = async (rekam_faktur_pajak_id, company_name) => {
    
    console.log('company_name', company_name);
    console.log('rekam_faktur_pajak_id', rekam_faktur_pajak_id);

    const company = company_name.toLowerCase();    
    const fakturPajak = await prismaClient[company].rekam_faktur_pajak_detail.findMany({
        where: {
            rekam_faktur_pajak_id: parseInt(rekam_faktur_pajak_id)
        },
        include: {
            penjualan: {
                include: {
                    penjualan_detail: {
                        include: {
                            barang: true
                        }
                    }
                }
            }
        }
    });

    return fakturPajak;
}