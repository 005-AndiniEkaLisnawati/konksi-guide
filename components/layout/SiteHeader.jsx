"use client";

import Link from "next/link";
import Image from "next/image";
import TextSizeToggle from "@/components/layout/TextSizeToggle";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-[2.5px] border-ink bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 rounded-xl" aria-label="Kembali ke halaman utama Panduan Konksi">
          <span className="grid size-11 place-items-center rounded-xl bg-primary brut-sm">
            <Image src="/img/favicon.png" alt="" width={28} height={28} className="size-7 object-contain" priority />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-tight">Konksi</span>
            <span className="block text-sm font-semibold text-ink-soft">Pusat Panduan</span>
          </span>
        </Link>

        <nav aria-label="Menu utama" className="hidden items-center gap-1 md:flex">
          <Link href="/guide/afiliator" className="rounded-xl px-4 py-2.5 font-bold hover:bg-lilac">
            Afiliator
          </Link>
          <Link href="/guide/pembeli" className="rounded-xl px-4 py-2.5 font-bold hover:bg-lilac">
            Pembeli
          </Link>
        </nav>

        <TextSizeToggle />
      </div>
    </header>
  );
}
