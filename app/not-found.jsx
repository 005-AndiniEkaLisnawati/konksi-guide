import Link from "next/link";
import { House } from "lucide-react";
import MascotGuide from "@/components/ui/MascotGuide";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-4 py-20 text-center sm:px-6">
      <MascotGuide pose="warning" size="lg" />
      <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">Waduh, halamannya tidak ada.</h1>
      <p className="mt-3 text-xl text-ink-soft">
        Mungkin alamatnya salah ketik, atau panduannya sudah dipindah. Tenang, kita kembali ke awal saja.
      </p>
      <Link href="/" className="mt-8 inline-flex min-h-14 items-center gap-2 rounded-xl bg-primary px-6 text-lg font-extrabold text-white brut-sm press">
        <House className="size-5" aria-hidden="true" /> Kembali ke Beranda Panduan
      </Link>
    </section>
  );
}
