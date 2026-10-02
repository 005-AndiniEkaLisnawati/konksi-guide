/**
 * PEMERIKSA ISI PANDUAN
 * Dijalankan otomatis saat build (lihat generateStaticParams di app/guide/[role]/[slug]/page.jsx).
 * Kalau ada isi yang salah, build berhenti dengan pesan yang menunjuk file & langkahnya.
 * Aturan "maksimal 2 kalimat" hanya memberi peringatan, tidak menghentikan build.
 */

import { ROLES, GUIDES } from "@/lib/guides-data";
import { MASCOT_POSES } from "@/content/mascot-poses";
import { SCREENS } from "@/components/mockups/screens";

const TIP_TYPES = ["tip", "warning"];
const LEGEND_TONES = ["primary", "sun", "info", "mint", "coral"];
const REQUIRED_TEXT = ["title", "summary", "mascotMessage", "duration", "outro"];
const SLUG_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const MAX_SENTENCES = 2;

function countSentences(text) {
  return text.split(/[.!?](?:\s|$)/).filter((s) => s.trim()).length;
}

export function checkContent() {
  const errors = [];
  const warnings = [];

  for (const [key, role] of Object.entries(ROLES)) {
    if (role.key !== key) errors.push(`content/roles.js: peran "${key}" punya key "${role.key}" (harus sama).`);
    if (!MASCOT_POSES[role.mascot]) errors.push(`content/roles.js: pose maskot "${role.mascot}" untuk peran "${key}" tidak ada.`);
  }

  const seen = new Set();
  for (const guide of GUIDES) {
    const where = `content/guides/${guide.role}/${guide.slug}.js`;

    if (!ROLES[guide.role]) errors.push(`${where}: role "${guide.role}" tidak dikenal. Pilihan: ${Object.keys(ROLES).join(", ")}.`);
    if (!SLUG_PATTERN.test(guide.slug ?? "")) errors.push(`${where}: slug "${guide.slug}" hanya boleh huruf kecil, angka, dan tanda minus.`);
    const id = `${guide.role}/${guide.slug}`;
    if (seen.has(id)) errors.push(`${where}: slug dipakai lebih dari sekali.`);
    seen.add(id);

    for (const field of REQUIRED_TEXT) {
      if (typeof guide[field] !== "string" || !guide[field].trim()) errors.push(`${where}: "${field}" wajib diisi.`);
    }
    if (!Array.isArray(guide.keywords)) errors.push(`${where}: "keywords" harus berupa daftar, mis. ["saldo", "tarik"].`);
    if (!MASCOT_POSES[guide.mascot]) errors.push(`${where}: pose maskot "${guide.mascot}" tidak ada di content/mascot-poses.js.`);

    if (!Array.isArray(guide.steps) || guide.steps.length === 0) {
      errors.push(`${where}: minimal harus ada 1 langkah.`);
      continue;
    }

    guide.steps.forEach((step, i) => {
      const at = `${where} langkah ${i + 1}`;
      if (!step.title?.trim()) errors.push(`${at}: "title" wajib diisi.`);
      if (!step.text?.trim()) errors.push(`${at}: "text" wajib diisi.`);
      else if (countSentences(step.text) > MAX_SENTENCES) warnings.push(`${at}: "text" lebih dari ${MAX_SENTENCES} kalimat. Sebaiknya dipersingkat.`);
      if (!SCREENS[step.screen]) errors.push(`${at}: layar "${step.screen}" tidak ada di components/mockups/screens/index.js.`);
      if (!step.spot?.trim()) errors.push(`${at}: "spot" wajib diisi (id tombol yang disorot).`);
      if (step.tip && (!TIP_TYPES.includes(step.tip.type) || !step.tip.text?.trim())) {
        errors.push(`${at}: "tip" harus { type: "tip" | "warning", text: "..." }.`);
      }
    });

    for (const item of guide.legend?.items ?? []) {
      if (!LEGEND_TONES.includes(item.tone)) errors.push(`${where}: warna legend "${item.tone}" tidak dikenal. Pilihan: ${LEGEND_TONES.join(", ")}.`);
    }
  }

  return { errors, warnings };
}

let checked = false;

/** Hentikan build kalau ada isi yang salah. Cukup dipanggil sekali. */
export function assertValidContent() {
  if (checked) return;
  checked = true;
  const { errors, warnings } = checkContent();
  for (const w of warnings) console.warn(`[konten] Peringatan — ${w}`);
  if (errors.length) {
    throw new Error(`Isi panduan belum benar (${errors.length} masalah):\n- ${errors.join("\n- ")}`);
  }
}
