"use client";
import styles from "./styles.module.scss";
import { useRef, useEffect, useTransform } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";
import StarsWhite from "../svg/StarsWhite";

export default function MarqueeText() {
  const motionTextOne = useRef(null);
  const motionTextSecond = useRef(null);
  const slider = useRef(null);
  const xPercent = useRef(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animate = () => {
      if (xPercent.current > 100) {
        xPercent.current = 0;
      } else if (xPercent.current < 0) {
        xPercent.current = 100;
      }
      gsap.set(motionTextOne.current, { xPercent: -xPercent.current });
      gsap.set(motionTextSecond.current, { xPercent: -xPercent.current });
      requestAnimationFrame(animate);
      xPercent.current += 0.002;
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <>
      <motion.main className={styles.main}>
        <div className={`${styles.header} whitespace-nowrap flex flex-row`}>
          <h1 className="font-bold">
            On Going{" "}
            {/* <span style={{ rotate: "-10deg", display: "inline-block" }}>
              📢
            </span> */}
          </h1>
        </div>
        <div className={styles.sliderContainer}>
          <motion.div ref={slider} className={styles.slider}>
            <div className={styles.motionContainer}>
              <div className={styles.motion} ref={motionTextOne}>
                <span className="flex gap-8">
                  Website Kost Yellow Kost
                  <StarsWhite />
                  Aplikasi Kasir Berbasis Dashboard
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Kost Yellow Kost
                  <StarsWhite />
                  Aplikasi Kasir Berbasis Dashboard
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Kost Yellow Kost
                  <StarsWhite />
                  Aplikasi Kasir Berbasis Dashboard
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Kost Yellow Kost
                  <StarsWhite />
                  Aplikasi Kasir Berbasis Dashboard
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Kost Yellow Kost
                  <StarsWhite />
                  Aplikasi Kasir Berbasis Dashboard
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Kost Yellow Kost
                  <StarsWhite />
                  Aplikasi Kasir Berbasis Dashboard
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Kost Yellow Kost
                  <StarsWhite />
                  Aplikasi Kasir Berbasis Dashboard
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Kost Yellow Kost
                  <StarsWhite />
                  Aplikasi Kasir Berbasis Dashboard
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Kost Yellow Kost
                  <StarsWhite />
                  Aplikasi Kasir Berbasis Dashboard
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Kost Yellow Kost
                  <StarsWhite />
                  Aplikasi Kasir Berbasis Dashboard
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Kost Yellow Kost
                  <StarsWhite />
                  Aplikasi Kasir Berbasis Dashboard
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
              </div>
              <div className={styles.motion} ref={motionTextSecond}>
                <span className="flex gap-8">
                  Website Kost Yellow Kost
                  <StarsWhite />
                  Aplikasi Kasir Berbasis Dashboard
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Kost Yellow Kost
                  <StarsWhite />
                  Aplikasi Kasir Berbasis Dashboard
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Kost Yellow Kost
                  <StarsWhite />
                  Aplikasi Kasir Berbasis Dashboard
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Kost Yellow Kost
                  <StarsWhite />
                  Aplikasi Kasir Berbasis Dashboard
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Kost Yellow Kost
                  <StarsWhite />
                  Aplikasi Kasir Berbasis Dashboard
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Kost Yellow Kost
                  <StarsWhite />
                  Aplikasi Kasir Berbasis Dashboard
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Kost Yellow Kost
                  <StarsWhite />
                  Aplikasi Kasir Berbasis Dashboard
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Kost Yellow Kost
                  <StarsWhite />
                  Aplikasi Kasir Berbasis Dashboard
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Kost Yellow Kost
                  <StarsWhite />
                  Aplikasi Kasir Berbasis Dashboard
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Kost Yellow Kost
                  <StarsWhite />
                  Aplikasi Kasir Berbasis Dashboard
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.main>
    </>
  );
}
