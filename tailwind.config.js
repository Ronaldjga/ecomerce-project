module.exports = {
  content: ["./src/views/index.html"],
  theme: {
    extend: {
      colors: {
        amareloPaleta: {
          Primary: '#F2C744',
          500: '#D99E32',
          700: '#8C5511',
          900: '#733B0A'
        },
        laranjaPaleta: {
          Primary: '#F29F05',
          700: '#B37504',
          900: '#734B02'
        },
        azulPaleta: {
          Primary: '#4EBFB4',
          600: '#37A6A6',
          700: '#0D6973',
          800: '#2C3F59'
        },
        brancoPaleta: {
          Primary: '#E8F2D8',
          100: '#EDFCFF'
        },
        pretoPaleta: {
          Primary: '#0E1C2A'
        }
      }
    },
    screens: {
      'sm': '300px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    }
  },
  plugins: [],
}
