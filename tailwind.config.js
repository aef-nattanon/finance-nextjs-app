/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      screens:{
        'xs': '490px',
      },
      colors: {
        'label-base': '#2B2B2B',
        'label-mid': '#4B4B4B',
        'label-low': '#8B8B8B',
        'success-base': '#10B981',
        'success-low': '#E3FFF4',
        'danger-base': '#FF5F5F',
        'danger-low': '#FFEDED',
        'button': '#FAFAFA',
      },
    },
  },
  plugins: [],
}
