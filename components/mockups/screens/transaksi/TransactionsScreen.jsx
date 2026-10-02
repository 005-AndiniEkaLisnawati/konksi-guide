/**
 * Layar: /transaction
 * Kunci di registry: "transactions"
 * Spot yang bisa disorot: tab-pesanan, filter, status-badge, bayar-pending, nav-beranda … nav-profil (menu bawah)
 */

import {
  Clock,
  ExternalLink,
  ScrollText,
  SlidersHorizontal,
  ClipboardClock,
  Calendar,
} from "lucide-react";
import { Spot } from "@/components/mockups/Spot";
import { AppScreen } from "@/components/mockups/kit";
import { AC } from "@/components/mockups/sample-data";

// Gaya label status di daftar transaksi (sama dengan getStatusStyle di konksi-app).
const LIST_STATUS_STYLE = {
  Pending: "bg-slate-100 text-slate-600",
  Berhasil: "border border-emerald-200 bg-emerald-50 text-emerald-600",
  Dibatalkan: "border border-slate-200 bg-slate-50 text-slate-600",
};

export default function TransactionsScreen() {
  const orders = [
    { name: "Servis & Cuci AC Rumah", merchant: AC.merchant, variant: "1 Unit AC", price: "136.500", status: "Pending", date: "01 Okt 2026, 09.12", pending: true },
    { name: "Pijat Refleksi 60 Menit", merchant: "Sehat Sentosa Spa", variant: "60 Menit", price: "117.000", status: "Pending", date: "30 Sep 2026, 09.15", spot: true },
    { name: "Cuci Sofa & Kasur", merchant: "Bersih Kilat", variant: "Sofa 3 Dudukan", price: "200.000", status: "Berhasil", date: "21 Sep 2026, 14.02" },
    { name: "Potong Rambut Panggilan", merchant: "Barber Keliling", variant: "Dewasa", price: "45.000", status: "Dibatalkan", date: "12 Sep 2026, 10.40" },
  ];
  return (
    <AppScreen nav="transaksi">
      <div className="sticky top-0 z-10 grid grid-cols-2 border-b border-slate-200 bg-white text-center text-[11px] font-bold">
        <Spot id="tab-pesanan" className="rounded-md">
          <span className="flex items-center justify-center gap-1.5 border-b-2 border-primary py-2.5 text-primary">
            <ScrollText className="size-3.5" /> Pesanan Kamu
          </span>
        </Spot>
        <span className="flex items-center justify-center gap-1.5 border-b-2 border-transparent py-2.5 text-slate-500">
          <ClipboardClock className="size-3.5 text-slate-400" /> Afiliasi
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between px-3 py-1.5">
        <b className="text-[10.5px] text-slate-900">4 Transaksi</b>
        <Spot id="filter" className="rounded-lg" labelSide="left">
          <span className="flex items-center gap-1.5 px-2 py-1 text-[10.5px] font-semibold text-slate-700">
            <SlidersHorizontal className="size-3.5" /> Filter
          </span>
        </Spot>
      </div>
      <div className="mt-1 space-y-2.5 px-3">
        {orders.map((o) => {
          const badge = <span className={`block rounded-md px-2 py-1 text-[8.5px] font-bold ${LIST_STATUS_STYLE[o.status]}`}>{o.status}</span>;
          return (
            <div key={o.name} className="rounded-sm border border-slate-200 bg-white p-3 shadow-2xs">
              <div className="flex items-center gap-2">
                <div className="min-w-0 flex-1 pr-1">
                  <p className="truncate text-[11px] font-bold text-slate-900">{o.name}</p>
                  <p className="mt-0.5 truncate text-[9.5px] font-semibold text-slate-700">{o.merchant}</p>
                  <p className="mt-0.5 truncate text-[9px] text-slate-500">{o.variant}</p>
                  <p className="mt-2 flex items-center gap-1 text-[8.5px] text-slate-500">
                    <Calendar className="size-2.5" /> {o.date}
                  </p>
                </div>
                <div className="flex min-h-[64px] shrink-0 flex-col items-end justify-between">
                  {o.spot ? (
                    <Spot id="status-badge" className="rounded-md" labelSide="left">
                      {badge}
                    </Spot>
                  ) : (
                    badge
                  )}
                  <p className="text-[11px] font-bold text-slate-900">IDR {o.price}</p>
                </div>
              </div>
              {o.pending ? (
                <div className="mt-2 flex items-center justify-between gap-2 rounded-sm border border-primary/20 bg-primary/10 p-2">
                  <div className="flex min-w-0 items-center gap-2">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary/20">
                      <Clock className="size-3 text-black" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-[9.5px] font-bold text-black">Menunggu Pembayaran</p>
                      <p className="text-[9.5px] font-bold text-red-500">Bayar dlm 12:48</p>
                    </div>
                  </div>
                  <Spot id="bayar-pending" className="rounded" labelSide="bottom">
                    <span className="flex items-center gap-1 rounded bg-primary px-2.5 py-1.5 text-[9.5px] font-bold text-white">
                      Bayar <ExternalLink className="size-2.5" />
                    </span>
                  </Spot>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </AppScreen>
  );
}
