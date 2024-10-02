import type {Config} from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "industries-custom-gradient":
          "linear-gradient(270deg, rgba(34, 49, 104, 0.49) 0%, rgba(34, 49, 104, 0.49) 21%, rgba(34, 49, 104, 0.7819502801120448) 68%, rgba(34, 49, 104, 1) 100%)",
      },
      fontFamily: {
        ppmontreal: ["var(--font-ppmontreal)"],
        platypi: ["var(--font-platypi)"],
        raleway: ["var(--font-raleway)"],
        inter: ["Inter", "sans-serif"],
        nohemi: ["Nohemi"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        whiteF4: "#F4F4F4",
        custom: {
          black: "#010101",
          red: "#EA1919",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          "06": "#008B06",
          D9: "#D8F7D9",
          "00": "#008000",
          "60": "#27AE60",
          "4A": "#23A94A",
          "6B": "#223168FF",
          "50": "#e6f7ee",
          "100": "#b0e5ca",
          "200": "#8ad9b0",
          "300": "#54c78c",
          "400": "#33bd75",
          "500": "#00ac53",
          "600": "#009d4c",
          "700": "#007a3b",
          "800": "#005f2e",
          "900": "#004823",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          red1B: "#EA001B",
          redC5: "#F9BFC5",
          gray: {
            "40": "#404040",
            "80": "#808080",
            "7F": "#7F7F7F",
          },
          orange00: "#FFA200",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "scrolling-slide": {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scrolling-slide": "scrolling-slide 30s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
