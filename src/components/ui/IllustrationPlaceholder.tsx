import { ImageIcon } from "lucide-react"

type IllustrationPlaceholderProps = {
  label?: string
  ratio?: string
  rounded?: string
  className?: string
  tone?: "light" | "dark"
}

/**
 * 漫画調イラスト等の差し替え前提プレースホルダー。
 * 実素材が用意でき次第、<img> へ置き換える。
 */
export function IllustrationPlaceholder({
  label = "イラスト差し替え予定",
  ratio = "aspect-[4/3]",
  rounded = "rounded-lg",
  className = "",
  tone = "light",
}: IllustrationPlaceholderProps) {
  const toneClasses =
    tone === "dark"
      ? "border-white/20 bg-white/5 text-white/60"
      : "border-navy/15 bg-cream text-ink-muted"

  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 border border-dashed ${toneClasses} ${ratio} ${rounded} ${className}`}
    >
      <ImageIcon className="h-8 w-8" strokeWidth={1.5} />
      <span className="px-4 text-center text-xs font-normal">{label}</span>
    </div>
  )
}
