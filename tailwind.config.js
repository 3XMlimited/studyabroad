/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme: {
      screens: {
        singleXL: { max: "920px" },
        // => @media (max-width: 920px) { ... }

        tabletLG: { max: "720px" },
        // => @media (max-width: 720px) { ... }

        tabletMD: { max: "520px" },
        // => @media (max-width: 520px) { ... }

        mobileSM: { max: "350px" },
        // => @media (max-width: 350px) { ... }
      },
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
