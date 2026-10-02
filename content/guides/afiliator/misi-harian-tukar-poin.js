/** @type {import("../../schema").Guide} */
const misiHarianTukarPoin = {
  role: "afiliator",
  slug: "misi-harian-tukar-poin",
  title: "Cara Menyelesaikan Misi Harian & Tukar Poin Hadiah",
  summary: "Kumpulkan poin dari check-in dan misi harian, lalu tukarkan dengan voucher hadiah.",
  mascot: "gift",
  mascotMessage: "Setiap hari ada poin gratis menunggu. Ayo kumpulkan dan tukar jadi hadiah!",
  duration: "4 menit",
  keywords: ["misi", "poin", "hadiah", "tukar", "check-in", "checkin", "absen", "reward", "voucher", "harian", "klaim"],
  steps: [
    {
      title: "Check-in setiap hari",
      text: "Buka Beranda, lalu cari kotak “Daily Check-in”. Tekan tombol Check-in untuk mendapat poin gratis hari ini.",
      tip: { type: "tip", text: "Check-in 7 hari berturut-turut. Hari ke-7 ada hadiah kado spesial!" },
      screen: "home",
      spot: "checkin",
    },
    {
      title: "Tekan “Lihat Misi”",
      text: "Masih di kotak yang sama, tekan tulisan Lihat Misi di bawah tulisan “Misi Hari Ini”.",
      screen: "home",
      spot: "lihat-misi",
    },
    {
      title: "Tekan “Kerjakan” pada misi",
      text: "Di tab “Misi Harian”, pilih satu misi lalu tekan Kerjakan. Kamu akan dibawa langsung ke tempat misi itu dikerjakan.",
      tip: {
        type: "tip",
        text: "Contoh misi: menambah produk ke Bio Link, menyimpan produk, atau menyukai konten. Kemajuanmu dihitung otomatis.",
      },
      screen: "missions",
      spot: "kerjakan",
    },
    {
      title: "Tekan “Klaim Poin”",
      text: "Kalau misi sudah selesai, tombolnya berubah menjadi Klaim Poin. Tekan tombol itu supaya poin masuk ke akunmu.",
      tip: {
        type: "warning",
        text: "Misi harian diganti baru setiap pukul 00.00 WIB. Klaim poinmu di hari yang sama, jangan ditunda.",
      },
      screen: "missions",
      spot: "klaim",
    },
    {
      title: "Buka tab “Tukar Poin”",
      text: "Tekan tulisan Tukar Poin di bagian atas halaman misi. Di sini ada daftar hadiah yang bisa kamu tukar.",
      tip: { type: "tip", text: "1 poin bernilai Rp1. Jadi 5.000 poin bisa ditukar dengan voucher senilai Rp5.000." },
      screen: "missions",
      spot: "tab-tukar",
    },
    {
      title: "Pilih hadiah, lalu tekan “Tukar”",
      text: "Tekan hadiah yang kamu inginkan, lalu tekan tombol ungu “Tukar … Poin”. Poinmu akan dipotong sesuai harga hadiah.",
      tip: {
        type: "warning",
        text: "Kalau tombolnya bertuliskan “Poin Kurang”, kumpulkan poin dulu dari check-in dan misi.",
      },
      screen: "redeem-sheet",
      spot: "tukar-btn",
    },
    {
      title: "Pakai voucher dari “Voucher Saya”",
      text: "Voucher hasil tukar poin otomatis tersimpan di Voucher Saya. Tekan Pakai saat ingin berbelanja.",
      tip: { type: "tip", text: "Voucher hasil tukar poin hanya bisa dipakai satu kali, dan hanya untuk akunmu." },
      screen: "vouchers",
      spot: "pakai",
    },
  ],
  outro: "Hebat! Kamu sudah tahu cara mengumpulkan poin dan menukarnya. Jangan lupa check-in besok, ya!",
};

export default misiHarianTukarPoin;
