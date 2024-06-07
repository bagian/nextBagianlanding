"use client";
import styles from "./Marquee.module.scss";
import { useRef, useEffect, useTransform } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";
import StarsWhite from "../components/svg/StarsWhite";

export default function MarqueeText() {
  // const firstText = useRef(null);
  const motionTextOne = useRef(null);
  const motionTextSecond = useRef(null);
  // const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 8,
        start: "1",
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    // gsap.set(firstText.current, { xPercent: xPercent });
    // gsap.set(secondText.current, { xPercent: xPercent });
    gsap.set(motionTextOne.current, { xPercent: xPercent });
    gsap.set(motionTextSecond.current, { xPercent: xPercent });
    // gsap.set(motionText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.0009 * direction;
  };

  return (
    <>
      <motion.main className={styles.main}>
        <div className={styles.sliderContainer}>
          <motion.div ref={slider} className={styles.slider}>
            <div className={styles.motionContainer}>
              <div className={styles.motion} ref={motionTextOne}>
                <span className="flex gap-20">
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite /> Web Application
                </span>
                <span className="flex gap-20">
                  <StarsWhite />
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite /> Web Application
                </span>
                <span className="flex gap-20">
                  <StarsWhite />
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite /> Web Application
                </span>
                <span className="flex gap-20">
                  <StarsWhite />
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite /> Web Application
                </span>
                <span className="flex gap-20">
                  <StarsWhite />
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite /> Web Application
                </span>
                <span className="flex gap-20">
                  <StarsWhite />
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite /> Web Application
                </span>
                <span className="flex gap-20">
                  <StarsWhite />
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite /> Web Application
                </span>
                <span className="flex gap-20">
                  <StarsWhite />
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite /> Web Application
                </span>
                <span className="flex gap-20">
                  <StarsWhite />
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite /> Web Application
                </span>
                <span className="flex gap-20">
                  <StarsWhite />
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite /> Web Application
                </span>
                <span className="flex gap-20">
                  <StarsWhite />
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite /> Web Application
                </span>
                <span className="flex gap-20">
                  <StarsWhite />
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite /> Web Application
                </span>
                <span className="flex gap-20">
                  <StarsWhite />
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite /> Web Application
                </span>
                <span className="flex gap-20">
                  <StarsWhite />
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite /> Web Application
                </span>
                <span className="flex gap-20">
                  <StarsWhite />
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite /> Web Application
                </span>
                <span className="flex gap-20">
                  <StarsWhite />
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite />
                  Web Application
                  <StarsWhite />
                </span>
              </div>
              <div className={styles.motion} ref={motionTextSecond}>
                <span className="flex gap-20">
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite /> Web Application
                </span>
                <span className="flex gap-20">
                  <StarsWhite />
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite /> Web Application
                </span>
                <span className="flex gap-20">
                  <StarsWhite />
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite /> Web Application
                </span>
                <span className="flex gap-20">
                  <StarsWhite />
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite /> Web Application
                </span>
                <span className="flex gap-20">
                  <StarsWhite />
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite /> Web Application
                </span>
                <span className="flex gap-20">
                  <StarsWhite />
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite /> Web Application
                </span>
                <span className="flex gap-20">
                  <StarsWhite />
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite /> Web Application
                </span>
                <span className="flex gap-20">
                  <StarsWhite />
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite /> Web Application
                </span>
                <span className="flex gap-20">
                  <StarsWhite />
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite /> Web Application
                </span>
                <span className="flex gap-20">
                  <StarsWhite />
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite /> Web Application
                </span>
                <span className="flex gap-20">
                  <StarsWhite />
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite /> Web Application
                </span>
                <span className="flex gap-20">
                  <StarsWhite />
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite /> Web Application
                </span>
                <span className="flex gap-20">
                  <StarsWhite />
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite /> Web Application
                </span>
                <span className="flex gap-20">
                  <StarsWhite />
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite /> Web Application
                </span>
                <span className="flex gap-20">
                  <StarsWhite />
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite /> Web Application
                </span>
                <span className="flex gap-20">
                  <StarsWhite />
                  Website
                  <StarsWhite />
                  Web Design
                  <StarsWhite />
                  Web Application
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
