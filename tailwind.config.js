/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primaryMarineBlue: "hsl(213, 96%, 18%)",
        primaryPurplishBlue: "hsl(243, 100%, 62%)",
        primaryPastelBlue: "hsl(228, 100%, 84%)",
        primaryLightBlue: "hsl(206, 94%, 87%)",
        primaryStrawberryRed: "hsl(354, 84%, 57%)",
        coolGray: "hsl(231, 11%, 63%)",
        lightGray: "hsl(229, 24%, 87%)",
        magnolia: "hsl(217, 100%, 97%)",
        Alabaster: "hsl(231, 100%, 99%)",
        White: "hsl(0, 0%, 100%)",
      }
    },
  },
  plugins: [],
}

