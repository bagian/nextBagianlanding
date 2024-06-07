"use client";
import styles from "./styles.module.scss";
import { useEffect, useState, useRef } from "react";
import Nav from "./Nav";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import BagianDark from "../img/bagian-logo-dark.png";

export default function Navigation(e) {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 60); // Pastikan ini hanya mengaktifkan 'fixed' ketika benar-benar perlu
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  if (e.parentNode) {
    e.parentNode.removeChild(e);
  }
  return (
    <>
      <div className={styles.main}>
        <div
          ref={headerRef}
          className={`${styles.navContainer} ${isScrolled ? styles.fixed : ""}`}
        >
          <div className={styles.header}>
            <div className={styles.navItem}>
              <div className={styles.logo}>
                <Image src={BagianDark} alt="logo" width={100} height={100} />
              </div>
              <ul className="hidden gap-10 xl:flex lg:flex">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/#">Tentang Kami</Link>
                </li>
                <li>
                  <Link href="/#">Proyek</Link>
                </li>
                <li>
                  <Link href="/#">Tim Bagian</Link>
                </li>
                <li>
                  <Link href="/#">Blog</Link>
                </li>
              </ul>
              <div className="hidden md:flex lg:flex">
                <Link href="https://wa.link/s9c4s2" target="_blank">
                  <span className={styles.buttonCta}>Hubungi Kami</span>
                </Link>
              </div>
              <div
                onClick={() => {
                  setIsActive(!isActive);
                }}
                className={styles.button}
              >
                <div
                  className={`${styles.burger} ${
                    isActive ? styles.burgerActive : ""
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
