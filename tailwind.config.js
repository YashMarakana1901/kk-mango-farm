/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        mango: {
          DEFAULT: '#F5A623',
          deep: '#E8891A',
          light: '#FFF3DC',
        },
        farm: {
          green: '#2D5016',
          mid: '#4A7C23',
          light: '#E8F5D0',
        },
        cream: '#FFFDF7',
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.9s ease both',
        'pulse-wa': 'pulseWa 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(-5deg)' },
          '50%': { transform: 'translateY(-16px) rotate(5deg)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseWa: {
          '0%, 100%': { boxShadow: '0 4px 20px rgba(37,211,102,0.5)' },
          '50%': { boxShadow: '0 4px 40px rgba(37,211,102,0.8)' },
        },
      },
    },
  },
  plugins: [],
}
