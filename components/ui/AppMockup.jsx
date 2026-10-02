"use client";

import { useEffect, useRef, useState } from "react";
import { SCREENS } from "@/components/mockups/screens";
import { SpotContext } from "@/components/mockups/Spot";

/**
 * Bingkai HP yang menampilkan simulasi layar aplikasi Konksi.
 *
 * @param {string}   screen     kunci layar di SCREENS (lihat components/mockups/screens/index.js)
 * @param {string}   spot       id bagian layar yang disorot
 * @param {string}   spotLabel  teks label kecil di dekat sorotan, mis. "Tekan di sini"
 * @param {Function} onSpotTap  dipanggil saat sorotan ditekan (membuat mockup interaktif)
 * @param {string}   caption    keterangan di bawah HP (juga dibaca pembaca layar)
 */
export default function AppMockup({
  screen,
  spot,
  spotLabel = "Tekan di sini",
  onSpotTap,
  caption,
  size = "md",
  className = "",
}) {
  const scrollRef = useRef(null);
  const [tapped, setTapped] = useState(false);
  const Screen = SCREENS[screen];

  // Gulir isi layar HP supaya bagian yang disorot terlihat di tengah.
  useEffect(() => {
    const box = scrollRef.current;
    const el = box?.querySelector('[data-spot-active="true"]');
    if (box && spot && !el && process.env.NODE_ENV !== "production") {
      console.warn(`[AppMockup] Spot "${spot}" tidak ditemukan di layar "${screen}". Cek id <Spot> di file layarnya.`);
    }
    if (!box || !el) return;
    const boxRect = box.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const offset = elRect.top - boxRect.top + box.scrollTop;
    box.scrollTop = Math.max(0, offset - box.clientHeight / 2 + elRect.height / 2);
  }, [screen, spot]);

  useEffect(() => {
    if (!tapped) return;
    const t = setTimeout(() => setTapped(false), 1400);
    return () => clearTimeout(t);
  }, [tapped]);

  const handleTap = onSpotTap
    ? () => {
        setTapped(true);
        onSpotTap();
      }
    : null;

  const width = { sm: "w-[232px]", md: "w-[256px] sm:w-[270px]", lg: "w-[300px]" }[size] ?? "w-[270px]";

  return (
    <figure className={`isolate mx-auto flex flex-col items-center ${className}`}>
      <div className={`relative ${width} shrink-0 rounded-[2.75rem] bg-ink p-2.5 shadow-[8px_8px_0_0_var(--primary)]`}>
        {/* tombol samping */}
        <span aria-hidden="true" className="absolute -left-[3px] top-24 h-10 w-[3px] rounded-l bg-ink" />
        <span aria-hidden="true" className="absolute -right-[3px] top-32 h-16 w-[3px] rounded-r bg-ink" />

        <div className="relative aspect-[9/18.5] overflow-hidden rounded-[2.2rem] bg-background">
          {/* status bar */}
          <div aria-hidden="true" className="absolute inset-x-0 top-0 z-40 flex h-8 items-center justify-between bg-card/95 px-6 text-[10px] font-bold text-ink">
            <span>09.41</span>
            <span className="absolute left-1/2 top-1.5 h-[18px] w-20 -translate-x-1/2 rounded-full bg-ink" />
            <span className="flex items-center gap-1">
              <span className="flex items-end gap-[1.5px]">
                <span className="h-1 w-[3px] rounded-sm bg-ink" />
                <span className="h-1.5 w-[3px] rounded-sm bg-ink" />
                <span className="h-2 w-[3px] rounded-sm bg-ink" />
                <span className="h-2.5 w-[3px] rounded-sm bg-ink" />
              </span>
              <span className="ml-1 h-2.5 w-5 rounded-[3px] border border-ink p-[1px]">
                <span className="block h-full w-3/4 rounded-[1px] bg-ink" />
              </span>
            </span>
          </div>

          <div
            ref={scrollRef}
            aria-hidden="true"
            className="no-scrollbar absolute inset-0 overflow-y-auto overscroll-contain scroll-smooth pt-8 text-[12px] leading-snug text-foreground"
          >
            <SpotContext.Provider value={{ active: spot, label: spotLabel, onTap: handleTap, tapped }}>
              {Screen ? <Screen /> : <MissingScreen name={screen} />}
            </SpotContext.Provider>
          </div>

          {/* home indicator */}
          <span aria-hidden="true" className="absolute bottom-1.5 left-1/2 z-40 h-1 w-24 -translate-x-1/2 rounded-full bg-ink/80" />
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-5 max-w-[300px] text-center text-base font-semibold text-ink-soft">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

function MissingScreen({ name }) {
  return (
    <div className="grid h-full place-items-center p-6 text-center text-muted-foreground">
      Layar “{name}” belum tersedia.
    </div>
  );
}
