"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronRight, Clock, ListOrdered, PartyPopper } from "lucide-react";
import MascotGuide from "@/components/ui/MascotGuide";
import StepCard from "@/components/guide/StepCard";
import ListenButton from "@/components/guide/ListenButton";
import HelpCard from "@/components/guide/HelpCard";
import { stopSpeaking } from "@/lib/speech";

const ROLE_THEME = {
  afiliator: { banner: "bg-primary text-white", chip: "bg-sun text-ink", muted: "text-white/85", crumb: "text-white/80 hover:text-white" },
  pembeli: { banner: "bg-sun text-ink", chip: "bg-primary text-white", muted: "text-ink-soft", crumb: "text-ink/70 hover:text-ink" },
};

const LEGEND_TONES = {
  primary: "bg-lilac",
  sun: "bg-sun-soft",
  info: "bg-sky-100",
  mint: "bg-mint-soft",
  coral: "bg-coral-soft",
};

const LEGEND_DOTS = {
  primary: "bg-primary",
  sun: "bg-amber-400",
  info: "bg-sky-500",
  mint: "bg-mint",
  coral: "bg-coral",
};

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

export default function GuideArticle({ guide, role, prev, next }) {
  const total = guide.steps.length;
  const [done, setDone] = useState(() => new Set());
  const theme = ROLE_THEME[guide.role] ?? ROLE_THEME.afiliator;
  const allDone = done.size === total;

  // Hentikan suara saat pindah halaman.
  useEffect(() => () => stopSpeaking(), []);

  const markDone = useCallback(
    (index) => {
      setDone((prevSet) => new Set(prevSet).add(index));
      const target = index + 1 < total ? `langkah-${index + 2}` : "selesai";
      setTimeout(() => scrollToId(target), 450);
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

  const firstUndone = guide.steps.findIndex((_, i) => !done.has(i));
  const summarySpeech = `${guide.title}. ${guide.summary} Ada ${total} langkah.`;

  return (
    <div className="pb-32">
      {/* ===== Banner atas ===== */}
      <header className={`relative overflow-hidden border-b-[2.5px] border-ink ${theme.banner}`}>
        <div aria-hidden="true" className="dotted-paper absolute inset-0 opacity-40" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 pb-12 pt-8 sm:px-6 md:grid-cols-[1.35fr_1fr] md:pb-16 md:pt-12">
          <div>
            <nav aria-label="Lokasi halaman" className="flex flex-wrap items-center gap-1 text-base font-semibold">
              <Link href="/" className={`underline-offset-4 hover:underline ${theme.crumb}`}>
                Beranda
              </Link>
              <ChevronRight className="size-4 opacity-60" aria-hidden="true" />
              <Link href={`/guide/${role.key}`} className={`underline-offset-4 hover:underline ${theme.crumb}`}>
                {role.title}
              </Link>
            </nav>

            <span className={`mt-5 inline-flex items-center gap-2 rounded-full border-2 border-ink px-3.5 py-1 text-base font-extrabold ${theme.chip}`}>
              <span aria-hidden="true">{role.emoji}</span> {role.shortTitle}
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">{guide.title}</h1>
            <p className={`mt-4 max-w-xl text-xl leading-relaxed ${theme.muted}`}>{guide.summary}</p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-card px-4 font-bold text-ink brut-sm">
                <ListOrdered className="size-5" aria-hidden="true" /> {total} langkah
              </span>
              <span className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-card px-4 font-bold text-ink brut-sm">
                <Clock className="size-5" aria-hidden="true" /> ± {guide.duration}
              </span>
              <ListenButton id={`${guide.slug}-ringkasan`} text={summarySpeech} label="Dengarkan ringkasan" tone="dark" />
            </div>
          </div>

          <MascotGuide pose={guide.mascot} message={guide.mascotMessage} bubble="top" size="lg" priority className="md:justify-self-end" />
        </div>
      </header>

      {/* ===== Petunjuk singkat ===== */}
      <div className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-2xl border-2 border-dashed border-ink/40 px-5 py-4 text-lg">
          <span className="font-extrabold">Cara membaca panduan ini:</span>
          ikuti nomor dari atas ke bawah. Bagian yang <span className="highlighter font-bold">berkedip kuning</span> di gambar HP adalah tombol yang harus kamu tekan.
        </p>
      </div>

      {/* ===== Daftar langkah ===== */}
      <section aria-labelledby="judul-langkah" className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <h2 id="judul-langkah" className="sr-only">
          Langkah-langkah
        </h2>
        <ol className="list-none">
          {guide.steps.map((step, i) => (
            <StepCard
              key={step.title}
              step={step}
              number={i + 1}
              total={total}
              done={done.has(i)}
              isLast={i === total - 1}
              onDone={() => markDone(i)}
              onUndo={() => undo(i)}
              guideSlug={guide.slug}
            />
          ))}
        </ol>
      </section>

      {/* ===== Keterangan tambahan ===== */}
      {guide.legend ? (
        <section aria-labelledby="judul-keterangan" className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-card p-6 brut sm:p-8">
            <h2 id="judul-keterangan" className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              {guide.legend.title}
            </h2>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {guide.legend.items.map((item) => (
                <li key={item.label} className={`flex gap-4 rounded-2xl border-2 border-ink p-4 ${LEGEND_TONES[item.tone] ?? "bg-lilac"}`}>
                  <span aria-hidden="true" className={`mt-1.5 size-4 shrink-0 rounded-full border-2 border-ink ${LEGEND_DOTS[item.tone] ?? "bg-primary"}`} />
                  <div>
                    <p className="text-lg font-extrabold">{item.label}</p>
                    <p className="text-lg leading-relaxed">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* ===== Selesai ===== */}
      <section id="selesai" aria-labelledby="judul-selesai" className="mx-auto mt-16 max-w-6xl scroll-mt-24 px-4 sm:px-6">
        <div className={`grid items-center gap-6 overflow-hidden rounded-3xl p-6 brut sm:p-10 md:grid-cols-[auto_1fr] ${allDone ? "bg-mint-soft" : "bg-lilac"}`}>
          <MascotGuide pose={allDone ? "success" : "cheer"} size="lg" float={allDone} />
          <div>
            <p className="flex items-center gap-2 text-base font-extrabold uppercase tracking-wider text-primary">
              <PartyPopper className="size-5" aria-hidden="true" /> {allDone ? "Selamat, semua langkah selesai!" : `${done.size} dari ${total} langkah selesai`}
            </p>
            <h2 id="judul-selesai" className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl">
              {guide.outro}
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {next ? (
                <Link href={`/guide/${next.role}/${next.slug}`} className="inline-flex min-h-14 items-center gap-2 rounded-xl bg-primary px-5 text-lg font-extrabold text-white brut-sm press">
                  Panduan berikutnya <ArrowRight className="size-5" aria-hidden="true" />
                </Link>
              ) : null}
              <Link href={`/guide/${role.key}`} className="inline-flex min-h-14 items-center gap-2 rounded-xl bg-card px-5 text-lg font-bold brut-sm press">
                Lihat semua {role.title}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Navigasi panduan lain ===== */}
      {prev || next ? (
        <nav aria-label="Panduan lainnya" className="mx-auto mt-10 grid max-w-6xl gap-4 px-4 sm:px-6 md:grid-cols-2">
          {prev ? (
            <Link href={`/guide/${prev.role}/${prev.slug}`} className="group rounded-2xl bg-card p-5 brut-sm press">
              <span className="flex items-center gap-2 text-base font-bold text-ink-soft">
                <ArrowLeft className="size-5" aria-hidden="true" /> Sebelumnya
              </span>
              <span className="mt-1 block text-xl font-extrabold leading-snug group-hover:text-primary">{prev.title}</span>
            </Link>
          ) : (
            <span className="hidden md:block" />
          )}
          {next ? (
            <Link href={`/guide/${next.role}/${next.slug}`} className="group rounded-2xl bg-card p-5 text-right brut-sm press">
              <span className="flex items-center justify-end gap-2 text-base font-bold text-ink-soft">
                Berikutnya <ArrowRight className="size-5" aria-hidden="true" />
              </span>
              <span className="mt-1 block text-xl font-extrabold leading-snug group-hover:text-primary">{next.title}</span>
            </Link>
          ) : null}
        </nav>
      ) : null}

      <div className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <HelpCard />
      </div>

      {/* ===== Progres melayang ===== */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 px-3 pb-3 sm:px-6 sm:pb-5">
        <div className="pointer-events-auto mx-auto flex max-w-2xl items-center gap-3 rounded-2xl bg-ink p-2.5 pl-4 text-paper shadow-[0_6px_0_0_var(--primary)] sm:gap-4">
          <div className="min-w-0 flex-1" aria-live="polite">
            <p className="text-base font-bold leading-tight">
              {allDone ? "Semua selesai! 🎉" : `${done.size} dari ${total} langkah selesai`}
            </p>
            <div className="mt-2 flex gap-1" aria-hidden="true">
              {guide.steps.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  tabIndex={-1}
                  onClick={() => scrollToId(`langkah-${i + 1}`)}
                  className={`h-2.5 flex-1 rounded-full transition-colors ${done.has(i) ? "bg-mint" : "bg-paper/25 hover:bg-paper/50"}`}
                />
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => scrollToId(allDone ? "selesai" : `langkah-${firstUndone + 1}`)}
            className="inline-flex min-h-12 shrink-0 items-center gap-1.5 rounded-xl bg-sun px-4 font-extrabold text-ink"
          >
            {allDone ? "Lihat hasil" : `Ke langkah ${firstUndone + 1}`}
          </button>
        </div>
      </div>
    </div>
  );
}
