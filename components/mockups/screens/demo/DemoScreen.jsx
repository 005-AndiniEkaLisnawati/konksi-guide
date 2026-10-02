/**
 * Layar: — (contoh di halaman utama situs panduan)
 * Kunci di registry: "demo"
 * Spot yang bisa disorot: demo, nav-beranda … nav-profil (menu bawah)
 */

import {
  Bell,
} from "lucide-react";
import { Spot } from "@/components/mockups/Spot";
import { AppScreen } from "@/components/mockups/kit";

export default function DemoScreen() {
  return (
    <AppScreen nav="beranda">
      <div className="p-3">
        <p className="text-[10px] text-slate-600">Hai, Sari! 👋</p>
        <p className="text-[15px] font-extrabold leading-tight">
          Bangun Relasi, Raih <span className="text-primary">Komisi</span>
        </p>
        <div className="mt-3 rounded-xl bg-white p-3 shadow-sm">
          <p className="text-[9.5px] text-slate-500">Saldo Komisi</p>
          <p className="text-[16px] font-extrabold">Rp245.000</p>
        </div>
        <div className="mt-6 flex justify-center">
          <Spot id="demo" className="rounded-xl" labelSide="top">
            <span className="flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-[12px] font-bold text-white">
              <Bell className="size-4" /> Tombol yang dimaksud
            </span>
          </Spot>
        </div>
        <div className="mt-6 space-y-2 opacity-50">
          <div className="h-12 rounded-xl bg-white" />
          <div className="h-12 rounded-xl bg-white" />
        </div>
      </div>
    </AppScreen>
  );
}
