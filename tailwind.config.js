export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aiBlack: "#020617",
        aiNavy: "#050816",
        aiCyan: "#22d3ee",
        aiBlue: "#3b82f6",
        aiPurple: "#8b5cf6",
      },
      boxShadow: {
        glowCyan: "0 0 40px rgba(34, 211, 238, 0.25)",
        glowPurple: "0 0 40px rgba(139, 92, 246, 0.22)",
      },
      backgroundImage: {
        "ai-grid":
          "linear-gradient(rgba(34,211,238,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.08) 1px, transparent 1px)",
        "ai-radial":
          "radial-gradient(circle at 20% 20%, rgba(34,211,238,0.14), transparent 32%), radial-gradient(circle at 80% 10%, rgba(168,85,247,0.14), transparent 30%), radial-gradient(circle at 50% 90%, rgba(59,130,246,0.10), transparent 35%)",
      },
      backgroundSize: {
        "ai-grid": "44px 44px",
      },
    },
  },
  plugins: [],
};