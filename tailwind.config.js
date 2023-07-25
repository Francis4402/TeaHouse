/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: { 
      extend: {
        colors: {
          Headertext: {
            400: "#1C1C1C",
          },
          comontext: {
            400: "#777",
          }
        },
      },
    },
    
    daisyui: {
      themes: ["light", "dark", "cupcake"],
    },
  }