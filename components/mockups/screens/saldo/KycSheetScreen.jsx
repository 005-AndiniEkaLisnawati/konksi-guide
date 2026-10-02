/**
 * Layar: /balance → sheet “Verifikasi Identitas”
 * Kunci di registry: "kyc-sheet"
 * Spot yang bisa disorot: kyc-kirim
 */

import {
  CircleCheck,
  ShieldCheck,
} from "lucide-react";
import { Spot } from "@/components/mockups/Spot";
import { SheetFrame, PrimaryButton, Checkbox } from "@/components/mockups/kit";

export default function KycSheetScreen() {
  return (
    <SheetFrame
      footer={
        <Spot id="kyc-kirim" className="rounded-xl" labelSide="top">
          <PrimaryButton>Kirim Dokumen</PrimaryButton>
        </Spot>
      }
    >
      <div className="flex flex-col items-center text-center">
        <span className="grid size-11 place-items-center rounded-full bg-primary/10">
          <ShieldCheck className="size-6 text-primary" />
        </span>
        <p className="mt-2 text-[13px] font-bold">Verifikasi Identitas</p>
        <p className="mt-0.5 text-[11px] font-semibold">Unggah KTP Terlebih Dahulu</p>
        <p className="mt-1 text-[9.5px] text-slate-500">Demi keamanan pencairan dana, Anda diwajibkan untuk mengunggah foto KTP yang valid.</p>
      </div>
      <div className="mt-3 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-primary/40 bg-primary/5 py-4 text-[10px]">
        <span className="flex items-center gap-1 font-bold text-primary">
          <CircleCheck className="size-3.5" /> ktp-sari.jpg
        </span>
        <span className="mt-0.5 text-[9px] text-slate-500">Mendukung JPG/PNG, maksimal ukuran 5MB</span>
      </div>
      <div className="mt-3 flex gap-2 text-[9.5px] text-slate-600">
        <Checkbox />
        <span>
          Saya menyatakan data benar dan menyetujui <b className="text-primary">Syarat &amp; Ketentuan (ToS)</b> pemrosesan data pribadi ini.
        </span>
      </div>
    </SheetFrame>
  );
}
