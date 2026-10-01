import MascotGuide from "@/components/ui/MascotGuide";
import HeroSearch from "@/components/home/HeroSearch";
import RoleCards from "@/components/home/RoleCards";
import HowItWorks from "@/components/home/HowItWorks";
import HelpCard from "@/components/guide/HelpCard";
import { GUIDES } from "@/lib/guides-data";

export default function HomePage() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden border-b-[2.5px] border-ink">
        <div aria-hidden="true" className="dotted-paper absolute inset-0" />
        <div aria-hidden="true" className="absolute -right-24 -top-24 size-80 rounded-full bg-lilac" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-10 sm:px-6 md:pb-20 md:pt-16 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-sun px-4 py-1.5 text-base font-extrabold">
              <span aria-hidden="true">👋</span> Halo, selamat datang!
            </span>
            <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.04] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Pusat Panduan Konksi —{" "}
              <span className="text-primary">
                Pakai Konksi <span className="highlighter text-ink">Jadi Mudah!</span>
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-xl leading-relaxed text-ink-soft">
              Panduan langkah demi langkah, lengkap dengan gambar layar HP dan suara. Cocok untuk siapa saja, termasuk yang baru pertama kali.
            </p>
          </div>

          <MascotGuide
            pose="welcome"
            size="xl"
            bubble="top"
            priority
            message="Halo! Kami Si Konk & Sisi. Mau belajar apa hari ini?"
            className="order-2 justify-self-center lg:order-none lg:justify-self-end"
          />

          <div className="order-1 lg:order-none lg:col-span-2">
            <HeroSearch />
          </div>
        </div>
      </section>

      {/* ===== Pilih peran ===== */}
      <section aria-labelledby="judul-peran" className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 md:pt-24">
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
      </section>

      {/* ===== Cara pakai ===== */}
      <section aria-labelledby="judul-cara" className="mx-auto max-w-6xl px-4 pt-20 sm:px-6 md:pt-28">
        <div className="rounded-[2rem] bg-card p-6 brut sm:p-10">
          <p className="text-base font-extrabold uppercase tracking-wider text-primary">Baru pertama kali?</p>
          <h2 id="judul-cara" className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Begini cara memakai panduan ini
          </h2>
          <div className="mt-10">
            <HowItWorks />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <HelpCard />
      </div>
    </>
  );
}
