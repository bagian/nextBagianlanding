/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        works: "rgb(10, 13, 32)",
      },
      fontFamily: {
        LeMurmure: ["var(--font-LeMurmure)"],
        MangoThin: ["var(--font-MangoThin)"],
        SwitzerRegular: ["var(--font-SwitzerRegular)"],
        SwitzerLight: ["var(--font-SwitzerLight)"],
        ChillaxRegular: ["var(--font-ChillaxRegular)"],
      },
    },
  },
  plugins: [],
};
