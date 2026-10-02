/**
 * PERAN PENGGUNA
 * Setiap peran punya halaman daftar panduan sendiri: /guide/<key>
 * Warna kartu & banner tiap peran diatur di lib/role-themes.js.
 */

/** @type {Record<string, import("./schema").Role>} */
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
