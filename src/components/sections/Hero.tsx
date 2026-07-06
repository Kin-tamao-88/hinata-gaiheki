import { useState } from 'react'
import {
  Mail,
  Phone,
  ChevronRight,
  Menu,
  X,
  Paintbrush,
  JapaneseYen,
  CheckCircle2,
  Users,
  ShieldCheck,
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
  { label: '地域密着', value: '15', unit: '年', caption: '地域で積み重ねた実績', Icon: Users },
  { label: '累計施工実績', value: '1,200', unit: '件以上', caption: '確かな技術で施工', Icon: Paintbrush },
  { label: 'お見積り・診断', value: '0', unit: '円', caption: '明確なお見積り', Icon: JapaneseYen },
  { label: '施工後も安心', value: '3', unit: '年間', caption: 'アフターサポート', Icon: ShieldCheck },
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

      {/* ===== 実績帯（C-2：フルワイドポスター構造） ===== */}
      <section className="relative overflow-hidden bg-[#062b4f] tex-navy-wall">
        {/* 層1: ペイントノイズ – 塗装壁のランダムな粒子感 */}
        <div aria-hidden="true" className="absolute inset-0 tex-paint-noise opacity-[0.10] mix-blend-overlay pointer-events-none" />
        {/* 層2: コンクリートダスト – 乾いた現場壁の素材感 */}
        <div aria-hidden="true" className="absolute inset-0 tex-concrete-dust opacity-[0.06] mix-blend-overlay pointer-events-none" />
        {/* 層3: 上端オレンジブラシライン */}
        <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-[8px] md:h-[10px] brush-orange-long opacity-65 mix-blend-screen pointer-events-none" />

        <div className="relative z-10 px-4 md:pl-10 md:pr-6">
          <div className="flex flex-col md:flex-row">

            {/* ===== 左: コピーブロック (32%) ===== */}
            <div className="py-10 md:py-16 md:w-[32%] md:pr-6 flex-shrink-0 flex flex-col justify-center">
              <div className="mb-4 md:mb-5">
                {/* 養生テープラベル: masking-tape-yellow.png をベースに文字を重ねる */}
                <span className="inline-block tex-masking-tape px-5 py-2 font-black text-[#062b4f] text-[13px] md:text-[14px] -rotate-1 tracking-wide">
                  選ばれ続ける理由は
                </span>
              </div>
              {/* ink-grain-mask.png を background-clip:text でテキスト形状に適用
                  文字の内側だけに素材のザラつきが現れ、外側は一切影響なし */}
              <h2 className="heading-ink-texture text-[44px] md:text-[56px] font-black text-white leading-[1.0] tracking-tight">
                確かな技術と
                <br />
                積み重ねた実績
              </h2>
            </div>

            {/* ===== 右: 実績ボード4枚 (68%) ===== */}
            <div className="flex-1 flex flex-col justify-center pb-8 md:pb-0 md:py-10">
              <div className="grid grid-cols-2 gap-[3px] md:flex md:flex-nowrap md:gap-[3px]">
                {stats.map(({ label, value, unit, caption, Icon }) => (
                  <div
                    key={label}
                    className="relative overflow-hidden bg-[#f7f3ea] tex-cream-board border border-white/20 h-[164px] md:h-[210px] md:flex-1 flex flex-col p-4"
                  >
                    {/* コンクリートダスト – 施工ボードの経年汚れ・素材感 */}
                    <div aria-hidden="true" className="absolute inset-0 tex-concrete-dust opacity-[0.08] mix-blend-multiply pointer-events-none" />

                    <div className="relative z-10 flex flex-col h-full">
                      {/* ネイビー帯アイコン + カテゴリラベル */}
                      <div className="flex items-center gap-2 mb-3 md:mb-4 flex-shrink-0">
                        <div className="flex-shrink-0 bg-navy p-1.5">
                          <Icon className="h-3.5 w-3.5 md:h-[18px] md:w-[18px] text-white" strokeWidth={1.5} />
                        </div>
                        <span className="text-[10px] md:text-[13px] font-bold text-navy leading-tight">{label}</span>
                      </div>

                      {/* 数値（主役）: value.length > 4 は「1,200」→66px、それ以外→80px
                          num-ink-grain: ink-grain-mask.png を multiply で重ねてオレンジに塗装感
                          tracking-[-0.04em]: 字間を詰めて圧縮ゴシックの重量感を出す */}
                      <div className="flex flex-col md:flex-row md:items-end md:gap-1 mb-1 md:mb-2 flex-shrink-0">
                        <span className={`num-ink-grain font-black text-[#e8550a] leading-none tracking-[-0.04em] ${value.length > 4 ? 'text-[44px] md:text-[66px]' : 'text-[44px] md:text-[80px]'}`}>
                          {value}
                        </span>
                        <span className="text-[12px] md:text-[16px] font-bold text-navy leading-none md:mb-2">
                          {unit}
                        </span>
                      </div>

                      {/* 数字下ブラシストローク: paint-stroke-yellow.png で素材感のある黄ライン */}
                      <div className="tex-paint-stroke-yellow h-[14px] md:h-[17px] w-3/4 mb-2 md:mb-3 flex-shrink-0" />

                      {/* キャプション */}
                      <p className="text-[10px] md:text-[13px] font-bold text-navy mt-auto">{caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== Hero CTA ===== */}
      <div className="bg-[#FAF9F5] overflow-hidden">
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
