import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ivory': '#FFFFF0',
        'ivory-50': '#FFFAF5',
        'ivory-100': '#FFF5EB',
        'ivory-200': '#FFEBE0',
        'cream': '#FFFDD0',
        'cream-50': '#FFFCF5',
        'cream-100': '#FFFAEB',
        'sand': '#F5F5DC',
        'sand-50': '#FAFAF5',
        'sand-100': '#F5F5EB',
        'nude': '#F3E5DC',
        'nude-50': '#F9F2EE',
        'nude-100': '#F3E5DC',
        'nude-200': '#E7D0C3',
        'champagne': '#F7E7CE',
        'champagne-50': '#FCF5EB',
        'champagne-100': '#F7E7CE',
        'rose-dust': '#E8D0D4',
        'rose-dust-50': '#F4EBED',
        'rose-dust-100': '#E8D0D4',
        'gray-warm': '#9C8E88',
        'gray-warm-50': '#F8F6F5',
        'gray-warm-100': '#EBE7E5',
        'gray-warm-200': '#D7CFCA',
        'gray-warm-300': '#C3B8B1',
        'gray-warm-400': '#A89890',
        'gray-warm-500': '#9C8E88',
        'gray-warm-600': '#8B7A73',
        'gray-warm-700': '#7A665E',
        'gray-warm-800': '#695249',
      },
      fontFamily: {
        'sans': ['var(--font-playfair)', 'system-ui', 'sans-serif'],
        'body': ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xxs': '0.625rem',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '240': '60rem',
      },
    },
  },
  plugins: [],
}

export default config
