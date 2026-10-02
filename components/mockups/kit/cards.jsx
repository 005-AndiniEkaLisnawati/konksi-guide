/** Kartu yang dipakai di beberapa layar. */

import {
  BadgeCheck,
  Copy,
  Minus,
  Plus,
  Share2,
  Star,
} from "lucide-react";
import { Spot } from "@/components/mockups/Spot";
import { SheetFrame } from "./frame";
import { Thumb, PrimaryButton } from "./controls";
import { AC } from "@/components/mockups/sample-data";

export function CatalogCard({ product, shareSpot = false }) {
  const share = (
    <span className="grid size-7 place-items-center rounded-md bg-white shadow">
      <Share2 className="size-3.5 text-slate-700" />
    </span>
  );
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="relative">
        <Thumb product={product} className="aspect-square w-full" />
        <div className="absolute bottom-1.5 right-1.5">
          {shareSpot ? (
            <Spot id="share-btn" className="rounded-md" labelSide="left">
              {share}
            </Spot>
          ) : (
            share
          )}
        </div>
      </div>
      <div className="space-y-0.5 p-2">
        <p className="line-clamp-2 text-[11px] font-bold leading-tight">{product.name}</p>
        <p className="flex items-center gap-0.5 text-[9px] text-slate-500">
          <Star className="size-2.5 fill-amber-400 text-amber-400" /> {product.rating}/5 · {product.sold} Terjual
        </p>
        <p className="text-[10px]">
          Mulai <b>{product.price}</b>
        </p>
        <p className="flex items-center gap-0.5 truncate text-[9px] text-slate-500">
          <BadgeCheck className="size-2.5 text-sky-500" /> {product.merchant}
        </p>
      </div>
      <div className="bg-emerald-50 px-2 py-1 text-[9px] text-emerald-700">
        Komisi s.d. <b>{product.commission}</b>
      </div>
    </div>
  );
}

export function VariantSheet({ cta, spotId }) {
  return (
    <SheetFrame
      footer={
        <Spot id={spotId} className="rounded-xl" labelSide="top">
          <PrimaryButton>{cta}</PrimaryButton>
        </Spot>
      }
    >
      <div className="flex gap-3">
        <Thumb product={AC} className="size-16 rounded-lg" />
        <div>
          <p className="text-[15px] font-extrabold text-primary">Rp150.000</p>
          <p className="text-[10px] text-slate-500">Stok: 12</p>
          <p className="text-[10px] text-slate-500">Pilihan: 1 Unit AC</p>
        </div>
      </div>
      <p className="mt-4 text-[11px] font-bold">Pilih Varian</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        <span className="rounded-lg border-2 border-primary bg-primary/10 px-2.5 py-1.5 text-[10.5px] font-bold text-primary">1 Unit AC</span>
        <span className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[10.5px]">2 Unit AC</span>
        <span className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[10.5px] opacity-40">3 Unit AC</span>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-[11px] font-bold">Jumlah</p>
        <div className="flex items-center gap-3">
          <span className="grid size-7 place-items-center rounded-lg border border-slate-200 text-slate-300">
            <Minus className="size-3.5" />
          </span>
          <span className="w-4 text-center text-[13px] font-bold">1</span>
          <span className="grid size-7 place-items-center rounded-lg border border-slate-200">
            <Plus className="size-3.5" />
          </span>
        </div>
      </div>
    </SheetFrame>
  );
}

export function DetailCard({ title, aside, children }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-3">
      {title ? (
        <div className="mb-2 flex items-center justify-between gap-2">
          <p className="text-[11px] font-bold">{title}</p>
          {aside}
        </div>
      ) : null}
      {children}
    </section>
  );
}

export function DetailInfoRow({ icon: Icon, label, children, copy = false }) {
  return (
    <div className="flex items-start gap-2.5 py-1.5">
      <Icon className="mt-0.5 size-3.5 shrink-0 text-slate-400" />
      <div className="min-w-0 flex-1">
        <p className="text-[9px] text-slate-500">{label}</p>
        <div className="text-[10.5px] font-medium">{children}</div>
      </div>
      {copy ? (
        <span className="grid size-6 shrink-0 place-items-center text-slate-400">
          <Copy className="size-3" />
        </span>
      ) : null}
    </div>
  );
}
