import HowItWorks from "@/components/home/HowItWorks";
import Container from "@/components/shared/Container";

/** "Begini cara memakai panduan ini" — penjelasan singkat + demo HP yang bisa ditekan. */
export default function HowToSection() {
  return (
    <Container as="section" aria-labelledby="judul-cara" className="pt-20 md:pt-28">
      <div className="rounded-[2rem] bg-card p-6 brut sm:p-10">
        <p className="text-base font-extrabold uppercase tracking-wider text-primary">Baru pertama kali?</p>
        <h2 id="judul-cara" className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Begini cara memakai panduan ini
        </h2>
        <div className="mt-10">
          <HowItWorks />
        </div>
      </div>
    </Container>
  );
}
