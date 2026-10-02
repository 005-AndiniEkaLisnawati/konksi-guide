/**
 * Layar: /balance → sheet “Informasi Rekening”
 * Kunci di registry: "bank-sheet"
 * Spot yang bisa disorot: simpan-rek
 */

import {
  ChevronDown,
} from "lucide-react";
import { Spot } from "@/components/mockups/Spot";
import { SheetFrame, PrimaryButton, Field, Checkbox } from "@/components/mockups/kit";

export default function BankSheetScreen() {
  return (
    <SheetFrame
      title="Informasi Rekening"
      footer={
        <div className="flex gap-2">
          <span className="flex h-9 flex-1 items-center justify-center rounded-xl border border-slate-200 text-[12px] font-bold">Tutup</span>
          <Spot id="simpan-rek" className="flex-[1.6] rounded-xl" labelSide="top">
            <PrimaryButton>Simpan Rekening</PrimaryButton>
          </Spot>
        </div>
      }
    >
      <div className="space-y-2.5">
        <Field label="BANK TUJUAN" value={<span className="flex items-center justify-between">BCA <ChevronDown className="size-3" /></span>} />
        <Field label="NOMOR REKENING" value="1234567890" mono />
        <Field label="NAMA PEMILIK" value="Sari Wulandari" />
      </div>
      <p className="mt-3 rounded-lg bg-amber-50 p-2.5 text-[9.5px] text-amber-800">
        <b>Perhatian:</b> Rekening hanya dapat didaftarkan satu kali. Pastikan seluruh data sudah benar.
      </p>
      <div className="mt-3 flex gap-2 text-[9.5px] text-slate-600">
        <Checkbox />
        <span>Saya menyetujui Syarat &amp; Ketentuan (ToS) untuk verifikasi dan penarikan saldo KONKSI.</span>
      </div>
    </SheetFrame>
  );
}
