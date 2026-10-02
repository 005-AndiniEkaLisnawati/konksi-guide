/**
 * Layar: /items → sheet “Tambah katalog ke biolink Kamu”
 * Kunci di registry: "biolink-form"
 * Spot yang bisa disorot: save-btn, discount-slider, layout-picker
 */

import Image from "next/image";
import { Spot } from "@/components/mockups/Spot";
import { SheetFrame, PrimaryButton, Field } from "@/components/mockups/kit";
import { AC } from "@/components/mockups/sample-data";

export default function BiolinkFormScreen() {
  const layouts = [
    { label: "Default", src: "/img/block_layouts/default.svg" },
    { label: "Grid", src: "/img/block_layouts/grid.svg" },
    { label: "Besar", src: "/img/block_layouts/large-image.svg" },
    { label: "Compact", src: "/img/block_layouts/compact.svg" },
  ];
  return (
    <SheetFrame
      title="Tambah katalog ke biolink Kamu"
      footer={
        <div className="flex gap-2">
          <span className="flex h-9 flex-1 items-center justify-center rounded-xl border border-slate-200 text-[12px] font-bold">Batal</span>
          <Spot id="save-btn" className="flex-1 rounded-xl" labelSide="top">
            <PrimaryButton>Simpan</PrimaryButton>
          </Spot>
        </div>
      }
    >
      <div className="grid grid-cols-2 gap-2">
        <Field label="MITRA" value={AC.merchant} />
        <Field label="ITEM" value="Servis AC" />
        <Field label="HARGA" value={AC.price} />
        <Field label="KOMISI" value={AC.commission} />
      </div>
      <p className="mt-4 text-[11px] font-bold">Alokasi Diskon Komisi</p>
      <Spot id="discount-slider" className="mt-1.5 rounded-lg">
        <div className="rounded-lg bg-slate-50 p-2.5">
          <p className="text-[9.5px] font-semibold text-slate-500">PERSENTASE DISKON (20%)</p>
          <div className="relative mt-2.5 h-1.5 rounded-full bg-slate-200">
            <div className="h-full w-1/5 rounded-full bg-primary" />
            <span className="absolute left-1/5 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary bg-white" />
          </div>
          <p className="mt-2 text-[9.5px] font-semibold text-red-500">Rp3.000 dari Komisi: Rp15.000</p>
        </div>
      </Spot>
      <p className="mt-4 text-[11px] font-bold">Layout Blok</p>
      <Spot id="layout-picker" className="mt-1.5 rounded-lg" labelSide="top">
        <div className="grid grid-cols-4 gap-1.5">
          {layouts.map((l, i) => (
            <div key={l.label} className="flex flex-col items-center gap-1">
              <span className={`rounded-lg border-2 bg-white p-1 ${i === 0 ? "border-primary ring-2 ring-primary/30" : "border-slate-200"}`}>
                <Image src={l.src} alt="" width={42} height={54} unoptimized className="h-[54px] w-[42px]" />
              </span>
              <span className={`text-[9px] ${i === 0 ? "font-bold text-primary" : ""}`}>{l.label}</span>
            </div>
          ))}
        </div>
      </Spot>
    </SheetFrame>
  );
}
