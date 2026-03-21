/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdf9ee',
          100: '#f8edcc',
          200: '#f0d895',
          300: '#e6be5a',
          400: '#dda52e',
          500: '#c8891a',
          600: '#a86c14',
          700: '#865213',
          800: '#6e4116',
          900: '#5c3617',
        },
        forest: {
          50: '#f0f7f0',
          100: '#dceedc',
          200: '#bcdcbc',
          300: '#8ec28e',
          400: '#5ea05e',
          500: '#3c7e3c',
          600: '#2d632d',
          700: '#254f25',
          800: '#1f3f1f',
          900: '#1a351a',
        },
        cream: '#faf8f2',
        charcoal: '#1a1a1a',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(26,26,26,0.7) 0%, rgba(26,26,26,0.4) 50%, rgba(26,26,26,0.6) 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
