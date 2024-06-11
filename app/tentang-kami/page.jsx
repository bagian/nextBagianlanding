import React from "react";
import styles from "./styles.module.scss";
import Footer from "../components/mainLanding/inFooter";

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
