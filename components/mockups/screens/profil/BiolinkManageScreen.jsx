/**
 * Layar: /profile/biolink
 * Kunci di registry: "biolink-manage"
 * Spot yang bisa disorot: block-menu, nav-beranda … nav-profil (menu bawah)
 */

import {
  Eye,
  GripVertical,
  Link2,
  MoreHorizontal,
  Pencil,
  Plus,
  Power,
  Trash2,
} from "lucide-react";
import { Spot } from "@/components/mockups/Spot";
import { AppScreen, AppBar, PrimaryButton } from "@/components/mockups/kit";

export default function BiolinkManageScreen() {
  const blocks = [
    { title: "Servis & Cuci AC Rumah", type: "Afiliasi" },
    { title: "Pijat Refleksi 60 Menit", type: "Afiliasi" },
    { title: "Instagram Saya", type: "Tautan" },
  ];
  return (
    <AppScreen nav="profil">
      <AppBar
        title="Biolink"
        right={
          <span className="flex items-center gap-1 rounded-lg bg-slate-100 px-2 py-1 text-[10px] font-semibold">
            <Eye className="size-3" /> Preview
          </span>
        }
      />
      <div className="space-y-3 p-3">
        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-[11px] font-bold">Biolink Saya</p>
          <div className="mt-1.5 flex items-center justify-between rounded-lg bg-slate-50 px-2 py-1.5 text-[10px]">
            https://konksi.com/sari <span className="font-bold text-primary">Salin</span>
          </div>
        </div>
        <div>
          <p className="text-[12px] font-bold">Daftar Blok</p>
          <p className="text-[9.5px] text-slate-500">Tahan &amp; geser ikon untuk mengurutkan posisi</p>
          <div className="mt-2 space-y-1.5">
            {blocks.map((b, i) => (
              <div key={b.title} className="relative">
                <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2">
                  <GripVertical className="size-3.5 text-slate-400" />
                  <span className="grid size-7 place-items-center rounded-lg bg-primary/10">
                    <Link2 className="size-3.5 text-primary" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[10.5px] font-bold">{b.title}</p>
                    <p className="text-[9px] text-slate-500">{b.type}</p>
                  </div>
                  {i === 0 ? (
                    <Spot id="block-menu" className="rounded-md" labelSide="left">
                      <span className="grid size-6 place-items-center rounded-md bg-slate-100">
                        <MoreHorizontal className="size-3.5" />
                      </span>
                    </Spot>
                  ) : (
                    <span className="grid size-6 place-items-center">
                      <MoreHorizontal className="size-3.5 text-slate-500" />
                    </span>
                  )}
                </div>
                {i === 0 ? (
                  <div className="absolute right-1 top-full z-10 mt-1 w-32 rounded-lg border border-slate-200 bg-white py-1 text-[10px] shadow-lg">
                    <p className="flex items-center gap-1.5 px-2.5 py-1.5"><Pencil className="size-3" /> Ubah</p>
                    <p className="flex items-center gap-1.5 px-2.5 py-1.5"><Power className="size-3" /> Sembunyikan</p>
                    <p className="flex items-center gap-1.5 px-2.5 py-1.5 text-red-500"><Trash2 className="size-3" /> Hapus</p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
        <PrimaryButton>
          <Plus className="size-3.5" /> Tambah Blok Baru
        </PrimaryButton>
      </div>
    </AppScreen>
  );
}
