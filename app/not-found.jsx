"use client";

import styles from "./ntp404.module.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
export default function NotFound404() {
  const headerRef = useRef(null);
  const messageRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power3.out" },
    });

    tl.fromTo(headerRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(
        messageRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0 },
        "-=0.9"
      )
      .fromTo(
        buttonRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0 },
        "0.5"
      );
  }, []);
  return (
    <>
      <div className={styles.container404}>
        <div className={styles.pageHeading}>
          <span ref={headerRef} className={styles.oops}>
            Oops
          </span>
          <span ref={messageRef} className={styles.notFound}>
            <p>
              Halaman yang anda tuju tidak ditemukan, silahkan kembali ke
              halaman utama
            </p>
          </span>
          <Link ref={buttonRef} className={styles.homeButton} href="/">
            Kembali ke halaman utama
          </Link>
        </div>
      </div>
    </>
  );
}
