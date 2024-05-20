import styles from "./Services.module.scss";

const ServicesData = [
  {
    number: "01",
    name: "Website Desain",
    infoService:
      "Melalui pendekatan yang terarah dan kolaboratif, kami akan merangkai setiap elemen desain dengan teliti, memastikan bahwa setiap piksel dan konten memiliki tujuan yang jelas dan memberikan dampak yang mendalam.",
  },
  {
    number: "02",
    name: "Website Application",
    infoService:
      "Dalam dunia yang terus berkembang secara digital ini, layanan kami hadir untuk memberikan solusi terdepan dalam pengembangan aplikasi berbasis website  yang tidak hanya memenuhi kebutuhan klien kami, tetapi juga melampaui harapan anda.  ",
  },
  {
    number: "03",
    name: "Website Maintenance",
    infoService:
      "Dari pemantauan kinerja dan keamanan hingga pembaruan konten dan perangkat lunak, kami mengambil tanggung jawab penuh untuk memastikan bahwa situs anda tetap berjalan optimal, tanpa hambatan atau ketidaksempurnaan yang tidak diinginkan. ",
  },
];
export default function ServicesComponent() {
  return (
    <>
      <div className={`${styles.servicesHeadline_x} my-32 rounded-[3rem]`}>
        <div className={`${styles.servicesWrapper_x} py-32 lg:px-10 p-6`}>
          <div className="flex flex-col justify-between servicesTitle-x lg:flex-row md:flex-row md:items-end lg:items-end md:m-10 xl:m-0 ">
            <div className="text-4xl md:text-8xl font-[900] uppercase lg:text-8xl servicesHeading-x">
              Services
            </div>
          </div>
          <div
            className={`${styles.servicesContent} grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:m-6 md:m-10 xl:m-0`}
          >
            {ServicesData.map((service, index) => (
              <div
                key={index}
                className={`${styles.servicesItem} flex flex-col rounded-xl justify-between`}
              >
                <span className={`${styles.servicesNumber} block white`}>
                  {service.number}
                </span>
                <span
                  className={`${styles.servicesName} block white whitespace-wrap`}
                >
                  {service.name}
                </span>
                <span className={`${styles.servicesInfo} block white`}>
                  {service.infoService}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
