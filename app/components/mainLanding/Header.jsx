"use client";

import styles from "../../styles.module.scss";
import Link from "next/link";
// import { FiArrowRight } from "react-icons/fi";
import BgSmooth from "../../../public/img/blur-bg-bagian-smooth.png";
import Image from "next/image";
import SvgOne from "../svg/SvgOne";
import SvgTwo from "../svg/SvgTwo";
import SvgThree from "../svg/SvgThree";
import SvgFour from "../svg/SvgFour";
import SvgFive from "../svg/SvgFive";

function Header() {
  const phoneNumber = "6285174295981";
  const message =
    "Hallo, Saya tertarik untuk melakukan pemesanan layanan (Web Design / Web Development / Web Maintenance).";
  const urlWA = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <>
      <div className={`${styles.headerContainer_hd}`}>
        <div className={`${styles.pathSvg_hd}`}>
          <SvgOne className={`${styles.svgStg_x_hd}`} />
          <SvgTwo className={`${styles.svgStg_xn_hd}`} />
          <SvgThree className={`${styles.svgStg_ng_hd}`} />
          <SvgFour className={`${styles.svgStg_nh_hd}`} />
          <SvgFive className={`${styles.svgStg_nd_hd}`} />
        </div>
        <div className={`${styles.headerHead_hd}`}>
          {/* <div className="beta bg-[#CAFD00] max-w-[200px] m-auto text-center px-5 py-2 rounded-lg -rotate-6 ">
            BETA
          </div> */}
          <h1>
            <span>Solusi Tepat Pembuatan</span> dan Pemeliharaan{" "}
            <span>Website</span> yang Handal dan Profesional.
          </h1>
          <div className={`${styles.subHeadTitle_hd}`}>
            <p>
              Layanan Terintegrasi dari Desain hingga Optimasi, Menyediakan
              Solusi Website yang Memukau dan Berkinerja Tinggi.
            </p>
          </div>
          <div className={`${styles.headerButton_hd} flex m-auto`}>
            <Link
              target="_blank"
              href={urlWA}
              rel="noopener noreferrer"
              className={`${styles.headerButton_link}`}
            >
              <button
                className={`${styles.headerButton_cta} flex items-center gap-5`}
              >
                Hubungi Kami
              </button>
            </Link>
          </div>
        </div>
        <div className={`${styles.blurBg}`}>
          <picture className={`${styles.blurBg_bg}`}>
            <Image src={BgSmooth} alt="BgSmooth" />
          </picture>
        </div>
      </div>
    </>
  );
}

export default Header;
