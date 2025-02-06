import { prismaClient } from '../prisma-client.js';
import fs from 'fs';
import { Builder } from 'xml2js';

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

    
    /*
    template xml

    <?xml version="1.0" encoding="utf-8"?>
        <TaxInvoiceBulk xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <TIN>1091031210912281</TIN>
        <ListOfTaxInvoice>
            <TaxInvoice>
            <TaxInvoiceDate>2025-01-02</TaxInvoiceDate>
            <TaxInvoiceOpt>Normal</TaxInvoiceOpt>
            <TrxCode>08</TrxCode>
            <AddInfo>TD.00501</AddInfo>
            <CustomDoc/>
            <RefDesc>Test 01</RefDesc>
            <FacilityStamp>TD.01101</FacilityStamp>
            <SellerIDTKU>1091031210912281000000</SellerIDTKU>
            <BuyerTin>1091031210912343</BuyerTin>
            <BuyerDocument>TIN</BuyerDocument>
            <BuyerCountry>IDN</BuyerCountry>
            <BuyerDocumentNumber>-</BuyerDocumentNumber>
            <BuyerName>Kongsi PPN</BuyerName>
            <BuyerAdress>Jalan Jakarta</BuyerAdress>
            <BuyerEmail>a2@some.com</BuyerEmail>
            <BuyerIDTKU>1091031210912343000000</BuyerIDTKU>
            <ListOfGoodService>
                <GoodService>
                <Opt>A</Opt>
                <Code>000000</Code>
                <Name>Barang ABC</Name>
                <Unit>UM.0002</Unit>
                <Price>12000000.12</Price>
                <Qty>10</Qty>
                <TotalDiscount>10000.89</TotalDiscount>
                <TaxBase>119990000.31</TaxBase>
                <OtherTaxBase>109990833.62</OtherTaxBase>
                <VATRate>12</VATRate>
                <VAT>13198900.03</VAT>
                <STLGRate>10</STLGRate>
                <STLG>10999083.36</STLG>
                </GoodService>
                <GoodService>
                <Opt>A</Opt>
                <Code>000000</Code>
                <Name>Barang BCD</Name>
                <Unit>UM.0002</Unit>
                <Price>12000000.52</Price>
                <Qty>10</Qty>
                <TotalDiscount>0</TotalDiscount>
                <TaxBase>120000005.2</TaxBase>
                <OtherTaxBase>120000005.2</OtherTaxBase>
                <VATRate>12</VATRate>
                <VAT>14400000.62</VAT>
                <STLGRate>10</STLGRate>
                <STLG>12000000.52</STLG>
                </GoodService>
                <GoodService>
                <Opt>A</Opt>
                <Code>000000</Code>
                <Name>Barang CDE</Name>
                <Unit>UM.0002</Unit>
                <Price>12000000.52</Price>
                <Qty>10</Qty>
                <TotalDiscount>0</TotalDiscount>
                <TaxBase>120000005.2</TaxBase>
                <OtherTaxBase>120000005.2</OtherTaxBase>
                <VATRate>12</VATRate>
                <VAT>14400000.62</VAT>
                <STLGRate>10</STLGRate>
                <STLG>12000000.52</STLG>
                </GoodService>
            </ListOfGoodService>
            </TaxInvoice>
        </ListOfTaxInvoice>
        </TaxInvoiceBulk>
     */

        const toko = await prismaClient[company].toko.findUnique({
            where: {
                id: 1
            }
        });

    const npwp_toko = toko[0].npwp;
    const npwp_filtered = npwp_toko.replace(/[.-]/g, '');
    const tin_toko = (npwp_filtered.length === 15) ? "0"+npwp_filtered : npwp_filtered;
    const idtku_toko = tin_toko + "000000";

    const builder = new Builder();
    const fakturPajakXml = builder.buildObject(fakturPajak);

    const unit = {
        "yard": "UM.0016",
        "kg" : "UM.0003",
    }

    const invoices = fakturPajak.map(fp => {
        const npwp = fp.no_npwp.replace(/[.-]/g, '');
        const npwp_tin = (npwp.length === 15) ? "0"+npwp : npwp;
        const nik = fp.no_nik;
        const tin = (npwp_tin.length > 0) ? npwp_tin : nik;
        let listOfGoodService = [];

        const ppn_berlaku = fp.ppn_berlaku;

        listOfGoodService = fp.penjualan.penjualan_detail.map(pd => {

            let dpp = pd.harga / (1 + (ppn_berlaku / 100));
            dpp = dpp.toFixed(2);
            const subTotal = pd.harga * pd.qty;
            const taxBase = dpp * pd.qty;
            let otherTaxBase = taxBase * ppn / 12;
            otherTaxBase = otherTaxBase.toFixed(2);
            let vat = subTotal - taxBase;

            ListOfGoodService.push({
                Opt: 'A',
                Code: '000000',
                Name: pd.barang.nama_jual,
                Unit: unit[pd.barang.satuan.toLowerCase()],
                Price: dpp,
                Qty: pd.qty,
                TotalDiscount: "0",
                TaxBase: taxBase,
                OtherTaxBase: otherTaxBase,
                VATRate: 12,
                VAT: vat,
                STLGRate: "0",
                STLG: "0"
            });

            return ListOfGoodService;
        });

        return TaxInvoice = {
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
            ListOfGoodService: listOfGoodService.map(xml=>xml.ListOfGoodService)
        }
    });

    const xmlFinal = {
        TaxInvoiceBulk: {
            TIN: tin_toko,
            ListOfTaxInvoice: {
                TaxInvoice: invoices.map(xml=>xml.TaxInvoice)
            }
        }
    };




    console.log(xmlFinal);
    fs.writeFileSync('/path/to/output.xml', xmlFinal);

    // return fakturPajak;
}