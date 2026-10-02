/**
 * Layar: /transaction/[tab]/[id]
 * Kunci di registry: "order-detail"
 * Spot yang bisa disorot: status-progress, timeline
 */

import {
  CalendarDays,
  Check,
  CreditCard,
  ChevronLeft,
  Hourglass,
  ReceiptText,
  Store,
  Phone,
  User,
} from "lucide-react";
import { Spot } from "@/components/mockups/Spot";
import { Thumb, Row, DetailCard, DetailInfoRow } from "@/components/mockups/kit";
import { PRODUCTS } from "@/components/mockups/sample-data";

const TX_STEPS = ["Bayar", "Konfirmasi", "Diproses", "Selesai"];

export default function OrderDetailScreen() {
  const step = 1; // status "Menunggu Konfirmasi"
  const logs = [
    { title: "Menunggu konfirmasi mitra", desc: "Mitra sedang memeriksa pesananmu.", time: "30 Sep 2026, 09.15" },
    { title: "Pembayaran berhasil", desc: "Dibayar lewat QRIS.", time: "30 Sep 2026, 09.15" },
    { title: "Pesanan dibuat", desc: "Menunggu pembayaran.", time: "30 Sep 2026, 09.12" },
  ];
  return (
    <div className="flex min-h-full flex-col bg-slate-100/70">
      <div className="sticky top-0 z-10 grid grid-cols-[auto_1fr] items-center gap-2 border-b border-slate-200 bg-white/95 px-3 py-2.5">
        <span className="grid size-7 place-items-center rounded-full border border-slate-200 bg-white text-slate-500">
          <ChevronLeft className="size-3.5" />
        </span>
        <div>
          <p className="text-[12.5px] font-semibold">Detail Transaksi</p>
          <p className="text-[9px] text-slate-500">Pesanan kamu</p>
        </div>
      </div>

      <div className="space-y-2.5 px-3 pb-8 pt-3">
        {/* Status */}
        <section className="rounded-2xl border border-slate-200 bg-white p-3">
          <div className="flex items-start gap-2.5">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-blue-100 text-blue-700">
              <Hourglass className="size-4" />
            </span>
            <div>
              <p className="text-[14px] font-bold leading-tight">Menunggu Konfirmasi</p>
              <p className="mt-0.5 text-[9.5px] leading-relaxed text-slate-500">Pembayaranmu sudah diterima. Mitra sedang memeriksa pesananmu.</p>
            </div>
          </div>
          <Spot id="status-progress" className="mt-3 rounded-lg" labelSide="bottom">
            <ol className="grid grid-cols-4 py-1">
              {TX_STEPS.map((label, i) => {
                const done = i < step;
                const current = i === step;
                return (
                  <li key={label} className="relative flex flex-col items-center text-center">
                    {i > 0 ? <span className={`absolute right-1/2 top-2 h-0.5 w-full ${i <= step ? "bg-primary" : "bg-slate-200"}`} /> : null}
                    <span
                      className={`relative z-10 grid size-4 place-items-center rounded-full border-2 ${
                        done ? "border-primary bg-primary text-white" : current ? "border-primary bg-white" : "border-slate-200 bg-white"
                      }`}
                    >
                      {done ? <Check className="size-2.5" strokeWidth={3} /> : current ? <span className="size-1.5 rounded-full bg-primary" /> : null}
                    </span>
                    <span className={`mt-1 text-[8.5px] ${i <= step ? "font-semibold" : "text-slate-400"}`}>{label}</span>
                  </li>
                );
              })}
            </ol>
          </Spot>
        </section>

        {/* Produk */}
        <DetailCard title="Produk">
          <div className="flex gap-2.5">
            <Thumb product={PRODUCTS[1]} className="size-12 shrink-0 rounded-xl" />
            <div className="min-w-0">
              <p className="text-[11px] font-semibold leading-snug">{PRODUCTS[1].name}</p>
              <p className="text-[9.5px] text-slate-500">60 Menit</p>
              <p className="mt-0.5 flex items-center gap-1 text-[9px] text-slate-500">
                <Store className="size-2.5" /> {PRODUCTS[1].merchant}
              </p>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-1">
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[8.5px] text-slate-500">Jasa</span>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[8.5px] text-slate-500">Home service</span>
            <span className="ml-auto text-[9.5px] text-slate-500">1 × Rp120.000</span>
          </div>
        </DetailCard>

        {/* Jadwal */}
        <DetailCard title="Jadwal layanan" aside={<span className="rounded-full bg-primary/10 px-2 py-0.5 text-[8.5px] font-semibold text-primary">10 hari lagi</span>}>
          <div className="flex items-center gap-2.5">
            <div className="flex w-11 shrink-0 flex-col items-center overflow-hidden rounded-lg border border-slate-200">
              <span className="w-full bg-primary py-0.5 text-center text-[8px] font-bold text-white">OKT</span>
              <span className="py-0.5 text-[16px] font-bold leading-none">10</span>
            </div>
            <div>
              <p className="text-[10.5px] font-semibold">Sabtu, 10 Oktober 2026</p>
              <p className="flex items-center gap-1 text-[9.5px] text-slate-500">
                <CalendarDays className="size-3" /> 10.00 – 11.00
              </p>
            </div>
          </div>
        </DetailCard>

        {/* Pembayaran */}
        <DetailCard
          title="Rincian pembayaran"
          aside={
            <span className="flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[8.5px] font-semibold text-slate-500">
              <CreditCard className="size-2.5" /> QRIS
            </span>
          }
        >
          <Row label="Subtotal produk" value="Rp120.000" />
          <Row label="Diskon afiliator" value="-Rp3.000" tone="text-emerald-600" />
          <div className="mt-1 flex items-baseline justify-between border-t border-dashed border-slate-200 pt-1.5">
            <span className="text-[10.5px] font-semibold">Total</span>
            <span className="text-[13px] font-bold">Rp117.000</span>
          </div>
        </DetailCard>

        {/* Pemesan */}
        <DetailCard title="Data pemesan">
          <div className="divide-y divide-slate-100">
            <DetailInfoRow icon={User} label="Nama">Budi Santoso</DetailInfoRow>
            <DetailInfoRow icon={Phone} label="Nomor HP" copy>
              0812-3456-7890
            </DetailInfoRow>
          </div>
        </DetailCard>

        {/* Riwayat */}
        <Spot id="timeline" className="rounded-2xl" labelSide="top">
          <DetailCard title="Riwayat pesanan" aside={<span className="text-[9px] text-slate-500">{logs.length} aktivitas</span>}>
            <ol>
              {logs.map((log, i) => (
                <li key={log.title} className="relative flex gap-2.5 pb-3 last:pb-0">
                  {i < logs.length - 1 ? <span className="absolute left-[4px] top-3 h-full w-px bg-slate-200" /> : null}
                  <span className={`relative mt-1 size-[9px] shrink-0 rounded-full border-2 ${i === 0 ? "border-primary bg-primary" : "border-slate-200 bg-white"}`} />
                  <div>
                    <p className={`text-[10px] font-semibold ${i === 0 ? "" : "text-slate-500"}`}>{log.title}</p>
                    <p className="text-[9px] text-slate-500">{log.desc}</p>
                    <p className="mt-0.5 text-[8.5px] text-slate-400">{log.time}</p>
                  </div>
                </li>
              ))}
            </ol>
          </DetailCard>
        </Spot>

        {/* Info pesanan */}
        <DetailCard title="Info pesanan">
          <div className="divide-y divide-slate-100">
            <DetailInfoRow icon={ReceiptText} label="Nomor pesanan" copy>
              <span className="font-mono">JK-48213709552</span>
            </DetailInfoRow>
            <DetailInfoRow icon={CalendarDays} label="Waktu pesan">
              30 Sep 2026, 09.12
            </DetailInfoRow>
          </div>
        </DetailCard>
      </div>
    </div>
  );
}
