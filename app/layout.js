import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import Menu from "@/app/components/menu/Menu";
import SmoothScroll from "@/app/components/smoothscroll/SmoothScroll";
import localFont from "next/font/local";
import bagianOg from "../public/img/Og-render.png";
import NavbarNew from "./components/Headers";
import TopSlides from "./components/TopSlides";
import Footer from "./components/mainLanding/inFooter";
export const contentType = "img/png";

export const openGraphImage = {
  url: bagianOg.src,
  width: 1200,
  height: 630,
  alt: "Bagian.net",
  type: "image/png",
};
// Menyiapkan metadata untuk SEO dan sharing
// Memperbaiki metadata untuk Twitter agar gambar Open Graph muncul ketika dibagikan
export const updateTwitterImage = () => {
  metadata.metaTags["twitter:image"] = openGraphImage.url; // Menggunakan .url bukan .src
  metadata.twitter.image = openGraphImage.url; // Menggunakan .url bukan .src
};

export const metadata = {
  title: "Bagian - Software House",
  description:
    "Bagian adalah salah satu Software House yang memiliki kredibilitas tinggi dalam proses pembuatan website, aplikasi berbasis web, dan UI/UX design.",
  keywords:
    "software house, pembuatan website, aplikasi web, UI/UX design, Bagian, bagian corp, software house, aplikasi website, pembuatan website, website sekolah, custom website, maintenance website.",
  authors: [
    {
      name: "Bagian.net",
      url: "https://www.bagian.net",
    },
  ],
  openGraph: {
    title: "Bagian - Software House",
    description:
      "Bagian adalah salah satu Software House yang memiliki kredibilitas tinggi dalam proses pembuatan website, aplikasi berbasis web, dan UI/UX design.",
    image: openGraphImage.url,
    url: "https://www.bagian.net",
    type: "website",
  },
  metaTags: {
    "og:title": "Bagian - Software House",
    "og:description":
      "Bagian adalah salah satu Software House yang memiliki kredibilitas tinggi dalam proses pembuatan website, aplikasi berbasis web, dan UI/UX design.",
    "og:image": openGraphImage.url,
    "og:url": "https://www.bagian.net",
    "og:type": "website",
    "twitter:card": "summary_large_image",
    "twitter:title": "Bagian - Software House",
    "twitter:description":
      "Bagian adalah salah satu Software House yang memiliki kredibilitas tinggi dalam proses pembuatan website, aplikasi berbasis web, dan UI/UX design.",
    "twitter:image": openGraphImage.url,
  },
};

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

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${LeMurmure.variable} ${MangoMedium.variable} ${SwitzerRegular.variable} ${SwitzerLight.variable} ${ChillaxRegular.variable}`}
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <TopSlides />
        <NavbarNew />
        <SmoothScroll>{children}</SmoothScroll>

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-EHSDFVLHP7`}
        />
        <Script
          id="google-analytics-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-EHSDFVLHP7', {
        page_path: window.location.pathname,
        page_location: window.location.href,
        page_title: document.title
      });
    `,
          }}
        />
      </body>
    </html>
  );
}
