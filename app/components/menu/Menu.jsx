"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "./menu.scss";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/works", label: "Work" },
  { path: "/contact", label: "Contact" },
];

const Menu = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Close the mobile menu when clicking outside

  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.75,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 2,
          duration: 1,
          stagger: 0.12,
          ease: "power4.inOut",
          delay: -0.25,
        })
        .to(
          ".menu-info-social",
          {
            // x: 10,
            duration: 0.9,
            stagger: 0.18,
            ease: "power4.inOut",
            delay: -0.2,
            opacity: 1,
          },
          "+=30%"
        )
        .to(".info-geo-location", {
          x: 10,
          duration: 0.7,
          stagger: 0.2,
          ease: "power4.inOut",
          delay: -0.5,
          opacity: 1,
        });
    },

    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar">
        <div className="menu-logo">
          <Link href="/">Bagian.corps</Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p>Menu</p>
        </div>
      </div>
      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <Link href="/">Bagian.corps</Link>
          </div>
          <div className="menu-close" onClick={toggleMenu}>
            <p>Close</p>
          </div>
        </div>
        <div className="menu-close-icon">
          <p>&#x2715;</p>
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link href={link.path} className="menu-link">
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info">
            <div className="menu-info-col menu-info-social">
              <a href="#">X&#8599;</a>
              <a href="#">Youtube&#8599;</a>
              <a href="#">Behance&#8599;</a>
              <a href="#">Dribbble&#8599;</a>
              <a href="#">Instagram&#8599;</a>
            </div>
            <div className="menu-info-col info-geo-location">
              <p>Indonesia, Surabaya. Sudirman x44, 3rd Floor</p>
              <p>2109 3128 3189</p>
            </div>
          </div>
        </div>
        <div className="menu-preview">
          <p>
            est
            <sup style={{ transform: "rotate(6deg)", display: "inline-flex" }}>
              2019
            </sup>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
