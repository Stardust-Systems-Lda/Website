import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        renovar: {
          navy: "#002262",
          deep: "#00184A",
          blue: "#0571D0",
          electric: "#0F8DE1",
          cyan: "#0EBDE4",
          slate: "#5B6D8C",
          ink: "#14202B",
          mist: "#EAF4F7",
        },
      },
      fontFamily: { sans: ["Montserrat", "Arial", "sans-serif"] },
    },
  },
  plugins: [],
} satisfies Config;
