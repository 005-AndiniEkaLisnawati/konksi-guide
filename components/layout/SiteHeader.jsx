"use client";

import Link from "next/link";
import Image from "next/image";
import TextSizeToggle from "@/components/layout/TextSizeToggle";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-[2.5px] border-ink bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3 rounded-xl" aria-label="Kembali ke halaman utama Panduan Konksi">
          <Image
            src="/img/logo-konksi-affiliate.png"
            alt="Konksi Affiliate"
            width={424}
            height={120}
            priority
            className="h-9 w-auto sm:h-11"
          />
          <span className="hidden border-l-2 border-ink/15 pl-3 text-base font-extrabold leading-tight sm:block">
            Pusat
            <br />
            Panduan
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
