import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'work-sans': ['var(--font-work-sans)', 'Work Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          0: "#000000",
          10: "#014539",
          20: "#025B4A",
          30: "#027560",
          40: "#03967B",
          50: "#0095FF",
          60: "#35B79F",
          70: "#56C3AF",
          80: "#8BD6C8",
          90: "#B1E3DA",
          95: "#E6F6F3",
          100: "#FFFFFF",
        },
        secondary: {
          0: "#000000",
          10: "#1D2542",
          20: "#263056",
          30: "#313E6F",
          40: "#3F4F8F",
          50: "#45579D",
          60: "#6A79B1",
          70: "#828EBD",
          80: "#A9B2D2",
          90: "#C5CBE1",
          95: "#ECEEF5",
          100: "#FFFFFF",
        },
        text: { secondary: '#999999' },
        
        tour: {
          // shadcn/ui style primary for tour components
          primary: {
            DEFAULT: "#171717",
            foreground: "#ffffff",
          },
          // shadcn/ui style secondary for tour components
          secondary: {
            DEFAULT: "#f5f5f5",
            foreground: "#171717",
          },
          // Base colors for tour components
          border: "#e5e7eb",
          input: "#e5e7eb", 
          ring: "#171717",
          background: "#ffffff",
          foreground: "hsl(var(--foreground))",
          
          // Tour component color variants
          destructive: {
            DEFAULT: "#ef4444",
            foreground: "#fefefe",
          },
          muted: {
            DEFAULT: "#f5f5f5",
            foreground: "#737373",
          },
          accent: {
            DEFAULT: "#f5f5f5",
            foreground: "#171717",
          },
          popover: {
            DEFAULT: "#ffffff",
            foreground: "#171717",
          },
          card: {
            DEFAULT: "#ffffff",
            foreground: "#171717",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "bg-gradient": "",
      },
      animation: {
        blink: 'blink 1s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
        "14": "repeat(14, minmax(0, 1fr))",
        "15": "repeat(15, minmax(0, 1fr))",
        "16": "repeat(16, minmax(0, 1fr))",
        "17": "repeat(17, minmax(0, 1fr))",
        "18": "repeat(18, minmax(0, 1fr))",
        "19": "repeat(19, minmax(0, 1fr))",
        "20": "repeat(20, minmax(0, 1fr))",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-gradient": (angle) => ({
            "background-image": `linear-gradient(${angle}deg, var(--tw-gradient-stops))`,
          }),
        },
        {
          // values from config and defaults you wish to use most
          values: theme("bgGradientDeg", {}), // name of config key. Must be unique,
        }
      );
    }),
  ],
} satisfies Config;
