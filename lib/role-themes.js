/**
 * WARNA TIAP PERAN
 * Satu tempat untuk warna kartu peran (halaman utama), banner halaman peran,
 * dan banner artikel panduan. Afiliator = ungu, Pembeli = kuning.
 *
 *   surface → latar + warna teks utama (kartu & banner)
 *   muted   → teks keterangan di atas latar tersebut
 *   crumb   → link "Beranda > ..." di banner artikel
 *   chip    → label kecil nama peran di banner artikel
 *   list    → baris daftar panduan di dalam kartu peran
 *   cta     → tombol utama di kartu peran
 */

export const ROLE_THEMES = {
  afiliator: {
    surface: "bg-primary text-white",
    muted: "text-white/85",
    crumb: "text-white/80 hover:text-white",
    chip: "bg-sun text-ink",
    list: "bg-white/12 hover:bg-white/22 border-white/35",
    cta: "bg-sun text-ink",
  },
  pembeli: {
    surface: "bg-sun text-ink",
    muted: "text-ink-soft",
    crumb: "text-ink/70 hover:text-ink",
    chip: "bg-primary text-white",
    list: "bg-white/55 hover:bg-white border-ink/25",
    cta: "bg-primary text-white",
  },
};

export function roleTheme(role) {
  return ROLE_THEMES[role] ?? ROLE_THEMES.afiliator;
}
