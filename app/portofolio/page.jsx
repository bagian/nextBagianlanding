import React from "react";
import styles from "./styles.module.scss";
import Footer from "../components/mainLanding/inFooter";
import SvgFire from "./svgs/fireSvgs";
import RocketSvgs from "./svgs/rocketSvgs";

export default function Portfolio() {
  return (
    <>
      <div className={`${styles.portofolioContainer}`}>
        <div className={`${styles.portofolioWrapper}`}>
          <div className={`${styles.portofolioHeader}`}>
            <div className={`${styles.portofolioHeading}`}>
              <div className={`${styles.portofolioHeadingWrapper}`}>
                <div className={`${styles.portofolioHeadingN}`}>
                  <span className={`${styles.portofolioHeading_title}`}>
                    Kami Membuat
                  </span>
                  <span className={`${styles.portofolioFr}`}>
                    <SvgFire />
                    <h2>Client adalah prioritas utama.</h2>
                  </span>
                </div>
                <div className={`${styles.portofolioInside}`}>
                  <span className={`${styles.portofolioHeading_title}`}>
                    Apa Yang Dibutuhkan Oleh
                  </span>
                </div>
                <div className={`${styles.portofolioHeadingX}`}>
                  <span className={`${styles.portofolioX}`}>
                    <RocketSvgs />
                    <h2>Melaju tak terbatas dengan kami.</h2>
                  </span>
                  <span className={`${styles.portofolioHeading_title}`}>
                    Client Kami.
                  </span>
                </div>
              </div>
            </div>
            <div className={`${styles.portofolioSubHeading}`}>
              <span className={`${styles.portofolioSubP}`}>
                <p>
                  Dengan memberikan solusi terbaik dan terpercaya, kami selalu
                  mendengarkan dan memahami kebutuhan client. Kami berkomitmen
                  untuk mewujudkan ide dan impian mereka menjadi kenyataan
                  melalui sarana website.
                </p>
              </span>
            </div>
          </div>
          <div className={`${styles.portofolioContent}`}>
            <div className={`${styles.portofolioItem}`}>
              Portofolio is coming soon!
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
