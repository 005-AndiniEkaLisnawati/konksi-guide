/** Kerangka layar: isi halaman, header aplikasi, menu bawah, dan bottom sheet. */

import {
  ArrowLeft,
  Compass,
  House,
  Receipt,
  User,
  Wallet,
} from "lucide-react";
import { Spot } from "@/components/mockups/Spot";

export function AppScreen({ children, nav, bg = "bg-slate-50" }) {
  return (
    <div className={`flex min-h-full flex-col ${bg}`}>
      <div className="flex-1 pb-3">{children}</div>
      {nav ? <BottomNav active={nav} /> : null}
    </div>
  );
}

export function AppBar({ title, subtitle, back = true, right = null }) {
  return (
    <div className="sticky top-0 z-10 flex items-center gap-2 border-b border-slate-100 bg-white px-3 py-2.5">
      {back ? (
        <span className="grid size-7 place-items-center rounded-full bg-slate-100">
          <ArrowLeft className="size-4" />
        </span>
      ) : null}
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] font-bold">{title}</p>
        {subtitle ? <p className="text-[10px] text-slate-500">{subtitle}</p> : null}
      </div>
      {right}
    </div>
  );
}

const NAV_ITEMS = [
  { key: "beranda", label: "Beranda", icon: House },
  { key: "feeds", label: "Feeds", icon: Compass },
  { key: "transaksi", label: "Transaksi", icon: Receipt },
  { key: "saldo", label: "Saldo", icon: Wallet },
  { key: "profil", label: "Profil", icon: User },
];

export function BottomNav({ active }) {
  return (
    <nav className="sticky bottom-0 z-10 flex justify-around border-t border-slate-200 bg-white/95 px-1 pb-4 pt-1.5">
      {NAV_ITEMS.map(({ key, label, icon: Icon }) => {
        const on = key === active;
        return (
          <Spot key={key} id={`nav-${key}`} labelSide="top" fingerSide="top" className="rounded-xl">
            <span className={`flex w-11 flex-col items-center gap-0.5 ${on ? "font-bold text-primary" : "text-slate-500"}`}>
              <span className={`rounded-lg p-1 ${on ? "bg-primary/10" : ""}`}>
                <Icon className="size-4" strokeWidth={on ? 2.5 : 2} />
              </span>
              <span className="text-[9px] leading-none">{label}</span>
            </span>
          </Spot>
        );
      })}
    </nav>
  );
}

export function SheetFrame({ title, subtitle, children, footer }) {
  return (
    <div className="flex min-h-full flex-col bg-[#2b2342]">
      {/* bayangan halaman di belakang sheet */}
      <div aria-hidden="true" className="space-y-2 px-3 pb-3 pt-3 opacity-25">
        <div className="h-3 w-24 rounded bg-white" />
        <div className="h-16 rounded-lg bg-white" />
      </div>
      <div className="flex flex-1 flex-col rounded-t-[20px] bg-white">
        <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-slate-300" />
        {title ? (
          <div className="border-b border-slate-100 px-3.5 pb-2.5 pt-2">
            <p className="text-[13px] font-bold">{title}</p>
            {subtitle ? <p className="mt-0.5 text-[10.5px] text-slate-500">{subtitle}</p> : null}
          </div>
        ) : null}
        <div className="flex-1 px-3.5 py-3">{children}</div>
        {footer ? <div className="sticky bottom-0 border-t border-slate-100 bg-white px-3.5 pb-5 pt-2.5">{footer}</div> : null}
      </div>
    </div>
  );
}
