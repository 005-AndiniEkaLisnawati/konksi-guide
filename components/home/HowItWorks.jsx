"use client";

import { useState } from "react";
import { Hand, ListOrdered, Volume2 } from "lucide-react";
import AppMockup from "@/components/ui/AppMockup";

const POINTS = [
  {
    icon: ListOrdered,
    title: "Ikuti nomor besar",
    text: "Setiap panduan dipecah jadi langkah bernomor 1, 2, 3. Kerjakan satu per satu dari atas.",
  },
  {
    icon: Hand,
    title: "Lihat lingkaran kuning",
    text: "Di gambar HP, tombol yang harus kamu tekan diberi lingkaran kuning yang berkedip.",
  },
  {
    icon: Volume2,
    title: "Mau dibacakan? Bisa!",
    text: "Tekan tombol “Dengarkan” supaya langkahnya dibacakan dengan suara.",
  },
];

export default function HowItWorks() {
  const [taps, setTaps] = useState(0);

  return (
    <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
      <div>
        <ol className="space-y-6">
          {POINTS.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="flex gap-4">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-sun text-ink brut-sm">
                <Icon className="size-7" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <div>
                <p className="text-xl font-extrabold">
                  <span className="text-primary">{i + 1}.</span> {title}
                </p>
                <p className="mt-0.5 text-lg leading-relaxed text-ink-soft">{text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-8 inline-block rounded-2xl border-2 border-dashed border-ink/50 px-5 py-3 text-lg font-semibold" aria-live="polite">
          {taps === 0 ? "👉 Coba sekarang: tekan tombol yang berkedip di gambar HP." : `Hebat! Kamu sudah mencoba menekan ${taps} kali. Begitulah caranya. 🎉`}
        </p>
      </div>
      <AppMockup
        screen="demo"
        spot="demo"
        onSpotTap={() => setTaps((n) => n + 1)}
        caption="Contoh: lingkaran kuning menunjukkan tombol yang perlu ditekan."
      />
    </div>
  );
}
