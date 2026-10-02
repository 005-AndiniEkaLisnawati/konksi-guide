/**
 * POSE MASKOT (Si Konk & Sisi)
 * Gambar ada di public/img/icons/mascot/.
 * Menambah pose: taruh gambarnya di folder itu, tambahkan entri di MASCOT_POSES,
 * lalu tambahkan namanya di tipe MascotPose (content/schema.js).
 */

const MASCOT_DIR = "/img/icons/mascot";

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
  hero: {
    src: `${MASCOT_DIR}/hero.png`,
    alt: "Sisi dan Si Konk melompat gembira di antara koin",
    characters: "Sisi & Si Konk",
  },
};

/** Pose otomatis berdasarkan kata di topik (dipakai kalau komponen diberi `topic`, bukan `pose`). */
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
