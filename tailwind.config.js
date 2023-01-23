/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins"],
        secondary: ["Roboto"],
      },
      colors: {
        primary: "#5669FF",
        bgPrimary: "#F7F8FA",
        bgElement: "#DDE1FF",
        bgDanger: "#FFDDDD",
        textPrimary: "#343434",
        textSecondary: "#7B7B7B",
        textHeader: "#7D8FB3",
        textDanger: "#FF3939",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide"),
  ],
};
