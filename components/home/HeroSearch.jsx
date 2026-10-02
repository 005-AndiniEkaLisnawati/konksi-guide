"use client";

import { useId, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Search, X } from "lucide-react";
import { ROLES, guideHref } from "@/lib/guides-data";
import { searchGuides } from "@/lib/search";
import MascotGuide from "@/components/ui/MascotGuide";

const QUICK = ["Tarik Saldo", "Bio Link", "Voucher", "Lacak Pesanan", "Misi Harian"];

export default function HeroSearch() {
  const router = useRouter();
  const inputId = useId();
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchGuides(query), [query]);
  const hasQuery = query.trim().length > 1;

  const onSubmit = (e) => {
    e.preventDefault();
    if (results[0]) router.push(guideHref(results[0]));
  };

  return (
    <div className="w-full">
      <form role="search" onSubmit={onSubmit} className="relative">
        <label htmlFor={inputId} className="sr-only">
          Cari panduan
        </label>
        <Search className="pointer-events-none absolute left-5 top-1/2 size-7 -translate-y-1/2 text-primary" strokeWidth={2.6} aria-hidden="true" />
        <input
          id={inputId}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari panduan... (misal: Cara Tarik Saldo, Cara Buat Bio Link)"
          autoComplete="off"
          enterKeyHint="search"
          className="h-[4.5rem] w-full rounded-2xl bg-card pl-16 pr-14 text-lg font-semibold text-ink brut placeholder:font-medium placeholder:text-ink-soft/70 focus:outline-none focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-sun sm:text-xl [&::-webkit-search-cancel-button]:hidden"
        />
        {query ? (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-xl text-ink hover:bg-lilac"
            aria-label="Hapus pencarian"
          >
            <X className="size-6" />
          </button>
        ) : null}
      </form>

      {!hasQuery ? (
        <div className="mt-5 flex flex-wrap items-center gap-2.5">
          <span className="text-base font-bold">Paling sering dicari:</span>
          {QUICK.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => setQuery(q)}
              className="min-h-11 rounded-full border-2 border-ink bg-card px-4 text-base font-bold hover:bg-sun"
            >
              {q}
            </button>
          ))}
        </div>
      ) : (
        <div className="mt-5" aria-live="polite">
          {results.length > 0 ? (
            <>
              <p className="text-base font-bold">
                Ketemu {results.length} panduan untuk “{query.trim()}”:
              </p>
              <ul className="mt-3 space-y-3">
                {results.map((g) => (
                  <li key={g.slug}>
                    <Link href={guideHref(g)} className="group flex items-center gap-4 rounded-2xl bg-card p-4 brut-sm press">
                      <span className="grid size-12 shrink-0 place-items-center rounded-xl border-2 border-ink bg-lilac text-2xl" aria-hidden="true">
                        {ROLES[g.role].emoji}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-extrabold uppercase tracking-wider text-primary">{ROLES[g.role].shortTitle}</span>
                        <span className="block text-lg font-extrabold leading-snug group-hover:text-primary sm:text-xl">{g.title}</span>
                      </span>
                      <ArrowRight className="size-6 shrink-0" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="flex flex-col items-start gap-4 rounded-2xl bg-coral-soft p-5 brut-sm sm:flex-row sm:items-center">
              <MascotGuide pose="warning" size="sm" float={false} />
              <div>
                <p className="text-xl font-extrabold">Hmm, panduan “{query.trim()}” belum ketemu.</p>
                <p className="mt-1 text-lg">Coba kata lain yang lebih singkat, misalnya “saldo”, “voucher”, atau “pesanan”.</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
