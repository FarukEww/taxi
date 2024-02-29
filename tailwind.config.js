/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
	"./node_modules/flowbite/**/*.js"
  ],
  theme: {
    screens: {
      xs: "500px",
      sm: "600px",
      md: "768px",
      lg: "993px",
      xl: "1025px",
      "2xl": "1275px",
      //'3xl': '1440px', //removed due to design issue with laptop screen
      "4xl": "1540px",
      "5xl": "1790px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      colors: {
        Blue: "#283347",
        Gray: "#28334799",
        "light-gray": "#EBEBEB",
      },
      fontFamily: {
        lufgabold: ["lufgabold"],
        lufgaregular: ["lufgaregular"],
        lufgamedium: ["lufgamedium"],
        lufgalight: ["lufgalight"],
        lufgabolditalic: ["lufgabold_italic"],
        lufgamediumitalic: ["lufgamedium_italic"],
        cyberfall: ["cyberfall", "sans-serif"],
        plus: ["Playfair Display", "serif"],
        dm: ["DM Sans", "sans-serif"],
      },
      fontSize: {
        "font-28": "28px",
        "font-32": "32px",
        "font-40": "40px",
      },
      backgroundImage: {
        "shaded-bg": 'url("../src/assets/images/track-shade.png")',
        "silver-btn-bg": 'url("../src/assets/images/silver-btn-bg.png")',
        wheel: 'url("../src/assets/images/car-wheel.png")',
        "Socialpath-left": "url('../src/assets/images/socialpath-left.svg')",
        "Socialpath-right": "url('../src/assets/images/socialpath-right.svg')",
        "Backsilver-button": "url(../src/assets/images/silver-button.png)",
        "upload-btn": "url(../src/assets/images/silver-btn.png)",
        "shaded-bg-left": "url(../src/assets/images/track-left-bg.png)",
        "circle-tick": "url(../src/assets/images/tick-circle.svg)",
        "circle-tick-checked":
          "url(../src/assets/images/tick-circle-checked.svg)",
        tiles: "url(../src/assets/images/tile-gradient.svg)",
        "header-left-sm": "url(../src/assets/images/header-left-sm.png)",
        "header-left-lg": "url(../src/assets/images/header-left-lg.png)",
        "header-right-sm": "url(../src/assets/images/header-right-sm.png)",
        "header-right-lg": "url(../src/assets/images/header-right-lg.png)",
        "dac-search-border": "url(../src/assets/images/DAC-search-border.png)",
        "banner-side-border":
          "linear-gradient(331deg, #283347 0%, #FFFFFF00 35%)",
        "swiper-decor": "linear-gradient(90deg, #283347 0%, #FFFFFF00 100%)",
        "faded-t-border": "url(../src/assets/images/gradient-border.png)",
        "qr-border": "url(../src/assets/images/qr-border.svg)",

        "signin-banner": 'url("../src/assets/images/sign-in-banner.svg")',
        "about-page-border":
          'url("../src/assets/images/about-page-left-border.svg")',
        "about-lb-border": 'url("../src/assets/images/about-lb-border.svg")',
        "rounded-text": 'url("../src/assets/images/DAC-round-text.png")',
        "DAC-text": 'url("../src/assets/images/DAC-footer-text.svg")',
        "currency-symbol": 'url("../src/assets/images/new-bg.png")',
        "add-btn-border": 'url("../src/assets/images/add-car-button.png")',
        "silver-border-larger":
          'url("../src/assets/images/silver-border-large.png")',
        "variant-border": 'url("../src/assets/images/variant-border.svg")',
        "search-panel":
          'url("../src/assets/images/Search_metallic_searchbar.png")',
        "tick-white": 'url("../src/assets/images/tick-circle-white.svg")',
        "popover-curve": 'url("../src/assets/images/pop-low-cut.png")',
        "popover-curve-high": 'url("../src/assets/images/pop-high-cut.png")',
        "metalic-circle": 'url("../src/assets/images/Metalic-Circle.png")',
      },
      keyframes: {
        rotation: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        // for wheel loader animation on submit of form, add class "before:animate-wheel-rotate"
        "wheel-rotate": "rotation 1s linear infinite",
        "title-translate": "marquee 7s linear infinite running",
      },
      maxWidth: {
        "10xl": "1552px",
        "20xl": "2000px",
      },
      padding: {},
    },
  },
  plugins: ["prettier-plugin-tailwindcss", require("flowbite/plugin")],
};
