import { useState } from 'react'
import { Mail, ChevronRight, Users, Globe, Handshake, FileSearch, Calculator, Building2 } from 'lucide-react'
import heroConsultation from '../../assets/hero/hero-consultation.png'
import jcaoLogo from '../../assets/hero/jcao-logo-top.png'
import jcaoIcon from '../../assets/hero/jcao-icon-trimmed.png'
import heroAnder from '../../assets/icons/hero-ander.png'

const ORANGE = '#e8550a'
const NAVY = '#1a2744'

const reasons = [
  {
    num: '01',
    icon: <FileSearch className="w-7 h-7 md:w-9 md:h-9 text-[#e8550a]" strokeWidth={1.5} />,
    title: '法人価値を診断',
    line1: '赤字決算・借入・税金未払いなど',
    line2: '様々な課題に対応可能',
    line2Orange: false,
  },
  {
    num: '02',
    icon: <Calculator className="w-7 h-7 md:w-9 md:h-9 text-[#e8550a]" strokeWidth={1.5} />,
    title: '適正価格を算出',
    line1: '独自の評価基準で売却可能価格を',
    line2: '24時間以内にご提示',
    line2Orange: true,
  },
  {
    num: '03',
    icon: <Building2 className="w-7 h-7 md:w-9 md:h-9 text-[#e8550a]" strokeWidth={1.5} />,
    title: '最適な売却先をご紹介',
    line1: '業界トップクラスのネットワークで',
    line2: '売却希望のご成約率96%',
    line2Orange: true,
  },
]

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-3 md:px-8 md:py-2.5">

          {/* ロゴ */}
          <img
            src={jcaoLogo}
            alt="日本法人査定機構"
            className="h-14 w-auto md:h-20 md:ml-[102px]"
          />

          {/* PC：CTAボタン */}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-3 bg-[#e8550a] text-white px-10 py-4 hover:bg-[#c94208] transition-colors"
            style={{ boxShadow: '0 4px 0 rgba(120, 45, 15, 0.35)', borderRadius: '4px' }}
          >
            <Mail className="w-4 h-4 flex-shrink-0" />
            <div className="text-left">
              <div className="font-extrabold text-[1.2rem] leading-tight">法人価値を無料で診断する</div>
              <div className="text-[0.68rem] opacity-90 leading-tight">24時間受付中</div>
            </div>
            <ChevronRight className="w-4 h-4 flex-shrink-0" strokeWidth={2.5} />
          </a>

          {/* SP：ハンバーガー */}
          <button
            className="md:hidden p-2 text-[#1a2744]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>

        </div>

        {/* SP：展開メニュー */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-[#e8550a] text-white font-bold py-3 px-4 w-full hover:bg-[#c94208] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              無料で法人価値を診断する
              <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
            </a>
          </div>
        )}
      </header>

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-[#F5F2EC] md:h-[560px]">

        {/* 写真コンテナ
            SP：absolute inset-0（全画面背景化）
            PC：absolute right-0 top-0 幅64%（左方向へ拡張） */}
        <div className="absolute inset-0 md:inset-auto md:right-0 md:top-0 md:w-[64%] md:h-full">
          <img
            src={heroConsultation}
            alt="法人の無料相談の様子"
            className="w-full h-full object-cover object-[80%_center] md:object-center block"
          />
          {/* SP: 強めグラデーション */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F2EC] via-[#F5F2EC]/80 to-[#F5F2EC]/10 md:hidden" />
          {/* PC: Vercel版と同じ25%フェードのみ */}
          <div className="absolute inset-0 hidden md:block" style={{ background: 'linear-gradient(to right, #F5F2EC 0%, transparent 25%)', pointerEvents: 'none' }} />
        </div>

        {/* テキストエリア */}
        <div className="relative z-10 px-6 py-7 pb-10 md:px-[146px] md:py-0 md:h-full md:flex md:items-center">
          <div className="md:flex md:items-center md:gap-10">

            {/* JCAOシンボルロゴ（PC表示のみ） */}
            <img
              src={jcaoIcon}
              alt="日本法人査定機構"
              className="hidden md:block h-[160px] w-auto flex-shrink-0 opacity-70"
            />

            {/* テキストブロック */}
            <div style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' } as React.CSSProperties}>

              <p className="text-[28px] md:text-[38px] text-[#1a2744] font-extrabold leading-tight mb-3 md:mb-[15px] tracking-[-0.01em]">
                不要な法人が
              </p>

              <div className="w-fit">
                <h1 className="text-[clamp(1.8rem,9vw,3rem)] md:text-[68px] text-[#e8550a] font-black leading-none whitespace-nowrap tracking-[-0.02em] m-0">
                  高額資金に変わる
                </h1>
                <div className="h-[5px] bg-[#e8550a] w-full mt-0.5 mb-6 md:mb-[38px]" />
              </div>

              <p className="text-[18px] md:text-[32px] text-[#1a2744] font-extrabold mb-4 md:mb-5">
                <span style={{ background: 'linear-gradient(transparent 56%, rgba(255,218,60,0.55) 66%)', padding: '0 3px' }}>
                  法人査定はJCAOにご相談ください。
                </span>
              </p>

              <p className="text-[14px] md:text-[16px] text-[#374151] font-extrabold mb-1">
                休眠法人・赤字法人・債務超過法人にも
              </p>
              <p className="text-[14px] md:text-[16px] text-[#374151] font-extrabold">
                価値が残っている可能性があります。
              </p>

              {/* CTAボタン（SP表示 / PC非表示） */}
              <a
                href="#contact"
                className="md:hidden mt-6 flex items-center justify-center gap-2 bg-[#e8550a] text-white font-black text-base py-4 px-6 w-full max-w-[340px] transition-colors"
                style={{ boxShadow: '0 4px 0 rgba(120, 45, 15, 0.35)', borderRadius: '4px' }}
              >
                無料で法人価値を診断する
                <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
              </a>


            </div>
          </div>
        </div>
      </section>

      {/* ===== 実績ストリップ ===== */}
      <section
        className="relative py-6 md:py-5"
        style={{
          backgroundImage: `url(${heroAnder})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
        }}
      >
        {/* dark overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(8, 18, 42, 0.54)' }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto grid grid-cols-3 divide-x divide-[rgba(255,255,255,0.45)]">

          <div className="px-3 md:px-12 text-center py-3 md:py-2 overflow-hidden">
            <p className="flex items-center justify-center gap-1 text-white font-bold md:font-medium text-[10px] md:text-[15px] mb-2 leading-tight">
              <Users className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" strokeWidth={2} style={{ color: '#d8b25f' }} />
              ご相談実績
            </p>
            <p
              className="font-black leading-none whitespace-nowrap tracking-tight"
              style={{ color: '#d8b25f', fontSize: 'clamp(1.5rem, 6.5vw, 3.5rem)' }}
            >
              1,000社
            </p>
            <p className="text-white font-bold md:font-black text-[12px] md:text-[17px] mt-2 whitespace-nowrap">以上</p>
          </div>

          <div className="px-3 md:px-12 text-center py-3 md:py-2 overflow-hidden">
            <p className="flex items-center justify-center gap-1 text-white font-bold md:font-medium text-[9px] md:text-[15px] mb-2 leading-tight whitespace-nowrap">
              <Globe className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" strokeWidth={2} style={{ color: '#d8b25f' }} />
              全国オンライン対応
            </p>
            <p
              className="font-black leading-none whitespace-nowrap tracking-tight"
              style={{ color: '#d8b25f', fontSize: 'clamp(1.5rem, 6.5vw, 3.5rem)' }}
            >
              全国対応
            </p>
            <p className="text-white font-bold md:font-black text-[12px] md:text-[17px] mt-2 whitespace-nowrap">来社不要</p>
          </div>

          <div className="px-3 md:px-12 text-center py-3 md:py-2 overflow-hidden">
            <p className="flex items-center justify-center gap-1 text-white font-bold md:font-medium text-[10px] md:text-[15px] mb-2 leading-tight">
              <Handshake className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" strokeWidth={2} style={{ color: '#d8b25f' }} />
              売却希望の成約率
            </p>
            <p
              className="font-black leading-none whitespace-nowrap"
              style={{ color: '#d8b25f', fontSize: 'clamp(1.5rem, 6.5vw, 3.5rem)' }}
            >
              96%
            </p>
            <p className="text-white font-bold md:font-black text-[12px] md:text-[17px] mt-2 whitespace-nowrap">高額成立</p>
            <p className="hidden md:block text-white text-[10px] md:text-xs mt-1" style={{ opacity: 0.9 }}>※2025年実績／自社調べ</p>
          </div>

        </div>

        {/* SP注釈：グリッド外・中央配置 */}
        <p className="md:hidden relative z-10 text-center text-white text-[10px] mt-3" style={{ opacity: 0.85 }}>
          ※2025年実績／自社調べ
        </p>
      </section>

      {/* ===== 当機構が選ばれる3つの理由 ===== */}
      <section className="bg-white py-10 md:py-16">
        <div className="max-w-[1280px] mx-auto px-6">

          <div className="text-center mb-3 md:mb-12">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="h-px w-12 bg-gray-600" />
              <p className="text-[#374151] text-sm tracking-wide">当機構が選ばれる</p>
              <div className="h-px w-12 bg-gray-600" />
            </div>
            <h2
              className="font-black tracking-tight"
              style={{ color: NAVY, fontSize: 'clamp(2.1rem, 5vw, 2.5rem)' }}
            >
              <span style={{ color: ORANGE }}>3</span>つの理由
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {reasons.map((r) => (
              <div
                key={r.num}
                className="border border-[#e8e8e8] px-4 py-4 md:px-6 md:py-6 md:min-h-[175px] flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-black leading-none flex-shrink-0" style={{ color: ORANGE, fontSize: '1.75rem' }}>{r.num}</span>
                  <span className="flex-shrink-0">{r.icon}</span>
                  <h3 className="font-extrabold text-[15px] md:text-[23px] leading-tight md:font-bold" style={{ color: NAVY }}>{r.title}</h3>
                </div>
                <div className="h-px bg-[#eeeeee] mb-3" />
                <p className="text-[13px] md:text-[16px] leading-[1.5] md:leading-[1.8]" style={{ color: '#1a1a1a' }}>{r.line1}</p>
                <p className="text-[13px] md:text-[16px] leading-[1.5] md:leading-[1.8] font-bold" style={{ color: r.line2Orange ? ORANGE : '#1a1a1a' }}>{r.line2}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
