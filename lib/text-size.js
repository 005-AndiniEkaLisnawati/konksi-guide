/**
 * Pengaturan ukuran teks (tombol "Perbesar Teks" di header).
 * Ukuran disimpan sebagai atribut data-text di <html>; besarnya diatur di app/globals.css
 * (cari: html[data-text="besar"]).
 */

export const TEXT_SIZE_STORAGE_KEY = "konksi-guide:text-size";

export const TEXT_SIZES = [
  { key: "normal", label: "Teks normal" },
  { key: "besar", label: "Teks besar" },
  { key: "sangat-besar", label: "Teks sangat besar" },
];

/** Skrip kecil di <head>: menerapkan ukuran tersimpan sebelum halaman tampil, supaya tidak berkedip. */
export const TEXT_SIZE_INIT_SCRIPT = `try{var s=localStorage.getItem(${JSON.stringify(TEXT_SIZE_STORAGE_KEY)});if(s&&s!=="normal")document.documentElement.setAttribute("data-text",s)}catch(e){}`;
