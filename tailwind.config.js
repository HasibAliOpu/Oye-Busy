/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#75e062",

          secondary: "#b78dd6",

          accent: "#f7628a",

          neutral: "#415859",

          "base-100": "#F9F9FB",

          info: "#37B4CD",

          success: "#16A255",

          warning: "#EBC21E",

          error: "#A90000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
