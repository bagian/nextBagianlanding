// "use client";

// import { useRef, useEffect } from "react";
// import styles from "../Projects.module.scss";
// import Image from "next/image";

// // import KinayaConcept from "../../../public/img/KinayaMockup.jpg";
// import KinayaLoading from "../../../public/img/Kinaya.jpg";
// import KinayaSlider from "../../../public/img/dataImg2.jpg";
// // import KinayaGallery from "../../../public/img/KinayaGallery.png";
// import KinayaTeam from "../../../public/img/KinayaTeam.jpg";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { FiArrowRight } from "react-icons/fi";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const dataProject = [
//   {
//     projectName: "Kinaya",
//     projectHeading:
//       "Kinaya Interior Design adalah perusahaan profesional yang bergerak di bidang desain interior, konstruksi, dan sipil.",
//     // projectImageTop: KinayaConcept,
//     projectDetail:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolor adipisci rem magnam officiis harum similique sit? Distinctio ipsa ullam et in alias esse ducimus. Excepturi pariatur neque optio. Obcaecati enim iure exercitationem quibusdam sed illum, accusantium minus, delectus ex animi adipisci, sequi eos beatae! Esse saepe provident quo sequi quam! Aliquid officiis quidem vel enim dolor sapiente unde nam cupiditate eius commodi, rem pariatur nisi voluptates rerum corporis. Culpa, tempora asperiores? Repellat, assumenda nam minima asperiores maxime eos vitae distinctio magnam. Id excepturi a ratione maxime! Optio deserunt sequi dolorum ad saepe reprehenderit eaque similique, assumenda cupiditate ut impedit?",
//   },
// ];

// const dataImage = [
//   {
//     image: KinayaTeam,
//     title: "Team layout",
//   },
//   {
//     image: KinayaLoading,
//     title: "Default Logo",
//   },
//   {
//     image: KinayaSlider,
//     title: "Background image slider layout",
//   },
//   // {
//   //   image: KinayaGallery,
//   //   title: "Grid gallery project Kinaya",
//   // },
// ];
// const dataImage = [
//   {
//     image: KinayaTeam,
//     title: "Team layout",
//   },
//   {
//     image: KinayaLoading,
//     title: "Default Logo",
//   },
//   {
//     image: KinayaSlider,
//     title: "Background image slider layout",
//   },
  // {
  //   image: KinayaGallery,
  //   title: "Grid gallery project Kinaya",
  // },
// ];


// export default function KinayaProjects() {
//   useEffect(() => {
//     document.title = "Kinaya - Kinaya Interior Design";
//     document.description =
//       "Kinaya Interior Design adalah perusahaan profesional yang bergerak di bidang desain interior, konstruksi, dan sipil.";
//     document.keywords =
//       "Desain Interior, Konstruksi, Sipil, Kinaya, Kinaya Interior Design";
//   }, []);
//   const containerRef = useRef(null);
//   const imageRef = useRef(null);
//   const imageRefs = useRef([]);

//   gsap.config({
//     nullTargetWarn: false,
//     trialWarn: false,
//   });

//   // Memastikan elemen dengan kelas 'null' ada sebelum animasi dijalankan
//   useEffect(() => {
//     const nullElement = document.querySelector(".null");
//     if (nullElement) {
//       gsap.to(nullElement, {
//         opacity: 0,
//       });
//     }
//   }, []);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     if (containerRef.current && imageRef.current) {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: 2,
//         },
//       });

//       tl.to(imageRef.current, {
//         yPercent: -20,
//         ease: "power3.Out",
//       });
//     }

//     // Pastikan imageRefs.current sudah terisi dan bukan array kosong
//     if (imageRefs.current && imageRefs.current.length > 0) {
//       imageRefs.current.forEach((ref, index) => {
//         if (ref) {
//           gsap
//             .timeline({
//               scrollTrigger: {
//                 trigger: ref,
//                 start: "top bottom",
//                 end: "bottom top",
//                 scrub: 1.5,
//               },
//             })
//             .fromTo(ref, { y: -130 }, { y: 0, ease: "power3.Out" });
//         }
//       });
//     }
//   }, []); // Tambahkan dependensi jika diperlukan

//   useEffect(() => {
//     gsap.to("#projectName", {
//       ease: "power1.inOut",
//       opacity: 1,
//       y: -20,
//     });
//     gsap.fromTo(
//       "#headingTitle",
//       {
//         opacity: 0,
//         y: 30,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         delay: 1,
//         stagger: 0.1,
//       }
//     );
//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: ".cl-d",
//           start: "top 80%",
//           end: "bottom 20%",
//           scrub: 1.5,
//           stagger: 0.1,
//           once: true, // Menambahkan opsi 'once' untuk menjalankan animasi hanya sekali
//         },
//       })
//       .fromTo(
//         ".cl-d",
//         {
//           opacity: 0,
//           y: 30,
//         },
//         {
//           opacity: 1,
//           delay: 1,
//           stagger: 0.1,
//           y: 0,
//         }
//       );
//   }, []);

//   useEffect(() => {
//     gsap.to("#projectImage", {
//       ease: "power1.inOut",
//       opacity: 1,
//       y: -30,
//       delay: 1,
//     });

//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: "#projectPreview",
//           start: "top 80%",
//           end: "bottom 100%",
//           scrub: true,
//           once: true, // Animasi hanya akan dijalankan sekali
//         },
//       })
//       .fromTo(
//         "#projectPreview",
//         {
//           opacity: 0,
//           y: -50,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           delay: 2,
//           ease: "power3.out", // Menambahkan easing untuk animasi yang lebih halus
//           duration: 1.5, // Menentukan durasi animasi
//         }
//       );

//     gsap.to("#imagePreview", {
//       ease: "power3.out",
//       opacity: 1,
//       y: -30,
//       delay: 3,
//     });
//   }, []);

//   return (
//     <>
//       <div
//         ref={containerRef}
//         className={`${styles.projectContainer} text-white pt-16`}
//       >
//         <div className={`${styles.projectWrapper}`}>
//           {dataProject.map((data) => (
//             <div className={`${styles.projectContent}`} key={data.projectName}>
//               <div className={`${styles.projectHeading} bg-black`}>
//                 <div className={`${styles.projectHeading_top} relative`}>
//                   <span
//                     id="projectName"
//                     className={`${styles.projectName} font-light p-8 opacity-0 block`}
//                   >
//                     {data.projectName}
//                   </span>
//                   <div
//                     id="headingTitle"
//                     className={`${styles.headingTitle} font-SwitzerRegular italic p-8 font-bold`}
//                   >
//                     {data.projectHeading}
//                   </div>
//                 </div>
//               </div>
//               <div className={`${styles.projectContent_item}`}>
//                 <div
//                   className={`${styles.projectContent_background} opacity-0`}
//                   id="projectImage"
//                 >
//                   <div
//                     className={`${styles.projectContent_img_ss}`}
//                     ref={imageRef}
//                   >
//                     <picture>
//                       <Image
//                         loading="lazy"
//                         // priority={true}
//                         placeholder="blur"
//                         blurDataURL={data.projectImageTop.src}
//                         // src={data.projectImageTop}
//                         alt="Project"
//                         className="relative h-[100%]"
//                       />
//                     </picture>
//                   </div>
//                 </div>
//                 <div className={`${styles.detailInfoWrapper}`}>
//                   <div className={`${styles.detailInfo}`}>
//                     <div className={`${styles.projectContent_intro}`}>
//                       <div
//                         className={`${styles.projectContent_intro_item} flex flex-col gap-10 lg:flex-row pt-32`}
//                       >
//                         <div className="col-span-2">
//                           <div
//                             className={`${styles.challengeTitle} flex-1 xl:text-4xl uppercase font-bold lg:w-[30rem] cl-d opacity-0`}
//                           >
//                             The Challenge
//                           </div>
//                         </div>
//                         <div
//                           className={`${styles.detailInfo_item} flex flex-col cl-d opacity-0`}
//                         >
//                           <p className="lg:text-1xl xl:text-2xl xl:leading-[2.5rem] font-light leading-[2rem] md:leading-[2rem] lg:leading-[2rem] font-SwitzerLight">
//                             {data.projectDetail}
//                           </p>
//                           <span className="pointer-events-none">
//                             <Link
//                               href="https://www.kinayainterior.com"
//                               target="_blank"
//                             >
//                               <motion.button
//                                 whileHover={{
//                                   scale: 1.035,
//                                   ease: "easeInOut",
//                                 }}
//                                 whileTap={{
//                                   scale: 0.985,
//                                   ease: "easeInOut",
//                                 }}
//                                 className="relative flex items-center gap-2 p-4 mt-24 border rounded-full pointer-events-auto group w-fit"
//                               >
//                                 Kunjungi Halaman
//                                 <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
//                               </motion.button>
//                             </Link>
//                           </span>
//                         </div>
//                       </div>
//                       <div
//                         id="projectPreview"
//                         className={`${styles.overView_gr} opacity-0`}
//                       >
//                         <span>Project Preview</span>
//                         <div
//                           className={`${styles.overView_grid} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8`}
//                         >
//                           {dataImage.map((viewImage, index) => (
//                             <div
//                               className={`${styles.overView_grid_ov} overflow-hidden`}
//                               key={index}
//                             >
//                               <div
//                                 id="projectPreview"
//                                 className="overflow-hidden rounded-2xl h-[500px] lg:h-[650px] md:h-[550px]"
//                               >
//                                 <div
//                                   id="imagePreview"
//                                   ref={(el) => (imageRefs.current[index] = el)}
//                                 >
//                                   <picture>
//                                     <Image
//                                       loading="lazy"
//                                       width={1900}
//                                       height={900}
//                                       quality={100}
//                                       priority={false}
//                                       src={viewImage.image.src}
//                                       alt={viewImage.title || "Project Preview"}
//                                       style={{
//                                         objectFit: "cover",
//                                       }}
//                                     />
//                                   </picture>
//                                 </div>
//                               </div>
//                               <div className={`${styles.overView_grid_nm}`}>
//                                 <div
//                                   className={`${styles.overview_grid_tl} font-ChillaxRegular py-4`}
//                                 >
//                                   {viewImage.title}
//                                 </div>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
