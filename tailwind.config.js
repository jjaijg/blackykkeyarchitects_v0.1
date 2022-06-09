const plugin = require("tailwindcss/plugin");

const customClasses = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserver-3d": {
      transformStyle: "preserver-3d",
    },
    ".perspective": {
      perspective: "1400px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
      },
    },
  },
  plugins: [customClasses],
};
