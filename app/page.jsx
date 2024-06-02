import React from "react";
import LandingPage from "./LandingPage";
import MaintenancePage from "./components/maintenancePage/page";
import styles from "./global.module.scss";

function pageContainer() {
  return (
    <>
      <div className={`${styles.pageContainer} relative`}>
        {/* <LandingPage /> */}
        <MaintenancePage />
      </div>
    </>
  );
}

export default pageContainer;
