import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight, Clock, ListOrdered } from "lucide-react";
import MascotGuide from "@/components/ui/MascotGuide";
import HelpCard from "@/components/guide/HelpCard";
import { ROLE_CARD_THEMES } from "@/components/home/RoleCards";
import { ROLES, getGuidesByRole, getRole, guideHref } from "@/lib/guides-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(ROLES).map((role) => ({ role }));
}

export async function generateMetadata({ params }) {
  const { role } = await params;
  const data = getRole(role);
  if (!data) return {};
  return { title: data.title, description: `${data.who} ${data.description}` };
}

export default async function RolePage({ params }) {
  const { role } = await params;
  const data = getRole(role);
  if (!data) notFound();

  const guides = getGuidesByRole(role);
  const theme = ROLE_CARD_THEMES[role];
  const other = Object.values(ROLES).find((r) => r.key !== role);

  return (
    <>
      <header className={`relative overflow-hidden border-b-[2.5px] border-ink ${theme.card}`}>
        <div aria-hidden="true" className="dotted-paper absolute inset-0 opacity-40" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 pb-12 pt-8 sm:px-6 md:grid-cols-[1.4fr_1fr] md:pb-16 md:pt-12">
          <div>
            <nav aria-label="Lokasi halaman" className="flex items-center gap-1 text-base font-semibold">
              <Link href="/" className={`underline-offset-4 hover:underline ${theme.muted}`}>
                Beranda
              </Link>
              <ChevronRight className="size-4 opacity-60" aria-hidden="true" />
              <span>{data.shortTitle}</span>
            </nav>
            <span aria-hidden="true" className="mt-6 grid size-16 place-items-center rounded-2xl border-[2.5px] border-ink bg-card text-4xl">
              {data.emoji}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">{data.title}</h1>
            <p className={`mt-4 max-w-xl text-xl leading-relaxed ${theme.muted}`}>{data.who}</p>
          </div>
          <MascotGuide pose={data.mascot} size="lg" priority className="justify-self-center md:justify-self-end" />
        </div>
      </header>

      <section aria-labelledby="judul-daftar" className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        <h2 id="judul-daftar" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Pilih panduan yang kamu butuhkan
        </h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-2">
          {guides.map((g, i) => (
            <li key={g.slug}>
              <Link href={guideHref(g)} className="group flex h-full flex-col rounded-3xl bg-card p-6 brut press sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-primary text-2xl font-extrabold text-white brut-sm">{i + 1}</span>
                  <MascotGuide pose={g.mascot} size="sm" float={false} className="ml-auto -mt-2" />
                </div>
                <h3 className="mt-4 text-2xl font-extrabold leading-snug tracking-tight group-hover:text-primary">{g.title}</h3>
                <p className="mt-2 flex-1 text-lg leading-relaxed text-ink-soft">{g.summary}</p>
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-base font-bold">
                  <span className="inline-flex items-center gap-1.5">
                    <ListOrdered className="size-5 text-primary" aria-hidden="true" /> {g.steps.length} langkah
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-5 text-primary" aria-hidden="true" /> ± {g.duration}
                  </span>
                  <span className="ml-auto inline-flex min-h-12 items-center gap-2 rounded-xl bg-sun px-4 font-extrabold brut-sm">
                    Mulai <ArrowRight className="size-5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ol>

        <Link
          href={`/guide/${other.key}`}
          className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border-2 border-dashed border-ink/50 p-5 text-lg font-bold hover:bg-card"
        >
          <span>
            Bukan {data.shortTitle.toLowerCase()}? Lihat <span className="text-primary">{other.title}</span> {other.emoji}
          </span>
          <ArrowRight className="size-6" aria-hidden="true" />
        </Link>
      </section>

      <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <HelpCard />
      </div>
    </>
  );
}
