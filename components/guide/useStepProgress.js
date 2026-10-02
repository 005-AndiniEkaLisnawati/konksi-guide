"use client";

import { useCallback, useState } from "react";

/** Gulir halus ke elemen dengan id tertentu (langsung lompat kalau pengguna memilih "kurangi animasi"). */
export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

/** Id elemen untuk langkah ke-n (mulai dari 1) dan kotak "Selesai". */
export const stepAnchor = (number) => `langkah-${number}`;
export const FINISH_ANCHOR = "selesai";

/** Jeda sebelum menggulir ke langkah berikutnya, supaya pengguna sempat melihat tanda centang. */
const SCROLL_DELAY_MS = 450;

/**
 * Menyimpan langkah mana saja yang sudah ditandai "selesai".
 * Status hanya disimpan selama halaman terbuka (tidak disimpan di browser).
 */
export function useStepProgress(total) {
  const [done, setDone] = useState(() => new Set());

  const markDone = useCallback(
    (index) => {
      setDone((prevSet) => new Set(prevSet).add(index));
      const target = index + 1 < total ? stepAnchor(index + 2) : FINISH_ANCHOR;
      setTimeout(() => scrollToId(target), SCROLL_DELAY_MS);
    },
    [total],
  );

  const undo = useCallback((index) => {
    setDone((prevSet) => {
      const nextSet = new Set(prevSet);
      nextSet.delete(index);
      return nextSet;
    });
  }, []);

  const firstUndone = [...Array(total).keys()].find((i) => !done.has(i)) ?? -1;

  return { done, markDone, undo, allDone: done.size === total, firstUndone };
}
