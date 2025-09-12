import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1c2d6b', // Deep blue from logo
          light: '#2a3d86',
          dark: '#121f4f',
          accent: '#34b3c4' // Teal-ish accent from logo text "TRADE"
        }
      }
    },
  },
  plugins: [typography],
};

export default config;
