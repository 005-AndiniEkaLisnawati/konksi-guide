import Link from "next/link";
import { ArrowRight, PartyPopper } from "lucide-react";
import MascotGuide from "@/components/ui/MascotGuide";
import Container from "@/components/shared/Container";
import { FINISH_ANCHOR } from "@/components/guide/useStepProgress";
import { guideHref, roleHref } from "@/lib/guides-data";

/** Kotak penutup: berubah hijau & maskot merayakan saat semua langkah ditandai selesai. */
export default function GuideFinish({ guide, role, next, doneCount, allDone }) {
  const total = guide.steps.length;
  return (
    <Container as="section" id={FINISH_ANCHOR} aria-labelledby="judul-selesai" className="mt-16 scroll-mt-24">
      <div className={`grid items-center gap-6 overflow-hidden rounded-3xl p-6 brut sm:p-10 md:grid-cols-[auto_1fr] ${allDone ? "bg-mint-soft" : "bg-lilac"}`}>
        <MascotGuide pose={allDone ? "success" : "cheer"} size="lg" float={allDone} />
        <div>
          <p className="flex items-center gap-2 text-base font-extrabold uppercase tracking-wider text-primary">
            <PartyPopper className="size-5" aria-hidden="true" /> {allDone ? "Selamat, semua langkah selesai!" : `${doneCount} dari ${total} langkah selesai`}
          </p>
          <h2 id="judul-selesai" className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl">
            {guide.outro}
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {next ? (
              <Link href={guideHref(next)} className="inline-flex min-h-14 items-center gap-2 rounded-xl bg-primary px-5 text-lg font-extrabold text-white brut-sm press">
                Panduan berikutnya <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
            ) : null}
            <Link href={roleHref(role)} className="inline-flex min-h-14 items-center gap-2 rounded-xl bg-card px-5 text-lg font-bold brut-sm press">
              Lihat semua {role.title}
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
