import { Plus_Jakarta_Sans } from "next/font/google";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://konksi-guide.com"),
  title: {
    default: "Pusat Panduan Konksi — Pakai Konksi Jadi Mudah!",
    template: "%s · Panduan Konksi",
  },
  description:
    "Panduan langkah demi langkah memakai aplikasi Konksi: buat Bio Link, tarik saldo, jalankan misi, belanja, pakai voucher, dan lacak pesanan.",
  icons: { icon: "/img/favicon.png" },
};

export const viewport = {
  themeColor: "#745EAE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${jakarta.variable} h-full`} suppressHydrationWarning>
      <head>
        {/* Terapkan ukuran teks pilihan pengguna sebelum halaman tampil, supaya tidak berkedip. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var s=localStorage.getItem("konksi-guide:text-size");if(s&&s!=="normal")document.documentElement.setAttribute("data-text",s)}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-sun focus:px-4 focus:py-3 focus:font-bold brut-sm rounded-xl"
        >
          Langsung ke isi halaman
        </a>
        <SiteHeader />
        <main id="konten" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
