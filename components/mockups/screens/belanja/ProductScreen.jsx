/**
 * Layar: /[username]/[id]
 * Kunci di registry: "product"
 * Spot yang bisa disorot: promo-strip, pesan
 */

import {
  BadgeCheck,
  Bookmark,
  ChevronDown,
  MapPin,
  MessageCircle,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Star,
  Wallet,
} from "lucide-react";
import { Spot } from "@/components/mockups/Spot";
import { AppBar, Thumb, PrimaryButton } from "@/components/mockups/kit";
import { AC } from "@/components/mockups/sample-data";

export default function ProductScreen() {
  return (
    <div className="flex min-h-full flex-col bg-slate-50">
      <AppBar
        title="Detail jasa"
        right={
          <span className="relative">
            <ShoppingBag className="size-4" />
            <span className="absolute -right-1.5 -top-1.5 grid size-3.5 place-items-center rounded-full bg-primary text-[7px] font-bold text-white">1</span>
          </span>
        }
      />
      <div className="flex-1">
        <div className="relative">
          <Thumb product={AC} className="aspect-[4/3] w-full" />
          <span className="absolute right-2 top-2 grid size-7 place-items-center rounded-full bg-slate-900/60 text-white">
            <Bookmark className="size-3.5" />
          </span>
        </div>
        <div className="bg-white p-3">
          <p className="text-[13px] font-bold leading-tight">{AC.name}</p>
          <p className="text-[9.5px] text-slate-500">{AC.merchant}</p>
          <p className="mt-1.5 text-[16px] font-extrabold text-primary">
            Rp150.000 <span className="text-[10px] font-normal text-slate-400 line-through">Rp175.000</span>
          </p>
          <p className="mt-1 flex items-center gap-1 text-[9.5px] text-slate-500">
            <Star className="size-3 fill-amber-400 text-amber-400" /> 4.9 · 86 Ulasan · 320 Terjual · <MapPin className="size-3" /> 2,1 Km
          </p>
          <div className="mt-2 flex gap-1.5 overflow-hidden">
            <span className="flex shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[8.5px] text-emerald-700">
              <ShieldCheck className="size-2.5" /> Transaksi Aman
            </span>
            <span className="flex shrink-0 items-center gap-1 rounded-full bg-sky-50 px-2 py-0.5 text-[8.5px] text-sky-700">
              <Wallet className="size-2.5" /> Garansi Uang Kembali
            </span>
          </div>
        </div>
        <div className="mt-2 bg-white p-3">
          <p className="flex items-center justify-between text-[11px] font-bold">
            Deskripsi jasa <ChevronDown className="size-3.5" />
          </p>
          <p className="mt-1 text-[10px] text-slate-600">Cuci AC lengkap: filter, evaporator, dan cek freon. Teknisi datang ke rumah.</p>
        </div>
        <div className="mt-2 flex items-center gap-2 bg-white p-3">
          <span className="grid size-8 place-items-center rounded-full bg-sky-100 text-[10px] font-bold text-sky-700">DJ</span>
          <div className="flex-1">
            <p className="flex items-center gap-1 text-[10.5px] font-bold">
              {AC.merchant} <BadgeCheck className="size-3 text-sky-500" />
            </p>
            <p className="text-[9px] text-slate-500">2,1 Km dari kamu</p>
          </div>
          <span className="flex items-center gap-1 rounded-full border border-slate-200 px-2 py-1 text-[9.5px] font-bold">
            <MessageCircle className="size-3" /> Chat
          </span>
        </div>
        <div className="mt-2 flex items-center gap-2 bg-white px-3 py-2.5 text-[10px]">
          <span className="text-slate-500">Direkomendasikan Oleh</span>
          <span className="grid size-5 place-items-center rounded-full bg-primary text-[8px] font-bold text-white">S</span>
          <b>SARI</b>
        </div>
      </div>
      <div className="sticky bottom-0 z-10">
        <Spot id="promo-strip" className="rounded-md" labelSide="top">
          <div className="flex items-center gap-2 bg-[#48387c] px-3 py-1.5 text-[9.5px] text-white">
            <span className="grid size-5 shrink-0 place-items-center rounded-full bg-amber-400 text-[10px] font-extrabold text-[#48387c]">%</span>
            Temen konksi lagi bagi komisi — kamu bisa hemat sampai Rp3.000 🔥
          </div>
        </Spot>
        <div className="flex gap-1.5 border-t border-slate-200 bg-white px-3 pb-5 pt-2">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-slate-200">
            <ShoppingCart className="size-4" />
          </span>
          <span className="flex h-9 shrink-0 items-center gap-1 rounded-xl border border-primary px-2 text-[10px] font-bold text-primary">
            <MessageCircle className="size-3.5" /> Chat Mitra
          </span>
          <Spot id="pesan" className="flex-1 rounded-xl" labelSide="top">
            <PrimaryButton className="px-1 text-[10px]">Pesan Sekarang • Rp147.000</PrimaryButton>
          </Spot>
        </div>
      </div>
    </div>
  );
}
