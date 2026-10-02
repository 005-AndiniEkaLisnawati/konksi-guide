"use client";

import { Check, ArrowDown, RotateCcw } from "lucide-react";
import AppMockup from "@/components/ui/AppMockup";
import Callout from "@/components/guide/Callout";
import ListenButton from "@/components/guide/ListenButton";
import { stepAnchor } from "@/components/guide/useStepProgress";

/**
 * Satu kartu langkah: nomor besar, judul, penjelasan, kotak tips, tombol "Sudah, lanjut"
 * & "Dengarkan", serta gambar HP dengan tombol yang disorot.
 */
export default function StepCard({ step, number, total, done, isLast, onDone, onUndo, guideSlug }) {
  const speechText = [`Langkah ${number}. ${step.title}.`, step.text, step.tip ? `${step.tip.type === "warning" ? "Hati-hati" : "Tips penting"}: ${step.tip.text}` : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <li id={stepAnchor(number)} className="relative scroll-mt-24 pb-10 pt-7 last:pb-0 sm:pl-28 sm:pt-0">
      {/* garis timeline */}
      {!isLast ? (
        <span aria-hidden="true" className="absolute bottom-0 left-[2.35rem] top-24 hidden w-[3px] bg-[repeating-linear-gradient(to_bottom,var(--ink)_0_10px,transparent_10px_18px)] sm:block" />
      ) : null}

      {/* nomor langkah besar */}
      <span
        aria-hidden="true"
        className={`absolute left-4 top-0 z-10 grid size-14 place-items-center rounded-2xl text-3xl font-extrabold brut sm:left-0 sm:size-20 sm:text-5xl ${
          done ? "bg-mint text-white" : "bg-primary text-white"
        }`}
      >
        {done ? <Check className="size-8 sm:size-11" strokeWidth={3.5} /> : number}
      </span>

      <article
        aria-labelledby={`judul-langkah-${number}`}
        className={`grid items-center gap-8 rounded-3xl bg-card px-4 pb-6 pt-11 brut sm:p-8 lg:grid-cols-[1fr_auto] lg:gap-10 ${done ? "outline-[3px] outline-offset-4 outline-mint" : ""}`}
      >
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm font-extrabold uppercase tracking-wider text-primary">
              Langkah {number} <span className="text-ink-soft">dari {total}</span>
            </p>
            {step.optional ? (
              <span className="rounded-full border-2 border-ink bg-lilac px-2.5 py-0.5 text-sm font-bold">{step.optional}</span>
            ) : null}
          </div>
          <h3 id={`judul-langkah-${number}`} className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-balance sm:text-[2rem]">
            {step.title}
          </h3>
          <p className="mt-3 text-lg leading-relaxed sm:text-xl">{step.text}</p>

          {step.tip ? (
            <Callout type={step.tip.type} className="mt-6">
              {step.tip.text}
            </Callout>
          ) : null}

          <div className="mt-7 flex flex-wrap gap-3">
            {done ? (
              <button
                type="button"
                onClick={onUndo}
                className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-mint-soft px-5 font-bold brut-sm press"
              >
                <RotateCcw className="size-5" aria-hidden="true" /> Sudah selesai · Ulangi
              </button>
            ) : (
              <button
                type="button"
                onClick={onDone}
                className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-primary px-5 text-lg font-extrabold text-white brut-sm press"
              >
                <Check className="size-5" strokeWidth={3} aria-hidden="true" />
                {isLast ? "Sudah, selesai!" : "Sudah, lanjut"}
                {!isLast ? <ArrowDown className="size-5" aria-hidden="true" /> : null}
              </button>
            )}
            <ListenButton id={`${guideSlug}-${number}`} text={speechText} />
          </div>
        </div>

        <AppMockup
          screen={step.screen}
          spot={step.spot}
          spotLabel={step.spotLabel}
          onSpotTap={done ? undefined : onDone}
          caption={done ? "Langkah ini sudah kamu tandai selesai." : "Coba tekan bagian yang berkedip kuning."}
          className="lg:w-[300px]"
        />
      </article>
    </li>
  );
}
