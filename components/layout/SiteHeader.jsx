import Link from "next/link";
import Image from "next/image";
import TextSizeToggle from "@/components/layout/TextSizeToggle";
import Container from "@/components/shared/Container";
import { ROLES, roleHref } from "@/lib/guides-data";

/** Header lengket di atas setiap halaman: logo, menu peran (layar lebar), tombol ukuran teks. */
export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-[2.5px] border-ink bg-paper/95 backdrop-blur">
      <Container className="flex items-center justify-between gap-3 py-3">
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
          {Object.values(ROLES).map((role) => (
            <Link key={role.key} href={roleHref(role)} className="rounded-xl px-4 py-2.5 font-bold hover:bg-lilac">
              {role.shortTitle}
            </Link>
          ))}
        </nav>

        <TextSizeToggle />
      </Container>
    </header>
  );
}
