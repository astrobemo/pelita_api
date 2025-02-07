import { prismaClient } from '../prisma-client.js';
import fs from 'fs';
import { Builder } from 'xml2js';

export const coretaxPajak = async (rekam_faktur_pajak_id, company_name) => {
    
    console.log('company_name', company_name);
    console.log('rekam_faktur_pajak_id', rekam_faktur_pajak_id);

    let fakturPajakXml = null;
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
                            barang: {
                                include: {
                                    satuan:true
                                }
                            }
                        }
                    }
                }
            }
        }
    });

    console.log(fakturPajak);

    
    const toko = await prismaClient[company].toko.findMany();

    const npwp_toko = toko[0].npwp;
    const npwp_filtered = npwp_toko.replace(/[.-]/g, '');
    const tin_toko = (npwp_filtered.length === 15) ? "0"+npwp_filtered : npwp_filtered;
    const idtku_toko = tin_toko + "000000";

    const unit = {
        "yard": "UM.0016",
        "kg" : "UM.0003",
    }

    const invoices = fakturPajak.map(fp => {
        const npwp = fp.no_npwp.replace(/[.-]/g, '');
        const npwp_tin = (npwp.length === 15) ? "0"+npwp : npwp;
        const nik = fp.no_nik;
        const tin = (npwp_tin.length > 0) ? npwp_tin : nik;

        const ppn_berlaku = fp.ppn_berlaku;

        const GoodServices = fp.penjualan.penjualan_detail.map(pd => {

            let dpp = pd.harga / (1 + (ppn_berlaku / 100));
            dpp = dpp.toFixed(2);
            const subTotal = pd.harga * pd.qty;
            const taxBase = (dpp * pd.qty).toFixed(2);
            let otherTaxBase = taxBase * ppn_berlaku / 12;
            otherTaxBase = otherTaxBase.toFixed(2);
            let vat = subTotal - taxBase;

            return {
                Opt: 'A',
                Code: '000000',
                Name: pd.barang.nama_jual,
                Unit: unit[pd.barang.satuan.nama.toLowerCase()],
                Price: dpp,
                Qty: pd.qty,
                TotalDiscount: "0",
                TaxBase: taxBase,
                OtherTaxBase: otherTaxBase,
                VATRate: 12,
                VAT: vat,
                STLGRate: "0",
                STLG: "0"
            }
        });

        const listOfGoodService = {
            GoodService: GoodServices
        }
        

        return {
            TaxInvoiceDate: fp.tanggal,
            TaxInvoiceOpt: 'Normal',
            TrxCode: '04',
            AddInfo: '',
            CustomDoc: '',
            RefDesc: fp.no_faktur_jual,
            FacilityStamp: '',
            SellerIDTKU: idtku_toko,
            BuyerTin: tin,
            BuyerDocument: 'TIN',
            BuyerCountry: 'IDN',
            BuyerDocumentNumber: '-',
            BuyerName: fp.nama_customer,
            BuyerAdress: fp.alamat_lengkap,
            BuyerEmail: '',
            ListOfGoodService: listOfGoodService
        }
    });

    const taxInvoice = {
        "TaxInvoice": invoices
    }

    const xmlFinal = {
        TaxInvoiceBulk: {
            TIN: tin_toko,
            ListOfTaxInvoice: {
                TaxInvoice: taxInvoice
            }
        }
    };

    console.log(xmlFinal);
    const builder = new Builder();
    fakturPajakXml = builder.buildObject(xmlFinal);

    
    return fakturPajakXml;
    // return fakturPajakXml;

    // return fakturPajak;
}