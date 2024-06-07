import React from "react";
import styles from "./styles.module.scss";
import Header from "./components/mainLanding/Header";
import OurProducts from "./components/mainLanding/ourProduct";
import RoadMap from "./components/mainLanding/roadMap";
import PriceList from "./components/mainLanding/priceList";
// import OurClient from "./components/mainLanding/OurClient";
// import Footer from "./components/mainLanding/Footer";
import IntroAbout from "./components/mainLanding/inAbout";

function pageContainer() {
  return (
    <>
      <div className={`${styles.pageContainer} relative `}>
        <div className={`${styles.headerContent}`}>
          <Header />
        </div>
        <IntroAbout />
        <OurProducts />
        <RoadMap />
        <PriceList />
        {/* <OurClient /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default pageContainer;
