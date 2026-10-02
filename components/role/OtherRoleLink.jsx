import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { roleHref } from "@/lib/guides-data";

/** Tautan "Bukan afiliator? Lihat Panduan Pembeli" di bawah daftar panduan. */
export default function OtherRoleLink({ current, other }) {
  return (
    <Link
      href={roleHref(other)}
      className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border-2 border-dashed border-ink/50 p-5 text-lg font-bold hover:bg-card"
    >
      <span>
        Bukan {current.shortTitle.toLowerCase()}? Lihat <span className="text-primary">{other.title}</span> {other.emoji}
      </span>
      <ArrowRight className="size-6" aria-hidden="true" />
    </Link>
  );
}
