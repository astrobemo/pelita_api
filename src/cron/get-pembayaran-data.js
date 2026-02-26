import axios from 'axios';
import { prismaClient } from '../prisma-client.js';
import { COMPANY } from '../../config/loadEnv.js';

const PEMBAYARAN_ENDPOINT = process.env.PEMBAYARAN_ENDPOINT || 'http://localhost:3033/get_pembayaran_data';
const CRON_INTERVAL_MS = Number(process.env.PEMBAYARAN_CRON_INTERVAL_MS || 30000);
const START_HOUR = Number(process.env.PEMBAYARAN_CRON_START_HOUR || 8);
const END_HOUR = Number(process.env.PEMBAYARAN_CRON_END_HOUR || 17);
const BATCH_LIMIT = Number(process.env.PEMBAYARAN_CRON_BATCH_LIMIT || 5);
const REQUEST_TIMEOUT_MS = Number(process.env.PEMBAYARAN_CRON_TIMEOUT_MS || 10000);

console.log('Pembayaran cron configuration:');
console.log(`PEMBAYARAN_ENDPOINT: ${PEMBAYARAN_ENDPOINT}`);
console.log(`CRON_INTERVAL_MS: ${CRON_INTERVAL_MS}`);

const companyList = COMPANY ? COMPANY.split(',').map((value) => value.toLowerCase()) : [];

const pembayaranNormalize = {};
pembayaranNormalize['Kas Tunai'] = 2;
pembayaranNormalize['Transfer Bank'] = 4;


const isWithinWindow = (date) => {
	const jakartaHour = Number(
		new Intl.DateTimeFormat('en-US', {
			timeZone: 'Asia/Jakarta',
			hour: '2-digit',
			hour12: false
		}).format(date)
	);

	console.log(`Checking WIB hour ${jakartaHour}:00 for window ${START_HOUR}:00 - ${END_HOUR}:00`);
	const hour = jakartaHour;
	return hour >= START_HOUR && hour < END_HOUR;
};

const toNumber = (value) => {
	if (value === null || value === undefined || value === '') {
		return null;
	}
	const numberValue = Number(value);
	return Number.isFinite(numberValue) ? numberValue : null;
};

const toDate = (value) => {
	if (!value) {
		return undefined;
	}
	const date = new Date(value);
	return Number.isNaN(date.getTime()) ? undefined : date;
};

const normalizePayments = (data) => {
	if (Array.isArray(data)) {
		return data;
	}
	if (!data) {
		return [];
	}
	if (Array.isArray(data.pembayaran)) {
		return data.pembayaran;
	}
	if (Array.isArray(data.payments)) {
		return data.payments;
	}
	if (typeof data === 'object') {
		return [data];
	}
	return [];
};

const paymentFingerprint = (payment) => {
	const created = payment.created ? new Date(payment.created).toISOString() : '';
	return `${payment.pembayaran_type_id ?? ''}|${payment.dp_masuk_id ?? ''}|${payment.amount ?? ''}|${payment.keterangan ?? ''}|${created}`;
};

const fetchPembayaran = async (invoiceNumbers) => {
	const response = await axios.post(PEMBAYARAN_ENDPOINT, {
		transaction_no: invoiceNumbers
	}, {
		timeout: REQUEST_TIMEOUT_MS
	});
	return normalizePayments(response.data);
};

const buildInsertPayload = (payment, penjualanId) => {
	const amount = toNumber(payment.amount);
	if (amount === null) {
		return null;
	}

	const pembayaranTypeId = pembayaranNormalize[payment.payment_method_name] || 0;
	

	const payload = {
		penjualan_id: penjualanId,
		pembayaran_type_id: toNumber(pembayaranTypeId),
		dp_masuk_id: toNumber(payment.dp_masuk_id),
		amount,
		keterangan: payment.payment_method_name ?? null,
		user_id: toNumber(payment.user_id)
	};

	const created = toDate(payment.created);
	const updated = toDate(payment.updated);

	if (created) {
		payload.created = created;
	}

	if (updated) {
		payload.updated = updated;
	}

	return payload;
};

const printInsertPayload = (penjualanId, no_faktur_lengkap, user_id) => {

	let timestamp = new Date();
	const jakartaTime = timestamp.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });

	const payload = {
		printer_name : "",
		penjualan_id: penjualanId,
		no_faktur_lengkap: no_faktur_lengkap,
		jenis_dokumen: "all",
		data_faktur: null,
		status : 0,
		user_id: user_id,
		createdAt: new Date(jakartaTime)
	};

	return payload;
}

const syncCompanyPayments = async (companyKey) => {
	const prisma = prismaClient[companyKey];
	if (!prisma) {
		console.warn(`Prisma client not found for company: ${companyKey}`);
		return;
	} 

	const penjualanRows = await prisma.$queryRaw`
		SELECT p.id, p.no_faktur_fp, total_penjualan, pp.id as pembayaran_id
		FROM (
			SELECT * 
			FROM nd_penjualan p
			WHERE p.no_faktur_fp IS NOT NULL
			AND p.no_faktur_fp <> ''
			AND p.status_aktif = 1
			AND p.status = 0
			AND p.penjualan_type_id != 2
			AND p.tanggal >= DATE_SUB(CURDATE(), INTERVAL 5 DAY)
		) p
		LEFT JOIN (
			SELECT penjualan_id, sum(subqty * harga_jual) as total_penjualan
			FROM nd_penjualan_detail
			GROUP BY penjualan_id
		) pDETAIL
		ON pDETAIL.penjualan_id = p.id
		LEFT JOIN (
			SELECT penjualan_id, sum(amount) as total_pembayaran, id
			FROM nd_pembayaran_penjualan
			GROUP BY penjualan_id
		)pp 
		ON pp.penjualan_id = p.id
		WHERE (
			pp.id IS NULL
			OR pp.total_pembayaran < pDETAIL.total_penjualan
		)			
		ORDER BY p.id DESC
		LIMIT ${BATCH_LIMIT}
	`;

	// const invoiceNumbers = penjualanRows.map((row) => row.no_faktur_fp).filter(Boolean);
	const invoiceNumbers = penjualanRows.map((row) => row.no_faktur_fp).filter(Boolean);
	if(!invoiceNumbers.length) {
		console.log(`No invoices found for company ${companyKey}. Skipping pembayaran sync.`);
		return;
	}

	console.log(`Found ${invoiceNumbers.length} invoices for company ${companyKey}:`, invoiceNumbers);
	const invoiceNumberswithId = penjualanRows.map((row) => ({ id: row.id, no_faktur_fp: row.no_faktur_fp })).filter((row) => row.no_faktur_fp);
	const payments = await fetchPembayaran(invoiceNumbers);
	console.log('Fetched pembayaran data:', payments[0]);

	const checkPaymentStatus = payments[0].success;
	console.log(`Payment status for company ${companyKey}: ${checkPaymentStatus}`);
	if (checkPaymentStatus) {	
		const paymentData = payments[0].data;
		const transStatus = paymentData[0].transaction_status.name;
		console.log(`Processing ${paymentData.length} pembayaran records for company ${companyKey}`);
		console.log('Sample pembayaran record:', paymentData);
		for (const payment of paymentData) {
			const matchingInvoice = invoiceNumberswithId.find((invoice) => invoice.no_faktur_fp === payment.transaction_no);
			if (matchingInvoice) {

				/* await prisma.nd_pembayaran_penjualan.deleteMany({
					where: { penjualan_id: matchingInvoice.id }
				}); */

				const paymentList = payment.payments || [];
				const inserts = [];

				for (const paymentItem of paymentList) {
					let isReconciled = paymentItem.is_reconciled;
					if(paymentItem.payment_method_name === 'Transfer Bank') {
						if (!isReconciled) {
							continue;
						}
					}
					const payload = buildInsertPayload(paymentItem, matchingInvoice.id);
					if (payload) {
						inserts.push(payload);
					}
					else {
						console.warn(`Invalid payment data for invoice ${payment.transaction_no}:`, paymentItem);
					}
				}

				if (inserts.length) {
					await prisma.nd_pembayaran_penjualan.createMany({
						data: inserts
					});
					console.log(`Inserted ${inserts.length} pembayaran rows for invoice ${payment.transaction_no}`);

					if(transStatus === 'paid') {

						const printPayload = printInsertPayload(matchingInvoice.id, matchingInvoice.no_faktur_fp, matchingInvoice.user_id);
						await prisma.nd_print_jual_log.create({
							data: printPayload
						});
						console.log(`Enqueued print job for invoice ${payment.transaction_no}`);
					}else{
						console.log(`Transaction status for invoice ${payment.transaction_no} is ${transStatus}. Skipping print job.`);
					}
				}

				/*
				data: {
					data_faktur: dataPrint,
					jenis_dokumen: jenisDokumen,
					penjualan_id: "<?=$penjualan_id?>",
					no_faktur_lengkap: "<?=$no_faktur_lengkap?>",
					status: 1,
				},
				 */
			}else{
				console.warn(`No matching invoice found for payment with transaction_no: ${payment.transaction_no}`);
				continue;
			}
		}
	}
};

export const startPembayaranCron = () => {
	if (!PEMBAYARAN_ENDPOINT) {
		console.warn('PEMBAYARAN_ENDPOINT is not set. Pembayaran cron will not start.');
		return;
	}

	if (!companyList.length) {
		console.warn('COMPANY is not set. Pembayaran cron will not start.');
		return;
	}

	let running = false;
	const run = async () => {
		if (running) {
			return;
		}

		if (!isWithinWindow(new Date())) {
			console.log('Current time is outside of the defined window. Skipping pembayaran sync.');
			return;
		}

		running = true;
		try {
			// syncCompanyPayments("TEST");
			// fetchPembayaran(" PA:PJ01/2602/0001");
			for (const companyKey of companyList) {
				console.log(`Starting pembayaran sync for company: ${companyKey}`);
				await syncCompanyPayments(companyKey);
			}
		} catch (error) {
			console.error('Pembayaran cron failed:', error.message);
		} finally {
			running = false;
		}
	};

	run();
	setInterval(run, CRON_INTERVAL_MS);
	console.log('Pembayaran cron started.');
};
