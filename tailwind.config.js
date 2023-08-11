/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DMElements: "hsl(var(--DMElements) / <alpha-value>)",
        DMBackground: "hsl(var(--DMBackground) / <alpha-value>)",
        LMText: "hsl(var(--LMText) / <alpha-value>)",
        LMInput: "hsl(var(--LMInput) / <alpha-value>)",
        LMBackground: "hsl(var(--LMBackground) / <alpha-value>)",
        Elements: "hsl(var(--Elements) / <alpha-value>)",
      },
      fontFamily: { body: ["Nunito Sans"] },
      animation: {
        pageLoad: "pageLoad 500ms linear",
      },
      keyframes: {
        pageLoad: {
          "0%": {
            filter: "opacity(0%)",
          },
          "100%": {
            filter: "opacity(100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
