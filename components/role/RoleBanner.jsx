import Link from "next/link";
import { ChevronRight } from "lucide-react";
import MascotGuide from "@/components/ui/MascotGuide";
import Container from "@/components/shared/Container";
import { roleTheme } from "@/lib/role-themes";

/** Banner atas halaman peran: /guide/<peran> */
export default function RoleBanner({ role }) {
  const theme = roleTheme(role.key);
  return (
    <header className={`relative overflow-hidden border-b-[2.5px] border-ink ${theme.surface}`}>
      <div aria-hidden="true" className="dotted-paper absolute inset-0 opacity-40" />
      <Container className="relative grid items-center gap-8 pb-12 pt-8 md:grid-cols-[1.4fr_1fr] md:pb-16 md:pt-12">
        <div>
          <nav aria-label="Lokasi halaman" className="flex items-center gap-1 text-base font-semibold">
            <Link href="/" className={`underline-offset-4 hover:underline ${theme.muted}`}>
              Beranda
            </Link>
            <ChevronRight className="size-4 opacity-60" aria-hidden="true" />
            <span>{role.shortTitle}</span>
          </nav>
          <span aria-hidden="true" className="mt-6 grid size-16 place-items-center rounded-2xl border-[2.5px] border-ink bg-card text-4xl">
            {role.emoji}
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">{role.title}</h1>
          <p className={`mt-4 max-w-xl text-xl leading-relaxed ${theme.muted}`}>{role.who}</p>
        </div>
        <MascotGuide pose={role.mascot} size="lg" priority className="justify-self-center md:justify-self-end" />
      </Container>
    </header>
  );
}
