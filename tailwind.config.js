/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // レストレーション(hinata-gaiheki) ブランドカラー(モックアップより抽出)
      colors: {
        navy: {
          DEFAULT: "#102A4A",
          dark: "#0B1E38",
          light: "#1B3A61",
        },
        brandorange: {
          DEFAULT: "#FC5900",
          dark: "#D64B00",
          light: "#FF7A2E",
        },
        accentred: {
          DEFAULT: "#E92523",
        },
        chip: {
          DEFAULT: "#FCE283",
        },
        ink: {
          DEFAULT: "#1a1a1a",
          muted: "#666666",
        },
        cream: "#F5F2EC",
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
        handwritten: [
          '"Yuji Syuku"',
          '"Hiragino Mincho ProN"',
          '"Yu Mincho"',
          "serif",
        ],
      },
      maxWidth: {
        content: "1120px",
      },
      // Design Bible: box-shadow 原則禁止
      boxShadow: {
        card: "none",
        "card-hover": "none",
        cta: "none",
      },
    },
  },
  plugins: [],
}
