"use client";

import React, { useState, useRef, useEffect } from "react";
import "./pageMain.scss";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(splitText);

// let splitTextAnm = new SplitText(".page-stag", { type: "chars" });
// let chars = splitTextAnm.chars;

const Home = () => {
  const pageHeader = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      gsap.set(".title-top", { y: 75 });
      tl.current = gsap
        .timeline({ repeatRefresh: true })
        .to(".page-wrapper", {
          duration: 1.15,
          // clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
          delay: 1.5,
          stagger: 2,
        })
        .to(".title-top", {
          opacity: 1,
          y: 2,
          duration: 1,
          stagger: 0.12,
          ease: "power4.inOut",
          delay: -0.15,
        })
        .to(".title-base", {
          opacity: 1,
          y: 42,
          duration: 1,
          stagger: 0.12,
          ease: "power4.inOut",
          delay: -0.15,
        })
        .to(".path-p-side", {
          opacity: 1,
          y: 42,
          duration: 0.5,
          stagger: 0.17,
          ease: "power4.inOut",
          delay: 0.15,
        });
    },

    { scope: pageHeader }
  );
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
    background:
      "linear-gradient(49deg, rgba(255,255,255,1) 0%, rgba(189,77,192,1) 42%, rgba(249,188,133,1) 74%, rgba(68,83,222,1) 100%)",
    backgroundClip: "text",
    color: "transparent",
    "-webkit-background-clip": "text",
  };
  return (
    <>
      <section className="page-header" ref={pageHeader}>
        <div className="page-content">
          <div className="relative flex flex-[4] text-center page-wrapper">
            <div className="flex flex-col items-center justify-center mt-20 flex-nowrap page-stag">
              {/* <span className="absolute flex items-center p-3 text-center rounded-full tagger-tag">
                Our Mission
              </span> */}
              <span className="flex gap-5 whitespace-nowrap title-x title-top ">
                Get your
                <span style={pathStyles}>dream</span>
              </span>
              <span className="text-center title-x title-base ">
                Idea to life.
              </span>
              <p className="mt-4 text-gray-500 opacity-0 path-p-side">
                We create, We Deploy, We Maintenance
              </p>
            </div>
          </div>
          <div className="page-container">
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 page-wrapper">
              <div className="p-5 mt-[8em] rounded-md xl:my-20 page-items bg-slate-500">
                <div className="page-2flex flex flex-[2] py-10 gap-2">
                  <div className="content-2flex">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolorem voluptas totam eos. Velit, expedita porro.
                  </div>
                  <div className="content-2flex">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolorem voluptas totam eos. Velit, expedita porro.
                  </div>
                </div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti consequuntur quia exercitationem laboriosam voluptatum
                veritatis, sit ad sunt eaque totam, non optio quasi enim. Ipsum
                pariatur quos saepe? Culpa magni aut, officiis perferendis
                deleniti quo voluptate laudantium dolor in alias illum
                exercitationem pariatur accusamus. Praesentium, exercitationem
                maxime doloremque facilis molestias nam neque eaque nemo quia
                amet at aut dolores, mollitia repellendus, dolorem fugit iure
                cum delectus cupiditate recusandae quo voluptas doloribus!
                Maxime voluptas, eum quaerat minus autem aliquam. Minima itaque
                quo minus illo laudantium soluta dicta exercitationem
                repellendus quibusdam eaque, tempora quod! Soluta assumenda,
                laboriosam necessitatibus accusamus perferendis consequatur fuga
                deserunt, maiores sit nobis corrupti possimus incidunt sed
                voluptas. Obcaecati architecto laboriosam excepturi voluptates
                iusto cumque velit ipsum dignissimos ipsam vitae at deserunt
                nisi ipsa, officiis enim voluptatum, libero perferendis odio
                sint rerum aperiam voluptatibus fugit. Sapiente, magni voluptate
                enim illo, ex voluptatem impedit, unde sequi autem hic possimus!
                Repellendus tenetur vel earum minus rerum explicabo qui autem,
                enim quo, quam culpa asperiores molestiae ad dicta! Sed quam in
                illum ullam, debitis harum id, natus eius consequatur suscipit
                aperiam consequuntur. Odio, consequatur maiores! Nisi, delectus
                distinctio hic omnis officiis aut quidem vel explicabo quaerat
                molestias recusandae enim similique vitae ratione? Lorem, ipsum
                dolor sit amet consectetur adipisicing elit.
              </div>
              <div className="p-5 my-2 rounded-md xl:my-20 page-items bg-slate-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti consequuntur quia exercitationem laboriosam voluptatum
                veritatis, sit ad sunt eaque totam, non optio quasi enim. Ipsum
                pariatur quos saepe? Culpa magni aut, officiis perferendis
                deleniti quo voluptate laudantium dolor in alias illum
                exercitationem pariatur accusamus. Praesentium, exercitationem
                maxime doloremque facilis molestias nam neque eaque nemo quia
                amet at aut dolores, mollitia repellendus, dolorem fugit iure
                cum delectus cupiditate recusandae quo voluptas doloribus!
                Maxime voluptas, eum quaerat minus autem aliquam. Minima itaque
                quo minus illo laudantium soluta dicta exercitationem
                repellendus quibusdam eaque, tempora quod! Soluta assumenda,
                laboriosam necessitatibus accusamus perferendis consequatur fuga
                deserunt, maiores sit nobis corrupti possimus incidunt sed
                voluptas. Obcaecati architecto laboriosam excepturi voluptates
                iusto cumque velit ipsum dignissimos ipsam vitae at deserunt
                nisi ipsa, officiis enim voluptatum, libero perferendis odio
                sint rerum aperiam voluptatibus fugit. Sapiente, magni voluptate
                enim illo, ex voluptatem impedit, unde sequi autem hic possimus!
                Repellendus tenetur vel earum minus rerum explicabo qui autem,
                enim quo, quam culpa asperiores molestiae ad dicta! Sed quam in
                illum ullam, debitis harum id, natus eius consequatur suscipit
                aperiam consequuntur. Odio, consequatur maiores! Nisi, delectus
                distinctio hic omnis officiis aut quidem vel explicabo quaerat
                molestias recusandae enim similique vitae ratione? Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Rerum praesentium,
                tempore ipsam illo, autem, deserunt omnis obcaecati officiis
                minima totam dolores. Incidunt ipsam quam recusandae sint rem
                quos. Modi culpa, nisi maxime officiis molestias sit aut sed,
                unde placeat, explicabo consequuntur dolore rerum quos facere
                similique natus itaque reprehenderit odio illum saepe rem beatae
                animi? Natus tempora accusantium nobis deleniti inventore,
                similique neque deserunt, sunt enim molestias odit id nisi,
                tempore nihil animi. Id veritatis recusandae repudiandae
                eveniet, saepe temporibus, non amet earum maiores illo dolore.
                Odio laudantium debitis sunt ratione iusto est? Vero dolorum
                placeat aperiam soluta id provident velit est ut illo eligendi
                fuga veritatis voluptates quibusdam rem atque nostrum neque,
                distinctio possimus architecto nihil nulla officiis vel aliquid?
                Nam saepe vero obcaecati nesciunt iusto, rerum doloremque,
                sapiente rem enim ullam aperiam nulla placeat eaque! Ex ullam
                distinctio ea maxime, exercitationem sequi a alias? Placeat
                exercitationem aspernatur amet iure. Cum commodi aliquid amet
                nemo perspiciatis labore fuga sit odit eos reiciendis! Corrupti
                quis non iusto illo iste? Ab velit aspernatur rerum dolores.
                Esse at, similique perspiciatis iste voluptate eos. Aliquam
                incidunt, delectus ea explicabo saepe dolorem deleniti in ut
                tenetur dolore expedita provident nostrum excepturi cum, laborum
                dolorum libero quas modi eos id totam molestias voluptate iusto.
                Blanditiis perferendis odit possimus repellendus tenetur sit
                veniam voluptatum cum numquam ab eveniet, facere laboriosam
                reprehenderit similique. Eveniet repellendus sed officia earum
                voluptatem numquam consequuntur animi assumenda commodi ex quae
                laudantium expedita quisquam quia adipisci debitis cum
                aspernatur sequi, accusamus corporis harum at libero! Dolor,
                iste. Facere quia dignissimos repellat nostrum, dolor
                doloremque, provident voluptas ex officia neque nulla
                perspiciatis, quod sunt veritatis accusantium aliquid. Facilis
                dolores optio maiores pariatur nam nihil illum officia,
                reiciendis numquam eligendi architecto sapiente, vitae ratione
                atque nemo excepturi! Totam quod placeat eius sequi a ut quo
                laborum veniam earum. Qui accusantium animi, laborum quisquam
                dolores assumenda officiis quas atque asperiores, nisi vero
                quibusdam hic odit reiciendis consequuntur porro magni non
                repellat inventore in. Esse cupiditate eligendi blanditiis quo
                sed omnis dicta dolorum magnam. Quos cupiditate consequatur
                perspiciatis officia magni quia, similique illo, eum doloremque
                voluptas sequi laboriosam, ratione quidem. Qui vero inventore
                aliquid numquam perferendis? Magni laborum culpa facere, soluta
                ducimus neque consectetur, delectus atque asperiores tempore
                nulla sunt tenetur nam earum officiis, eaque fugiat minus quod
                error amet impedit iste omnis vel natus! Dignissimos, voluptatem
                nam iusto iste molestiae in, sit culpa at suscipit ipsa quo
                molestias voluptas cum nostrum explicabo eveniet recusandae?
                Earum perspiciatis sed illo, dolor reprehenderit expedita iste
                laudantium tempora voluptatibus rem exercitationem quae enim
                iusto veritatis deleniti hic architecto dicta culpa officia
                alias. Optio ratione dolorum numquam ea, quaerat sint eaque
                voluptate sapiente nobis iusto perspiciatis officiis vitae nemo
                amet dolorem, dolores magni iste adipisci fugiat laborum. Libero
                odio, quisquam tenetur expedita blanditiis eligendi animi quas
                aperiam? Quis excepturi fugiat vitae, sapiente ipsa laborum
                error temporibus perspiciatis consequatur sint aspernatur optio
                deleniti. Quasi quo sit voluptatem sint ad ipsum nam at
                accusamus alias illo maxime, quisquam, delectus esse officia
                dolore.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
