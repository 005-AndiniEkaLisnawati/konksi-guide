/**
 * Layar: /profile/my-profile (bagian Pilih Background)
 * Kunci di registry: "my-profile-bg"
 * Spot yang bisa disorot: bg-option, nav-beranda … nav-profil (menu bawah)
 */

import { Spot } from "@/components/mockups/Spot";
import { AppScreen, AppBar, Thumb } from "@/components/mockups/kit";
import { PRODUCTS, AC } from "@/components/mockups/sample-data";

export default function MyProfileBackgroundScreen() {
  const bgs = [
    "bg-slate-200",
    "bg-gradient-to-b from-violet-400 to-fuchsia-300",
    "bg-gradient-to-b from-amber-200 to-rose-300",
    "bg-gradient-to-b from-emerald-200 to-sky-300",
    "bg-[radial-gradient(#745EAE_1.5px,transparent_1.5px)] [background-size:8px_8px] bg-violet-50",
    "bg-gradient-to-b from-slate-700 to-slate-900",
  ];
  return (
    <AppScreen nav="profil">
      <AppBar title="Tampilan Profil" subtitle="Atur tampilan profil kamu!" />
      <div className="space-y-3 p-3">
        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-[12px] font-bold">Pilih Background</p>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {bgs.map((cls, i) => {
              const tile = (
                <div className={`relative aspect-[9/16] rounded-lg border-2 ${i === 1 ? "scale-95 border-primary" : "border-slate-200"} ${cls}`}>
                  {i === 0 ? <span className="absolute inset-x-0 bottom-1 text-center text-[8.5px] font-semibold">Default</span> : null}
                </div>
              );
              return i === 1 ? (
                <Spot key={cls} id="bg-option" className="rounded-lg" labelSide="bottom">
                  {tile}
                </Spot>
              ) : (
                <div key={cls}>{tile}</div>
              );
            })}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-[12px] font-bold">Live Preview</p>
          <p className="text-[9.5px] text-slate-500">Tampilan Ponsel</p>
          <div className="mx-auto mt-2 w-32 overflow-hidden rounded-2xl border-4 border-slate-900 bg-gradient-to-b from-violet-400 to-fuchsia-300 pb-3">
            <div className="h-8 bg-white/40" />
            <div className="-mt-4 flex flex-col items-center">
              <span className="grid size-8 place-items-center rounded-full border-2 border-white bg-primary text-[11px] font-bold text-white">S</span>
              <p className="mt-0.5 text-[9px] font-bold text-white">Sari Wulandari</p>
              <p className="text-[7.5px] text-white/90">@sari</p>
            </div>
            <div className="mx-2 mt-2 space-y-1">
              <div className="flex items-center gap-1 rounded-md bg-white p-1">
                <Thumb product={AC} className="size-5 rounded" />
                <span className="truncate text-[7px] font-semibold">{AC.name}</span>
              </div>
              <div className="flex items-center gap-1 rounded-md bg-white p-1">
                <Thumb product={PRODUCTS[1]} className="size-5 rounded" />
                <span className="truncate text-[7px] font-semibold">{PRODUCTS[1].name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppScreen>
  );
}
