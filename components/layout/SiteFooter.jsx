import Link from "next/link";
import { ROLES, getGuidesByRole, guideHref } from "@/lib/guides-data";

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t-[2.5px] border-ink bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="text-2xl font-extrabold">Pusat Panduan Konksi</p>
          <p className="mt-2 max-w-sm text-paper/75">
            Dibuat supaya semua orang bisa memakai Konksi dengan tenang. Pelan-pelan saja, satu langkah setiap kali.
          </p>
        </div>
        {Object.values(ROLES).map((role) => (
          <div key={role.key}>
            <Link href={`/guide/${role.key}`} className="font-extrabold text-sun hover:underline underline-offset-4">
              {role.title}
            </Link>
            <ul className="mt-3 space-y-2.5">
              {getGuidesByRole(role.key).map((guide) => (
                <li key={guide.slug}>
                  <Link href={guideHref(guide)} className="text-base text-paper/85 underline-offset-4 hover:text-paper hover:underline">
                    {guide.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-paper/15">
        <p className="mx-auto max-w-6xl px-4 py-5 text-sm text-paper/60 sm:px-6">
          © {new Date().getFullYear()} Konksi · Gambar layar di panduan ini adalah simulasi dari aplikasi Konksi.
        </p>
      </div>
    </footer>
  );
}
