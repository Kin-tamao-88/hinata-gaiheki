import { CheckCircle, FileText } from 'lucide-react';
import syoudanImg from '../../assets/people/syoudan-lp2.png';
import jcaoIcon from '../../assets/hero/jcao-icon-trimmed.png';
import heroAnder from '../../assets/icons/hero-ander.png';
import iconStrength01 from '../../assets/strength/icon-strength-01.png';
import iconStrength02 from '../../assets/strength/icon-strength-02.png';
import iconStrength03 from '../../assets/strength/icon-strength-03.png';

const ORANGE = '#e8550a'

const reasons = [
  {
    num: '01',
    icon: <img src={iconStrength01} alt="" style={{ width: '84px', height: '64px', objectFit: 'contain' as const }} />,
    title: '業界最高水準の査定',
    desc: '多数の独自ネットワークとノウハウで、\n業界最高水準の買取価格をご提示します。',
  },
  {
    num: '02',
    icon: <img src={iconStrength02} alt="" style={{ width: '84px', height: '64px', objectFit: 'contain' as const }} />,
    title: '最速で現金化が可能',
    desc: '迅速な査定とスピーディーな手続きで、\n最短１日での現金化を実現します。',
  },
  {
    num: '03',
    icon: <img src={iconStrength03} alt="" style={{ width: '84px', height: '64px', objectFit: 'contain' as const }} />,
    title: 'コンプライアンス徹底',
    desc: '企業情報や取引内容は厳重に管理し、\n後々のトラブル、情報流出防止を徹底。',
  },
];

const checks = [
  '全国対応 47都道府県',
  '初回相談 完全無料',
  'オンライン相談 対応可能',
];

export function Strength() {
  return (
    <section className="strength-section" style={{ background: '#fff8f5' }}>

      {/* ===== セクション見出し：ビル背景 ===== */}
      <div
        className="strength-hero-heading"
        style={{
          position: 'relative',
          backgroundImage: `url(${heroAnder})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          padding: '48px 16px',
          textAlign: 'center',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(8, 18, 42, 0.48)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{
            color: '#ffffff',
            fontWeight: 900,
            fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
            margin: 0,
            letterSpacing: '-0.01em',
            lineHeight: 1.35,
          }}>
            JCAOが選ばれる<span style={{ color: ORANGE }}>3つの理由</span>
          </h2>
        </div>
      </div>

      {/* ===== カード ===== */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px clamp(12px, 3vw, 24px) 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="strength-cards">
          {reasons.map((r) => (
            <div key={r.num} style={{
              background: '#ffffff',
              border: '1px solid rgba(26,39,68,0.12)',
              padding: '28px 24px 32px',
            }}>
              <div className="strength-card-head" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 16, marginTop: 8 }}>
                <p style={{ fontWeight: 800, fontSize: '1.15rem', color: ORANGE, margin: 0, lineHeight: 1.4 }}>
                  {r.title}
                </p>
                {r.icon}
              </div>
              <div className="strength-orange-line" style={{ width: 112, height: 2, background: ORANGE, marginBottom: 16 }} />
              <p className="strength-card-desc" style={{ fontWeight: 500, fontSize: '0.9rem', color: '#444', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== 専門チームセクション ===== */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(12px, 3vw, 24px) 80px' }} className="strength-team">
        <div style={{ display: 'grid', gridTemplateColumns: '55% 45%', gap: 48, alignItems: 'center' }} className="strength-team-inner">

          <div>
            <h3 className="strength-team-h3" style={{ fontWeight: 900, fontSize: 'clamp(1.4rem, 3vw, 2.0rem)', color: '#1a1a1a', lineHeight: 1.6, marginBottom: 24 }}>
              法人売却・事業承継に<br /><span style={{ color: ORANGE }}>特化した専門チーム</span>が
              <br />経営者様のご要望に最大限応えます。
            </h3>
            <p className="strength-team-desc" style={{ fontWeight: 500, fontSize: '1rem', color: '#555', lineHeight: 2.0, marginBottom: 28 }}>
              専任スタッフ制となり、<br />ご相談から売却完了まで１人のスタッフが対応します。<br /><br />
              お客様１人１人、状況や悩みが違いますので、<br />
              柔軟で最適な解決策をご提案いたします。<br /><br />
              まずはお気軽にご相談ください。
            </p>
            <ul className="strength-team-checks" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {checks.map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <CheckCircle size={20} color={ORANGE} strokeWidth={2} />
                  <span className="strength-team-check-text" style={{ fontWeight: 400, fontSize: '0.95rem', color: '#1a1a1a' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ height: '100%', minHeight: 360 }}>
            <img
              src={syoudanImg}
              alt="専門チームによる商談シーン"
              className="strength-team-photo"
              style={{ width: '100%', height: '100%', minHeight: 360, objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
          </div>
        </div>
      </div>

      {/* ===== 下部CTA ===== */}
      <div style={{
        marginTop: 20,
        background: '#fff8f5',
        border: '1px solid #f0e8e0',
        padding: '28px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32,
        flexWrap: 'wrap',
      }} className="case-cta-banner">
        <div className="cta-logo-row" style={{ minWidth: 240, display: 'flex', alignItems: 'center', gap: 20 }}>
          <img className="cta-logo-img" src={jcaoIcon} alt="JCAO" style={{ height: 56, width: 'auto', flexShrink: 0 }} />
          <div className="cta-text-wrap">
            <p className="cta-heading" style={{ fontWeight: 900, fontSize: '1rem', color: '#1a1a1a', marginBottom: 8 }}>
              あなたの法人にも、<br className="cta-sp-br" /><span style={{ color: ORANGE }}>大きなチャンスがあります。</span>
            </p>
            <div className="cta-checks" style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              {['最短即日で査定完了', '情報は完全に秘密厳守', '相談・査定はすべて無料'].map((item) => (
                <span key={item} style={{ fontSize: '0.8rem', color: '#666', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ color: ORANGE, fontWeight: 700 }}>✓</span> {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <a href="#contact" className="cta-btn" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          background: ORANGE, color: '#fff', fontWeight: 900, fontSize: '1rem',
          padding: '16px 28px', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0,
        }}
          onMouseOver={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = '#c94208')}
          onMouseOut={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = ORANGE)}
        >
          <FileText size={18} strokeWidth={2} />
          今すぐ無料で査定してみる
          <span style={{ fontSize: '1.2em' }}>›</span>
        </a>
      </div>

      <style>{`
        .cta-sp-br { display: none; }
        @media (max-width: 768px) {
          .strength-hero-heading { padding: 28px 16px !important; }
          .strength-cards { grid-template-columns: 1fr !important; gap: 8px !important; }
          .strength-section > div { padding-left: 16px !important; padding-right: 16px !important; }
          .strength-section { padding-bottom: 0 !important; margin-bottom: 0 !important; }
          .strength-team-inner { grid-template-columns: 1fr !important; }
          .strength-team-inner > div:last-child { order: -1; height: 230px !important; min-height: 0 !important; margin-bottom: 14px !important; border-radius: 6px !important; overflow: hidden !important; }
          .strength-team-photo { height: 100% !important; min-height: 0 !important; object-position: center 15% !important; border-radius: 6px !important; }

          /* カード */
          .strength-cards > div { padding: 12px 14px 14px !important; }
          .strength-card-head { margin-top: 0 !important; margin-bottom: 8px !important; }
          .strength-card-head img { width: 52px !important; height: 40px !important; }
          .strength-orange-line { width: 40px !important; margin-bottom: 8px !important; }
          .strength-card-desc { font-size: 0.94rem !important; font-weight: 600 !important; line-height: 1.65 !important; }

          /* 専門チーム */
          .strength-team { padding-bottom: 20px !important; }
          .strength-team-h3 { font-size: 1.25rem !important; line-height: 1.5 !important; font-weight: 800 !important; margin-bottom: 14px !important; }
          .strength-team-desc { font-size: 0.94rem !important; font-weight: 500 !important; line-height: 1.8 !important; color: #333 !important; margin-bottom: 14px !important; }
          .strength-team-checks { gap: 9px !important; }
          .strength-team-check-text { font-weight: 500 !important; font-size: 0.93rem !important; }

          /* CTAバナー */
          .cta-sp-br { display: inline; }
          .case-cta-banner { flex-direction: column !important; padding: 6px 16px 0 !important; text-align: center !important; gap: 12px !important; margin-top: 0 !important; }
          .cta-logo-row { display: grid !important; grid-template-columns: 56px 1fr !important; grid-template-rows: auto auto !important; align-items: center !important; gap: 6px 35px !important; }
          .cta-logo-img { grid-row: 2 !important; grid-column: 1 !important; height: 52px !important; width: auto !important; align-self: center !important; }
          .cta-text-wrap { display: contents !important; }
          .cta-heading { grid-row: 1 !important; grid-column: 1 / -1 !important; font-size: 18px !important; font-weight: 700 !important; line-height: 1.45 !important; margin-bottom: 2px !important; text-align: center !important; }
          .cta-checks { grid-row: 2 !important; grid-column: 2 !important; gap: 6px !important; flex-direction: column !important; text-align: left !important; }
          .cta-checks > span { color: #222 !important; font-weight: 700 !important; line-height: 1.5 !important; font-size: 0.85rem !important; }
          .cta-btn { margin-top: 10px !important; width: 100% !important; margin-bottom: 0 !important; }
        }
      `}</style>
    </section>
  );
}
