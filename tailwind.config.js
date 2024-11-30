/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'iphone': '390px',
        'tablet': '834px',
        'desktop': '1440px',
      },
      colors: {
        'light': '#FFFFFF',
        'dark': '#1a1a1a',
        'text': '#667085',
        'violet': '#6941C6',
        'violet-background': '#F9F5FF',
        'indigo': '#3538CD',
        'indigo-background': '#EFF1FF',
        'pink': '#C11574',
        'pink-background': '#FDF2FA',
        'blue': '#026AA2',
        'blue-background': '#F0F9FF',
        'green': '#027A48',
        'green-background': '#ECFDF3',
        'gray': '#027A48',
        'gray-background': '#F8F9FC',
        'orange': '#C01048',
        'orange-background': '#FFF1F3',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      }
    },

  },
  plugins: [],
}