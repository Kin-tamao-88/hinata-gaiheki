import { ChevronDown } from 'lucide-react';
import icon01 from '../../assets/icons/flow-icon-01.png';
import icon02 from '../../assets/icons/step02_clipboard.png';
import icon03 from '../../assets/icons/flow-icon-03.png';
import icon04 from '../../assets/icons/flow-icon-04.png';
import icon05 from '../../assets/icons/flow-icon-05.png';

const ORANGE = '#e8550a';
const NAVY = '#1a2744';

const steps = [
  {
    num: '01',
    icon: icon01,
    title: '法人価値を診断',
    desc: '事業・信用・資産価値まで総合的に査定し、',
    highlight: '無料で法人価値を診断',
    descEnd: 'します。',
    time: '最短即日',
  },
  {
    num: '02',
    icon: icon02,
    title: '適正価格を算出',
    desc: '市場価値をもとに、',
    highlight: '売却可能価格',
    descEnd: 'をご提示します。',
    time: '数日以内',
  },
  {
    num: '03',
    icon: icon03,
    title: '最適な売却先をご紹介',
    desc: '独自ネットワークから',
    highlight: '最適な相手先を選定',
    descEnd: 'し、ご提案します。',
    time: '随　時',
  },
  {
    num: '04',
    icon: icon04,
    title: '条件交渉・契約',
    desc: '',
    highlight: '専門スタッフが交渉をサポート',
    descEnd: 'し、ご納得いただける条件で契約を締結します。',
    time: '随　時',
  },
  {
    num: '05',
    icon: icon05,
    title: '売却完了・代金のお受け取り',
    desc: '契約に基づき売却を完了し、',
    highlight: '売却代金を確実にお受け取り',
    descEnd: 'いただきます。',
    time: '随　時',
  },
];

export function Flow() {
  return (
    <section className="flow-section" style={{ background: '#faf9f7', paddingTop: 80, paddingBottom: 80 }}>
      <div className="flow-container" style={{ maxWidth: 960, margin: '0 auto', padding: '0 8px' }}>

        {/* ヘッダー */}
        <div className="flow-header" style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: ORANGE, letterSpacing: '0.2em', marginBottom: 8 }}>FLOW</p>
          <div style={{ width: 32, height: 2, background: ORANGE, margin: '0 auto 24px' }} />
          <h2 className="flow-heading" style={{ fontSize: 40, fontWeight: 700, color: NAVY, marginBottom: 12 }}>法人売却までの流れ</h2>
          <p className="flow-lead" style={{ fontSize: 16, color: '#374151', margin: 0 }}>ご相談から売却完了まで、専門スタッフが丁寧にサポートします。</p>
        </div>

        {/* ステップリスト */}
        <div className="flow-list" style={{ position: 'relative' }}>

          {/* 縦線 */}
          <div className="flow-line" style={{
            position: 'absolute',
            left: 31,
            top: 36,
            bottom: 36,
            width: 2,
            background: ORANGE,
            zIndex: 0,
          }} />

          {steps.map((step, index) => (
            <div key={step.num} className="flow-step-item" style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'stretch',
              marginBottom: index < steps.length - 1 ? 24 : 0,
            }}>

              {/* 左タイムライン列 */}
              <div className="flow-timeline" style={{ width: 64, flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="flow-dot" style={{ width: 12, height: 12, borderRadius: '50%', background: ORANGE, marginTop: 36, flexShrink: 0, zIndex: 1 }} />
              </div>

              {/* カード本体 */}
              <div className="flow-card" style={{
                flex: 1,
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: 12,
                padding: '28px 32px',
              }}>

                {/* PC レイアウト：横並び */}
                <div className="flow-card-inner-pc" style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                  <div className="flow-step-num" style={{ width: 80, flexShrink: 0 }}>
                    <div className="flow-step-label" style={{ fontSize: 11, fontWeight: 700, color: ORANGE, letterSpacing: '0.15em' }}>STEP</div>
                    <div className="flow-step-num-text" style={{ fontSize: 64, fontWeight: 700, color: ORANGE, lineHeight: 1 }}>{step.num}</div>
                  </div>
                  <img src={step.icon} alt="" style={{ width: 64, height: 64, objectFit: 'contain', flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="flow-title" style={{ fontSize: 19, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{step.title}</div>
                    <div className="flow-desc" style={{ fontSize: 15, color: '#374151', lineHeight: 1.75 }}>
                      {step.desc}
                      <span style={{ color: ORANGE }}>{step.highlight}</span>
                      {step.descEnd}
                    </div>
                  </div>
                </div>

                {/* SP レイアウト：縦積み */}
                <div className="flow-card-inner-sp" style={{ display: 'none' }}>
                  {/* 1行目：STEP番号 + アイコン + タイトル */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                    <div style={{ flexShrink: 0, textAlign: 'center', minWidth: 32 }}>
                      <div style={{ fontSize: 10, fontWeight: 700, color: ORANGE, letterSpacing: '0.12em', lineHeight: 1 }}>STEP</div>
                      <div style={{ fontSize: 31, fontWeight: 700, color: ORANGE, lineHeight: 1, marginTop: 2 }}>{step.num}</div>
                    </div>
                    <img src={step.icon} alt="" style={{ width: 34, height: 34, objectFit: 'contain', flexShrink: 0 }} />
                    <div style={{ fontSize: 18, fontWeight: 700, color: NAVY, lineHeight: 1.5 }}>{step.title}</div>
                  </div>
                  {/* 2行目：本文（フル幅） */}
                  <div style={{ fontSize: 16, lineHeight: 1.8, fontWeight: 500, color: '#1a1a1a' }}>
                    {step.desc}
                    <span style={{ color: ORANGE }}>{step.highlight}</span>
                    {step.descEnd}
                  </div>
                </div>

              </div>

              {/* カード間シェブロン（最後以外）*/}
              {index < steps.length - 1 && (
                <div className="flow-chevron" style={{
                  position: 'absolute',
                  bottom: -18,
                  left: 128,
                  transform: 'translateX(-50%)',
                  zIndex: 1,
                }}>
                  <ChevronDown size={20} color={ORANGE} strokeWidth={2} />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
      <style>{`
        @media (max-width: 768px) {
          .flow-section { padding-top: 24px !important; }
          .flow-container { padding: 0 8px !important; }
          .flow-header { margin-bottom: 32px !important; }
          .flow-heading { font-size: 34px !important; white-space: nowrap; }
          .flow-lead { font-size: 16px !important; line-height: 1.8 !important; }
          .flow-step-item { margin-bottom: 18px !important; }
          .flow-card { padding: 22px !important; border-radius: 12px !important; margin-left: 6px; }
          .flow-card-inner-pc { display: none !important; }
          .flow-card-inner-sp { display: block !important; }
          .flow-timeline { width: 36px !important; }
          .flow-line { left: 17px !important; width: 3px !important; }
          .flow-dot { margin-top: 24px !important; }
          .flow-chevron { left: 56px !important; }
        }
      `}</style>
    </section>
  );
}
