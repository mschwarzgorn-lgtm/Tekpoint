import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a1a2e',
          light: '#16213e',
          deep: '#0f3460',
          dark: '#111122',
        },
        orange: {
          DEFAULT: '#e8581c',
          hover: '#d04a12',
          light: '#fff3ee',
          soft: '#ff8c5a',
        },
        gray: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          400: '#ced4da',
          600: '#868e96',
          800: '#343a40',
        },
      },
      maxWidth: {
        'site': '1200px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
