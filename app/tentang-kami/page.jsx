import React from "react";
import styles from "./styles.module.scss";
import Footer from "../components/mainLanding/inFooter";
// import Video from "next-video";
// import WalkMoon from "/videos/walks-moon.mp4";

export default function TentangKami() {
  return (
    <>
      <div className={`${styles.pageContainer}`}>
        <div className={`${styles.pageContent}`}>
          <div className={`${styles.pageHeader}`}>
            <span>Tentang Kami</span>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
