import reportSample from '../../assets/hero/report-sample.png'
import jcaoLogo from '../../assets/hero/jcao-logo-top.png'

const NAVY = '#1a2744'
const ORANGE = '#e8550a'
const BG = '#fafafa'

export const HopeSection = () => {
  return (
    <section className="hope-section" style={{ backgroundColor: BG, position: 'relative', overflow: 'hidden' }}>

      {/* SP装飾：レポート画像（CSS で display 制御） */}
      <div className="hope-bg-report" style={{ position: 'absolute', right: -30, top: 60, width: '350px', pointerEvents: 'none', zIndex: 0 }}>
        <img src={reportSample} alt="" style={{ width: '100%', height: 'auto', opacity: 0.09 }} />
      </div>

      <div className="hope-section-inner" style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '40px clamp(16px, 4vw, 40px) 64px',
        position: 'relative',
        zIndex: 1,
      }}>

        {/* 1段目：ロゴ中央 */}
        <div className="hope-logo-wrap">
          <img
            className="hope-logo"
            src={jcaoLogo}
            alt="JCAO"
            style={{ height: '150px', display: 'block', margin: '0 auto 40px auto' }}
          />
        </div>

        {/* 2段目：見出し */}
        <h2 className="hope-title" style={{
          color: NAVY,
          fontSize: '2.73rem',
          fontWeight: 800,
          lineHeight: 1.5,
          margin: 0,
        }}>
          JCAOとは？
        </h2>
        <div style={{
          height: '3px',
          background: ORANGE,
          width: '280px',
          marginTop: '8px',
          marginBottom: '40px',
        }} />

        {/* 3段目：上2段落・全幅 */}
        <p className="hope-intro-quote" style={{ color: NAVY, fontSize: '1.1rem', lineHeight: 2.0, margin: '0 0 20px 0', maxWidth: '720px', fontWeight: 800 }}>
          「会社を持つって、<br className="hope-sp-br" />こんなにお金がかかるものだったのか。」
        </p>
        <p className="hope-orange-text" style={{ color: '#e8550a', fontSize: '1.25rem', lineHeight: 2.0, margin: '0 0 16px 0', fontWeight: 700 }}>
          設立にも、維持にも、そして解散にも——<br />
          法人というのは、持っているだけで<br className="hope-sp-br" />コストが生まれ続けます。
        </p>

        {/* 4段目：下2段落＋画像 横並び */}
        <div className="hope-body-row" style={{ display: 'flex', alignItems: 'flex-end', gap: 'clamp(24px, 5vw, 64px)' }}>
          <div className="hope-text-col" style={{ maxWidth: '620px', flex: '0 0 620px' }}>
            <p style={{ color: '#222', fontSize: '1.1rem', lineHeight: 2.0, margin: '0 0 20px 0' }}>
              「使わなくなった会社を、<br className="hope-sp-br" />ただ眠らせておくしかない」<br />
              そう諦めている経営者の方が、<br className="hope-sp-br" />日本にはたくさんいます。
            </p>
            <p className="hope-jcao-text" style={{ color: NAVY, fontSize: '1.1rem', lineHeight: 2.0, margin: '0 0 8px 0', fontWeight: 800 }}>
              JCAOは、そんな現実に<br className="hope-sp-br" />違和感を解消するためのサービスです。
            </p>
            <p style={{ color: '#222', fontSize: '1.1rem', lineHeight: 2.7, margin: 0 }}>
              あなたの法人に残っている価値を、<br className="hope-sp-br" />必要としている人へ繋ぐ。<br />
              <br />
              無駄なコストが掛からない、<br className="hope-sp-br" />最適な提案で価値を生みだし<br />
              次のビジネスへの架け橋になることが<br className="hope-sp-br" />私たちの使命です。
            </p>
          </div>
          <div className="hope-report-img" style={{ flexShrink: 0, marginLeft: '-60px' }}>
            <img
              className="hope-img"
              src={reportSample}
              alt=""
              style={{ width: 'min(400px, 90%)', height: 'auto', opacity: 0.85 }}
            />
          </div>
        </div>

      </div>

      {/* ===== CTA（オレンジ帯のみ） ===== */}
      <div className="hope-cta-wrap" style={{ backgroundColor: BG, padding: '0 40px 72px', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <a
            href="#contact"
            className="hope-cta-top"
            style={{
              display: 'block',
              textDecoration: 'none',
              borderRadius: '6px',
              overflow: 'hidden',
              backgroundColor: ORANGE,
              backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.14) 0%, transparent 55%)',
              color: '#ffffff',
              textAlign: 'center',
              padding: '18px 40px',
              fontSize: '1rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
            }}
          >
            今、法人の価値を知ることにはメリットがあります
          </a>
        </div>
      </div>

      <style>{`
        /* PC: bg-report 非表示、sp-br 非表示 */
        .hope-bg-report { display: none; }
        .hope-sp-br { display: none; }

        @media (max-width: 768px) {
          /* 上余白削減 */
          .hope-section { margin-top: -24px; }

          /* 背景装飾：CSS のみで制御（inline display 指定なし → !important 不要） */
          .hope-bg-report { display: block; }

          /* SP改行：br.hope-sp-br を inline に戻す（display:none を解除するだけ） */
          .hope-sp-br { display: inline; }

          .hope-section-inner {
            padding: 20px 12px 36px 22px !important;
            text-align: left !important;
          }
          .hope-logo-wrap {
            display: none !important;
          }
          .hope-title {
            font-size: 1.9rem !important;
            margin-bottom: 0 !important;
          }
          .hope-body-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0 !important;
          }
          .hope-report-img {
            display: none !important;
          }
          .hope-text-col {
            flex: none !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          /* 引用文：jcao-textと同じ文字バランス */
          .hope-intro-quote {
            color: #1a2744 !important;
            font-weight: 800 !important;
            font-size: 0.97rem !important;
          }
          /* セクション直下のp（引用・本文） */
          .hope-section-inner > p {
            font-size: 0.93rem !important;
            line-height: 1.85 !important;
            margin-bottom: 10px !important;
          }
          /* hope-text-col 内のp */
          .hope-text-col p {
            font-size: 0.93rem !important;
            line-height: 1.85 !important;
            margin-bottom: 10px !important;
          }
          /* オレンジ文：左ボーダーのみ・背景なし */
          .hope-orange-text {
            font-size: 1.05rem !important;
            line-height: 1.75 !important;
            font-weight: 900 !important;
            margin: 6px 0 18px -15px !important;
            padding: 6px 0 6px 12px !important;
            border-left: 3px solid #e8550a !important;
            background: none !important;
          }
          .hope-jcao-text {
            font-size: 0.97rem !important;
            color: #1a2744 !important;
            font-weight: 800 !important;
            margin-bottom: 10px !important;
          }
          .hope-cta-wrap {
            padding: 0 16px 44px !important;
          }
          /* CTA：1行優先のフォントサイズ調整 */
          .hope-cta-top {
            font-size: 0.82rem !important;
            padding: 14px 12px !important;
            letter-spacing: 0.02em !important;
            white-space: nowrap !important;
            border-radius: 5px !important;
          }
        }
      `}</style>
    </section>
  )
}
