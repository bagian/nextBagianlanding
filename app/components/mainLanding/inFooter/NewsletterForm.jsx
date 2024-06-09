"use client";

import { useState } from "react";

function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (data.success) {
      alert("Terima kasih telah berlangganan!");
      setEmail("");
    } else {
      alert("Ada masalah, silakan coba lagi.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Masukkan email Anda"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Berlangganan</button>
    </form>
  );
}

export default NewsletterForm;
