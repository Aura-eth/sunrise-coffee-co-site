import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B6F47',
        secondary: '#D4A574',
        accent: '#C85A17',
        surface: '#F3EFE7'
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        body: ['Source Sans 3', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
