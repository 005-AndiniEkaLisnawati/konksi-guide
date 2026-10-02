import Container from "@/components/shared/Container";

/** Kotak garis putus-putus "Cara membaca panduan ini" di atas daftar langkah. */
export default function ReadingHint() {
  return (
    <Container className="mt-10">
      <p className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-2xl border-2 border-dashed border-ink/40 px-5 py-4 text-lg">
        <span className="font-extrabold">Cara membaca panduan ini:</span>
        ikuti nomor dari atas ke bawah. Bagian yang <span className="highlighter font-bold">berkedip kuning</span> di gambar HP adalah tombol yang harus kamu tekan.
      </p>
    </Container>
  );
}
