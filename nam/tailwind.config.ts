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
        'off-white' : "FAF9F6",
      },
    },
  },
  plugins: [],
} satisfies Config;
