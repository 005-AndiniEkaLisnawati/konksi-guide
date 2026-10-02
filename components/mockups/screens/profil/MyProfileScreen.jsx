/**
 * Layar: /profile/my-profile (bagian Edit Profil)
 * Kunci di registry: "my-profile"
 * Spot yang bisa disorot: save-profile, banner-upload, color-picker, nav-beranda … nav-profil (menu bawah)
 */

import {
  Camera,
  Copy,
  Upload,
  Save,
} from "lucide-react";
import { Spot } from "@/components/mockups/Spot";
import { AppScreen, AppBar, Field } from "@/components/mockups/kit";

export default function MyProfileScreen() {
  return (
    <AppScreen nav="profil">
      <AppBar title="Tampilan Profil" subtitle="Atur tampilan profil kamu!" />
      <div className="space-y-3 p-3">
        <div className="flex items-center justify-between rounded-xl bg-primary/10 px-2.5 py-2 text-[10px]">
          <span>
            Biolink: <b>konksi.com/sari</b>
          </span>
          <Copy className="size-3 text-primary" />
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <div className="flex items-center justify-between">
            <p className="text-[12px] font-bold">Edit Profil</p>
            <Spot id="save-profile" className="rounded-lg" labelSide="left">
              <span className="flex items-center gap-1 rounded-lg bg-primary px-2.5 py-1.5 text-[10px] font-bold text-white">
                <Save className="size-3" /> Simpan
              </span>
            </Spot>
          </div>
          <p className="mb-1 mt-3 text-[10px] font-semibold text-slate-600">Banner Halaman</p>
          <Spot id="banner-upload" className="rounded-lg">
            <div className="flex h-16 flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 text-[9.5px] text-slate-500">
              <Upload className="mb-0.5 size-4" /> Klik untuk upload banner
              <span className="text-[8.5px]">* 1200 x 628 px</span>
            </div>
          </Spot>
          <p className="mb-1 mt-3 text-[10px] font-semibold text-slate-600">Foto Profil</p>
          <div className="flex items-center gap-2.5">
            <span className="relative grid size-12 place-items-center rounded-full bg-primary/20 text-[15px] font-bold text-primary">
              S
              <span className="absolute -bottom-0.5 -right-0.5 grid size-4 place-items-center rounded-full bg-primary text-white">
                <Camera className="size-2.5" />
              </span>
            </span>
            <span className="rounded-lg border border-slate-200 px-2.5 py-1 text-[10px] font-bold">Upload</span>
          </div>
          <div className="mt-3 space-y-2.5">
            <Field label="Nama Lengkap" value="Sari Wulandari" />
            <Field label="Username" value="@sari" />
            <Field label="Bio / Tentang Kamu" value="Ibu rumah tangga, suka berbagi jasa terpercaya ✨" />
          </div>
          <p className="mb-1 mt-3 text-[10px] font-semibold text-slate-600">Warna Teks &amp; Aksen</p>
          <Spot id="color-picker" className="rounded-lg" labelSide="top">
            <div className="flex items-center gap-2 rounded-lg border border-slate-200 p-1.5">
              <span className="size-7 rounded-md bg-primary" />
              <span className="font-mono text-[10.5px]">#745EAE</span>
            </div>
          </Spot>
          <p className="mb-1 mt-3 text-[10px] font-semibold text-slate-600">Tautan Sosial Media</p>
          <Field label="" value="instagram.com/sari.wulan" />
        </div>
      </div>
    </AppScreen>
  );
}
