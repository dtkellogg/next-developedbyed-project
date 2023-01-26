/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // textColor: {  // This wasn't part of the tutorial... just trying to make text-white work
    //   primary: "#FFF",
    //   secondary: "#FFF",
    //   white: "#FFF",
    //   black: "#000",
    // },
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat'],
      },
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit,minmax(15rem,1fr))'  // this is a custom class; we can call it with className="grid-cols-fluid"
      }
    },
  },
  plugins: [],
}
