import React from "react";
import Footer from "../../components/mainLanding/inFooter";
import styles from "./styles.module.scss";

export default function PrivacyPolicy() {
  const policyData = [
    {
      title: "Cara Kami Menggunakan Informasi Anda",
      content:
        "Kami menggunakan informasi yang kami kumpulkan untuk berbagai tujuan:",
      listTitles: [
        {
          title: "Informasi Identifikasi Pribadi",
          list: [
            "Nama: Kami mengumpulkan nama lengkap Anda untuk tujuan identifikasi.",
            "Alamat Email: Kami menggunakan alamat email Anda untuk komunikasi terkait layanan, termasuk konfirmasi pesanan, faktur, dan dukungan pelanggan.",
            "Nomor Telepon: Kami menggunakan nomor telepon Anda untuk komunikasi mendesak atau terkait dukungan pelanggan.",
            "Alamat Fisik: Kami mengumpulkan alamat fisik untuk pengiriman dokumen fisik jika diperlukan.",
          ],
        },
        {
          title: "Informasi Teknis",
          list: [
            "Alamat IP: Kami mengumpulkan alamat IP Anda untuk tujuan keamanan dan analitik.",
            "Jenis Peramban: Kami mengumpulkan informasi tentang jenis peramban yang Anda gunakan untuk mengakses layanan kami.",
            "Penyedia Layanan Internet (ISP): Kami mengumpulkan informasi tentang ISP Anda untuk analisis kinerja.",
            "Halaman Rujukan/Keluar: Kami melacak halaman rujukan dan keluar untuk memahami bagaimana Anda tiba di situs kami dan ke mana Anda pergi setelah meninggalkan situs kami.",
          ],
        },
        {
          title: "Informasi Penggunaan",
          list: [
            "Halaman yang Dikunjungi: Kami melacak halaman yang Anda kunjungi di situs kami untuk memahami minat Anda dan memperbaiki layanan kami.",
            "Waktu Akses: Kami mencatat waktu akses untuk analisis pola penggunaan.",
            "Durasi Kunjungan: Kami mencatat durasi kunjungan untuk memahami keterlibatan pengguna.",
          ],
        },
      ],
    },
    {
      title: "Cara Kami Menggunakan Informasi Anda",
      content:
        "Kami menggunakan informasi yang kami kumpulkan untuk berbagai tujuan:",
      listTitles: [
        {
          title: "Penyediaan Layanan",
          list: [
            "Pengembangan dan Peningkatan Situs Web: Informasi Anda digunakan untuk merancang, mengembangkan, dan memperbaiki situs web yang kami buat untuk Anda.",
            "Manajemen Akun: Kami menggunakan informasi Anda untuk mengelola akun Anda dan menyediakan dukungan pelanggan.",
          ],
        },
        {
          title: "Komunikasi",
          list: [
            "Pembaruan Layanan: Kami mengirimkan pembaruan mengenai fitur baru atau perubahan layanan.",
            "Promosi dan Penawaran: Kami dapat mengirimkan penawaran dan promosi khusus yang relevan dengan minat Anda.",
          ],
        },
        {
          title: "Personalisasi",
          list: [
            "Konten yang Disesuaikan: Kami menggunakan informasi Anda untuk menyajikan konten yang sesuai dengan minat dan preferensi Anda.",
            "Pengalaman Pengguna: Kami menyesuaikan pengalaman pengguna untuk membuat interaksi Anda dengan situs kami lebih intuitif.",
          ],
        },
        {
          title: "Keamanan",
          list: [
            "Perlindungan dari Ancaman: Kami menggunakan informasi teknis untuk melindungi layanan kami dan pengguna kami dari ancaman keamanan, termasuk penipuan dan serangan siber.",
            "Pemantauan Aktivitas: Kami memantau aktivitas pengguna untuk mendeteksi dan mencegah tindakan yang mencurigakan atau tidak sah.",
          ],
        },
        {
          title: "Analisis dan Peningkatan Layanan",
          list: [
            "Analitik Penggunaan: Kami menganalisis data penggunaan untuk memahami bagaimana layanan kami digunakan dan bagaimana kami dapat meningkatkannya.",
            "Umpan Balik Pengguna: Kami mengumpulkan dan menggunakan umpan balik dari pengguna untuk memperbaiki layanan kami.",
          ],
        },
      ],
    },
    {
      title: "Pembagian Informasi",
      content:
        "Kami tidak menjual, menukar, atau menyewakan informasi identifikasi pribadi Anda kepada pihak ketiga. Namun, kami dapat membagikan informasi Anda dengan pihak ketiga dalam keadaan berikut:",
      listTitles: [
        {
          title: "Penyedia Layanan Pihak Ketiga",
          list: [
            "Hosting dan Infrastruktur: Kami menggunakan penyedia layanan hosting untuk menyimpan dan mengelola data Anda dengan aman.",
            "Layanan Analitik: Kami menggunakan alat analitik pihak ketiga untuk memahami penggunaan layanan kami dan meningkatkan pengalaman pengguna.",
            "Layanan Pembayaran: Kami bekerja dengan penyedia layanan pembayaran untuk memproses transaksi Anda dengan aman.",
          ],
        },
        {
          title: "Kepatuhan Hukum",
          list: [
            "Permintaan Hukum: Kami dapat mengungkapkan informasi Anda jika diwajibkan oleh hukum atau dalam menanggapi permintaan yang sah dari otoritas pemerintah.",
            "Perlindungan Hak Kami: Kami dapat mengungkapkan informasi Anda jika diperlukan untuk melindungi hak, properti, atau keselamatan Bagian.net, pengguna kami, atau publik.",
          ],
        },
      ],
    },
    {
      title: "Keamanan Informasi",
      content:
        "Kami mengambil langkah-langkah yang wajar untuk melindungi informasi pribadi Anda dari akses, penggunaan, atau pengungkapan yang tidak sah. Langkah-langkah keamanan yang kami terapkan meliputi:",
      listTitles: [
        {
          title: "Enkripsi",
          list: [
            "Data Transmisi: Kami menggunakan enkripsi SSL untuk melindungi data Anda selama transmisi.",
            "Data Penyimpanan: Data sensitif disimpan dalam format terenkripsi.",
          ],
        },
        {
          title: "Akses Kontrol",
          list: [
            "Pembatasan Akses: Akses ke informasi pribadi dibatasi hanya untuk karyawan yang membutuhkannya untuk menjalankan tugas mereka.",
            "Otentikasi Ganda: Kami menerapkan otentikasi ganda untuk akses ke sistem internal kami.",
          ],
        },
        {
          title: "Pemantauan dan Audit",
          list: [
            "Log Keamanan: Kami memantau log keamanan untuk mendeteksi aktivitas mencurigakan.",
            "Audit Berkala: Kami melakukan audit keamanan berkala untuk memastikan kepatuhan terhadap kebijakan dan standar keamanan.",
          ],
        },
      ],
    },
    {
      title: "Hak Anda",
      content:
        "Anda memiliki hak berikut sehubungan dengan informasi pribadi Anda:",
      listTitles: [
        {
          title: "Enkripsi",
          list: [
            "Permintaan Salinan: Anda berhak meminta salinan informasi pribadi yang kami miliki tentang Anda.",
            "Penjelasan Penggunaan: Kami akan memberikan penjelasan tentang bagaimana kami menggunakan informasi Anda.",
          ],
        },
        {
          title: "Hak untuk Memperbarui atau Menghapus",
          list: [
            "Pembaharuan Data: Anda dapat meminta kami untuk memperbarui informasi pribadi yang tidak akurat atau usang.",
            "Penghapusan Data: Anda dapat meminta penghapusan informasi pribadi Anda, dengan tunduk pada kewajiban hukum atau kepentingan bisnis yang sah.",
          ],
        },
        {
          title: "Hak untuk Menolak",
          list: [
            "Penolakan Pemasaran: Anda dapat menolak penggunaan informasi pribadi Anda untuk tujuan pemasaran dengan mengikuti petunjuk berhenti berlangganan dalam komunikasi pemasaran kami.",
            "Pembatasan Pemrosesan: Anda dapat meminta pembatasan pemrosesan informasi pribadi Anda dalam keadaan tertentu.",
          ],
        },
      ],
    },
    {
      title: "Penyimpanan dan Retensi Data",
      content:
        "Kami menyimpan informasi pribadi Anda selama diperlukan untuk tujuan yang diuraikan dalam Kebijakan Privasi ini, kecuali jika diperlukan atau diizinkan oleh hukum untuk jangka waktu yang lebih lama.",
      listTitles: [
        {
          title: "Kriteria Retensi",
          list: [
            "Durasi Hubungan: Kami menyimpan informasi pribadi selama Anda memiliki hubungan aktif dengan kami.",
            "Kepatuhan Hukum: Kami menyimpan informasi sesuai dengan kewajiban hukum dan peraturan.",
            "Kepentingan Bisnis: Kami mempertimbangkan kebutuhan bisnis dan risiko keamanan dalam menentukan durasi penyimpanan data.",
          ],
        },
        {
          title: "Hak untuk Memperbarui atau Menghapus",
          list: [
            "Pembaharuan Data: Anda dapat meminta kami untuk memperbarui informasi pribadi yang tidak akurat atau usang.",
            "Penghapusan Data: Anda dapat meminta penghapusan informasi pribadi Anda, dengan tunduk pada kewajiban hukum atau kepentingan bisnis yang sah.",
          ],
        },
        {
          title: "Hak untuk Menolak",
          list: [
            "Penolakan Pemasaran: Anda dapat menolak penggunaan informasi pribadi Anda untuk tujuan pemasaran dengan mengikuti petunjuk berhenti berlangganan dalam komunikasi pemasaran kami.",
            "Pembatasan Pemrosesan: Anda dapat meminta pembatasan pemrosesan informasi pribadi Anda dalam keadaan tertentu.",
          ],
        },
      ],
    },
    {
      title: "Perubahan pada Kebijakan Privasi",
      content:
        "Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan perubahan dalam praktik kami atau untuk mematuhi peraturan hukum. Kami akan memberitahu Anda tentang perubahan tersebut melalui email atau pemberitahuan di situs web kami.",
      listTitles: [
        {
          title: "Pemberitahuan Perubahan",
          list: [
            "Email Pemberitahuan: Kami akan mengirimkan email pemberitahuan tentang perubahan besar pada Kebijakan Privasi ini.",
            "Pemberitahuan Situs Web: Kami akan memposting pemberitahuan di situs web kami untuk perubahan kebijakan yang signifikan.",
          ],
        },
        {
          title: "Kepatuhan Perubahan",
          list: [
            "Tanggal Efektif: Perubahan akan efektif setelah diposting di situs web kami dan Anda menggunakan layanan kami setelah perubahan tersebut.",
            "Penerimaan Perubahan: Dengan terus menggunakan layanan kami setelah perubahan, Anda menyetujui Kebijakan Privasi yang diperbarui.",
          ],
        },
      ],
    },
    {
      title: "Hubungi Kami",
      content:
        "Jika Anda memiliki pertanyaan, kekhawatiran, atau permintaan terkait Kebijakan Privasi ini, silakan hubungi kami di:",
      listTitles: [
        {
          title: "Email dan Telepon",
          list: [
            "Email: support@bagian.net",
            "Jl.Tropodo 1 Barat, Blok A-9, Sidoarjo, Indonesia, 61256",
            "+62085174295981",
          ],
        },
      ],
    },
  ];
  return (
    <>
      <div className={`${styles.pageContainer}`}>
        <div className={`${styles.policyContent}`}>
          <div className={`${styles.policyHeader}`}>
            <span className={`${styles.policyTitle} py-10 block`}>
              <h1>Kebijakan Privasi Bagian.net</h1>
            </span>
            <span>
              Bagian.net (&quot;kami&quot;, &quot;kita&quot;, atau
              &quot;perusahaan&quot;) menghargai privasi Anda dan berkomitmen
              untuk melindungi informasi pribadi yang Anda berikan kepada kami.
              Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan,
              menggunakan, dan melindungi informasi pribadi Anda ketika Anda
              menggunakan layanan pengembangan website kami.
            </span>
          </div>
          {policyData.map((item, index) => (
            <div key={index} className={`${styles.policySection}`}>
              <span className={`${styles.policyNumber}`}>
                {index + 1}.
                <span className={`${styles.policyTitle_item}`}>
                  <h1>{item.title}</h1>
                </span>
              </span>
              <span className={`${styles.policyContent_item}`}>
                <p>{item.content}</p>
              </span>
              {item.listTitles.map((listTitleItem, subIndex) => (
                <div key={subIndex}>
                  <span className={`${styles.policySubNumber}`}>
                    {index + 1}.{subIndex + 1}
                    <span className={`${styles.policyTitle_item}`}>
                      <h2>{listTitleItem.title}</h2>
                    </span>
                  </span>
                  <ul className={`${styles.policyList}`}>
                    {listTitleItem.list.map((listItem, listIndex) => (
                      <li
                        key={listIndex}
                        className={`${styles.policyListItem}`}
                      >
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
