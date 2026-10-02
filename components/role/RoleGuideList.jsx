import Link from "next/link";
import { ArrowRight, Clock, ListOrdered } from "lucide-react";
import MascotGuide from "@/components/ui/MascotGuide";
import { guideHref } from "@/lib/guides-data";

/** Daftar kartu panduan bernomor di halaman peran. */
export default function RoleGuideList({ guides }) {
  return (
    <ol className="mt-8 grid gap-6 md:grid-cols-2">
      {guides.map((guide, i) => (
        <li key={guide.slug}>
          <RoleGuideCard guide={guide} number={i + 1} />
        </li>
      ))}
    </ol>
  );
}

function RoleGuideCard({ guide, number }) {
  return (
    <Link href={guideHref(guide)} className="group flex h-full flex-col rounded-3xl bg-card p-6 brut press sm:p-7">
      <div className="flex items-start gap-4">
        <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-primary text-2xl font-extrabold text-white brut-sm">{number}</span>
        <MascotGuide pose={guide.mascot} size="sm" float={false} className="ml-auto -mt-2" />
      </div>
      <h3 className="mt-4 text-2xl font-extrabold leading-snug tracking-tight group-hover:text-primary">{guide.title}</h3>
      <p className="mt-2 flex-1 text-lg leading-relaxed text-ink-soft">{guide.summary}</p>
      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-base font-bold">
        <span className="inline-flex items-center gap-1.5">
          <ListOrdered className="size-5 text-primary" aria-hidden="true" /> {guide.steps.length} langkah
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="size-5 text-primary" aria-hidden="true" /> ± {guide.duration}
        </span>
        <span className="ml-auto inline-flex min-h-12 items-center gap-2 rounded-xl bg-sun px-4 font-extrabold brut-sm">
          Mulai <ArrowRight className="size-5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
