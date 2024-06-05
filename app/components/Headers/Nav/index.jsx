"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../animated";
import Link from "./link";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Tentang Kami",
    href: "/wewer",
  },
  {
    title: "Proyek",
    href: "/wer32",
  },
  {
    title: "Tim Bagian",
    href: "/cae",
  },
  {
    title: "Blog",
    href: "/asdw",
  },
];

export default function Navindex() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={menuSlide}
      //   variants={{
      //     initial: { y: "100%" },
      //     enter: {
      //       y: "0%",
      //       transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      //     },
      //     exit: {
      //       y: "-100%",
      //       transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      //     },
      //   }}
      //   initial="initial"
      //   animate="enter"
      //   exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}
        </div>
        <div className={styles.footer}>
          <a>Awwwards</a>
          <a>Instagram</a>
          <a>Dribble</a>
          <a>LinkedIn</a>
        </div>
      </div>
    </motion.div>
  );
}
