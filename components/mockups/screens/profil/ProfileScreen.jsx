/**
 * Layar: /profile
 * Kunci di registry: "profile"
 * Spot yang bisa disorot: menu-tampilan, menu-biolink, menu-personalisasi, menu-statistik, menu-tersimpan, menu-data, nav-beranda … nav-profil (menu bawah)
 */

import {
  Bookmark,
  ChevronRight,
  Copy,
  Info,
  Link,
  Palette,
  ShieldCheck,
  Sparkles,
  User,
} from "lucide-react";
import { Spot } from "@/components/mockups/Spot";
import { AppScreen, AppBar } from "@/components/mockups/kit";

export default function ProfileScreen() {
  const menu = [
    { id: "menu-tampilan", label: "Tampilan Profil", icon: User },
    { id: "menu-biolink", label: "Biolink", icon: Link },
    { id: "menu-personalisasi", label: "Personalisasi", icon: Palette },
    { id: "menu-statistik", label: "Statistik", icon: Sparkles },
    { id: "menu-tersimpan", label: "Tersimpan", icon: Bookmark },
    { id: "menu-data", label: "Data Diri", icon: ShieldCheck },
  ];
  return (
    <AppScreen nav="profil">
      <AppBar title="Profil" back={false} />
      <div className="p-3">
        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-[12px] font-bold">Selamat datang di Affiliate!</p>
          <div className="mt-1 flex items-center gap-1.5 text-[10px] text-sky-600">
            https://konksi.com/sari <Copy className="size-3 text-slate-500" />
          </div>
        </div>
        <div className="mt-2 flex gap-1.5 rounded-xl bg-sky-50 p-2.5 text-[9.5px] text-sky-800">
          <Info className="size-3.5 shrink-0" /> Isi data diri dan rekeningmu untuk mulai tarik saldo komisi!
        </div>
        <div className="mt-3 divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
          {menu.map(({ id, label, icon: Icon }) => (
            <Spot key={id} id={id} className="rounded-lg">
              <div className="flex items-center gap-2.5 px-3 py-2.5">
                <Icon className="size-4 text-primary" />
                <span className="flex-1 text-[11.5px] font-semibold">{label}</span>
                <ChevronRight className="size-3.5 text-slate-400" />
              </div>
            </Spot>
          ))}
        </div>
      </div>
    </AppScreen>
  );
}
