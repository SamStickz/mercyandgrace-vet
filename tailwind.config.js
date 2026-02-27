/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        sage: {
          light: '#C8D5C0',
          DEFAULT: '#7A9E7E',
          dark: '#4A6E4E',
          deep: '#2D4A30',
        },
        stone: {
          light: '#D4D2CC',
          DEFAULT: '#8A8880',
        },
        ink: {
          soft: '#3A3A36',
          DEFAULT: '#1E1E1A',
        },
        cream: '#EDE9E0',
        offwhite: '#F3F3EF',
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        'fade-up': 'fadeUp 0.8s ease both',
        'fade-down': 'fadeDown 0.8s ease both',
        'slide-right': 'slideRight 1s ease both',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          from: { opacity: '0', transform: 'translateY(-16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
