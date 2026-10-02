import HomeHero from "@/components/home/HomeHero";
import RoleSection from "@/components/home/RoleSection";
import HowToSection from "@/components/home/HowToSection";
import HelpCard from "@/components/shared/HelpCard";
import Container from "@/components/shared/Container";

/** Halaman utama: / */
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <RoleSection />
      <HowToSection />
      <Container className="pt-16">
        <HelpCard />
      </Container>
    </>
  );
}
