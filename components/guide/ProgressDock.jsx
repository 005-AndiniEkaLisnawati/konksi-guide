"use client";

import { FINISH_ANCHOR, scrollToId, stepAnchor } from "@/components/guide/useStepProgress";

/** Bilah progres yang melayang di bawah layar: "2 dari 7 langkah selesai" + tombol lompat. */
export default function ProgressDock({ steps, done, allDone, firstUndone }) {
  const total = steps.length;
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 px-3 pb-3 sm:px-6 sm:pb-5">
      <div className="pointer-events-auto mx-auto flex max-w-2xl items-center gap-3 rounded-2xl bg-ink p-2.5 pl-4 text-paper shadow-[0_6px_0_0_var(--primary)] sm:gap-4">
        <div className="min-w-0 flex-1" aria-live="polite">
          <p className="text-base font-bold leading-tight">
            {allDone ? "Semua selesai! 🎉" : `${done.size} dari ${total} langkah selesai`}
          </p>
          <div className="mt-2 flex gap-1" aria-hidden="true">
            {steps.map((s, i) => (
              <button
                key={s.title}
                type="button"
                tabIndex={-1}
                onClick={() => scrollToId(stepAnchor(i + 1))}
                className={`h-2.5 flex-1 rounded-full transition-colors ${done.has(i) ? "bg-mint" : "bg-paper/25 hover:bg-paper/50"}`}
              />
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={() => scrollToId(allDone ? FINISH_ANCHOR : stepAnchor(firstUndone + 1))}
          className="inline-flex min-h-12 shrink-0 items-center gap-1.5 rounded-xl bg-sun px-4 font-extrabold text-ink"
        >
          {allDone ? "Lihat hasil" : `Ke langkah ${firstUndone + 1}`}
        </button>
      </div>
    </div>
  );
}
