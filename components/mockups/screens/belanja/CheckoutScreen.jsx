/**
 * Layar: /checkout
 * Kunci di registry: "checkout"
 * Spot yang bisa disorot: buyer-info, time-slot, apply-voucher, bayar
 */

import {
  CalendarDays,
  ChevronRight,
  CircleCheck,
  CreditCard,
  Lock,
} from "lucide-react";
import { Spot } from "@/components/mockups/Spot";
import { AppBar, Thumb, PrimaryButton, Field, Checkbox, Row } from "@/components/mockups/kit";
import { AC } from "@/components/mockups/sample-data";

export default function CheckoutScreen() {
  const slots = ["08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"];
  return (
    <div className="flex min-h-full flex-col bg-slate-100">
      <AppBar title="Checkout" />
      <p className="bg-white px-3 pb-2 text-[9px] text-slate-400">
        Detail › <b className="text-slate-700">Checkout</b> › Pembayaran
      </p>
      <div className="flex-1 space-y-2">
        <div className="flex gap-2.5 bg-white p-3">
          <Thumb product={AC} className="size-14 shrink-0 rounded-lg" />
          <div className="min-w-0">
            <p className="text-[9px] text-slate-500">
              {AC.merchant} <span className="rounded bg-slate-100 px-1 font-bold">JASA</span>
            </p>
            <p className="truncate text-[11px] font-bold">{AC.name}</p>
            <p className="text-[9.5px] text-slate-500">1 Unit AC · 1×</p>
            <p className="text-[11px] font-bold">Rp150.000</p>
          </div>
        </div>

        <div className="space-y-2 bg-white p-3">
          <p className="text-[11.5px] font-bold">Info Pemesan</p>
          <Spot id="buyer-info" className="rounded-md" labelSide="bottom">
            <span className="flex items-center gap-2 text-[10.5px] font-semibold">
              <Checkbox /> Gunakan data diri yang terdaftar
            </span>
          </Spot>
          <div className="space-y-2 pt-1">
            <Field label="Nama Lengkap" value="Budi Santoso" />
            <Field label="Nomor WhatsApp/Ponsel" value="0812-3456-7890" />
          </div>
        </div>

        <div className="bg-white p-3">
          <p className="text-[11.5px] font-bold">Tanggal &amp; Waktu</p>
          <div className="mt-2 flex items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-2 text-[10.5px]">
            <CalendarDays className="size-3.5 text-primary" /> Sabtu, 10 Oktober 2026
          </div>
          <p className="mt-2.5 flex justify-between text-[10px] font-semibold">
            Waktu <span className="font-normal text-slate-500">7 slot tersedia</span>
          </p>
          <div className="mt-1.5 grid grid-cols-4 gap-1.5">
            {slots.map((s, i) => {
              const cls =
                i === 2
                  ? "bg-primary text-white font-bold border-primary"
                  : i === 0
                    ? "bg-slate-100 text-slate-300 border-slate-100"
                    : "bg-white border-slate-200";
              const chip = <span className={`block rounded-lg border py-1.5 text-center text-[10px] ${cls}`}>{s}</span>;
              return i === 2 ? (
                <Spot key={s} id="time-slot" className="rounded-lg" labelSide="bottom">
                  {chip}
                </Spot>
              ) : (
                <div key={s}>{chip}</div>
              );
            })}
          </div>
        </div>

        <div className="bg-white p-3">
          <p className="text-[11.5px] font-bold">Ringkasan Pembayaran</p>
          <p className="mt-1.5 rounded-lg bg-slate-50 p-2 text-[9.5px] text-slate-600">🥳 Kamu dapet diskon Rp3.000 dari afiliator Sari.</p>
          <div className="mt-1.5">
            <Row label="Subtotal" value="Rp150.000" />
            <Row label="Diskon Afiliator" value="- Rp3.000" tone="text-emerald-600" />
            <Row label="Diskon" value="- Rp15.000" tone="text-emerald-600" />
            <Row label="Biaya Layanan" value="Rp4.500" />
            <div className="mt-1 flex items-center justify-between border-t border-slate-100 pt-1.5">
              <span className="text-[11px] font-bold">Total</span>
              <span className="text-[14px] font-extrabold text-primary">Rp136.500</span>
            </div>
          </div>
          <p className="mt-3 text-[10px] font-semibold">Punya kode promo?</p>
          <div className="mt-1 flex items-center gap-1.5 rounded-lg bg-slate-100 py-1 pl-2.5 pr-1">
            <span className="flex-1 font-mono text-[11px] font-bold text-emerald-700">HEMAT10</span>
            <Spot id="apply-voucher" className="rounded-md" labelSide="left">
              <span className="grid size-7 place-items-center rounded-md bg-primary text-white">
                <CircleCheck className="size-4" />
              </span>
            </Spot>
          </div>
          <p className="mt-1 text-[9.5px] font-semibold text-emerald-600">Voucher berhasil dipakai — hemat Rp15.000</p>
          <div className="mt-3 flex items-center gap-2 rounded-lg border border-slate-200 p-2.5">
            <CreditCard className="size-4 text-primary" />
            <div className="flex-1">
              <p className="text-[8.5px] text-slate-500">Metode Pembayaran</p>
              <p className="text-[10.5px] font-semibold">QRIS</p>
            </div>
            <ChevronRight className="size-3.5 text-slate-400" />
          </div>
          <p className="mt-2 flex items-center justify-center gap-1 text-[8.5px] text-slate-400">
            <Lock className="size-2.5" /> Semua pembayaran kamu dilindungi dengan enkripsi RSA.
          </p>
        </div>
      </div>
      <div className="sticky bottom-0 z-10 space-y-2 border-t border-slate-200 bg-white px-3 pb-5 pt-2">
        <span className="flex items-center gap-2 text-[9.5px]">
          <Checkbox /> Saya setuju dengan <b className="text-primary">Syarat &amp; Ketentuan</b>
        </span>
        <Spot id="bayar" className="rounded-xl" labelSide="top">
          <PrimaryButton>Bayar • Rp136.500</PrimaryButton>
        </Spot>
      </div>
    </div>
  );
}
