/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
      }
    },
    colors: {
      ...colors,
      primary: '#C29764',
      alternate: '#F7F0E8',
      secondary: '#1b1b1b',
      textPrimary: '#999',
      white: '#fff',
      backGray: '#f4f4f4',
      grayVar1: 'rgba(255, 255, 255, 0.1)',
      'link-alternate': '#619DE5',
      'severity-info': 'lightblue',
      'severity-error-low': 'green',
      'severity-error-high': 'red'
    },
    screens: {
      ...defaultTheme.screens,
      'xs': { max: '640px' },
      'md-w-sidebar': { max: '1124px' }
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('mobile-visible', '.mobile-visible &')
      addVariant('parent-hover', '.parent-hover:hover &')
    })
  ],
}
