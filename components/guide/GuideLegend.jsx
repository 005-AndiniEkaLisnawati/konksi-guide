import Container from "@/components/shared/Container";

/** Warna kotak per `tone` (lihat tipe LegendItem di content/schema.js). */
const TONE_BOX = {
  primary: "bg-lilac",
  sun: "bg-sun-soft",
  info: "bg-sky-100",
  mint: "bg-mint-soft",
  coral: "bg-coral-soft",
};

const TONE_DOT = {
  primary: "bg-primary",
  sun: "bg-amber-400",
  info: "bg-sky-500",
  mint: "bg-mint",
  coral: "bg-coral",
};

/** Kotak keterangan tambahan di bawah langkah (field `legend` di file panduan). */
export default function GuideLegend({ legend }) {
  return (
    <Container as="section" aria-labelledby="judul-keterangan" className="mt-16">
      <div className="rounded-3xl bg-card p-6 brut sm:p-8">
        <h2 id="judul-keterangan" className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          {legend.title}
        </h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {legend.items.map((item) => (
            <li key={item.label} className={`flex gap-4 rounded-2xl border-2 border-ink p-4 ${TONE_BOX[item.tone] ?? "bg-lilac"}`}>
              <span aria-hidden="true" className={`mt-1.5 size-4 shrink-0 rounded-full border-2 border-ink ${TONE_DOT[item.tone] ?? "bg-primary"}`} />
              <div>
                <p className="text-lg font-extrabold">{item.label}</p>
                <p className="text-lg leading-relaxed">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
