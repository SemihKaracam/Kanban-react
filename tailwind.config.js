/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "pink": "#FFE3E2",
      "lightGray": "#CCCCCC",
      "white": "#FFFFFF",
      "planned": "#E9FDFE",
      "prMedium": "#FEF8E2",
      "corrective": "#E8EEFB",
      "prLow": "#E8E9FD",
      "open":"#D7385E",
      "onHold":"#54cace",
      "inProgress":"#7878F0",
      "completed":"#01B53A",
      "primary": "#7c69ef",
      "success": "#42ba96",
      "danger": "#df4759",
      "warning": "#ffc107",
      "info": "#467fd0",
    },
    extend: {},
  },
  plugins: [],
}

