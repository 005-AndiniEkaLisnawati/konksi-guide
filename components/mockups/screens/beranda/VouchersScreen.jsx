/**
 * Layar: /rewards/vouchers
 * Kunci di registry: "vouchers"
 * Spot yang bisa disorot: voucher-info, pakai, nav-beranda … nav-profil (menu bawah)
 */

import Image from "next/image";
import {
  Clock,
  Coins,
  Info,
  Search,
} from "lucide-react";
import { Spot } from "@/components/mockups/Spot";
import { AppScreen, AppBar } from "@/components/mockups/kit";

export default function VouchersScreen() {
  const vouchers = [
    { code: "HEMAT10", name: "Diskon 10% Semua Jasa", min: "Min. transaksi Rp50.000", badge: "bg-sky-100 text-sky-700", mascot: "discount", spot: true },
    { code: "PTS-1000", name: "Potongan Rp1.000", min: "Tanpa minimum transaksi", badge: "bg-amber-100 text-amber-700", mascot: "cashback", points: true },
  ];
  return (
    <AppScreen nav="beranda">
      <AppBar title="Voucher Saya" />
      <div className="space-y-2.5 p-3">
        <div className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-2.5 py-2 text-[10.5px] text-slate-400">
          <Search className="size-3.5" /> Cari voucher atau kode promo...
        </div>
        <div className="flex gap-1.5 overflow-hidden">
          <span className="shrink-0 rounded-full bg-primary px-2.5 py-1 text-[9.5px] font-bold text-white">Semua Voucher</span>
          <span className="shrink-0 rounded-full bg-white px-2.5 py-1 text-[9.5px] ring-1 ring-slate-200">Diskon Persen (%)</span>
          <span className="shrink-0 rounded-full bg-white px-2.5 py-1 text-[9.5px] ring-1 ring-slate-200">Potongan harga (Rp)</span>
        </div>
        {vouchers.map((v) => {
          const info = (
            <span className="grid size-5 place-items-center rounded-full text-slate-400">
              <Info className="size-3.5" />
            </span>
          );
          const pakai = <span className="block rounded-lg bg-primary px-3 py-1 text-[10px] font-bold text-white">Pakai</span>;
          return (
            <div key={v.code} className="flex overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="flex w-[70px] flex-col items-center justify-center bg-primary/10 p-1.5">
                <Image src={`/img/icons/mascot/${v.mascot}.png`} alt="" width={52} height={52} unoptimized className="size-12 object-contain" />
                <span className="mt-0.5 font-mono text-[8px] font-bold text-primary">{v.code}</span>
              </div>
              <div className="relative flex-1 border-l-2 border-dashed border-slate-200 p-2.5">
                <div className="flex items-center gap-1">
                  <span className={`rounded px-1.5 py-0.5 font-mono text-[8.5px] font-bold ${v.badge}`}>{v.code}</span>
                  {v.points ? (
                    <span className="flex items-center gap-0.5 rounded bg-amber-100 px-1.5 py-0.5 text-[8.5px] font-bold text-amber-700">
                      <Coins className="size-2.5" /> Tukar Poin ×1
                    </span>
                  ) : null}
                  <span className="ml-auto">
                    {v.spot ? (
                      <Spot id="voucher-info" className="rounded-full" labelSide="left">
                        {info}
                      </Spot>
                    ) : (
                      info
                    )}
                  </span>
                </div>
                <p className="mt-1 text-[11px] font-bold">{v.name}</p>
                <p className="text-[9.5px] text-slate-500">{v.min}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-[9px] text-slate-500">
                    <Clock className="size-2.5" /> Berakhir 31 Okt 2026
                  </span>
                  {v.spot ? (
                    <Spot id="pakai" className="rounded-lg" labelSide="top">
                      {pakai}
                    </Spot>
                  ) : (
                    pakai
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </AppScreen>
  );
}
