import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: '赤字や債務超過でも売却できますか？',
    a: 'はい、可能です。赤字や債務超過の法人でも、事業価値や保有資産、取引先との関係性などを総合的に評価し、買い手を見つけることができます。まずはご相談ください。',
  },
  {
    q: '休眠法人でも買い取ってもらえますか？',
    a: '休眠法人でも売却実績があります。法人格・許認可・信用履歴などに価値が残っているケースが多く、再利用を望む買い手とマッチングできる場合があります。',
  },
  {
    q: '相談・査定は本当に無料ですか？',
    a: 'はい、完全無料です。相談・査定・買い手探しまで、成約前に費用は一切いただきません。成功報酬型のため、売却が成立した場合のみ手数料が発生します。',
  },
  {
    q: '情報が漏れることはありませんか？',
    a: '秘密保持契約（NDA）を締結した上で進めます。会社名・代表者名・財務情報など、すべての情報を厳重に管理します。従業員や取引先に知られずに進めることも可能です。',
  },
  {
    q: '売却までどのくらいの期間がかかりますか？',
    a: '法人の状況や条件によって異なりますが、最短数週間〜数ヶ月が目安です。スピード重視の場合はその旨をお伝えください。優先的に対応いたします。',
  },
  {
    q: '従業員や取引先はどうなりますか？',
    a: '売却後も雇用や取引関係を継続することを条件に交渉することが可能です。従業員・取引先の保護を優先した条件設定もサポートいたします。',
  },
];

export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="faq-section" style={{ background: '#ffffff', padding: '80px 0' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>

        {/* ヘッダー */}
        <div className="faq-header" style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{
            color: '#e8550a',
            fontWeight: 700,
            fontSize: '0.85rem',
            letterSpacing: '0.08em',
            marginBottom: 12,
          }}>
            FAQ
          </p>
          <h2 style={{
            fontWeight: 900,
            fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
            color: '#1a1a1a',
            lineHeight: 1.4,
            margin: 0,
          }}>
            よくある<span style={{ color: '#e8550a' }}>ご質問</span>
          </h2>
        </div>

        {/* アコーディオン */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                style={{
                  border: `1.5px solid ${isOpen ? '#e8550a' : '#f0e8e0'}`,
                  borderRadius: 12,
                  overflow: 'hidden',
                  transition: 'border-color 0.2s',
                }}
              >
                {/* 質問行 */}
                <button
                  className="faq-question-btn"
                  onClick={() => toggle(idx)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    padding: '20px 24px',
                    background: isOpen ? '#fff8f5' : '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'background 0.2s',
                  }}
                >
                  {/* Q バッジ */}
                  <span className="faq-q-badge" style={{
                    background: '#e8550a',
                    color: '#fff',
                    fontWeight: 900,
                    fontSize: '0.8rem',
                    borderRadius: 6,
                    width: 28,
                    height: 28,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    Q
                  </span>

                  <span style={{
                    flex: 1,
                    fontWeight: 700,
                    fontSize: '0.97rem',
                    color: '#1a1a1a',
                    lineHeight: 1.5,
                  }}>
                    {faq.q}
                  </span>

                  <ChevronDown
                    size={20}
                    color="#e8550a"
                    strokeWidth={2}
                    style={{
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s',
                    }}
                  />
                </button>

                {/* 回答エリア */}
                <div style={{
                  maxHeight: isOpen ? 400 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease',
                }}>
                  <div style={{
                    display: 'flex',
                    gap: 16,
                    padding: '0 24px 20px',
                    background: '#fff8f5',
                  }}>
                    {/* A バッジ */}
                    <span style={{
                      background: '#fff0ea',
                      color: '#e8550a',
                      fontWeight: 900,
                      fontSize: '0.8rem',
                      borderRadius: 6,
                      width: 28,
                      height: 28,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: '1.5px solid #f5d5c0',
                      marginTop: 2,
                    }}>
                      A
                    </span>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#444',
                      lineHeight: 1.8,
                      margin: 0,
                    }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .faq-section { padding: 60px 0 !important; }
          .faq-header { margin-bottom: 28px !important; }
          .faq-question-btn { padding: 16px 20px !important; }
          .faq-q-badge { width: 34px !important; height: 34px !important; font-size: 0.9rem !important; border-radius: 7px !important; }
        }
      `}</style>
    </section>
  );
}