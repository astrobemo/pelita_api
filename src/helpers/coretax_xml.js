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

        const builder = new Builder();
    const fakturPajakXml = builder.buildObject(fakturPajak);

    const xmlTemplate = {
        TaxInvoiceBulk: {
            TIN: '1091031210912281',
            ListOfTaxInvoice: {
                TaxInvoice: fakturPajak.map(fp => ({
                    TaxInvoiceDate: '2025-01-02',
                    TaxInvoiceOpt: 'Normal',
                    TrxCode: '08',
                    AddInfo: 'TD.00501',
                    CustomDoc: '',
                    RefDesc: 'Test 01',
                    FacilityStamp: 'TD.01101',
                    SellerIDTKU: '1091031210912281000000',
                    BuyerTin: '1091031210912343',
                    BuyerDocument: 'TIN',
                    BuyerCountry: 'IDN',
                    BuyerDocumentNumber: '-',
                    BuyerName: 'Kongsi PPN',
                    BuyerAdress: 'Jalan Jakarta',
                    BuyerEmail: 'a2@some.com',
                    BuyerIDTKU: '1091031210912343000000',
                    ListOfGoodService: {
                        GoodService: fp.penjualan.penjualan_detail.map(pd => ({
                            Opt: 'A',
                            Code: '000000',
                            Name: pd.barang.name,
                            Unit: pd.barang.satuan.name,
                            Price: pd.price,
                            Qty: pd.qty,
                            TotalDiscount: pd.total_discount,
                            TaxBase: pd.tax_base,
                            OtherTaxBase: pd.other_tax_base,
                            VATRate: pd.vat_rate,
                            VAT: pd.vat,
                            STLGRate: pd.stlg_rate,
                            STLG: pd.stlg
                        }))
                    }
                }))
            }
        }
    };


    fs.writeFileSync('/path/to/output.xml', fakturPajakXml);
    console.log(fakturPajakXml);

    return fakturPajak;
}