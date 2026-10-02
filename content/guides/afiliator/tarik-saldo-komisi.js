/** @type {import("../../schema").Guide} */
const tarikSaldoKomisi = {
  role: "afiliator",
  slug: "tarik-saldo-komisi",
  title: "Cara Mengambil Komisi & Tarik Saldo ke Rekening Bank",
  summary: "Pindahkan komisi yang sudah kamu kumpulkan ke rekening bank pribadimu dengan aman.",
  mascot: "money",
  mascotMessage: "Komisimu sudah terkumpul? Yuk cairkan ke rekening bank, langkahnya gampang!",
  duration: "5 menit",
  keywords: ["tarik", "saldo", "komisi", "uang", "duit", "rekening", "bank", "cair", "pencairan", "withdraw", "penarikan", "ktp", "kyc"],
  steps: [
    {
      title: "Buka menu Saldo",
      text: "Tekan tombol Saldo (gambar dompet) di bagian bawah layar. Angka besar di atas adalah “Saldo Tersedia” yang bisa kamu tarik.",
      tip: {
        type: "tip",
        text: "Komisi dari pesanan yang belum selesai masuk ke “Saldo pending” dulu. Setelah pesanan selesai, saldo itu pindah ke Saldo Tersedia.",
      },
      screen: "balance",
      spot: "nav-saldo",
    },
    {
      title: "Verifikasi KTP kamu",
      text: "Tekan tombol Lengkapi di kotak kuning “Verifikasi KYC & Rekening”. Pilih foto KTP, centang persetujuan, lalu tekan “Kirim Dokumen”.",
      tip: {
        type: "tip",
        text: "Foto KTP harus jelas dan tidak buram, berformat JPG atau PNG, maksimal 5MB. Cek statusnya di Profil → Data Diri.",
      },
      optional: "Cukup sekali saja",
      screen: "kyc-sheet",
      spot: "kyc-kirim",
    },
    {
      title: "Daftarkan rekening bank",
      text: "Pada bagian “Rekening Penarikan”, tekan Tambah. Pilih bank, isi nomor rekening dan nama pemilik, lalu tekan “Simpan Rekening”.",
      tip: {
        type: "warning",
        text: "Rekening hanya bisa didaftarkan SATU KALI. Periksa nomor dengan teliti dan pastikan nama pemilik sama dengan nama di KTP.",
      },
      optional: "Cukup sekali saja",
      screen: "bank-sheet",
      spot: "simpan-rek",
    },
    {
      title: "Pastikan saldo cukup",
      text: "Lihat angka Saldo Tersedia. Penarikan baru bisa dilakukan kalau saldomu minimal Rp100.000.",
      screen: "balance",
      spot: "saldo-tersedia",
      spotLabel: "Lihat angka ini",
    },
    {
      title: "Tekan “+ Penarikan”",
      text: "Tekan tombol ungu + Penarikan di bawah angka saldo.",
      tip: {
        type: "tip",
        text: "Kalau muncul pesan meminta verifikasi KTP atau rekening, kembali ke langkah 2 dan 3.",
      },
      screen: "balance",
      spot: "penarikan",
    },
    {
      title: "Isi jumlah penarikan, lalu konfirmasi",
      text: "Ketik jumlah uang yang ingin kamu tarik. Periksa lagi rekening tujuannya, lalu tekan tombol untuk mengirim penarikan.",
      tip: { type: "warning", text: "Konksi tidak pernah meminta kode OTP atau PIN. Jangan berikan kepada siapa pun." },
      screen: "withdraw",
      spot: "withdraw-submit",
    },
    {
      title: "Pantau di Riwayat Transaksi Saldo",
      text: "Kembali ke menu Saldo dan geser ke bawah. Penarikanmu muncul di “Riwayat Transaksi Saldo” lengkap dengan statusnya.",
      screen: "balance",
      spot: "riwayat",
      spotLabel: "Cek di sini",
    },
  ],
  outro: "Selamat! Kamu sudah bisa mencairkan komisi ke rekening bank. Terus semangat berbagi link, ya!",
};

export default tarikSaldoKomisi;
