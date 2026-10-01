/**
 * ============================================================================
 *  DATA PANDUAN KONKSI
 * ============================================================================
 *  Semua isi panduan ada di file ini. Untuk mengubah/menambah panduan cukup
 *  edit data di bawah — halaman akan menyesuaikan otomatis.
 *
 *  Struktur satu panduan:
 *  {
 *    role:      "afiliator" | "pembeli"
 *    slug:      bagian URL, mis. "tarik-saldo"  -> /guide/afiliator/tarik-saldo
 *    title:     judul lengkap
 *    summary:   ringkasan 1–2 kalimat (dipakai di kartu & hasil pencarian)
 *    mascot:    pose maskot (lihat components/ui/MascotGuide.jsx)
 *    mascotMessage: kalimat sapaan maskot di banner atas
 *    duration:  perkiraan waktu, mis. "3 menit"
 *    keywords:  kata kunci tambahan untuk pencarian
 *    steps: [{
 *      title:    judul langkah (kalimat perintah singkat)
 *      text:     penjelasan, maksimal 2 kalimat
 *      tip:      { type: "tip" | "warning", text } (opsional)
 *      optional: label kalau langkah ini hanya untuk kondisi tertentu (opsional)
 *      screen:   kunci layar mockup (lihat components/mockups/screens.jsx)
 *      spot:     id tombol yang disorot di layar tersebut
 *      spotLabel: teks kecil di samping sorotan (opsional, default "Tekan di sini")
 *    }]
 *    outro:     kalimat penutup saat semua langkah selesai
 *    legend:    (opsional) daftar keterangan tambahan, mis. arti status pesanan
 *  }
 * ============================================================================
 */

export const ROLES = {
  afiliator: {
    key: "afiliator",
    emoji: "🛍️",
    title: "Panduan Afiliator / Promotor",
    shortTitle: "Afiliator",
    description: "Cara buat Bio Link, bagikan katalog, cek komisi, & jalankan misi.",
    who: "Untuk kamu yang membagikan produk Konksi ke teman dan mendapat komisi.",
    mascot: "money",
  },
  pembeli: {
    key: "pembeli",
    emoji: "🛒",
    title: "Panduan Pembeli",
    shortTitle: "Pembeli",
    description: "Cara belanja via link, gunakan voucher diskon, & selesaikan pembayaran.",
    who: "Untuk kamu yang membeli produk atau jasa lewat Konksi.",
    mascot: "shopping",
  },
};

export const GUIDES = [
  // ==========================================================================
  //  AFILIATOR
  // ==========================================================================
  {
    role: "afiliator",
    slug: "tambah-produk-bio-link",
    title: "Cara Menambahkan Produk ke Bio Link",
    summary: "Pajang produk pilihanmu di halaman Bio Link, supaya teman bisa langsung membeli dan kamu dapat komisi.",
    mascot: "pointing",
    mascotMessage: "Bio Link itu etalase pribadimu. Yuk isi dengan produk yang kamu suka!",
    duration: "3 menit",
    keywords: ["biolink", "bio link", "etalase", "katalog", "produk", "bagikan", "share", "tambah", "afiliasi", "link"],
    steps: [
      {
        title: "Buka menu Feeds",
        text: "Tekan tombol Feeds (gambar kompas) di bagian bawah layar. Di sini ada semua produk yang bisa kamu promosikan.",
        tip: { type: "tip", text: "Sudah tahu nama produknya? Ketik di kolom “Cari katalog...” paling atas supaya lebih cepat." },
        screen: "feeds",
        spot: "nav-feeds",
      },
      {
        title: "Tekan tombol bagikan pada produk",
        text: "Cari produk yang kamu suka. Tekan kotak putih bergambar tanda bagikan di pojok kanan bawah foto produk.",
        tip: {
          type: "warning",
          text: "Tombol bagikan hanya muncul kalau alamat di profilmu tidak lebih dari 30 km dari toko mitra. Pastikan alamatmu sudah diisi.",
        },
        screen: "feeds",
        spot: "share-btn",
      },
      {
        title: "Tekan tombol “+ Biolink”",
        text: "Akan muncul jendela “Bagikan dan hasilkan uang”. Tekan tombol ungu muda bertuliskan + Biolink.",
        tip: { type: "tip", text: "Di jendela yang sama kamu juga bisa langsung kirim produk lewat WhatsApp atau tekan “Salin Link”." },
        screen: "share-sheet",
        spot: "add-biolink",
      },
      {
        title: "Atur diskon untuk pembeli (boleh dilewati)",
        text: "Geser bulatan pada “Alokasi Diskon Komisi” kalau ingin memberi potongan harga ke pembeli. Potongan ini diambil dari komisimu sendiri.",
        tip: { type: "tip", text: "Masih bingung? Biarkan di 0%. Komisimu tetap utuh dan bisa diubah kapan saja." },
        screen: "biolink-form",
        spot: "discount-slider",
        spotLabel: "Geser ini",
      },
      {
        title: "Pilih bentuk tampilan produk",
        text: "Pilih salah satu dari 4 gambar: Default, Grid, Besar, atau Compact. Pilihan yang aktif diberi garis ungu.",
        tip: { type: "tip", text: "Pilih “Besar” untuk produk andalan supaya fotonya paling menonjol." },
        screen: "biolink-form",
        spot: "layout-picker",
        spotLabel: "Pilih salah satu",
      },
      {
        title: "Tekan “Simpan”",
        text: "Tekan tombol ungu Simpan di bagian bawah. Produk langsung tampil di Bio Link kamu.",
        tip: { type: "tip", text: "Cek hasilnya lewat menu Profil → Biolink. Di sana kamu bisa melihat semua produk yang sudah dipajang." },
        screen: "biolink-form",
        spot: "save-btn",
      },
    ],
    outro: "Produkmu sudah terpajang di Bio Link. Bagikan link Bio Link-mu ke teman dan keluarga!",
  },

  {
    role: "afiliator",
    slug: "ubah-tampilan-bio-link",
    title: "Cara Mengubah Tampilan & Tema Bio Link",
    summary: "Ganti foto, warna, dan latar belakang Bio Link supaya terlihat menarik dan mencerminkan dirimu.",
    mascot: "welcome",
    mascotMessage: "Bio Link yang cantik bikin orang betah mampir. Kita dandani bareng, ya!",
    duration: "4 menit",
    keywords: ["tema", "tampilan", "warna", "background", "latar", "foto profil", "banner", "desain", "bio link", "biolink", "profil"],
    steps: [
      {
        title: "Buka menu Profil",
        text: "Tekan tombol Profil (gambar orang) di pojok kanan bawah layar.",
        screen: "profile",
        spot: "nav-profil",
      },
      {
        title: "Tekan “Tampilan Profil”",
        text: "Tekan tulisan Tampilan Profil, yang paling atas di daftar menu.",
        screen: "profile",
        spot: "menu-tampilan",
      },
      {
        title: "Ganti foto sampul dan foto profil",
        text: "Tekan kotak “Klik untuk upload banner” untuk memilih foto sampul. Untuk foto profil, tekan tombol “Upload” di samping foto bulat.",
        tip: {
          type: "tip",
          text: "Setelah memilih foto, atur potongannya lalu tekan “Terapkan”. Foto harus berformat JPG, PNG, atau WEBP.",
        },
        screen: "my-profile",
        spot: "banner-upload",
      },
      {
        title: "Pilih warna teks",
        text: "Pada bagian “Warna Teks & Aksen”, tekan kotak warna lalu pilih warna favoritmu. Warna ini dipakai untuk nama, bio, dan ikon media sosialmu.",
        tip: { type: "tip", text: "Pilih warna gelap kalau latar belakangmu terang, supaya tulisan tetap mudah dibaca." },
        screen: "my-profile",
        spot: "color-picker",
      },
      {
        title: "Tekan “Simpan”",
        text: "Gulir ke atas lalu tekan tombol Simpan di pojok kanan atas kotak “Edit Profil”. Tunggu sampai muncul tulisan “Tampilan profil telah diperbarui!”.",
        tip: {
          type: "warning",
          text: "Username hanya bisa diganti lagi setelah 7 hari. Pikirkan baik-baik sebelum mengubahnya.",
        },
        screen: "my-profile",
        spot: "save-profile",
      },
      {
        title: "Pilih latar belakang",
        text: "Geser ke bawah sampai bagian “Pilih Background”, lalu tekan gambar yang kamu suka. Latar langsung tersimpan tanpa perlu tekan Simpan.",
        tip: { type: "tip", text: "Lihat hasil akhirnya di bagian “Live Preview” di bawah pilihan latar." },
        screen: "my-profile-bg",
        spot: "bg-option",
        spotLabel: "Tekan gambar ini",
      },
      {
        title: "Rapikan isi Bio Link",
        text: "Buka Profil → Biolink, lalu tekan tombol titik tiga (⋯) pada sebuah blok. Pilih Ubah, Sembunyikan, atau Hapus sesuai keperluan.",
        tip: { type: "tip", text: "Pilih “Sembunyikan” kalau hanya ingin menyimpan blok sementara tanpa menghapusnya." },
        screen: "biolink-manage",
        spot: "block-menu",
      },
    ],
    outro: "Bio Link kamu sekarang tampil lebih menarik. Coba buka link-nya dan lihat hasilnya!",
  },

  {
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
  },

  {
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
  },

  // ==========================================================================
  //  PEMBELI
  // ==========================================================================
  {
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
  },

  {
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
  },

  {
    role: "pembeli",
    slug: "lacak-status-pesanan",
    title: "Cara Melacak Status Pesanan Saya",
    summary: "Cek apakah pesananmu sudah dibayar, diproses, atau selesai, lengkap dengan riwayatnya.",
    mascot: "warning",
    mascotMessage: "Penasaran pesananmu sampai mana? Kita cek bersama, pelan-pelan saja.",
    duration: "3 menit",
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
        text: "Setiap pesanan punya label berwarna di sebelah kanan. Lihat arti setiap warna di kotak keterangan di bawah.",
        screen: "transactions",
        spot: "status-badge",
        spotLabel: "Label status",
      },
      {
        title: "Belum bayar? Tekan “Bayar”",
        text: "Pesanan berlabel “Menunggu Pembayaran” punya hitungan waktu berwarna merah. Tekan tombol Bayar sebelum waktunya habis.",
        tip: {
          type: "warning",
          text: "Waktu bayar hanya 15 menit. Kalau sudah habis, pesanan otomatis batal dan kamu perlu memesan ulang.",
        },
        screen: "transactions",
        spot: "bayar-pending",
      },
      {
        title: "Tekan pesanan untuk melihat detail",
        text: "Tekan kartu pesanan untuk membuka “Detail Lengkap Pesanan”. Geser ke bawah sampai “Riwayat & Timeline” untuk melihat perjalanan pesananmu.",
        screen: "order-detail",
        spot: "timeline",
        spotLabel: "Perjalanan pesanan",
      },
      {
        title: "Cari pesanan lama dengan Filter",
        text: "Tekan tombol Filter di kanan atas daftar. Pilih status atau tanggal, lalu tekan “Terapkan”.",
        screen: "transactions",
        spot: "filter",
      },
    ],
    legend: {
      title: "Arti warna label status",
      items: [
        { label: "Menunggu Pembayaran", text: "Kamu belum membayar. Segera tekan “Bayar”.", tone: "sun" },
        { label: "Menunggu Konfirmasi", text: "Sudah dibayar. Mitra sedang memeriksa pesananmu.", tone: "info" },
        { label: "Dikonfirmasi", text: "Mitra sudah menerima pesananmu dan akan memprosesnya.", tone: "mint" },
        { label: "Selesai", text: "Pesanan sudah tuntas. Terima kasih sudah berbelanja!", tone: "mint" },
        { label: "Dibatalkan", text: "Pesanan batal, misalnya karena waktu bayar habis.", tone: "coral" },
      ],
    },
    outro: "Sekarang kamu bisa memantau pesanan kapan saja lewat menu Transaksi.",
  },
];

// ----------------------------------------------------------------------------
//  Helper
// ----------------------------------------------------------------------------

export function getRole(role) {
  return ROLES[role] ?? null;
}

export function getGuidesByRole(role) {
  return GUIDES.filter((g) => g.role === role);
}

export function getGuide(role, slug) {
  return GUIDES.find((g) => g.role === role && g.slug === slug) ?? null;
}

/** Panduan sebelum & sesudahnya dalam peran yang sama (untuk navigasi bawah). */
export function getSiblings(role, slug) {
  const list = getGuidesByRole(role);
  const i = list.findIndex((g) => g.slug === slug);
  return { prev: i > 0 ? list[i - 1] : null, next: i >= 0 && i < list.length - 1 ? list[i + 1] : null };
}

export function guideHref(guide) {
  return `/guide/${guide.role}/${guide.slug}`;
}

// ----------------------------------------------------------------------------
//  Pencarian sederhana (tanpa server) — toleran terhadap kata sehari-hari
// ----------------------------------------------------------------------------

const STOP_WORDS = new Set([
  "cara", "caranya", "bagaimana", "gimana", "gmn", "saya", "aku", "ku", "di", "ke", "dari", "yang", "untuk",
  "dan", "atau", "mau", "ingin", "pengen", "bisa", "dong", "ya", "kok", "apa", "kenapa", "the", "how", "to",
]);

const SYNONYMS = {
  withdraw: "tarik", cairkan: "tarik", cair: "tarik", pencairan: "tarik", ambil: "tarik", ngambil: "tarik",
  duit: "saldo", uang: "saldo", dompet: "saldo",
  biolink: "bio link", etalase: "bio link",
  checkout: "beli", order: "pesan", belanja: "beli", membeli: "beli",
  kupon: "voucher", promo: "voucher", vocer: "voucher", voucer: "voucher",
  tracking: "lacak", cek: "lacak", melacak: "lacak",
  reward: "hadiah", absen: "check-in", checkin: "check-in",
  theme: "tema", warna: "tema", latar: "background",
};

function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ");
}

function tokenize(query) {
  return normalize(query)
    .split(/\s+/)
    .filter((w) => w.length > 1 && !STOP_WORDS.has(w))
    .map((w) => SYNONYMS[w] ?? w);
}

export function searchGuides(query) {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];

  return GUIDES.map((guide) => {
    const title = normalize(guide.title);
    const keywords = normalize(guide.keywords.join(" "));
    const summary = normalize(guide.summary);
    const body = normalize(guide.steps.map((s) => `${s.title} ${s.text}`).join(" "));

    let score = 0;
    for (const t of tokens) {
      if (title.includes(t)) score += 6;
      if (keywords.includes(t)) score += 4;
      if (summary.includes(t)) score += 2;
      if (body.includes(t)) score += 1;
    }
    return { guide, score };
  })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.guide);
}
