/**
 * PINTU MASUK DATA PANDUAN
 * Isi panduan TIDAK ditulis di sini, tetapi di folder content/:
 *   - content/roles.js            → peran (Afiliator, Pembeli)
 *   - content/guides/<peran>/*.js → satu file per panduan
 *   - content/guides/index.js     → urutan panduan
 *
 * File ini hanya berisi fungsi untuk membaca data tersebut. Halaman & komponen
 * cukup import dari "@/lib/guides-data".
 */

import { ROLES } from "@/content/roles";
import { GUIDES } from "@/content/guides";

export { ROLES, GUIDES };

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

export function roleHref(role) {
  return `/guide/${role.key ?? role}`;
}
