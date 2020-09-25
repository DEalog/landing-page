module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./*.html"],
  theme: {
    extend: {
      fontSize: {
        "2xs": ".5rem",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
