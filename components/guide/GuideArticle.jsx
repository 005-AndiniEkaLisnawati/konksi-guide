"use client";

import { useEffect } from "react";
import GuideBanner from "@/components/guide/GuideBanner";
import ReadingHint from "@/components/guide/ReadingHint";
import StepCard from "@/components/guide/StepCard";
import GuideLegend from "@/components/guide/GuideLegend";
import GuideFinish from "@/components/guide/GuideFinish";
import GuideSiblingNav from "@/components/guide/GuideSiblingNav";
import ProgressDock from "@/components/guide/ProgressDock";
import { useStepProgress } from "@/components/guide/useStepProgress";
import HelpCard from "@/components/shared/HelpCard";
import Container from "@/components/shared/Container";
import { stopSpeaking } from "@/lib/speech";

/**
 * Halaman artikel panduan (dari atas ke bawah):
 * banner → petunjuk membaca → langkah-langkah → keterangan (opsional) → selesai
 * → panduan lain → bantuan, plus bilah progres yang melayang.
 */
export default function GuideArticle({ guide, role, prev, next }) {
  const total = guide.steps.length;
  const { done, markDone, undo, allDone, firstUndone } = useStepProgress(total);

  // Hentikan suara saat pindah halaman.
  useEffect(() => () => stopSpeaking(), []);

  return (
    <div className="pb-32">
      <GuideBanner guide={guide} role={role} />
      <ReadingHint />

      <Container as="section" aria-labelledby="judul-langkah" className="mt-12">
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
      </Container>

      {guide.legend ? <GuideLegend legend={guide.legend} /> : null}
      <GuideFinish guide={guide} role={role} next={next} doneCount={done.size} allDone={allDone} />
      <GuideSiblingNav prev={prev} next={next} />

      <Container className="mt-16">
        <HelpCard />
      </Container>

      <ProgressDock steps={guide.steps} done={done} allDone={allDone} firstUndone={firstUndone} />
    </div>
  );
}
