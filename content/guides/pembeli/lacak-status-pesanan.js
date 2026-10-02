/** @type {import("../../schema").Guide} */
const lacakStatusPesanan = {
  role: "pembeli",
  slug: "lacak-status-pesanan",
  title: "Cara Melacak Status Pesanan Saya",
  summary: "Cek apakah pesananmu sudah dibayar, diproses, atau selesai, lengkap dengan riwayatnya.",
  mascot: "warning",
  mascotMessage: "Penasaran pesananmu sampai mana? Kita cek bersama, pelan-pelan saja.",
  duration: "4 menit",
  keywords: ["lacak", "status", "pesanan", "order", "transaksi", "riwayat", "cek", "bayar", "batal", "selesai", "tracking"],
  steps: [
    {
      title: "Buka menu Transaksi",
      text: "Tekan tombol Transaksi (gambar struk) di bagian bawah layar.",
      screen: "transactions",
      spot: "nav-transaksi",
    },
    {
      title: "Pastikan di tab “Pesanan Kamu”",
      text: "Di bagian atas ada dua tab. Tekan Pesanan Kamu untuk melihat semua barang dan jasa yang kamu beli.",
      screen: "transactions",
      spot: "tab-pesanan",
    },
    {
      title: "Baca label status pesanan",
      text: "Setiap pesanan punya label kecil di pojok kanan atas: Pending, Berhasil, atau Dibatalkan. Arti setiap label ada di kotak keterangan di bawah.",
      screen: "transactions",
      spot: "status-badge",
      spotLabel: "Label status",
    },
    {
      title: "Belum bayar? Tekan “Bayar”",
      text: "Pesanan yang belum dibayar punya kotak ungu bertuliskan “Menunggu Pembayaran” dan hitungan waktu berwarna merah. Tekan tombol Bayar sebelum waktunya habis.",
      tip: {
        type: "warning",
        text: "Waktu bayar hanya 15 menit. Kalau sudah habis, pesanan otomatis batal dan kamu perlu memesan ulang.",
      },
      screen: "transactions",
      spot: "bayar-pending",
    },
    {
      title: "Tekan pesanan untuk melihat detail",
      text: "Tekan kartu pesanan, lalu halaman “Detail Transaksi” akan terbuka. Paling atas tertulis status pesananmu, lengkap dengan garis kemajuan dari Bayar sampai Selesai.",
      tip: {
        type: "tip",
        text: "Titik ungu menunjukkan pesananmu sedang sampai di tahap mana. Centang berarti tahap itu sudah lewat.",
      },
      screen: "order-detail",
      spot: "status-progress",
      spotLabel: "Kemajuan pesanan",
    },
    {
      title: "Lihat riwayat pesanan",
      text: "Geser ke bawah sampai bagian “Riwayat pesanan”. Kejadian paling baru ada di paling atas, ditandai titik ungu.",
      tip: {
        type: "tip",
        text: "Perlu bantuan admin? Di bagian “Info pesanan”, tekan ikon salin di samping nomor pesanan, lalu kirimkan nomor itu.",
      },
      screen: "order-detail",
      spot: "timeline",
      spotLabel: "Riwayat pesanan",
    },
    {
      title: "Cari pesanan lama dengan Filter",
      text: "Tekan tombol Filter di kanan atas daftar. Pilih status atau tanggal, lalu tekan “Terapkan”.",
      screen: "transactions",
      spot: "filter",
    },
  ],
  legend: {
    title: "Arti label status pesanan",
    items: [
      {
        label: "Pending",
        text: "Pesanan belum selesai: kamu belum membayar (“Menunggu Pembayaran”), atau sudah membayar dan mitra sedang memeriksa (“Menunggu Konfirmasi”).",
        tone: "sun",
      },
      {
        label: "Berhasil",
        text: "Mitra sudah menerima pesananmu (“Dikonfirmasi”), atau pesanan sudah tuntas (“Selesai”).",
        tone: "mint",
      },
      { label: "Dibatalkan", text: "Pesanan batal, misalnya karena waktu bayar sudah habis.", tone: "coral" },
      {
        label: "Ingin tahu lebih jelas?",
        text: "Tekan pesanannya. Di halaman “Detail Transaksi”, status lengkapnya tertulis besar di bagian paling atas.",
        tone: "primary",
      },
    ],
  },
  outro: "Sekarang kamu bisa memantau pesanan kapan saja lewat menu Transaksi.",
};

export default lacakStatusPesanan;
