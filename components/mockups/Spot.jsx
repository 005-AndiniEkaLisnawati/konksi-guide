"use client";

import { createContext, useContext } from "react";
import { Hand } from "lucide-react";

export const SpotContext = createContext({ active: null, label: "", onTap: null, tapped: false });

const LABEL_POS = {
  bottom: "top-full mt-2.5 left-1/2 -translate-x-1/2",
  top: "bottom-full mb-2.5 left-1/2 -translate-x-1/2",
  left: "right-full mr-2.5 top-1/2 -translate-y-1/2",
  right: "left-full ml-2.5 top-1/2 -translate-y-1/2",
};

const FINGER_POS = {
  bottom: "-bottom-5 -right-3",
  top: "-top-5 -right-3",
};

/**
 * Bagian layar mockup yang bisa disorot.
 * Jika `id` sama dengan `spot` aktif di <AppMockup>, bagian ini diberi lingkaran sorot berdenyut,
 * jari menunjuk, dan label kecil. Beri `className` dengan `rounded-*` supaya bentuk sorotan pas.
 */
export function Spot({ id, children, className = "", labelSide = "bottom", fingerSide = "bottom", as: Tag = "div" }) {
  const { active, label, onTap, tapped } = useContext(SpotContext);

  if (active !== id) return <Tag className={className}>{children}</Tag>;

  return (
    <Tag data-spot-active="true" className={`relative z-20 ${className}`}>
      <span aria-hidden="true" className="pointer-events-none absolute -inset-1.5 rounded-[inherit] border-[3px] border-sun animate-spot-ping" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-1.5 rounded-[inherit] border-[3px] border-sun shadow-[0_0_0_3px_rgba(31,22,51,0.9),0_0_0_999px_rgba(31,22,51,0.12)]"
      />
      {children}
      {onTap ? (
        <button
          type="button"
          tabIndex={-1}
          onClick={onTap}
          aria-hidden="true"
          className="absolute -inset-1.5 z-30 cursor-pointer rounded-[inherit]"
        />
      ) : null}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute z-30 grid size-8 place-items-center rounded-full bg-sun text-ink ring-2 ring-ink animate-tap ${FINGER_POS[fingerSide]}`}
      >
        <Hand className="size-[18px]" strokeWidth={2.5} />
      </span>
      {label ? (
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute z-30 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-extrabold ${
            tapped ? "bg-mint text-white" : "bg-ink text-sun"
          } ${LABEL_POS[labelSide]}`}
        >
          {tapped ? "Bagus! ✓" : label}
        </span>
      ) : null}
    </Tag>
  );
}
