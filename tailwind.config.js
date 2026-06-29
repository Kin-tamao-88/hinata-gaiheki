/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // オレンジ系パレット（メイン#e8550a / テキスト#1a1a1a / 背景#fff8f5 / アクセントrgba(232,85,10,0.08)）
      colors: {
        navy: {
          DEFAULT: "#e8550a",
          dark: "#c4440a",
          light: "#ff6b1a",
        },
        gold: {
          DEFAULT: "#e8550a",
          hero: "#ff6b1a",
          dark: "#c4440a",
        },
        cream: "#fff8f5",
        ink: {
          DEFAULT: "#1a1a1a",
          light: "#1a1a1a",
          muted: "#1a1a1a",
        },
        cta: {
          DEFAULT: "#e8550a",
          hover: "#c4440a",
        },
        slate: {
          card: "#e8550a",
          bg: "#fff8f5",
        },
        teal: {
          DEFAULT: "#e8550a",
        },
        mint: "#fff8f5",
        skyblue: "#fff8f5",
        accent: "rgba(232,85,10,0.08)",
      },
      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          "system-ui",
          '"Hiragino Kaku Gothic ProN"',
          '"Yu Gothic"',
          "Meiryo",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1120px",
      },
      // CLAUDE.md: box-shadow 禁止 → 全て none（境界は border 1px #e2e8f0 で代替）
      boxShadow: {
        card: "none",
        "card-hover": "none",
        cta: "none",
      },
    },
  },
  plugins: [],
}
