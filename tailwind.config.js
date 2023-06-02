/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xxxsm: "360px",
      xxsm: "380px",
      xsm: "600px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        button: "var(--color-bg-button)",
      },
      textColor: {
        primary: "var(--color-text-primary)",
        button: "var(--color-text-button)",
      },
      placeholderColor: {
        primary: "var(--color-placeholder-primary)",
      },
      borderColor: {
        primary: "var(--color-border-primary)",
      },
      animation: {
        animateOp: "animateOpacity 1s ease 1",
        animateOp2: "animateOpacity 2s ease",
        animateOp3: "animateOpacity 0.3s ease-in-out",
        panImage: "panImage 15s linear infinite",
      },
      keyframes: {
        animateOpacity: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        panImage: {
          "0%": { objectFit: "cover", objectPosition: "bottom" },
          "50%": { objectFit: "cover", objectPosition: "top" },
          "50.0001%": { objectFit: "cover", objectPosition: "top" },
          "100%": { objectFit: "cover", objectPosition: "bottom" },
        },
      },
    },
  },
  plugins: [],
};
