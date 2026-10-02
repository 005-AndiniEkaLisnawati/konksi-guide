import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "@/components/shared/Container";
import { guideHref } from "@/lib/guides-data";

/** Tautan ke panduan sebelumnya & berikutnya dalam peran yang sama. */
export default function GuideSiblingNav({ prev, next }) {
  if (!prev && !next) return null;
  return (
    <Container as="nav" aria-label="Panduan lainnya" className="mt-10 grid gap-4 md:grid-cols-2">
      {prev ? (
        <Link href={guideHref(prev)} className="group rounded-2xl bg-card p-5 brut-sm press">
          <span className="flex items-center gap-2 text-base font-bold text-ink-soft">
            <ArrowLeft className="size-5" aria-hidden="true" /> Sebelumnya
          </span>
          <span className="mt-1 block text-xl font-extrabold leading-snug group-hover:text-primary">{prev.title}</span>
        </Link>
      ) : (
        <span className="hidden md:block" />
      )}
      {next ? (
        <Link href={guideHref(next)} className="group rounded-2xl bg-card p-5 text-right brut-sm press">
          <span className="flex items-center justify-end gap-2 text-base font-bold text-ink-soft">
            Berikutnya <ArrowRight className="size-5" aria-hidden="true" />
          </span>
          <span className="mt-1 block text-xl font-extrabold leading-snug group-hover:text-primary">{next.title}</span>
        </Link>
      ) : null}
    </Container>
  );
}
