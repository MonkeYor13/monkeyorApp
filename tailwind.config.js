/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./navigation/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orangeApp: "#F15A24FF",
        bg_primary: "#010101",
        bg_secundary: "#181A1B",
        title: "#FFFFFF",
        text: "#FFFFFF8E",
      },
    },
  },
  plugins: [],
};
