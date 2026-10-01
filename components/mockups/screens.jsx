"use client";

/**
 * Simulasi layar aplikasi Konksi untuk <AppMockup>.
 * Teks & susunan mengikuti aplikasi asli (konksi-app). Bagian yang bisa disorot
 * dibungkus <Spot id="...">; id tersebut dipakai di lib/guides-data.js (field `spot`).
 */

import Image from "next/image";
import {
  ArrowLeft,
  BadgeCheck,
  Bookmark,
  CalendarDays,
  Camera,
  Check,
  ChevronDown,
  ChevronRight,
  CircleCheck,
  Clock,
  Coins,
  Compass,
  Copy,
  CreditCard,
  ExternalLink,
  Eye,
  Gift,
  GripVertical,
  Heart,
  House,
  Info,
  Landmark,
  Link,
  Link2,
  Lock,
  MapPin,
  MessageCircle,
  MessageCircleMore,
  Minus,
  MoreHorizontal,
  Palette,
  Pencil,
  Plus,
  Power,
  QrCode,
  Receipt,
  ScrollText,
  Search,
  Share2,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  SlidersHorizontal,
  Sofa,
  Sparkles,
  Star,
  ClipboardClock,
  Calendar,
  ChevronLeft,
  Hourglass,
  ReceiptText,
  Store,
  Phone,
  Ticket,
  TicketPercent,
  Trash2,
  Upload,
  User,
  Wallet,
  Wind,
  Scissors,
  HandHeart,
  Bell,
  History,
  Save,
} from "lucide-react";
import { Spot } from "@/components/mockups/Spot";

// ---------------------------------------------------------------------------
//  Data contoh
// ---------------------------------------------------------------------------

const PRODUCTS = [
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

const AC = PRODUCTS[0];

// ---------------------------------------------------------------------------
//  Komponen kecil
// ---------------------------------------------------------------------------

function Thumb({ product, className = "" }) {
  const Icon = product.icon;
  return (
    <div className={`grid place-items-center ${product.tone} ${className}`}>
      <Icon className="size-1/2 max-h-12 max-w-12" strokeWidth={1.6} />
    </div>
  );
}

function AppScreen({ children, nav, bg = "bg-slate-50" }) {
  return (
    <div className={`flex min-h-full flex-col ${bg}`}>
      <div className="flex-1 pb-3">{children}</div>
      {nav ? <BottomNav active={nav} /> : null}
    </div>
  );
}

function AppBar({ title, subtitle, back = true, right = null }) {
  return (
    <div className="sticky top-0 z-10 flex items-center gap-2 border-b border-slate-100 bg-white px-3 py-2.5">
      {back ? (
        <span className="grid size-7 place-items-center rounded-full bg-slate-100">
          <ArrowLeft className="size-4" />
        </span>
      ) : null}
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] font-bold">{title}</p>
        {subtitle ? <p className="text-[10px] text-slate-500">{subtitle}</p> : null}
      </div>
      {right}
    </div>
  );
}

const NAV_ITEMS = [
  { key: "beranda", label: "Beranda", icon: House },
  { key: "feeds", label: "Feeds", icon: Compass },
  { key: "transaksi", label: "Transaksi", icon: Receipt },
  { key: "saldo", label: "Saldo", icon: Wallet },
  { key: "profil", label: "Profil", icon: User },
];

function BottomNav({ active }) {
  return (
    <nav className="sticky bottom-0 z-10 flex justify-around border-t border-slate-200 bg-white/95 px-1 pb-4 pt-1.5">
      {NAV_ITEMS.map(({ key, label, icon: Icon }) => {
        const on = key === active;
        return (
          <Spot key={key} id={`nav-${key}`} labelSide="top" fingerSide="top" className="rounded-xl">
            <span className={`flex w-11 flex-col items-center gap-0.5 ${on ? "font-bold text-primary" : "text-slate-500"}`}>
              <span className={`rounded-lg p-1 ${on ? "bg-primary/10" : ""}`}>
                <Icon className="size-4" strokeWidth={on ? 2.5 : 2} />
              </span>
              <span className="text-[9px] leading-none">{label}</span>
            </span>
          </Spot>
        );
      })}
    </nav>
  );
}

function SheetFrame({ title, subtitle, children, footer }) {
  return (
    <div className="flex min-h-full flex-col bg-[#2b2342]">
      {/* bayangan halaman di belakang sheet */}
      <div aria-hidden="true" className="space-y-2 px-3 pb-3 pt-3 opacity-25">
        <div className="h-3 w-24 rounded bg-white" />
        <div className="h-16 rounded-lg bg-white" />
      </div>
      <div className="flex flex-1 flex-col rounded-t-[20px] bg-white">
        <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-slate-300" />
        {title ? (
          <div className="border-b border-slate-100 px-3.5 pb-2.5 pt-2">
            <p className="text-[13px] font-bold">{title}</p>
            {subtitle ? <p className="mt-0.5 text-[10.5px] text-slate-500">{subtitle}</p> : null}
          </div>
        ) : null}
        <div className="flex-1 px-3.5 py-3">{children}</div>
        {footer ? <div className="sticky bottom-0 border-t border-slate-100 bg-white px-3.5 pb-5 pt-2.5">{footer}</div> : null}
      </div>
    </div>
  );
}

function PrimaryButton({ children, className = "" }) {
  return (
    <span className={`flex h-9 items-center justify-center gap-1.5 rounded-xl bg-primary px-3 text-[12px] font-bold text-white ${className}`}>
      {children}
    </span>
  );
}

function Field({ label, value, mono = false }) {
  return (
    <div>
      <p className="mb-1 text-[10px] font-semibold text-slate-600">{label}</p>
      <div className={`rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-[11px] ${mono ? "font-mono" : ""}`}>{value}</div>
    </div>
  );
}

function Checkbox({ checked = true }) {
  return (
    <span className={`grid size-4 shrink-0 place-items-center rounded border ${checked ? "border-primary bg-primary text-white" : "border-slate-300 bg-white"}`}>
      {checked ? <Check className="size-3" strokeWidth={3} /> : null}
    </span>
  );
}

function Row({ label, value, tone = "" }) {
  return (
    <div className="flex items-center justify-between py-1 text-[11px]">
      <span className="text-slate-600">{label}</span>
      <span className={`font-semibold ${tone}`}>{value}</span>
    </div>
  );
}

function CatalogCard({ product, shareSpot = false }) {
  const share = (
    <span className="grid size-7 place-items-center rounded-md bg-white shadow">
      <Share2 className="size-3.5 text-slate-700" />
    </span>
  );
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="relative">
        <Thumb product={product} className="aspect-square w-full" />
        <div className="absolute bottom-1.5 right-1.5">
          {shareSpot ? (
            <Spot id="share-btn" className="rounded-md" labelSide="left">
              {share}
            </Spot>
          ) : (
            share
          )}
        </div>
      </div>
      <div className="space-y-0.5 p-2">
        <p className="line-clamp-2 text-[11px] font-bold leading-tight">{product.name}</p>
        <p className="flex items-center gap-0.5 text-[9px] text-slate-500">
          <Star className="size-2.5 fill-amber-400 text-amber-400" /> {product.rating}/5 · {product.sold} Terjual
        </p>
        <p className="text-[10px]">
          Mulai <b>{product.price}</b>
        </p>
        <p className="flex items-center gap-0.5 truncate text-[9px] text-slate-500">
          <BadgeCheck className="size-2.5 text-sky-500" /> {product.merchant}
        </p>
      </div>
      <div className="bg-emerald-50 px-2 py-1 text-[9px] text-emerald-700">
        Komisi s.d. <b>{product.commission}</b>
      </div>
    </div>
  );
}

function VariantSheet({ cta, spotId }) {
  return (
    <SheetFrame
      footer={
        <Spot id={spotId} className="rounded-xl" labelSide="top">
          <PrimaryButton>{cta}</PrimaryButton>
        </Spot>
      }
    >
      <div className="flex gap-3">
        <Thumb product={AC} className="size-16 rounded-lg" />
        <div>
          <p className="text-[15px] font-extrabold text-primary">Rp150.000</p>
          <p className="text-[10px] text-slate-500">Stok: 12</p>
          <p className="text-[10px] text-slate-500">Pilihan: 1 Unit AC</p>
        </div>
      </div>
      <p className="mt-4 text-[11px] font-bold">Pilih Varian</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        <span className="rounded-lg border-2 border-primary bg-primary/10 px-2.5 py-1.5 text-[10.5px] font-bold text-primary">1 Unit AC</span>
        <span className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[10.5px]">2 Unit AC</span>
        <span className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[10.5px] opacity-40">3 Unit AC</span>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-[11px] font-bold">Jumlah</p>
        <div className="flex items-center gap-3">
          <span className="grid size-7 place-items-center rounded-lg border border-slate-200 text-slate-300">
            <Minus className="size-3.5" />
          </span>
          <span className="w-4 text-center text-[13px] font-bold">1</span>
          <span className="grid size-7 place-items-center rounded-lg border border-slate-200">
            <Plus className="size-3.5" />
          </span>
        </div>
      </div>
    </SheetFrame>
  );
}

// ---------------------------------------------------------------------------
//  Layar: Afiliator
// ---------------------------------------------------------------------------

function HomeScreen() {
  const days = [1, 2, 3, 4, 5, 6, 7];
  return (
    <AppScreen nav="beranda">
      <div className="bg-gradient-to-b from-primary/15 to-transparent px-3 pb-3 pt-3">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] text-slate-600">Hai, Sari! 👋</p>
            <p className="text-[15px] font-extrabold leading-tight">
              Bangun Relasi, Raih <span className="text-primary">Komisi</span>
            </p>
          </div>
          <div className="flex gap-1.5">
            <Spot id="voucher-icon" className="rounded-full" labelSide="left">
              <span className="grid size-8 place-items-center rounded-full bg-white shadow-sm">
                <TicketPercent className="size-4 text-primary" />
              </span>
            </Spot>
            <span className="grid size-8 place-items-center rounded-full bg-white shadow-sm">
              <MessageCircleMore className="size-4 text-primary" />
            </span>
          </div>
        </div>
        <div className="mt-3 flex gap-1.5">
          <div className="flex flex-1 items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-2.5 py-2 text-[10.5px] text-slate-400">
            <Search className="size-3.5" /> Cari layanan...
          </div>
          <span className="grid size-9 place-items-center rounded-xl border border-slate-200 bg-white">
            <Bookmark className="size-3.5" />
          </span>
        </div>
        <div className="mt-3 grid grid-cols-2 divide-x divide-slate-100 rounded-xl bg-white p-2.5 shadow-sm">
          <div>
            <p className="text-[9.5px] text-slate-500">Saldo Komisi</p>
            <p className="text-[13px] font-extrabold">Rp245.000</p>
          </div>
          <div className="pl-2.5">
            <p className="text-[9.5px] text-slate-500">Poin Konksi</p>
            <p className="flex items-center gap-1 text-[13px] font-extrabold">
              <Coins className="size-3.5 text-amber-500" /> 1.250 Poin
            </p>
          </div>
        </div>
      </div>

      <div className="mx-3 rounded-xl border border-slate-200 bg-white p-3">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-[12px] font-bold">Daily Check-in</p>
            <p className="text-[9.5px] text-slate-500">Kumpulkan poin harianmu sekarang</p>
          </div>
          <Spot id="checkin" className="rounded-lg" labelSide="left">
            <span className="block rounded-lg bg-primary px-3 py-1.5 text-[10.5px] font-bold text-white">Check-in</span>
          </Spot>
        </div>
        <div className="mt-3 flex justify-between">
          {days.map((d) => (
            <div key={d} className="flex flex-col items-center gap-1">
              <span
                className={`grid size-6 place-items-center rounded-full ${
                  d < 3 ? "bg-primary text-white" : d === 3 ? "animate-bounce-slow bg-amber-400 text-white" : d === 7 ? "bg-gradient-to-br from-primary to-amber-400 text-white" : "bg-slate-100 text-slate-300"
                }`}
              >
                {d < 3 ? <Check className="size-3" strokeWidth={3} /> : d === 7 ? <Gift className="size-3" /> : <Coins className="size-3" />}
              </span>
              <span className="text-[8px] text-slate-500">Hari {d}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-dashed border-slate-200 pt-2.5">
          <div>
            <p className="text-[11px] font-bold">Misi Hari Ini</p>
            <p className="text-[9.5px] text-slate-500">Selesaikan misi untuk ekstra poin!</p>
          </div>
          <Spot id="lihat-misi" className="rounded-md" labelSide="top">
            <span className="flex items-center text-[10.5px] font-bold text-primary">
              Lihat Misi <ChevronRight className="size-3.5" />
            </span>
          </Spot>
        </div>
      </div>

      <p className="mx-3 mt-4 text-[12px] font-bold">Komisi Tinggi</p>
      <div className="mt-2 grid grid-cols-2 gap-2 px-3">
        <CatalogCard product={PRODUCTS[2]} />
        <CatalogCard product={PRODUCTS[0]} />
      </div>
    </AppScreen>
  );
}

function FeedsScreen() {
  return (
    <AppScreen nav="feeds">
      <div className="sticky top-0 z-10 space-y-2 bg-white px-3 pb-2 pt-3">
        <div className="flex items-center gap-1.5 rounded-xl border border-slate-200 px-2.5 py-2 text-[10.5px] text-slate-400">
          <Search className="size-3.5" /> Cari katalog...
        </div>
        <div className="flex gap-1.5 overflow-hidden">
          <span className="shrink-0 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold text-white">Semua Kategori</span>
          <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-[10px]">Kebersihan</span>
          <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-[10px]">Kesehatan</span>
        </div>
      </div>
      <div className="flex items-center justify-between px-3 py-2 text-[10px]">
        <span>
          Menampilkan <b>24</b> produk
        </span>
        <span className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2 py-1">
          <SlidersHorizontal className="size-3" /> Filter
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 px-3">
        <CatalogCard product={PRODUCTS[0]} shareSpot />
        <CatalogCard product={PRODUCTS[1]} />
        <CatalogCard product={PRODUCTS[2]} />
        <CatalogCard product={PRODUCTS[3]} />
      </div>
    </AppScreen>
  );
}

function ShareSheetScreen() {
  const channels = [
    { label: "WhatsApp", cls: "bg-emerald-500" },
    { label: "Telegram", cls: "bg-sky-500" },
    { label: "Twitter", cls: "bg-slate-900" },
    { label: "Salin Link", cls: "bg-slate-200 text-slate-700", icon: Copy },
  ];
  return (
    <SheetFrame title="Bagikan dan hasilkan uang" footer={<span className="flex h-9 items-center justify-center rounded-xl border border-slate-200 text-[12px] font-bold">Tutup</span>}>
      <div className="flex items-center gap-2.5">
        <Thumb product={AC} className="size-12 rounded-lg" />
        <div className="min-w-0">
          <p className="truncate text-[11.5px] font-bold">{AC.name}</p>
          <p className="text-[11px] font-bold text-primary">{AC.price}</p>
        </div>
      </div>
      <div className="mt-3 flex flex-col items-center rounded-xl bg-slate-50 py-3">
        <QrCode className="size-16" strokeWidth={1.3} />
        <p className="mt-1 text-[9.5px] text-slate-500">Scan untuk pembeli</p>
      </div>
      <p className="mt-3 text-[10.5px] font-bold">Bagikan via</p>
      <div className="mt-1.5 grid grid-cols-4 gap-1.5">
        {channels.map((c) => (
          <div key={c.label} className="flex flex-col items-center gap-1">
            <span className={`grid size-9 place-items-center rounded-full text-white ${c.cls}`}>
              {c.icon ? <c.icon className="size-4" /> : <Share2 className="size-4" />}
            </span>
            <span className="text-[8.5px]">{c.label}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[10.5px] font-bold">Tambah Ke Biolink dan Link Afiliasi</p>
      <div className="mt-1.5 flex gap-1.5">
        <Spot id="add-biolink" className="rounded-lg" labelSide="top">
          <span className="flex h-8 items-center gap-1 rounded-lg bg-primary/15 px-2.5 text-[10.5px] font-bold text-primary">
            <Plus className="size-3.5" /> Biolink
          </span>
        </Spot>
        <div className="flex min-w-0 flex-1 items-center justify-between rounded-lg bg-slate-100 pl-2 text-[9.5px] text-slate-500">
          <span className="truncate">konksi.com/sari/x7Kq2P</span>
          <span className="px-2 font-bold text-primary">Salin</span>
        </div>
      </div>
    </SheetFrame>
  );
}

function BiolinkFormScreen() {
  const layouts = [
    { label: "Default", src: "/img/block_layouts/default.svg" },
    { label: "Grid", src: "/img/block_layouts/grid.svg" },
    { label: "Besar", src: "/img/block_layouts/large-image.svg" },
    { label: "Compact", src: "/img/block_layouts/compact.svg" },
  ];
  return (
    <SheetFrame
      title="Tambah katalog ke biolink Kamu"
      footer={
        <div className="flex gap-2">
          <span className="flex h-9 flex-1 items-center justify-center rounded-xl border border-slate-200 text-[12px] font-bold">Batal</span>
          <Spot id="save-btn" className="flex-1 rounded-xl" labelSide="top">
            <PrimaryButton>Simpan</PrimaryButton>
          </Spot>
        </div>
      }
    >
      <div className="grid grid-cols-2 gap-2">
        <Field label="MITRA" value={AC.merchant} />
        <Field label="ITEM" value="Servis AC" />
        <Field label="HARGA" value={AC.price} />
        <Field label="KOMISI" value={AC.commission} />
      </div>
      <p className="mt-4 text-[11px] font-bold">Alokasi Diskon Komisi</p>
      <Spot id="discount-slider" className="mt-1.5 rounded-lg">
        <div className="rounded-lg bg-slate-50 p-2.5">
          <p className="text-[9.5px] font-semibold text-slate-500">PERSENTASE DISKON (20%)</p>
          <div className="relative mt-2.5 h-1.5 rounded-full bg-slate-200">
            <div className="h-full w-1/5 rounded-full bg-primary" />
            <span className="absolute left-1/5 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary bg-white" />
          </div>
          <p className="mt-2 text-[9.5px] font-semibold text-red-500">Rp3.000 dari Komisi: Rp15.000</p>
        </div>
      </Spot>
      <p className="mt-4 text-[11px] font-bold">Layout Blok</p>
      <Spot id="layout-picker" className="mt-1.5 rounded-lg" labelSide="top">
        <div className="grid grid-cols-4 gap-1.5">
          {layouts.map((l, i) => (
            <div key={l.label} className="flex flex-col items-center gap-1">
              <span className={`rounded-lg border-2 bg-white p-1 ${i === 0 ? "border-primary ring-2 ring-primary/30" : "border-slate-200"}`}>
                <Image src={l.src} alt="" width={42} height={54} unoptimized className="h-[54px] w-[42px]" />
              </span>
              <span className={`text-[9px] ${i === 0 ? "font-bold text-primary" : ""}`}>{l.label}</span>
            </div>
          ))}
        </div>
      </Spot>
    </SheetFrame>
  );
}

function ProfileScreen() {
  const menu = [
    { id: "menu-tampilan", label: "Tampilan Profil", icon: User },
    { id: "menu-biolink", label: "Biolink", icon: Link },
    { id: "menu-personalisasi", label: "Personalisasi", icon: Palette },
    { id: "menu-statistik", label: "Statistik", icon: Sparkles },
    { id: "menu-tersimpan", label: "Tersimpan", icon: Bookmark },
    { id: "menu-data", label: "Data Diri", icon: ShieldCheck },
  ];
  return (
    <AppScreen nav="profil">
      <AppBar title="Profil" back={false} />
      <div className="p-3">
        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-[12px] font-bold">Selamat datang di Affiliate!</p>
          <div className="mt-1 flex items-center gap-1.5 text-[10px] text-sky-600">
            https://konksi.com/sari <Copy className="size-3 text-slate-500" />
          </div>
        </div>
        <div className="mt-2 flex gap-1.5 rounded-xl bg-sky-50 p-2.5 text-[9.5px] text-sky-800">
          <Info className="size-3.5 shrink-0" /> Isi data diri dan rekeningmu untuk mulai tarik saldo komisi!
        </div>
        <div className="mt-3 divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
          {menu.map(({ id, label, icon: Icon }) => (
            <Spot key={id} id={id} className="rounded-lg">
              <div className="flex items-center gap-2.5 px-3 py-2.5">
                <Icon className="size-4 text-primary" />
                <span className="flex-1 text-[11.5px] font-semibold">{label}</span>
                <ChevronRight className="size-3.5 text-slate-400" />
              </div>
            </Spot>
          ))}
        </div>
      </div>
    </AppScreen>
  );
}

function MyProfileScreen() {
  return (
    <AppScreen nav="profil">
      <AppBar title="Tampilan Profil" subtitle="Atur tampilan profil kamu!" />
      <div className="space-y-3 p-3">
        <div className="flex items-center justify-between rounded-xl bg-primary/10 px-2.5 py-2 text-[10px]">
          <span>
            Biolink: <b>konksi.com/sari</b>
          </span>
          <Copy className="size-3 text-primary" />
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <div className="flex items-center justify-between">
            <p className="text-[12px] font-bold">Edit Profil</p>
            <Spot id="save-profile" className="rounded-lg" labelSide="left">
              <span className="flex items-center gap-1 rounded-lg bg-primary px-2.5 py-1.5 text-[10px] font-bold text-white">
                <Save className="size-3" /> Simpan
              </span>
            </Spot>
          </div>
          <p className="mb-1 mt-3 text-[10px] font-semibold text-slate-600">Banner Halaman</p>
          <Spot id="banner-upload" className="rounded-lg">
            <div className="flex h-16 flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 text-[9.5px] text-slate-500">
              <Upload className="mb-0.5 size-4" /> Klik untuk upload banner
              <span className="text-[8.5px]">* 1200 x 628 px</span>
            </div>
          </Spot>
          <p className="mb-1 mt-3 text-[10px] font-semibold text-slate-600">Foto Profil</p>
          <div className="flex items-center gap-2.5">
            <span className="relative grid size-12 place-items-center rounded-full bg-primary/20 text-[15px] font-bold text-primary">
              S
              <span className="absolute -bottom-0.5 -right-0.5 grid size-4 place-items-center rounded-full bg-primary text-white">
                <Camera className="size-2.5" />
              </span>
            </span>
            <span className="rounded-lg border border-slate-200 px-2.5 py-1 text-[10px] font-bold">Upload</span>
          </div>
          <div className="mt-3 space-y-2.5">
            <Field label="Nama Lengkap" value="Sari Wulandari" />
            <Field label="Username" value="@sari" />
            <Field label="Bio / Tentang Kamu" value="Ibu rumah tangga, suka berbagi jasa terpercaya ✨" />
          </div>
          <p className="mb-1 mt-3 text-[10px] font-semibold text-slate-600">Warna Teks &amp; Aksen</p>
          <Spot id="color-picker" className="rounded-lg" labelSide="top">
            <div className="flex items-center gap-2 rounded-lg border border-slate-200 p-1.5">
              <span className="size-7 rounded-md bg-primary" />
              <span className="font-mono text-[10.5px]">#745EAE</span>
            </div>
          </Spot>
          <p className="mb-1 mt-3 text-[10px] font-semibold text-slate-600">Tautan Sosial Media</p>
          <Field label="" value="instagram.com/sari.wulan" />
        </div>
      </div>
    </AppScreen>
  );
}

function MyProfileBackgroundScreen() {
  const bgs = [
    "bg-slate-200",
    "bg-gradient-to-b from-violet-400 to-fuchsia-300",
    "bg-gradient-to-b from-amber-200 to-rose-300",
    "bg-gradient-to-b from-emerald-200 to-sky-300",
    "bg-[radial-gradient(#745EAE_1.5px,transparent_1.5px)] [background-size:8px_8px] bg-violet-50",
    "bg-gradient-to-b from-slate-700 to-slate-900",
  ];
  return (
    <AppScreen nav="profil">
      <AppBar title="Tampilan Profil" subtitle="Atur tampilan profil kamu!" />
      <div className="space-y-3 p-3">
        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-[12px] font-bold">Pilih Background</p>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {bgs.map((cls, i) => {
              const tile = (
                <div className={`relative aspect-[9/16] rounded-lg border-2 ${i === 1 ? "scale-95 border-primary" : "border-slate-200"} ${cls}`}>
                  {i === 0 ? <span className="absolute inset-x-0 bottom-1 text-center text-[8.5px] font-semibold">Default</span> : null}
                </div>
              );
              return i === 1 ? (
                <Spot key={cls} id="bg-option" className="rounded-lg" labelSide="bottom">
                  {tile}
                </Spot>
              ) : (
                <div key={cls}>{tile}</div>
              );
            })}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-[12px] font-bold">Live Preview</p>
          <p className="text-[9.5px] text-slate-500">Tampilan Ponsel</p>
          <div className="mx-auto mt-2 w-32 overflow-hidden rounded-2xl border-4 border-slate-900 bg-gradient-to-b from-violet-400 to-fuchsia-300 pb-3">
            <div className="h-8 bg-white/40" />
            <div className="-mt-4 flex flex-col items-center">
              <span className="grid size-8 place-items-center rounded-full border-2 border-white bg-primary text-[11px] font-bold text-white">S</span>
              <p className="mt-0.5 text-[9px] font-bold text-white">Sari Wulandari</p>
              <p className="text-[7.5px] text-white/90">@sari</p>
            </div>
            <div className="mx-2 mt-2 space-y-1">
              <div className="flex items-center gap-1 rounded-md bg-white p-1">
                <Thumb product={AC} className="size-5 rounded" />
                <span className="truncate text-[7px] font-semibold">{AC.name}</span>
              </div>
              <div className="flex items-center gap-1 rounded-md bg-white p-1">
                <Thumb product={PRODUCTS[1]} className="size-5 rounded" />
                <span className="truncate text-[7px] font-semibold">{PRODUCTS[1].name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppScreen>
  );
}

function BiolinkManageScreen() {
  const blocks = [
    { title: "Servis & Cuci AC Rumah", type: "Afiliasi" },
    { title: "Pijat Refleksi 60 Menit", type: "Afiliasi" },
    { title: "Instagram Saya", type: "Tautan" },
  ];
  return (
    <AppScreen nav="profil">
      <AppBar
        title="Biolink"
        right={
          <span className="flex items-center gap-1 rounded-lg bg-slate-100 px-2 py-1 text-[10px] font-semibold">
            <Eye className="size-3" /> Preview
          </span>
        }
      />
      <div className="space-y-3 p-3">
        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-[11px] font-bold">Biolink Saya</p>
          <div className="mt-1.5 flex items-center justify-between rounded-lg bg-slate-50 px-2 py-1.5 text-[10px]">
            https://konksi.com/sari <span className="font-bold text-primary">Salin</span>
          </div>
        </div>
        <div>
          <p className="text-[12px] font-bold">Daftar Blok</p>
          <p className="text-[9.5px] text-slate-500">Tahan &amp; geser ikon untuk mengurutkan posisi</p>
          <div className="mt-2 space-y-1.5">
            {blocks.map((b, i) => (
              <div key={b.title} className="relative">
                <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2">
                  <GripVertical className="size-3.5 text-slate-400" />
                  <span className="grid size-7 place-items-center rounded-lg bg-primary/10">
                    <Link2 className="size-3.5 text-primary" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[10.5px] font-bold">{b.title}</p>
                    <p className="text-[9px] text-slate-500">{b.type}</p>
                  </div>
                  {i === 0 ? (
                    <Spot id="block-menu" className="rounded-md" labelSide="left">
                      <span className="grid size-6 place-items-center rounded-md bg-slate-100">
                        <MoreHorizontal className="size-3.5" />
                      </span>
                    </Spot>
                  ) : (
                    <span className="grid size-6 place-items-center">
                      <MoreHorizontal className="size-3.5 text-slate-500" />
                    </span>
                  )}
                </div>
                {i === 0 ? (
                  <div className="absolute right-1 top-full z-10 mt-1 w-32 rounded-lg border border-slate-200 bg-white py-1 text-[10px] shadow-lg">
                    <p className="flex items-center gap-1.5 px-2.5 py-1.5"><Pencil className="size-3" /> Ubah</p>
                    <p className="flex items-center gap-1.5 px-2.5 py-1.5"><Power className="size-3" /> Sembunyikan</p>
                    <p className="flex items-center gap-1.5 px-2.5 py-1.5 text-red-500"><Trash2 className="size-3" /> Hapus</p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
        <PrimaryButton>
          <Plus className="size-3.5" /> Tambah Blok Baru
        </PrimaryButton>
      </div>
    </AppScreen>
  );
}

function MissionsScreen() {
  const missions = [
    { id: "klaim", name: "Tambah 1 produk ke Bio Link", icon: Plus, done: 1, target: 1, points: 50, state: "claim" },
    { id: "kerjakan", name: "Simpan 3 produk favorit", icon: Bookmark, done: 1, target: 3, points: 30, state: "todo" },
    { id: "m3", name: "Sukai 2 konten di Feeds", icon: Heart, done: 0, target: 2, points: 20, state: "todo" },
    { id: "m4", name: "Bagikan 1 produk", icon: Share2, done: 1, target: 1, points: 40, state: "claimed" },
  ];
  return (
    <AppScreen>
      <div className="bg-primary px-3 pb-10 pt-3 text-white">
        <span className="flex items-center gap-1 text-[10.5px] font-semibold">
          <ArrowLeft className="size-3.5" /> Kembali
        </span>
        <div className="mt-2 flex items-center gap-2">
          <Image
            src={`/img/icons/mascot/mission/${encodeURIComponent("(41% - 60%) Si Konk.png")}`}
            alt=""
            width={64}
            height={64}
            unoptimized
            className="size-16"
          />
          <div>
            <p className="text-[10px] opacity-80">Misi dan hadiah</p>
            <p className="text-[14px] font-extrabold leading-tight">Sudah setengah jalan</p>
          </div>
        </div>
      </div>
      <div className="mx-3 -mt-7 rounded-xl bg-white p-3 shadow-md">
        <div className="flex items-center justify-between text-[10px]">
          <span className="font-bold">Progres misi harian</span>
          <span className="font-bold text-primary">2/4</span>
        </div>
        <div className="mt-1.5 h-2 rounded-full bg-slate-100">
          <div className="h-full w-1/2 rounded-full bg-primary" />
        </div>
        <p className="mt-1.5 text-[9.5px] text-slate-500">Selesaikan 2 misi lagi untuk mengklaim 50 poin hari ini!</p>
      </div>
      <div className="mx-3 mt-3 grid grid-cols-2 rounded-xl bg-slate-200/70 p-1 text-center text-[11px] font-bold">
        <span className="rounded-lg bg-white py-1.5 text-primary shadow-sm">Misi Harian</span>
        <Spot id="tab-tukar" className="rounded-lg">
          <span className="block py-1.5 text-slate-500">Tukar Poin</span>
        </Spot>
      </div>
      <div className="mt-3 space-y-2 px-3">
        {missions.map((m) => {
          const Icon = m.icon;
          const button =
            m.state === "claim" ? (
              <span className="block rounded-lg bg-primary px-2.5 py-1.5 text-[10px] font-bold text-white">Klaim Poin</span>
            ) : m.state === "todo" ? (
              <span className="block rounded-lg border border-primary px-2.5 py-1.5 text-[10px] font-bold text-primary">Kerjakan</span>
            ) : (
              <span className="flex items-center gap-1 px-1 text-[10px] font-bold text-emerald-600">
                <CircleCheck className="size-3.5" /> Tuntas!
              </span>
            );
          return (
            <div key={m.id} className={`flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white p-2.5 ${m.state === "claimed" ? "opacity-60" : ""}`}>
              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary/10">
                <Icon className="size-4 text-primary" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[10.5px] font-bold">{m.name}</p>
                <div className="mt-1 flex items-center gap-1.5">
                  <div className="h-1 flex-1 rounded-full bg-slate-100">
                    <div className="h-full rounded-full bg-amber-400" style={{ width: `${(m.done / m.target) * 100}%` }} />
                  </div>
                  <span className="text-[9px] text-slate-500">
                    {m.done}/{m.target}
                  </span>
                </div>
                <p className="mt-0.5 flex items-center gap-0.5 text-[9px] font-bold text-amber-600">
                  <Coins className="size-2.5" /> +{m.points} Poin
                </p>
              </div>
              {m.id === "klaim" || m.id === "kerjakan" ? (
                <Spot id={m.id} className="rounded-lg" labelSide="bottom">
                  {button}
                </Spot>
              ) : (
                button
              )}
            </div>
          );
        })}
      </div>
    </AppScreen>
  );
}

function RedeemSheetScreen() {
  return (
    <SheetFrame
      title="Tukar Poin"
      footer={
        <Spot id="tukar-btn" className="rounded-xl" labelSide="top">
          <PrimaryButton>
            <Coins className="size-3.5" /> Tukar 1.000 Poin
          </PrimaryButton>
        </Spot>
      }
    >
      <div className="flex overflow-hidden rounded-xl border border-slate-200">
        <div className="grid w-20 place-items-center bg-primary/10 p-2">
          <Image src="/img/icons/mascot/cashback.png" alt="" width={64} height={64} unoptimized className="size-14 object-contain" />
        </div>
        <div className="flex-1 border-l-2 border-dashed border-slate-200 p-2.5">
          <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold text-amber-700">Potongan Harga</span>
          <p className="mt-1 text-[12px] font-extrabold">Potongan Rp1.000</p>
          <p className="text-[9.5px] text-slate-500">Tanpa minimum transaksi</p>
          <p className="mt-1 text-[9px] text-emerald-600">Stok tersedia</p>
        </div>
      </div>
      <p className="mt-3 rounded-lg bg-slate-50 p-2.5 text-[10px] text-slate-600">Satu kali tukar untuk satu kali pakai, khusus akun kamu.</p>
      <div className="mt-3 rounded-lg border border-slate-200 p-2.5">
        <Row label="Saldo sekarang" value="1.250 Poin" />
        <Row label="Ditukar" value="− 1.000 Poin" tone="text-red-500" />
        <div className="mt-1 border-t border-dashed border-slate-200 pt-1">
          <Row label="Sisa saldo" value="250 Poin" tone="text-primary" />
        </div>
      </div>
    </SheetFrame>
  );
}

function VouchersScreen() {
  const vouchers = [
    { code: "HEMAT10", name: "Diskon 10% Semua Jasa", min: "Min. transaksi Rp50.000", badge: "bg-sky-100 text-sky-700", mascot: "discount", spot: true },
    { code: "PTS-1000", name: "Potongan Rp1.000", min: "Tanpa minimum transaksi", badge: "bg-amber-100 text-amber-700", mascot: "cashback", points: true },
  ];
  return (
    <AppScreen nav="beranda">
      <AppBar title="Voucher Saya" />
      <div className="space-y-2.5 p-3">
        <div className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-2.5 py-2 text-[10.5px] text-slate-400">
          <Search className="size-3.5" /> Cari voucher atau kode promo...
        </div>
        <div className="flex gap-1.5 overflow-hidden">
          <span className="shrink-0 rounded-full bg-primary px-2.5 py-1 text-[9.5px] font-bold text-white">Semua Voucher</span>
          <span className="shrink-0 rounded-full bg-white px-2.5 py-1 text-[9.5px] ring-1 ring-slate-200">Diskon Persen (%)</span>
          <span className="shrink-0 rounded-full bg-white px-2.5 py-1 text-[9.5px] ring-1 ring-slate-200">Potongan harga (Rp)</span>
        </div>
        {vouchers.map((v) => {
          const info = (
            <span className="grid size-5 place-items-center rounded-full text-slate-400">
              <Info className="size-3.5" />
            </span>
          );
          const pakai = <span className="block rounded-lg bg-primary px-3 py-1 text-[10px] font-bold text-white">Pakai</span>;
          return (
            <div key={v.code} className="flex overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="flex w-[70px] flex-col items-center justify-center bg-primary/10 p-1.5">
                <Image src={`/img/icons/mascot/${v.mascot}.png`} alt="" width={52} height={52} unoptimized className="size-12 object-contain" />
                <span className="mt-0.5 font-mono text-[8px] font-bold text-primary">{v.code}</span>
              </div>
              <div className="relative flex-1 border-l-2 border-dashed border-slate-200 p-2.5">
                <div className="flex items-center gap-1">
                  <span className={`rounded px-1.5 py-0.5 font-mono text-[8.5px] font-bold ${v.badge}`}>{v.code}</span>
                  {v.points ? (
                    <span className="flex items-center gap-0.5 rounded bg-amber-100 px-1.5 py-0.5 text-[8.5px] font-bold text-amber-700">
                      <Coins className="size-2.5" /> Tukar Poin ×1
                    </span>
                  ) : null}
                  <span className="ml-auto">
                    {v.spot ? (
                      <Spot id="voucher-info" className="rounded-full" labelSide="left">
                        {info}
                      </Spot>
                    ) : (
                      info
                    )}
                  </span>
                </div>
                <p className="mt-1 text-[11px] font-bold">{v.name}</p>
                <p className="text-[9.5px] text-slate-500">{v.min}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-[9px] text-slate-500">
                    <Clock className="size-2.5" /> Berakhir 31 Okt 2026
                  </span>
                  {v.spot ? (
                    <Spot id="pakai" className="rounded-lg" labelSide="top">
                      {pakai}
                    </Spot>
                  ) : (
                    pakai
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </AppScreen>
  );
}

function BalanceScreen() {
  const history = [
    { title: "Penarikan Saldo", sub: "BCA •••• 7890", amount: "− Rp150.000", tone: "text-slate-800", status: "Diproses", badge: "bg-amber-100 text-amber-700" },
    { title: "Komisi: Servis & Cuci AC", sub: "1 Okt 2026", amount: "+ Rp15.000", tone: "text-emerald-600", status: "Berhasil", badge: "bg-emerald-100 text-emerald-700" },
    { title: "Komisi: Pijat Refleksi", sub: "29 Sep 2026", amount: "+ Rp12.000", tone: "text-emerald-600", status: "Berhasil", badge: "bg-emerald-100 text-emerald-700" },
  ];
  return (
    <AppScreen nav="saldo">
      <div className="mx-3 mt-3 grid grid-cols-2 rounded-xl bg-slate-200/70 p-1 text-center text-[11px] font-bold">
        <span className="flex items-center justify-center gap-1 rounded-lg bg-white py-1.5 text-primary shadow-sm">
          <CreditCard className="size-3.5" /> Saldo
        </span>
        <span className="flex items-center justify-center gap-1 py-1.5 text-slate-500">
          <Coins className="size-3.5" /> Poin Konksi
        </span>
      </div>
      <div className="mx-3 mt-3 overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="relative p-3">
          <Spot id="saldo-tersedia" className="inline-block rounded-lg" labelSide="right">
            <div className="pr-1">
              <p className="text-[10px] text-slate-500">Saldo Tersedia</p>
              <p className="text-[19px] font-extrabold">Rp245.000</p>
            </div>
          </Spot>
          <div className="mt-2.5 flex items-center gap-1.5">
            <Spot id="penarikan" className="rounded-lg" labelSide="bottom">
              <span className="flex items-center gap-1 rounded-lg bg-primary px-3 py-1.5 text-[10.5px] font-bold text-white">
                <Plus className="size-3.5" /> Penarikan
              </span>
            </Spot>
            <span className="grid size-7 place-items-center rounded-lg border border-slate-200">
              <History className="size-3.5" />
            </span>
          </div>
          <Image src="/img/illustrations/wallets.png" alt="" width={90} height={90} unoptimized className="absolute -right-1 top-2 size-20 object-contain" />
        </div>
        <p className="bg-primary/10 px-3 py-1.5 text-[9.5px] font-semibold text-primary">Minimum Penarikan: 100.000</p>
      </div>
      <div className="mx-3 mt-3 rounded-xl border border-slate-200 bg-white p-3">
        <p className="text-[11px] font-bold">Rincian Saldo</p>
        <Row label="Saldo tersedia" value="Rp245.000" />
        <Row label="Saldo pending" value="Rp27.000" tone="text-amber-600" />
        <Row label="Total komisi" value="Rp422.000" />
      </div>
      <div className="mx-3 mt-3 rounded-xl border border-slate-200 bg-white p-3">
        <p className="text-[11px] font-bold">Rekening Penarikan</p>
        <div className="mt-1.5 flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-lg bg-slate-100">
            <Landmark className="size-4" />
          </span>
          <div className="flex-1">
            <p className="text-[10.5px] font-bold">BCA</p>
            <p className="text-[9.5px] text-slate-500">•••• 7890 · Sari Wulandari</p>
          </div>
          <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[8.5px] font-bold text-emerald-700">Utama</span>
        </div>
      </div>
      <Spot id="riwayat" className="mx-3 mt-3 rounded-xl" labelSide="top">
        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-[11px] font-bold">Riwayat Transaksi Saldo</p>
          <div className="mt-1 divide-y divide-slate-100">
            {history.map((h) => (
              <div key={h.title} className="flex items-center justify-between py-1.5">
                <div>
                  <p className="text-[10px] font-semibold">{h.title}</p>
                  <p className="text-[9px] text-slate-500">{h.sub}</p>
                </div>
                <div className="text-right">
                  <p className={`text-[10px] font-bold ${h.tone}`}>{h.amount}</p>
                  <span className={`rounded px-1 text-[8px] font-bold ${h.badge}`}>{h.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Spot>
    </AppScreen>
  );
}

function KycSheetScreen() {
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

function BankSheetScreen() {
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

function WithdrawScreen() {
  return (
    <AppScreen>
      <AppBar title="Tarik Saldo" />
      <div className="space-y-3 p-3">
        <div className="rounded-xl bg-primary p-3 text-white">
          <p className="text-[10px] opacity-80">Saldo Tersedia</p>
          <p className="text-[18px] font-extrabold">Rp245.000</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-[10px] font-semibold text-slate-600">Jumlah Penarikan</p>
          <p className="mt-1 border-b-2 border-primary pb-1 text-[18px] font-extrabold">Rp150.000</p>
          <div className="mt-2 flex gap-1.5">
            {["Rp100.000", "Rp200.000", "Semua"].map((c) => (
              <span key={c} className="rounded-full bg-slate-100 px-2 py-1 text-[9.5px] font-semibold">
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-[10px] font-semibold text-slate-600">Rekening Tujuan</p>
          <div className="mt-1.5 flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-lg bg-slate-100">
              <Landmark className="size-4" />
            </span>
            <div>
              <p className="text-[10.5px] font-bold">BCA •••• 7890</p>
              <p className="text-[9.5px] text-slate-500">Sari Wulandari</p>
            </div>
          </div>
        </div>
        <Spot id="withdraw-submit" className="rounded-xl" labelSide="top">
          <PrimaryButton>Tarik Saldo</PrimaryButton>
        </Spot>
      </div>
    </AppScreen>
  );
}

// ---------------------------------------------------------------------------
//  Layar: Pembeli
// ---------------------------------------------------------------------------

function ProductScreen() {
  return (
    <div className="flex min-h-full flex-col bg-slate-50">
      <AppBar
        title="Detail jasa"
        right={
          <span className="relative">
            <ShoppingBag className="size-4" />
            <span className="absolute -right-1.5 -top-1.5 grid size-3.5 place-items-center rounded-full bg-primary text-[7px] font-bold text-white">1</span>
          </span>
        }
      />
      <div className="flex-1">
        <div className="relative">
          <Thumb product={AC} className="aspect-[4/3] w-full" />
          <span className="absolute right-2 top-2 grid size-7 place-items-center rounded-full bg-slate-900/60 text-white">
            <Bookmark className="size-3.5" />
          </span>
        </div>
        <div className="bg-white p-3">
          <p className="text-[13px] font-bold leading-tight">{AC.name}</p>
          <p className="text-[9.5px] text-slate-500">{AC.merchant}</p>
          <p className="mt-1.5 text-[16px] font-extrabold text-primary">
            Rp150.000 <span className="text-[10px] font-normal text-slate-400 line-through">Rp175.000</span>
          </p>
          <p className="mt-1 flex items-center gap-1 text-[9.5px] text-slate-500">
            <Star className="size-3 fill-amber-400 text-amber-400" /> 4.9 · 86 Ulasan · 320 Terjual · <MapPin className="size-3" /> 2,1 Km
          </p>
          <div className="mt-2 flex gap-1.5 overflow-hidden">
            <span className="flex shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[8.5px] text-emerald-700">
              <ShieldCheck className="size-2.5" /> Transaksi Aman
            </span>
            <span className="flex shrink-0 items-center gap-1 rounded-full bg-sky-50 px-2 py-0.5 text-[8.5px] text-sky-700">
              <Wallet className="size-2.5" /> Garansi Uang Kembali
            </span>
          </div>
        </div>
        <div className="mt-2 bg-white p-3">
          <p className="flex items-center justify-between text-[11px] font-bold">
            Deskripsi jasa <ChevronDown className="size-3.5" />
          </p>
          <p className="mt-1 text-[10px] text-slate-600">Cuci AC lengkap: filter, evaporator, dan cek freon. Teknisi datang ke rumah.</p>
        </div>
        <div className="mt-2 flex items-center gap-2 bg-white p-3">
          <span className="grid size-8 place-items-center rounded-full bg-sky-100 text-[10px] font-bold text-sky-700">DJ</span>
          <div className="flex-1">
            <p className="flex items-center gap-1 text-[10.5px] font-bold">
              {AC.merchant} <BadgeCheck className="size-3 text-sky-500" />
            </p>
            <p className="text-[9px] text-slate-500">2,1 Km dari kamu</p>
          </div>
          <span className="flex items-center gap-1 rounded-full border border-slate-200 px-2 py-1 text-[9.5px] font-bold">
            <MessageCircle className="size-3" /> Chat
          </span>
        </div>
        <div className="mt-2 flex items-center gap-2 bg-white px-3 py-2.5 text-[10px]">
          <span className="text-slate-500">Direkomendasikan Oleh</span>
          <span className="grid size-5 place-items-center rounded-full bg-primary text-[8px] font-bold text-white">S</span>
          <b>SARI</b>
        </div>
      </div>
      <div className="sticky bottom-0 z-10">
        <Spot id="promo-strip" className="rounded-md" labelSide="top">
          <div className="flex items-center gap-2 bg-[#48387c] px-3 py-1.5 text-[9.5px] text-white">
            <span className="grid size-5 shrink-0 place-items-center rounded-full bg-amber-400 text-[10px] font-extrabold text-[#48387c]">%</span>
            Temen konksi lagi bagi komisi — kamu bisa hemat sampai Rp3.000 🔥
          </div>
        </Spot>
        <div className="flex gap-1.5 border-t border-slate-200 bg-white px-3 pb-5 pt-2">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-slate-200">
            <ShoppingCart className="size-4" />
          </span>
          <span className="flex h-9 shrink-0 items-center gap-1 rounded-xl border border-primary px-2 text-[10px] font-bold text-primary">
            <MessageCircle className="size-3.5" /> Chat Mitra
          </span>
          <Spot id="pesan" className="flex-1 rounded-xl" labelSide="top">
            <PrimaryButton className="px-1 text-[10px]">Pesan Sekarang • Rp147.000</PrimaryButton>
          </Spot>
        </div>
      </div>
    </div>
  );
}

function CheckoutScreen() {
  const slots = ["08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"];
  return (
    <div className="flex min-h-full flex-col bg-slate-100">
      <AppBar title="Checkout" />
      <p className="bg-white px-3 pb-2 text-[9px] text-slate-400">
        Detail › <b className="text-slate-700">Checkout</b> › Pembayaran
      </p>
      <div className="flex-1 space-y-2">
        <div className="flex gap-2.5 bg-white p-3">
          <Thumb product={AC} className="size-14 shrink-0 rounded-lg" />
          <div className="min-w-0">
            <p className="text-[9px] text-slate-500">
              {AC.merchant} <span className="rounded bg-slate-100 px-1 font-bold">JASA</span>
            </p>
            <p className="truncate text-[11px] font-bold">{AC.name}</p>
            <p className="text-[9.5px] text-slate-500">1 Unit AC · 1×</p>
            <p className="text-[11px] font-bold">Rp150.000</p>
          </div>
        </div>

        <div className="space-y-2 bg-white p-3">
          <p className="text-[11.5px] font-bold">Info Pemesan</p>
          <Spot id="buyer-info" className="rounded-md" labelSide="bottom">
            <span className="flex items-center gap-2 text-[10.5px] font-semibold">
              <Checkbox /> Gunakan data diri yang terdaftar
            </span>
          </Spot>
          <div className="space-y-2 pt-1">
            <Field label="Nama Lengkap" value="Budi Santoso" />
            <Field label="Nomor WhatsApp/Ponsel" value="0812-3456-7890" />
          </div>
        </div>

        <div className="bg-white p-3">
          <p className="text-[11.5px] font-bold">Tanggal &amp; Waktu</p>
          <div className="mt-2 flex items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-2 text-[10.5px]">
            <CalendarDays className="size-3.5 text-primary" /> Sabtu, 10 Oktober 2026
          </div>
          <p className="mt-2.5 flex justify-between text-[10px] font-semibold">
            Waktu <span className="font-normal text-slate-500">7 slot tersedia</span>
          </p>
          <div className="mt-1.5 grid grid-cols-4 gap-1.5">
            {slots.map((s, i) => {
              const cls =
                i === 2
                  ? "bg-primary text-white font-bold border-primary"
                  : i === 0
                    ? "bg-slate-100 text-slate-300 border-slate-100"
                    : "bg-white border-slate-200";
              const chip = <span className={`block rounded-lg border py-1.5 text-center text-[10px] ${cls}`}>{s}</span>;
              return i === 2 ? (
                <Spot key={s} id="time-slot" className="rounded-lg" labelSide="bottom">
                  {chip}
                </Spot>
              ) : (
                <div key={s}>{chip}</div>
              );
            })}
          </div>
        </div>

        <div className="bg-white p-3">
          <p className="text-[11.5px] font-bold">Ringkasan Pembayaran</p>
          <p className="mt-1.5 rounded-lg bg-slate-50 p-2 text-[9.5px] text-slate-600">🥳 Kamu dapet diskon Rp3.000 dari afiliator Sari.</p>
          <div className="mt-1.5">
            <Row label="Subtotal" value="Rp150.000" />
            <Row label="Diskon Afiliator" value="- Rp3.000" tone="text-emerald-600" />
            <Row label="Diskon" value="- Rp15.000" tone="text-emerald-600" />
            <Row label="Biaya Layanan" value="Rp4.500" />
            <div className="mt-1 flex items-center justify-between border-t border-slate-100 pt-1.5">
              <span className="text-[11px] font-bold">Total</span>
              <span className="text-[14px] font-extrabold text-primary">Rp136.500</span>
            </div>
          </div>
          <p className="mt-3 text-[10px] font-semibold">Punya kode promo?</p>
          <div className="mt-1 flex items-center gap-1.5 rounded-lg bg-slate-100 py-1 pl-2.5 pr-1">
            <span className="flex-1 font-mono text-[11px] font-bold text-emerald-700">HEMAT10</span>
            <Spot id="apply-voucher" className="rounded-md" labelSide="left">
              <span className="grid size-7 place-items-center rounded-md bg-primary text-white">
                <CircleCheck className="size-4" />
              </span>
            </Spot>
          </div>
          <p className="mt-1 text-[9.5px] font-semibold text-emerald-600">Voucher berhasil dipakai — hemat Rp15.000</p>
          <div className="mt-3 flex items-center gap-2 rounded-lg border border-slate-200 p-2.5">
            <CreditCard className="size-4 text-primary" />
            <div className="flex-1">
              <p className="text-[8.5px] text-slate-500">Metode Pembayaran</p>
              <p className="text-[10.5px] font-semibold">QRIS</p>
            </div>
            <ChevronRight className="size-3.5 text-slate-400" />
          </div>
          <p className="mt-2 flex items-center justify-center gap-1 text-[8.5px] text-slate-400">
            <Lock className="size-2.5" /> Semua pembayaran kamu dilindungi dengan enkripsi RSA.
          </p>
        </div>
      </div>
      <div className="sticky bottom-0 z-10 space-y-2 border-t border-slate-200 bg-white px-3 pb-5 pt-2">
        <span className="flex items-center gap-2 text-[9.5px]">
          <Checkbox /> Saya setuju dengan <b className="text-primary">Syarat &amp; Ketentuan</b>
        </span>
        <Spot id="bayar" className="rounded-xl" labelSide="top">
          <PrimaryButton>Bayar • Rp136.500</PrimaryButton>
        </Spot>
      </div>
    </div>
  );
}

function PaymentSheetScreen() {
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

function VoucherProductsScreen() {
  return (
    <SheetFrame
      title={
        <span className="flex items-center gap-1.5">
          <Ticket className="size-4 text-primary" /> Produk Berlaku Voucher
        </span>
      }
      subtitle={
        <>
          Gunakan kode <b className="font-mono text-primary">HEMAT10</b> untuk produk di bawah ini:
        </>
      }
    >
      <div className="space-y-2">
        {PRODUCTS.map((p, i) => {
          const pilih = (
            <span className="flex items-center gap-0.5 rounded-lg bg-primary/10 px-2 py-1 text-[10px] font-bold text-primary">
              Pilih <ChevronRight className="size-3" />
            </span>
          );
          return (
            <div key={p.name} className="flex items-center gap-2 rounded-xl border border-slate-200 p-2">
              <Thumb product={p} className="size-11 shrink-0 rounded-lg" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[10.5px] font-bold">{p.name}</p>
                <p className="truncate text-[9px] text-slate-500">{p.merchant}</p>
                <p className="text-[10px] font-bold text-primary">{p.price}</p>
              </div>
              {i === 0 ? (
                <Spot id="pilih-produk" className="rounded-lg" labelSide="left">
                  {pilih}
                </Spot>
              ) : (
                pilih
              )}
            </div>
          );
        })}
      </div>
    </SheetFrame>
  );
}

// Gaya label status di daftar transaksi (sama dengan getStatusStyle di konksi-app).
const LIST_STATUS_STYLE = {
  Pending: "bg-slate-100 text-slate-600",
  Berhasil: "border border-emerald-200 bg-emerald-50 text-emerald-600",
  Dibatalkan: "border border-slate-200 bg-slate-50 text-slate-600",
};

function TransactionsScreen() {
  const orders = [
    { name: "Servis & Cuci AC Rumah", merchant: AC.merchant, variant: "1 Unit AC", price: "136.500", status: "Pending", date: "01 Okt 2026, 09.12", pending: true },
    { name: "Pijat Refleksi 60 Menit", merchant: "Sehat Sentosa Spa", variant: "60 Menit", price: "117.000", status: "Pending", date: "30 Sep 2026, 09.15", spot: true },
    { name: "Cuci Sofa & Kasur", merchant: "Bersih Kilat", variant: "Sofa 3 Dudukan", price: "200.000", status: "Berhasil", date: "21 Sep 2026, 14.02" },
    { name: "Potong Rambut Panggilan", merchant: "Barber Keliling", variant: "Dewasa", price: "45.000", status: "Dibatalkan", date: "12 Sep 2026, 10.40" },
  ];
  return (
    <AppScreen nav="transaksi">
      <div className="sticky top-0 z-10 grid grid-cols-2 border-b border-slate-200 bg-white text-center text-[11px] font-bold">
        <Spot id="tab-pesanan" className="rounded-md">
          <span className="flex items-center justify-center gap-1.5 border-b-2 border-primary py-2.5 text-primary">
            <ScrollText className="size-3.5" /> Pesanan Kamu
          </span>
        </Spot>
        <span className="flex items-center justify-center gap-1.5 border-b-2 border-transparent py-2.5 text-slate-500">
          <ClipboardClock className="size-3.5 text-slate-400" /> Afiliasi
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between px-3 py-1.5">
        <b className="text-[10.5px] text-slate-900">4 Transaksi</b>
        <Spot id="filter" className="rounded-lg" labelSide="left">
          <span className="flex items-center gap-1.5 px-2 py-1 text-[10.5px] font-semibold text-slate-700">
            <SlidersHorizontal className="size-3.5" /> Filter
          </span>
        </Spot>
      </div>
      <div className="mt-1 space-y-2.5 px-3">
        {orders.map((o) => {
          const badge = <span className={`block rounded-md px-2 py-1 text-[8.5px] font-bold ${LIST_STATUS_STYLE[o.status]}`}>{o.status}</span>;
          return (
            <div key={o.name} className="rounded-sm border border-slate-200 bg-white p-3 shadow-2xs">
              <div className="flex items-center gap-2">
                <div className="min-w-0 flex-1 pr-1">
                  <p className="truncate text-[11px] font-bold text-slate-900">{o.name}</p>
                  <p className="mt-0.5 truncate text-[9.5px] font-semibold text-slate-700">{o.merchant}</p>
                  <p className="mt-0.5 truncate text-[9px] text-slate-500">{o.variant}</p>
                  <p className="mt-2 flex items-center gap-1 text-[8.5px] text-slate-500">
                    <Calendar className="size-2.5" /> {o.date}
                  </p>
                </div>
                <div className="flex min-h-[64px] shrink-0 flex-col items-end justify-between">
                  {o.spot ? (
                    <Spot id="status-badge" className="rounded-md" labelSide="left">
                      {badge}
                    </Spot>
                  ) : (
                    badge
                  )}
                  <p className="text-[11px] font-bold text-slate-900">IDR {o.price}</p>
                </div>
              </div>
              {o.pending ? (
                <div className="mt-2 flex items-center justify-between gap-2 rounded-sm border border-primary/20 bg-primary/10 p-2">
                  <div className="flex min-w-0 items-center gap-2">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary/20">
                      <Clock className="size-3 text-black" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-[9.5px] font-bold text-black">Menunggu Pembayaran</p>
                      <p className="text-[9.5px] font-bold text-red-500">Bayar dlm 12:48</p>
                    </div>
                  </div>
                  <Spot id="bayar-pending" className="rounded" labelSide="bottom">
                    <span className="flex items-center gap-1 rounded bg-primary px-2.5 py-1.5 text-[9.5px] font-bold text-white">
                      Bayar <ExternalLink className="size-2.5" />
                    </span>
                  </Spot>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </AppScreen>
  );
}

const TX_STEPS = ["Bayar", "Konfirmasi", "Diproses", "Selesai"];

function DetailCard({ title, aside, children }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-3">
      {title ? (
        <div className="mb-2 flex items-center justify-between gap-2">
          <p className="text-[11px] font-bold">{title}</p>
          {aside}
        </div>
      ) : null}
      {children}
    </section>
  );
}

function DetailInfoRow({ icon: Icon, label, children, copy = false }) {
  return (
    <div className="flex items-start gap-2.5 py-1.5">
      <Icon className="mt-0.5 size-3.5 shrink-0 text-slate-400" />
      <div className="min-w-0 flex-1">
        <p className="text-[9px] text-slate-500">{label}</p>
        <div className="text-[10.5px] font-medium">{children}</div>
      </div>
      {copy ? (
        <span className="grid size-6 shrink-0 place-items-center text-slate-400">
          <Copy className="size-3" />
        </span>
      ) : null}
    </div>
  );
}

function OrderDetailScreen() {
  const step = 1; // status "Menunggu Konfirmasi"
  const logs = [
    { title: "Menunggu konfirmasi mitra", desc: "Mitra sedang memeriksa pesananmu.", time: "30 Sep 2026, 09.15" },
    { title: "Pembayaran berhasil", desc: "Dibayar lewat QRIS.", time: "30 Sep 2026, 09.15" },
    { title: "Pesanan dibuat", desc: "Menunggu pembayaran.", time: "30 Sep 2026, 09.12" },
  ];
  return (
    <div className="flex min-h-full flex-col bg-slate-100/70">
      <div className="sticky top-0 z-10 grid grid-cols-[auto_1fr] items-center gap-2 border-b border-slate-200 bg-white/95 px-3 py-2.5">
        <span className="grid size-7 place-items-center rounded-full border border-slate-200 bg-white text-slate-500">
          <ChevronLeft className="size-3.5" />
        </span>
        <div>
          <p className="text-[12.5px] font-semibold">Detail Transaksi</p>
          <p className="text-[9px] text-slate-500">Pesanan kamu</p>
        </div>
      </div>

      <div className="space-y-2.5 px-3 pb-8 pt-3">
        {/* Status */}
        <section className="rounded-2xl border border-slate-200 bg-white p-3">
          <div className="flex items-start gap-2.5">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-blue-100 text-blue-700">
              <Hourglass className="size-4" />
            </span>
            <div>
              <p className="text-[14px] font-bold leading-tight">Menunggu Konfirmasi</p>
              <p className="mt-0.5 text-[9.5px] leading-relaxed text-slate-500">Pembayaranmu sudah diterima. Mitra sedang memeriksa pesananmu.</p>
            </div>
          </div>
          <Spot id="status-progress" className="mt-3 rounded-lg" labelSide="bottom">
            <ol className="grid grid-cols-4 py-1">
              {TX_STEPS.map((label, i) => {
                const done = i < step;
                const current = i === step;
                return (
                  <li key={label} className="relative flex flex-col items-center text-center">
                    {i > 0 ? <span className={`absolute right-1/2 top-2 h-0.5 w-full ${i <= step ? "bg-primary" : "bg-slate-200"}`} /> : null}
                    <span
                      className={`relative z-10 grid size-4 place-items-center rounded-full border-2 ${
                        done ? "border-primary bg-primary text-white" : current ? "border-primary bg-white" : "border-slate-200 bg-white"
                      }`}
                    >
                      {done ? <Check className="size-2.5" strokeWidth={3} /> : current ? <span className="size-1.5 rounded-full bg-primary" /> : null}
                    </span>
                    <span className={`mt-1 text-[8.5px] ${i <= step ? "font-semibold" : "text-slate-400"}`}>{label}</span>
                  </li>
                );
              })}
            </ol>
          </Spot>
        </section>

        {/* Produk */}
        <DetailCard title="Produk">
          <div className="flex gap-2.5">
            <Thumb product={PRODUCTS[1]} className="size-12 shrink-0 rounded-xl" />
            <div className="min-w-0">
              <p className="text-[11px] font-semibold leading-snug">{PRODUCTS[1].name}</p>
              <p className="text-[9.5px] text-slate-500">60 Menit</p>
              <p className="mt-0.5 flex items-center gap-1 text-[9px] text-slate-500">
                <Store className="size-2.5" /> {PRODUCTS[1].merchant}
              </p>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-1">
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[8.5px] text-slate-500">Jasa</span>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[8.5px] text-slate-500">Home service</span>
            <span className="ml-auto text-[9.5px] text-slate-500">1 × Rp120.000</span>
          </div>
        </DetailCard>

        {/* Jadwal */}
        <DetailCard title="Jadwal layanan" aside={<span className="rounded-full bg-primary/10 px-2 py-0.5 text-[8.5px] font-semibold text-primary">10 hari lagi</span>}>
          <div className="flex items-center gap-2.5">
            <div className="flex w-11 shrink-0 flex-col items-center overflow-hidden rounded-lg border border-slate-200">
              <span className="w-full bg-primary py-0.5 text-center text-[8px] font-bold text-white">OKT</span>
              <span className="py-0.5 text-[16px] font-bold leading-none">10</span>
            </div>
            <div>
              <p className="text-[10.5px] font-semibold">Sabtu, 10 Oktober 2026</p>
              <p className="flex items-center gap-1 text-[9.5px] text-slate-500">
                <CalendarDays className="size-3" /> 10.00 – 11.00
              </p>
            </div>
          </div>
        </DetailCard>

        {/* Pembayaran */}
        <DetailCard
          title="Rincian pembayaran"
          aside={
            <span className="flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[8.5px] font-semibold text-slate-500">
              <CreditCard className="size-2.5" /> QRIS
            </span>
          }
        >
          <Row label="Subtotal produk" value="Rp120.000" />
          <Row label="Diskon afiliator" value="-Rp3.000" tone="text-emerald-600" />
          <div className="mt-1 flex items-baseline justify-between border-t border-dashed border-slate-200 pt-1.5">
            <span className="text-[10.5px] font-semibold">Total</span>
            <span className="text-[13px] font-bold">Rp117.000</span>
          </div>
        </DetailCard>

        {/* Pemesan */}
        <DetailCard title="Data pemesan">
          <div className="divide-y divide-slate-100">
            <DetailInfoRow icon={User} label="Nama">Budi Santoso</DetailInfoRow>
            <DetailInfoRow icon={Phone} label="Nomor HP" copy>
              0812-3456-7890
            </DetailInfoRow>
          </div>
        </DetailCard>

        {/* Riwayat */}
        <Spot id="timeline" className="rounded-2xl" labelSide="top">
          <DetailCard title="Riwayat pesanan" aside={<span className="text-[9px] text-slate-500">{logs.length} aktivitas</span>}>
            <ol>
              {logs.map((log, i) => (
                <li key={log.title} className="relative flex gap-2.5 pb-3 last:pb-0">
                  {i < logs.length - 1 ? <span className="absolute left-[4px] top-3 h-full w-px bg-slate-200" /> : null}
                  <span className={`relative mt-1 size-[9px] shrink-0 rounded-full border-2 ${i === 0 ? "border-primary bg-primary" : "border-slate-200 bg-white"}`} />
                  <div>
                    <p className={`text-[10px] font-semibold ${i === 0 ? "" : "text-slate-500"}`}>{log.title}</p>
                    <p className="text-[9px] text-slate-500">{log.desc}</p>
                    <p className="mt-0.5 text-[8.5px] text-slate-400">{log.time}</p>
                  </div>
                </li>
              ))}
            </ol>
          </DetailCard>
        </Spot>

        {/* Info pesanan */}
        <DetailCard title="Info pesanan">
          <div className="divide-y divide-slate-100">
            <DetailInfoRow icon={ReceiptText} label="Nomor pesanan" copy>
              <span className="font-mono">JK-48213709552</span>
            </DetailInfoRow>
            <DetailInfoRow icon={CalendarDays} label="Waktu pesan">
              30 Sep 2026, 09.12
            </DetailInfoRow>
          </div>
        </DetailCard>
      </div>
    </div>
  );
}

function BuyVariantSheetScreen() {
  return <VariantSheet cta="Beli Sekarang" spotId="beli" />;
}

function VoucherVariantSheetScreen() {
  return <VariantSheet cta="Gunakan Voucher & Checkout" spotId="gunakan-voucher" />;
}

// ---------------------------------------------------------------------------
//  Layar demo untuk halaman utama
// ---------------------------------------------------------------------------

function DemoScreen() {
  return (
    <AppScreen nav="beranda">
      <div className="p-3">
        <p className="text-[10px] text-slate-600">Hai, Sari! 👋</p>
        <p className="text-[15px] font-extrabold leading-tight">
          Bangun Relasi, Raih <span className="text-primary">Komisi</span>
        </p>
        <div className="mt-3 rounded-xl bg-white p-3 shadow-sm">
          <p className="text-[9.5px] text-slate-500">Saldo Komisi</p>
          <p className="text-[16px] font-extrabold">Rp245.000</p>
        </div>
        <div className="mt-6 flex justify-center">
          <Spot id="demo" className="rounded-xl" labelSide="top">
            <span className="flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-[12px] font-bold text-white">
              <Bell className="size-4" /> Tombol yang dimaksud
            </span>
          </Spot>
        </div>
        <div className="mt-6 space-y-2 opacity-50">
          <div className="h-12 rounded-xl bg-white" />
          <div className="h-12 rounded-xl bg-white" />
        </div>
      </div>
    </AppScreen>
  );
}

// ---------------------------------------------------------------------------

export const SCREENS = {
  demo: DemoScreen,
  home: HomeScreen,
  feeds: FeedsScreen,
  "share-sheet": ShareSheetScreen,
  "biolink-form": BiolinkFormScreen,
  profile: ProfileScreen,
  "my-profile": MyProfileScreen,
  "my-profile-bg": MyProfileBackgroundScreen,
  "biolink-manage": BiolinkManageScreen,
  missions: MissionsScreen,
  "redeem-sheet": RedeemSheetScreen,
  vouchers: VouchersScreen,
  balance: BalanceScreen,
  "kyc-sheet": KycSheetScreen,
  "bank-sheet": BankSheetScreen,
  withdraw: WithdrawScreen,
  product: ProductScreen,
  "variant-sheet": BuyVariantSheetScreen,
  "voucher-products": VoucherProductsScreen,
  "voucher-variant": VoucherVariantSheetScreen,
  checkout: CheckoutScreen,
  "payment-sheet": PaymentSheetScreen,
  transactions: TransactionsScreen,
  "order-detail": OrderDetailScreen,
};
