"use client";

import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SvgOne from "../../svg/roadMapSvgs/svgsOne";
import SvgTwo from "../../svg/roadMapSvgs/svgsTwo";
import SpringSvgs from "../../svg/roadMapSvgs/SpringSvgs";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const RoadmapData = [
  {
    title: "Konsultasi Awal",
    descriptionTitle1: "Diskusi Kebutuhan",
    description1:
      "Klien menghubungi kami untuk konsultasi awal. Kami akan mendengarkan kebutuhan dan tujuan bisnis klien.",
    descriptionTitle2: "Penentuan Scope Proyek",
    description2:
      "Bersama klien, kami menentukan ruang lingkup proyek, termasuk fitur-fitur yang diinginkan dan target audiens.",
    Icon: <SvgOne />,
  },
  {
    title: "Analisis & Riset",
    descriptionTitle1: "Analisis Bisnis",
    description1:
      "Memahami bisnis klien secara mendalam untuk memastikan website yang dibangun relevan dan efektif.",
    descriptionTitle2: "Riset Pasar & Kompetitor",
    description2:
      "Melakukan riset pasar dan analisis kompetitor untuk mengidentifikasi peluang dan ancaman.",
    Icon: <SvgTwo />,
  },
  {
    title: "Desain UI/UX",
    descriptionTitle1: "Wireframing",
    description1:
      "Membuat sketsa awal (wireframe) dari struktur website untuk menunjukkan alur navigasi dan tata letak halaman.",
    descriptionTitle2: "Prototyping",
    description2:
      "Mengembangkan prototipe interaktif untuk menunjukkan bagaimana website akan berfungsi.",
    descriptionTitle3: "Desain Visual",
    description3:
      "Merancang tampilan visual website sesuai dengan identitas merek klien, termasuk pilihan warna, tipografi, dan elemen visual lainnya.",
    Icon: <SvgTwo />,
  },
  {
    title: "Proses Pengembangan Website",
    descriptionTitle1: "Pengembangan Front-end",
    description1:
      "Membuat tampilan website menggunakan teknologi seperti HTML, CSS, dan JavaScript atau menggunakan Framework seperti React, Next JS, Laravel dan library pendukung seperti Tailwind CSS dan Bootstrap.",
    descriptionTitle2: "Pengembangan Back-end",
    description2:
      "Mengembangkan fungsi server-side menggunakan teknologi seperti PHP, Python, atau Node.js, serta integrasi dengan database.",
    descriptionTitle3: "Integrasi CMS",
    description3:
      "Jika diperlukan, mengintegrasikan Content Management System (CMS) seperti WordPress, atau custom CMS.",
    Icon: <SvgTwo />,
  },
  {
    title: "Testing & Quality Assurance",
    descriptionTitle1: "Pengujian Fungsi",
    description1:
      "Melakukan pengujian pada setiap fitur untuk memastikan semua berfungsi dengan baik.",
    descriptionTitle2: "Pengujian Responsivitas",
    description2:
      "Memastikan website terlihat dan berfungsi dengan baik di berbagai perangkat dan ukuran layar.",
    descriptionTitle3: "Pengujian Keamanan",
    description3:
      "Melakukan audit keamanan untuk melindungi data dan integritas website.",
    Icon: <SvgTwo />,
  },
  {
    title: "Peluncuran",
    descriptionTitle1: "Migrasi & Deployment",
    description1:
      "Memindahkan website dari lingkungan pengembangan ke server produksi dan memastikan semuanya berjalan lancar.",
    descriptionTitle2: "Pengaturan Domain & Hosting",
    description2: "Mengonfigurasi domain dan hosting sesuai kebutuhan klien.",
    descriptionTitle3: "Live Testing",
    description3:
      "Pengujian akhir di server produksi untuk memastikan semua berjalan dengan baik.",
    Icon: <SvgTwo />,
  },
  {
    title: "Pemeliharaan & Dukungan",
    descriptionTitle1: "Pemantauan Kinerja",
    description1:
      "Melakukan pemantauan secara berkala untuk memastikan website tetap optimal.",
    descriptionTitle2: "Pembaruan & Perawatan",
    description2:
      "Menyediakan layanan pembaruan konten, perbaikan bug, dan pemeliharaan rutin.",
    descriptionTitle3: "Dukungan Teknis",
    description3:
      "Memberikan dukungan teknis kepada klien untuk setiap masalah yang mungkin muncul.",
    Icon: <SvgTwo />,
  },
];

function RoadMap() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slideContainerRef = useRef(null);
  const totalSlides = 7;

  useEffect(() => {
    gsap.to(slideContainerRef.current, {
      xPercent: -100 * slideIndex,
      duration: 0.8,
      ease: "power3.out",
    });
  }, [slideIndex]);

  const nextSlide = () => {
    if (slideIndex < totalSlides - 1) {
      setSlideIndex(slideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  };
  return (
    <>
      <div className={`${styles.roadMap}`}>
        <div className={`${styles.roadMap_content}`}>
          <div
            className={`${styles.roadMap_item} grid grid-cols-1 xl:grid-cols-2 xl:gap-20`}
          >
            <div className={`${styles.roadMap_data}`}>
              <div className={`${styles.roadMap_title}`}>
                <span
                  className={`${styles.roadMap_title_text} block xl:-mt-36 font-SwitzerRegular`}
                >
                  Lihat Alur Bagaimana <span>Kami Bekerja</span>
                </span>
              </div>
              <div className={`${styles.roadMap_desc}`}>
                <p>
                  Kami berkomitmen untuk memberikan layanan terbaik dari awal
                  hingga akhir, memastikan bahwa setiap website yang kami buat
                  tidak hanya fungsional, tetapi juga memberikan nilai lebih
                  bagi bisnis Anda.
                </p>
              </div>
            </div>
            <div className={`${styles.roadMap_slidewrapper}`}>
              <div className={`${styles.roadMapSlide_inner}`}>
                <div
                  ref={slideContainerRef}
                  className={`${styles.roadMap_slideContainer}`}
                >
                  {/* Render slides di sini */}
                  {RoadmapData.map((item, index) => (
                    <div key={index} className={styles.roadMap_slide}>
                      <div className={`${styles.roadMap_slide_item}`}>
                        <span className={`${styles.roadMap_slide_item_number}`}>
                          {index + 1}
                        </span>
                        <div
                          className={`${styles.roadMap_title_slide} font-SwitzerRegular`}
                        >
                          {/* {item.Icon}  */}
                          {item.title}
                        </div>
                        <div
                          className={`${styles.roadMap_desc_slide} font-SwitzerRegular`}
                        >
                          <div className={`${styles.roadMap_desc_slide_item}`}>
                            <span
                              className={`${styles.roadMap_title_desc_slide}`}
                            >
                              {item.descriptionTitle1}
                            </span>
                            <p>{item.description1}</p>
                          </div>
                          <div className={`${styles.roadMap_desc_slide_item}`}>
                            <span
                              className={`${styles.roadMap_title_desc_slide}`}
                            >
                              {item.descriptionTitle2}
                            </span>
                            <p>{item.description2}</p>
                          </div>
                          <div className={`${styles.roadMap_desc_slide_item}`}>
                            <span
                              className={`${styles.roadMap_title_desc_slide}`}
                            >
                              {item.descriptionTitle3}
                            </span>
                            <p>{item.description3}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={`${styles.roadMap_slide_button}`}>
                  <div className={`${styles.roadMap_btn_wrapper}`}>
                    <span
                      className={`${styles.roadMap_slide_button_prev}  block`}
                    >
                      <button
                        onClick={prevSlide}
                        className={slideIndex === 0 ? styles.disabled : "x"}
                      >
                        <FaChevronLeft />
                      </button>
                    </span>
                    <span
                      className={`${styles.roadMap_slide_button_next} block`}
                    >
                      <button
                        onClick={nextSlide}
                        className={
                          slideIndex === totalSlides - 1 ? styles.disabled : "x"
                        }
                      >
                        <FaChevronRight />
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.springSvgs}`}>
              <SpringSvgs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoadMap;

// function RoadMap() {
//   return (
//     <>
//       <div className={`${styles.roadMap}`}>
//         <div className={`${styles.roadMap_content}`}>
//           <div className={`${styles.roadMap_item} grid grid-cols-2`}>
//             <div className={`${styles.roadMap_data}`}>
//               <div className={`${styles.roadMap_title}`}>
//                 <span className={`${styles.roadMap_title_text}`}>
//                   Lihat Alur Bagaimana <span>Kami Bekerja</span>
//                 </span>
//               </div>
//               <div className={`${styles.roadMap_desc}`}>
//                 <p>
//                   Bagian.net berkomitmen untuk memberikan layanan terbaik dari
//                   awal hingga akhir, memastikan bahwa setiap website yang kami
//                   buat tidak hanya fungsional, tetapi juga memberikan nilai
//                   lebih bagi bisnis Anda.
//                 </p>
//               </div>
//             </div>
//             <div className={`${styles.roadMap_data} ${styles.roadMap_slide}`}>
//               {RoadmapData.map((item, index) => (
//                 <div key={index} className={`${styles.roadMap_item}`}>
//                   <h1>{item.title}</h1>
//                   <span className={`${styles.roadMap_list}`}>
//                     <ul className={`${styles.roadMap_list_item} list-decimal`}>
//                       <li>{item.description1}</li>
//                       <li>{item.description2}</li>
//                     </ul>
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default RoadMap;
