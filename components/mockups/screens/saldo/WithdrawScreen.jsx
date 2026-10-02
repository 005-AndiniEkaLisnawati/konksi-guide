/**
 * Layar: /withdraw (perkiraan, halaman asli tidak ada di zip)
 * Kunci di registry: "withdraw"
 * Spot yang bisa disorot: withdraw-submit
 */

import {
  Landmark,
} from "lucide-react";
import { Spot } from "@/components/mockups/Spot";
import { AppScreen, AppBar, PrimaryButton } from "@/components/mockups/kit";

export default function WithdrawScreen() {
  return (
    <AppScreen>
      <AppBar title="Tarik Saldo" />
      <div className="space-y-3 p-3">
        <div className="rounded-xl bg-primary p-3 text-white">
          <p className="text-[10px] opacity-80">Saldo Tersedia</p>
          <p className="text-[18px] font-extrabold">Rp245.000</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-[10px] font-semibold text-slate-600">Jumlah Penarikan</p>
          <p className="mt-1 border-b-2 border-primary pb-1 text-[18px] font-extrabold">Rp150.000</p>
          <div className="mt-2 flex gap-1.5">
            {["Rp100.000", "Rp200.000", "Semua"].map((c) => (
              <span key={c} className="rounded-full bg-slate-100 px-2 py-1 text-[9.5px] font-semibold">
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-[10px] font-semibold text-slate-600">Rekening Tujuan</p>
          <div className="mt-1.5 flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-lg bg-slate-100">
              <Landmark className="size-4" />
            </span>
            <div>
              <p className="text-[10.5px] font-bold">BCA •••• 7890</p>
              <p className="text-[9.5px] text-slate-500">Sari Wulandari</p>
            </div>
          </div>
        </div>
        <Spot id="withdraw-submit" className="rounded-xl" labelSide="top">
          <PrimaryButton>Tarik Saldo</PrimaryButton>
        </Spot>
      </div>
    </AppScreen>
  );
}
