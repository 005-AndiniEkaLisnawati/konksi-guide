import Link from "next/link";
import { ChevronRight, Clock, ListOrdered } from "lucide-react";
import MascotGuide from "@/components/ui/MascotGuide";
import ListenButton from "@/components/guide/ListenButton";
import Container from "@/components/shared/Container";
import { roleHref } from "@/lib/guides-data";
import { roleTheme } from "@/lib/role-themes";

/** Banner atas artikel: lokasi halaman, judul, ringkasan, info langkah, dan maskot. */
export default function GuideBanner({ guide, role }) {
  const theme = roleTheme(guide.role);
  const total = guide.steps.length;
  const summarySpeech = `${guide.title}. ${guide.summary} Ada ${total} langkah.`;

  return (
    <header className={`relative overflow-hidden border-b-[2.5px] border-ink ${theme.surface}`}>
      <div aria-hidden="true" className="dotted-paper absolute inset-0 opacity-40" />
      <Container className="relative grid items-center gap-8 pb-12 pt-8 md:grid-cols-[1.35fr_1fr] md:pb-16 md:pt-12">
        <div>
          <nav aria-label="Lokasi halaman" className="flex flex-wrap items-center gap-1 text-base font-semibold">
            <Link href="/" className={`underline-offset-4 hover:underline ${theme.crumb}`}>
              Beranda
            </Link>
            <ChevronRight className="size-4 opacity-60" aria-hidden="true" />
            <Link href={roleHref(role)} className={`underline-offset-4 hover:underline ${theme.crumb}`}>
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
      </Container>
    </header>
  );
}
