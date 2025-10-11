/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Simple theme colors
        background: "var(--bg-color)",
        foreground: "var(--text-color)",
        muted: "var(--text-muted)",
        border: "var(--border-color)",
      },
    },
  },
  plugins: [],
};
