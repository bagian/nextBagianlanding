"use client";

import React, { useState, useRef, useEffect } from "react";
import "./pageMain.scss";
import Link from "next/link";

import dataImage1 from "../public/img/dataImg1.png";
import dataImage2 from "../public/img/dataImg2.jpg";
import SoonGreen from "../public/img/soon-backdrop.jpg";
import SoonBlue from "../public/img/soon-backdrop-blue.jpg";
import Lentera from "../public/img/lentera-fajar-indonesia.jpg";
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
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <>
      <div className="relative page-header">
        <div className="">
          <div className="page-content" ref={pageHeader}>
            <motion.section
              className="pointer-events-none flex flex-[4] text-center page-wrapper overflow-hidden xl:h-screen md:h-[50rem] lg:h-screen h-[50rem] rounded-b-[1.5rem] xl:rounded-b-[3rem] md:rounded-b-[3rem] lg:rounded-b-[3rem] relative"
              style={{
                backgroundImage,
              }}
            >
              <div className="absolute inset-0">
                <Canvas>
                  <Stars radius={50} count={400} factor={4} fade speed={3} />
                </Canvas>
              </div>
              <div className="absolute flex flex-col items-center justify-center align-middle mt-36 flex-nowrap page-stag">
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
            <div className="page-container">
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
                <div className="relative p-8 mt-32 overflow-hidden pageBig-item">
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
              <div className="marqueeContainer">
                <div className="marqueeWrapper md:mt-52 lg:mt-52 xl:mt-52">
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
                    <div className="grid grid-cols-1 page-wrapper md:grid-cols-2 md:gap-8 lg:grid-cols-2 lg:gap-8 xl:gap-8 xl:grid-cols-2">
                      <div className="page-items">
                        <div className="content-items">
                          <Link
                            href="https://www.lenterafajarindonesia.sch.id"
                            target="_blank"
                          >
                            <Image
                              src={Lentera}
                              alt="logo"
                              width={2000}
                              height={2000}
                              objectFit="cover"
                              quality={100}
                              className="object-cover pointer-events-none rounded-3xl imageData"
                            />
                            <div className="flex items-center justify-between my-8 pageLink">
                              <span className="relative block">
                                Lentera Fajar Indonesia
                              </span>
                              <div className="flex flex-row gap-3 labelLink">
                                <span className="p-3 labelSide-border whitespace-nowrap">
                                  SLB
                                </span>
                                <span className="p-3 labelSide-border whitespace-nowrap">
                                  Company Profile
                                </span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="xl:mt-16 lg:mt-16 md:mt-16 page-items">
                        <div className="overflow-hidden content-items">
                          <Link
                            href="https://www.kinayainterior.com"
                            target="_blank"
                          >
                            <Image
                              src={dataImage2}
                              alt="logo"
                              width={2000}
                              height={2000}
                              objectFit="cover"
                              quality={100}
                              className="object-cover pointer-events-none rounded-3xl imageData"
                            />
                            <div className="flex items-center justify-between my-8 pageLink">
                              <span>Kinaya Interior Design</span>
                              <div className="flex flex-row gap-3 labelLink">
                                <span className="p-3 labelSide-border whitespace-nowrap">
                                  Company Profile
                                </span>
                                <span className="p-3 labelSide-border whitespace-nowrap">
                                  Interior
                                </span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="page-items">
                        <div className="content-items">
                          <Link href="#" target="_blank">
                            <Image
                              src={SoonBlue}
                              alt="logo"
                              width={2000}
                              height={2000}
                              objectFit="cover"
                              quality={100}
                              className="object-cover pointer-events-none rounded-3xl imageData"
                            />
                            <div className="flex items-center justify-between my-8 pageLink">
                              <span className="relative block">
                                Coming Soon
                              </span>
                              <div className="flex flex-row gap-3 labelLink">
                                <span className="p-3 labelSide-border whitespace-nowrap">
                                  Tbd
                                </span>
                                <span className="p-3 labelSide-border whitespace-nowrap">
                                  Tbd
                                </span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="xl:mt-16 lg:mt-16 md:mt-16 page-items">
                        <div className="overflow-hidden content-items">
                          <Link href="#" target="_blank">
                            <Image
                              src={SoonGreen}
                              alt="logo"
                              width={2000}
                              height={2000}
                              objectFit="cover"
                              quality={100}
                              className="object-cover pointer-events-none rounded-3xl imageData"
                            />
                            <div className="flex items-center justify-between my-8 pageLink">
                              <span>Coming Soon</span>
                              <div className="flex flex-row gap-3 labelLink">
                                <span className="p-3 labelSide-border whitespace-nowrap">
                                  Tbd
                                </span>
                                <span className="p-3 labelSide-border whitespace-nowrap">
                                  Tbd
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
            {/* <div className="my-20 partnerIncase-container partnerIncase-bg">
              <div className="m-auto partnerIncase-wrapper">
                <div className="flex partnerIncase-content">
                  <div className="p-8 parnetIncase-items">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam incidunt id quam possimus natus itaque iusto,
                    doloremque voluptate ab, sequi iste. Non vero consequatur
                    illo, maxime quisquam doloribus soluta ex totam perspiciatis
                    cupiditate tempore harum iste repellat quo beatae. Autem
                    impedit quod ipsum veritatis ex accusamus consectetur sequi,
                    at quidem a sunt, suscipit accusantium fugit, nostrum
                    asperiores inventore. Fugiat similique nam reiciendis
                    perferendis soluta quisquam, ipsam unde quasi esse magnam
                    voluptas, fuga qui ipsa? Quo quibusdam unde illo eveniet
                    odio voluptates ullam repellendus aperiam necessitatibus
                    animi velit repudiandae a iure, harum soluta quasi cumque
                    rerum blanditiis consequuntur! Quisquam aliquid odio ipsum
                    ea deserunt porro vel eum fugit odit fuga? A corporis
                    numquam iusto repellat veniam unde animi itaque nemo, qui
                    ipsam excepturi et maxime blanditiis id, odit, sunt
                    similique sequi eveniet sed asperiores! Dignissimos incidunt
                    pariatur eveniet debitis laborum quasi labore,
                    necessitatibus laudantium at nam reprehenderit error
                    recusandae consequuntur blanditiis ab molestiae,
                    voluptatibus cumque asperiores nulla. Expedita beatae
                    quaerat cupiditate eveniet quae voluptatem. Quasi labore
                    suscipit exercitationem, laborum dolorum facere, ratione
                    repudiandae atque veritatis, culpa ea recusandae tempore
                    architecto quas voluptatem blanditiis et possimus. Dolore
                    tenetur assumenda fugiat modi sequi quas, veniam quae
                    suscipit quam. Delectus, qui? Quasi modi neque
                    reprehenderit. Debitis dolorem aliquam voluptas esse cumque
                    deserunt aut minima? Velit possimus dolorum est magnam, rem
                    repellat sit aut numquam praesentium inventore, tenetur
                    dicta ipsa magni nulla esse quasi nesciunt repudiandae
                    tempore? Quo, incidunt repellendus esse, assumenda ipsa
                    consequatur deleniti id optio quis suscipit, atque et
                    maiores. Ipsa enim, voluptate distinctio magnam autem harum
                    excepturi similique optio nulla facilis quia, sapiente, qui
                    quidem aspernatur blanditiis vero. Consequatur, cumque
                    aperiam tenetur quaerat dicta voluptas architecto nostrum
                    iste in consequuntur deleniti sunt esse repudiandae? Ut
                    placeat dignissimos consectetur, fuga nulla explicabo
                    laboriosam architecto, natus dolorum accusantium nobis ea
                    distinctio corrupti sequi, odit atque aliquam! Perferendis
                    incidunt ea maiores sit similique magni cumque eius officiis
                    animi distinctio? Aspernatur labore doloribus nesciunt,
                    eligendi quam explicabo tempora, soluta consectetur earum
                    beatae provident est odio delectus ad. Praesentium
                    dignissimos dolore obcaecati et enim blanditiis, eveniet
                    unde iusto aliquid consequatur error similique rerum dolores
                    voluptatum velit. Iste, delectus maxime rerum excepturi vel
                    ducimus aspernatur quasi, alias odio provident magni quos?
                    Voluptas explicabo hic dolore quidem, necessitatibus
                    officia? Excepturi tempore voluptates quaerat architecto,
                    hic quae rem saepe mollitia facere deserunt maxime odit
                    velit ipsum, iste corrupti fugit voluptate, facilis
                    voluptatem itaque accusantium quam ea alias? Consectetur,
                    dolore asperiores?
                  </div>
                  <div className="p-8 parnetIncase-items">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam incidunt id quam possimus natus itaque iusto,
                    doloremque voluptate ab, sequi iste. Non vero consequatur
                    illo, maxime quisquam doloribus soluta ex totam perspiciatis
                    cupiditate tempore harum iste repellat quo beatae. Autem
                    impedit quod ipsum veritatis ex accusamus consectetur sequi,
                    at quidem a sunt, suscipit accusantium fugit, nostrum
                    asperiores inventore. Fugiat similique nam reiciendis
                    perferendis soluta quisquam, ipsam unde quasi esse magnam
                    voluptas, fuga qui ipsa? Quo quibusdam unde illo eveniet
                    odio voluptates ullam repellendus aperiam necessitatibus
                    animi velit repudiandae a iure, harum soluta quasi cumque
                    rerum blanditiis consequuntur! Quisquam aliquid odio ipsum
                    ea deserunt porro vel eum fugit odit fuga? A corporis
                    numquam iusto repellat veniam unde animi itaque nemo, qui
                    ipsam excepturi et maxime blanditiis id, odit, sunt
                    similique sequi eveniet sed asperiores! Dignissimos incidunt
                    pariatur eveniet debitis laborum quasi labore,
                    necessitatibus laudantium at nam reprehenderit error
                    recusandae consequuntur blanditiis ab molestiae,
                    voluptatibus cumque asperiores nulla. Expedita beatae
                    quaerat cupiditate eveniet quae voluptatem. Quasi labore
                    suscipit exercitationem, laborum dolorum facere, ratione
                    repudiandae atque veritatis, culpa ea recusandae tempore
                    architecto quas voluptatem blanditiis et possimus. Dolore
                    tenetur assumenda fugiat modi sequi quas, veniam quae
                    suscipit quam. Delectus, qui? Quasi modi neque
                    reprehenderit. Debitis dolorem aliquam voluptas esse cumque
                    deserunt aut minima? Velit possimus dolorum est magnam, rem
                    repellat sit aut numquam praesentium inventore, tenetur
                    dicta ipsa magni nulla esse quasi nesciunt repudiandae
                    tempore? Quo, incidunt repellendus esse, assumenda ipsa
                    consequatur deleniti id optio quis suscipit, atque et
                    maiores. Ipsa enim, voluptate distinctio magnam autem harum
                    excepturi similique optio nulla facilis quia, sapiente, qui
                    quidem aspernatur blanditiis vero. Consequatur, cumque
                    aperiam tenetur quaerat dicta voluptas architecto nostrum
                    iste in consequuntur deleniti sunt esse repudiandae? Ut
                    placeat dignissimos consectetur, fuga nulla explicabo
                    laboriosam architecto, natus dolorum accusantium nobis ea
                    distinctio corrupti sequi, odit atque aliquam! Perferendis
                    incidunt ea maiores sit similique magni cumque eius officiis
                    animi distinctio? Aspernatur labore doloribus nesciunt,
                    eligendi quam explicabo tempora, soluta consectetur earum
                    beatae provident est odio delectus ad. Praesentium
                    dignissimos dolore obcaecati et enim blanditiis, eveniet
                    unde iusto aliquid consequatur error similique rerum dolores
                    voluptatum velit. Iste, delectus maxime rerum excepturi vel
                    ducimus aspernatur quasi, alias odio provident magni quos?
                    Voluptas explicabo hic dolore quidem, necessitatibus
                    officia? Excepturi tempore voluptates quaerat architecto,
                    hic quae rem saepe mollitia facere deserunt maxime odit
                    velit ipsum, iste corrupti fugit voluptate, facilis
                    voluptatem itaque accusantium quam ea alias? Consectetur,
                    dolore asperiores?
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
