import { CheckCircle, MessageCircle, ClipboardList, Lightbulb } from 'lucide-react';
import personIt from '../../assets/people/person-it.png';
import personConstruction from '../../assets/people/person-construction.png';
import personDormant from '../../assets/people/person-dormant.png';

const ORANGE = '#e8550a';

const cases = [
  {
    id: 'CASE 01',
    title: '建設業（内装工事業）',
    beforeLabel: '他社提示額',
    before: '140万円',
    afterLabel: 'JCAO成約額',
    after: '700万円',
    beforeFontSize: { pc: '2rem', sp: '1.8rem' },
    afterFontSize: { pc: '3.8rem', sp: '2.8rem' },
    situation: '借入が多く、他社提示額はわずか140万円と低く評価されていた。',
    reason: '取引先との契約関係やブランド価値を評価し、高額売却を実現。',
    voiceLabel: 'オーナー様の声',
    voiceOwner: '建設会社経営',
    voiceAge: '50代 男性',
    voiceText: '知人の会社が引き取ってくれる話をくれたのですが、JCAOを知って期待せずに相談してみました。負債が多いのに高く売れると思っていませんでした。本当に感謝しております。',
    img: personConstruction,
    imgAlt: '建設会社経営 50代 男性',
    isMain: true,
  },
  {
    id: 'CASE 02',
    title: '休眠法人（不動産管理業）',
    beforeLabel: '解散予定',
    before: '0円',
    afterLabel: 'JCAO成約額',
    after: '285万円',
    beforeFontSize: { pc: '1.6rem', sp: '1.5rem' },
    afterFontSize: { pc: '2.8rem', sp: '2.4rem' },
    situation: '事業を撤退してから4年間放置していた休眠法人でした。',
    reason: '会社としての実績や資産を評価し、再利用価値を引き出していただきました。',
    voiceLabel: 'オーナー様の声',
    voiceOwner: '不動産管理会社',
    voiceAge: '50代 男性',
    voiceText: '解散費用もかかると思っていましたが、思わぬ臨時収入になり、非常に助かりました。',
    img: personDormant,
    imgAlt: '不動産管理会社 50代 男性',
    isMain: false,
  },
  {
    id: 'CASE 03',
    title: 'IT企業（システム開発業）',
    beforeLabel: '他社査定',
    before: '買取不可',
    afterLabel: 'JCAO成約額',
    after: '120万円',
    beforeFontSize: { pc: '1.6rem', sp: '1.5rem' },
    afterFontSize: { pc: '2.8rem', sp: '2.4rem' },
    situation: '赤字決算が続き借入の返済も滞っており、誰に相談しても法人破産を推奨され困っていました。',
    reason: 'JCAO依頼後、3日後には買い手様を見つけていただきました。資本投下で存続価値があるとのことで成立しました。',
    voiceLabel: 'オーナー様の声',
    voiceOwner: 'IT企業経営',
    voiceAge: '30代 男性',
    voiceText: '他社では「価値がない」と言われて諦めていましたが、想定以上の金額で売却できて感謝しています。',
    img: personIt,
    imgAlt: 'IT企業経営 30代 男性',
    isMain: false,
  },
];

export function CaseStudy() {
  const [main, ...subs] = cases;

  return (
    <section className="case-section" style={{ background: '#faf7f4', padding: '80px 0 12px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 8px' }}>

        {/* セクションヘッダー */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
            <span style={{ width: 40, height: 1, background: ORANGE, display: 'block' }} />
            <span style={{ color: ORANGE, fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em' }}>実際のご成約事例</span>
            <span style={{ width: 40, height: 1, background: ORANGE, display: 'block' }} />
          </div>
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', color: '#1a1a1a', lineHeight: 1.4, margin: 0 }}>
            多くの法人様が、<span style={{ color: ORANGE }}>解決への一歩</span>を踏み出しています
          </h2>
        </div>

        {/* 上段：CASE 01 大カード（PC） */}
        <div className="case-main" style={{
          background: '#ffffff',
          border: '1px solid #e8e0d8',
          padding: '36px 40px',
          marginBottom: 24,
          display: 'grid',
          gridTemplateColumns: '55% 45%',
          gap: 48,
          alignItems: 'start',
        }}>
          {/* 左：数字エリア（PC） */}
          <div className="case-main-left">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <span style={{ background: ORANGE, color: '#fff', fontWeight: 900, fontSize: '0.85rem', padding: '4px 10px' }}>{main.id}</span>
              <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#1a1a1a' }}>{main.title}</span>
            </div>

            {/* PC: 横矢印レイアウト */}
            <div className="case-price-row-pc" style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20 }}>
              <div style={{ flexShrink: 0 }}>
                <p style={{ fontSize: '0.8rem', color: '#686868', marginBottom: 6, fontWeight: 500 }}>{main.beforeLabel}</p>
                <p style={{ fontWeight: 900, fontSize: main.beforeFontSize.pc, color: '#686868', lineHeight: 1, whiteSpace: 'nowrap' }}>{main.before}</p>
              </div>
              <span style={{ color: ORANGE, fontSize: '2.1rem', fontWeight: 900, flexShrink: 0 }}>→</span>
              <div style={{ flexShrink: 0 }}>
                <p style={{ fontSize: '0.8rem', color: ORANGE, marginBottom: 6, fontWeight: 600 }}>{main.afterLabel}</p>
                <p style={{ fontWeight: 900, fontSize: main.afterFontSize.pc, color: ORANGE, lineHeight: 1, whiteSpace: 'nowrap' }}>{main.after}</p>
              </div>
            </div>

            <div style={{ borderTop: '1px solid #e8e0d8', paddingTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <CheckCircle size={16} color={ORANGE} strokeWidth={2} style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <p style={{ fontWeight: 750, fontSize: '1rem', color: ORANGE, margin: '0 0 7px' }}>法人の状況</p>
                  <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.6, margin: 0 }}>{main.situation}</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <CheckCircle size={16} color={ORANGE} strokeWidth={2} style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <p style={{ fontWeight: 750, fontSize: '1rem', color: ORANGE, margin: '0 0 7px' }}>売却できた理由</p>
                  <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.6, margin: 0 }}>{main.reason}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 右：体験談（PC） */}
          <div style={{ paddingTop: '25px' }}>
            <div className="case-voice-row" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <img src={main.img} alt={main.imgAlt} style={{ width: 104, height: 104, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', flexShrink: 0 }} />
              <div>
                <p style={{ fontWeight: 750, fontSize: '0.85rem', color: ORANGE, margin: '0' }}>
                  {main.voiceLabel}　{main.voiceOwner} / {main.voiceAge}
                </p>
              </div>
            </div>
            <p style={{ fontSize: '1rem', color: '#333', lineHeight: 2, fontWeight: 500, margin: 0, borderLeft: '3px solid #e8550a', paddingLeft: '12px', backgroundImage: 'repeating-linear-gradient(transparent, transparent calc(2em - 1px), #f0e8e0 calc(2em - 1px), #f0e8e0 2em)', backgroundSize: '100% 2em' }}>
              {main.voiceText.split('。').filter(Boolean).map((s, i, arr) => (
                <span key={i}>{s}。{i < arr.length - 1 ? <br /> : null}</span>
              ))}
            </p>
          </div>

          {/* SP専用：CASE 01 縦レイアウト */}
          <div className="case-main-sp">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <span style={{ background: ORANGE, color: '#fff', fontWeight: 900, fontSize: '0.85rem', padding: '4px 10px' }}>{main.id}</span>
              <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#1a1a1a' }}>{main.title}</span>
            </div>

            {/* SP: 縦矢印レイアウト */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, marginBottom: 20 }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '0.8rem', color: '#686868', marginBottom: 4, fontWeight: 500 }}>{main.beforeLabel}</p>
                <p style={{ fontWeight: 900, fontSize: main.beforeFontSize.sp, color: '#686868', lineHeight: 1 }}>{main.before}</p>
              </div>
              <span style={{ color: ORANGE, fontSize: '40px', lineHeight: 1, fontWeight: 900 }}>↓</span>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '0.8rem', color: ORANGE, marginBottom: 4, fontWeight: 600 }}>{main.afterLabel}</p>
                <p style={{ fontWeight: 900, fontSize: main.afterFontSize.sp, color: ORANGE, lineHeight: 1 }}>{main.after}</p>
              </div>
            </div>

            {/* SP: 人物写真 + 会社名/年代 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <img src={main.img} alt={main.imgAlt} style={{ width: 92, height: 92, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top' }} />
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontWeight: 700, fontSize: '0.9rem', color: '#444', margin: 0 }}>{main.voiceOwner}</p>
                <p style={{ fontWeight: 600, fontSize: '0.85rem', color: '#686868', margin: 0 }}>{main.voiceAge}</p>
              </div>
            </div>

            {/* SP: オーナー様の声 */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                <MessageCircle size={20} color={ORANGE} strokeWidth={2} />
                <p style={{ fontWeight: 700, fontSize: '0.9rem', color: ORANGE, margin: 0 }}>{main.voiceLabel}</p>
              </div>
              <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.7, margin: 0, borderLeft: '3px solid #e8550a', paddingLeft: '8px' }}>
                {main.voiceText}
              </p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #e8e0d8', margin: '0 0 16px' }} />

            {/* SP: 法人の状況 */}
            <div style={{ marginBottom: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                <ClipboardList size={20} color={ORANGE} strokeWidth={2} />
                <p style={{ fontWeight: 700, fontSize: '0.9rem', color: ORANGE, margin: 0 }}>法人の状況</p>
              </div>
              <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.6, margin: 0 }}>{main.situation}</p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #e8e0d8', margin: '0 0 16px' }} />

            {/* SP: 売却できた理由 */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                <Lightbulb size={20} color={ORANGE} strokeWidth={2} />
                <p style={{ fontWeight: 700, fontSize: '0.9rem', color: ORANGE, margin: 0 }}>売却できた理由</p>
              </div>
              <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.6, margin: 0 }}>{main.reason}</p>
            </div>
          </div>
        </div>

        {/* 下段：CASE 02 / CASE 03 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }} className="case-cards-bottom">
          {subs.map((c) => (
            <div key={c.id} style={{ background: '#ffffff', border: '1px solid #e8e0d8', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>

              {/* PC表示エリア */}
              <div className="case-sub-pc">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <span style={{ background: ORANGE, color: '#fff', fontWeight: 900, fontSize: '0.85rem', padding: '4px 10px' }}>{c.id}</span>
                  <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1a1a1a' }}>{c.title}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginBottom: 14 }}>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '0.75rem', color: '#686868', marginBottom: 4, fontWeight: 500 }}>{c.beforeLabel}</p>
                    <p style={{ fontWeight: 900, fontSize: c.beforeFontSize.pc, color: '#686868', lineHeight: 1, whiteSpace: 'nowrap' }}>{c.before}</p>
                  </div>
                  <span style={{ color: ORANGE, fontSize: '2.8rem', fontWeight: 900, flexShrink: 0 }}>→</span>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '0.75rem', color: ORANGE, marginBottom: 4, fontWeight: 600 }}>{c.afterLabel}</p>
                    <p style={{ fontWeight: 900, fontSize: c.afterFontSize.pc, color: ORANGE, lineHeight: 1, whiteSpace: 'nowrap' }}>{c.after}</p>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid #e8e0d8', paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <CheckCircle size={14} color={ORANGE} strokeWidth={2} style={{ marginTop: 2, flexShrink: 0 }} />
                    <div>
                      <p style={{ fontWeight: 750, fontSize: '1rem', color: ORANGE, margin: '0 0 7px' }}>法人の状況</p>
                      <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.6, margin: 0 }}>{c.situation}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <CheckCircle size={14} color={ORANGE} strokeWidth={2} style={{ marginTop: 2, flexShrink: 0 }} />
                    <div>
                      <p style={{ fontWeight: 750, fontSize: '1rem', color: ORANGE, margin: '0 0 7px' }}>売却できた理由</p>
                      <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.8, margin: 0 }}>{c.reason}</p>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <img src={c.img} alt={c.imgAlt} style={{ width: 50, height: 50, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', flexShrink: 0 }} />
                  <div>
                    <p style={{ fontWeight: 750, fontSize: '1rem', color: ORANGE, margin: '0 0 2px' }}>
                      {c.voiceLabel}　{c.voiceOwner} / {c.voiceAge}
                    </p>
                    <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.7, margin: 0, borderLeft: '3px solid #e8550a', paddingLeft: '12px' }}>{c.voiceText}</p>
                  </div>
                </div>
              </div>

              {/* SP表示エリア */}
              <div className="case-sub-sp">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <span style={{ background: ORANGE, color: '#fff', fontWeight: 900, fontSize: '0.85rem', padding: '4px 10px' }}>{c.id}</span>
                  <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#1a1a1a' }}>{c.title}</span>
                </div>

                {/* SP: 縦矢印 */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, marginBottom: 20 }}>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '0.8rem', color: '#686868', marginBottom: 4, fontWeight: 500 }}>{c.beforeLabel}</p>
                    <p style={{ fontWeight: 900, fontSize: c.beforeFontSize.sp, color: '#686868', lineHeight: 1 }}>{c.before}</p>
                  </div>
                  <span style={{ color: ORANGE, fontSize: '40px', lineHeight: 1, fontWeight: 900 }}>↓</span>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '0.8rem', color: ORANGE, marginBottom: 4, fontWeight: 600 }}>{c.afterLabel}</p>
                    <p style={{ fontWeight: 900, fontSize: c.afterFontSize.sp, color: ORANGE, lineHeight: 1 }}>{c.after}</p>
                  </div>
                </div>

                {/* SP: 人物写真 + 会社名/年代 */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                  <img src={c.img} alt={c.imgAlt} style={{ width: 92, height: 92, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top' }} />
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ fontWeight: 700, fontSize: '0.9rem', color: '#444', margin: 0 }}>{c.voiceOwner}</p>
                    <p style={{ fontWeight: 600, fontSize: '0.85rem', color: '#686868', margin: 0 }}>{c.voiceAge}</p>
                  </div>
                </div>

                {/* SP: オーナー様の声 */}
                <div style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                    <MessageCircle size={20} color={ORANGE} strokeWidth={2} />
                    <p style={{ fontWeight: 700, fontSize: '0.9rem', color: ORANGE, margin: 0 }}>{c.voiceLabel}</p>
                  </div>
                  <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.7, margin: 0, borderLeft: '3px solid #e8550a', paddingLeft: '8px' }}>
                    {c.voiceText}
                  </p>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid #e8e0d8', margin: '0 0 16px' }} />

                {/* SP: 法人の状況 */}
                <div style={{ marginBottom: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                    <ClipboardList size={20} color={ORANGE} strokeWidth={2} />
                    <p style={{ fontWeight: 700, fontSize: '0.9rem', color: ORANGE, margin: 0 }}>法人の状況</p>
                  </div>
                  <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.6, margin: 0 }}>{c.situation}</p>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid #e8e0d8', margin: '0 0 16px' }} />

                {/* SP: 売却できた理由 */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                    <Lightbulb size={20} color={ORANGE} strokeWidth={2} />
                    <p style={{ fontWeight: 700, fontSize: '0.9rem', color: ORANGE, margin: 0 }}>売却できた理由</p>
                  </div>
                  <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.6, margin: 0 }}>{c.reason}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', fontSize: '0.78rem', color: '#aaa', marginTop: 20 }}>
          ※上記は一例であり、すべての法人が同様の金額で売却できることを保証するものではありません。
        </p>

      </div>

      <style>{`
        /* PC: 左右カラム表示 */
        .case-main-left { display: block; }
        .case-main > div:last-child { padding-top: 25px; }
        .case-main-sp { display: none; }
        .case-sub-pc { display: block; }
        .case-sub-sp { display: none; }

        @media (max-width: 768px) {
          .case-section { padding: 48px 0 !important; }
          .case-section > div { padding-left: 16px !important; padding-right: 16px !important; }

          /* PC左右カラムを非表示 */
          .case-main { display: block !important; padding: 20px 16px !important; }
          .case-main-left { display: none !important; }
          .case-main > div:nth-child(2) { display: none !important; }

          /* SP専用レイアウトを表示 */
          .case-main-sp { display: block !important; }
          .case-main > div:last-child { padding-top: 0 !important; }

          .case-cards-bottom { grid-template-columns: 1fr !important; }
          .case-cards-bottom > div { padding: 20px 16px !important; }

          /* サブカードSP切替 */
          .case-sub-pc { display: none !important; }
          .case-sub-sp { display: block !important; }
        }
      `}</style>
    </section>
  );
}
