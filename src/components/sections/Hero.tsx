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


function BrushBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative inline-flex items-center bg-[#062b4f] overflow-hidden mb-3 md:mb-4 md:h-[34px] md:self-start">
      {/* ペイントノイズ：ベタ塗り感を消す */}
      <div
        aria-hidden="true"
        className="absolute inset-0 tex-paint-noise opacity-[0.08] mix-blend-overlay pointer-events-none"
      />
      {/* ブラシアクセント：右40%のみ（左60%はネイビー単色） */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-full w-[40%] brush-navy opacity-[0.55] mix-blend-overlay pointer-events-none"
      />
      <span className="relative z-10 text-white text-[12px] md:text-[18px] font-bold tracking-normal whitespace-nowrap px-3 py-[5px] md:px-[8px] md:py-0">
        {children}
      </span>
    </div>
  )
}

const stats = [
  { label: '地域密着', value: '15', unit: '年', caption: '地域で積み重ねた実績', Icon: Users, valueClass: '' },
  { label: '累計施工実績', value: '600', unit: '件以上', caption: '確かな技術で施工', Icon: Paintbrush, valueClass: '' },
  { label: 'お見積り・診断', value: '無料', unit: '', caption: '明確なお見積り', Icon: JapaneseYen, valueClass: 'text-[26px] md:text-[34px]' },
  { label: '施工後も安心', value: '3', unit: '年間', caption: 'アフターサポート', Icon: ShieldCheck, valueClass: '' },
]

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between px-5 py-3 md:pl-[56px] md:pr-8 md:py-0 md:h-[72px]">

          {/* ロゴ */}
          <div className="flex items-center gap-1.5 md:gap-[14px]">
            <LogoMark className="h-7 w-7 md:h-[42px] md:w-[42px] text-navy" />
            <div className="leading-tight">
              <p className="text-[17px] md:text-[28px] font-extrabold text-navy tracking-tight">
                レストレーション
              </p>
              <p className="hidden md:block text-[12px] text-ink-muted">住宅総合メンテナンス</p>
            </div>
          </div>

          {/* PC：電話 + CTA */}
          <div className="hidden md:flex items-center md:gap-[24px]">
            <div className="text-right">
              <p className="text-[13px] text-ink-muted mb-1">お電話でのお問い合わせはこちら</p>
              <a
                href="tel:09027669657"
                className="flex items-center justify-end gap-2 text-[22px] font-extrabold text-navy leading-none"
              >
                <Phone className="h-5 w-5 flex-shrink-0" strokeWidth={2} />
                090-2766-9657
              </a>
              <p className="text-[12px] text-ink-muted mt-1">受付時間 9:00〜17:30（日曜定休）</p>
            </div>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold text-[15px] md:w-[240px] md:h-[52px] rounded hover:bg-green-600 transition-colors"
            >
              <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 bg-white rounded-sm">
                <span className="text-[7px] font-black text-green-600 leading-none">LINE</span>
              </span>
              LINEで相談する
              <ChevronRight className="h-4 w-4 flex-shrink-0" strokeWidth={2.5} />
            </a>
          </div>

          {/* SP：電話ボタン + ハンバーガー */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:09027669657"
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
      <section className="relative overflow-hidden bg-cream md:h-[500px]">

        {/* SP：背景写真（PC では非表示） */}
        <img
          src={heroPhoto}
          alt="外壁塗装の施工の様子"
          className="absolute inset-0 w-full h-full object-cover object-[40%_28%] scale-[1.10] origin-[40%_28%] md:hidden"
        />
        {/* SP：テキスト可読性グラデーション */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,242,236,0.94)_0%,rgba(245,242,236,0.82)_45%,rgba(245,242,236,0.35)_70%,transparent_100%)] md:hidden" />
        {/* テクスチャ（SP・PC 共通） */}
        <div
          aria-hidden="true"
          className="brush-cream-texture mix-blend-multiply pointer-events-none absolute inset-0 opacity-[0.07]"
        />

        {/* レイアウトコンテナ */}
        <div className="relative z-10 md:h-full md:mx-auto md:max-w-[1240px] md:pl-[56px] md:flex md:items-stretch md:gap-[24px]">

          {/* テキスト列 */}
          <div className="relative px-6 pt-6 pb-4 md:px-0 md:pt-0 md:pb-0 md:w-[36%] md:flex-shrink-0 md:flex md:flex-col md:justify-center">
            {/* 背景テクスチャ（PC のみ） */}
            <div aria-hidden="true" className="absolute inset-0 tex-cream-board opacity-[0.06] mix-blend-multiply pointer-events-none hidden md:block" />
            <div aria-hidden="true" className="absolute inset-0 tex-paint-noise opacity-[0.04] mix-blend-overlay pointer-events-none hidden md:block" />
            <BrushBadge>山梨県密着｜外壁塗装・住宅メンテナンス</BrushBadge>

            <h1 className="text-[32px] md:text-[48px] font-black leading-tight tracking-tight text-navy mb-0">
              山梨の住まいを、
            </h1>
            <h1 className="text-[36px] md:text-[52px] font-black leading-tight tracking-tight text-brandorange mb-1">
              守り続けて15年。
            </h1>
            <div className="h-[6px] w-[80%] bg-brandorange mb-3 md:mb-4" />

            <p className="text-[15px] md:text-[16px] text-[#374151] leading-loose font-semibold">
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

          {/* PC：写真列（SP では非表示） */}
          <div className="hidden md:block md:flex-1 md:min-w-0 overflow-hidden relative">
            <img
              src={heroPhoto}
              alt="外壁塗装の施工の様子"
              className="w-full h-full object-cover object-[90%_30%] scale-[1.13] origin-[90%_30%]"
            />
            {/* 左端フェード：テキスト列との境界をクリームへ溶かす */}
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 h-full w-[100px] bg-gradient-to-l from-transparent to-cream pointer-events-none"
            />
            {/* 右端フェード：腕・手・ローラ���に掛からないよう最小幅 */}
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-full w-[24px] bg-gradient-to-r from-transparent to-cream pointer-events-none"
            />
          </div>

        </div>
      </section>

      {/* ===== 実績帯 + CTA（C-2：フルワイドポスター構造） ===== */}
      <section className="relative overflow-hidden bg-[#062b4f] tex-navy-wall">
        {/* 層0: navy-wall テクスチャを薄めるネイビー単色オーバーレイ */}
        <div aria-hidden="true" className="absolute inset-0 bg-[#062b4f] opacity-[0.50] pointer-events-none" />
        {/* 層1: ペイントノイズ */}
        <div aria-hidden="true" className="absolute inset-0 tex-paint-noise opacity-[0.06] mix-blend-overlay pointer-events-none" />
        {/* 層2: コンクリートダスト */}
        <div aria-hidden="true" className="absolute inset-0 tex-concrete-dust opacity-[0.04] mix-blend-overlay pointer-events-none" />
        {/* 層3: 上端オレンジブラシライン */}
        <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-[8px] md:h-[10px] brush-orange-long opacity-65 mix-blend-screen pointer-events-none" />

        <div className="relative z-10">
          <div className="max-w-[1240px] mx-auto px-4 md:px-0 md:py-[24px]">

            <div className="flex flex-col md:flex-row md:items-center">

              {/* ===== 左: コピーブロック ===== */}
              <div className="py-6 md:py-0 md:w-[300px] md:pr-8 flex-shrink-0 flex flex-col justify-center items-center md:items-start">
                <div className="mb-1 md:mb-4 overflow-visible">
                  <span className="inline-flex items-center tex-masking-tape px-[18px] py-[17px] font-black text-[#062b4f] text-[13px] md:text-[18px] -rotate-1 tracking-wide">
                    選ばれ続ける理由は
                  </span>
                </div>
                <h2 className="heading-ink-texture w-full mb-2 md:mb-0 text-[24px] md:text-[34px] font-black text-white leading-[1.24] md:leading-[1.0] tracking-[-0.02em] md:tracking-[-0.03em] text-center md:text-left">
                  確かな技術と
                  <br className="hidden md:block" />
                  積み重ねた実績
                </h2>
              </div>

              {/* ===== 右: 実績ボード4枚 ===== */}
              <div className="flex-1 flex flex-col justify-center pb-4 md:pb-0">
                <div className="grid grid-cols-2 gap-[3px] md:flex md:flex-nowrap md:gap-[3px]">
                  {stats.map(({ label, value, unit, caption, Icon, valueClass }) => (
                    <div
                      key={label}
                      className="relative overflow-hidden bg-[#f7f3ea] tex-cream-board border border-white/20 h-[144px] md:h-[132px] md:flex-1 flex flex-col p-3 md:p-[12px]"
                    >
                      <div aria-hidden="true" className="absolute inset-0 tex-concrete-dust opacity-[0.08] mix-blend-multiply pointer-events-none" />

                      <div className="relative z-10 flex flex-col h-full items-center">
                        {/* アイコン + カテゴリラベル */}
                        <div className="flex items-center gap-2 mb-4 md:mb-2.5 flex-shrink-0">
                          <div className="flex-shrink-0 bg-navy p-1.5">
                            <Icon className="h-3 w-3 md:h-[14px] md:w-[14px] text-white" strokeWidth={1.5} />
                          </div>
                          <span className="text-[14px] md:text-[15px] font-bold text-navy leading-tight">{label}</span>
                        </div>

                        {/* 数値ブロック：ベースライン横並び */}
                        <div className="flex flex-row items-baseline gap-1 mb-0.5 md:mb-1 flex-shrink-0">
                          <span className={`num-ink-grain font-black text-[#e8550a] leading-none tracking-[-0.04em] ${valueClass || 'text-[34px] md:text-[46px]'}`}>
                            {value}
                          </span>
                          <span className="text-[13px] md:text-[17px] font-bold text-navy leading-none">
                            {unit}
                          </span>
                        </div>

                        {/* 数字下ブラシストローク */}
                        <div className="tex-paint-stroke-yellow h-[12px] md:h-[2px] w-3/4 md:w-[64px] mb-1.5 md:mb-2 flex-shrink-0" />

                        {/* キャプション */}
                        <p className="text-[14px] md:text-[15px] font-bold text-navy mt-auto">{caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>


          </div>
        </div>
      </section>

    </>
  )
}
