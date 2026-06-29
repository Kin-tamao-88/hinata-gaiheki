import { useState } from 'react';
import { Mail, Phone, CheckCircle } from 'lucide-react';

const trustTexts = ['最短即日対応', '秘密厳守・NDA締結', '相談・査定無料'];

export function FinalCta() {
  const [form, setForm] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // TODO: Supabase連携
    setSubmitted(true);
  };

  return (
    <section id="contact" className="fct-section" style={{ background: '#fbf7f3', padding: '80px 0' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 8px' }}>

        {/* ヘッダー */}
        <div className="fct-header" style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{
            color: '#e8550a',
            fontWeight: 700,
            fontSize: '0.85rem',
            letterSpacing: '0.08em',
            marginBottom: 12,
          }}>
            CONTACT
          </p>
          <h2 className="fct-heading" style={{
            fontWeight: 900,
            fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
            color: '#1a1a1a',
            lineHeight: 1.4,
            margin: '0 0 16px',
          }}>
            まずは<span style={{ color: '#e8550a' }}>無料で相談</span>してみませんか？
          </h2>
          <p className="fct-subtext" style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
            秘密厳守・相談無料で、あなたの状況に合わせた最適なご提案をいたします。
            <br />
            しつこい営業は一切いたしません。
          </p>

          {/* PC: 横並び区切り線 */}
          <div className="fct-trust-pc" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 24,
          }}>
            {trustTexts.map((text, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center' }}>
                {i > 0 && <span style={{ color: '#c4bdb5', margin: '0 14px', fontWeight: 400, fontSize: 14 }}>｜</span>}
                <span style={{ fontSize: 15, fontWeight: 600, color: '#1a2744' }}>{text}</span>
              </span>
            ))}
          </div>

          {/* SP: テキスト縦リスト */}
          <div className="fct-trust-sp" style={{ display: 'none', marginTop: 14 }}>
            {trustTexts.map((text, i) => (
              <p key={i} style={{
                fontSize: 14,
                fontWeight: 600,
                color: '#1a2744',
                lineHeight: 1.9,
                margin: i < trustTexts.length - 1 ? '0 0 2px' : 0,
                textAlign: 'center',
              }}>{text}</p>
            ))}
          </div>
        </div>

        {/* フォームカード */}
        {!submitted ? (
          <div className="fct-form-card" style={{
            background: '#ffffff',
            borderRadius: 20,
            padding: 'clamp(24px, 5vw, 48px)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            border: '1px solid #f0e8e0',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="fct-row">
                <div>
                  <label style={labelStyle}>法人名 <span style={{ color: '#e8550a' }}>*</span></label>
                  <input name="company" value={form.company} onChange={handleChange} placeholder="株式会社〇〇" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>お名前 <span style={{ color: '#e8550a' }}>*</span></label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="山田 太郎" style={inputStyle} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="fct-row">
                <div>
                  <label style={labelStyle}>電話番号 <span style={{ color: '#e8550a' }}>*</span></label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="090-0000-0000" style={inputStyle} type="tel" />
                </div>
                <div>
                  <label style={labelStyle}>メールアドレス</label>
                  <input name="email" value={form.email} onChange={handleChange} placeholder="example@mail.com" style={inputStyle} type="email" />
                </div>
              </div>

              <div>
                <label style={labelStyle}>ご相談内容（任意）</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="法人の状況・売却のご希望など、お気軽にご記入ください。"
                  rows={4}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }}
                />
              </div>

              <button
                onClick={handleSubmit}
                style={{
                  width: '100%',
                  background: '#e8550a',
                  color: '#fff',
                  fontWeight: 900,
                  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                  border: 'none',
                  borderRadius: 10,
                  padding: '18px 32px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                  transition: 'background 0.18s',
                }}
                onMouseOver={(e) => ((e.currentTarget as HTMLButtonElement).style.background = '#c94208')}
                onMouseOut={(e) => ((e.currentTarget as HTMLButtonElement).style.background = '#e8550a')}
              >
                <Mail size={20} strokeWidth={2} />
                無料で査定を申し込む
                <span style={{ fontSize: '1.3em', lineHeight: 1 }}>›</span>
              </button>

              <p style={{ textAlign: 'center', fontSize: '0.78rem', color: '#aaa', margin: 0 }}>
                簡単60秒入力・しつこい営業は一切いたしません
              </p>
            </div>
          </div>
        ) : (
          <div style={{
            background: '#ffffff',
            borderRadius: 20,
            padding: '60px 40px',
            textAlign: 'center',
            border: '1px solid #f0e8e0',
          }}>
            <CheckCircle size={56} color="#e8550a" strokeWidth={1.5} style={{ margin: '0 auto 20px' }} />
            <h3 style={{ fontWeight: 900, fontSize: '1.5rem', color: '#1a1a1a', marginBottom: 12 }}>
              お問い合わせありがとうございます
            </h3>
            <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.8 }}>
              内容を確認の上、担当者よりご連絡いたします。
              <br />
              通常1営業日以内にご返信いたします。
            </p>
          </div>
        )}

        {/* 電話番号 */}
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: 8 }}>
            お電話でのご相談はこちら（受付 9:00〜18:00）
          </p>
          <a
            href="tel:03-XXXX-XXXX"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              color: '#e8550a',
              fontWeight: 900,
              fontSize: 'clamp(1.4rem, 4vw, 2rem)',
              textDecoration: 'none',
              letterSpacing: '0.02em',
            }}
          >
            <Phone size={28} strokeWidth={2} />
            03-XXXX-XXXX
          </a>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .fct-row { grid-template-columns: 1fr !important; }
          .fct-section { padding: 40px 0 !important; }
          .fct-section > div { padding-left: 16px !important; padding-right: 16px !important; }

          /* ヘッダー余白削減 */
          .fct-header { margin-bottom: 32px !important; }
          .fct-heading { margin-bottom: 6px !important; }

          /* 説明文 */
          .fct-subtext { font-size: 16px !important; line-height: 1.8 !important; }

          /* SP: 横リスト非表示 → 縦リスト表示 */
          .fct-trust-pc { display: none !important; }
          .fct-trust-sp { display: block !important; }

          /* フォームカード上部padding削減 */
          .fct-form-card { padding: 16px 20px 28px !important; }
        }
      `}</style>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontWeight: 700,
  fontSize: '0.85rem',
  color: '#1a1a1a',
  marginBottom: 6,
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  border: '1.5px solid #e0d8d0',
  borderRadius: 8,
  padding: '12px 14px',
  fontSize: '0.95rem',
  color: '#1a1a1a',
  background: '#fafafa',
  outline: 'none',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
};