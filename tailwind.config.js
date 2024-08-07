/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "300px",
        xs: "370px",
      },
      boxShadow: {
        "3xl": "0 10px 40px -15px rgba(255, 255, 255, 0.3)",
        smallWhite: "0 10px 20px -15px rgba(255, 255, 255, 0.3)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
