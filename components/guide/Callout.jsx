import { Lightbulb, TriangleAlert } from "lucide-react";

const VARIANTS = {
  tip: {
    title: "Tips Penting!",
    icon: Lightbulb,
    box: "bg-sun-soft",
    badge: "bg-sun text-ink",
  },
  warning: {
    title: "Hati-hati!",
    icon: TriangleAlert,
    box: "bg-coral-soft",
    badge: "bg-coral text-white",
  },
};

export default function Callout({ type = "tip", children, className = "" }) {
  const v = VARIANTS[type] ?? VARIANTS.tip;
  const Icon = v.icon;
  return (
    <aside className={`flex gap-3.5 rounded-2xl border-2 border-ink p-4 sm:p-5 ${v.box} ${className}`} role="note">
      <span className={`grid size-11 shrink-0 place-items-center rounded-xl border-2 border-ink ${v.badge}`}>
        <Icon className="size-6" strokeWidth={2.4} aria-hidden="true" />
      </span>
      <div>
        <p className="text-base font-extrabold uppercase tracking-wide">{v.title}</p>
        <p className="mt-0.5 text-lg leading-relaxed">{children}</p>
      </div>
    </aside>
  );
}
