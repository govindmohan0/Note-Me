/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transform: ['hover', 'focus'], // Ensure transforms work
      rotate: {
          'y-180': 'rotateY(180deg)', // Custom 3D rotation
      },
  },
},

  plugins: [],
}

