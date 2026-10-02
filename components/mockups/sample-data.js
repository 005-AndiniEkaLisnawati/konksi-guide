/**
 * Data contoh yang tampil di layar simulasi (nama produk, harga, mitra).
 * Ubah di sini kalau ingin mengganti contoh produk di semua gambar HP sekaligus.
 */

import { HandHeart, Scissors, Sofa, Wind } from "lucide-react";

export const PRODUCTS = [
  {
    name: "Servis & Cuci AC Rumah",
    merchant: "Dingin Jaya Teknik",
    price: "Rp150.000",
    commission: "Rp15.000",
    rating: "4.9",
    sold: "320",
    city: "Jakarta Selatan",
    icon: Wind,
    tone: "bg-sky-200 text-sky-700",
  },
  {
    name: "Pijat Refleksi 60 Menit",
    merchant: "Sehat Sentosa Spa",
    price: "Rp120.000",
    commission: "Rp12.000",
    rating: "4.8",
    sold: "210",
    city: "Jakarta Timur",
    icon: HandHeart,
    tone: "bg-rose-200 text-rose-700",
  },
  {
    name: "Cuci Sofa & Kasur",
    merchant: "Bersih Kilat",
    price: "Rp200.000",
    commission: "Rp20.000",
    rating: "4.9",
    sold: "150",
    city: "Depok",
    icon: Sofa,
    tone: "bg-amber-200 text-amber-700",
  },
  {
    name: "Potong Rambut Panggilan",
    merchant: "Barber Keliling",
    price: "Rp45.000",
    commission: "Rp5.000",
    rating: "4.7",
    sold: "480",
    city: "Tangerang",
    icon: Scissors,
    tone: "bg-emerald-200 text-emerald-700",
  },
];

/** Produk utama yang dipakai di kebanyakan layar (Servis & Cuci AC). */
export const AC = PRODUCTS[0];
