/** @type {import("../../schema").Guide} */
const tambahProdukBioLink = {
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
};

export default tambahProdukBioLink;
