"use client";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import BagianDark from "../img/bagian-logo-dark.png";

export default function Navigation(e) {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  if (e.parentNode) {
    e.parentNode.removeChild(e);
  }
  return (
    <>
      <div className={styles.main}>
        <div className={styles.navContainer}>
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
                <Link href="#">
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
