import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MascotGuide from "@/components/ui/MascotGuide";
import { ROLES, getGuidesByRole, guideHref } from "@/lib/guides-data";

export const ROLE_CARD_THEMES = {
  afiliator: {
    card: "bg-primary text-white",
    list: "bg-white/12 hover:bg-white/22 border-white/35",
    cta: "bg-sun text-ink",
    muted: "text-white/85",
  },
  pembeli: {
    card: "bg-sun text-ink",
    list: "bg-white/55 hover:bg-white border-ink/25",
    cta: "bg-primary text-white",
    muted: "text-ink-soft",
  },
};

export default function RoleCards() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {Object.values(ROLES).map((role) => {
        const t = ROLE_CARD_THEMES[role.key];
        const guides = getGuidesByRole(role.key);
        return (
          <article key={role.key} className={`relative flex flex-col overflow-hidden rounded-[2rem] p-6 brut sm:p-9 ${t.card}`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <span aria-hidden="true" className="grid size-16 place-items-center rounded-2xl border-[2.5px] border-ink bg-card text-4xl">
                  {role.emoji}
                </span>
                <h3 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">{role.title}</h3>
                <p className={`mt-2 text-lg leading-relaxed sm:text-xl ${t.muted}`}>{role.description}</p>
              </div>
              <MascotGuide pose={role.mascot} size="sm" className="-mr-2 -mt-2 hidden sm:block" />
            </div>

            <ul className="mt-7 flex-1 space-y-2.5">
              {guides.map((g, i) => (
                <li key={g.slug}>
                  <Link href={guideHref(g)} className={`group flex min-h-14 items-center gap-3 rounded-xl border-2 px-4 py-3 text-lg font-bold transition-colors ${t.list}`}>
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg border-2 border-ink bg-card text-base font-extrabold text-ink">
                      {i + 1}
                    </span>
                    <span className="flex-1 leading-snug">{g.title}</span>
                    <ArrowRight className="size-5 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href={`/guide/${role.key}`}
              className={`mt-7 inline-flex min-h-14 items-center justify-center gap-2 self-start rounded-xl px-6 text-lg font-extrabold brut-sm press ${t.cta}`}
            >
              Buka {role.title} <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </article>
        );
      })}
    </div>
  );
}
