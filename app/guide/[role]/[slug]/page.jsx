import { notFound } from "next/navigation";
import GuideArticle from "@/components/guide/GuideArticle";
import { GUIDES, getGuide, getRole, getSiblings } from "@/lib/guides-data";
import { assertValidContent } from "@/lib/validate-content";

/** Halaman artikel panduan: /guide/<peran>/<slug> */

export const dynamicParams = false;

export function generateStaticParams() {
  // Build berhenti di sini dengan pesan jelas kalau ada isi panduan yang salah.
  assertValidContent();
  return GUIDES.map((g) => ({ role: g.role, slug: g.slug }));
}

export async function generateMetadata({ params }) {
  const { role, slug } = await params;
  const guide = getGuide(role, slug);
  if (!guide) return {};
  return { title: guide.title, description: guide.summary };
}

export default async function GuidePage({ params }) {
  const { role, slug } = await params;
  const guide = getGuide(role, slug);
  const roleData = getRole(role);
  if (!guide || !roleData) notFound();

  const { prev, next } = getSiblings(role, slug);

  return <GuideArticle key={guide.slug} guide={guide} role={roleData} prev={prev} next={next} />;
}
