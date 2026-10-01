"use client";

import { useSyncExternalStore } from "react";

const SIZES = [
  { key: "normal", label: "Teks normal" },
  { key: "besar", label: "Teks besar" },
  { key: "sangat-besar", label: "Teks sangat besar" },
];
export const TEXT_SIZE_STORAGE_KEY = "konksi-guide:text-size";

// Ukuran teks disimpan sebagai atribut data-text di <html> (diterapkan lebih awal oleh skrip di layout).
function subscribe(callback) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-text"] });
  return () => observer.disconnect();
}
const getSnapshot = () => document.documentElement.getAttribute("data-text") ?? "normal";
const getServerSnapshot = () => "normal";

export default function TextSizeToggle() {
  const current = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const index = Math.max(0, SIZES.findIndex((s) => s.key === current));
  const isMax = index === SIZES.length - 1;

  const cycle = () => {
    const next = SIZES[(index + 1) % SIZES.length].key;
    if (next === "normal") document.documentElement.removeAttribute("data-text");
    else document.documentElement.setAttribute("data-text", next);
    try {
      window.localStorage.setItem(TEXT_SIZE_STORAGE_KEY, next);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={cycle}
      className="flex min-h-12 items-center gap-2 rounded-xl bg-card px-3.5 font-extrabold brut-sm press"
      aria-label={`Ubah ukuran teks. Sekarang: ${SIZES[index].label}`}
    >
      <span aria-hidden="true" className="flex items-baseline">
        <span className="text-base">A</span>
        <span className="text-xl">{isMax ? "−" : "+"}</span>
      </span>
      <span className="text-sm sm:text-base">{isMax ? "Kecilkan Teks" : "Perbesar Teks"}</span>
    </button>
  );
}
