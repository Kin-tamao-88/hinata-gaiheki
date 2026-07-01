import { useState } from 'react'
import { Mail, Phone, ChevronRight, Menu, X } from 'lucide-react'
import heroPhoto from '../../assets/hero/hero-worker.png'

function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 20L20 6L36 20"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 17V34H31V17"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="20"
        y="28"
        textAnchor="middle"
        fontSize="10"
        fontWeight="800"
        fill="currentColor"
        fontFamily="sans-serif"
      >
        LR
      </text>
    </svg>
  )
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2L14 9L21 11L14 13L12 20L10 13L3 11L10 9L12 2Z"
        fill="currentColor"
      />
    </svg>
  )
}

const stats = [
  { label: '地域密着', value: '15', unit: '年', caption: '地域で積み重ねた実績' },
  { label: '施工実績', value: '1,200', unit: '件以上', caption: '（累計）' },
  { label: '追加費用', value: '0', unit: '円', caption: '明確なお見積り' },
  { label: 'アフターケア', value: '3', unit: '年間', caption: '施工後も安心サポート' },
]

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-3 md:px-10 md:py-4">
          {/* ロゴ */}
          <div className="flex items-center gap-2 md:gap-3">
            <LogoMark className="h-8 w-8 md:h-10 md:w-10 text-navy" />
            <div className="leading-tight">
              <p className="text-[17px] md:text-[22px] font-extrabold text-navy tracking-tight">
                レストレーション
              </p>
              <p className="hidden md:block text-[12px] text-ink-muted">住宅総合メンテナンス</p>
            </div>
          </div>

          {/* PC：電話 + CTA */}
          <div className="hidden md:flex items-center gap-8">
            <div className="text-right">
              <p className="text-[13px] text-ink-muted mb-1">お電話でのお問い合わせはこちら</p>
              <a
                href="tel:0901234567"
                className="flex items-center justify-end gap-2 text-[22px] font-extrabold text-navy leading-none"
              >
                <Phone className="h-5 w-5 flex-shrink-0" strokeWidth={2} />
                090-1234-5678
              </a>
              <p className="text-[12px] text-ink-muted mt-1">受付時間 9:00〜17:30（日曜定休）</p>
            </div>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-brandorange text-white font-bold text-[15px] px-6 py-4 rounded hover:bg-brandorange-dark transition-colors"
            >
              <Mail className="h-4 w-4 flex-shrink-0" strokeWidth={2} />
              無料お見積りはこちら
              <ChevronRight className="h-4 w-4 flex-shrink-0" strokeWidth={2.5} />
            </a>
          </div>

          {/* SP：電話ボタン + ハンバーガー */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:0901234567"
              className="flex items-center justify-center h-10 w-10 rounded border border-navy text-navy flex-shrink-0"
              aria-label="電話をかける"
            >
              <Phone className="h-5 w-5" strokeWidth={2} />
            </a>
            <button
              className="flex items-center justify-center h-10 w-10 text-navy flex-shrink-0"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="メニュー"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* SP：展開メニュー */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-brandorange text-white font-bold py-3.5 px-4 w-full rounded"
              onClick={() => setMenuOpen(false)}
            >
              <Mail className="h-4 w-4" strokeWidth={2} />
              無料お見積りはこちら
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
          </div>
        )}
      </header>

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-cream md:h-[600px]">
        {/* 写真：SP＝全画面背景化／PC＝右側42%出血 */}
        <div className="absolute inset-0 md:inset-auto md:right-0 md:top-0 md:w-[42%] md:h-full">
          <img
            src={heroPhoto}
            alt="外壁塗装の施工の様子"
            className="w-full h-full object-cover object-[75%_center] md:object-center block"
          />
          {/* SP：可読性確保の最小限グラデーション */}
          <div className="absolute inset-0 bg-gradient-to-b from-cream/95 via-cream/55 to-cream/10 md:hidden" />
          {/* PC：写真左端の縫い目を馴染ませる最小限フェード */}
          <div
            className="absolute inset-0 hidden md:block pointer-events-none"
            style={{ background: 'linear-gradient(to right, #F5F2EC 0%, transparent 12%)' }}
          />
        </div>

        {/* テキストエリア */}
        <div className="relative z-10 px-6 pt-8 pb-10 md:px-[80px] md:py-0 md:h-full md:flex md:items-center md:w-[62%]">
          <div>
            <div className="inline-block bg-navy px-4 py-2 mb-5 md:mb-6">
              <p className="text-white text-[12px] md:text-[13px] font-bold tracking-wide whitespace-nowrap">
                山梨県密着｜外壁塗装・住宅メンテナンス
              </p>
            </div>

            <h1 className="text-[32px] md:text-[46px] font-black leading-tight tracking-tight text-navy mb-1">
              山梨の住まいを、
            </h1>
            <div className="w-fit mb-5 md:mb-6">
              <h1 className="text-[32px] md:text-[46px] font-black leading-tight tracking-tight text-brandorange">
                守り続けて15年。
              </h1>
              <div className="h-[4px] bg-brandorange w-full mt-1" />
            </div>

            <p className="text-[15px] md:text-[17px] text-[#374151] leading-relaxed font-medium">
              外壁塗装から住宅メンテナンスまで、
              <br />
              確かな技術で対応いたします。
            </p>
          </div>
        </div>
      </section>

      {/* ===== 実績帯 ===== */}
      <section className="bg-cream py-10 md:py-14">
        <div className="max-w-content mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-8 md:mb-10">
            <SparkleIcon className="h-4 w-4 text-chip -scale-x-100" />
            <h2 className="text-[20px] md:text-[26px] font-black text-navy tracking-tight">
              地域に選ばれる理由
            </h2>
            <SparkleIcon className="h-4 w-4 text-chip" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-x-0 md:divide-x md:divide-gray-300">
            {stats.map((s) => (
              <div key={s.label} className="text-center px-2 md:px-6">
                <span className="inline-block bg-chip text-navy text-[12px] md:text-[13px] font-bold px-3 py-1 mb-3">
                  {s.label}
                </span>
                <p className="leading-none mb-2">
                  <span className="text-[36px] md:text-[48px] font-black text-accentred tracking-tight">
                    {s.value}
                  </span>
                  <span className="text-[15px] md:text-[18px] font-bold text-navy ml-1">{s.unit}</span>
                </p>
                <div className="h-[3px] w-10 bg-brandorange mx-auto mb-2" />
                <p className="text-[12px] md:text-[13px] text-ink-muted">{s.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
