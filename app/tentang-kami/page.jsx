import React from "react";
import styles from "./styles.module.scss";
import Footer from "../components/mainLanding/inFooter";
import Image from "next/image";
import Meeting from "public/img/meeting.jpg";
import MeetingTeenager from "public/img/meeting-teenager.webp";

export default function TentangKami() {
  return (
    <>
      <div className={`${styles.pageContainer}`}>
        <div className={`${styles.pageContent}`}>
          <div className={`${styles.pageHeader}`}>
            <span className="font-extrabold uppercase">
              Kami siap membantu bisnis anda untuk berkembang secara digital
            </span>
            <div className={`${styles.headerBanner}`}>
              <picture>
                <Image src={Meeting} alt="Meeting With Bagian" />
              </picture>
            </div>
          </div>
          <div className={`${styles.ourStoryHeader}`}>
            <div className={`${styles.ourStoryContent}`}>
              <div className={`${styles.ourStory}`}>
                <span className={`${styles.storyHeading}`}>Cerita Kami</span>
                <div className={`${styles.storyHeadingTitle}`}>
                  <span className={`${styles.storyTitle}`}>
                    Tercipta untuk membantu proses bisnis secara digital lebih
                    dari 3 tahun
                  </span>
                </div>
                <div className={`${styles.storyDescription}`}>
                  <span className={`${styles.storyDescriptionContent}`}>
                    <p>
                      Bagian.net lahir dari ide sekelompok profesional muda yang
                      bersemangat dan memiliki latar belakang di bidang desain
                      dan teknologi. Kami melihat bahwa banyak bisnis di
                      Indonesia yang memerlukan bantuan untuk bertransformasi ke
                      dunia digital. Dengan menggabungkan keahlian desain yang
                      artistik dan keterampilan teknis yang mendalam, kami
                      memulai perjalanan kami untuk membantu bisnis-bisnis ini
                      berkembang di era digital.
                    </p>
                  </span>
                  <span className={`${styles.storyDescriptionContent}`}>
                    <p>
                      Didirikan pada tahun 2019 dengan visi untuk menjadi
                      penyedia layanan digital terdepan di Indonesia. Kami fokus
                      pada jasa pembuatan desain website, aplikasi website, dan
                      maintenance website. Sejak awal berdiri, kami telah
                      berkomitmen untuk memberikan solusi digital yang inovatif,
                      berkualitas tinggi, dan sesuai dengan kebutuhan klien.
                      Setiap proyek adalah kesempatan bagi kami untuk belajar
                      dan berkembang, serta memberikan hasil yang terbaik bagi
                      klien kami.
                    </p>
                  </span>
                </div>
              </div>
              <div className={`${styles.storyBannerSide}`}>
                <picture>
                  <Image src={MeetingTeenager} alt="Meeting" />
                </picture>
              </div>
            </div>
          </div>
          <div className={`${styles.ourVsnMs}`}>
            <span className={`${styles.ourVsnMsHeader}`}>
              Visi dan Misi Kami
            </span>
            <div className={`${styles.ourVMsContent}`}>
              <div className={`${styles.ourVmsItems} ${styles.ourVisionItem}`}>
                <span className={`${styles.vision}`}>Visi</span>
                <span className={`${styles.VnMDesc} ${styles.VisionDesc}`}>
                  Menjadi pemimpin dalam industri layanan digital dengan
                  menyediakan solusi inovatif yang membantu klien kami mencapai
                  tujuan bisnis mereka.
                </span>
              </div>
              <div className={`${styles.ourVmsItems} ${styles.ourMisionItem}`}>
                <span className={`${styles.mision}`}>Misi</span>
                <span className={`${styles.VnMDesc} ${styles.MisionDesc}`}>
                  <ul className={`${styles.misionItemUl}`}>
                    <li className="py-1.5">
                      Menyediakan layanan desain dan pengembangan website yang
                      berkualitas tinggi.
                    </li>
                    <li className="py-1.5">
                      Membantu klien kami untuk memaksimalkan potensi bisnis
                      mereka melalui solusi digital yang efektif.
                    </li>
                    <li className="py-1.5">
                      Membangun hubungan jangka panjang dengan klien berdasarkan
                      kepercayaan dan kepuasan.
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
