"use client";

import Image from "next/image";

const MASCOT_DIR = "/img/icons/mascot";

/**
 * Daftar pose maskot. Setiap pose memakai aset dari /public/img/icons/mascot/.
 * Untuk menambah pose baru: taruh gambar di folder itu lalu tambahkan entri di sini.
 */
export const MASCOT_POSES = {
  welcome: {
    src: `${MASCOT_DIR}/saves.png`,
    alt: "Si Konk si kubus ungu dan Sisi si bola putih melambai menyapa",
    characters: "Si Konk & Sisi",
  },
  pointing: {
    src: `${MASCOT_DIR}/mission/(21% - 40%) Sisi.png`,
    alt: "Sisi si bola putih menunjuk ke layar aplikasi",
    characters: "Sisi",
  },
  warning: {
    src: `${MASCOT_DIR}/products.png`,
    alt: "Si Konk memeriksa dengan kaca pembesar, Sisi memperhatikan",
    characters: "Si Konk & Sisi",
  },
  success: {
    src: `${MASCOT_DIR}/mission/(81% - 100%) Si Konk & Sisi.png`,
    alt: "Si Konk dan Sisi tos merayakan di depan peti harta",
    characters: "Si Konk & Sisi",
  },
  shopping: {
    src: `${MASCOT_DIR}/transaction.png`,
    alt: "Si Konk mendorong troli belanja berisi Sisi",
    characters: "Si Konk & Sisi",
  },
  money: {
    src: `${MASCOT_DIR}/cashback.png`,
    alt: "Si Konk berselancar di atas koin, Sisi menangkap koin berjatuhan",
    characters: "Si Konk & Sisi",
  },
  // Pose tambahan untuk topik tertentu
  discount: {
    src: `${MASCOT_DIR}/discount.png`,
    alt: "Si Konk memeluk simbol persen diskon, Sisi menunjuk ke atas",
    characters: "Si Konk & Sisi",
  },
  gift: {
    src: `${MASCOT_DIR}/mission/(41% - 60%) Si Konk.png`,
    alt: "Si Konk berlari membawa kado",
    characters: "Si Konk",
  },
  coin: {
    src: `${MASCOT_DIR}/mission/(0% - 20%) Si Konk.png`,
    alt: "Si Konk memegang sebuah koin emas",
    characters: "Si Konk",
  },
  cheer: {
    src: `${MASCOT_DIR}/mission/(61% - 80%) Sisi.png`,
    alt: "Sisi melompat gembira di antara koin",
    characters: "Sisi",
  },
};

/** Memilih pose otomatis berdasarkan topik panduan. */
const TOPIC_POSES = [
  { pose: "money", words: ["saldo", "komisi", "tarik", "uang", "rekening", "bank", "cashback"] },
  { pose: "discount", words: ["voucher", "diskon", "promo", "kode"] },
  { pose: "gift", words: ["misi", "poin", "hadiah", "tukar"] },
  { pose: "shopping", words: ["beli", "belanja", "keranjang", "checkout", "bayar"] },
  { pose: "pointing", words: ["bio link", "biolink", "tampilan", "tema", "produk"] },
  { pose: "warning", words: ["lacak", "status", "pesanan", "hati-hati"] },
];

export function poseForTopic(topic = "") {
  const text = topic.toLowerCase();
  return TOPIC_POSES.find((t) => t.words.some((w) => text.includes(w)))?.pose ?? "welcome";
}

const SIZES = {
  sm: "w-24 sm:w-28",
  md: "w-36 sm:w-44",
  lg: "w-48 sm:w-60",
  xl: "w-60 sm:w-80 lg:w-[24rem]",
};

/**
 * Maskot Konksi dengan pose dinamis dan (opsional) balon ucapan.
 *
 * @param {string}  pose     welcome | pointing | warning | success | shopping | money | discount | gift | coin | cheer
 * @param {string}  topic    jika `pose` kosong, pose dipilih otomatis dari teks topik
 * @param {string}  message  isi balon ucapan (opsional)
 * @param {"left"|"right"|"top"} bubble  posisi balon ucapan terhadap maskot
 */
export default function MascotGuide({
  pose,
  topic,
  message,
  bubble = "right",
  size = "md",
  float = true,
  priority = false,
  className = "",
}) {
  const key = pose && MASCOT_POSES[pose] ? pose : poseForTopic(topic);
  const data = MASCOT_POSES[key];

  const figure = (
    <div className={`relative shrink-0 ${SIZES[size] ?? SIZES.md}`}>
      <Image
        src={encodeURI(data.src)}
        alt={data.alt}
        width={500}
        height={500}
        priority={priority}
        sizes="(min-width: 640px) 320px, 240px"
        className={`h-auto w-full select-none drop-shadow-[0_10px_0_rgba(31,22,51,0.08)] ${float ? "animate-float" : ""}`}
        draggable={false}
      />
    </div>
  );

  if (!message) return <div className={className}>{figure}</div>;

  const layout = {
    right: "flex-row items-center",
    left: "flex-row-reverse items-center",
    top: "flex-col-reverse items-center",
  }[bubble];

  const tail = {
    right: "-left-2.5 top-1/2 -translate-y-1/2 border-b-[2.5px] border-l-[2.5px]",
    left: "-right-2.5 top-1/2 -translate-y-1/2 border-t-[2.5px] border-r-[2.5px]",
    top: "-bottom-2.5 left-1/2 -translate-x-1/2 border-b-[2.5px] border-r-[2.5px]",
  }[bubble];

  return (
    <div className={`flex gap-3 ${layout} ${className}`}>
      {figure}
      <div className="relative max-w-xs rounded-2xl bg-card px-4 py-3 text-ink brut-sm">
        <span aria-hidden="true" className={`absolute size-4 rotate-45 border-ink bg-card ${tail}`} />
        <p className="relative text-xs font-extrabold uppercase tracking-wider text-primary">{data.characters} bilang:</p>
        <p className="relative mt-0.5 font-semibold leading-snug">{message}</p>
      </div>
    </div>
  );
}
