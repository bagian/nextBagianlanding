"use client";

import React, { useState, useRef, useEffect } from "react";
import "./pageMain.scss";
import Link from "next/link";

import dataImage1 from "../public/img/dataImg1.png";
import dataImage2 from "../public/img/dataImg2.jpg";
import SoonGreen from "../public/img/soon-backdrop.jpg";
import SoonBlue from "../public/img/soon-backdrop-blue.jpg";
import Lentera from "../public/img/lentera-fajar-indonesia.jpg";
import recentProjectImages from "../public/img/recentProjects.jpg";
import bagianLogo from "../public/img/bagianLogo.png";

import ComingSoonLogo from "../public/img/soon-two.png";
import BagianBackground from "../public/img/bagian-bg.png";

import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FiArrowRight } from "react-icons/fi";

import StarsBw from "./components/svg/StarsBw";
import StarsWhite from "./components/svg/StarsWhite";

import MarqueeText from "./components/MarqueeText";

import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Spline from "@splinetool/react-spline";

// gsap.registerPlugin(splitText);

// let splitTextAnm = new SplitText(".page-stag", { type: "chars" });
// let chars = splitTextAnm.chars;

const Home = () => {
  const pageHeader = useRef();
  const tl = useRef();

  // useGSAP(
  //   () => {
  //     gsap.set(".title-top", { y: 75 });
  //     tl.current = gsap
  //       .timeline({ repeatRefresh: true })
  //       .to(".page-wrapper", {
  //         duration: 1.15,
  //         // clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  //         ease: "power4.inOut",
  //         delay: 1.5,
  //         stagger: 2,
  //       })
  //       .to(".title-top", {
  //         opacity: 1,
  //         y: 2,
  //         duration: 1,
  //         stagger: 0.12,
  //         ease: "power4.inOut",
  //         delay: -0.15,
  //       })
  //       .to(".title-base", {
  //         opacity: 1,
  //         y: 42,
  //         duration: 1,
  //         stagger: 0.12,
  //         ease: "power4.inOut",
  //         delay: -0.15,
  //       })
  //       .to(".path-p-side", {
  //         opacity: 1,
  //         y: 42,
  //         duration: 0.5,
  //         stagger: 0.17,
  //         ease: "power4.inOut",
  //         delay: 0.15,
  //       });
  //   },

  //   { scope: pageHeader }
  // );
  // useEffect(() => {
  //   gsap.to(".page-stag", {
  //     y: 65,
  //     opacity: 1,
  //     duration: 1.75,
  //     stagger: 0.12,
  //     delay: 2.8,
  //     ease: "power4.inOut",
  //     clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  //   });
  // }, []);

  const pathStyles = {
    // background:
    //   "linear-gradient(49deg, rgba(255,255,255,1) 0%, rgba(189,77,192,1) 42%, rgba(249,188,133,1) 74%, rgba(68,83,222,1) 100%)",
    background:
      "linear-gradient(52deg, rgba(197,251,69,1) 0%, rgba(115,207,35,1) 51%)",
    backgroundClip: "text",
    color: "transparent",
    "-webkit-background-clip": "text",
    // backgroundColor: "#4548fb",
  };

  const splineStyles = {
    width: "100%",
    // height: "90rem",
    position: "relative",
    justifyContent: "center",
    margin: "auto",
    alignContent: "center",
    // paddingTop: "-30em",
    // top: "-30em",
    // left: "50em",
    // transform: "translateX(10%)",
  };

  const svgPathStyle = {
    display: "none",
  };

  // const dataRecentProject = [

  //   {
  //     title: "Kinaya Interior Design",
  //     labelOne: "UI/UX Design",
  //     labelTwo: "Data Label",
  //     image: ,
  //   },
  // ];

  const COLORS_TOP = ["#13FFAA", "#3D1EC6", "#CE84CF", "#63DD33"];
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;
  // const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <>
      <div className="relative page-header">
        <div>
          <div className="overflow-hidden page-content" ref={pageHeader}>
            <div className="overflow-hidden pageContent-wrapper">
              <motion.section
                className="pointer-events-none flex flex-[4] text-center page-wrapper overflow-hidden xl:h-screen lg:h-screen md:h-screen h-screen rounded-b-[1.5rem] xl:rounded-b-[3rem] md:rounded-b-[3rem] lg:rounded-b-[3rem] relative"
                style={{
                  backgroundImage,
                  overflow: "hidden",
                }}
              >
                <div className="absolute bottom-0 overflow-hidden marqueeContainer">
                  <div className="overflow-hidden marqueeWrapper">
                    <MarqueeText />
                  </div>
                </div>
                <div className="absolute inset-0">
                  <Canvas>
                    <Stars radius={50} count={400} factor={4} fade speed={3} />
                  </Canvas>
                </div>
                <div className="absolute flex flex-col items-center justify-center align-middle mt-36 flex-nowrap page-stag">
                  <div className="flex flex-col items-center text-center gradientScale">
                    <div className="flex gap-5 whitespace-nowrap title-x title-top">
                      Get your
                      <span style={pathStyles}>dream</span>
                    </div>
                    <span className="flex flex-row gap-3 text-center title-x title-base">
                      Idea<span style={pathStyles}>to life.</span>
                    </span>
                    <p className="flex gap-3 mt-10 text-gray-500 path-p-side">
                      We create <StarsBw /> We Deploy <StarsBw /> We Maintenance
                    </p>
                  </div>
                  <Link href="#" target="_blank">
                    <motion.button
                      style={{
                        border,
                        boxShadow,
                      }}
                      whileHover={{
                        scale: 1.035,
                        ease: "easeInOut",
                      }}
                      whileTap={{
                        scale: 0.985,
                        ease: "easeInOut",
                      }}
                      className="relative flex items-center gap-2 px-8 py-4 mt-24 transition-colors rounded-full pointer-events-auto group w-fit bg-gray-950/10 text-gray-50 hover:bg-gray-950/50"
                    >
                      Hubungi Kami
                      <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                    </motion.button>
                  </Link>
                  {/* <span className="getStarted">Get Started</span> */}
                </div>
              </motion.section>
            </div>
          </div>
          <div className="page-container mt-[25rem] text-white">
            <div className="pageBig-headtitle lg:m-28 xl:mt-[28em] relative">
              <Image
                src="/logo/circle-about-bagian_.png"
                alt="logo"
                width={600}
                height={600}
                objectFit="cover"
                quality={100}
                className="w-[150px] h-[150px] absolute -top-[3em] z-[3] -right-[3em] logosCircle-bagian"
              />
              <div className="relative p-8 overflow-hidden pageBig-item">
                <div className="pageBig-headling">
                  <p className="text-[9rem] text-start pageBig-intro">Intro.</p>
                  <p className="my-5 pageBig-about">
                    <strong>Bagian.net</strong> bergerak dalam pembuatan website
                    memiliki peran penting dalam memfasilitasi kebutuhan digital
                    perusahaan dan individu, mulai dari solusi perangkat lunak
                    kustom hingga representasi online melalui website dan
                    aplikasi. Kami berusaha untuk memberikan solusi yang
                    inovatif, efisien, dan sesuai dengan kebutuhan klien kami.
                    Dalam pembuatan website memiliki peran yang krusial dalam
                    mendukung transformasi digital perusahaan dan organisasi di
                    era digital ini. Dengan fokus pada pengembangan perangkat
                    lunak berkualitas tinggi dan pembuatan website yang menarik,
                    kami membantu klien mencapai tujuan mereka dan tetap
                    bersaing di pasar yang semakin kompetitif.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="marqueeContainer">
                <div className="marqueeWrapper md:mt-52 lg:mt-52 xl:mt-52">
                  <MarqueeText />
                </div>
              </div> */}
            <div className="workRecents my-52">
              <div className="m-10 recentContainer-recent">
                <div className="mt-24 pageContent-recent">
                  <div className="headerContent rounded-2xl h-[50rem] relative">
                    <div className="my-16 workHeadline-x">
                      <div className="flex flex-col justify-between headlineTitle-x lg:flex-row md:flex-row md:items-end lg:items-end">
                        <div className="text-6xl font-[900] uppercase lg:text-8xl headlingHeading-x">
                          Project
                        </div>
                        <div className="text-sm headlingHeading-x">
                          kami membuat sesuai dengan keinginan anda.
                        </div>
                      </div>
                    </div>
                    <div className="mb-8 xl:mb-0 lg:mb-0 md:mb-0 recentWorks-body-x">
                      <div className="relative col-span-2 overflow-hidden contentWr-body rounded-2xl">
                        <div className="relative overflow-hidden contentItems-x ">
                          <div className="absolute z-10 hidden lg:block lg:top-10 lg:left-10 contentItems-x-label">
                            <div className="px-5 py-2 font-semibold rounded-full labelRecent-x xl:px-8 xl:py-4 lg:px-8 lg:py-4">
                              <span className="flex gap-4">
                                <StarsWhite />
                                Recent
                              </span>
                            </div>
                          </div>
                          <div className="overflow-hidden cursor-pointer contentWr-image-x rounded-2xl">
                            <Image
                              src={Lentera}
                              alt="Recent Projects"
                              height={1200}
                              width={1200}
                              quality={100}
                              objectFit="cover"
                              style={{
                                objectFit: "cover",
                                overflow: "hidden",
                              }}
                            />
                          </div>
                          <div className="relative mt-8 contentItems-recents-i rounded-2xl lg:absolute lg:bottom-10 lg:w-[40rem] lg:right-10">
                            <div className="p-5 contentItems-body-i">
                              <div className="flex flex-col justify-between gap-4 xs:flex-row xl:flex-row md:flex-row lg:flex-row contentItems-label-i">
                                <span className="px-8 py-2 text-center border rounded-full contentItems-label-in">
                                  Lentera Fajar Indonesia
                                </span>
                                <span className="px-8 py-2 text-center border rounded-full contentItems-label-in">
                                  2022
                                </span>
                              </div>
                              <div className="flex flex-col mt-10 contentItems-about-i xl:flex-row xl:p-6 lg:flex-row lg:items-end lg:justify-between">
                                <span className="font-semibold lg:w-3/6 xl:text-2xl">
                                  Sekolah Lentera Fajar Indonesia adalah lembaga
                                  pendidikan yang khusus menangani anak-anak
                                  berkebutuhan khusus.
                                </span>
                                <span className="mt-10 ">
                                  <Link
                                    href="https://www.lenterafajarindonesia.sch.id/"
                                    target="_blank"
                                  >
                                    <motion.button
                                      whileHover={{
                                        scale: 1.035,
                                        ease: "easeInOut",
                                      }}
                                      whileTap={{
                                        scale: 0.985,
                                        ease: "easeInOut",
                                      }}
                                      className="relative flex items-center gap-2 transition-colors rounded-full pointer-events-auto group w-fit "
                                    >
                                      Lihat Project
                                      <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                                    </motion.button>
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pb-32 md:pt-8 lg:pt-8 xl:pt-8 page-wrapper">
                      <div className="flex flex-col gap-8 xl:flex-row page-items">
                        <div className="relative flex overflow-hidden contentWr-body rounded-2xl xl:basis-[170rem]">
                          <div className="contentWr-f">
                            <div className="relative overflow-hidden contentItems-x">
                              <div className="absolute z-10 hidden lg:block lg:top-10 lg:left-10 contentItems-x-label">
                                <div className="px-5 py-2 font-semibold rounded-full bg-neutral-700 label-x xl:px-8 xl:py-4 lg:px-8 lg:py-4">
                                  <span className="flex gap-4">
                                    <StarsWhite />
                                    Projects
                                  </span>
                                </div>
                              </div>
                              <div className="overflow-hidden cursor-pointer contentWr-image-x rounded-2xl">
                                <Image
                                  src={dataImage2}
                                  alt="Recent Projects"
                                  height={1200}
                                  width={1200}
                                  quality={100}
                                  objectFit="cover"
                                  style={{
                                    objectFit: "cover",
                                    overflow: "hidden",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="relative mt-8 contentItems-i bg-neutral-700 rounded-2xl lg:absolute lg:bottom-10 lg:w-[40rem] lg:left-10">
                              <div className="p-5 contentItems-body-i">
                                <div className="flex flex-col justify-between gap-4 xs:flex-row xl:flex-row md:flex-row lg:flex-row contentItems-label-i">
                                  <span className="px-8 py-2 text-center border rounded-full contentItems-label-in">
                                    Kinaya
                                  </span>
                                  <span className="px-8 py-2 text-center border rounded-full contentItems-label-in">
                                    2019
                                  </span>
                                </div>
                                <div className="flex flex-col mt-10 contentItems-about-i xl:flex-row xl:p-6 lg:flex-row lg:items-end lg:justify-between">
                                  <span className="font-semibold lg:w-3/6 xl:text-2xl">
                                    Kinaya Interior Design adalah perusahaan
                                    profesional yang bergerak di bidang desain
                                    interior, konstruksi, dan sipil.
                                  </span>
                                  <span className="mt-10 ">
                                    <Link
                                      href="https://wwww.kinayainterior.com/"
                                      target="_blank"
                                      alt="Kinaya"
                                    >
                                      <motion.button
                                        whileHover={{
                                          scale: 1.035,
                                          ease: "easeInOut",
                                        }}
                                        whileTap={{
                                          scale: 0.985,
                                          ease: "easeInOut",
                                        }}
                                        className="relative flex items-center gap-2 transition-colors rounded-full pointer-events-auto group w-fit "
                                      >
                                        Lihat Project
                                        <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                                      </motion.button>
                                    </Link>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=" contentWr-body rounded-2xl">
                          <div className="relative overflow-hidden contentItems-x">
                            {/* <div className="absolute z-10 justify-center hidden lg:block lg:top-10 lg:left-5 contentItems-x-label ">
                                <div className="flex justify-between w-full">
                                  <div className="px-8 py-4 font-semibold border rounded-full label-x xl:px-8 xl:py-4 lg:px-8 lg:py-4 xl:flex">
                                    <span className="flex items-center gap-4 align-middle">
                                      <StarsWhite />
                                      Projects
                                    </span>
                                  </div>
                                </div>
                              </div> */}
                            <div className="overflow-hidden contentWr-image-x rounded-2xl">
                              <Image
                                className="pointer-events-none"
                                src={BagianBackground}
                                alt="Coming Soon"
                                height={1200}
                                width={1200}
                                quality={100}
                                objectFit="cover"
                                style={{
                                  objectFit: "cover",
                                  overflow: "hidden",
                                  // filter: "blur(6px)",
                                  // transform: "scale(190%)",
                                }}
                              />
                            </div>
                            <div className="absolute w-full bottom-[8rem] lg:bottom-[22rem] contentItems-i xl:bg-transparent rounded-2xl lg:absolute lg:left-0">
                              <div className="p-5 contentItems-body-i">
                                <div className="flex flex-col justify-between gap-4 xs:flex-row xl:flex-col md:flex-col lg:flex-col contentItems-label-i">
                                  {/* <span className="px-8 py-4 text-center border rounded-full contentItems-label-in">
                                      Coming Soon
                                    </span> */}
                                </div>
                              </div>
                              <div className="flex flex-col justify-center w-full gap-3 m-auto align-middle comingProject-i ">
                                <span className="px-8 py-4 m-auto text-center rounded-full contentItems-label-in">
                                  <Image
                                    src={ComingSoonLogo}
                                    alt="logo"
                                    width={600}
                                    height={600}
                                    objectFit="cover"
                                    quality={100}
                                    className="w-[150px] h-[150px] logosCircle-bagian pointer-events-none drop-shadow-md"
                                  />
                                </span>
                                <span className="px-8 py-4 m-auto text-sm text-center bg-black rounded-full contentItems-label-in lg:w-52">
                                  Coming Soon
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
