/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        nab: {
          red: "#c80000",
          "red-bright": "#ed0000",
          "red-dark": "#a50000",
        },
        ink: {
          DEFAULT: "#1a1a1a",
          soft: "#4a4a4a",
        },
        line: "#e0ddd8",
        "bg-tint": "#f7f5f2",
      },
      fontFamily: {
        sans: [
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
      },
      borderRadius: {
        DEFAULT: "12px",
        lg: "20px",
      },
      boxShadow: {
        card: "0 2px 10px rgba(0, 0, 0, 0.08)",
        "card-lg": "0 8px 28px rgba(0, 0, 0, 0.12)",
      },
      maxWidth: {
        container: "1200px",
      },
      spacing: {
        header: "72px",
      },
    },
  },
  plugins: [],
};
