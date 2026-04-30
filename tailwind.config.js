/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*.{ts,tsx,jsx,js}", "./examples/**/*.{html,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "var(--color-brand-orange)",
          red: "var(--color-brand-red)",
          pink: "var(--color-brand-pink)",
        },
        gray: {
          50: "var(--color-gray-50)",
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
          400: "var(--color-gray-400)",
          600: "var(--color-gray-600)",
          900: "var(--color-gray-900)",
        },
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",
        info: "var(--color-info)",
      },
      backgroundImage: {
        "gradient-brand-3": "var(--gradient-brand-3)",
        "gradient-brand-2": "var(--gradient-brand-2)",
      },
      fontFamily: {
        primary: "var(--font-primary)",
        fallback: "var(--font-fallback)",
        system: "var(--font-primary)",
      },
      borderRadius: {
        pill: "var(--radius-pill)",
      },
    },
  },
  plugins: [],
};
