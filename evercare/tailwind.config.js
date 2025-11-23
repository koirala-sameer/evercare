/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      /* -------------------------------------------------
         EVERCARE BRAND TYPOGRAPHY — GOOGLE STYLE
      -------------------------------------------------- */
      fontFamily: {
        evercare: ["Google Sans Text", "Inter", "Roboto", "sans-serif"],
      },

      /* -------------------------------------------------
         BRAND COLORS — GOOGLE + EVERCARE SYSTEM
      -------------------------------------------------- */
      colors: {
        google: {
          blue: "#4285F4",
          red: "#EA4335",
          yellow: "#FBBC05",
          green: "#34A853",
          black: "#202124",
          gray: "#5F6368",
        },

        evercare: {
          teal: "#61BFC0",      // Care color
          black: "#202124",      // Wordmark matte black
          gray: "#5F6368",       // Tagline / labels
          amberLight: "#FACC15", // Arc glow
          amberDeep: "#D97706",  // Arc deep glow
        },
      },

      /* -------------------------------------------------
         RADIUS, SHADOWS, SPACING — GOOGLE TASTE
      -------------------------------------------------- */
      borderRadius: {
        lg: "14px",
        xl: "18px",
        "2xl": "24px",
      },

      boxShadow: {
        card: "0 6px 20px rgba(0,0,0,0.07)",
        soft: "0 2px 12px rgba(0,0,0,0.04)",
      },

      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },

  plugins: [],
};
