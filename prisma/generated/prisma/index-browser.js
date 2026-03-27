
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Nd_bank_listScalarFieldEnum = {
  id: 'id',
  nama_bank: 'nama_bank',
  no_rek_bank: 'no_rek_bank',
  tipe_trx_1: 'tipe_trx_1',
  tipe_trx_2: 'tipe_trx_2',
  status_default: 'status_default',
  status_aktif: 'status_aktif',
  user_id: 'user_id',
  updated_at: 'updated_at'
};

exports.Prisma.Nd_barangScalarFieldEnum = {
  id: 'id',
  jenis_barang: 'jenis_barang',
  nama: 'nama',
  nama_jual: 'nama_jual',
  harga_jual: 'harga_jual',
  harga_beli: 'harga_beli',
  satuan_id: 'satuan_id',
  qty_warning: 'qty_warning',
  deskripsi_info: 'deskripsi_info',
  status_aktif: 'status_aktif',
  tipe_qty: 'tipe_qty',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Nd_barang_beliScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  barang_id: 'barang_id',
  user_id: 'user_id',
  status_aktif: 'status_aktif',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Nd_barang_forecasting_dataScalarFieldEnum = {
  id: 'id',
  barang_id: 'barang_id',
  warna_id: 'warna_id',
  period: 'period',
  qty: 'qty',
  user_id: 'user_id',
  created_at: 'created_at',
  updated: 'updated'
};

exports.Prisma.Nd_barang_forecasting_keteranganScalarFieldEnum = {
  id: 'id',
  barang_id: 'barang_id',
  warna_id: 'warna_id',
  period: 'period',
  keterangan: 'keterangan',
  user_id: 'user_id',
  created: 'created',
  updated: 'updated'
};

exports.Prisma.Nd_barang_groupScalarFieldEnum = {
  id: 'id',
  barang_id: 'barang_id',
  barang_id_induk: 'barang_id_induk',
  user_id: 'user_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  status_aktif: 'status_aktif'
};

exports.Prisma.Nd_barang_harga_historyScalarFieldEnum = {
  id: 'id',
  tanggal: 'tanggal',
  barang_id: 'barang_id',
  harga_beli: 'harga_beli',
  harga_jual: 'harga_jual',
  created_at: 'created_at',
  updated_at: 'updated_at',
  user_id: 'user_id'
};

exports.Prisma.Nd_barang_warna_tempScalarFieldEnum = {
  id: 'id',
  barang_id: 'barang_id',
  warna_id: 'warna_id'
};

exports.Prisma.Nd_bayar_dpScalarFieldEnum = {
  id: 'id',
  nama: 'nama'
};

exports.Prisma.Nd_bday_userScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  ulang_tahun: 'ulang_tahun'
};

exports.Prisma.Nd_close_dayScalarFieldEnum = {
  id: 'id',
  tanggal_start: 'tanggal_start',
  tanggal_end: 'tanggal_end',
  user_id: 'user_id'
};

exports.Prisma.Nd_controllerScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.Nd_customerScalarFieldEnum = {
  id: 'id',
  customer_type_id: 'customer_type_id',
  nama: 'nama',
  alias: 'alias',
  alamat: 'alamat',
  telepon1: 'telepon1',
  telepon2: 'telepon2',
  npwp_lama: 'npwp_lama',
  npwp: 'npwp',
  nik: 'nik',
  kota: 'kota',
  provinsi: 'provinsi',
  kode_pos: 'kode_pos',
  email: 'email',
  contact_person: 'contact_person',
  tempo_kredit: 'tempo_kredit',
  warning_kredit: 'warning_kredit',
  limit_warning_type: 'limit_warning_type',
  limit_amount: 'limit_amount',
  limit_atas: 'limit_atas',
  limit_warning_amount: 'limit_warning_amount',
  status_aktif: 'status_aktif',
  img_link: 'img_link',
  npwp_link: 'npwp_link',
  ktp_link: 'ktp_link',
  medsos_link: 'medsos_link',
  updated_at: 'updated_at',
  tipe_company: 'tipe_company',
  blok: 'blok',
  no: 'no',
  rt: 'rt',
  rw: 'rw',
  kecamatan: 'kecamatan',
  kelurahan: 'kelurahan',
  locked_status: 'locked_status',
  user_id: 'user_id',
  created_register: 'created_register',
  verified_time: 'verified_time',
  customer_id_central: 'customer_id_central'
};

exports.Prisma.Nd_customer_alamat_kirimScalarFieldEnum = {
  id: 'id',
  customer_id: 'customer_id',
  alamat: 'alamat',
  catatan: 'catatan',
  user_id: 'user_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  status_aktif: 'status_aktif'
};

exports.Prisma.Nd_customer_backupScalarFieldEnum = {
  id: 'id',
  customer_type_id: 'customer_type_id',
  nama: 'nama',
  alias: 'alias',
  alamat: 'alamat',
  telepon1: 'telepon1',
  telepon2: 'telepon2',
  npwp: 'npwp',
  nik: 'nik',
  kota: 'kota',
  provinsi: 'provinsi',
  kode_pos: 'kode_pos',
  email: 'email',
  contact_person: 'contact_person',
  tempo_kredit: 'tempo_kredit',
  warning_kredit: 'warning_kredit',
  limit_warning_type: 'limit_warning_type',
  limit_amount: 'limit_amount',
  limit_atas: 'limit_atas',
  limit_warning_amount: 'limit_warning_amount',
  status_aktif: 'status_aktif',
  img_link: 'img_link',
  npwp_link: 'npwp_link',
  ktp_link: 'ktp_link',
  medsos_link: 'medsos_link',
  updated_at: 'updated_at',
  tipe_company: 'tipe_company',
  blok: 'blok',
  no: 'no',
  rt: 'rt',
  rw: 'rw',
  kecamatan: 'kecamatan',
  kelurahan: 'kelurahan',
  locked_status: 'locked_status',
  user_id: 'user_id'
};

exports.Prisma.Nd_customer_hargaScalarFieldEnum = {
  id: 'id',
  customer_id: 'customer_id',
  tipe: 'tipe',
  group_harga_barang_id: 'group_harga_barang_id',
  user_id: 'user_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Nd_customer_harga_detailScalarFieldEnum = {
  id: 'id',
  customer_harga_id: 'customer_harga_id',
  customer_id: 'customer_id',
  tipe: 'tipe',
  barang_id: 'barang_id',
  selisih_harga: 'selisih_harga',
  harga_total: 'harga_total',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Nd_customer_harga_historyScalarFieldEnum = {
  id: 'id',
  customer_harga_id: 'customer_harga_id',
  harga_id_before: 'harga_id_before',
  harga_id_after: 'harga_id_after',
  user_id: 'user_id',
  created_at: 'created_at'
};

exports.Prisma.Nd_customer_harga_history_detailScalarFieldEnum = {
  id: 'id',
  customer_id: 'customer_id',
  tipe: 'tipe',
  barang_id: 'barang_id',
  harga_before: 'harga_before',
  harga_after: 'harga_after',
  user_id: 'user_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Nd_customer_sourceScalarFieldEnum = {
  id: 'id',
  customer_id: 'customer_id',
  registered_date: 'registered_date',
  source_type: 'source_type',
  source_detail: 'source_detail',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Nd_dp_keluarScalarFieldEnum = {
  id: 'id',
  dp_masuk_id: 'dp_masuk_id',
  pembayaran_type_id: 'pembayaran_type_id',
  tanggal: 'tanggal',
  amount: 'amount',
  keterangan: 'keterangan',
  user_id: 'user_id',
  nama_bank: 'nama_bank',
  no_rek_bank: 'no_rek_bank',
  nama_penerima: 'nama_penerima',
  created_at: 'created_at'
};

exports.Prisma.Nd_dp_masukScalarFieldEnum = {
  id: 'id',
  no_dp: 'no_dp',
  customer_id: 'customer_id',
  tanggal: 'tanggal',
  pembayaran_type_id: 'pembayaran_type_id',
  nama_bank: 'nama_bank',
  no_rek_bank: 'no_rek_bank',
  urutan_giro: 'urutan_giro',
  no_giro: 'no_giro',
  no_akun_giro: 'no_akun_giro',
  tanggal_giro: 'tanggal_giro',
  jatuh_tempo: 'jatuh_tempo',
  nama_penerima: 'nama_penerima',
  amount: 'amount',
  keterangan: 'keterangan',
  user_id: 'user_id',
  created: 'created'
};

exports.Prisma.Nd_dp_masuk_ScalarFieldEnum = {
  id: 'id',
  no_dp: 'no_dp',
  customer_id: 'customer_id',
  penyerah: 'penyerah',
  penerima: 'penerima',
  tanggal: 'tanggal',
  amount: 'amount',
  pembayaran_type_id: 'pembayaran_type_id',
  keterangan: 'keterangan',
  user_id: 'user_id',
  created: 'created'
};

exports.Prisma.Nd_giro_listScalarFieldEnum = {
  id: 'id',
  bank_list_id: 'bank_list_id',
  tipe_trx: 'tipe_trx',
  no_giro_awal: 'no_giro_awal',
  jml_giro: 'jml_giro',
  user_id: 'user_id',
  created: 'created'
};

exports.Prisma.Nd_giro_list_detailScalarFieldEnum = {
  id: 'id',
  giro_list_id: 'giro_list_id',
  tanggal: 'tanggal',
  no_giro: 'no_giro',
  amount: 'amount',
  jatuh_tempo: 'jatuh_tempo',
  tanggal_cair: 'tanggal_cair',
  penerima: 'penerima',
  keterangan: 'keterangan',
  user_id: 'user_id',
  updated: 'updated',
  status: 'status'
};

exports.Prisma.Nd_giro_setorScalarFieldEnum = {
  id: 'id',
  toko_id: 'toko_id',
  tanggal: 'tanggal',
  keterangan: 'keterangan',
  user_id: 'user_id',
  created: 'created'
};

exports.Prisma.Nd_giro_setor_detailScalarFieldEnum = {
  id: 'id',
  numerator: 'numerator',
  giro_setor_id: 'giro_setor_id',
  pembayaran_piutang_nilai_id: 'pembayaran_piutang_nilai_id',
  data_type: 'data_type'
};

exports.Prisma.Nd_giro_terima_beforeScalarFieldEnum = {
  id: 'id',
  pembayaran_type_id: 'pembayaran_type_id',
  tanggal: 'tanggal',
  urutan_giro: 'urutan_giro',
  nama_bank: 'nama_bank',
  no_rek_bank: 'no_rek_bank',
  no_giro: 'no_giro',
  jatuh_tempo: 'jatuh_tempo',
  amount: 'amount',
  pembayaran_piutang_id_before: 'pembayaran_piutang_id_before',
  pembayaran_piutang_detail_id_before: 'pembayaran_piutang_detail_id_before',
  customer_id: 'customer_id'
};

exports.Prisma.Nd_giro_tolakanScalarFieldEnum = {
  id: 'id',
  customer_id: 'customer_id',
  tanggal: 'tanggal',
  pembayaran_piutang_nilai_id: 'pembayaran_piutang_nilai_id',
  keterangan: 'keterangan',
  user_id: 'user_id',
  created: 'created',
  updated: 'updated'
};

exports.Prisma.Nd_giro_urutanScalarFieldEnum = {
  id: 'id',
  source_table_id: 'source_table_id',
  data_type: 'data_type',
  urutan: 'urutan'
};

exports.Prisma.Nd_group_harga_barangScalarFieldEnum = {
  id: 'id',
  tipe: 'tipe',
  nama: 'nama',
  deskripsi: 'deskripsi',
  isDefault: 'isDefault',
  user_id: 'user_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Nd_group_harga_baruScalarFieldEnum = {
  id: 'id',
  group_harga_barang_id: 'group_harga_barang_id',
  barang_id: 'barang_id',
  harga_cash: 'harga_cash',
  harga_kredit: 'harga_kredit',
  harga_baru: 'harga_baru',
  updatedAt: 'updatedAt'
};

exports.Prisma.Nd_group_harga_baru_infoScalarFieldEnum = {
  id: 'id',
  group_harga_barang_id: 'group_harga_barang_id',
  status: 'status',
  locked_by: 'locked_by',
  launch_by: 'launch_by',
  launch_date: 'launch_date',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Nd_group_harga_berlakuScalarFieldEnum = {
  id: 'id',
  group_harga_barang_id: 'group_harga_barang_id',
  barang_id: 'barang_id',
  harga_cash: 'harga_cash',
  harga_kredit: 'harga_kredit',
  harga_berlaku: 'harga_berlaku',
  updatedAt: 'updatedAt',
  created_at: 'created_at'
};

exports.Prisma.Nd_group_harga_historyScalarFieldEnum = {
  id: 'id',
  harga_baru_info_id: 'harga_baru_info_id',
  group_harga_barang_id: 'group_harga_barang_id',
  barang_id: 'barang_id',
  harga_cash: 'harga_cash',
  harga_kredit: 'harga_kredit',
  harga_history: 'harga_history',
  tanggal_archive: 'tanggal_archive',
  updatedAt: 'updatedAt'
};

exports.Prisma.Nd_gudangScalarFieldEnum = {
  id: 'id',
  gudang_group_id: 'gudang_group_id',
  nama: 'nama',
  lokasi: 'lokasi',
  status_default: 'status_default',
  visible: 'visible',
  urutan: 'urutan',
  status_aktif: 'status_aktif'
};

exports.Prisma.Nd_gudang_groupScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  user_id: 'user_id',
  created: 'created',
  updated: 'updated'
};

exports.Prisma.Nd_history_harga_customerScalarFieldEnum = {
  id: 'id',
  barang_id: 'barang_id',
  warna_id: 'warna_id',
  customer_id: 'customer_id',
  harga_jual: 'harga_jual',
  tanggal: 'tanggal',
  penjualan_id: 'penjualan_id',
  no_faktur: 'no_faktur'
};

exports.Prisma.Nd_hutang_awalScalarFieldEnum = {
  id: 'id',
  toko_id: 'toko_id',
  supplier_id: 'supplier_id',
  tanggal: 'tanggal',
  no_faktur: 'no_faktur',
  amount: 'amount',
  jatuh_tempo: 'jatuh_tempo',
  jumlah_roll: 'jumlah_roll',
  user_id: 'user_id',
  pembelian_id_before: 'pembelian_id_before'
};

exports.Prisma.Nd_maintenance_listScalarFieldEnum = {
  id: 'id',
  start_time: 'start_time',
  end_time: 'end_time',
  user_id: 'user_id',
  status: 'status'
};

exports.Prisma.Nd_master_barang_skuScalarFieldEnum = {
  id: 'id',
  barang_sku_id: 'barang_sku_id',
  nama_barang: 'nama_barang',
  barang_id_master: 'barang_id_master',
  warna_id_master: 'warna_id_master',
  satuan_id_master: 'satuan_id_master',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Nd_master_toko_barangScalarFieldEnum = {
  id: 'id',
  barang_id_toko: 'barang_id_toko',
  barang_id_master: 'barang_id_master',
  nama_master: 'nama_master',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Nd_master_toko_satuanScalarFieldEnum = {
  id: 'id',
  satuan_id_toko: 'satuan_id_toko',
  satuan_id_master: 'satuan_id_master',
  nama_master: 'nama_master',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Nd_master_toko_warnaScalarFieldEnum = {
  id: 'id',
  warna_id_toko: 'warna_id_toko',
  warna_id_master: 'warna_id_master',
  nama_master: 'nama_master',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Nd_menuScalarFieldEnum = {
  id: 'id',
  status_aktif: 'status_aktif',
  icon_class: 'icon_class',
  nama_id: 'nama_id',
  text: 'text',
  urutan: 'urutan'
};

exports.Prisma.Nd_menu_detailScalarFieldEnum = {
  id: 'id',
  menu_id: 'menu_id',
  controller: 'controller',
  page_link: 'page_link',
  status_aktif: 'status_aktif',
  text: 'text',
  urutan: 'urutan',
  level: 'level',
  parent_id: 'parent_id',
  created: 'created'
};

exports.Prisma.Nd_menu_posisiScalarFieldEnum = {
  id: 'id',
  posisi_id: 'posisi_id',
  menu_id: 'menu_id',
  menu_detail_id: 'menu_detail_id'
};

exports.Prisma.Nd_mutasi_barangScalarFieldEnum = {
  id: 'id',
  toko_id: 'toko_id',
  tanggal: 'tanggal',
  no_mutasi: 'no_mutasi',
  no_mutasi_lengkap: 'no_mutasi_lengkap',
  barang_id: 'barang_id',
  warna_id: 'warna_id',
  gudang_id_before: 'gudang_id_before',
  gudang_id_after: 'gudang_id_after',
  qty: 'qty',
  jumlah_roll: 'jumlah_roll',
  nama_kru: 'nama_kru',
  status_aktif: 'status_aktif',
  user_id: 'user_id',
  updated_at: 'updated_at',
  created_at: 'created_at'
};

exports.Prisma.Nd_mutasi_barang_qtyScalarFieldEnum = {
  id: 'id',
  mutasi_barang_id: 'mutasi_barang_id',
  qty: 'qty',
  jumlah_roll: 'jumlah_roll',
  updated_at: 'updated_at'
};

exports.Prisma.Nd_mutasi_persediaan_barang_tahunanScalarFieldEnum = {
  id: 'id',
  tanggal: 'tanggal',
  barang_id: 'barang_id',
  warna_id: 'warna_id',
  harga: 'harga',
  qty: 'qty',
  jumlah_roll: 'jumlah_roll',
  created_at: 'created_at',
  updated_at: 'updated_at',
  user_id: 'user_id'
};

exports.Prisma.Nd_mutasi_persediaan_barang_tahunan_detailScalarFieldEnum = {
  id: 'id',
  gudang_id: 'gudang_id',
  qty: 'qty',
  jumlah_roll: 'jumlah_roll',
  created_at: 'created_at',
  updated_at: 'updated_at',
  user_id: 'user_id'
};

exports.Prisma.Nd_no_faktur_pajakScalarFieldEnum = {
  id: 'id',
  tanggal: 'tanggal',
  tahun_pajak: 'tahun_pajak',
  no_fp_awal: 'no_fp_awal',
  no_fp_akhir: 'no_fp_akhir',
  user_id: 'user_id',
  updated_at: 'updated_at',
  created_at: 'created_at'
};

exports.Prisma.Nd_note_orderScalarFieldEnum = {
  id: 'id',
  tipe_customer: 'tipe_customer',
  customer_id: 'customer_id',
  nama_customer: 'nama_customer',
  contact_person: 'contact_person',
  contact_info: 'contact_info',
  tanggal_note_order: 'tanggal_note_order',
  tanggal_target: 'tanggal_target'
};

exports.Prisma.Nd_note_order_detailScalarFieldEnum = {
  id: 'id',
  note_order_id: 'note_order_id',
  barang_id: 'barang_id',
  nama_barang: 'nama_barang',
  warna_id: 'warna_id',
  nama_warna: 'nama_warna',
  roll: 'roll',
  qty: 'qty',
  harga: 'harga',
  status: 'status',
  done_by: 'done_by',
  done_time: 'done_time',
  cancel_note: 'cancel_note'
};

exports.Prisma.Nd_notifikasi_akuntingScalarFieldEnum = {
  id: 'id',
  created: 'created',
  read_by: 'read_by',
  read_time: 'read_time',
  customer_id: 'customer_id',
  amount: 'amount',
  keterangan: 'keterangan',
  verified_by: 'verified_by'
};

exports.Prisma.Nd_number_trackerScalarFieldEnum = {
  id: 'id',
  number: 'number',
  tanggal: 'tanggal',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Nd_ockh_non_poScalarFieldEnum = {
  id: 'id',
  tanggal: 'tanggal',
  supplier_id: 'supplier_id',
  ockh: 'ockh',
  harga: 'harga',
  barang_id: 'barang_id',
  user_id: 'user_id',
  updated_at: 'updated_at',
  created_at: 'created_at'
};

exports.Prisma.Nd_ockh_non_po_warnaScalarFieldEnum = {
  id: 'id',
  ockh_non_po_id: 'ockh_non_po_id',
  warna_id: 'warna_id',
  qty: 'qty',
  user_id: 'user_id',
  updated_at: 'updated_at',
  created_at: 'created_at'
};

exports.Prisma.Nd_pembayaran_hutangScalarFieldEnum = {
  id: 'id',
  supplier_id: 'supplier_id',
  toko_id: 'toko_id',
  pembulatan: 'pembulatan',
  user_id: 'user_id',
  created: 'created'
};

exports.Prisma.Nd_pembayaran_hutang_detailScalarFieldEnum = {
  id: 'id',
  pembayaran_hutang_id: 'pembayaran_hutang_id',
  pembelian_id: 'pembelian_id',
  amount: 'amount',
  data_status: 'data_status'
};

exports.Prisma.Nd_pembayaran_hutang_nilaiScalarFieldEnum = {
  id: 'id',
  pembayaran_hutang_id: 'pembayaran_hutang_id',
  pembayaran_type_id: 'pembayaran_type_id',
  giro_register_id: 'giro_register_id',
  bank_list_id: 'bank_list_id',
  nama_bank: 'nama_bank',
  no_rek_bank: 'no_rek_bank',
  tanggal_transfer: 'tanggal_transfer',
  no_giro: 'no_giro',
  tanggal_giro: 'tanggal_giro',
  jatuh_tempo: 'jatuh_tempo',
  tanggal_cair: 'tanggal_cair',
  nama_penerima: 'nama_penerima',
  amount: 'amount',
  keterangan: 'keterangan',
  user_id: 'user_id',
  created: 'created',
  status: 'status'
};

exports.Prisma.Nd_pembayaran_pembelianScalarFieldEnum = {
  id: 'id',
  pembelian_id: 'pembelian_id',
  pembayaran_type_id: 'pembayaran_type_id',
  amount: 'amount'
};

exports.Prisma.Nd_pembayaran_pengeluaran_stok_lainScalarFieldEnum = {
  id: 'id',
  pengeluaran_stok_lain_id: 'pengeluaran_stok_lain_id',
  pembayaran_type_id: 'pembayaran_type_id',
  dp_masuk_id: 'dp_masuk_id',
  amount: 'amount',
  keterangan: 'keterangan',
  user_id: 'user_id'
};

exports.Prisma.Nd_pembayaran_penjualanScalarFieldEnum = {
  id: 'id',
  penjualan_id: 'penjualan_id',
  pembayaran_type_id: 'pembayaran_type_id',
  dp_masuk_id: 'dp_masuk_id',
  amount: 'amount',
  keterangan: 'keterangan',
  user_id: 'user_id',
  created: 'created',
  updated: 'updated'
};

exports.Prisma.Nd_pembayaran_penjualan_giroScalarFieldEnum = {
  id: 'id',
  penjualan_id: 'penjualan_id',
  nama_bank: 'nama_bank',
  no_rek_bank: 'no_rek_bank',
  tanggal_giro: 'tanggal_giro',
  jatuh_tempo: 'jatuh_tempo',
  no_akun: 'no_akun',
  keterangan: 'keterangan',
  tanggal_setor: 'tanggal_setor',
  user_id: 'user_id',
  created: 'created'
};

exports.Prisma.Nd_pembayaran_piutangScalarFieldEnum = {
  id: 'id',
  customer_id: 'customer_id',
  tanggal_kontra: 'tanggal_kontra',
  toko_id: 'toko_id',
  pembulatan: 'pembulatan',
  lain2: 'lain2',
  user_id: 'user_id',
  created: 'created',
  status_aktif: 'status_aktif'
};

exports.Prisma.Nd_pembayaran_piutang_detailScalarFieldEnum = {
  id: 'id',
  pembayaran_piutang_id: 'pembayaran_piutang_id',
  penjualan_id: 'penjualan_id',
  amount: 'amount',
  data_status: 'data_status'
};

exports.Prisma.Nd_pembayaran_piutang_nilaiScalarFieldEnum = {
  id: 'id',
  pembayaran_piutang_id: 'pembayaran_piutang_id',
  pembayaran_type_id: 'pembayaran_type_id',
  dp_masuk_id: 'dp_masuk_id',
  nama_bank: 'nama_bank',
  no_rek_bank: 'no_rek_bank',
  tanggal_transfer: 'tanggal_transfer',
  no_giro: 'no_giro',
  urutan_giro: 'urutan_giro',
  no_akun_giro: 'no_akun_giro',
  tanggal_giro: 'tanggal_giro',
  jatuh_tempo: 'jatuh_tempo',
  nama_penerima: 'nama_penerima',
  amount: 'amount',
  keterangan: 'keterangan',
  user_id: 'user_id',
  created: 'created'
};

exports.Prisma.Nd_pembayaran_piutang_nilai_infoScalarFieldEnum = {
  id: 'id',
  pembayaran_piutang_nilai_id: 'pembayaran_piutang_nilai_id',
  pembayaran_piutang_detail_id: 'pembayaran_piutang_detail_id',
  penjualan_id: 'penjualan_id',
  updated: 'updated'
};

exports.Prisma.Nd_pembayaran_returScalarFieldEnum = {
  id: 'id',
  retur_jual_id: 'retur_jual_id',
  pembayaran_type_id: 'pembayaran_type_id',
  amount: 'amount',
  keterangan: 'keterangan'
};

exports.Prisma.Nd_pembayaran_typeScalarFieldEnum = {
  id: 'id',
  nama: 'nama'
};

exports.Prisma.Nd_pembelianScalarFieldEnum = {
  id: 'id',
  no_nota: 'no_nota',
  ockh_info: 'ockh_info',
  no_faktur: 'no_faktur',
  penerimaan_barang_id: 'penerimaan_barang_id',
  po_pembelian_batch_id: 'po_pembelian_batch_id',
  tanggal: 'tanggal',
  toko_id: 'toko_id',
  supplier_id: 'supplier_id',
  gudang_id: 'gudang_id',
  diskon: 'diskon',
  jatuh_tempo: 'jatuh_tempo',
  keterangan: 'keterangan',
  status: 'status',
  status_aktif: 'status_aktif',
  user_id: 'user_id',
  created_at: 'created_at',
  cancelled_by: 'cancelled_by',
  cancelled_date: 'cancelled_date',
  updated_at: 'updated_at'
};

exports.Prisma.Pembelian_barang_listScalarFieldEnum = {
  id: 'id',
  pembelian_id: 'pembelian_id',
  barang_id: 'barang_id',
  warna_id: 'warna_id',
  satuan_id: 'satuan_id',
  qty: 'qty',
  harga_beli: 'harga_beli',
  jumlah_roll: 'jumlah_roll',
  gudang_id: 'gudang_id'
};

exports.Prisma.Nd_pembelian_detailScalarFieldEnum = {
  id: 'id',
  pembelian_id: 'pembelian_id',
  ockh: 'ockh',
  barang_beli_id: 'barang_beli_id',
  barang_id: 'barang_id',
  warna_id: 'warna_id',
  satuan_id: 'satuan_id',
  qty: 'qty',
  jumlah_roll: 'jumlah_roll',
  harga_beli: 'harga_beli',
  gudang_id: 'gudang_id',
  updated_at: 'updated_at'
};

exports.Prisma.Nd_pembelian_lainScalarFieldEnum = {
  id: 'id',
  tanggal: 'tanggal',
  no_faktur: 'no_faktur',
  supplier_id: 'supplier_id',
  supplier_lain_text: 'supplier_lain_text',
  toko_id: 'toko_id',
  user_id: 'user_id',
  created_at: 'created_at',
  status_aktif: 'status_aktif',
  cancelled_by: 'cancelled_by',
  canceled_date: 'canceled_date',
  jatuh_tempo: 'jatuh_tempo',
  keterangan: 'keterangan'
};

exports.Prisma.Nd_pembelian_lain_detailScalarFieldEnum = {
  id: 'id',
  pembelian_lain_id: 'pembelian_lain_id',
  keterangan_barang: 'keterangan_barang',
  qty: 'qty',
  harga_beli: 'harga_beli',
  updated_at: 'updated_at'
};

exports.Prisma.Nd_pembelian_qty_detailScalarFieldEnum = {
  id: 'id',
  pembelian_detail_id: 'pembelian_detail_id',
  qty: 'qty',
  jumlah_roll: 'jumlah_roll'
};

exports.Prisma.Nd_penerimaan_barangScalarFieldEnum = {
  id: 'id',
  no_penerimaan: 'no_penerimaan',
  no_penerimaan_lengkap: 'no_penerimaan_lengkap',
  no_plat: 'no_plat',
  tanggal_input: 'tanggal_input',
  user_id: 'user_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Nd_pengeluaran_stok_lainScalarFieldEnum = {
  id: 'id',
  tanggal: 'tanggal',
  no_faktur: 'no_faktur',
  keterangan: 'keterangan',
  toko_id: 'toko_id',
  user_id: 'user_id',
  created_at: 'created_at',
  status_aktif: 'status_aktif',
  status: 'status',
  closed_by: 'closed_by',
  closed_date: 'closed_date'
};

exports.Prisma.Nd_pengeluaran_stok_lain_detailScalarFieldEnum = {
  id: 'id',
  pengeluaran_stok_lain_id: 'pengeluaran_stok_lain_id',
  barang_id: 'barang_id',
  gudang_id: 'gudang_id',
  warna_id: 'warna_id',
  harga_jual: 'harga_jual',
  user_id: 'user_id',
  created: 'created',
  updated: 'updated'
};

exports.Prisma.Nd_pengeluaran_stok_lain_qty_detailScalarFieldEnum = {
  id: 'id',
  pengeluaran_stok_lain_detail_id: 'pengeluaran_stok_lain_detail_id',
  qty: 'qty',
  jumlah_roll: 'jumlah_roll'
};

exports.Prisma.Nd_penjualanScalarFieldEnum = {
  id: 'id',
  toko_id: 'toko_id',
  penjualan_type_id: 'penjualan_type_id',
  no_faktur: 'no_faktur',
  po_number: 'po_number',
  tanggal: 'tanggal',
  ppn: 'ppn',
  customer_id: 'customer_id',
  gudang_id: 'gudang_id',
  diskon: 'diskon',
  jatuh_tempo: 'jatuh_tempo',
  ongkos_kirim: 'ongkos_kirim',
  keterangan: 'keterangan',
  nama_keterangan: 'nama_keterangan',
  alamat_keterangan: 'alamat_keterangan',
  nama_cust_fp: 'nama_cust_fp',
  alamat_cust_fp: 'alamat_cust_fp',
  npwp_cust_fp: 'npwp_cust_fp',
  nik_cust_fp: 'nik_cust_fp',
  no_faktur_fp: 'no_faktur_fp',
  tipe_po: 'tipe_po',
  po_penjualan_id: 'po_penjualan_id',
  status: 'status',
  status_aktif: 'status_aktif',
  closed_by: 'closed_by',
  closed_date: 'closed_date',
  user_id: 'user_id',
  created_at: 'created_at',
  revisi: 'revisi',
  fp_status: 'fp_status',
  is_custom_view: 'is_custom_view',
  status_enum: 'status_enum',
  no_pi: 'no_pi',
  no_pi_lengkap: 'no_pi_lengkap',
  revisi_pi: 'revisi_pi'
};

exports.Prisma.Nd_penjualan_detailScalarFieldEnum = {
  id: 'id',
  penjualan_id: 'penjualan_id',
  barang_id: 'barang_id',
  kode_beli: 'kode_beli',
  nama_jual_tercetak: 'nama_jual_tercetak',
  warna_id: 'warna_id',
  satuan_id: 'satuan_id',
  harga_jual: 'harga_jual',
  gudang_id: 'gudang_id',
  subqty: 'subqty',
  subjumlah_roll: 'subjumlah_roll',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Nd_penjualan_logScalarFieldEnum = {
  id: 'id',
  penjualan_id: 'penjualan_id',
  pengiriman_id: 'pengiriman_id',
  tgl_print: 'tgl_print'
};

exports.Prisma.Nd_penjualan_posisi_barangScalarFieldEnum = {
  id: 'id',
  penjualan_id: 'penjualan_id',
  tipe_ambil_barang_id: 'tipe_ambil_barang_id',
  tanggal_pengambilan: 'tanggal_pengambilan',
  alamat_pengiriman: 'alamat_pengiriman',
  user_id: 'user_id',
  status: 'status',
  closed_by: 'closed_by',
  created: 'created',
  updated: 'updated'
};

exports.Prisma.Nd_penjualan_qty_detailScalarFieldEnum = {
  id: 'id',
  penjualan_detail_id: 'penjualan_detail_id',
  qty: 'qty',
  jumlah_roll: 'jumlah_roll'
};

exports.Prisma.Nd_penjualan_remapScalarFieldEnum = {
  id: 'id',
  tanggal_remap: 'tanggal_remap',
  user_id: 'user_id',
  status: 'status',
  released: 'released',
  released_by: 'released_by',
  createdAt: 'createdAt'
};

exports.Prisma.Nd_penjualan_remap_listScalarFieldEnum = {
  id: 'id',
  penjualan_remap_id: 'penjualan_remap_id',
  penjualan_id_asal: 'penjualan_id_asal',
  no_faktur_asal: 'no_faktur_asal',
  tanggal_asal: 'tanggal_asal',
  penjualan_id_tujuan: 'penjualan_id_tujuan',
  no_faktur_tujuan: 'no_faktur_tujuan',
  tanggal_tujuan: 'tanggal_tujuan',
  user_id: 'user_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Nd_penjualan_typeScalarFieldEnum = {
  id: 'id',
  text: 'text'
};

exports.Prisma.Nd_penyesuaian_stokScalarFieldEnum = {
  id: 'id',
  tipe_transaksi: 'tipe_transaksi',
  tanggal: 'tanggal',
  gudang_id: 'gudang_id',
  barang_id: 'barang_id',
  warna_id: 'warna_id',
  qty: 'qty',
  jumlah_roll: 'jumlah_roll',
  keterangan: 'keterangan',
  user_id: 'user_id',
  created_at: 'created_at'
};

exports.Prisma.Nd_penyesuaian_stok_qtyScalarFieldEnum = {
  id: 'id',
  penyesuaian_stok_id: 'penyesuaian_stok_id',
  qty: 'qty',
  jumlah_roll: 'jumlah_roll'
};

exports.Prisma.Nd_penyesuaian_stok_splitScalarFieldEnum = {
  id: 'id',
  penyesuaian_stok_id: 'penyesuaian_stok_id',
  qty: 'qty',
  jumlah_roll: 'jumlah_roll'
};

exports.Prisma.Nd_piutang_awalScalarFieldEnum = {
  id: 'id',
  toko_id: 'toko_id',
  customer_id: 'customer_id',
  tanggal: 'tanggal',
  no_faktur: 'no_faktur',
  amount: 'amount',
  jatuh_tempo: 'jatuh_tempo',
  tipe_before: 'tipe_before',
  penjualan_id_before: 'penjualan_id_before',
  jumlah_roll: 'jumlah_roll',
  user_id: 'user_id'
};

exports.Prisma.Nd_planner_warna_statusScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  barang_id: 'barang_id',
  status: 'status',
  warna_id: 'warna_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Nd_po_pembelianScalarFieldEnum = {
  id: 'id',
  tanggal: 'tanggal',
  po_number: 'po_number',
  toko_id: 'toko_id',
  supplier_id: 'supplier_id',
  up_person: 'up_person',
  sales_contract: 'sales_contract',
  catatan: 'catatan',
  po_status: 'po_status',
  created: 'created',
  user_id: 'user_id',
  status_aktif: 'status_aktif',
  locked_by: 'locked_by',
  locked_date: 'locked_date',
  cancelled_by: 'cancelled_by',
  cancelled_date: 'cancelled_date',
  released_by: 'released_by',
  released_date: 'released_date'
};

exports.Prisma.Nd_po_pembelian_batchScalarFieldEnum = {
  id: 'id',
  tanggal: 'tanggal',
  po_pembelian_id: 'po_pembelian_id',
  batch: 'batch',
  keterangan_batch: 'keterangan_batch',
  status: 'status',
  revisi: 'revisi',
  revisi_by: 'revisi_by',
  revisi_ori_id: 'revisi_ori_id',
  revisi_date: 'revisi_date',
  locked_by: 'locked_by',
  locked_date: 'locked_date',
  updated: 'updated',
  released_by: 'released_by',
  released_date: 'released_date'
};

exports.Prisma.Nd_po_pembelian_before_qtyScalarFieldEnum = {
  id: 'id',
  po_pembelian_id: 'po_pembelian_id',
  po_pembelian_batch_id: 'po_pembelian_batch_id',
  po_pembelian_warna_id: 'po_pembelian_warna_id',
  qty: 'qty'
};

exports.Prisma.Nd_po_pembelian_detailScalarFieldEnum = {
  id: 'id',
  po_pembelian_id: 'po_pembelian_id',
  nama_tercetak: 'nama_tercetak',
  barang_beli_id: 'barang_beli_id',
  barang_id: 'barang_id',
  harga: 'harga',
  qty: 'qty',
  jumlah_roll: 'jumlah_roll',
  created: 'created'
};

exports.Prisma.Nd_po_pembelian_warnaScalarFieldEnum = {
  id: 'id',
  po_pembelian_batch_id: 'po_pembelian_batch_id',
  po_pembelian_detail_id: 'po_pembelian_detail_id',
  tipe_barang: 'tipe_barang',
  barang_beli_id_baru: 'barang_beli_id_baru',
  barang_id_baru: 'barang_id_baru',
  barang_id_baru_rename: 'barang_id_baru_rename',
  warna_id: 'warna_id',
  harga_baru: 'harga_baru',
  qty: 'qty',
  OCKH: 'OCKH',
  locked_date: 'locked_date',
  locked_by: 'locked_by',
  locked_keterangan: 'locked_keterangan'
};

exports.Prisma.Nd_po_penjualanScalarFieldEnum = {
  id: 'id',
  tanggal: 'tanggal',
  tipe: 'tipe',
  tanggal_kirim: 'tanggal_kirim',
  customer_id: 'customer_id',
  alamat_kirim: 'alamat_kirim',
  po_number: 'po_number',
  request_index: 'request_index',
  contact_person: 'contact_person',
  diskon: 'diskon',
  biaya_lain: 'biaya_lain',
  ppn_include_status: 'ppn_include_status',
  ppn_value: 'ppn_value',
  keterangan: 'keterangan',
  keterangan_footer: 'keterangan_footer',
  status_po: 'status_po',
  user_id: 'user_id',
  locked_by: 'locked_by',
  locked_date: 'locked_date',
  closed_by: 'closed_by',
  closed_date: 'closed_date',
  status_aktif: 'status_aktif',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Nd_po_penjualan_detailScalarFieldEnum = {
  id: 'id',
  po_penjualan_id: 'po_penjualan_id',
  barang_id: 'barang_id',
  warna_id: 'warna_id',
  qty: 'qty',
  qty_jual: 'qty_jual',
  harga: 'harga',
  keterangan: 'keterangan',
  user_id: 'user_id',
  closed_by: 'closed_by',
  closed_date: 'closed_date',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Nd_posisiScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.Nd_ppnScalarFieldEnum = {
  id: 'id',
  tanggal: 'tanggal',
  ppn: 'ppn',
  user_id: 'user_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Nd_ppo_lockScalarFieldEnum = {
  id: 'id',
  tanggal: 'tanggal',
  barang_id: 'barang_id',
  po_pembelian_batch_id_aktif: 'po_pembelian_batch_id_aktif',
  status: 'status',
  locked_by: 'locked_by',
  downloaded: 'downloaded',
  created: 'created',
  updated: 'updated'
};

exports.Prisma.Nd_ppo_lock_detailScalarFieldEnum = {
  id: 'id',
  ppo_lock_id: 'ppo_lock_id',
  warna_id: 'warna_id',
  qty: 'qty',
  user_id: 'user_id',
  updated_at: 'updated_at'
};

exports.Prisma.Nd_ppo_qty_currentScalarFieldEnum = {
  id: 'id',
  barang_id: 'barang_id',
  warna_id: 'warna_id',
  qty: 'qty',
  user_id: 'user_id',
  created: 'created',
  updated: 'updated'
};

exports.Prisma.Nd_ppo_table_settingScalarFieldEnum = {
  id: 'id',
  po_pembelian_batch_id: 'po_pembelian_batch_id',
  barang_id: 'barang_id',
  status_include: 'status_include',
  status_show: 'status_show',
  user_id: 'user_id',
  created: 'created',
  updated: 'updated'
};

exports.Prisma.Nd_ppo_to_poScalarFieldEnum = {
  id: 'id',
  ppo_lock_id: 'ppo_lock_id',
  po_pembelian_detail_id: 'po_pembelian_detail_id',
  po_pembelian_batch_id: 'po_pembelian_batch_id',
  user_id: 'user_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Nd_printer_listScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  status_aktif: 'status_aktif'
};

exports.Prisma.Nd_profileScalarFieldEnum = {
  id: 'id',
  base_link: 'base_link',
  base_code: 'base_code',
  token: 'token'
};

exports.Prisma.Rekam_faktur_pajakScalarFieldEnum = {
  id: 'id',
  tanggal_awal: 'tanggal_awal',
  tanggal_akhir: 'tanggal_akhir',
  nilai: 'nilai',
  nilai_ppn: 'nilai_ppn',
  jumlah_trx: 'jumlah_trx',
  no_fp_awal: 'no_fp_awal',
  no_fp_akhir: 'no_fp_akhir',
  user_id: 'user_id',
  updated_at: 'updated_at',
  created_at: 'created_at',
  status: 'status',
  status_email: 'status_email',
  is_gunggung: 'is_gunggung',
  no_surat: 'no_surat',
  locked_date: 'locked_date'
};

exports.Prisma.Rekam_faktur_pajak_detailScalarFieldEnum = {
  id: 'id',
  rekam_faktur_pajak_id: 'rekam_faktur_pajak_id',
  penjualan_id: 'penjualan_id',
  tanggal: 'tanggal',
  customer_id: 'customer_id',
  nama_customer: 'nama_customer',
  no_npwp: 'no_npwp',
  no_nik: 'no_nik',
  alamat_lengkap: 'alamat_lengkap',
  no_faktur_pajak: 'no_faktur_pajak',
  no_faktur_jual: 'no_faktur_jual',
  ppn_berlaku: 'ppn_berlaku',
  total_jual: 'total_jual',
  total_dpp: 'total_dpp',
  total_ppn: 'total_ppn',
  no_faktur_pajak_id: 'no_faktur_pajak_id',
  keterangan: 'keterangan',
  updated_at: 'updated_at',
  created_at: 'created_at',
  status: 'status'
};

exports.Prisma.Nd_rekam_faktur_pajak_emailScalarFieldEnum = {
  id: 'id',
  rekam_faktur_pajak_id: 'rekam_faktur_pajak_id',
  customer_id: 'customer_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  email_stat: 'email_stat',
  status_1: 'status_1',
  status_2: 'status_2',
  status_3: 'status_3',
  status_4: 'status_4',
  keterangan: 'keterangan',
  draft_id: 'draft_id',
  message_id: 'message_id',
  thread_id: 'thread_id',
  label_id: 'label_id'
};

exports.Prisma.Nd_reminderScalarFieldEnum = {
  id: 'id',
  note_order_id: 'note_order_id',
  reminder: 'reminder',
  user_id: 'user_id',
  status_on: 'status_on'
};

exports.Prisma.Nd_request_barangScalarFieldEnum = {
  id: 'id',
  toko_id: 'toko_id',
  tanggal: 'tanggal',
  no_request: 'no_request',
  supplier_id: 'supplier_id',
  closed_date: 'closed_date',
  user_id: 'user_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Nd_request_barang_batchScalarFieldEnum = {
  id: 'id',
  tanggal: 'tanggal',
  attn: 'attn',
  request_barang_id: 'request_barang_id',
  status: 'status',
  batch: 'batch',
  user_id: 'user_id',
  locked_by: 'locked_by',
  locked_date: 'locked_date',
  updated_at: 'updated_at',
  created_at: 'created_at',
  status_aktif: 'status_aktif'
};

exports.Prisma.Nd_request_barang_detailScalarFieldEnum = {
  id: 'id',
  request_barang_batch_id: 'request_barang_batch_id',
  po_pembelian_batch_id: 'po_pembelian_batch_id',
  bulan_request: 'bulan_request',
  barang_beli_id: 'barang_beli_id',
  barang_id: 'barang_id',
  warna_id: 'warna_id',
  qty: 'qty',
  status_urgent: 'status_urgent',
  is_po_baru: 'is_po_baru',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Nd_request_barang_qtyScalarFieldEnum = {
  id: 'id',
  request_barang_batch_id: 'request_barang_batch_id',
  bulan_request: 'bulan_request',
  barang_beli_id: 'barang_beli_id',
  barang_id: 'barang_id',
  warna_id: 'warna_id',
  qty: 'qty',
  keterangan: 'keterangan',
  finished_date: 'finished_date',
  finished_by: 'finished_by',
  created_at: 'created_at',
  updated_at: 'updated_at',
  isFinished: 'isFinished'
};

exports.Prisma.Nd_request_update_lockScalarFieldEnum = {
  id: 'id',
  po_pembelian_batch_id: 'po_pembelian_batch_id',
  request_barang_detail_id: 'request_barang_detail_id',
  request_barang_batch_id: 'request_barang_batch_id',
  qty: 'qty',
  created_at: 'created_at'
};

exports.Prisma.Nd_retur_beliScalarFieldEnum = {
  id: 'id',
  ockh_info: 'ockh_info',
  no_sj: 'no_sj',
  po_pembelian_batch_id: 'po_pembelian_batch_id',
  tanggal: 'tanggal',
  toko_id: 'toko_id',
  supplier_id: 'supplier_id',
  keterangan1: 'keterangan1',
  keterangan2: 'keterangan2',
  status: 'status',
  status_aktif: 'status_aktif',
  closed_by: 'closed_by',
  closed_date: 'closed_date',
  user_id: 'user_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Nd_retur_beli_detailScalarFieldEnum = {
  id: 'id',
  retur_beli_id: 'retur_beli_id',
  gudang_id: 'gudang_id',
  barang_id: 'barang_id',
  warna_id: 'warna_id',
  harga: 'harga',
  keterangan: 'keterangan',
  barang_beli_id: 'barang_beli_id'
};

exports.Prisma.Nd_retur_beli_qtyScalarFieldEnum = {
  id: 'id',
  retur_beli_detail_id: 'retur_beli_detail_id',
  qty: 'qty',
  jumlah_roll: 'jumlah_roll'
};

exports.Prisma.Nd_retur_jualScalarFieldEnum = {
  id: 'id',
  tanggal: 'tanggal',
  toko_id: 'toko_id',
  penjualan_id: 'penjualan_id',
  no_faktur: 'no_faktur',
  no_retur_jual_lengkap: 'no_retur_jual_lengkap',
  retur_type_id: 'retur_type_id',
  customer_id: 'customer_id',
  nama_keterangan: 'nama_keterangan',
  user_id: 'user_id',
  created_at: 'created_at',
  status: 'status',
  closed_by: 'closed_by',
  closed_date: 'closed_date',
  status_aktif: 'status_aktif'
};

exports.Prisma.Nd_retur_jual_detailScalarFieldEnum = {
  id: 'id',
  retur_jual_id: 'retur_jual_id',
  gudang_id: 'gudang_id',
  barang_id: 'barang_id',
  warna_id: 'warna_id',
  harga: 'harga',
  keterangan: 'keterangan'
};

exports.Prisma.Nd_retur_jual_qtyScalarFieldEnum = {
  id: 'id',
  retur_jual_detail_id: 'retur_jual_detail_id',
  qty: 'qty',
  jumlah_roll: 'jumlah_roll'
};

exports.Prisma.Nd_satuanScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  status_aktif: 'status_aktif'
};

exports.Prisma.Nd_settingScalarFieldEnum = {
  id: 'id',
  google_client_id: 'google_client_id',
  google_client_secret: 'google_client_secret',
  google_credentials: 'google_credentials',
  google_refresh_token: 'google_refresh_token'
};

exports.Prisma.Nd_stok_awal_item_hargaScalarFieldEnum = {
  id: 'id',
  barang_id: 'barang_id',
  warna_id: 'warna_id',
  harga_stok_awal: 'harga_stok_awal',
  user_id: 'user_id'
};

exports.Prisma.Nd_stok_beforeScalarFieldEnum = {
  id: 'id',
  barang_id: 'barang_id',
  warna_id: 'warna_id',
  gudang_id: 'gudang_id',
  qty: 'qty',
  jumlah_roll: 'jumlah_roll'
};

exports.Prisma.Nd_stok_opnameScalarFieldEnum = {
  id: 'id',
  tanggal: 'tanggal',
  stok_opname_report_id: 'stok_opname_report_id',
  barang_id_so: 'barang_id_so',
  warna_id_so: 'warna_id_so',
  gudang_id_so: 'gudang_id_so',
  user_id: 'user_id',
  created_at: 'created_at',
  stok_current: 'stok_current',
  roll_current: 'roll_current',
  stok_date: 'stok_date',
  status_aktif: 'status_aktif'
};

exports.Prisma.Nd_stok_opname_detailScalarFieldEnum = {
  id: 'id',
  stok_opname_id: 'stok_opname_id',
  barang_id: 'barang_id',
  warna_id: 'warna_id',
  gudang_id: 'gudang_id',
  qty: 'qty',
  jumlah_roll: 'jumlah_roll',
  status: 'status'
};

exports.Prisma.Nd_stok_opname_reportScalarFieldEnum = {
  id: 'id',
  no_surat: 'no_surat',
  closed_by: 'closed_by',
  keterangan: 'keterangan',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Nd_surat_jalanScalarFieldEnum = {
  id: 'id',
  penjualan_id: 'penjualan_id',
  no_sj: 'no_sj',
  tanggal: 'tanggal',
  alamat_kirim_id: 'alamat_kirim_id',
  user_id: 'user_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.TokoScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  alias: 'alias',
  alamat: 'alamat',
  telepon: 'telepon',
  email: 'email',
  fax: 'fax',
  kota: 'kota',
  kode_pos: 'kode_pos',
  NPWP: 'NPWP',
  pre_faktur: 'pre_faktur',
  pre_po: 'pre_po',
  status_aktif: 'status_aktif',
  host: 'host',
  relay_mail: 'relay_mail'
};

exports.Prisma.Nd_tutup_bukuScalarFieldEnum = {
  id: 'id',
  tanggal: 'tanggal',
  user_id: 'user_id',
  updated: 'updated'
};

exports.Prisma.Nd_tutup_buku_detailScalarFieldEnum = {
  id: 'id',
  tahun: 'tahun',
  barang_id: 'barang_id',
  warna_id: 'warna_id',
  harga_01: 'harga_01',
  qty_01: 'qty_01',
  roll_01: 'roll_01',
  harga_02: 'harga_02',
  qty_02: 'qty_02',
  roll_02: 'roll_02',
  harga_03: 'harga_03',
  qty_03: 'qty_03',
  roll_03: 'roll_03',
  harga_04: 'harga_04',
  qty_04: 'qty_04',
  roll_04: 'roll_04',
  harga_05: 'harga_05',
  qty_05: 'qty_05',
  roll_05: 'roll_05',
  harga_06: 'harga_06',
  qty_06: 'qty_06',
  roll_06: 'roll_06',
  harga_07: 'harga_07',
  qty_07: 'qty_07',
  roll_07: 'roll_07',
  harga_08: 'harga_08',
  qty_08: 'qty_08',
  roll_08: 'roll_08',
  harga_09: 'harga_09',
  qty_09: 'qty_09',
  roll_09: 'roll_09',
  harga_10: 'harga_10',
  qty_10: 'qty_10',
  roll_10: 'roll_10',
  harga_11: 'harga_11',
  qty_11: 'qty_11',
  roll_11: 'roll_11',
  harga_12: 'harga_12',
  qty_12: 'qty_12',
  roll_12: 'roll_12'
};

exports.Prisma.Nd_tutup_buku_detail_gudangScalarFieldEnum = {
  id: 'id',
  tahun: 'tahun',
  barang_id: 'barang_id',
  warna_id: 'warna_id',
  gudang_id: 'gudang_id',
  qty_01: 'qty_01',
  roll_01: 'roll_01',
  qty_02: 'qty_02',
  roll_02: 'roll_02',
  qty_03: 'qty_03',
  roll_03: 'roll_03',
  qty_04: 'qty_04',
  roll_04: 'roll_04',
  qty_05: 'qty_05',
  roll_05: 'roll_05',
  qty_06: 'qty_06',
  roll_06: 'roll_06',
  qty_07: 'qty_07',
  roll_07: 'roll_07',
  qty_08: 'qty_08',
  roll_08: 'roll_08',
  qty_09: 'qty_09',
  roll_09: 'roll_09',
  qty_10: 'qty_10',
  roll_10: 'roll_10',
  qty_11: 'qty_11',
  roll_11: 'roll_11',
  qty_12: 'qty_12',
  roll_12: 'roll_12'
};

exports.Prisma.Nd_tutup_buku_gudangScalarFieldEnum = {
  id: 'id',
  tanggal: 'tanggal',
  gudang_id: 'gudang_id',
  user_id: 'user_id',
  updated: 'updated'
};

exports.Prisma.Nd_tutup_buku_stokScalarFieldEnum = {
  id: 'id',
  tanggal: 'tanggal',
  user_id: 'user_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Nd_userScalarFieldEnum = {
  id: 'id',
  username: 'username',
  password: 'password',
  nama: 'nama',
  alamat: 'alamat',
  telepon: 'telepon',
  posisi_id: 'posisi_id',
  time_start: 'time_start',
  time_end: 'time_end',
  printer_list_id: 'printer_list_id',
  status_aktif: 'status_aktif',
  PIN: 'PIN'
};

exports.Prisma.Nd_user_access_timeScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  time_start: 'time_start',
  time_end: 'time_end'
};

exports.Prisma.Nd_warnaScalarFieldEnum = {
  id: 'id',
  warna_beli: 'warna_beli',
  warna_jual: 'warna_jual',
  kode_warna: 'kode_warna',
  status_aktif: 'status_aktif'
};

exports.Prisma.Nd_warning_jatuh_tempo_harianScalarFieldEnum = {
  id: 'id',
  tanggal_warning: 'tanggal_warning',
  toko_id: 'toko_id',
  customer_id: 'customer_id',
  nama_customer: 'nama_customer',
  tipe_company: 'tipe_company',
  amount: 'amount',
  amount_data: 'amount_data',
  intvl: 'intvl',
  jatuh_tempo: 'jatuh_tempo',
  no_faktur: 'no_faktur',
  tanggal: 'tanggal',
  user_id: 'user_id',
  created_at: 'created_at'
};

exports.Prisma.Nd_warning_limit_belanja_harianScalarFieldEnum = {
  id: 'id',
  tanggal_warning: 'tanggal_warning',
  toko_id: 'toko_id',
  customer_id: 'customer_id',
  nama_customer: 'nama_customer',
  tipe_company: 'tipe_company',
  sisa_limit: 'sisa_limit',
  user_id: 'user_id',
  created_at: 'created_at'
};

exports.Prisma.Nd_warning_piutang_harianScalarFieldEnum = {
  id: 'id',
  tanggal_warning: 'tanggal_warning',
  toko_id: 'toko_id',
  customer_id: 'customer_id',
  nama_customer: 'nama_customer',
  sisa_piutang: 'sisa_piutang',
  counter_invoice: 'counter_invoice',
  tanggal_start: 'tanggal_start',
  tanggal_end: 'tanggal_end',
  flag: 'flag',
  user_id: 'user_id',
  created_at: 'created_at'
};

exports.Prisma.Nd_supplierScalarFieldEnum = {
  id: 'id',
  kode: 'kode',
  nama: 'nama',
  alamat: 'alamat',
  telepon: 'telepon',
  kota: 'kota',
  fax: 'fax',
  kode_pos: 'kode_pos',
  nama_bank: 'nama_bank',
  no_rek_bank: 'no_rek_bank',
  email: 'email',
  website: 'website',
  status_aktif: 'status_aktif',
  faktur_inisial: 'faktur_inisial',
  tipe_supplier: 'tipe_supplier'
};

exports.Prisma.Customer_emailScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  email: 'email'
};

exports.Prisma.Customer_nikScalarFieldEnum = {
  id: 'id',
  customer_type_id: 'customer_type_id',
  nama: 'nama',
  alias: 'alias',
  alamat: 'alamat',
  telepon1: 'telepon1',
  telepon2: 'telepon2',
  npwp: 'npwp',
  nik: 'nik',
  kota: 'kota',
  provinsi: 'provinsi',
  kode_pos: 'kode_pos',
  email: 'email',
  tempo_kredit: 'tempo_kredit',
  warning_kredit: 'warning_kredit',
  limit_warning_type: 'limit_warning_type',
  limit_amount: 'limit_amount',
  limit_warning_amount: 'limit_warning_amount',
  status_aktif: 'status_aktif',
  img_link: 'img_link',
  updated_at: 'updated_at',
  tipe_company: 'tipe_company',
  blok: 'blok',
  no: 'no',
  rt: 'rt',
  rw: 'rw',
  kecamatan: 'kecamatan',
  kelurahan: 'kelurahan'
};

exports.Prisma.Customer_npwpScalarFieldEnum = {
  id: 'id',
  customer_type_id: 'customer_type_id',
  nama: 'nama',
  alias: 'alias',
  alamat: 'alamat',
  telepon1: 'telepon1',
  telepon2: 'telepon2',
  npwp: 'npwp',
  nik: 'nik',
  kota: 'kota',
  provinsi: 'provinsi',
  kode_pos: 'kode_pos',
  email: 'email',
  tempo_kredit: 'tempo_kredit',
  warning_kredit: 'warning_kredit',
  limit_warning_type: 'limit_warning_type',
  limit_amount: 'limit_amount',
  limit_warning_amount: 'limit_warning_amount',
  status_aktif: 'status_aktif',
  img_link: 'img_link',
  updated_at: 'updated_at',
  tipe_company: 'tipe_company',
  blok: 'blok',
  no: 'no',
  rt: 'rt',
  rw: 'rw',
  kecamatan: 'kecamatan',
  kelurahan: 'kelurahan'
};

exports.Prisma.Mutasi_tempScalarFieldEnum = {
  id: 'id',
  barang_id: 'barang_id',
  warna_id: 'warna_id',
  harga: 'harga'
};

exports.Prisma.Nd_customer_backup_originalScalarFieldEnum = {
  id: 'id',
  id_original: 'id_original',
  customer_type_id: 'customer_type_id',
  nama: 'nama',
  alias: 'alias',
  alamat: 'alamat',
  telepon1: 'telepon1',
  telepon2: 'telepon2',
  npwp: 'npwp',
  nik: 'nik',
  kota: 'kota',
  provinsi: 'provinsi',
  kode_pos: 'kode_pos',
  email: 'email',
  contact_person: 'contact_person',
  tempo_kredit: 'tempo_kredit',
  warning_kredit: 'warning_kredit',
  limit_warning_type: 'limit_warning_type',
  limit_amount: 'limit_amount',
  limit_atas: 'limit_atas',
  limit_warning_amount: 'limit_warning_amount',
  status_aktif: 'status_aktif',
  img_link: 'img_link',
  npwp_link: 'npwp_link',
  ktp_link: 'ktp_link',
  medsos_link: 'medsos_link',
  updated_at: 'updated_at',
  tipe_company: 'tipe_company',
  blok: 'blok',
  no: 'no',
  rt: 'rt',
  rw: 'rw',
  kecamatan: 'kecamatan',
  kelurahan: 'kelurahan',
  locked_status: 'locked_status',
  user_id: 'user_id',
  created_register: 'created_register',
  verified_time: 'verified_time',
  customer_id_central: 'customer_id_central'
};

exports.Prisma.Nd_penerimaan_barang_statusScalarFieldEnum = {
  id: 'id',
  penerimaan_barang_id: 'penerimaan_barang_id',
  status_penerimaan: 'status_penerimaan',
  createdAt: 'createdAt'
};

exports.Prisma.Nd_print_jual_logScalarFieldEnum = {
  id: 'id',
  printer_name: 'printer_name',
  penjualan_id: 'penjualan_id',
  no_faktur_lengkap: 'no_faktur_lengkap',
  jenis_dokumen: 'jenis_dokumen',
  data_faktur: 'data_faktur',
  status: 'status',
  user_id: 'user_id',
  createdAt: 'createdAt'
};

exports.Prisma.Switch_historyScalarFieldEnum = {
  id: 'id',
  penjualan_id_asal: 'penjualan_id_asal',
  penjualan_id_tujuan: 'penjualan_id_tujuan',
  tanggal_asal: 'tanggal_asal',
  no_faktur_asal: 'no_faktur_asal',
  no_faktur_fp_asal: 'no_faktur_fp_asal',
  created_at_asal: 'created_at_asal',
  closed_date_asal: 'closed_date_asal',
  tanggal_tujuan: 'tanggal_tujuan',
  no_faktur_tujuan: 'no_faktur_tujuan',
  no_faktur_fp_tujuan: 'no_faktur_fp_tujuan',
  created_at_tujuan: 'created_at_tujuan',
  closed_date_tujuan: 'closed_date_tujuan'
};

exports.Prisma.Switch_temp_asalScalarFieldEnum = {
  id: 'id',
  penjualan_id_asal: 'penjualan_id_asal',
  penjualan_id_tujuan: 'penjualan_id_tujuan',
  tanggal_asal: 'tanggal_asal',
  no_faktur_asal: 'no_faktur_asal',
  no_faktur_fp_asal: 'no_faktur_fp_asal',
  created_at_asal: 'created_at_asal',
  closed_date_asal: 'closed_date_asal'
};

exports.Prisma.Switch_temp_tujuanScalarFieldEnum = {
  id: 'id',
  penjualan_id_asal: 'penjualan_id_asal',
  penjualan_id_tujuan: 'penjualan_id_tujuan',
  tanggal_tujuan: 'tanggal_tujuan',
  no_faktur_tujuan: 'no_faktur_tujuan',
  no_faktur_fp_tujuan: 'no_faktur_fp_tujuan',
  created_at_tujuan: 'created_at_tujuan',
  closed_date_tujuan: 'closed_date_tujuan'
};

exports.Prisma.Temp_customer_updgradeScalarFieldEnum = {
  id: 'id',
  customer_id: 'customer_id',
  alamat: 'alamat',
  npwp: 'npwp',
  nik: 'nik',
  kota: 'kota',
  provinsi: 'provinsi',
  kode_pos: 'kode_pos'
};

exports.Prisma.Nd_notificationsScalarFieldEnum = {
  id: 'id',
  posisi_id: 'posisi_id',
  title: 'title',
  message: 'message',
  created_at: 'created_at'
};

exports.Prisma.Nd_stok_currentScalarFieldEnum = {
  id: 'id',
  barang_id: 'barang_id',
  warna_id: 'warna_id',
  gudang_id: 'gudang_id',
  qty: 'qty',
  jumlah_roll: 'jumlah_roll',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Nd_stok_movementScalarFieldEnum = {
  id: 'id',
  tanggal: 'tanggal',
  tipe_movement: 'tipe_movement',
  source_id: 'source_id',
  source_table: 'source_table',
  barang_id: 'barang_id',
  warna_id: 'warna_id',
  gudang_id: 'gudang_id',
  qty: 'qty',
  jumlah_roll: 'jumlah_roll',
  keterangan: 'keterangan',
  user_id: 'user_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Nd_stok_roll_groupScalarFieldEnum = {
  id: 'id',
  barang_id: 'barang_id',
  warna_id: 'warna_id',
  gudang_id: 'gudang_id',
  roll_size: 'roll_size',
  roll_count: 'roll_count',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Nd_system_event_logScalarFieldEnum = {
  id: 'id',
  channel: 'channel',
  entity_type: 'entity_type',
  entity_id: 'entity_id',
  notes: 'notes',
  event_type: 'event_type',
  created_at: 'created_at'
};

exports.Prisma.Nd_user_notification_stateScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  notification_id: 'notification_id',
  is_read: 'is_read',
  created_at: 'created_at',
  read_at: 'read_at'
};

exports.Prisma.Nd_user_sse_stateScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  last_event_id: 'last_event_id',
  updated_at: 'updated_at'
};

exports.Prisma.Nd_user_system_event_stateScalarFieldEnum = {
  id: 'id',
  entity_type: 'entity_type',
  user_id: 'user_id',
  latest_event_log_id: 'latest_event_log_id',
  created_at: 'created_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.nd_penjualan_status_enum = exports.$Enums.nd_penjualan_status_enum = {
  INPUT_ORDER: 'INPUT_ORDER',
  AWAITING_REVIEW: 'AWAITING_REVIEW',
  NEED_REVISION: 'NEED_REVISION',
  AWAITING_PAYMENT: 'AWAITING_PAYMENT',
  PAID: 'PAID',
  CANCELLED: 'CANCELLED'
};

exports.nd_system_event_log_entity_type = exports.$Enums.nd_system_event_log_entity_type = {
  PEMBELIAN: 'PEMBELIAN',
  PENJUALAN: 'PENJUALAN',
  INVENTORY: 'INVENTORY',
  KASIR: 'KASIR'
};

exports.nd_user_system_event_state_entity_type = exports.$Enums.nd_user_system_event_state_entity_type = {
  PEMBELIAN: 'PEMBELIAN',
  PENJUALAN: 'PENJUALAN',
  INVENTORY: 'INVENTORY',
  KASIR: 'KASIR'
};

exports.Prisma.ModelName = {
  nd_bank_list: 'nd_bank_list',
  nd_barang: 'nd_barang',
  nd_barang_beli: 'nd_barang_beli',
  nd_barang_forecasting_data: 'nd_barang_forecasting_data',
  nd_barang_forecasting_keterangan: 'nd_barang_forecasting_keterangan',
  nd_barang_group: 'nd_barang_group',
  nd_barang_harga_history: 'nd_barang_harga_history',
  nd_barang_warna_temp: 'nd_barang_warna_temp',
  nd_bayar_dp: 'nd_bayar_dp',
  nd_bday_user: 'nd_bday_user',
  nd_close_day: 'nd_close_day',
  nd_controller: 'nd_controller',
  nd_customer: 'nd_customer',
  nd_customer_alamat_kirim: 'nd_customer_alamat_kirim',
  nd_customer_backup: 'nd_customer_backup',
  nd_customer_harga: 'nd_customer_harga',
  nd_customer_harga_detail: 'nd_customer_harga_detail',
  nd_customer_harga_history: 'nd_customer_harga_history',
  nd_customer_harga_history_detail: 'nd_customer_harga_history_detail',
  nd_customer_source: 'nd_customer_source',
  nd_dp_keluar: 'nd_dp_keluar',
  nd_dp_masuk: 'nd_dp_masuk',
  nd_dp_masuk_: 'nd_dp_masuk_',
  nd_giro_list: 'nd_giro_list',
  nd_giro_list_detail: 'nd_giro_list_detail',
  nd_giro_setor: 'nd_giro_setor',
  nd_giro_setor_detail: 'nd_giro_setor_detail',
  nd_giro_terima_before: 'nd_giro_terima_before',
  nd_giro_tolakan: 'nd_giro_tolakan',
  nd_giro_urutan: 'nd_giro_urutan',
  nd_group_harga_barang: 'nd_group_harga_barang',
  nd_group_harga_baru: 'nd_group_harga_baru',
  nd_group_harga_baru_info: 'nd_group_harga_baru_info',
  nd_group_harga_berlaku: 'nd_group_harga_berlaku',
  nd_group_harga_history: 'nd_group_harga_history',
  nd_gudang: 'nd_gudang',
  nd_gudang_group: 'nd_gudang_group',
  nd_history_harga_customer: 'nd_history_harga_customer',
  nd_hutang_awal: 'nd_hutang_awal',
  nd_maintenance_list: 'nd_maintenance_list',
  nd_master_barang_sku: 'nd_master_barang_sku',
  nd_master_toko_barang: 'nd_master_toko_barang',
  nd_master_toko_satuan: 'nd_master_toko_satuan',
  nd_master_toko_warna: 'nd_master_toko_warna',
  nd_menu: 'nd_menu',
  nd_menu_detail: 'nd_menu_detail',
  nd_menu_posisi: 'nd_menu_posisi',
  nd_mutasi_barang: 'nd_mutasi_barang',
  nd_mutasi_barang_qty: 'nd_mutasi_barang_qty',
  nd_mutasi_persediaan_barang_tahunan: 'nd_mutasi_persediaan_barang_tahunan',
  nd_mutasi_persediaan_barang_tahunan_detail: 'nd_mutasi_persediaan_barang_tahunan_detail',
  nd_no_faktur_pajak: 'nd_no_faktur_pajak',
  nd_note_order: 'nd_note_order',
  nd_note_order_detail: 'nd_note_order_detail',
  nd_notifikasi_akunting: 'nd_notifikasi_akunting',
  nd_number_tracker: 'nd_number_tracker',
  nd_ockh_non_po: 'nd_ockh_non_po',
  nd_ockh_non_po_warna: 'nd_ockh_non_po_warna',
  nd_pembayaran_hutang: 'nd_pembayaran_hutang',
  nd_pembayaran_hutang_detail: 'nd_pembayaran_hutang_detail',
  nd_pembayaran_hutang_nilai: 'nd_pembayaran_hutang_nilai',
  nd_pembayaran_pembelian: 'nd_pembayaran_pembelian',
  nd_pembayaran_pengeluaran_stok_lain: 'nd_pembayaran_pengeluaran_stok_lain',
  nd_pembayaran_penjualan: 'nd_pembayaran_penjualan',
  nd_pembayaran_penjualan_giro: 'nd_pembayaran_penjualan_giro',
  nd_pembayaran_piutang: 'nd_pembayaran_piutang',
  nd_pembayaran_piutang_detail: 'nd_pembayaran_piutang_detail',
  nd_pembayaran_piutang_nilai: 'nd_pembayaran_piutang_nilai',
  nd_pembayaran_piutang_nilai_info: 'nd_pembayaran_piutang_nilai_info',
  nd_pembayaran_retur: 'nd_pembayaran_retur',
  nd_pembayaran_type: 'nd_pembayaran_type',
  nd_pembelian: 'nd_pembelian',
  pembelian_barang_list: 'pembelian_barang_list',
  nd_pembelian_detail: 'nd_pembelian_detail',
  nd_pembelian_lain: 'nd_pembelian_lain',
  nd_pembelian_lain_detail: 'nd_pembelian_lain_detail',
  nd_pembelian_qty_detail: 'nd_pembelian_qty_detail',
  nd_penerimaan_barang: 'nd_penerimaan_barang',
  nd_pengeluaran_stok_lain: 'nd_pengeluaran_stok_lain',
  nd_pengeluaran_stok_lain_detail: 'nd_pengeluaran_stok_lain_detail',
  nd_pengeluaran_stok_lain_qty_detail: 'nd_pengeluaran_stok_lain_qty_detail',
  nd_penjualan: 'nd_penjualan',
  nd_penjualan_detail: 'nd_penjualan_detail',
  nd_penjualan_log: 'nd_penjualan_log',
  nd_penjualan_posisi_barang: 'nd_penjualan_posisi_barang',
  nd_penjualan_qty_detail: 'nd_penjualan_qty_detail',
  nd_penjualan_remap: 'nd_penjualan_remap',
  nd_penjualan_remap_list: 'nd_penjualan_remap_list',
  nd_penjualan_type: 'nd_penjualan_type',
  nd_penyesuaian_stok: 'nd_penyesuaian_stok',
  nd_penyesuaian_stok_qty: 'nd_penyesuaian_stok_qty',
  nd_penyesuaian_stok_split: 'nd_penyesuaian_stok_split',
  nd_piutang_awal: 'nd_piutang_awal',
  nd_planner_warna_status: 'nd_planner_warna_status',
  nd_po_pembelian: 'nd_po_pembelian',
  nd_po_pembelian_batch: 'nd_po_pembelian_batch',
  nd_po_pembelian_before_qty: 'nd_po_pembelian_before_qty',
  nd_po_pembelian_detail: 'nd_po_pembelian_detail',
  nd_po_pembelian_warna: 'nd_po_pembelian_warna',
  nd_po_penjualan: 'nd_po_penjualan',
  nd_po_penjualan_detail: 'nd_po_penjualan_detail',
  nd_posisi: 'nd_posisi',
  nd_ppn: 'nd_ppn',
  nd_ppo_lock: 'nd_ppo_lock',
  nd_ppo_lock_detail: 'nd_ppo_lock_detail',
  nd_ppo_qty_current: 'nd_ppo_qty_current',
  nd_ppo_table_setting: 'nd_ppo_table_setting',
  nd_ppo_to_po: 'nd_ppo_to_po',
  nd_printer_list: 'nd_printer_list',
  nd_profile: 'nd_profile',
  rekam_faktur_pajak: 'rekam_faktur_pajak',
  rekam_faktur_pajak_detail: 'rekam_faktur_pajak_detail',
  nd_rekam_faktur_pajak_email: 'nd_rekam_faktur_pajak_email',
  nd_reminder: 'nd_reminder',
  nd_request_barang: 'nd_request_barang',
  nd_request_barang_batch: 'nd_request_barang_batch',
  nd_request_barang_detail: 'nd_request_barang_detail',
  nd_request_barang_qty: 'nd_request_barang_qty',
  nd_request_update_lock: 'nd_request_update_lock',
  nd_retur_beli: 'nd_retur_beli',
  nd_retur_beli_detail: 'nd_retur_beli_detail',
  nd_retur_beli_qty: 'nd_retur_beli_qty',
  nd_retur_jual: 'nd_retur_jual',
  nd_retur_jual_detail: 'nd_retur_jual_detail',
  nd_retur_jual_qty: 'nd_retur_jual_qty',
  nd_satuan: 'nd_satuan',
  nd_setting: 'nd_setting',
  nd_stok_awal_item_harga: 'nd_stok_awal_item_harga',
  nd_stok_before: 'nd_stok_before',
  nd_stok_opname: 'nd_stok_opname',
  nd_stok_opname_detail: 'nd_stok_opname_detail',
  nd_stok_opname_report: 'nd_stok_opname_report',
  nd_surat_jalan: 'nd_surat_jalan',
  toko: 'toko',
  nd_tutup_buku: 'nd_tutup_buku',
  nd_tutup_buku_detail: 'nd_tutup_buku_detail',
  nd_tutup_buku_detail_gudang: 'nd_tutup_buku_detail_gudang',
  nd_tutup_buku_gudang: 'nd_tutup_buku_gudang',
  nd_tutup_buku_stok: 'nd_tutup_buku_stok',
  nd_user: 'nd_user',
  nd_user_access_time: 'nd_user_access_time',
  nd_warna: 'nd_warna',
  nd_warning_jatuh_tempo_harian: 'nd_warning_jatuh_tempo_harian',
  nd_warning_limit_belanja_harian: 'nd_warning_limit_belanja_harian',
  nd_warning_piutang_harian: 'nd_warning_piutang_harian',
  nd_supplier: 'nd_supplier',
  customer_email: 'customer_email',
  customer_nik: 'customer_nik',
  customer_npwp: 'customer_npwp',
  mutasi_temp: 'mutasi_temp',
  nd_customer_backup_original: 'nd_customer_backup_original',
  nd_penerimaan_barang_status: 'nd_penerimaan_barang_status',
  nd_print_jual_log: 'nd_print_jual_log',
  switch_history: 'switch_history',
  switch_temp_asal: 'switch_temp_asal',
  switch_temp_tujuan: 'switch_temp_tujuan',
  temp_customer_updgrade: 'temp_customer_updgrade',
  nd_notifications: 'nd_notifications',
  nd_stok_current: 'nd_stok_current',
  nd_stok_movement: 'nd_stok_movement',
  nd_stok_roll_group: 'nd_stok_roll_group',
  nd_system_event_log: 'nd_system_event_log',
  nd_user_notification_state: 'nd_user_notification_state',
  nd_user_sse_state: 'nd_user_sse_state',
  nd_user_system_event_state: 'nd_user_system_event_state'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
