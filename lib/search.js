/**
 * Pencarian panduan sederhana (tanpa server), toleran terhadap kata sehari-hari.
 * Menambah sinonim: tambahkan di SYNONYMS (kata yang diketik → kata yang dicari).
 */

import { GUIDES } from "@/lib/guides-data";

/** Kata yang diabaikan saat mencari. */
const STOP_WORDS = new Set([
  "cara", "caranya", "bagaimana", "gimana", "gmn", "saya", "aku", "ku", "di", "ke", "dari", "yang", "untuk",
  "dan", "atau", "mau", "ingin", "pengen", "bisa", "dong", "ya", "kok", "apa", "kenapa", "the", "how", "to",
]);

/** Kata yang diketik pengguna → kata yang dipakai di panduan. */
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

/** Bobot skor: kecocokan di judul paling penting. */
const WEIGHTS = { title: 6, keywords: 4, summary: 2, body: 1 };

function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // buang tanda aksen
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
    const fields = {
      title: normalize(guide.title),
      keywords: normalize(guide.keywords.join(" ")),
      summary: normalize(guide.summary),
      body: normalize(guide.steps.map((s) => `${s.title} ${s.text}`).join(" ")),
    };

    let score = 0;
    for (const t of tokens) {
      for (const [field, weight] of Object.entries(WEIGHTS)) {
        if (fields[field].includes(t)) score += weight;
      }
    }
    return { guide, score };
  })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.guide);
}
