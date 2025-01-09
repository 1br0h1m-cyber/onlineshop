module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        md: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        lg: '4px 4px 8px rgba(0, 0, 0, 0.5)',
      },
      screens: {
        xmd: '930px',
        xlg: '1150px'
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};