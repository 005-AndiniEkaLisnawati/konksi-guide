/** Elemen kecil: gambar produk, tombol, kolom isian, centang, baris rincian. */

import {
  Check,
} from "lucide-react";

export function Thumb({ product, className = "" }) {
  const Icon = product.icon;
  return (
    <div className={`grid place-items-center ${product.tone} ${className}`}>
      <Icon className="size-1/2 max-h-12 max-w-12" strokeWidth={1.6} />
    </div>
  );
}

export function PrimaryButton({ children, className = "" }) {
  return (
    <span className={`flex h-9 items-center justify-center gap-1.5 rounded-xl bg-primary px-3 text-[12px] font-bold text-white ${className}`}>
      {children}
    </span>
  );
}

export function Field({ label, value, mono = false }) {
  return (
    <div>
      <p className="mb-1 text-[10px] font-semibold text-slate-600">{label}</p>
      <div className={`rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-[11px] ${mono ? "font-mono" : ""}`}>{value}</div>
    </div>
  );
}

export function Checkbox({ checked = true }) {
  return (
    <span className={`grid size-4 shrink-0 place-items-center rounded border ${checked ? "border-primary bg-primary text-white" : "border-slate-300 bg-white"}`}>
      {checked ? <Check className="size-3" strokeWidth={3} /> : null}
    </span>
  );
}

export function Row({ label, value, tone = "" }) {
  return (
    <div className="flex items-center justify-between py-1 text-[11px]">
      <span className="text-slate-600">{label}</span>
      <span className={`font-semibold ${tone}`}>{value}</span>
    </div>
  );
}
