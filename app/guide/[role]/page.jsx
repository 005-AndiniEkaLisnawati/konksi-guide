import { notFound } from "next/navigation";
import RoleBanner from "@/components/role/RoleBanner";
import RoleGuideList from "@/components/role/RoleGuideList";
import OtherRoleLink from "@/components/role/OtherRoleLink";
import HelpCard from "@/components/shared/HelpCard";
import Container from "@/components/shared/Container";
import { ROLES, getGuidesByRole, getRole } from "@/lib/guides-data";

/** Halaman daftar panduan per peran: /guide/afiliator, /guide/pembeli */

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(ROLES).map((role) => ({ role }));
}

export async function generateMetadata({ params }) {
  const { role } = await params;
  const data = getRole(role);
  if (!data) return {};
  return { title: data.title, description: `${data.who} ${data.description}` };
}

export default async function RolePage({ params }) {
  const { role } = await params;
  const data = getRole(role);
  if (!data) notFound();

  const other = Object.values(ROLES).find((r) => r.key !== role);

  return (
    <>
      <RoleBanner role={data} />

      <Container as="section" aria-labelledby="judul-daftar" className="pt-14">
        <h2 id="judul-daftar" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Pilih panduan yang kamu butuhkan
        </h2>
        <RoleGuideList guides={getGuidesByRole(role)} />
        {other ? <OtherRoleLink current={data} other={other} /> : null}
      </Container>

      <Container className="pt-16">
        <HelpCard />
      </Container>
    </>
  );
}
