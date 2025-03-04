import { coretaxPajak } from '../src/helpers/coretax_xml';
import { prismaClient } from '../src/prisma-client';
import { jest } from '@jest/globals';

jest.mock('../src/prisma-client');

describe('coretaxPajak', () => {
    it('should generate XML for valid input', async () => {
        const rekam_faktur_pajak_id = 1;
        const company_name = 'TestCompany';

        prismaClient[company_name.toLowerCase()] = {
            rekam_faktur_pajak_detail: {
                findMany: jest.fn().mockResolvedValue([
                    {
                        no_npwp: '12.345.678.9-012.345',
                        no_nik: '1234567890123456',
                        tanggal: '2023-01-01',
                        ppn_berlaku: 10,
                        penjualan: {
                            penjualan_detail: [
                                {
                                    harga: 110,
                                    qty: 1,
                                    barang: {
                                        nama_jual: 'Test Product',
                                        satuan: {
                                            nama: 'kg'
                                        }
                                    }
                                }
                            ]
                        },
                        nama_customer: 'Test Customer',
                        alamat_lengkap: 'Test Address',
                        no_faktur_jual: 'FJ-001'
                    }
                ])
            },
            toko: {
                findMany: jest.fn().mockResolvedValue([
                    { npwp: '12.345.678.9-012.345' }
                ])
            }
        };

        const result = await coretaxPajak(rekam_faktur_pajak_id, company_name);
        expect(result).toContain('<TaxInvoiceBulk>');
        expect(result).toContain('<TIN>1234567890123456000000</TIN>');
        expect(result).toContain('<BuyerName>Test Customer</BuyerName>');
    });

    it('should handle errors gracefully', async () => {
        const rekam_faktur_pajak_id = 1;
        const company_name = 'TestCompany';

        prismaClient[company_name.toLowerCase()] = {
            rekam_faktur_pajak_detail: {
                findMany: jest.fn().mockRejectedValue(new Error('Database error'))
            },
            toko: {
                findMany: jest.fn().mockResolvedValue([
                    { npwp: '12.345.678.9-012.345' }
                ])
            }
        };

        const result = await coretaxPajak(rekam_faktur_pajak_id, company_name);
        expect(result).toBeUndefined();
    });
});
