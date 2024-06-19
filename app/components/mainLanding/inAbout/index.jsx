"use client";

import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

function IntroAbout() {
  return (
    <>
      <div
        className={`${styles.introContent} mt-[47rem] lg:mt-[65rem] xl:mt-[65rem] mb-8 items-center justify-center flex flex-col py-16`}
      >
        <div className={`${styles.introItems} `}>
          <div
            className={`${styles.introItems_title} text-center font-SwitzerRegular`}
          >
            <h1>Tentang Kami</h1>
          </div>
          <div
            className={`${styles.introItems_desc} text-center py-16 xl:max-w-[800px] mx-auto`}
          >
            <p>
              Kami adalah penyedia layanan digital yang berfokus pada pembuatan,
              pemeliharaan, dan pengembangan website berkualitas tinggi. Kami
              didirikan dengan tujuan membantu bisnis dari berbagai skala untuk
              memperkuat kehadiran online mereka dan mencapai tujuan bisnis
              melalui solusi digital yang inovatif.
            </p>
          </div>
        </div>
        <div className={`${styles.introButton_cta}`}>
          <div className={`${styles.headerButton_cta}`}>
            <Link
              href="/kontak-kami"
              className={`${styles.button_cta_link} flex flex-rwo items-center justify-center gap-2`}
            >
              Selengkapnya{" "}
              <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroAbout;
