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

  let xPercent = 0;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Menghapus animasi yang terkait dengan scroll
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent > 100) {
      xPercent = 0;
    } else if (xPercent < 0) {
      xPercent = 100;
    }
    gsap.set(motionTextOne.current, { xPercent: -xPercent });
    gsap.set(motionTextSecond.current, { xPercent: -xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.002;
  };

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
                  Website Sekolah Darul Husada Surabaya
                  <StarsWhite />
                  Monitoring Dashboard Sekolah SMA
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Sekolah Darul Husada Surabaya
                  <StarsWhite />
                  Monitoring Dashboard Sekolah SMA
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Sekolah Darul Husada Surabaya
                  <StarsWhite />
                  Monitoring Dashboard Sekolah SMA
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Sekolah Darul Husada Surabaya
                  <StarsWhite />
                  Monitoring Dashboard Sekolah SMA
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Sekolah Darul Husada Surabaya
                  <StarsWhite />
                  Monitoring Dashboard Sekolah SMA
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Sekolah Darul Husada Surabaya
                  <StarsWhite />
                  Monitoring Dashboard Sekolah SMA
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Sekolah Darul Husada Surabaya
                  <StarsWhite />
                  Monitoring Dashboard Sekolah SMA
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Sekolah Darul Husada Surabaya
                  <StarsWhite />
                  Monitoring Dashboard Sekolah SMA
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Sekolah Darul Husada Surabaya
                  <StarsWhite />
                  Monitoring Dashboard Sekolah SMA
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Sekolah Darul Husada Surabaya
                  <StarsWhite />
                  Monitoring Dashboard Sekolah SMA
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-10">
                  Website Sekolah Darul Husada Surabaya
                  <StarsWhite />
                  Monitoring Dashboard Sekolah SMA
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
              </div>
              <div className={styles.motion} ref={motionTextSecond}>
                <span className="flex gap-8">
                  Website Sekolah Darul Husada Surabaya
                  <StarsWhite />
                  Monitoring Dashboard Sekolah SMA
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Sekolah Darul Husada Surabaya
                  <StarsWhite />
                  Monitoring Dashboard Sekolah SMA
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Sekolah Darul Husada Surabaya
                  <StarsWhite />
                  Monitoring Dashboard Sekolah SMA
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Sekolah Darul Husada Surabaya
                  <StarsWhite />
                  Monitoring Dashboard Sekolah SMA
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Sekolah Darul Husada Surabaya
                  <StarsWhite />
                  Monitoring Dashboard Sekolah SMA
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Sekolah Darul Husada Surabaya
                  <StarsWhite />
                  Monitoring Dashboard Sekolah SMA
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Sekolah Darul Husada Surabaya
                  <StarsWhite />
                  Monitoring Dashboard Sekolah SMA
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Sekolah Darul Husada Surabaya
                  <StarsWhite />
                  Monitoring Dashboard Sekolah SMA
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Sekolah Darul Husada Surabaya
                  <StarsWhite />
                  Monitoring Dashboard Sekolah SMA
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Sekolah Darul Husada Surabaya
                  <StarsWhite />
                  Monitoring Dashboard Sekolah SMA
                  <StarsWhite /> Pemeliharaan Website PT. Jaya Adi Nusantara
                  <StarsWhite /> Pemeliharaan Website CV. Agung Abadi
                  <StarsWhite />
                </span>
                <span className="flex gap-8">
                  Website Sekolah Darul Husada Surabaya
                  <StarsWhite />
                  Monitoring Dashboard Sekolah SMA
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
