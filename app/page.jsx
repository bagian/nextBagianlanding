"use client";

import React, { useState, useRef, useEffect } from "react";
import "./pageMain.scss";
import Link from "next/link";

import dataImage1 from "../public/img/dataImg1.png";
import dataImage2 from "../public/img/dataImg2.jpg";

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

  const dataContent = [
    {
      title: "Wise Commerce",
      labelOne: "UI/UX Design",
      labelTwo: "UI Concept",
      image: [
        {
          src: {
            dataImage: { dataImage1 },
          },
        },
      ],
    },
    {
      title: "Kinaya Interior Design",
      labelOne: "UI/UX Design",
      labelTwo: "Data Label",
      image: <Image src={dataImage2} alt="Projects Two" />,
    },
    {
      title: "Lorem Ipsum 1",
      labelOne: "Desktop Application",
      labelTwo: "Minimalist",
      image: <Image src={dataImage1} alt="Projects Two" />,
    },
    {
      title: "Lorem Ipsum 2",
      labelOne: "Label Lorem 1",
      labelTwo: "Label Lorem 2",
      image: <Image src={dataImage2} alt="Projects Two" />,
    },
  ];
  return (
    <>
      <section className="relative page-header">
        <div className="3d-move">
          {/* <Spline
            style={splineStyles}
            scene="https://prod.spline.design/u7EWU7frnI6R1MLu/scene.splinecode"
          />
          <Spline
            style={splineStyles}
            scene="https://prod.spline.design/1YMhEOlCBwBsIIWW/scene.splinecode"
          />
          <Spline
            style={splineStyles}
            scene="https://prod.spline.design/j3V-sT0nGpV4lHrO/scene.splinecode"
          /> */}
          <div className="page-content" ref={pageHeader}>
            <div className="pointer-events-none top-[5em] flex flex-[4] text-center page-wrapper">
              <div className="flex flex-col items-center justify-center mt-36 flex-nowrap page-stag">
                {/* <span className="absolute flex items-center p-3 text-center rounded-full tagger-tag">
                Our Mission
              </span> */}
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
                {/* <span className="getStarted">Get Started</span> */}
              </div>
            </div>
            <div className="page-container">
              <div className="pageBig-headtitle xl:mt-[28em] relative">
                <Image
                  src="/logo/circle-about-bagian_.png"
                  alt="logo"
                  width={600}
                  height={600}
                  objectFit="cover"
                  quality={100}
                  className="w-[150px] h-[150px] absolute -top-[3em] z-[2] -right-[3em] logosCircle-bagian"
                />
                <div className="relative p-8 mt-32 pageBig-item">
                  <p className="text-[9rem] text-start pageBig-intro">Intro.</p>
                  <p className="my-5 pageBig-about">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam nam soluta quasi similique et quod, reiciendis
                    provident repellat, facilis dolores explicabo! Obcaecati
                    quibusdam aperiam eligendi amet nesciunt eius, odio
                    voluptatum. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Suscipit harum autem officiis maxime sit
                    non, totam facere ea corporis quas alias, natus odit libero
                    ratione? Quaerat molestiae rerum eos debitis?
                  </p>
                </div>
              </div>
              <div className="marqueeContainer">
                <div className="marqueeWrapper">
                  <MarqueeText />
                </div>
              </div>
              <div className="workRecents">
                <div className="flex items-end justify-between workShowoff mt-80">
                  <div className="flex workShowoff-title">
                    <span className="block workShowoff-titleChild">Work</span>
                    <StarsWhite style={svgPathStyle} className="hidden" />
                  </div>
                  <div className="justify-end flex text-end w-[20em] gap-6">
                    <span className="text-gray-500 w-52 workShowoff-end">
                      Kami membuat sesuai dengan keinginan anda.
                    </span>
                    {/* <StarsWhite /> */}
                  </div>
                </div>
                <div className="page-container">
                  <div className="mt-24 pageContent">
                    <div className="grid grid-cols-1 page-wrapper xl:gap-8 xl:grid-cols-2">
                      <div className="page-items">
                        <div className="content-items">
                          <Link href="https://www.behance.net/gallery/95266345/Wise-UI-Fashion-Concept">
                            <Image
                              src={dataImage1}
                              alt="logo"
                              width={1000}
                              height={1000}
                              objectFit="cover"
                              quality={100}
                              className="object-cover pointer-events-none rounded-3xl imageData"
                            />
                            <div className="flex items-center justify-between my-8 pageLink">
                              <span className="relative block">
                                Lentera Fajar Indonesia
                              </span>
                              <div className="flex flex-row gap-3 labelLink">
                                <span className="p-3 labelSide-border">
                                  SLB
                                </span>
                                <span className="p-3 labelSide-border">
                                  Company Profile
                                </span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="xl:mt-16 page-items">
                        <div className="overflow-hidden content-items">
                          <Link href="https://www.kinayainterior.com">
                            <Image
                              src={dataImage2}
                              alt="logo"
                              width={1000}
                              height={1000}
                              objectFit="cover"
                              quality={100}
                              className="object-cover pointer-events-none rounded-3xl imageData"
                            />
                            <div className="flex items-center justify-between my-8 pageLink">
                              <span>Kinaya Interior Design</span>
                              <div className="flex flex-row gap-3 labelLink">
                                <span className="p-3 labelSide-border">
                                  Company Profile
                                </span>
                                <span className="p-3 labelSide-border">
                                  Interior
                                </span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="page-items">
                        <div className="content-items">
                          <Link href="https://www.behance.net/gallery/95266345/Wise-UI-Fashion-Concept">
                            <Image
                              src={dataImage1}
                              alt="logo"
                              width={1000}
                              height={1000}
                              objectFit="cover"
                              quality={100}
                              className="object-cover pointer-events-none rounded-3xl imageData"
                            />
                            <div className="flex items-center justify-between my-8 pageLink">
                              <span className="relative block">
                                Lentera Fajar Indonesia
                              </span>
                              <div className="flex flex-row gap-3 labelLink">
                                <span className="p-3 labelSide-border">
                                  SLB
                                </span>
                                <span className="p-3 labelSide-border">
                                  Company Profile
                                </span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="xl:mt-16 page-items">
                        <div className="overflow-hidden content-items">
                          <Link href="https://www.kinayainterior.com">
                            <Image
                              src={dataImage2}
                              alt="logo"
                              width={1000}
                              height={1000}
                              objectFit="cover"
                              quality={100}
                              className="object-cover pointer-events-none rounded-3xl imageData"
                            />
                            <div className="flex items-center justify-between my-8 pageLink">
                              <span>Kinaya Interior Design</span>
                              <div className="flex flex-row gap-3 labelLink">
                                <span className="p-3 labelSide-border">
                                  Company Profile
                                </span>
                                <span className="p-3 labelSide-border">
                                  Interior
                                </span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
