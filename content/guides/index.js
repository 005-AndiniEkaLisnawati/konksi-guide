/**
 * DAFTAR SEMUA PANDUAN
 * Urutan di sini = urutan tampil di situs (halaman utama, daftar peran, footer, tombol "berikutnya").
 * Menambah panduan: buat file baru di folder peran, import di bawah, lalu masukkan ke GUIDES.
 */

import tambahProdukBioLink from "./afiliator/tambah-produk-bio-link";
import ubahTampilanBioLink from "./afiliator/ubah-tampilan-bio-link";
import misiHarianTukarPoin from "./afiliator/misi-harian-tukar-poin";
import tarikSaldoKomisi from "./afiliator/tarik-saldo-komisi";
import caraMembeliProduk from "./pembeli/cara-membeli-produk";
import pakaiVoucherDiskon from "./pembeli/pakai-voucher-diskon";
import lacakStatusPesanan from "./pembeli/lacak-status-pesanan";

/** @type {import("../schema").Guide[]} */
export const GUIDES = [
  // afiliator
  tambahProdukBioLink,
  ubahTampilanBioLink,
  misiHarianTukarPoin,
  tarikSaldoKomisi,

  // pembeli
  caraMembeliProduk,
  pakaiVoucherDiskon,
  lacakStatusPesanan,
];
