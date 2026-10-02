import RoleCards from "@/components/home/RoleCards";
import Container from "@/components/shared/Container";
import { GUIDES } from "@/lib/guides-data";

/** "Kamu yang mana?" — pilihan peran beserta daftar panduannya. */
export default function RoleSection() {
  return (
    <Container as="section" aria-labelledby="judul-peran" className="pt-16 md:pt-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-base font-extrabold uppercase tracking-wider text-primary">Langkah pertama</p>
          <h2 id="judul-peran" className="mt-1 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Kamu yang mana?
          </h2>
          <p className="mt-2 text-xl text-ink-soft">Pilih sesuai peranmu di Konksi, lalu pilih panduan yang kamu butuhkan.</p>
        </div>
        <p className="rounded-xl border-2 border-ink bg-card px-4 py-2 text-lg font-bold">{GUIDES.length} panduan tersedia</p>
      </div>
      <div className="mt-10">
        <RoleCards />
      </div>
    </Container>
  );
}
