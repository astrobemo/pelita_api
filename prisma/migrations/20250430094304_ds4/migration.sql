-- CreateTable
CREATE TABLE `nd_bank_list` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_bank` VARCHAR(100) NULL,
    `no_rek_bank` VARCHAR(100) NULL,
    `tipe_trx_1` VARCHAR(7) NULL,
    `tipe_trx_2` VARCHAR(7) NULL,
    `status_default` BOOLEAN NULL,
    `status_aktif` BOOLEAN NULL DEFAULT true,
    `user_id` SMALLINT NOT NULL,
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_barang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jenis_barang` VARCHAR(100) NULL DEFAULT '''POLYESTER''',
    `nama` VARCHAR(100) NULL,
    `nama_jual` VARCHAR(100) NULL,
    `harga_jual` INTEGER NULL,
    `harga_beli` DECIMAL(10, 2) NULL,
    `satuan_id` INTEGER NOT NULL,
    `qty_warning` INTEGER NOT NULL DEFAULT 500,
    `deskripsi_info` VARCHAR(500) NULL,
    `status_aktif` INTEGER NULL DEFAULT 1,
    `tipe_qty` BOOLEAN NULL DEFAULT true,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX `nama`(`nama`),
    INDEX `nama_jual`(`nama_jual`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_barang_beli` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(100) NULL,
    `barang_id` INTEGER NULL,
    `user_id` SMALLINT NULL,
    `status_aktif` TINYINT NOT NULL DEFAULT 1,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_barang_forecasting_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `barang_id` SMALLINT NULL,
    `warna_id` SMALLINT NULL,
    `period` DATE NULL,
    `qty` MEDIUMINT NULL,
    `user_id` SMALLINT NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_barang_forecasting_keterangan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `barang_id` SMALLINT NULL,
    `warna_id` SMALLINT NULL,
    `period` DATE NULL,
    `keterangan` VARCHAR(200) NULL,
    `user_id` SMALLINT NULL,
    `created` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_barang_group` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `barang_id` SMALLINT NULL,
    `barang_id_induk` SMALLINT NULL,
    `user_id` SMALLINT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `status_aktif` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_barang_harga_history` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tanggal` DATE NULL,
    `barang_id` INTEGER NULL,
    `harga_beli` DECIMAL(15, 2) NULL,
    `harga_jual` DECIMAL(15, 2) NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `user_id` SMALLINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_barang_warna_temp` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `barang_id` INTEGER NULL,
    `warna_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_bayar_dp` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(200) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_bday_user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NULL,
    `ulang_tahun` DATE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_close_day` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tanggal_start` DATE NULL,
    `tanggal_end` DATE NULL,
    `user_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_controller` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_customer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer_type_id` BOOLEAN NOT NULL DEFAULT true,
    `nama` VARCHAR(70) NULL,
    `alias` VARCHAR(300) NOT NULL,
    `alamat` VARCHAR(1000) NULL,
    `telepon1` VARCHAR(500) NULL,
    `telepon2` VARCHAR(50) NULL,
    `npwp` VARCHAR(200) NULL,
    `nik` VARCHAR(16) NULL,
    `kota` VARCHAR(200) NULL,
    `provinsi` VARCHAR(100) NULL,
    `kode_pos` VARCHAR(20) NULL,
    `email` VARCHAR(200) NULL,
    `contact_person` VARCHAR(500) NOT NULL,
    `tempo_kredit` TINYINT NULL,
    `warning_kredit` TINYINT NULL,
    `limit_warning_type` TINYINT NULL,
    `limit_amount` INTEGER NULL,
    `limit_atas` INTEGER NULL,
    `limit_warning_amount` INTEGER NULL,
    `status_aktif` BOOLEAN NOT NULL DEFAULT true,
    `img_link` VARCHAR(500) NULL,
    `npwp_link` VARCHAR(500) NULL,
    `ktp_link` VARCHAR(500) NULL,
    `medsos_link` VARCHAR(2000) NULL,
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `tipe_company` VARCHAR(3) NULL,
    `blok` VARCHAR(100) NOT NULL DEFAULT '''-''',
    `no` VARCHAR(100) NULL DEFAULT '''-''',
    `rt` VARCHAR(4) NOT NULL DEFAULT '000',
    `rw` VARCHAR(4) NOT NULL DEFAULT '000',
    `kecamatan` VARCHAR(100) NOT NULL DEFAULT '''-''',
    `kelurahan` VARCHAR(100) NOT NULL DEFAULT '''-''',
    `locked_status` BOOLEAN NOT NULL DEFAULT true,
    `user_id` TINYINT NOT NULL DEFAULT 0,
    `verified_time` DATETIME(0) NULL,
    `customer_id_central` VARCHAR(50) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_customer_alamat_kirim` (
    `id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `customer_id` SMALLINT UNSIGNED NULL,
    `alamat` VARCHAR(500) NULL,
    `catatan` VARCHAR(100) NULL,
    `user_id` TINYINT UNSIGNED NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `status_aktif` TINYINT NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_customer_backup` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer_type_id` BOOLEAN NOT NULL DEFAULT true,
    `nama` VARCHAR(70) NULL,
    `alias` VARCHAR(300) NOT NULL,
    `alamat` VARCHAR(1000) NULL,
    `telepon1` VARCHAR(500) NULL,
    `telepon2` VARCHAR(50) NULL,
    `npwp` VARCHAR(200) NULL,
    `nik` VARCHAR(16) NULL,
    `kota` VARCHAR(200) NULL,
    `provinsi` VARCHAR(100) NULL,
    `kode_pos` VARCHAR(20) NULL,
    `email` VARCHAR(200) NULL,
    `contact_person` VARCHAR(500) NOT NULL,
    `tempo_kredit` TINYINT NULL,
    `warning_kredit` TINYINT NULL,
    `limit_warning_type` TINYINT NULL,
    `limit_amount` INTEGER NULL,
    `limit_atas` INTEGER NULL,
    `limit_warning_amount` INTEGER NULL,
    `status_aktif` BOOLEAN NOT NULL DEFAULT true,
    `img_link` VARCHAR(500) NULL,
    `npwp_link` VARCHAR(500) NULL,
    `ktp_link` VARCHAR(500) NULL,
    `medsos_link` VARCHAR(2000) NULL,
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `tipe_company` VARCHAR(3) NULL,
    `blok` VARCHAR(100) NOT NULL DEFAULT '-',
    `no` VARCHAR(100) NULL DEFAULT '-',
    `rt` VARCHAR(4) NOT NULL DEFAULT '000',
    `rw` VARCHAR(4) NOT NULL DEFAULT '000',
    `kecamatan` VARCHAR(100) NOT NULL DEFAULT '-',
    `kelurahan` VARCHAR(100) NOT NULL DEFAULT '-',
    `locked_status` BOOLEAN NOT NULL DEFAULT true,
    `user_id` TINYINT NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_customer_harga` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer_id` INTEGER NULL,
    `tipe` TINYINT NULL,
    `group_harga_barang_id` INTEGER NULL,
    `user_id` SMALLINT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_customer_harga_detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer_harga_id` INTEGER NULL,
    `customer_id` INTEGER NULL,
    `tipe` INTEGER NULL,
    `barang_id` INTEGER NULL,
    `selisih_harga` DECIMAL(15, 2) NULL,
    `harga_total` DECIMAL(15, 2) NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_customer_harga_history` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer_harga_id` INTEGER NULL,
    `harga_id_before` DECIMAL(15, 2) NULL,
    `harga_id_after` DECIMAL(15, 2) NULL,
    `user_id` TINYINT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_customer_harga_history_detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer_id` INTEGER NULL,
    `tipe` TINYINT NULL,
    `barang_id` INTEGER NULL,
    `harga_before` DECIMAL(15, 2) NULL,
    `harga_after` DECIMAL(15, 2) NULL,
    `user_id` INTEGER NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_dp_keluar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dp_masuk_id` SMALLINT NULL,
    `pembayaran_type_id` BOOLEAN NULL,
    `tanggal` DATE NULL,
    `amount` DECIMAL(15, 2) NULL,
    `keterangan` VARCHAR(200) NULL,
    `user_id` TINYINT NULL,
    `nama_bank` VARCHAR(100) NULL,
    `no_rek_bank` VARCHAR(100) NULL,
    `nama_penerima` VARCHAR(100) NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_dp_masuk` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `no_dp` INTEGER NOT NULL,
    `customer_id` INTEGER NOT NULL,
    `tanggal` DATE NOT NULL,
    `pembayaran_type_id` INTEGER NULL,
    `nama_bank` VARCHAR(100) NULL,
    `no_rek_bank` VARCHAR(100) NULL,
    `urutan_giro` INTEGER NULL,
    `no_giro` VARCHAR(50) NULL,
    `no_akun_giro` VARCHAR(50) NULL,
    `tanggal_giro` DATE NULL,
    `jatuh_tempo` DATE NULL,
    `nama_penerima` VARCHAR(100) NULL,
    `amount` INTEGER NOT NULL DEFAULT 0,
    `keterangan` VARCHAR(100) NULL,
    `user_id` INTEGER NULL,
    `created` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_dp_masuk_` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `no_dp` INTEGER NOT NULL,
    `customer_id` INTEGER NULL,
    `penyerah` VARCHAR(200) NOT NULL,
    `penerima` VARCHAR(200) NOT NULL,
    `tanggal` DATE NULL,
    `amount` INTEGER NULL,
    `pembayaran_type_id` INTEGER NOT NULL DEFAULT 1,
    `keterangan` VARCHAR(100) NULL,
    `user_id` INTEGER NULL,
    `created` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_giro_list` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bank_list_id` TINYINT NOT NULL,
    `tipe_trx` TINYINT NOT NULL DEFAULT 1,
    `no_giro_awal` VARCHAR(100) NULL,
    `jml_giro` SMALLINT NULL,
    `user_id` INTEGER NULL,
    `created` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_giro_list_detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `giro_list_id` INTEGER NULL,
    `tanggal` DATE NULL,
    `no_giro` VARCHAR(20) NULL,
    `amount` INTEGER NULL,
    `jatuh_tempo` DATE NULL,
    `tanggal_cair` DATE NULL,
    `penerima` VARCHAR(300) NULL,
    `keterangan` VARCHAR(500) NULL,
    `user_id` INTEGER NULL,
    `updated` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `status` TINYINT NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_giro_setor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `toko_id` INTEGER NOT NULL DEFAULT 1,
    `tanggal` DATE NULL,
    `keterangan` VARCHAR(200) NULL,
    `user_id` INTEGER NOT NULL,
    `created` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_giro_setor_detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numerator` INTEGER NULL,
    `giro_setor_id` INTEGER NULL,
    `pembayaran_piutang_nilai_id` INTEGER NULL,
    `data_type` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_giro_terima_before` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pembayaran_type_id` TINYINT NULL,
    `tanggal` DATE NULL,
    `urutan_giro` SMALLINT NULL,
    `nama_bank` VARCHAR(100) NULL,
    `no_rek_bank` VARCHAR(100) NULL,
    `no_giro` VARCHAR(20) NULL,
    `jatuh_tempo` DATE NULL,
    `amount` INTEGER NULL,
    `pembayaran_piutang_id_before` SMALLINT NULL,
    `pembayaran_piutang_detail_id_before` MEDIUMINT NULL,
    `customer_id` SMALLINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_giro_tolakan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer_id` SMALLINT NULL,
    `tanggal` DATE NULL,
    `pembayaran_piutang_nilai_id` SMALLINT NULL,
    `keterangan` VARCHAR(200) NULL,
    `user_id` SMALLINT NULL,
    `created` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_giro_urutan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `source_table_id` INTEGER NULL,
    `data_type` INTEGER NULL DEFAULT 1,
    `urutan` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_group_harga_barang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipe` BOOLEAN NOT NULL DEFAULT true,
    `nama` VARCHAR(100) NULL,
    `deskripsi` VARCHAR(500) NULL,
    `isDefault` BOOLEAN NULL DEFAULT false,
    `user_id` INTEGER NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_group_harga_baru` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `group_harga_barang_id` INTEGER NULL,
    `barang_id` INTEGER NULL,
    `harga_cash` DECIMAL(10, 2) NULL,
    `harga_kredit` DECIMAL(10, 2) NULL,
    `harga_baru` DECIMAL(15, 2) NULL,
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_group_harga_baru_info` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `group_harga_barang_id` INTEGER NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,
    `locked_by` TINYINT NULL,
    `launch_by` SMALLINT NULL,
    `launch_date` DATETIME(0) NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_group_harga_berlaku` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `group_harga_barang_id` INTEGER NULL,
    `barang_id` INTEGER NULL,
    `harga_cash` DECIMAL(10, 2) NULL,
    `harga_kredit` DECIMAL(10, 2) NULL,
    `harga_berlaku` DECIMAL(15, 2) NULL,
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_group_harga_history` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `harga_baru_info_id` INTEGER NULL,
    `group_harga_barang_id` INTEGER NULL,
    `barang_id` INTEGER NULL,
    `harga_cash` DECIMAL(10, 2) NULL,
    `harga_kredit` DECIMAL(10, 2) NULL,
    `harga_history` DECIMAL(15, 2) NULL,
    `tanggal_archive` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_gudang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(70) NULL,
    `lokasi` VARCHAR(20) NULL,
    `status_default` INTEGER NOT NULL DEFAULT 0,
    `visible` BOOLEAN NOT NULL DEFAULT true,
    `gudang_group_id` SMALLINT NULL,
    `urutan` INTEGER NOT NULL,
    `status_aktif` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_gudang_group` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(50) NULL,
    `user_id` TINYINT NULL DEFAULT 1,
    `created` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_history_harga_customer` (
    `id` MEDIUMINT NOT NULL AUTO_INCREMENT,
    `barang_id` SMALLINT NULL,
    `warna_id` SMALLINT NULL,
    `customer_id` SMALLINT NULL,
    `harga_jual` MEDIUMINT NULL,
    `tanggal` DATE NULL,
    `penjualan_id` MEDIUMINT NULL,
    `no_faktur` VARCHAR(50) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_hutang_awal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `toko_id` INTEGER NOT NULL DEFAULT 1,
    `supplier_id` INTEGER NULL,
    `tanggal` DATE NULL,
    `no_faktur` VARCHAR(40) NULL,
    `amount` INTEGER NULL,
    `jatuh_tempo` DATE NOT NULL,
    `jumlah_roll` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `pembelian_id_before` SMALLINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_maintenance_list` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `start_time` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `end_time` DATETIME(0) NULL,
    `user_id` INTEGER NULL,
    `status` TINYINT NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_master_barang_sku` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `barang_sku_id` VARCHAR(100) NOT NULL,
    `nama_barang` VARCHAR(100) NOT NULL,
    `barang_id_master` INTEGER NOT NULL DEFAULT 0,
    `warna_id_master` INTEGER NOT NULL DEFAULT 0,
    `satuan_id_master` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_master_toko_barang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `barang_id_toko` INTEGER NULL,
    `barang_id_master` INTEGER NULL,
    `nama_master` VARCHAR(100) NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    UNIQUE INDEX `barang_id_toko_master`(`barang_id_toko`, `barang_id_master`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_master_toko_satuan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `satuan_id_toko` INTEGER NOT NULL DEFAULT 0,
    `satuan_id_master` INTEGER NOT NULL DEFAULT 0,
    `nama_master` VARCHAR(50) NOT NULL DEFAULT '''''',
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    UNIQUE INDEX `satuan_id`(`satuan_id_toko`, `satuan_id_master`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_master_toko_warna` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `warna_id_toko` INTEGER NOT NULL,
    `warna_id_master` INTEGER NOT NULL,
    `nama_master` VARCHAR(50) NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `warna_id_master_toko`(`warna_id_toko`, `warna_id_master`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_menu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status_aktif` INTEGER NULL DEFAULT 1,
    `icon_class` VARCHAR(100) NOT NULL,
    `nama_id` VARCHAR(50) NOT NULL,
    `text` VARCHAR(200) NOT NULL,
    `urutan` INTEGER NOT NULL DEFAULT 0,

    INDEX `status_aktif`(`status_aktif`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_menu_detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `menu_id` INTEGER NOT NULL,
    `controller` VARCHAR(50) NULL,
    `page_link` VARCHAR(50) NULL,
    `status_aktif` INTEGER NULL DEFAULT 1,
    `text` VARCHAR(100) NOT NULL,
    `urutan` INTEGER NOT NULL DEFAULT 1,
    `level` INTEGER NOT NULL DEFAULT 1,
    `parent_id` INTEGER NULL,
    `created` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_menu_posisi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `posisi_id` INTEGER NULL,
    `menu_id` TEXT NULL,
    `menu_detail_id` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_mutasi_barang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `toko_id` INTEGER UNSIGNED NOT NULL DEFAULT 1,
    `tanggal` DATE NULL,
    `no_mutasi` MEDIUMINT NULL,
    `no_mutasi_lengkap` VARCHAR(50) NULL,
    `barang_id` SMALLINT NULL,
    `warna_id` SMALLINT NULL,
    `gudang_id_before` TINYINT NULL,
    `gudang_id_after` TINYINT NULL,
    `qty` DECIMAL(15, 2) NULL,
    `jumlah_roll` INTEGER NULL,
    `nama_kru` VARCHAR(100) NULL,
    `status_aktif` BOOLEAN NOT NULL DEFAULT true,
    `user_id` TINYINT NOT NULL,
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `barang_id`(`barang_id`),
    INDEX `gudang_id_after`(`gudang_id_after`),
    INDEX `gudang_id_before`(`gudang_id_before`),
    INDEX `tanggal`(`tanggal`),
    INDEX `warna_id`(`warna_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_mutasi_barang_qty` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mutasi_barang_id` MEDIUMINT NULL,
    `qty` DECIMAL(15, 2) NULL,
    `jumlah_roll` SMALLINT NULL,
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX `mutasi_barang_id`(`mutasi_barang_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_mutasi_persediaan_barang_tahunan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tanggal` DATE NULL,
    `barang_id` SMALLINT NULL,
    `warna_id` SMALLINT NULL,
    `harga` DECIMAL(20, 2) NULL DEFAULT 0.00,
    `qty` DECIMAL(15, 2) NULL,
    `jumlah_roll` SMALLINT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `user_id` TINYINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_mutasi_persediaan_barang_tahunan_detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `gudang_id` SMALLINT NULL,
    `qty` DECIMAL(15, 2) NULL,
    `jumlah_roll` SMALLINT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `user_id` TINYINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_no_faktur_pajak` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tanggal` DATE NULL,
    `tahun_pajak` DATE NULL,
    `no_fp_awal` VARCHAR(20) NULL,
    `no_fp_akhir` VARCHAR(20) NULL,
    `user_id` SMALLINT NULL,
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_note_order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipe_customer` INTEGER NOT NULL DEFAULT 1,
    `customer_id` INTEGER NULL,
    `nama_customer` VARCHAR(100) NULL,
    `contact_person` VARCHAR(200) NULL,
    `contact_info` VARCHAR(100) NULL,
    `tanggal_note_order` DATETIME(0) NULL,
    `tanggal_target` DATE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_note_order_detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `note_order_id` INTEGER NULL,
    `barang_id` INTEGER NULL,
    `nama_barang` VARCHAR(100) NULL,
    `warna_id` INTEGER NULL,
    `nama_warna` VARCHAR(100) NULL,
    `roll` INTEGER NULL,
    `qty` DECIMAL(15, 2) NULL,
    `harga` INTEGER NULL,
    `status` INTEGER NOT NULL DEFAULT 0,
    `done_by` INTEGER NULL,
    `done_time` DATETIME(0) NULL,
    `cancel_note` VARCHAR(500) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_notifikasi_akunting` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `read_by` INTEGER NULL,
    `read_time` DATETIME(0) NULL,
    `customer_id` INTEGER NULL,
    `amount` INTEGER NULL,
    `keterangan` VARCHAR(10000) NULL,
    `verified_by` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_number_tracker` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `number` INTEGER NULL,
    `tanggal` DATE NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_ockh_non_po` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tanggal` DATE NULL,
    `supplier_id` SMALLINT NULL,
    `ockh` VARCHAR(20) NOT NULL,
    `harga` MEDIUMINT NULL,
    `barang_id` INTEGER NOT NULL,
    `user_id` SMALLINT NULL,
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_ockh_non_po_warna` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ockh_non_po_id` INTEGER NULL,
    `warna_id` SMALLINT NOT NULL,
    `qty` MEDIUMINT NOT NULL,
    `user_id` SMALLINT NULL,
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_pembayaran_hutang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `supplier_id` INTEGER NOT NULL,
    `toko_id` INTEGER NOT NULL,
    `pembulatan` INTEGER NOT NULL,
    `user_id` INTEGER NULL,
    `created` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_pembayaran_hutang_detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pembayaran_hutang_id` INTEGER NULL,
    `pembelian_id` INTEGER NULL,
    `amount` INTEGER NULL,
    `data_status` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_pembayaran_hutang_nilai` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pembayaran_hutang_id` INTEGER NOT NULL,
    `pembayaran_type_id` INTEGER NULL,
    `giro_register_id` INTEGER NULL,
    `bank_list_id` BOOLEAN NULL,
    `nama_bank` VARCHAR(100) NULL,
    `no_rek_bank` VARCHAR(100) NULL,
    `tanggal_transfer` DATE NULL,
    `no_giro` VARCHAR(50) NULL,
    `tanggal_giro` DATE NULL,
    `jatuh_tempo` DATE NULL,
    `tanggal_cair` DATE NULL,
    `nama_penerima` VARCHAR(100) NULL,
    `amount` INTEGER NOT NULL DEFAULT 0,
    `keterangan` VARCHAR(100) NULL,
    `user_id` INTEGER NULL,
    `created` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `status` TINYINT NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_pembayaran_pembelian` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pembelian_id` INTEGER NULL,
    `pembayaran_type_id` INTEGER NULL,
    `amount` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_pembayaran_pengeluaran_stok_lain` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pengeluaran_stok_lain_id` SMALLINT NULL,
    `pembayaran_type_id` INTEGER NULL,
    `dp_masuk_id` INTEGER NULL,
    `amount` INTEGER NOT NULL,
    `keterangan` VARCHAR(150) NULL,
    `user_id` SMALLINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_pembayaran_penjualan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `penjualan_id` INTEGER NULL,
    `pembayaran_type_id` INTEGER NULL,
    `dp_masuk_id` INTEGER NULL,
    `amount` INTEGER NOT NULL,
    `keterangan` VARCHAR(150) NULL,
    `user_id` SMALLINT NULL,

    INDEX `pembayaran_type_id`(`pembayaran_type_id`),
    INDEX `penjualan_id`(`penjualan_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_pembayaran_penjualan_giro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `penjualan_id` INTEGER NOT NULL,
    `nama_bank` VARCHAR(100) NOT NULL,
    `no_rek_bank` VARCHAR(100) NULL,
    `tanggal_giro` DATE NOT NULL,
    `jatuh_tempo` DATE NOT NULL,
    `no_akun` VARCHAR(50) NOT NULL,
    `keterangan` VARCHAR(100) NULL,
    `tanggal_setor` DATE NULL,
    `user_id` INTEGER NULL,
    `created` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_pembayaran_piutang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer_id` INTEGER NOT NULL,
    `tanggal_kontra` DATE NULL,
    `toko_id` INTEGER NOT NULL,
    `pembulatan` INTEGER NULL,
    `lain2` MEDIUMINT NULL,
    `user_id` INTEGER NULL,
    `created` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `status_aktif` INTEGER NOT NULL DEFAULT 1,

    INDEX `customer_id`(`customer_id`),
    INDEX `status_aktif`(`status_aktif`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_pembayaran_piutang_detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pembayaran_piutang_id` INTEGER NULL,
    `penjualan_id` INTEGER NULL,
    `amount` INTEGER NULL,
    `data_status` INTEGER NOT NULL DEFAULT 1,

    INDEX `data_status`(`data_status`),
    INDEX `data_status_2`(`data_status`),
    INDEX `pembayaran_piutang_id`(`pembayaran_piutang_id`),
    INDEX `penjualan_id`(`penjualan_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_pembayaran_piutang_nilai` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pembayaran_piutang_id` INTEGER NOT NULL,
    `pembayaran_type_id` INTEGER NULL,
    `dp_masuk_id` INTEGER NULL,
    `nama_bank` VARCHAR(100) NULL,
    `no_rek_bank` VARCHAR(100) NULL,
    `tanggal_transfer` DATE NULL,
    `no_giro` VARCHAR(50) NULL,
    `urutan_giro` INTEGER NULL,
    `no_akun_giro` VARCHAR(50) NULL,
    `tanggal_giro` DATE NULL,
    `jatuh_tempo` DATE NULL,
    `nama_penerima` VARCHAR(100) NULL,
    `amount` INTEGER NOT NULL DEFAULT 0,
    `keterangan` VARCHAR(100) NULL,
    `user_id` INTEGER NULL,
    `created` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_pembayaran_piutang_nilai_info` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pembayaran_piutang_nilai_id` INTEGER NULL,
    `pembayaran_piutang_detail_id` INTEGER NULL,
    `penjualan_id` INTEGER NULL,
    `updated` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_pembayaran_retur` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `retur_jual_id` INTEGER NULL,
    `pembayaran_type_id` INTEGER NULL,
    `amount` INTEGER NULL,
    `keterangan` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_pembayaran_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_pembelian` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `no_nota` INTEGER NOT NULL,
    `ockh_info` VARCHAR(100) NULL,
    `no_faktur` VARCHAR(50) NULL,
    `penerimaan_barang_id` INTEGER NULL,
    `po_pembelian_batch_id` INTEGER NULL,
    `tanggal` DATE NOT NULL,
    `toko_id` INTEGER NULL,
    `supplier_id` INTEGER NULL,
    `gudang_id` INTEGER NULL,
    `diskon` INTEGER NULL,
    `jatuh_tempo` DATE NULL,
    `keterangan` VARCHAR(100) NULL,
    `status` INTEGER NOT NULL DEFAULT 0,
    `status_aktif` INTEGER NOT NULL DEFAULT 1,
    `user_id` INTEGER NOT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `cancelled_by` INTEGER NULL,
    `cancelled_date` DATETIME(0) NULL,
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX `created_at`(`created_at`),
    INDEX `penerimaan_barang`(`penerimaan_barang_id`),
    INDEX `po_pembelian_batch_id`(`po_pembelian_batch_id`),
    INDEX `supplier_id`(`supplier_id`),
    INDEX `tanggal`(`tanggal`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_pembelian_barang_list` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pembelian_id` INTEGER NULL,
    `barang_id` INTEGER NULL,
    `warna_id` INTEGER NULL,
    `satuan_id` INTEGER NULL,
    `qty` FLOAT NULL,
    `harga_beli` INTEGER NULL,
    `jumlah_roll` FLOAT NULL,
    `gudang_id` VARCHAR(50) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_pembelian_detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pembelian_id` INTEGER NOT NULL,
    `ockh` VARCHAR(100) NULL,
    `barang_beli_id` INTEGER NOT NULL,
    `barang_id` INTEGER NOT NULL,
    `warna_id` INTEGER NOT NULL,
    `satuan_id` INTEGER NULL,
    `qty` DECIMAL(15, 2) NULL,
    `jumlah_roll` INTEGER NULL,
    `harga_beli` DECIMAL(10, 2) NULL,
    `gudang_id` INTEGER NULL,
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX `barang_id`(`barang_id`),
    INDEX `pembelian_id`(`pembelian_id`),
    INDEX `warna_id`(`warna_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_pembelian_lain` (
    `id` SMALLINT NOT NULL AUTO_INCREMENT,
    `tanggal` DATE NULL,
    `no_faktur` VARCHAR(20) NULL,
    `supplier_id` TINYINT NULL,
    `supplier_lain_text` VARCHAR(100) NULL,
    `toko_id` BOOLEAN NOT NULL DEFAULT true,
    `user_id` SMALLINT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `status_aktif` BOOLEAN NULL DEFAULT true,
    `cancelled_by` BOOLEAN NULL,
    `canceled_date` DATETIME(0) NULL,
    `jatuh_tempo` DATE NULL,
    `keterangan` VARCHAR(200) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_pembelian_lain_detail` (
    `id` SMALLINT NOT NULL AUTO_INCREMENT,
    `pembelian_lain_id` SMALLINT NULL,
    `keterangan_barang` VARCHAR(500) NULL,
    `qty` SMALLINT NULL,
    `harga_beli` INTEGER NULL,
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_pembelian_qty_detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pembelian_detail_id` MEDIUMINT NULL,
    `qty` DECIMAL(6, 2) NULL,
    `jumlah_roll` SMALLINT NOT NULL,

    INDEX `pembelian_detail_id`(`pembelian_detail_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_penerimaan_barang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `no_plat` VARCHAR(50) NOT NULL DEFAULT '''''',
    `jam_input` VARCHAR(50) NOT NULL DEFAULT '''''',
    `user_id` SMALLINT NOT NULL DEFAULT 0,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_pengeluaran_stok_lain` (
    `id` SMALLINT NOT NULL AUTO_INCREMENT,
    `tanggal` DATE NULL,
    `no_faktur` SMALLINT NULL,
    `keterangan` VARCHAR(300) NULL,
    `toko_id` TINYINT NOT NULL DEFAULT 1,
    `user_id` SMALLINT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `status_aktif` TINYINT NOT NULL DEFAULT 1,
    `status` TINYINT NOT NULL DEFAULT 1,
    `closed_by` SMALLINT NULL,
    `closed_date` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_pengeluaran_stok_lain_detail` (
    `id` SMALLINT NOT NULL AUTO_INCREMENT,
    `pengeluaran_stok_lain_id` SMALLINT NULL,
    `barang_id` SMALLINT NULL,
    `gudang_id` TINYINT NULL,
    `warna_id` SMALLINT NULL,
    `harga_jual` MEDIUMINT NULL,
    `user_id` SMALLINT NULL,
    `created` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_pengeluaran_stok_lain_qty_detail` (
    `id` MEDIUMINT NOT NULL AUTO_INCREMENT,
    `pengeluaran_stok_lain_detail_id` SMALLINT NULL,
    `qty` SMALLINT NULL,
    `jumlah_roll` SMALLINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_penjualan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `toko_id` INTEGER NOT NULL,
    `penjualan_type_id` INTEGER NOT NULL DEFAULT 3,
    `no_faktur` INTEGER NULL,
    `po_number` VARCHAR(50) NOT NULL,
    `tanggal` DATE NULL,
    `ppn` DECIMAL(10, 2) NULL,
    `customer_id` INTEGER NULL,
    `gudang_id` INTEGER NULL,
    `diskon` INTEGER NULL DEFAULT 0,
    `jatuh_tempo` DATE NULL,
    `ongkos_kirim` INTEGER NOT NULL DEFAULT 0,
    `keterangan` VARCHAR(100) NULL,
    `nama_keterangan` VARCHAR(200) NOT NULL,
    `alamat_keterangan` VARCHAR(200) NOT NULL,
    `nama_cust_fp` VARCHAR(150) NOT NULL DEFAULT '''''',
    `alamat_cust_fp` VARCHAR(300) NOT NULL DEFAULT '''''',
    `npwp_cust_fp` VARCHAR(100) NOT NULL DEFAULT '''''',
    `nik_cust_fp` VARCHAR(100) NOT NULL DEFAULT '''''',
    `no_faktur_fp` VARCHAR(50) NOT NULL DEFAULT '''''',
    `tipe_po` TINYINT NULL,
    `po_penjualan_id` INTEGER NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `status_aktif` INTEGER NOT NULL DEFAULT 1,
    `closed_by` INTEGER NOT NULL,
    `closed_date` DATETIME(0) NULL,
    `user_id` INTEGER NOT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `revisi` INTEGER NOT NULL DEFAULT 0,
    `fp_status` INTEGER NOT NULL DEFAULT 0,
    `is_custom_view` TINYINT NOT NULL DEFAULT 0,

    INDEX `customer_id`(`customer_id`),
    INDEX `no_faktur`(`no_faktur`),
    INDEX `penjualan_type_id`(`penjualan_type_id`),
    INDEX `status_aktif`(`status_aktif`),
    INDEX `tanggal`(`tanggal`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_penjualan_detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `penjualan_id` INTEGER NOT NULL,
    `barang_id` INTEGER NOT NULL,
    `kode_beli` VARCHAR(100) NULL,
    `nama_jual_tercetak` VARCHAR(100) NULL,
    `warna_id` INTEGER NULL,
    `satuan_id` INTEGER NULL,
    `harga_jual` INTEGER NULL,
    `gudang_id` VARCHAR(50) NULL,
    `subqty` DECIMAL(10, 2) NULL,
    `subjumlah_roll` SMALLINT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX `barang_id`(`barang_id`),
    INDEX `penjualan_id`(`penjualan_id`),
    INDEX `warna_id`(`warna_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_penjualan_log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `penjualan_id` INTEGER NULL,
    `pengiriman_id` INTEGER NULL,
    `tgl_print` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_penjualan_posisi_barang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `penjualan_id` INTEGER NULL,
    `tipe_ambil_barang_id` TINYINT NULL,
    `tanggal_pengambilan` DATE NULL,
    `alamat_pengiriman` VARCHAR(500) NULL DEFAULT '''''',
    `user_id` TINYINT NULL,
    `status` TINYINT NOT NULL DEFAULT 1,
    `closed_by` TINYINT NULL,
    `created` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_penjualan_qty_detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `penjualan_detail_id` INTEGER NULL,
    `qty` DECIMAL(15, 2) NULL,
    `jumlah_roll` SMALLINT NOT NULL,

    INDEX `penjualan_detail_id`(`penjualan_detail_id`),
    INDEX `qty`(`qty`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_penjualan_remap` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tanggal_remap` DATE NULL,
    `user_id` TINYINT NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,
    `released` DATETIME(0) NULL,
    `released_by` TINYINT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_penjualan_remap_list` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `penjualan_remap_id` INTEGER NULL,
    `penjualan_id_asal` INTEGER NULL,
    `no_faktur_asal` INTEGER NULL,
    `tanggal_asal` DATE NULL,
    `penjualan_id_tujuan` INTEGER NULL,
    `no_faktur_tujuan` INTEGER NULL,
    `tanggal_tujuan` DATE NULL,
    `user_id` TINYINT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_penjualan_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `text` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_penyesuaian_stok` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipe_transaksi` INTEGER NULL,
    `tanggal` DATE NULL,
    `gudang_id` INTEGER NULL,
    `barang_id` INTEGER NULL,
    `warna_id` INTEGER NULL,
    `qty` DECIMAL(15, 2) NULL,
    `jumlah_roll` SMALLINT NOT NULL,
    `keterangan` VARCHAR(300) NULL,
    `user_id` INTEGER NOT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `barang_id`(`barang_id`),
    INDEX `gudang_id`(`gudang_id`),
    INDEX `tanggal`(`tanggal`),
    INDEX `tipe_transaksi`(`tipe_transaksi`),
    INDEX `warna_id`(`warna_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_penyesuaian_stok_qty` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `penyesuaian_stok_id` INTEGER NULL,
    `qty` DECIMAL(10, 2) NULL,
    `jumlah_roll` SMALLINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_penyesuaian_stok_split` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `penyesuaian_stok_id` MEDIUMINT NULL,
    `qty` DECIMAL(10, 2) NULL,
    `jumlah_roll` TINYINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_piutang_awal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `toko_id` INTEGER NOT NULL DEFAULT 1,
    `customer_id` INTEGER NULL,
    `tanggal` DATE NULL,
    `no_faktur` VARCHAR(40) NULL,
    `amount` INTEGER NULL,
    `jatuh_tempo` DATE NOT NULL,
    `tipe_before` TINYINT NULL,
    `penjualan_id_before` MEDIUMINT NULL,
    `jumlah_roll` TINYINT NULL,
    `user_id` TINYINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_planner_warna_status` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` SMALLINT NULL,
    `barang_id` SMALLINT NULL,
    `status` TINYINT NULL,
    `warna_id` SMALLINT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_po_pembelian` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tanggal` DATE NULL,
    `po_number` INTEGER NULL,
    `toko_id` INTEGER NULL DEFAULT 1,
    `supplier_id` INTEGER NULL,
    `up_person` VARCHAR(200) NULL,
    `sales_contract` VARCHAR(100) NULL,
    `catatan` VARCHAR(2000) NULL,
    `po_status` INTEGER NULL DEFAULT 1,
    `created` DATETIME(0) NULL,
    `user_id` INTEGER NULL,
    `status_aktif` INTEGER NULL DEFAULT 1,
    `locked_by` TINYTEXT NULL,
    `locked_date` DATETIME(0) NULL,
    `cancelled_by` SMALLINT NULL,
    `cancelled_date` DATETIME(0) NULL,
    `released_by` TINYTEXT NULL,
    `released_date` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_po_pembelian_batch` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tanggal` DATE NULL,
    `po_pembelian_id` INTEGER NULL,
    `batch` TINYINT NULL,
    `keterangan_batch` VARCHAR(100) NOT NULL DEFAULT '''''',
    `status` TINYINT NOT NULL DEFAULT 1,
    `revisi` TINYINT NOT NULL DEFAULT 1,
    `revisi_by` TINYINT NULL,
    `revisi_ori_id` MEDIUMINT NULL,
    `revisi_date` DATE NULL,
    `locked_by` TINYTEXT NULL,
    `locked_date` DATETIME(0) NULL,
    `updated` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `released_by` TINYTEXT NULL,
    `released_date` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_po_pembelian_before_qty` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `po_pembelian_id` SMALLINT NULL,
    `po_pembelian_batch_id` SMALLINT NOT NULL,
    `po_pembelian_warna_id` SMALLINT NULL,
    `qty` MEDIUMINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_po_pembelian_detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `po_pembelian_id` MEDIUMINT NULL,
    `nama_tercetak` VARCHAR(500) NULL,
    `barang_beli_id` INTEGER NULL,
    `barang_id` SMALLINT NULL,
    `harga` INTEGER NULL,
    `qty` INTEGER NULL,
    `jumlah_roll` TINYINT NULL,
    `created` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `barang_id`(`barang_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_po_pembelian_warna` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `po_pembelian_batch_id` MEDIUMINT NULL,
    `po_pembelian_detail_id` MEDIUMINT NULL,
    `tipe_barang` BOOLEAN NOT NULL DEFAULT true,
    `barang_beli_id_baru` INTEGER NULL,
    `barang_id_baru` SMALLINT NULL,
    `barang_id_baru_rename` SMALLINT NULL,
    `warna_id` SMALLINT NULL,
    `harga_baru` INTEGER NULL,
    `qty` INTEGER NULL,
    `OCKH` VARCHAR(500) NULL,
    `locked_date` DATE NULL,
    `locked_by` SMALLINT NULL,
    `locked_keterangan` VARCHAR(200) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_po_penjualan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tanggal` DATE NOT NULL,
    `tipe` BOOLEAN NOT NULL DEFAULT true,
    `tanggal_kirim` DATE NULL,
    `customer_id` INTEGER NULL,
    `alamat_kirim` VARCHAR(500) NULL,
    `po_number` VARCHAR(200) NOT NULL,
    `request_index` MEDIUMINT NULL,
    `contact_person` VARCHAR(50) NULL,
    `diskon` DECIMAL(15, 2) NOT NULL DEFAULT 0.00,
    `biaya_lain` DECIMAL(15, 2) NOT NULL DEFAULT 0.00,
    `ppn_include_status` BOOLEAN NOT NULL DEFAULT true,
    `ppn_value` DECIMAL(15, 2) NOT NULL DEFAULT 0.00,
    `keterangan` VARCHAR(500) NULL,
    `keterangan_footer` VARCHAR(1000) NULL,
    `status_po` BOOLEAN NOT NULL DEFAULT true,
    `user_id` SMALLINT NULL,
    `locked_by` SMALLINT NULL,
    `locked_date` DATETIME(0) NULL,
    `closed_by` SMALLINT NULL,
    `closed_date` DATETIME(0) NULL,
    `status_aktif` TINYINT NOT NULL DEFAULT 1,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_po_penjualan_detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `po_penjualan_id` INTEGER NULL,
    `barang_id` SMALLINT NULL,
    `warna_id` SMALLINT NULL,
    `qty` DECIMAL(15, 2) NULL,
    `qty_jual` DECIMAL(15, 2) NOT NULL DEFAULT 0.00,
    `harga` DECIMAL(15, 2) NULL,
    `keterangan` VARCHAR(500) NULL,
    `user_id` SMALLINT NULL,
    `closed_by` SMALLINT NULL,
    `closed_date` DATETIME(0) NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_posisi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_ppn` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tanggal` DATE NULL,
    `ppn` DECIMAL(15, 2) NULL,
    `user_id` INTEGER NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_ppo_lock` (
    `id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `tanggal` DATE NULL,
    `barang_id` SMALLINT UNSIGNED NULL,
    `po_pembelian_batch_id_aktif` VARCHAR(300) NULL,
    `status` TINYINT NOT NULL DEFAULT 1,
    `locked_by` TINYINT UNSIGNED NULL,
    `downloaded` TINYINT UNSIGNED NOT NULL DEFAULT 0,
    `created` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_ppo_lock_detail` (
    `id` MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `ppo_lock_id` SMALLINT UNSIGNED NULL,
    `warna_id` SMALLINT UNSIGNED NULL,
    `qty` MEDIUMINT UNSIGNED NULL,
    `user_id` TINYINT UNSIGNED NULL,
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_ppo_qty_current` (
    `id` SMALLINT NOT NULL AUTO_INCREMENT,
    `barang_id` SMALLINT NULL,
    `warna_id` SMALLINT NULL,
    `qty` MEDIUMINT NULL,
    `user_id` SMALLINT NULL,
    `created` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_ppo_table_setting` (
    `id` SMALLINT NOT NULL AUTO_INCREMENT,
    `po_pembelian_batch_id` MEDIUMINT NULL,
    `barang_id` SMALLINT NULL DEFAULT 1,
    `status_include` TINYINT NULL DEFAULT 1,
    `status_show` TINYINT NULL DEFAULT 1,
    `user_id` SMALLINT NULL,
    `created` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_ppo_to_po` (
    `id` SMALLINT NOT NULL AUTO_INCREMENT,
    `ppo_lock_id` SMALLINT UNSIGNED NULL,
    `po_pembelian_detail_id` SMALLINT UNSIGNED NULL,
    `po_pembelian_batch_id` SMALLINT UNSIGNED NULL,
    `user_id` SMALLINT UNSIGNED NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_printer_list` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(100) NULL,
    `status_aktif` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_profile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `base_link` VARCHAR(300) NULL,
    `base_code` VARCHAR(100) NULL,
    `token` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_rekam_faktur_pajak` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tanggal_awal` DATE NULL,
    `tanggal_akhir` DATE NULL,
    `nilai` DECIMAL(15, 2) NULL,
    `nilai_ppn` DECIMAL(15, 2) NULL,
    `jumlah_trx` SMALLINT NULL,
    `no_fp_awal` VARCHAR(50) NULL,
    `no_fp_akhir` VARCHAR(50) NULL,
    `user_id` SMALLINT NULL,
    `status` TINYINT NOT NULL DEFAULT 1,
    `status_email` BOOLEAN NOT NULL DEFAULT true,
    `no_surat` SMALLINT NULL,
    `is_gunggung` TINYINT NOT NULL DEFAULT 0,
    `locked_date` DATETIME(0) NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_rekam_faktur_pajak_detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rekam_faktur_pajak_id` INTEGER NOT NULL,
    `penjualan_id` INTEGER NOT NULL,
    `tanggal` DATE NULL,
    `customer_id` INTEGER NOT NULL,
    `nama_customer` VARCHAR(200) NULL,
    `no_npwp` VARCHAR(20) NULL,
    `no_nik` VARCHAR(20) NULL,
    `alamat_lengkap` VARCHAR(1000) NULL,
    `no_faktur_pajak` VARCHAR(20) NULL,
    `no_faktur_jual` VARCHAR(20) NULL,
    `ppn_berlaku` DECIMAL(15, 2) NOT NULL DEFAULT 0.00,
    `total_jual` DECIMAL(15, 2) NOT NULL DEFAULT 0.00,
    `total_dpp` DECIMAL(15, 2) NOT NULL DEFAULT 0.00,
    `total_ppn` DECIMAL(15, 2) NOT NULL DEFAULT 0.00,
    `no_faktur_pajak_id` INTEGER NULL,
    `keterangan` VARCHAR(200) NULL,
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `status` BOOLEAN NOT NULL DEFAULT true,

    INDEX `penjualan_id`(`penjualan_id`),
    INDEX `penjualan_id_2`(`penjualan_id`),
    INDEX `rekam_faktur_pajak_id`(`rekam_faktur_pajak_id`),
    INDEX `rekam_faktur_pajak_id_2`(`rekam_faktur_pajak_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_rekam_faktur_pajak_email` (
    `id` MEDIUMINT NOT NULL AUTO_INCREMENT,
    `rekam_faktur_pajak_id` MEDIUMINT NULL,
    `customer_id` SMALLINT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `email_stat` BOOLEAN NOT NULL DEFAULT false,
    `status_1` BOOLEAN NOT NULL DEFAULT false,
    `status_2` BOOLEAN NOT NULL DEFAULT false,
    `status_3` BOOLEAN NOT NULL DEFAULT false,
    `status_4` BOOLEAN NOT NULL DEFAULT false,
    `keterangan` VARCHAR(200) NULL,
    `draft_id` VARCHAR(100) NULL,
    `message_id` VARCHAR(100) NULL,
    `thread_id` VARCHAR(100) NULL,
    `label_id` VARCHAR(50) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_reminder` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `note_order_id` INTEGER NULL,
    `reminder` DATETIME(0) NULL,
    `user_id` INTEGER NOT NULL,
    `status_on` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_request_barang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `toko_id` TINYINT NOT NULL DEFAULT 1,
    `tanggal` DATE NULL,
    `no_request` SMALLINT NULL,
    `supplier_id` SMALLINT NULL,
    `closed_date` DATETIME(0) NULL,
    `user_id` TINYINT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_request_barang_batch` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tanggal` DATE NULL,
    `attn` VARCHAR(50) NULL,
    `request_barang_id` SMALLINT UNSIGNED NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,
    `batch` TINYINT NULL,
    `user_id` TINYINT NULL,
    `locked_by` TINYINT NULL,
    `locked_date` DATETIME(0) NULL,
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `status_aktif` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_request_barang_detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `request_barang_batch_id` INTEGER NULL,
    `po_pembelian_batch_id` INTEGER NULL,
    `bulan_request` DATE NULL,
    `barang_beli_id` SMALLINT NULL,
    `barang_id` INTEGER NULL,
    `warna_id` INTEGER NULL,
    `qty` DECIMAL(15, 2) NULL,
    `status_urgent` BOOLEAN NOT NULL DEFAULT false,
    `is_po_baru` TINYINT NOT NULL DEFAULT 1,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_request_barang_qty` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `request_barang_batch_id` INTEGER NULL,
    `bulan_request` DATE NULL,
    `barang_beli_id` SMALLINT NULL,
    `barang_id` INTEGER NULL,
    `warna_id` INTEGER NULL,
    `qty` DECIMAL(15, 2) NULL,
    `keterangan` VARCHAR(200) NULL,
    `finished_date` DATETIME(0) NULL,
    `finished_by` TINYINT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `isFinished` TINYINT NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_request_update_lock` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `po_pembelian_batch_id` INTEGER NULL,
    `request_barang_detail_id` INTEGER NULL,
    `request_barang_batch_id` INTEGER NULL,
    `qty` DECIMAL(15, 2) NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_retur_beli` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ockh_info` VARCHAR(100) NULL,
    `no_sj` SMALLINT NULL,
    `po_pembelian_batch_id` INTEGER NULL,
    `tanggal` DATE NULL,
    `toko_id` INTEGER NULL,
    `supplier_id` INTEGER NULL,
    `keterangan1` VARCHAR(90) NULL,
    `keterangan2` VARCHAR(90) NULL,
    `status` INTEGER NOT NULL DEFAULT 0,
    `status_aktif` INTEGER NOT NULL DEFAULT 1,
    `closed_by` TINYINT NULL,
    `closed_date` DATETIME(0) NULL,
    `user_id` INTEGER NOT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX `tanggal`(`tanggal`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_retur_beli_detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `retur_beli_id` SMALLINT NULL,
    `gudang_id` INTEGER NULL,
    `barang_id` INTEGER NULL,
    `warna_id` INTEGER NULL,
    `harga` INTEGER NULL,
    `keterangan` VARCHAR(200) NULL,

    INDEX `barang_id`(`barang_id`),
    INDEX `retur_beli_id`(`retur_beli_id`),
    INDEX `warna_id`(`warna_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_retur_beli_qty` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `retur_beli_detail_id` SMALLINT NULL,
    `qty` FLOAT NULL,
    `jumlah_roll` SMALLINT NULL,

    INDEX `retur_beli_detail_id`(`retur_beli_detail_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_retur_jual` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tanggal` DATE NOT NULL,
    `toko_id` INTEGER NOT NULL DEFAULT 1,
    `penjualan_id` INTEGER NOT NULL,
    `no_faktur` INTEGER NOT NULL,
    `retur_type_id` INTEGER NULL,
    `customer_id` INTEGER NULL,
    `nama_keterangan` VARCHAR(100) NOT NULL,
    `user_id` INTEGER NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `status` INTEGER NOT NULL DEFAULT 1,
    `closed_by` INTEGER NULL,
    `closed_date` DATETIME(0) NULL,
    `status_aktif` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_retur_jual_detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `retur_jual_id` INTEGER NULL,
    `gudang_id` INTEGER NULL,
    `barang_id` INTEGER NULL,
    `warna_id` INTEGER NULL,
    `harga` INTEGER NULL,
    `keterangan` VARCHAR(200) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_retur_jual_qty` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `retur_jual_detail_id` INTEGER NULL,
    `qty` FLOAT NULL,
    `jumlah_roll` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_satuan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(100) NULL,
    `status_aktif` INTEGER NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_setting` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `google_client_id` VARCHAR(100) NULL,
    `google_client_secret` VARCHAR(200) NULL,
    `google_credentials` VARCHAR(400) NULL,
    `google_refresh_token` VARCHAR(200) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_stok_awal_item_harga` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `barang_id` INTEGER NULL,
    `warna_id` INTEGER NULL,
    `harga_stok_awal` DECIMAL(15, 2) NOT NULL DEFAULT 0.00,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_stok_before` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `barang_id` MEDIUMINT NULL,
    `warna_id` MEDIUMINT NULL,
    `gudang_id` SMALLINT NULL,
    `qty` MEDIUMINT NULL,
    `jumlah_roll` SMALLINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_stok_opname` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tanggal` DATE NULL,
    `stok_opname_report_id` INTEGER NULL,
    `barang_id_so` SMALLINT NULL,
    `warna_id_so` SMALLINT NULL,
    `gudang_id_so` SMALLINT NULL,
    `user_id` TINYINT NULL,
    `created_at` DATETIME(0) NULL,
    `stok_current` DECIMAL(11, 2) NULL,
    `roll_current` SMALLINT NULL,
    `stok_date` DATETIME(0) NULL,
    `status_aktif` BOOLEAN NOT NULL DEFAULT false,

    INDEX `created_at`(`created_at`),
    INDEX `status_aktif`(`status_aktif`),
    INDEX `tanggal`(`tanggal`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_stok_opname_detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `stok_opname_id` SMALLINT NULL,
    `barang_id` SMALLINT NULL,
    `warna_id` SMALLINT NULL,
    `gudang_id` TINYINT NULL,
    `qty` DECIMAL(8, 2) NULL,
    `jumlah_roll` SMALLINT NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,

    INDEX `stok_opname_id`(`stok_opname_id`, `barang_id`, `warna_id`, `gudang_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_stok_opname_report` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `no_surat` SMALLINT NULL,
    `closed_by` TINYINT NULL,
    `keterangan` VARCHAR(200) NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_supplier` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode` VARCHAR(2) NULL,
    `nama` VARCHAR(70) NULL,
    `alamat` VARCHAR(100) NULL,
    `telepon` VARCHAR(50) NULL,
    `kota` VARCHAR(100) NULL,
    `fax` VARCHAR(50) NULL,
    `kode_pos` VARCHAR(20) NULL,
    `nama_bank` VARCHAR(200) NULL,
    `no_rek_bank` VARCHAR(200) NULL,
    `email` VARCHAR(70) NULL,
    `website` VARCHAR(50) NULL,
    `status_aktif` INTEGER NOT NULL DEFAULT 1,
    `faktur_inisial` VARCHAR(2) NULL,
    `tipe_supplier` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_surat_jalan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `penjualan_id` INTEGER NULL,
    `no_sj` INTEGER NULL,
    `tanggal` DATE NULL,
    `alamat_kirim_id` INTEGER NULL,
    `user_id` TINYINT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX `no_sj`(`no_sj`),
    INDEX `penjualan_id`(`penjualan_id`),
    INDEX `tanggal`(`tanggal`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_toko` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(70) NULL,
    `alias` VARCHAR(70) NULL,
    `alamat` VARCHAR(100) NULL,
    `telepon` VARCHAR(50) NULL,
    `email` VARCHAR(100) NULL,
    `fax` VARCHAR(100) NULL,
    `kota` VARCHAR(20) NULL,
    `kode_pos` VARCHAR(20) NULL,
    `NPWP` VARCHAR(100) NULL,
    `pre_faktur` VARCHAR(2) NULL,
    `pre_po` VARCHAR(2) NULL,
    `status_aktif` INTEGER NOT NULL DEFAULT 1,
    `host` VARCHAR(100) NULL,
    `relay_mail` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_tutup_buku` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tanggal` DATE NULL,
    `user_id` INTEGER NULL,
    `updated` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_tutup_buku_detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tahun` DATE NULL,
    `barang_id` SMALLINT NULL,
    `warna_id` SMALLINT NULL,
    `01_harga` DECIMAL(15, 2) NULL,
    `01_qty` DECIMAL(15, 2) NULL,
    `01_roll` DECIMAL(15, 2) NULL,
    `02_harga` DECIMAL(15, 2) NULL,
    `02_qty` DECIMAL(15, 2) NULL,
    `02_roll` DECIMAL(15, 2) NULL,
    `03_harga` DECIMAL(15, 2) NULL,
    `03_qty` DECIMAL(15, 2) NULL,
    `03_roll` DECIMAL(15, 2) NULL,
    `04_harga` DECIMAL(15, 2) NULL,
    `04_qty` DECIMAL(15, 2) NULL,
    `04_roll` DECIMAL(15, 2) NULL,
    `05_harga` DECIMAL(15, 2) NULL,
    `05_qty` DECIMAL(15, 2) NULL,
    `05_roll` DECIMAL(15, 2) NULL,
    `06_harga` DECIMAL(15, 2) NULL,
    `06_qty` DECIMAL(15, 2) NULL,
    `06_roll` DECIMAL(15, 2) NULL,
    `07_harga` DECIMAL(15, 2) NULL,
    `07_qty` DECIMAL(15, 2) NULL,
    `07_roll` DECIMAL(15, 2) NULL,
    `08_harga` DECIMAL(15, 2) NULL,
    `08_qty` DECIMAL(15, 2) NULL,
    `08_roll` DECIMAL(15, 2) NULL,
    `09_harga` DECIMAL(15, 2) NULL,
    `09_qty` DECIMAL(15, 2) NULL,
    `09_roll` DECIMAL(15, 2) NULL,
    `10_harga` DECIMAL(15, 2) NULL,
    `10_qty` DECIMAL(15, 2) NULL,
    `10_roll` DECIMAL(15, 2) NULL,
    `11_harga` DECIMAL(15, 2) NULL,
    `11_qty` DECIMAL(15, 2) NULL,
    `11_roll` DECIMAL(15, 2) NULL,
    `12_harga` DECIMAL(15, 2) NULL,
    `12_qty` DECIMAL(15, 2) NULL,
    `12_roll` DECIMAL(15, 2) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_tutup_buku_detail_gudang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tahun` DATE NULL,
    `barang_id` SMALLINT NULL,
    `warna_id` SMALLINT NULL,
    `gudang_id` TINYINT NULL,
    `01_qty` DECIMAL(15, 2) NULL,
    `01_roll` DECIMAL(15, 2) NULL,
    `02_qty` DECIMAL(15, 2) NULL,
    `02_roll` DECIMAL(15, 2) NULL,
    `03_qty` DECIMAL(15, 2) NULL,
    `03_roll` DECIMAL(15, 2) NULL,
    `04_qty` DECIMAL(15, 2) NULL,
    `04_roll` DECIMAL(15, 2) NULL,
    `05_qty` DECIMAL(15, 2) NULL,
    `05_roll` DECIMAL(15, 2) NULL,
    `06_qty` DECIMAL(15, 2) NULL,
    `06_roll` DECIMAL(15, 2) NULL,
    `07_qty` DECIMAL(15, 2) NULL,
    `07_roll` DECIMAL(15, 2) NULL,
    `08_qty` DECIMAL(15, 2) NULL,
    `08_roll` DECIMAL(15, 2) NULL,
    `09_qty` DECIMAL(15, 2) NULL,
    `09_roll` DECIMAL(15, 2) NULL,
    `10_qty` DECIMAL(15, 2) NULL,
    `10_roll` DECIMAL(15, 2) NULL,
    `11_qty` DECIMAL(15, 2) NULL,
    `11_roll` DECIMAL(15, 2) NULL,
    `12_qty` DECIMAL(15, 2) NULL,
    `12_roll` DECIMAL(15, 2) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_tutup_buku_gudang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tanggal` DATE NULL,
    `gudang_id` INTEGER NULL,
    `user_id` INTEGER NULL,
    `updated` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_tutup_buku_stok` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tanggal` DATETIME(0) NULL,
    `user_id` INTEGER NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(50) NULL,
    `password` VARCHAR(70) NULL,
    `nama` VARCHAR(70) NULL,
    `alamat` VARCHAR(100) NULL,
    `telepon` VARCHAR(50) NULL,
    `posisi_id` INTEGER NULL,
    `time_start` TIME(0) NOT NULL DEFAULT '07:00:00',
    `time_end` TIME(0) NOT NULL DEFAULT '18:00:00',
    `printer_list_id` INTEGER NULL,
    `status_aktif` INTEGER NULL DEFAULT 0,
    `PIN` VARCHAR(10) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_user_access_time` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NULL,
    `time_start` TIME(0) NULL,
    `time_end` TIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_warna` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `warna_beli` VARCHAR(50) NULL,
    `warna_jual` VARCHAR(50) NULL,
    `kode_warna` VARCHAR(7) NULL,
    `status_aktif` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_warning_jatuh_tempo_harian` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tanggal_warning` DATE NOT NULL,
    `toko_id` SMALLINT NOT NULL,
    `customer_id` INTEGER NOT NULL,
    `nama_customer` VARCHAR(200) NULL,
    `tipe_company` VARCHAR(50) NULL,
    `amount` DECIMAL(15, 2) NULL,
    `amount_data` VARCHAR(2000) NULL,
    `intvl` VARCHAR(200) NULL,
    `jatuh_tempo` VARCHAR(1000) NULL,
    `no_faktur` VARCHAR(2000) NULL,
    `tanggal` VARCHAR(1000) NULL,
    `user_id` SMALLINT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_warning_limit_belanja_harian` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tanggal_warning` DATE NOT NULL,
    `toko_id` SMALLINT NOT NULL,
    `customer_id` INTEGER NOT NULL,
    `nama_customer` VARCHAR(200) NULL,
    `tipe_company` VARCHAR(50) NULL,
    `sisa_limit` DECIMAL(15, 2) NULL,
    `user_id` SMALLINT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_warning_piutang_harian` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tanggal_warning` DATE NOT NULL,
    `toko_id` SMALLINT NOT NULL,
    `customer_id` INTEGER NOT NULL,
    `nama_customer` VARCHAR(200) NULL,
    `sisa_piutang` DECIMAL(15, 2) NULL,
    `counter_invoice` SMALLINT NOT NULL DEFAULT 0,
    `tanggal_start` DATE NULL,
    `tanggal_end` DATE NULL,
    `flag` TINYINT NOT NULL DEFAULT 1,
    `user_id` SMALLINT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nd_customer_source` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer_id` INTEGER NOT NULL,
    `source_type` VARCHAR(100) NULL,
    `source_detail` VARCHAR(100) NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    UNIQUE INDEX `nd_customer_source_customer_id_key`(`customer_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `nd_barang` ADD CONSTRAINT `nd_barang_satuan_id_fkey` FOREIGN KEY (`satuan_id`) REFERENCES `nd_satuan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nd_pembelian` ADD CONSTRAINT `nd_pembelian_penerimaan_barang_id_fkey` FOREIGN KEY (`penerimaan_barang_id`) REFERENCES `nd_penerimaan_barang`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nd_pembelian_detail` ADD CONSTRAINT `nd_pembelian_detail_pembelian_id_fkey` FOREIGN KEY (`pembelian_id`) REFERENCES `nd_pembelian`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nd_pembelian_detail` ADD CONSTRAINT `nd_pembelian_detail_barang_id_fkey` FOREIGN KEY (`barang_id`) REFERENCES `nd_barang`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nd_pembelian_detail` ADD CONSTRAINT `nd_pembelian_detail_barang_beli_id_fkey` FOREIGN KEY (`barang_beli_id`) REFERENCES `nd_barang_beli`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nd_pembelian_detail` ADD CONSTRAINT `nd_pembelian_detail_warna_id_fkey` FOREIGN KEY (`warna_id`) REFERENCES `nd_warna`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nd_penjualan` ADD CONSTRAINT `nd_penjualan_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `nd_customer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nd_penjualan_detail` ADD CONSTRAINT `nd_penjualan_detail_barang_id_fkey` FOREIGN KEY (`barang_id`) REFERENCES `nd_barang`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nd_penjualan_detail` ADD CONSTRAINT `nd_penjualan_detail_penjualan_id_fkey` FOREIGN KEY (`penjualan_id`) REFERENCES `nd_penjualan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nd_rekam_faktur_pajak_detail` ADD CONSTRAINT `nd_rekam_faktur_pajak_detail_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `nd_customer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nd_rekam_faktur_pajak_detail` ADD CONSTRAINT `nd_rekam_faktur_pajak_detail_penjualan_id_fkey` FOREIGN KEY (`penjualan_id`) REFERENCES `nd_penjualan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nd_rekam_faktur_pajak_detail` ADD CONSTRAINT `nd_rekam_faktur_pajak_detail_rekam_faktur_pajak_id_fkey` FOREIGN KEY (`rekam_faktur_pajak_id`) REFERENCES `nd_rekam_faktur_pajak`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nd_customer_source` ADD CONSTRAINT `nd_customer_source_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `nd_customer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
