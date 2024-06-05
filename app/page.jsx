import React from "react";
import styles from "./global.module.scss";
import Header from "./components/Headers/Header";

function pageContainer() {
  return (
    <>
      <div className={`${styles.pageContainer} relative `}>
        <div className={`${styles.headerContent}`}>
          <Header />
        </div>
      </div>
    </>
  );
}

export default pageContainer;
