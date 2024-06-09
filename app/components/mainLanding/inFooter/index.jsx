import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
// import NewsletterForm from "./NewsletterForm";

const footerData = [
  {
    title: "Navigasi",
    links: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Tentang Kami",
        href: "/#",
      },
      {
        label: "Proyek",
        href: "/#",
      },
      {
        label: "Tim Bagian",
        href: "/#",
      },
      {
        label: "Blog",
        href: "/#",
      },
    ],
  },
  {
    title: "Follow Kami",
    links: [
      {
        label: "Instagram",
        href: "/#",
      },
      {
        label: "Tiktok",
        href: "/#",
      },
      {
        label: "Behance",
        href: "/#",
      },
      {
        label: "Dribbble",
        href: "/#",
      },
    ],
  },
  {
    title: "Carrer",
    links: [
      {
        label: "Carrer Bagian",
        href: "/#",
      },
    ],
  },
];

function Footer() {
  return (
    <>
      <div className={`${styles.footer}`}>
        <div className={`${styles.footerContent}`}>
          <div className={`${styles.footerHeading}`}>
            <h2>Tak Kenal Maka Tak Sayang</h2>
          </div>
          <div className={`${styles.footerHead_link}`}>
            <div className={`${styles.footerHead_sub}`}>
              Setiap proyek adalah ajang untuk menunjukkan kreativitas dan
              keahlian. Kami selalu berusaha memberikan layanan terbaik untuk
              klien, mulai dari desain kece, fungsionalitas, sampai pemeliharaan
              website tanpa ribet.
            </div>
            <div className={`${styles.footerHead_item}`}>
              {footerData.map((item, index) => (
                <div key={index} className={`${styles.footerHead_item_link}`}>
                  <div className={`${styles.footerLink_title}`}>
                    {item.title}
                  </div>
                  {item.links.map((link, index) => (
                    <span key={index} className={`${styles.footerLink_item}`}>
                      <Link href={link.href}>{link.label}</Link>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`${styles.footerBottom}`}>
          <div className={`${styles.footerBottom_item}`}>
            <span className={`${styles.footerBottom_item_copyright} block`}>
              {new Date().getFullYear()}{" "}
              <strong>
                <Link href="/">&copy; Bagian.net</Link>
              </strong>{" "}
              All rights reserved.
            </span>
            <div className={`${styles.footerBottom_item_x}`}>
              <span className={`${styles.footerBottom_item_proud} block`}>
                {/* <IndSvgs /> */}
                100% Karya Anak Bangsa Indonesia.
              </span>
              <span className={`${styles.footerBottom_item_link}`}>
                <Link href="/">Privacy Policy</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
