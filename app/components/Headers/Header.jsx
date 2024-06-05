import React from "react";
import styles from "../../global.module.scss";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import BgSmooth from "../../../public/img/blur-bg-bagian-smooth.png";
import Image from "next/image";
import BgSmoothSvg from "../svg/BgSmooth";

function Header() {
  return (
    <>
      <div className={`${styles.headerContainer_hd}`}>
        <div className={`${styles.headerHead_hd}`}>
          <h1>
            <span>Solusi Tepat Pembuatan</span> dan Pemeliharaan
            <span>Website</span> yang Handal dan Profesional.
          </h1>
          <div className={`${styles.subHeadTitle_hd}`}>
            <p>
              Layanan Terintegrasi dari Desain hingga Optimasi, Menyediakan
              Solusi Website yang Memukau dan Berkinerja Tinggi.
            </p>
          </div>
          <div className={`${styles.headerButton_hd}`}>
            <button className={`${styles.headerButton_cta}`}>
              <Link href="/" className={`${styles.headerButton_link} `}>
                Hubungi Kami{" "}
                <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className={`${styles.blurBg}`}>
        <picture className={`${styles.blurBg_bg}`}>
          <Image src={BgSmooth} alt="BgSmooth" />
        </picture>
      </div>
    </>
  );
}

export default Header;
