import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "primary-main": "#ff5d22",
        "primary-light": "#ff7d4e",
        "primary-dark": "#cc4a1b",
        
        "text-main": "#111827",
        "text-light": "#6b7280",
        "text-dark": "#000000",
      },
      container: {
        center: true,
      },
      backgroundImage:{
       "card-gradient":"linear-gradient(3deg, #fcd34d 0%, #fffefc 100%) "
      },
      keyframes: {
        'fade-in-bottom': {
          '0%': { opacity: "0", transform: 'translateY(20px)' },
          '100%': { opacity: "1", transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-bottom': 'fade-in-bottom 0.5s ease-out',
      }
    },
  },
  plugins: [],
};
export default config;
