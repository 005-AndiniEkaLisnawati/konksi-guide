/**
 * ============================================================================
 *  BENTUK DATA KONTEN
 * ============================================================================
 *  File ini hanya berisi definisi (JSDoc) supaya VS Code memberi saran isian
 *  dan peringatan saat mengedit file di folder content/. Tidak ada kode yang jalan.
 *
 *  Aturan isi juga dicek otomatis saat `npm run build` oleh lib/validate-content.js.
 * ============================================================================
 */

/**
 * @typedef {"afiliator" | "pembeli"} RoleKey
 * Kunci peran. Menambah peran baru: tambahkan di content/roles.js dan lib/role-themes.js.
 */

/**
 * @typedef {"welcome" | "pointing" | "warning" | "success" | "shopping" | "money" | "discount" | "gift" | "coin" | "cheer" | "hero"} MascotPose
 * Nama pose maskot. Daftar lengkap & gambarnya ada di content/mascot-poses.js.
 */

/**
 * @typedef {Object} Role
 * @property {RoleKey} key          Sama dengan nama kuncinya di ROLES.
 * @property {string}  emoji        Emoji besar di kartu peran.
 * @property {string}  title        Judul lengkap, mis. "Panduan Pembeli".
 * @property {string}  shortTitle   Judul pendek untuk label kecil, mis. "Pembeli".
 * @property {string}  description  Satu kalimat isi peran (kartu di halaman utama).
 * @property {string}  who          Untuk siapa panduan ini (banner halaman peran).
 * @property {MascotPose} mascot    Pose maskot di kartu & banner peran.
 */

/**
 * @typedef {Object} Tip
 * @property {"tip" | "warning"} type  "tip" = kotak kuning "Tips Penting!", "warning" = kotak oranye "Hati-hati!".
 * @property {string} text
 */

/**
 * @typedef {Object} Step
 * @property {string} title       Kalimat perintah singkat, mis. "Tekan “Simpan”".
 * @property {string} text        Penjelasan. Maksimal 2 kalimat, pakai bahasa sehari-hari.
 * @property {Tip}    [tip]       Kotak tips/peringatan (opsional).
 * @property {string} [optional]  Label kalau langkah hanya untuk kondisi tertentu, mis. "Khusus pesanan jasa".
 * @property {string} screen      Kunci layar HP. Lihat daftar di components/mockups/screens/index.js.
 * @property {string} spot        Id tombol yang disorot. Lihat komentar "Spot yang bisa disorot" di file layarnya.
 * @property {string} [spotLabel] Teks kecil di dekat sorotan. Bawaan: "Tekan di sini".
 */

/**
 * @typedef {Object} LegendItem
 * @property {string} label
 * @property {string} text
 * @property {"primary" | "sun" | "info" | "mint" | "coral"} tone  Warna kotak keterangan.
 */

/**
 * @typedef {Object} Legend
 * @property {string} title
 * @property {LegendItem[]} items
 */

/**
 * @typedef {Object} Guide
 * @property {RoleKey}    role           Peran pemilik panduan (harus sama dengan nama folder).
 * @property {string}     slug           Bagian URL: huruf kecil & tanda minus, mis. "tarik-saldo-komisi".
 * @property {string}     title          Judul lengkap panduan.
 * @property {string}     summary        Ringkasan 1–2 kalimat (kartu & hasil pencarian).
 * @property {MascotPose} mascot         Pose maskot di banner atas.
 * @property {string}     mascotMessage  Kalimat sapaan maskot di banner atas.
 * @property {string}     duration       Perkiraan waktu, mis. "3 menit".
 * @property {string[]}   keywords       Kata kunci tambahan untuk pencarian.
 * @property {Step[]}     steps          Langkah-langkah, berurutan.
 * @property {string}     outro          Kalimat penutup saat semua langkah selesai.
 * @property {Legend}     [legend]       Kotak keterangan tambahan di bawah langkah (opsional).
 */

export {};
