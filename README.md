# konksi-guide

Pusat Panduan Konksi: situs panduan langkah demi langkah untuk pengguna aplikasi Konksi, ditulis untuk orang awam dan lansia.
Dibangun dengan Next.js 16 (App Router) dan Tailwind CSS 4.

```bash
npm install
npm run dev      # buka http://localhost:3000
npm run check    # WAJIB sebelum kirim perubahan: lint + build + cek isi panduan
```

---

## Peta folder

Prinsipnya: **isi (teks) dan kode dipisah**. Kebanyakan perubahan cukup di folder `content/`.

```
content/                      ← ISI SITUS (paling sering diubah)
  guides/
    index.js                  urutan semua panduan
    afiliator/<slug>.js       satu file = satu panduan
    pembeli/<slug>.js
  roles.js                    peran: Afiliator, Pembeli
  mascot-poses.js             daftar pose maskot & gambarnya
  schema.js                   bentuk data (memberi saran isian di VS Code)

components/
  mockups/                    ← GAMBAR HP (simulasi layar aplikasi Konksi)
    screens/<area>/…Screen.jsx  satu file = satu layar, dikelompokkan per menu aplikasi
    screens/index.js          daftar layar (kunci yang dipakai di file panduan)
    kit/                      komponen dasar layar: header, menu bawah, kartu, tombol
    sample-data.js            contoh produk/harga yang muncul di layar
    Spot.jsx                  penanda tombol yang disorot (lingkaran kuning)
  ui/                         AppMockup (bingkai HP), MascotGuide (maskot)
  guide/                      bagian-bagian halaman artikel panduan
  home/                       bagian-bagian halaman utama
  role/                       bagian-bagian halaman daftar per peran
  layout/                     header, footer, tombol ukuran teks
  shared/                     dipakai di banyak halaman (Container, HelpCard)

lib/                          ← LOGIKA
  guides-data.js              fungsi membaca isi panduan (getGuide, guideHref, …)
  search.js                   pencarian + daftar sinonim
  validate-content.js         pemeriksa isi otomatis saat build
  role-themes.js              warna tiap peran (ungu / kuning)
  text-size.js                pengaturan tombol "Perbesar Teks"
  speech.js                   suara "Dengarkan" (bahasa Indonesia)

app/                          ← HALAMAN (tipis, hanya menyusun komponen)
  page.jsx                    /
  guide/[role]/page.jsx       /guide/afiliator, /guide/pembeli
  guide/[role]/[slug]/page.jsx  /guide/<peran>/<slug>
  globals.css                 warna, font, dan gaya dasar
```

---

## Resep perubahan yang sering dilakukan

### Mengubah teks panduan
Buka `content/guides/<peran>/<slug>.js`, ubah teksnya, simpan. Selesai.
Aturan menulis: kalimat perintah langsung ("Tekan…", "Geser…", "Isi kolom…"), maksimal 2 kalimat per langkah, hindari istilah teknis.

### Menambah panduan baru
1. Salin salah satu file di `content/guides/<peran>/`, beri nama sesuai slug baru (mis. `cara-ganti-password.js`).
2. Ubah isinya: `slug` harus sama dengan nama file. Untuk setiap langkah, pilih `screen` dari `components/mockups/screens/index.js` dan `spot` dari komentar "Spot yang bisa disorot" di file layarnya.
3. Daftarkan di `content/guides/index.js` (import + masukkan ke `GUIDES` sesuai urutan).
4. Jalankan `npm run check`. Kalau ada yang salah, build berhenti dan menunjuk file serta langkahnya.

Halaman, pencarian, footer, dan tombol "panduan berikutnya" otomatis ikut diperbarui.

### Menambah atau mengubah gambar layar HP
- **Mengubah layar yang sudah ada:** cari filenya di `components/mockups/screens/<area>/`. Komentar di atas setiap file menyebut halaman konksi-app yang ditiru.
- **Layar baru:**
  1. Buat file di folder area yang sesuai.
  2. Susun dari komponen di `components/mockups/kit`.
  3. Bungkus tombol yang ingin disorot dengan `<Spot id="nama-tombol">`.
  4. Daftarkan di `components/mockups/screens/index.js`.
- Kalau `spot` di panduan salah ketik, saat `npm run dev` muncul peringatan `[AppMockup] Spot … tidak ditemukan` di console browser.

### Menambah pose maskot
Taruh gambar di `public/img/icons/mascot/`, tambahkan entri di `content/mascot-poses.js`, lalu tambahkan namanya di tipe `MascotPose` (`content/schema.js`).

### Menambah sinonim pencarian
Tambahkan di `SYNONYMS` dalam `lib/search.js`, misalnya `"duit": "saldo"` artinya kata "duit" dicari sebagai "saldo".

### Mengubah warna peran
Buka `lib/role-themes.js`. Warna dasar (ungu Konksi, kuning, tinta) ada di `app/globals.css` bagian "Konksi Guide".

---

## Pengaman otomatis

| Pengaman | Kapan jalan | Menangkap |
|---|---|---|
| `lib/validate-content.js` | `npm run build` / `check` | Layar atau pose yang tidak ada, slug ganda/salah format, kolom wajib kosong, jenis tips atau warna legend yang salah |
| ESLint (`no-undef`) | `npm run lint` / `check` | Ikon atau komponen yang dipakai tapi lupa di-import |
| Peringatan Spot | `npm run dev` | `spot` yang tidak ditemukan di layar HP |
| Saran isian VS Code | saat mengetik | Nama kolom & pilihan nilai di file `content/` (dari `content/schema.js`) |

## Aksesibilitas (jangan dihapus)

- Teks dasar 18px, kontras tinggi, dan tombol minimal 48px.
- Tombol "Perbesar Teks" memperbesar semua teks sampai 125%. Pilihan disimpan di browser.
- Tombol "Dengarkan" membacakan setiap langkah dalam bahasa Indonesia.
- Menghormati pengaturan "kurangi animasi" (`prefers-reduced-motion`).
