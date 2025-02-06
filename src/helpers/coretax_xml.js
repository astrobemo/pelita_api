import { prismaClient } from '../prisma/client';

const COMPANY = process.env.COMPANY.split(',');


export const coretaxPajak = async (rekam_faktur_pajak_id, company_name) => {
    
    const company = company_name.toLowerCase();
    const fakturPajak = await prismaClient[company].rekam_faktur_pajak_detail[company].findMany({
        where: {
            rekam_faktur_pajak_id: rekam_faktur_pajak_id
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