/**
 * Layar: /items
 * Kunci di registry: "feeds"
 * Spot yang bisa disorot: nav-beranda … nav-profil (menu bawah)
 */

import {
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { AppScreen, CatalogCard } from "@/components/mockups/kit";
import { PRODUCTS } from "@/components/mockups/sample-data";

export default function FeedsScreen() {
  return (
    <AppScreen nav="feeds">
      <div className="sticky top-0 z-10 space-y-2 bg-white px-3 pb-2 pt-3">
        <div className="flex items-center gap-1.5 rounded-xl border border-slate-200 px-2.5 py-2 text-[10.5px] text-slate-400">
          <Search className="size-3.5" /> Cari katalog...
        </div>
        <div className="flex gap-1.5 overflow-hidden">
          <span className="shrink-0 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold text-white">Semua Kategori</span>
          <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-[10px]">Kebersihan</span>
          <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-[10px]">Kesehatan</span>
        </div>
      </div>
      <div className="flex items-center justify-between px-3 py-2 text-[10px]">
        <span>
          Menampilkan <b>24</b> produk
        </span>
        <span className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2 py-1">
          <SlidersHorizontal className="size-3" /> Filter
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 px-3">
        <CatalogCard product={PRODUCTS[0]} shareSpot />
        <CatalogCard product={PRODUCTS[1]} />
        <CatalogCard product={PRODUCTS[2]} />
        <CatalogCard product={PRODUCTS[3]} />
      </div>
    </AppScreen>
  );
}
