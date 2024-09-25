/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/assets/bg-new.jpg')",
        'logo': "url('/assets/org_logo.png')"
      },
      colors: {
        'buttonGreen': {
          50: '#28887A',
        },
        'primaryColor': '#FFF3E3',
        'primaryButton': '#B88E2F',
        'hoverColor': '#D8A25E',
        'focusColor': '#6C4E31'
      },
      padding: {
        '26px': '26px',
        '100px': '100px'
      },
      width: {
        '643px': '643px'
      },
      height: {
        '400px': '400px',
        '480px': '480px'
      }
    },
  },
  plugins: [],
}

