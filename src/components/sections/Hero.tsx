import { useState } from 'react'
import {
  Mail,
  Phone,
  ChevronRight,
  Menu,
  X,
  MapPin,
  Paintbrush,
  JapaneseYen,
  Home,
  CheckCircle2,
} from 'lucide-react'
import heroPhoto from '../../assets/hero/hero-worker-wide.png'

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

function BrushUnderline() {
  return (
    <div
      aria-hidden="true"
      className="brush-orange-long mix-blend-multiply w-full h-[8px] md:h-[10px] mt-1 pointer-events-none"
    />
  )
}

function BrushBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative inline-block mb-3 md:mb-4 bg-navy">
      <div
        aria-hidden="true"
        className="absolute inset-0 brush-navy mix-blend-multiply pointer-events-none"
      />
      <span className="relative z-10 block text-white text-[13px] md:text-[15px] font-bold tracking-wide whitespace-nowrap px-6 py-[9px]">
        {children}
      </span>
    </div>
  )
}

const stats = [
  { label: '地域密着', value: '15', unit: '年', caption: '地域で積み重ねた実績', Icon: MapPin },
  { label: '施工実績', value: '1,200', unit: '件以上', caption: '累計施工実績', Icon: Paintbrush },
  { label: '追加費用', value: '0', unit: '円', caption: '明確なお見積り', Icon: JapaneseYen },
  { label: 'アフターケア', value: '3', unit: '年間', caption: '施工後も安心サポート', Icon: Home },
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
      <section className="relative overflow-hidden bg-cream md:h-[580px]">
        {/* 背景画像：Hero全体に absolute で敷く */}
        <img
          src={heroPhoto}
          alt="外壁塗装の施工の様子"
          className="absolute inset-0 w-full h-full object-cover object-[center_28%] md:object-[center_30%] block"
        />
        {/* SP：テキスト可読性グラデーション（上→下） */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream/95 via-cream/88 to-cream/70 md:hidden" />
        {/* PC：左クリーム（不透明）→右透明への自然なフェード */}
        <div className="absolute inset-0 hidden md:block pointer-events-none bg-gradient-to-r from-cream from-[0%] via-cream/95 via-[40%] to-transparent to-[62%]" />
        {/* 塗装テクスチャ（brush-cream, 控えめ） */}
        <div
          aria-hidden="true"
          className="brush-cream-texture mix-blend-multiply pointer-events-none absolute inset-0 opacity-[0.07]"
        />

        {/* テキストエリア */}
        <div className="relative z-10 px-6 pt-6 pb-4 md:pl-36 md:py-0 md:h-full md:flex md:items-center">
          <div className="md:max-w-[560px]">
            <BrushBadge>山梨県密着｜外壁塗装・住宅メンテナンス</BrushBadge>

            <h1 className="text-[32px] md:text-[52px] font-black leading-tight tracking-tight text-navy mb-0">
              山梨の住まいを、
            </h1>
            <div className="w-fit mb-3 md:mb-4">
              <h1 className="text-[36px] md:text-[64px] font-black leading-tight tracking-tight text-brandorange">
                守り続けて15年。
              </h1>
              <BrushUnderline />
            </div>

            <p className="text-[15px] md:text-[17px] text-[#374151] leading-loose font-semibold">
              外壁塗装から住宅メンテナンスまで、
              <br />
              確かな技術で対応いたします。
            </p>

            {/* 安心ポイント */}
            <div className="mt-4 flex items-center">
              <div className="flex items-center gap-1 md:gap-1.5 pr-2 md:pr-4 border-r border-gray-300">
                <CheckCircle2
                  className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0 text-brandorange"
                  strokeWidth={1.5}
                />
                <span className="text-[12px] md:text-[14px] font-semibold text-navy whitespace-nowrap">
                  現地調査無料
                </span>
              </div>
              <div className="flex items-center gap-1 md:gap-1.5 px-2 md:px-4 border-r border-gray-300">
                <CheckCircle2
                  className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0 text-brandorange"
                  strokeWidth={1.5}
                />
                <span className="text-[12px] md:text-[14px] font-semibold text-navy whitespace-nowrap">
                  お見積り無料
                </span>
              </div>
              <div className="flex items-center gap-1 md:gap-1.5 pl-2 md:pl-4">
                <CheckCircle2
                  className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0 text-brandorange"
                  strokeWidth={1.5}
                />
                <span className="text-[12px] md:text-[14px] font-semibold text-navy whitespace-nowrap">
                  追加費用なし
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 実績帯 ===== */}
      <section className="bg-[#FAF9F5] pt-5 pb-8 md:pt-8 md:pb-12">
        <div className="max-w-content mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
            <SparkleIcon className="h-4 w-4 text-chip -scale-x-100" />
            <h2 className="text-[20px] md:text-[26px] font-black text-navy tracking-tight">
              地域に選ばれる理由
            </h2>
            <SparkleIcon className="h-4 w-4 text-chip" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 md:gap-x-0 md:divide-x md:divide-gray-300">
            {stats.map(({ label, value, unit, caption, Icon }) => (
              <div key={label} className="text-center px-2 md:px-6">
                {/* アイコン＋ラベル */}
                <div className="flex items-center justify-center gap-1.5 mb-2">
                  <Icon
                    className="h-[13px] w-[13px] md:h-[15px] md:w-[15px] text-navy flex-shrink-0"
                    strokeWidth={1.5}
                  />
                  <span className="text-[12px] md:text-[13px] font-semibold text-navy">
                    {label}
                  </span>
                </div>

                {/* ペイントマーク＋数字 */}
                <div className="relative py-3 md:py-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 brush-orange-short mix-blend-multiply opacity-[0.20] pointer-events-none"
                  />
                  <p className="relative z-10 leading-none">
                    <span className="text-[48px] md:text-[72px] font-black text-accentred tracking-tight">
                      {value}
                    </span>
                    <span className="text-[15px] md:text-[18px] font-bold text-navy ml-1">
                      {unit}
                    </span>
                  </p>
                </div>

                {/* キャプション */}
                <p className="text-[12px] md:text-[13px] font-medium text-ink-muted">{caption}</p>
              </div>
            ))}
          </div>

          {/* 下部テキスト */}
          <div className="mt-5 md:mt-7 flex items-center justify-center gap-2">
            <Paintbrush className="h-4 w-4 text-ink-muted flex-shrink-0" strokeWidth={1.5} />
            <p className="text-[14px] md:text-[15px] font-semibold text-navy">
              現地調査・お見積りは<span className="text-brandorange">無料</span>です
            </p>
          </div>
        </div>
      </section>

      {/* ===== Hero CTA ===== */}
      <div className="bg-[#FAF9F5] overflow-hidden">
        {/* ネイビー刷毛跡（左右へ自然にかすれる） */}
        <div className="relative h-[32px] md:h-[42px]">
          <div
            aria-hidden="true"
            className="absolute inset-0 brush-navy mix-blend-multiply pointer-events-none"
          />
        </div>

        {/* オレンジCTAボタン */}
        <a
          href="#contact"
          className="flex w-full items-center justify-center gap-3 bg-brandorange py-5 md:py-6 text-white font-bold text-[16px] md:text-[18px] transition-opacity hover:opacity-90"
        >
          <Mail className="h-5 w-5 flex-shrink-0" strokeWidth={2} />
          無料お見積り・お問い合わせはこちら
          <ChevronRight className="h-5 w-5 flex-shrink-0" strokeWidth={2.5} />
        </a>
      </div>
    </>
  )
}
