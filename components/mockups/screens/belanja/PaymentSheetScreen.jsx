/**
 * Layar: /checkout → sheet “Pilih Metode Pembayaran”
 * Kunci di registry: "payment-sheet"
 * Spot yang bisa disorot: channel
 */

import Image from "next/image";
import {
  Check,
} from "lucide-react";
import { Spot } from "@/components/mockups/Spot";
import { SheetFrame } from "@/components/mockups/kit";

export default function PaymentSheetScreen() {
  const groups = [
    { title: "QRIS", items: [{ name: "QRIS", src: "/assets/img/payment_channels/QR.png" }] },
    {
      title: "E-Wallet",
      items: [
        { name: "OVO", src: "/assets/img/payment_channels/OV.png" },
        { name: "DANA", src: "/assets/img/payment_channels/DA.png" },
        { name: "ShopeePay", src: "/assets/img/payment_channels/SHOPEEPAY.png" },
        { name: "LinkAja", src: "/assets/img/payment_channels/LA.webp" },
      ],
    },
    {
      title: "Virtual Account",
      items: [
        { name: "BRI", src: "/assets/img/payment_channels/BR.png" },
        { name: "BNI", src: "/assets/img/payment_channels/I1.png" },
        { name: "Permata", src: "/assets/img/payment_channels/BT.png" },
        { name: "CIMB Niaga", src: "/assets/img/payment_channels/B1.png" },
      ],
    },
  ];
  return (
    <SheetFrame title="Pilih Metode Pembayaran">
      <div className="space-y-3">
        {groups.map((g) => (
          <div key={g.title}>
            <p className="mb-1.5 text-[10px] font-bold text-slate-500">{g.title}</p>
            <div className="grid grid-cols-2 gap-1.5">
              {g.items.map((item, i) => {
                const selected = g.title === "QRIS" && i === 0;
                const tile = (
                  <span className={`relative flex h-11 items-center justify-center rounded-lg border bg-white px-2 ${selected ? "border-2 border-primary" : "border-slate-200"}`}>
                    <Image src={item.src} alt={item.name} width={80} height={24} unoptimized className="h-5 w-auto max-w-full object-contain" />
                    {selected ? (
                      <span className="absolute -right-1 -top-1 grid size-4 place-items-center rounded-full bg-primary text-white">
                        <Check className="size-2.5" strokeWidth={3} />
                      </span>
                    ) : null}
                  </span>
                );
                return selected ? (
                  <Spot key={item.name} id="channel" className="rounded-lg" labelSide="right">
                    {tile}
                  </Spot>
                ) : (
                  <div key={item.name}>{tile}</div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </SheetFrame>
  );
}
