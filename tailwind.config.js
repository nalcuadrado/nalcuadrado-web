/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          base: "#050505",
          surface: "#121212",
          card: "#1A1A1A"
        },
        brand: {
          darkPurple: "#3C183C",
          softLavender: "#D2CBFE",
          freshLime: "#CDFC8A",
          forestGreen: "#022E21"
        },
        lime: {
          brand: "#CDFC8A",
          dark: "#022E21"
        },
        purple: {
          brand: "#3C183C",
          light: "#D2CBFE",
          dark: "#200c20"
        }
      },
      fontFamily: {
        display: ['Auria', 'Abril Fatface', 'Syne', 'sans-serif'],
        sans: ['Vole', 'Roboto Serif', 'serif']
      }
    },
  },
  plugins: [],
}
