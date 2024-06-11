"use client";

import React from "react";
import styles from "./styles.module.scss";
import SvgProductOne from "../../svg/SvgProducts1";
import SvgProductsTwo from "../../svg/SvgProducts2";
import SvgProductsThree from "../../svg/SvgProducts3";

const productItem = [
  {
    title: "Desain Website",
    description:
      "Melalui pendekatan yang terarah dan kolaboratif,  kami akan merangkai setiap elemen desain dengan teliti,  memastikan bahwa setiap piksel dan konten memiliki tujuan yang jelas dan memberikan dampak yang mendalam.",
    Icon: <SvgProductOne />,
  },
  {
    title: "Aplikasi Website",
    description:
      "Dalam dunia yang terus berkembang secara digital ini, layanan kami hadir untuk memberikan solusi terdepan dalam pengembangan aplikasi berbasis website  yang tidak hanya memenuhi kebutuhan anda, tetapi juga melampaui harapan anda.",
    Icon: <SvgProductsTwo />,
  },
  {
    title: "Maintenance Website",
    description:
      "Kami mengambil tanggung jawab penuh untuk memastikan bahwa situs anda tetap berjalan optimal, tanpa hambatan atau ketidaksempurnaan yang tidak diinginkan.",
    Icon: <SvgProductsThree />,
  },
];

const OurProducts = () => {
  return (
    <>
      <div className={`${styles.ourProducts}`}>
        <div
          className={`${styles.productContent} grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2`}
        >
          {productItem.map((item, index) => (
            <div key={index} className={`${styles.productItem}`}>
              <div
                className={`${styles.productContent} flex flex-col justify-end`}
              >
                {/* <span className={`${styles.productIcon}`}>{item.Icon}</span> */}
                <span className={`${styles.productTitle} relative`}>
                  <h3>{item.title}</h3>
                </span>
                <span className={`${styles.productDescription}`}>
                  <p>{item.description}</p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurProducts;
