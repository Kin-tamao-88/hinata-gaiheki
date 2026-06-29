import { ChevronRight } from "lucide-react"

type CtaButtonProps = {
  label?: string
  href?: string
  size?: "md" | "lg"
  note?: string
  className?: string
}

/**
 * 全セクション共通の問い合わせ導線ボタン。
 * CV を最優先に、視認性の高いアンバー系で統一する。
 */
export function CtaButton({
  label = "無料査定はこちら",
  href = "#contact",
  size = "lg",
  note,
  className = "",
}: CtaButtonProps) {
  const sizeClasses =
    size === "lg"
      ? "px-10 py-5 text-lg"
      : "px-7 py-3.5 text-base"

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <a
        href={href}
        className={`group inline-flex items-center justify-center gap-2 rounded-lg bg-cta font-extrabold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-cta-hover hover: ${sizeClasses}`}
      >
        <span>{label}</span>
        <ChevronRight
          className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5"
          strokeWidth={2.5}
        />
      </a>
      {note && <p className="text-sm text-ink-muted">{note}</p>}
    </div>
  )
}
