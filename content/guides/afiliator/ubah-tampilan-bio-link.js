/** @type {import("../../schema").Guide} */
const ubahTampilanBioLink = {
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
};

export default ubahTampilanBioLink;
