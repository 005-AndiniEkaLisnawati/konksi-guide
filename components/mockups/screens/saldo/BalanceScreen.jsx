/**
 * Layar: /balance
 * Kunci di registry: "balance"
 * Spot yang bisa disorot: saldo-tersedia, penarikan, riwayat, nav-beranda … nav-profil (menu bawah)
 */

import Image from "next/image";
import {
  Coins,
  CreditCard,
  Landmark,
  Plus,
  History,
} from "lucide-react";
import { Spot } from "@/components/mockups/Spot";
import { AppScreen, Row } from "@/components/mockups/kit";

export default function BalanceScreen() {
  const history = [
    { title: "Penarikan Saldo", sub: "BCA •••• 7890", amount: "− Rp150.000", tone: "text-slate-800", status: "Diproses", badge: "bg-amber-100 text-amber-700" },
    { title: "Komisi: Servis & Cuci AC", sub: "1 Okt 2026", amount: "+ Rp15.000", tone: "text-emerald-600", status: "Berhasil", badge: "bg-emerald-100 text-emerald-700" },
    { title: "Komisi: Pijat Refleksi", sub: "29 Sep 2026", amount: "+ Rp12.000", tone: "text-emerald-600", status: "Berhasil", badge: "bg-emerald-100 text-emerald-700" },
  ];
  return (
    <AppScreen nav="saldo">
      <div className="mx-3 mt-3 grid grid-cols-2 rounded-xl bg-slate-200/70 p-1 text-center text-[11px] font-bold">
        <span className="flex items-center justify-center gap-1 rounded-lg bg-white py-1.5 text-primary shadow-sm">
          <CreditCard className="size-3.5" /> Saldo
        </span>
        <span className="flex items-center justify-center gap-1 py-1.5 text-slate-500">
          <Coins className="size-3.5" /> Poin Konksi
        </span>
      </div>
      <div className="mx-3 mt-3 overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="relative p-3">
          <Spot id="saldo-tersedia" className="inline-block rounded-lg" labelSide="right">
            <div className="pr-1">
              <p className="text-[10px] text-slate-500">Saldo Tersedia</p>
              <p className="text-[19px] font-extrabold">Rp245.000</p>
            </div>
          </Spot>
          <div className="mt-2.5 flex items-center gap-1.5">
            <Spot id="penarikan" className="rounded-lg" labelSide="bottom">
              <span className="flex items-center gap-1 rounded-lg bg-primary px-3 py-1.5 text-[10.5px] font-bold text-white">
                <Plus className="size-3.5" /> Penarikan
              </span>
            </Spot>
            <span className="grid size-7 place-items-center rounded-lg border border-slate-200">
              <History className="size-3.5" />
            </span>
          </div>
          <Image src="/img/illustrations/wallets.png" alt="" width={90} height={90} unoptimized className="absolute -right-1 top-2 size-20 object-contain" />
        </div>
        <p className="bg-primary/10 px-3 py-1.5 text-[9.5px] font-semibold text-primary">Minimum Penarikan: 100.000</p>
      </div>
      <div className="mx-3 mt-3 rounded-xl border border-slate-200 bg-white p-3">
        <p className="text-[11px] font-bold">Rincian Saldo</p>
        <Row label="Saldo tersedia" value="Rp245.000" />
        <Row label="Saldo pending" value="Rp27.000" tone="text-amber-600" />
        <Row label="Total komisi" value="Rp422.000" />
      </div>
      <div className="mx-3 mt-3 rounded-xl border border-slate-200 bg-white p-3">
        <p className="text-[11px] font-bold">Rekening Penarikan</p>
        <div className="mt-1.5 flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-lg bg-slate-100">
            <Landmark className="size-4" />
          </span>
          <div className="flex-1">
            <p className="text-[10.5px] font-bold">BCA</p>
            <p className="text-[9.5px] text-slate-500">•••• 7890 · Sari Wulandari</p>
          </div>
          <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[8.5px] font-bold text-emerald-700">Utama</span>
        </div>
      </div>
      <Spot id="riwayat" className="mx-3 mt-3 rounded-xl" labelSide="top">
        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-[11px] font-bold">Riwayat Transaksi Saldo</p>
          <div className="mt-1 divide-y divide-slate-100">
            {history.map((h) => (
              <div key={h.title} className="flex items-center justify-between py-1.5">
                <div>
                  <p className="text-[10px] font-semibold">{h.title}</p>
                  <p className="text-[9px] text-slate-500">{h.sub}</p>
                </div>
                <div className="text-right">
                  <p className={`text-[10px] font-bold ${h.tone}`}>{h.amount}</p>
                  <span className={`rounded px-1 text-[8px] font-bold ${h.badge}`}>{h.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Spot>
    </AppScreen>
  );
}
