"use client";

import { useRef, useLayoutEffect, useEffect } from "react";
import styles from "../Projects.module.scss";
import Image from "next/image";

import LenteraMockup from "../../../public/img/LenteraMockup.jpg";
import BlankImage from "../../../public/img/blank.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const dataProject = [
  {
    projectName: "Lentera",
    projectHeading:
      "Sekolah Lentera Fajar Indonesia adalah lembaga pendidikan yang khusus menangani anak-anak berkebutuhan khusus.",
    projectImageTop: LenteraMockup,
    projectDetail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolor adipisci rem magnam officiis harum similique sit? Distinctio ipsa ullam et in alias esse ducimus. Excepturi pariatur neque optio. Obcaecati enim iure exercitationem quibusdam sed illum, accusantium minus, delectus ex animi adipisci, sequi eos beatae! Esse saepe provident quo sequi quam! Aliquid officiis quidem vel enim dolor sapiente unde nam cupiditate eius commodi, rem pariatur nisi voluptates rerum corporis. Culpa, tempora asperiores? Repellat, assumenda nam minima asperiores maxime eos vitae distinctio magnam. Id excepturi a ratione maxime! Optio deserunt sequi dolorum ad saepe reprehenderit eaque similique, assumenda cupiditate ut impedit?",
  },
];

const dataImage = [
  {
    image: BlankImage,
    title: "Team layout",
  },
  {
    image: BlankImage,
    title: "Default Logo",
  },
  {
    image: BlankImage,
    title: "Background image slider layout",
  },
  {
    image: BlankImage,
    title: "Grid gallery project Kinaya",
  },
];

export default function LenteraProjects() {
  const Component = () => {
    const [styles, setStyles] = useState({});

    useEffect(() => {
      if (typeof window !== "undefined") {
        const dynamicStyle = calculateStyleBasedOnWindowSize();
        setStyles(dynamicStyle);
      }
    }, []);
  };

  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    if (containerRef.current && imageRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      tl.to(imageRef.current, {
        yPercent: -20,
        ease: "power3.Out",
      });
    }
  }, []);

  const imageRefs = useRef([]);
  imageRefs.current = [];

  useEffect(() => {
    const refs = imageRefs.current.filter((ref) => ref != null);
    if (refs.length > 0) {
      // console.log("Refs are available:", refs);
      refs.forEach((ref, index) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ref,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          })
          .fromTo(ref, { y: -130 }, { y: 0, ease: "power3.Out" });
      }, []);
    } else {
      // console.log(refs);
    }
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className={`${styles.projectContainer} text-white pt-16`}
      >
        <div className={`${styles.projectWrapper}`}>
          {dataProject.map((data) => (
            <div className={`${styles.projectContent}`} key={data.projectName}>
              <div className={`${styles.projectHeading} bg-black`}>
                <div className={`${styles.projectHeading_top} relative`}>
                  <span className={`${styles.projectName} font-light p-8`}>
                    {data.projectName}
                  </span>
                  <div
                    className={`${styles.headingTitle} font-SwitzerRegular italic p-8 font-bold`}
                  >
                    {data.projectHeading}
                  </div>
                </div>
              </div>
              <div className={`${styles.projectContent_item}`}>
                <div className={`${styles.projectContent_background}`}>
                  <div
                    className={`${styles.projectContent_img_ss}`}
                    ref={imageRef}
                  >
                    <picture>
                      <Image
                        loading="lazy"
                        // priority={true}
                        placeholder="blur"
                        blurDataURL={data.projectImageTop.src}
                        src={data.projectImageTop}
                        alt="Project"
                        className="relative h-[100%]"
                      />
                    </picture>
                  </div>
                </div>
                <div className={`${styles.detailInfoWrapper}`}>
                  <div className={`${styles.detailInfo}`}>
                    <div className={`${styles.projectContent_intro}`}>
                      <div
                        className={`${styles.projectContent_intro_item} flex flex-col gap-10 lg:flex-row`}
                      >
                        <div className="col-span-2">
                          <div
                            className={`${styles.challengeTitle} flex-1 uppercase lg:w-[30rem]`}
                          >
                            The Challenge
                          </div>
                        </div>
                        <div
                          className={`${styles.detailInfo_item} flex flex-col`}
                        >
                          {data.projectDetail}
                          <span className="pointer-events-none">
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
                                className="relative flex items-center gap-2 p-4 mt-24 border rounded-full pointer-events-auto group w-fit"
                              >
                                Kunjungi Halaman
                                <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                              </motion.button>
                            </Link>
                          </span>
                        </div>
                      </div>
                      <div className={`${styles.overView_gr}`}>
                        <span>Project Preview</span>
                        <div
                          className={`${styles.overView_grid} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8`}
                        >
                          {dataImage.map((viewImage, index) => (
                            <div
                              className={`${styles.overView_grid_ov} overflow-hidden`}
                              key={index}
                            >
                              <div className="overflow-hidden rounded-2xl h-[500px] lg:h-[650px] md:h-[550px]">
                                <div
                                  ref={(el) => (imageRefs.current[index] = el)}
                                >
                                  <picture>
                                    <Image
                                      loading="lazy"
                                      width={1900}
                                      height={900}
                                      quality={100}
                                      priority={false}
                                      src={viewImage.image.src}
                                      alt={viewImage.title || "Project Preview"}
                                      style={{
                                        objectFit: "cover",
                                      }}
                                    />
                                  </picture>
                                </div>
                              </div>
                              <div className={`${styles.overView_grid_nm}`}>
                                <div
                                  className={`${styles.overview_grid_tl} font-ChillaxRegular py-4`}
                                >
                                  {viewImage.title}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
