/**
 * Layar: /home
 * Kunci di registry: "home"
 * Spot yang bisa disorot: voucher-icon, checkin, lihat-misi, nav-beranda … nav-profil (menu bawah)
 */

import {
  Bookmark,
  Check,
  ChevronRight,
  Coins,
  Gift,
  MessageCircleMore,
  Search,
  TicketPercent,
} from "lucide-react";
import { Spot } from "@/components/mockups/Spot";
import { AppScreen, CatalogCard } from "@/components/mockups/kit";
import { PRODUCTS } from "@/components/mockups/sample-data";

export default function HomeScreen() {
  const days = [1, 2, 3, 4, 5, 6, 7];
  return (
    <AppScreen nav="beranda">
      <div className="bg-gradient-to-b from-primary/15 to-transparent px-3 pb-3 pt-3">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] text-slate-600">Hai, Sari! 👋</p>
            <p className="text-[15px] font-extrabold leading-tight">
              Bangun Relasi, Raih <span className="text-primary">Komisi</span>
            </p>
          </div>
          <div className="flex gap-1.5">
            <Spot id="voucher-icon" className="rounded-full" labelSide="left">
              <span className="grid size-8 place-items-center rounded-full bg-white shadow-sm">
                <TicketPercent className="size-4 text-primary" />
              </span>
            </Spot>
            <span className="grid size-8 place-items-center rounded-full bg-white shadow-sm">
              <MessageCircleMore className="size-4 text-primary" />
            </span>
          </div>
        </div>
        <div className="mt-3 flex gap-1.5">
          <div className="flex flex-1 items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-2.5 py-2 text-[10.5px] text-slate-400">
            <Search className="size-3.5" /> Cari layanan...
          </div>
          <span className="grid size-9 place-items-center rounded-xl border border-slate-200 bg-white">
            <Bookmark className="size-3.5" />
          </span>
        </div>
        <div className="mt-3 grid grid-cols-2 divide-x divide-slate-100 rounded-xl bg-white p-2.5 shadow-sm">
          <div>
            <p className="text-[9.5px] text-slate-500">Saldo Komisi</p>
            <p className="text-[13px] font-extrabold">Rp245.000</p>
          </div>
          <div className="pl-2.5">
            <p className="text-[9.5px] text-slate-500">Poin Konksi</p>
            <p className="flex items-center gap-1 text-[13px] font-extrabold">
              <Coins className="size-3.5 text-amber-500" /> 1.250 Poin
            </p>
          </div>
        </div>
      </div>

      <div className="mx-3 rounded-xl border border-slate-200 bg-white p-3">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-[12px] font-bold">Daily Check-in</p>
            <p className="text-[9.5px] text-slate-500">Kumpulkan poin harianmu sekarang</p>
          </div>
          <Spot id="checkin" className="rounded-lg" labelSide="left">
            <span className="block rounded-lg bg-primary px-3 py-1.5 text-[10.5px] font-bold text-white">Check-in</span>
          </Spot>
        </div>
        <div className="mt-3 flex justify-between">
          {days.map((d) => (
            <div key={d} className="flex flex-col items-center gap-1">
              <span
                className={`grid size-6 place-items-center rounded-full ${
                  d < 3 ? "bg-primary text-white" : d === 3 ? "animate-bounce-slow bg-amber-400 text-white" : d === 7 ? "bg-gradient-to-br from-primary to-amber-400 text-white" : "bg-slate-100 text-slate-300"
                }`}
              >
                {d < 3 ? <Check className="size-3" strokeWidth={3} /> : d === 7 ? <Gift className="size-3" /> : <Coins className="size-3" />}
              </span>
              <span className="text-[8px] text-slate-500">Hari {d}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-dashed border-slate-200 pt-2.5">
          <div>
            <p className="text-[11px] font-bold">Misi Hari Ini</p>
            <p className="text-[9.5px] text-slate-500">Selesaikan misi untuk ekstra poin!</p>
          </div>
          <Spot id="lihat-misi" className="rounded-md" labelSide="top">
            <span className="flex items-center text-[10.5px] font-bold text-primary">
              Lihat Misi <ChevronRight className="size-3.5" />
            </span>
          </Spot>
        </div>
      </div>

      <p className="mx-3 mt-4 text-[12px] font-bold">Komisi Tinggi</p>
      <div className="mt-2 grid grid-cols-2 gap-2 px-3">
        <CatalogCard product={PRODUCTS[2]} />
        <CatalogCard product={PRODUCTS[0]} />
      </div>
    </AppScreen>
  );
}
