import React from "react";
import styles from "./styles.module.scss";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";
import SvgPrcsIc from "../../svg/priceList/SvgPrcs";
import RollSvgs from "../../svg/priceList/RollSvgs";
import SpringPrc from "../../svg/priceList/SpringPrc";

const priceListData = [
  {
    title: "Desain",
    price: "Rp 350.000",
    description:
      "Cocok untuk usaha kecil atau perusahaan yang ingin memulai dengan desain UI/UX yang profesional, Harga mulai dari Rp 350.000.",
    list: [
      "Riset Pengguna dan Kompetitor",
      "Wireframing dan Prototyping",
      "Desain Halaman Utama",
      "3 Kali Revisi",
      "User Testing",
    ],
    link: "#",
    linkTag: "Pilih Paket",
  },
  {
    title: "Production",
    price: "Rp 2.800.000",
    description:
      "Dirancang untuk yang membutuhkan website dengan fitur terupdate dan performa tinggi, Harga mulai Rp 2.800.000  tanpa harga desain.",
    list: [
      "Paket Desain",
      "Implementasi Desain Ke Tahapan Koding",
      "12 Kali Revisi ",
      "Deployment",
      "Hosting dan Domain",
    ],
    link: "#",
    linkTag: "Pilih Paket",
  },
  {
    title: "Maintenance",
    price: "Rp 500.000",
    description:
      "Layanan pemeliharaan Website untuk memastikan situs Anda tetap optimal dan aman, Harga mulai Rp 500.000 per Bulan.",
    list: [
      "Pembaruan Koding",
      "Backup Bulanan",
      "Pembaruan  User Exsperience",
      "Debugging Kode",
      "Monitoring Kinerja Website",
    ],
    link: "https://wa.link/s9c4s2",
    linkTag: "Hubungi Kami",
  },
];

function PriceList() {
  return (
    <>
      <div className={`${styles.priceList_container}`}>
        <button className={`${styles.priceList_button_demo}`}>
          <span>Upload</span>
        </button>
        <div className={`${styles.priceListContent}`}>
          <div
            className={`${styles.priceList_title} flex flex-col text-center py-20`}
          >
            <span className={`${styles.priceList_title_tag}`}>
              Pilih Kategori Harga
            </span>

            <span className={`${styles.priceList_title_description}`}>
              Kami menawarkan berbagai paket layanan pembuatan website yang
              dapat disesuaikan dengan kebutuhan dan anggaran Anda. Temukan
              paket yang tepat untuk Anda dan mulailah perjalanan digital Anda
              bersama kami!
              <div className={`${styles.priceList_title_svg}`}>
                <SvgPrcsIc />
              </div>
            </span>
          </div>
          <div
            className={`${styles.priceList_data} grid lg:grid-cols-2 gap-10 md:grid-cols-2 2xl:grid-cols-3`}
          >
            {priceListData.map((item, index) => (
              <div
                className={`${styles.priceList_item} flex flex-col`}
                key={index}
              >
                <span className={`${styles.priceList_title} my-6`}>
                  {item.title}
                </span>
                <span className={`${styles.priceList_description} my-16`}>
                  {item.description}
                </span>
                <span
                  className={`${styles.priceList_price} py-4 ${
                    index === 0
                      ? "border-b border-white"
                      : index === 1
                      ? "border-b border-black"
                      : index === 2
                      ? "border-b border-white"
                      : ""
                  }`}
                >
                  {item.price}
                </span>
                <div className={`${styles.priceList_list_task} flex-col py-10`}>
                  {item.list &&
                    item.list.map((listItem, index) => (
                      <span
                        key={index}
                        className={`${styles.priceList_list_task_item}`}
                      >
                        <FaCheck />
                        {listItem}
                      </span>
                    ))}
                </div>
                <div className={`${styles.priceList_link_button} py-10`}>
                  {item.link && (
                    <span>
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className={`${styles.priceList_link_item} ${
                          index === 2 ? styles.priceList_link_item_special : ""
                        }`}
                      >
                        {item.linkTag}
                      </Link>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.rollSvgs}`}>
          <RollSvgs />
        </div>
        <div className={`${styles.springSvgs_prcs}`}>
          <SpringPrc />
        </div>
      </div>
    </>
  );
}

export default PriceList;
