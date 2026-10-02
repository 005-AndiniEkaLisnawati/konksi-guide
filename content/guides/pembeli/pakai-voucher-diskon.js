/** @type {import("../../schema").Guide} */
const pakaiVoucherDiskon = {
  role: "pembeli",
  slug: "pakai-voucher-diskon",
  title: "Cara Menggunakan Kode Voucher Diskon / Cashback",
  summary: "Pakai voucher atau kode promo supaya harga belanjaanmu jadi lebih murah.",
  mascot: "discount",
  mascotMessage: "Siapa yang tidak suka hemat? Yuk pakai voucher supaya belanja lebih murah!",
  duration: "3 menit",
  keywords: ["voucher", "diskon", "kode", "promo", "cashback", "potongan", "hemat", "murah", "kupon"],
  steps: [
    {
      title: "Tekan ikon tiket di Beranda",
      text: "Buka Beranda, lalu tekan ikon tiket di pojok kanan atas. Halaman “Voucher Saya” akan terbuka.",
      screen: "home",
      spot: "voucher-icon",
    },
    {
      title: "Baca ketentuan voucher",
      text: "Tekan ikon (i) pada voucher untuk melihat syaratnya. Perhatikan minimal belanja dan tanggal berakhirnya.",
      tip: {
        type: "tip",
        text: "Voucher bergambar koin artinya potongan harga dalam Rupiah. Voucher bergambar persen artinya diskon persen.",
      },
      screen: "vouchers",
      spot: "voucher-info",
      spotLabel: "Lihat syarat",
    },
    {
      title: "Tekan “Pakai”",
      text: "Tekan tombol ungu Pakai pada voucher yang ingin kamu gunakan.",
      screen: "vouchers",
      spot: "pakai",
    },
    {
      title: "Pilih produk yang berlaku",
      text: "Akan muncul daftar “Produk Berlaku Voucher”. Tekan Pilih pada produk yang ingin kamu beli.",
      screen: "voucher-products",
      spot: "pilih-produk",
    },
    {
      title: "Tekan “Gunakan Voucher & Checkout”",
      text: "Pilih varian dan jumlah, lalu tekan tombol ungu Gunakan Voucher & Checkout.",
      screen: "voucher-variant",
      spot: "gunakan-voucher",
    },
    {
      title: "Tekan tombol centang di kolom kode promo",
      text: "Di halaman checkout, kodemu sudah tertulis di kolom “Punya kode promo?”. Tekan tombol centang ungu di ujung kolom itu supaya diskonnya terpakai.",
      tip: {
        type: "warning",
        text: "Diskon BELUM terpakai sebelum kamu menekan tombol centang. Kalau berhasil, muncul tulisan hijau “Voucher berhasil dipakai”.",
      },
      screen: "checkout",
      spot: "apply-voucher",
    },
  ],
  legend: {
    title: "Punya kode dari teman atau iklan?",
    items: [
      {
        label: "Ketik sendiri",
        text: "Saat checkout, ketik kodenya di kolom “Punya kode promo?”, lalu tekan tombol centang ungu.",
        tone: "primary",
      },
      {
        label: "Kode tidak berlaku?",
        text: "Periksa lagi ejaannya, minimal belanjanya, dan tanggal berakhirnya. Bisa jadi kuota voucher sudah habis.",
        tone: "coral",
      },
      {
        label: "Soal “cashback”",
        text: "Voucher potongan Rupiah langsung mengurangi harga saat kamu bayar. Kamu tidak perlu menunggu uang kembali.",
        tone: "mint",
      },
    ],
  },
  outro: "Mantap! Sekarang kamu tahu cara belanja lebih hemat dengan voucher.",
};

export default pakaiVoucherDiskon;
