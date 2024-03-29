/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "hsl(179, 62%, 43%)",
        "bright-yellow": "hsl(71, 73%, 54%)",
        "light-gray": "hsl(204, 43%, 93%)",
        "grayish-blue": "hsl(218, 22%, 67%)",
      },
      fontFamily: {
        primaryFont: ["Karla", "sans-serif"],
      },
      fontSize: {
        heading: "clamp(1rem, 2vw, 3rem)",
      }
    },
  },
  plugins: [],
};
