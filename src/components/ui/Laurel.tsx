type LaurelProps = {
  flip?: boolean
  className?: string
}

/** スタッツ帯の数字を挟む月桂樹アイコン（モンドセレクション系・葉付き） */
export function Laurel({ flip = false, className = "" }: LaurelProps) {
  return (
    <svg
      viewBox="0 0 30 40"
      className={`${flip ? "-scale-x-100" : ""} ${className}`}
      fill="none"
      aria-hidden
    >
      {/* 主枝（外側に湾曲） */}
      <path
        d="M25 3C16 9 12 20 14 37"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* 葉（内側に向かって連なる） */}
      {[5, 10, 15, 20, 25, 30, 34].map((y, i) => {
        const x = 24 - (y - 3) * 0.32
        const len = 11 - i * 0.5
        return (
          <path
            key={y}
            d={`M${x} ${y} C${x - len * 0.5} ${y - 3} ${x - len} ${y + 1} ${x - len} ${y + 6} C${x - len * 0.45} ${y + 5} ${x - 1.5} ${y + 4} ${x} ${y}Z`}
            fill="currentColor"
            opacity="0.92"
          />
        )
      })}
    </svg>
  )
}
