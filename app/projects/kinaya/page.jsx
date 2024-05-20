"use client";

import { useLayoutEffect, useRef } from "react";
import styles from "../Projects.module.scss";
// import Image from "next/legacy/image";
import Image from "next/image";

import KinayaConcept from "../../../public/img/KinayaMockup.jpg";
// import KinayaOverview from "../../../public/img/secondConcept.png";
import KinayaLoading from "../../../public/img/Kinaya.jpg";
import KinayaSlider from "../../../public/img/dataImg2.jpg";
import KinayaGallery from "../../../public/img/KinayaGallery.png";
import KinayaTeam from "../../../public/img/KinayaTeam.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const dataProject = [
  {
    projectName: "Kinaya",
    projectHeading:
      "Kinaya Interior Design adalah perusahaan profesional yang bergerak di bidang desain interior, konstruksi, dan sipil.",
    projectImageTop: KinayaConcept,
    projectDetail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolor adipisci rem magnam officiis harum similique sit? Distinctio ipsa ullam et in alias esse ducimus. Excepturi pariatur neque optio. Obcaecati enim iure exercitationem quibusdam sed illum, accusantium minus, delectus ex animi adipisci, sequi eos beatae! Esse saepe provident quo sequi quam! Aliquid officiis quidem vel enim dolor sapiente unde nam cupiditate eius commodi, rem pariatur nisi voluptates rerum corporis. Culpa, tempora asperiores? Repellat, assumenda nam minima asperiores maxime eos vitae distinctio magnam. Id excepturi a ratione maxime! Optio deserunt sequi dolorum ad saepe reprehenderit eaque similique, assumenda cupiditate ut impedit?",
  },
];

const dataImage = [
  {
    image: KinayaTeam,
    title: "Team layout",
  },
  {
    image: KinayaLoading,
  },
  {
    image: KinayaSlider,
    title: "Background image slider layout",
  },
  {
    image: KinayaGallery,
    title: "Grid gallery project Kinaya",
  },
];

export default function KinayaProjects() {
  const containerRef = useRef();
  const imageRef = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom", // ketika bagian atas trigger berada di bawah viewport
        end: "bottom top", // ketika bagian bawah trigger berada di atas viewport
        scrub: 1.5, // membuat animasi bergerak seiring scroll
      },
    });

    // Mengatur efek parallax pada gambar
    tl.to(imageRef.current, {
      yPercent: -30, // menggeser gambar ke atas sebesar 20% dari ukuran aslinya
      ease: "power4.inOut",
    });
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
                <div
                  className={`${styles.projectContent_background} overflow-hidden`}
                >
                  <div className="relative h-screen overflow-hidden">
                    <Image
                      src={data.projectImageTop}
                      ref={imageRef}
                      objectFit="Cover"
                      // priority={false}
                      alt="Project"
                      className="relative h-screen"
                    />
                  </div>
                </div>
                <div
                  className={`${styles.detailInfoWrapper} relative -mt-[10rem]`}
                >
                  <div className={`${styles.detailInfo}`}>
                    <div className={`${styles.projectContent_intro}`}>
                      <div className="flex flex-col gap-10 lg:flex-row">
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
                          <span>
                            <Link
                              href="https://www.kinayainterior.com"
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
                          {dataImage.map((viewImage, i) => (
                            <div
                              className={`${styles.overView_grid_ov} overflow-hidden`}
                              key={i}
                            >
                              <Image
                                src={viewImage.image}
                                objectFit="Cover"
                                alt="Project"
                              />
                              <div className={`${styles.overView_grid_nm}`}>
                                <div
                                  className={`${styles.overview_grid_tl} font-ChillaxRegular`}
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
