/** @type {import("../../schema").Guide} */
const caraMembeliProduk = {
  role: "pembeli",
  slug: "cara-membeli-produk",
  title: "Cara Membeli Produk",
  summary: "Beli produk atau jasa dari link yang dibagikan temanmu, dari memilih produk sampai membayar.",
  mascot: "shopping",
  mascotMessage: "Belanja di Konksi itu gampang. Ikuti langkahnya satu per satu, ya!",
  duration: "5 menit",
  keywords: ["beli", "belanja", "pesan", "order", "bayar", "pembayaran", "checkout", "keranjang", "produk", "jasa", "link"],
  steps: [
    {
      title: "Buka link dari temanmu",
      text: "Tekan link Konksi yang dikirim temanmu, misalnya lewat WhatsApp. Halaman produk akan terbuka.",
      tip: {
        type: "tip",
        text: "Lihat kotak ungu di bawah layar. Kalau tertulis “kamu bisa hemat sampai…”, artinya temanmu memberimu diskon otomatis.",
      },
      screen: "product",
      spot: "promo-strip",
      spotLabel: "Diskon dari temanmu",
    },
    {
      title: "Tekan “Pesan Sekarang”",
      text: "Baca dulu nama, harga, dan keterangan produknya. Kalau sudah cocok, tekan tombol ungu Pesan Sekarang di bagian bawah.",
      tip: {
        type: "tip",
        text: "Ada yang ingin ditanyakan? Tekan “Chat Mitra” untuk mengobrol langsung dengan penjualnya.",
      },
      screen: "product",
      spot: "pesan",
    },
    {
      title: "Pilih varian dan jumlah",
      text: "Tekan pilihan varian yang kamu mau, lalu atur jumlahnya dengan tombol − dan +. Setelah itu tekan “Beli Sekarang”.",
      tip: {
        type: "tip",
        text: "Belum masuk akun? Akan muncul jendela masuk. Masuk dulu, lalu pesananmu otomatis dilanjutkan.",
      },
      screen: "variant-sheet",
      spot: "beli",
    },
    {
      title: "Isi data pemesan",
      text: "Centang “Gunakan data diri yang terdaftar” supaya nama, email, dan nomor terisi otomatis. Pastikan nomor WhatsApp-mu aktif.",
      screen: "checkout",
      spot: "buyer-info",
      spotLabel: "Centang ini",
    },
    {
      title: "Pilih tanggal dan jam",
      text: "Pilih tanggal pada kolom “Tanggal”, lalu tekan salah satu jam yang tersedia. Jam berwarna abu-abu sudah penuh atau sudah lewat.",
      optional: "Khusus pesanan jasa",
      screen: "checkout",
      spot: "time-slot",
      spotLabel: "Pilih jam",
    },
    {
      title: "Pilih cara bayar",
      text: "Tekan “Pilih metode pembayaran”, lalu tekan cara bayar yang kamu mau, misalnya QRIS atau transfer bank.",
      screen: "payment-sheet",
      spot: "channel",
    },
    {
      title: "Centang setuju, lalu tekan “Bayar”",
      text: "Centang “Saya setuju dengan Syarat & Ketentuan”, lalu tekan tombol ungu Bayar. Ikuti petunjuk di halaman pembayaran sampai selesai.",
      tip: {
        type: "warning",
        text: "Kalau diminta izin lokasi, tekan “Izinkan Lokasi”. Selesaikan pembayaran dalam 15 menit, atau pesanan akan dibatalkan.",
      },
      screen: "checkout",
      spot: "bayar",
    },
  ],
  outro: "Pesananmu sudah dibuat! Pantau perkembangannya di menu Transaksi.",
};

export default caraMembeliProduk;
