import { Building2, Phone } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-navy/10 bg-white">
      <div className="mx-auto flex py-2 max-w-[1600px] items-center justify-between gap-6 px-6 lg:px-10">
        {/* ロゴ */}
        <a href="#hero" className="flex items-center gap-3.5">
          <span className="flex h-14 w-14 items-center justify-center rounded-md bg-navy text-gold">
            <Building2 className="h-8 w-8" strokeWidth={1.75} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-2xl font-extrabold tracking-tight text-navy">
              法人売却センター
            </span>
            <span className="text-xs text-ink-muted">
              法人の売却・譲渡を専門サポート
            </span>
          </span>
        </a>

        {/* 右側：電話 + CTA */}
        <div className="hidden flex-col items-end gap-1.5 lg:flex">
          <span className="text-xs text-ink-muted">
            お急ぎの方はお電話でご相談ください
          </span>
          <div className="flex items-center gap-4">
            <a
              href="tel:03-0000-0000"
              className="flex items-center gap-2 text-3xl font-black text-navy"
            >
              <Phone className="h-6 w-6 text-gold" strokeWidth={2.5} />
              03-XXXX-XXXX
            </a>
            <a
              href="#contact"
              className="flex items-center rounded-md bg-cta px-6 py-3.5 text-base font-extrabold text-white hover:bg-cta-hover"
            >
              無料で査定してみる
            </a>
          </div>
          <div className="flex w-full items-center justify-between text-[11px] text-ink-muted">
            <span>受付時間 9:00–18:00（土日祝を除く）</span>
            <span className="font-extrabold text-gold">24時間受付中</span>
          </div>
        </div>
      </div>
    </header>
  )
}
