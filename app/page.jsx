"use client";

import React, { useState, useRef, useEffect } from "react";
import "./pageMain.scss";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Spline from "@splinetool/react-spline";

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

  const splineStyles = {
    width: "100%",
    // height: "90rem",
    position: "relative",
    // paddingTop: "-30em",
    // top: "-30em",
    // left: "-50em",
  };
  return (
    <>
      <section className="relative page-header">
        <div className="3d-move">
          <Spline
            style={splineStyles}
            scene="https://prod.spline.design/4Y8X7O6Oe9mN6UL0/scene.splinecode"
          />
          {/* <Spline
            style={splineStyles}
            scene="https://prod.spline.design/1YMhEOlCBwBsIIWW/scene.splinecode"
          /> */}
          {/* <Spline
            style={splineStyles}
            scene="https://prod.spline.design/j3V-sT0nGpV4lHrO/scene.splinecode"
          /> */}
          <div className="page-content" ref={pageHeader}>
            <div className="pointer-events-none absolute top-[3em] flex flex-[4] text-center page-wrapper">
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
            <div className="p-10 page-container">
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ullam, distinctio. Tenetur, velit alias temporibus sapiente
                  quibusdam possimus delectus eligendi consequatur quaerat! Sunt
                  modi assumenda soluta mollitia. Nisi eum amet eos?
                </div>
                <div className="p-5 my-2 rounded-md xl:my-20 page-items bg-slate-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolor error animi ullam facilis expedita? Fugiat dolor dolores
                  porro pariatur alias laboriosam eligendi harum rerum, est
                  nihil adipisci atque maxime sunt!
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
