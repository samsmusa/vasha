/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#ed8c78",

          secondary: "#95f4b8",

          accent: "#2b69ef",

          neutral: "#292239",

          "base-100": "#EBEEF4",

          info: "#6AB9E7",

          success: "#1BBB60",

          warning: "#CF9717",

          error: "#EC7F79",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
