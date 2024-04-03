import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "text-pop-up-top": "text-pop-up-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both"
      },
      keyframes: {
        "text-pop-up-top": {
          "0%": {
              transform: "translateY(0)",
              "transform-origin": "50% 50%",
              "text-shadow": "none"
          },
          to: {
              transform: "translateY(-50px)",
              "transform-origin": "50% 50%",
          }
        }
      }
    },
  },
  plugins: [],
};
export default config;
