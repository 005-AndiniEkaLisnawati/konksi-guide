import MascotGuide from "@/components/ui/MascotGuide";
import HeroSearch from "@/components/home/HeroSearch";
import Container from "@/components/shared/Container";

/** Bagian paling atas halaman utama: sapaan, judul, maskot, dan kotak pencarian. */
export default function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b-[2.5px] border-ink">
      <div aria-hidden="true" className="dotted-paper absolute inset-0" />
      <div aria-hidden="true" className="absolute -right-24 -top-24 size-80 rounded-full bg-lilac" />
      <Container className="relative grid items-center gap-10 pb-14 pt-10 md:pb-20 md:pt-16 lg:grid-cols-[1.3fr_1fr]">
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

        {/* Di HP: maskot tampil di bawah kotak pencarian (order-2). Di layar lebar: di kanan judul. */}
        <MascotGuide
          pose="hero"
          size="xl"
          bubble="top"
          priority
          message="Halo! Kami Si Konk & Sisi. Mau belajar apa hari ini?"
          className="order-2 justify-self-center lg:order-none lg:justify-self-end"
        />

        <div className="order-1 lg:order-none lg:col-span-2">
          <HeroSearch />
        </div>
      </Container>
    </section>
  );
}
