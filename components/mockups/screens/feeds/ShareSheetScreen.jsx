/**
 * Layar: /items → sheet “Bagikan dan hasilkan uang”
 * Kunci di registry: "share-sheet"
 * Spot yang bisa disorot: add-biolink
 */

import {
  Copy,
  Plus,
  QrCode,
  Share2,
} from "lucide-react";
import { Spot } from "@/components/mockups/Spot";
import { SheetFrame, Thumb } from "@/components/mockups/kit";
import { AC } from "@/components/mockups/sample-data";

export default function ShareSheetScreen() {
  const channels = [
    { label: "WhatsApp", cls: "bg-emerald-500" },
    { label: "Telegram", cls: "bg-sky-500" },
    { label: "Twitter", cls: "bg-slate-900" },
    { label: "Salin Link", cls: "bg-slate-200 text-slate-700", icon: Copy },
  ];
  return (
    <SheetFrame title="Bagikan dan hasilkan uang" footer={<span className="flex h-9 items-center justify-center rounded-xl border border-slate-200 text-[12px] font-bold">Tutup</span>}>
      <div className="flex items-center gap-2.5">
        <Thumb product={AC} className="size-12 rounded-lg" />
        <div className="min-w-0">
          <p className="truncate text-[11.5px] font-bold">{AC.name}</p>
          <p className="text-[11px] font-bold text-primary">{AC.price}</p>
        </div>
      </div>
      <div className="mt-3 flex flex-col items-center rounded-xl bg-slate-50 py-3">
        <QrCode className="size-16" strokeWidth={1.3} />
        <p className="mt-1 text-[9.5px] text-slate-500">Scan untuk pembeli</p>
      </div>
      <p className="mt-3 text-[10.5px] font-bold">Bagikan via</p>
      <div className="mt-1.5 grid grid-cols-4 gap-1.5">
        {channels.map((c) => (
          <div key={c.label} className="flex flex-col items-center gap-1">
            <span className={`grid size-9 place-items-center rounded-full text-white ${c.cls}`}>
              {c.icon ? <c.icon className="size-4" /> : <Share2 className="size-4" />}
            </span>
            <span className="text-[8.5px]">{c.label}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[10.5px] font-bold">Tambah Ke Biolink dan Link Afiliasi</p>
      <div className="mt-1.5 flex gap-1.5">
        <Spot id="add-biolink" className="rounded-lg" labelSide="top">
          <span className="flex h-8 items-center gap-1 rounded-lg bg-primary/15 px-2.5 text-[10.5px] font-bold text-primary">
            <Plus className="size-3.5" /> Biolink
          </span>
        </Spot>
        <div className="flex min-w-0 flex-1 items-center justify-between rounded-lg bg-slate-100 pl-2 text-[9.5px] text-slate-500">
          <span className="truncate">konksi.com/sari/x7Kq2P</span>
          <span className="px-2 font-bold text-primary">Salin</span>
        </div>
      </div>
    </SheetFrame>
  );
}
