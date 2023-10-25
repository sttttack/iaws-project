module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": `url('/public/heading.png')`,
        gradient:
          "linear-gradient(180deg, #001 25.85%, rgba(0, 0, 0, 0.00) 56.24%)",
        topgradient: "linear-gradient(180deg, #FFF, transparent, #FFF)",
        dropdown: `linear-gradient(180deg, rgba(200, 91, 241, 0.20) 0%, rgba(0, 0, 0, 0.00) 66.97%)`,
        mission:
          "linear-gradient(0deg, rgba(217, 217, 217, 0.00) -6.96%, rgba(200, 91, 241, 0.20) 53.75%, rgba(255, 255, 255, 0.00) 103.16%)",
        hover: `linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)`,
      }),
    },
  },
  plugins: [],
};
