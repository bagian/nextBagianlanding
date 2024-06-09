export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    // Tambahkan logika untuk menyimpan email ke database atau layanan pihak ketiga
    console.log("Email yang didaftarkan:", email);

    // Contoh respons sederhana
    res.status(200).json({ success: true });
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

//TWILLO RECOVERY CODE
//9KY945PZBW6YSKFQ32ALJ6CL
