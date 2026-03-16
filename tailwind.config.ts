import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B6F47',
        secondary: '#D4A574',
        accent: '#C85A17',
        surface: '#F5F1EB'
      },
      fontFamily: {
        heading: ['Crimson Pro', 'serif'],
        body: ['Source Sans 3', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
