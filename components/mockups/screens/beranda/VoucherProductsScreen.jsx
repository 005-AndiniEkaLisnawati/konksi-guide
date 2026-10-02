/**
 * Layar: /rewards/vouchers → sheet “Produk Berlaku Voucher”
 * Kunci di registry: "voucher-products"
 * Spot yang bisa disorot: pilih-produk
 */

import {
  ChevronRight,
  Ticket,
} from "lucide-react";
import { Spot } from "@/components/mockups/Spot";
import { SheetFrame, Thumb } from "@/components/mockups/kit";
import { PRODUCTS } from "@/components/mockups/sample-data";

export default function VoucherProductsScreen() {
  return (
    <SheetFrame
      title={
        <span className="flex items-center gap-1.5">
          <Ticket className="size-4 text-primary" /> Produk Berlaku Voucher
        </span>
      }
      subtitle={
        <>
          Gunakan kode <b className="font-mono text-primary">HEMAT10</b> untuk produk di bawah ini:
        </>
      }
    >
      <div className="space-y-2">
        {PRODUCTS.map((p, i) => {
          const pilih = (
            <span className="flex items-center gap-0.5 rounded-lg bg-primary/10 px-2 py-1 text-[10px] font-bold text-primary">
              Pilih <ChevronRight className="size-3" />
            </span>
          );
          return (
            <div key={p.name} className="flex items-center gap-2 rounded-xl border border-slate-200 p-2">
              <Thumb product={p} className="size-11 shrink-0 rounded-lg" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[10.5px] font-bold">{p.name}</p>
                <p className="truncate text-[9px] text-slate-500">{p.merchant}</p>
                <p className="text-[10px] font-bold text-primary">{p.price}</p>
              </div>
              {i === 0 ? (
                <Spot id="pilih-produk" className="rounded-lg" labelSide="left">
                  {pilih}
                </Spot>
              ) : (
                pilih
              )}
            </div>
          );
        })}
      </div>
    </SheetFrame>
  );
}
