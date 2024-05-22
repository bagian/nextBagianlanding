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
const SwitzerLight = localFont({
  src: "../public/fonts/Switzer-Extralight.woff2",
  display: "swap",
  variable: "--font-SwitzerLight",
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
  title: {
    default: "Bagian - Software House",
    tempalte: "%s - Software House",
  },
  description: [
    "Bagian adalah salah satu Software House yang memiliki kredible dalam proses pembuatan website, aplikasi berbasis website, UI/UX website. Kami berlokasi di Kota Sidoarjo.",
  ],
  keywords: [
    "Softwarehouse, Pembuatan Website, Website, UI, UI/UX, Aplikasi Berbasis Website, Bagian Softwarehouse, Bagian.net, Bagian, Bagian Corp, software house, Software House, Aplikasi Website, Pembuatan Website, Website Sekolah, Custom Website, Kustom Website,  Maintenance Website",
  ],
  twitter: {
    card: "summary_large_image",
    title: "Bagian - Software House",
    description:
      "Bagian adalah salah satu Software House yang memiliki kredible dalam proses pembuatan website, aplikasi berbasis website, UI/UX website. Kami berlokasi di Kota Sidoarjo.",
    images: ["../public/img/bagianLogo.png"],
  },
  facebook: {
    card: "summary_large_image",
    title: "Bagian - Software House",
    description:
      "Bagian adalah salah satu Software House yang memiliki kredible dalam proses pembuatan website, aplikasi berbasis website, UI/UX website. Kami berlokasi di Kota Sidoarjo.",
    images: ["../public/img/bagianLogo.png"],
  },
  linkedin: {
    card: "summary_large_image",
    title: "Bagian - Software House",
    description:
      "Bagian adalah salah satu Software House yang memiliki kredible dalam proses pembuatan website, aplikasi berbasis website, UI/UX website. Kami berlokasi di Kota Sidoarjo.",
    images: ["../public/img/bagianLogo.png"],
  },
  pinterest: {
    card: "summary_large_image",
    title: "Bagian - Software House",
    description:
      "Bagian adalah salah satu Software House yang memiliki kredible dalam proses pembuatan website, aplikasi berbasis website, UI/UX website. Kami berlokasi di Kota Sidoarjo.",
    images: ["../public/img/bagianLogo.png"],
  },
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
      className={`${LeMurmure.variable} ${MangoMedium.variable} ${SwitzerRegular.variable} ${SwitzerLight.variable}`}
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <Menu />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
