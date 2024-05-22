import { Inter } from "next/font/google";
import "./globals.css";

import Menu from "@/app/components/menu/Menu";
import SmoothScroll from "@/app/components/smoothscroll/SmoothScroll";
import localFont from "next/font/local";

const LeMurmure = localFont({
  src: "../public/fonts/LeMurmure.woff",
  display: "swap",
  variable: "--font-LeMurmure",
  rel: "preload",
  as: "font",
});

const MangoMedium = localFont({
  src: "../public/fonts/MangoGrotesque-Thin.woff2",
  display: "swap",
  variable: "--font-MangoThin",
  rel: "preload",
  as: "font",
});

const SwitzerRegular = localFont({
  src: "../public/fonts/Switzer-Regular.woff2",
  display: "swap",
  variable: "--font-SwitzerRegular",
  rel: "preload",
  as: "font",
});
const ChillaxRegular = localFont({
  src: "../public/fonts/Chillax-Variable.woff2",
  display: "swap",
  variable: "--font-ChillaxRegular",
  rel: "preload",
  as: "font",
});

const inter = Inter({ subsets: ["latin"] });

<link rel="icon" href="/favicon.ico?<generated>" sizes="32x32" />;

export const metadata = {
  title: "Bagian - Software House",
  description: [
    "Bagian adalah salah satu softwarehouse yang memiliki kredible dalam proses pembuatan website, aplikasi berbasis website, UI/UX website. Kami berlokasi di Kota Sidoarjo.",
  ],
  keywords: [
    "Softwarehouse, Pembuatan Website, Website, UI, UI/UX, Aplikasi Berbasis Website, Bagian Softwarehouse, Bagian.net Bagian.",
  ],
  authors: [
    {
      name: "Bagian.net",
      url: "https://www.bagian.net",
    },
  ],
  robots: "follow, index",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${LeMurmure.variable} ${MangoMedium.variable} ${SwitzerRegular.variable}`}
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <Menu />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
