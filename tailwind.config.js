/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor : '#a0a0ee',
        bgColor : "#18181B",
        bgAlt : "#F3F4F6",
        primary: "#09090B",
        secondary: "#979DA7",
        delete: "#FF2929",
      },
    },
  },
  plugins: [],
};
