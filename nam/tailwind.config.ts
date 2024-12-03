import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        'brand-blue' : '#071E3B',
        'brand-copper' : '#DEAD6B',
        'off-white' : "#FAF9F6",
        'card-grey' : "#808075",
        'card-bg' : "#FFFDD0",
      },
      animation: {
        slidy: 'slidy 1s ease-in-out infinite',
        flip: 'flip 10s ease-in-out infinite ',
      },
      keyframes: {
        slidy: {
          '0%, 100%': { transform: 'translateX(0)' }, // Start and end at the same position
          '50%': { transform: 'translateX(20px)' },  // Move forward at the halfway point
        },
        flip: {
          '0%, 100%': { transform: 'scaleX(1)' }, // Normal position
          '50%': { transform: 'scaleX(-1)' },    // Flipped horizontally
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
