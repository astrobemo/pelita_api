import { equal } from 'assert';
import { prismaClient } from '../prisma-client.js';
import fs from 'fs';
import { Builder } from 'xml2js';

export const coretaxPajak = async (rekam_faktur_pajak_id, company_name) => {
    
    console.log('company_name', company_name);
    console.log('rekam_faktur_pajak_id', rekam_faktur_pajak_id);

    let fakturPajakXml = null;
    const company = company_name.toLowerCase();    
    let fakturPajak;
    try {
        fakturPajak = await prismaClient[company].rekam_faktur_pajak_detail.findMany({
            where: {
                AND: [
                    {
                        rekam_faktur_pajak_id: {
                            equals : parseInt(rekam_faktur_pajak_id)
                        }
                    },
                    {
                        OR: [
                            {no_faktur_pajak: {equals: null}},
                            {no_faktur_pajak: {equals: ''}},
                        ]
                    }
                ]
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
    } catch (error) {
        console.error('Error fetching fakturPajak:', error);
        return; // or handle the error as needed
    }

    let toko;
    try {
        toko = await prismaClient[company].toko.findMany();
    } catch (error) {
        console.error('Error fetching toko:', error);
        return; // or handle the error as needed
    }

    const npwp_toko = toko[0].NPWP;
    const npwp_filtered = npwp_toko.replace(/[.-]/g, '');
    const tin_toko = (npwp_filtered.length === 15) ? "0"+npwp_filtered : npwp_filtered;
    const idtku_toko = tin_toko + "000000";

    const unit = {
        "yard": "UM.0016",
        "kg" : "UM.0003",
    }

    let invoices = [];

    try {

        const buyerDocs = {
            'npwp': "TIN",
            'nik': "National ID"
        }

        invoices = fakturPajak.map(fp => {

            if(fp.no_faktur_jual === "PL:PJ01/2502/0289"){
                console.log('fp', fp);
            }

            
            const isNpwp = (fp.no_npwp && fp.no_npwp != "") ? true : false;
            const npwp = (isNpwp ? fp.no_npwp.replace(/[.-]/g, '') : '');
            const npwp_tin = (npwp.length === 15) ? "0"+npwp : npwp;
            const nik = (fp.no_nik ? fp.no_nik : '');

            // klo nik bisa dianggap npwp maka oke tapi sekarnag masih error
            let tin = "";
            let idtku = "";
            let buyerDocument = "";
            let BuyerDocumentNumber = "-";

            if(nik != "" && npwp != "") {
                tin = nik;
                idtku = tin + "000000";
                buyerDocument = buyerDocs['npwp'];
            }else if(isNpwp) {
                tin = npwp_tin;
                idtku = tin + "000000";
                buyerDocument = buyerDocs['npwp'];
            }else{
                tin = "0000000000000000";
                idtku = "000000";
                buyerDocument = buyerDocs['nik'];
                BuyerDocumentNumber = nik;

            }


            const tanggal = new Date(fp.tanggal).toISOString().split('T')[0];
    
            const ppn_berlaku = fp.ppn_berlaku;
    
            const goodServices = fp.penjualan.penjualan_detail.map(pd => {

                const qty = pd.subqty;
    
                
                let dpp = pd.harga_jual / (1 + (ppn_berlaku / 100));
                // dpp = dpp.toFixed(2);
                const subTotal = pd.harga_jual * qty;
                const taxBase = (dpp * qty).toFixed(2);
                let otherTaxBase = taxBase * ppn_berlaku / 12;
                otherTaxBase = otherTaxBase.toFixed(2);
                let vat = subTotal - taxBase;

    
                return {
                    Opt: 'A',
                    Code: '000000',
                    Name: pd.barang.nama_jual,
                    Unit: unit[pd.barang.satuan.nama.toLowerCase()],
                    Price: parseFloat(dpp).toFixed(2),
                    Qty: parseFloat(qty).toFixed(2),
                    TotalDiscount: "0",
                    TaxBase: taxBase,
                    OtherTaxBase: otherTaxBase,
                    VATRate: 12,
                    VAT: vat.toFixed(2),
                    STLGRate: "0",
                    STLG: "0"
                }
    
            });

    
            const listOfGoodService = {
                GoodService: goodServices
            }
            
            return {
                TaxInvoiceDate: tanggal,
                TaxInvoiceOpt: 'Normal',
                TrxCode: '04',
                AddInfo: '',
                CustomDoc: '',
                RefDesc: fp.no_faktur_jual,
                FacilityStamp: '',
                SellerIDTKU: idtku_toko,
                BuyerTin: tin,
                BuyerDocument: buyerDocument,
                BuyerCountry: 'IDN',
                BuyerDocumentNumber: BuyerDocumentNumber,
                BuyerName: fp.nama_customer.trim(),
                BuyerAdress: fp.alamat_lengkap.trim(),
                BuyerEmail: '',
                BuyerIDTKU: idtku,
                ListOfGoodService: listOfGoodService
            }
    
        });
        
    } catch (error) {
        console.log('Error fetching fakturPajak:', error);
        console.error('Error fetching fakturPajak:', error);
        return; // or handle the error as needed
        
    }

    let taxInvoice = {};
    let xmlFinal = {};

    try {
        taxInvoice = invoices;

        xmlFinal = {
            TaxInvoiceBulk: {
                TIN: tin_toko,
                ListOfTaxInvoice: {
                    TaxInvoice: taxInvoice
                }
            }
        };
        
        const builder = new Builder();
        fakturPajakXml = builder.buildObject(xmlFinal);
        
    } catch (error) {
        console.error('Error fetching fakturPajak:', error);
        return; // or handle the error
        
    }

    
    
    return fakturPajakXml;
    // return fakturPajakXml;

    // return fakturPajak;
}

export const coretaxPajakGunggung = async (rekam_faktur_pajak_id, company_name) => {
    
    console.log('company_name', company_name);
    console.log('rekam_faktur_pajak_id', rekam_faktur_pajak_id);

    let fakturPajakXml = null;
    const company = company_name.toLowerCase();    
    let fakturPajak;

    try {
        fakturPajak = await prismaClient[company].rekam_faktur_pajak_detail.findMany({
            where: {
                AND: [
                    {
                        rekam_faktur_pajak_id: {
                            equals : parseInt(rekam_faktur_pajak_id)
                        }
                    },
                    {
                        OR: [
                            {no_faktur_pajak: {equals: null}},
                            {no_faktur_pajak: {equals: ''}},
                        ]
                    }
                ]
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
    } catch (error) {
        console.error('Error fetching fakturPajak:', error);
        return; // or handle the error as needed
    }

    let toko;
    try {
        toko = await prismaClient[company].toko.findMany(); 
        console.log('toko', toko[0].NPWP);
    } catch (error) {
        console.error('Error fetching toko:', error);
        return; // or handle the error as needed
    }

    const npwp_toko = toko[0].NPWP;
    const npwp_filtered = npwp_toko.replace(/[.-]/g, '');
    const tin_toko = (npwp_filtered.length === 15) ? "0"+npwp_filtered : npwp_filtered;
    const idtku_toko = tin_toko + "000000";

    const unit = {
        "yard": "UM.0016",
        "kg" : "UM.0003",
    }

    let invoices = [];
    let month_period = '';
    let year_period = '';

    try {

        const buyerDocs = {
            'npwp': "TIN",
            'nik': "NIK"
        }

        

        invoices = fakturPajak.map(fp => {

            
            const isNpwp = (fp.no_npwp && fp.no_npwp != "") ? true : false;
            const npwp = (isNpwp ? fp.no_npwp.replace(/[.-]/g, '') : '');
            const npwp_tin = (npwp.length === 15) ? "0"+npwp : npwp;
            const nik = (fp.no_nik ? fp.no_nik : '');

            // klo nik bisa dianggap npwp maka oke tapi sekarnag masih error
            let tin = "";
            let idtku = "";
            let buyerDocument = "";
            let BuyerDocumentNumber = "-";

            if(nik != "" && isNpwp) {
                tin = nik;
                idtku = tin + "000000";
                buyerDocument = buyerDocs['npwp'];
            }else if(isNpwp) {
                tin = npwp_tin;
                idtku = tin + "000000";
                buyerDocument = buyerDocs['npwp'];
            }else{
                tin = "0000000000000000";
                idtku = "000000";
                buyerDocument = buyerDocs['nik'];
                BuyerDocumentNumber = nik;

            }


            const tanggal = new Date(fp.tanggal).toISOString().split('T')[0];
            
            if(month_period == '' || year_period == '') {
                const date = new Date(fp.tanggal);
                const month = date.getMonth() + 1; // getMonth() returns 0-11, so add 1
                const year = date.getFullYear();
                month_period = month.toString().padStart(2, '0'); // ensure two digits
                year_period = year.toString();
            }
    
            const ppn_berlaku = fp.ppn_berlaku;

            let totalTaxBase = 0;
            let totalOtherTaxBase = 0;
            let totalVAT = 0;
            fp.penjualan.penjualan_detail.map(pd => {
    
                let dpp = pd.harga_jual / (1 + (ppn_berlaku / 100));
                dpp = dpp.toFixed(2);
                const subTotal = pd.harga_jual * pd.qty;
                const taxBase = (dpp * pd.qty).toFixed(2);
                let otherTaxBase = taxBase * ppn_berlaku / 12;
                otherTaxBase = otherTaxBase.toFixed(2);
                let vat = subTotal - taxBase;

    
                totalTaxBase += parseFloat(taxBase);
                totalOtherTaxBase += parseFloat(otherTaxBase);
                totalVAT += parseFloat(vat);
    
            });
            
            return {
                TrxCode: 'Normal',
                BuyerName: fp.nama_customer.trim(),
                BuyerIdOpt: buyerDocument,
                BuyerIdNumber: BuyerDocumentNumber,
                GoodServiceOpt: 'A',
                SerialNo: fp.no_faktur_jual,
                TransactionDate: tanggal,
                TaxBaseSellingPrice: totalTaxBase.toFixed(2),
                OtherTaxBaseSellingPrice: totalOtherTaxBase.toFixed(2),
                VAT: totalVAT.toFixed(2),
                STLG: "0",
                Info: 'ok'
            };
    
        });
        
    } catch (error) {
        console.log('Error fetching fakturPajak:', error);
        console.error('Error fetching fakturPajak:', error);
        return; // or handle the error as needed
        
    }

    let taxInvoice = {};
    let xmlFinal = {};

    try {
        taxInvoice = invoices;

        xmlFinal = {
            RetailInvoiceBulk: {
                TIN: tin_toko,
                TaxPeriodMonth: month_period,
                TaxPeriodYear: year_period,
                ListOfRetailInvoice: {
                    RetailInvoice: taxInvoice
                }
            }
        };
        
        const builder = new Builder();
        fakturPajakXml = builder.buildObject(xmlFinal);
        
    } catch (error) {
        console.error('Error fetching fakturPajak:', error);
        return; // or handle the error
        
    }

    
    
    return fakturPajakXml;
    // return fakturPajakXml;

    // return fakturPajak;
}