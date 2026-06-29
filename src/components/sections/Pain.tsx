import iconGraphDown from "../../assets/icons/icon-graph-down-jcao.png"
import iconDebt from "../../assets/icons/icon-debt-jcao.png"
import iconSleeping from "../../assets/icons/icon-sleeping-jcao.png"
import iconTax from "../../assets/icons/icon-tax-jcao.png"
import iconElderly from "../../assets/icons/icon-elderly-jcao.png"
import iconSuccessor from "../../assets/icons/icon-successor-jcao.png"

const ORANGE = "#e8550a"
const NAVY = "#1a2744"
const DARK = "#1a1a1a"
const BG = "#fff8f5"

// 上段3つ：大タイトル強調スタイル
const topItems = [
  {
    icon: iconGraphDown,
    title: "赤字法人",
    desc: "JCAO独自の評価基準で査定しますので、\nまったく問題ないことが多いです。",
    iconSize: 62,
    titleSize: "2.6rem",
  },
  {
    icon: iconDebt,
    title: "債務超過",
    desc: "負債が資産を上回る状態でも、再生ノウハウを持つ買い手にお繋ぎすることが可能です。",
    iconSize: 62,
    titleSize: "2.2rem",
  },
  {
    icon: iconSleeping,
    title: "休眠法人",
    desc: "休眠で価値が下がる事は滅多にありません。\n状況整理後、適切な対応をご提案します。",
    iconSize: 62,
    titleSize: "2.4rem",
  },
]

// 下段3つ：標準スタイル
const bottomItems = [
  {
    icon: iconTax,
    title: "税金滞納",
    desc: "滞納がある場合でもご相談ください。売却可能なプランをご提案します。",
  },
  {
    icon: iconElderly,
    title: "代表者高齢",
    desc: "事業承継にお悩みの法人も、\nスムーズな売却をサポートします。",
  },
  {
    icon: iconSuccessor,
    title: "後継者不在",
    desc: "従業員や取引先の雇用・取引を\n守りながら売却が可能です。",
  },
]

export function Pain() {
  return (
    <section className="pain-section" style={{ background: BG, padding: "64px clamp(16px, 4vw, 40px)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* ヘッダー */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="pain-header-badge" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "14px" }}>
            <span style={{ width: "32px", height: "1px", background: ORANGE }} />
            <span style={{ fontSize: "13px", fontWeight: 700, color: ORANGE, letterSpacing: "0.1em" }}>
              赤字・債務・休眠法人もご相談可能
            </span>
            <span style={{ width: "32px", height: "1px", background: ORANGE }} />
          </div>
          <h2 className="pain-title" style={{ fontSize: "2.8rem", fontWeight: 900, color: DARK, lineHeight: 1.25, margin: "0 0 10px" }}>
            こんな法人でも<br />
            <span style={{ color: ORANGE }}>売却できる可能性</span>があります
          </h2>
          <p className="pain-desc" style={{ fontSize: "1rem", color: "#555", lineHeight: 1.85, margin: 0 }}>
            一般的に売却が難しいとされる法人でも、<br className="pain-sp-br" />当社の独自ネットワークとノウハウにより、<br />
            多くの法人の売却を実現してきました。<br className="pain-sp-br" />まずはお気軽にご相談ください。
          </p>
        </div>

        {/* 上段：大タイトル3枚 */}
        <div className="pain-top" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "16px" }}>
          {topItems.map((item) => (
            <div key={item.title} style={{
              background: "#ffffff",
              border: "1px solid rgba(232,85,10,0.15)",
              padding: "32px 24px 28px",
            }}>
              <div className="pain-top-head" style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                <img src={item.icon} alt={item.title} style={{ width: `${item.iconSize * 1.8}px`, height: `${item.iconSize * 1.8}px`, objectFit: "contain", mixBlendMode: "multiply" as const, flexShrink: 0 }} />
                <h3 style={{
                  fontSize: item.titleSize,
                  fontWeight: 900,
                  color: ORANGE,
                  margin: 0,
                  lineHeight: 1.1,
                  whiteSpace: "nowrap",
                }}>
                  {item.title}
                </h3>
              </div>
              <p style={{ fontSize: "0.88rem", color: "#444", lineHeight: 1.8, margin: 0, whiteSpace: "pre-line", fontWeight: 500 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 下段：標準3枚 */}
        <div className="pain-bottom" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: "40px" }}>
          {bottomItems.map((item) => (
            <div key={item.title} className="pain-bottom-card" style={{
              background: "#ffffff",
              border: "1px solid rgba(232,85,10,0.1)",
              padding: "24px 16px",
            }}>
              <div className="pain-bottom-head" style={{ display: "flex", gap: "14px", alignItems: "center", marginBottom: "8px" }}>
                <img src={item.icon} alt={item.title} style={{ width: "72px", height: "72px", objectFit: "contain", mixBlendMode: "multiply" as const, flexShrink: 0 }} />
                <h3 style={{ fontSize: "1.1rem", fontWeight: 900, color: NAVY, margin: 0 }}>
                  {item.title}
                </h3>
              </div>
              <p style={{ fontSize: "0.85rem", color: "#444", lineHeight: 1.8, margin: 0, fontWeight: 500, whiteSpace: "pre-line" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
      <style>{`
        .pain-sp-br { display: none; }
        @media (max-width: 768px) {
          .pain-sp-br { display: inline; }
          .pain-top { grid-template-columns: 1fr !important; gap: 6px !important; margin-bottom: 8px !important; }
          .pain-bottom { grid-template-columns: 1fr !important; gap: 5px !important; margin-bottom: 0 !important; }
          .pain-title { font-size: 1.6rem !important; }
          .pain-header-badge { flex-wrap: nowrap !important; white-space: nowrap !important; font-size: 0.75rem !important; }
          .pain-header-badge span:first-child,
          .pain-header-badge span:last-child { width: 20px !important; }
          section.pain-section { padding: 40px 16px 20px !important; }
          .pain-section > div { max-width: 100% !important; }
          .pain-desc { font-size: 0.85rem !important; text-align: center !important; }

          /* 上3枚・下3枚：同サイズに統一 */
          .pain-top > div { padding: 10px 12px !important; }
          .pain-top-head { gap: 8px !important; margin-bottom: 5px !important; }
          .pain-top-head img { width: 65px !important; height: 65px !important; }
          .pain-top h3 { font-size: 1.2rem !important; }
          .pain-top > div > p { font-size: 0.9rem !important; font-weight: 600 !important; line-height: 1.6 !important; }
          .pain-bottom-card { padding: 10px 12px !important; }
          .pain-bottom-head { gap: 8px !important; margin-bottom: 5px !important; }
          .pain-bottom-head img { width: 65px !important; height: 65px !important; }
          .pain-bottom-card h3 { font-size: 1.2rem !important; }
          .pain-bottom-card p { font-size: 0.9rem !important; font-weight: 600 !important; line-height: 1.6 !important; }
        }
      `}</style>
    </section>
  )
}
