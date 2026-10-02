/**
 * Layar: /missions?tab=rewards → sheet tukar poin
 * Kunci di registry: "redeem-sheet"
 * Spot yang bisa disorot: tukar-btn
 */

import Image from "next/image";
import {
  Coins,
} from "lucide-react";
import { Spot } from "@/components/mockups/Spot";
import { SheetFrame, PrimaryButton, Row } from "@/components/mockups/kit";

export default function RedeemSheetScreen() {
  return (
    <SheetFrame
      title="Tukar Poin"
      footer={
        <Spot id="tukar-btn" className="rounded-xl" labelSide="top">
          <PrimaryButton>
            <Coins className="size-3.5" /> Tukar 1.000 Poin
          </PrimaryButton>
        </Spot>
      }
    >
      <div className="flex overflow-hidden rounded-xl border border-slate-200">
        <div className="grid w-20 place-items-center bg-primary/10 p-2">
          <Image src="/img/icons/mascot/cashback.png" alt="" width={64} height={64} unoptimized className="size-14 object-contain" />
        </div>
        <div className="flex-1 border-l-2 border-dashed border-slate-200 p-2.5">
          <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold text-amber-700">Potongan Harga</span>
          <p className="mt-1 text-[12px] font-extrabold">Potongan Rp1.000</p>
          <p className="text-[9.5px] text-slate-500">Tanpa minimum transaksi</p>
          <p className="mt-1 text-[9px] text-emerald-600">Stok tersedia</p>
        </div>
      </div>
      <p className="mt-3 rounded-lg bg-slate-50 p-2.5 text-[10px] text-slate-600">Satu kali tukar untuk satu kali pakai, khusus akun kamu.</p>
      <div className="mt-3 rounded-lg border border-slate-200 p-2.5">
        <Row label="Saldo sekarang" value="1.250 Poin" />
        <Row label="Ditukar" value="− 1.000 Poin" tone="text-red-500" />
        <div className="mt-1 border-t border-dashed border-slate-200 pt-1">
          <Row label="Sisa saldo" value="250 Poin" tone="text-primary" />
        </div>
      </div>
    </SheetFrame>
  );
}
