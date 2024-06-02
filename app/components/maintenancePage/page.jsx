import styles from "./mtcs.module.scss";
import Link from "next/link";
export default function MaintenancePage() {
  return (
    <>
      <div className={`${styles.maintenancePage} relative`}>
        <div className={styles.maintenanceContent}>
          <div className={`${styles.maintenanceContent_mtcs} relative py-10`}>
            <span className={`${styles.maintenanceContent_item} block`}>
              <h1>Sorry we are under maintenance !</h1>
            </span>
            <span className={`${styles.maintenanceContent_item}`}>
              Kami tau apa yang anda butuhkan untuk saat ini, namun untuk saat
              ini kami sedang melakukan pengembangan website. Jangan khawatir,
              anda masih bisa mengubungi customer service kami di{" "}
              <strong>
                <Link href="mailto:support@bagian.net">support@bagian.net</Link>
              </strong>{" "}
              (jam kerja) untuk mendapatkan bantuan lebih lanjut, atau hubungi
              kami di <strong>+6289687725509</strong> untuk mendapatkan
              informasi mengenai layanan kami.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
