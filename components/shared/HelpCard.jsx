import { CircleHelp, Users } from "lucide-react";
import MascotGuide from "@/components/ui/MascotGuide";

export default function HelpCard() {
  return (
    <section aria-labelledby="judul-bantuan" className="grid items-center gap-6 rounded-3xl bg-card p-6 brut sm:p-8 md:grid-cols-[1fr_auto]">
      <div>
        <h2 id="judul-bantuan" className="text-3xl font-extrabold tracking-tight">
          Masih bingung? Tidak apa-apa.
        </h2>
        <p className="mt-2 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Semua orang pernah belajar dari nol. Kamu bisa minta bantuan langsung dari aplikasi Konksi:
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          <li className="flex gap-3 rounded-2xl border-2 border-ink bg-lilac p-4">
            <CircleHelp className="mt-0.5 size-7 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-lg leading-snug">
              Buka <b>Profil → FAQ</b> untuk jawaban dari pertanyaan yang sering ditanyakan.
            </p>
          </li>
          <li className="flex gap-3 rounded-2xl border-2 border-ink bg-sun-soft p-4">
            <Users className="mt-0.5 size-7 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-lg leading-snug">
              Gabung <b>Grup WA Konksi</b> lewat menu <b>Profil</b>, bagian <b>Komunitas Affiliate</b>.
            </p>
          </li>
        </ul>
      </div>
      <MascotGuide pose="pointing" size="md" className="justify-self-center" />
    </section>
  );
}
