import type { ReactNode } from "react"

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: "center" | "left"
  tone?: "dark" | "light"
}

/**
 * セクション見出しの統一コンポーネント。
 * eyebrow（小見出し）+ 見出し + 補足、の 1 メッセージ構成。
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
}: SectionHeadingProps) {
  const alignClasses =
    align === "center" ? "items-center text-center" : "items-start text-left"
  const titleColor = tone === "dark" ? "text-navy" : "text-white"
  const descColor = tone === "dark" ? "text-ink-light" : "text-white/70"

  return (
    <div className={`flex flex-col gap-4 ${alignClasses}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-sm font-extrabold tracking-wider text-gold">
          <span className="h-px w-6 bg-gold" aria-hidden />
          {eyebrow}
          <span className="h-px w-6 bg-gold" aria-hidden />
        </span>
      )}
      <h2
        className={`text-3xl font-extrabold leading-tight tracking-tight md:text-4xl ${titleColor}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl text-base leading-relaxed ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  )
}
