/**
 * Layar: /missions
 * Kunci di registry: "missions"
 * Spot yang bisa disorot: klaim, kerjakan, tab-tukar
 */

import Image from "next/image";
import {
  ArrowLeft,
  Bookmark,
  CircleCheck,
  Coins,
  Heart,
  Plus,
  Share2,
} from "lucide-react";
import { Spot } from "@/components/mockups/Spot";
import { AppScreen } from "@/components/mockups/kit";

export default function MissionsScreen() {
  const missions = [
    { id: "klaim", name: "Tambah 1 produk ke Bio Link", icon: Plus, done: 1, target: 1, points: 50, state: "claim" },
    { id: "kerjakan", name: "Simpan 3 produk favorit", icon: Bookmark, done: 1, target: 3, points: 30, state: "todo" },
    { id: "m3", name: "Sukai 2 konten di Feeds", icon: Heart, done: 0, target: 2, points: 20, state: "todo" },
    { id: "m4", name: "Bagikan 1 produk", icon: Share2, done: 1, target: 1, points: 40, state: "claimed" },
  ];
  return (
    <AppScreen>
      <div className="bg-primary px-3 pb-10 pt-3 text-white">
        <span className="flex items-center gap-1 text-[10.5px] font-semibold">
          <ArrowLeft className="size-3.5" /> Kembali
        </span>
        <div className="mt-2 flex items-center gap-2">
          <Image
            src={`/img/icons/mascot/mission/${encodeURIComponent("(41% - 60%) Si Konk.png")}`}
            alt=""
            width={64}
            height={64}
            unoptimized
            className="size-16"
          />
          <div>
            <p className="text-[10px] opacity-80">Misi dan hadiah</p>
            <p className="text-[14px] font-extrabold leading-tight">Sudah setengah jalan</p>
          </div>
        </div>
      </div>
      <div className="mx-3 -mt-7 rounded-xl bg-white p-3 shadow-md">
        <div className="flex items-center justify-between text-[10px]">
          <span className="font-bold">Progres misi harian</span>
          <span className="font-bold text-primary">2/4</span>
        </div>
        <div className="mt-1.5 h-2 rounded-full bg-slate-100">
          <div className="h-full w-1/2 rounded-full bg-primary" />
        </div>
        <p className="mt-1.5 text-[9.5px] text-slate-500">Selesaikan 2 misi lagi untuk mengklaim 50 poin hari ini!</p>
      </div>
      <div className="mx-3 mt-3 grid grid-cols-2 rounded-xl bg-slate-200/70 p-1 text-center text-[11px] font-bold">
        <span className="rounded-lg bg-white py-1.5 text-primary shadow-sm">Misi Harian</span>
        <Spot id="tab-tukar" className="rounded-lg">
          <span className="block py-1.5 text-slate-500">Tukar Poin</span>
        </Spot>
      </div>
      <div className="mt-3 space-y-2 px-3">
        {missions.map((m) => {
          const Icon = m.icon;
          const button =
            m.state === "claim" ? (
              <span className="block rounded-lg bg-primary px-2.5 py-1.5 text-[10px] font-bold text-white">Klaim Poin</span>
            ) : m.state === "todo" ? (
              <span className="block rounded-lg border border-primary px-2.5 py-1.5 text-[10px] font-bold text-primary">Kerjakan</span>
            ) : (
              <span className="flex items-center gap-1 px-1 text-[10px] font-bold text-emerald-600">
                <CircleCheck className="size-3.5" /> Tuntas!
              </span>
            );
          return (
            <div key={m.id} className={`flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white p-2.5 ${m.state === "claimed" ? "opacity-60" : ""}`}>
              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary/10">
                <Icon className="size-4 text-primary" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[10.5px] font-bold">{m.name}</p>
                <div className="mt-1 flex items-center gap-1.5">
                  <div className="h-1 flex-1 rounded-full bg-slate-100">
                    <div className="h-full rounded-full bg-amber-400" style={{ width: `${(m.done / m.target) * 100}%` }} />
                  </div>
                  <span className="text-[9px] text-slate-500">
                    {m.done}/{m.target}
                  </span>
                </div>
                <p className="mt-0.5 flex items-center gap-0.5 text-[9px] font-bold text-amber-600">
                  <Coins className="size-2.5" /> +{m.points} Poin
                </p>
              </div>
              {m.id === "klaim" || m.id === "kerjakan" ? (
                <Spot id={m.id} className="rounded-lg" labelSide="bottom">
                  {button}
                </Spot>
              ) : (
                button
              )}
            </div>
          );
        })}
      </div>
    </AppScreen>
  );
}
