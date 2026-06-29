import heroAnder from '../../assets/icons/hero-ander.png';

const ORANGE = '#e8550a';

export function UrgencyBanner() {
  return (
    <section
      className="urgency-banner"
      style={{
        position: 'relative',
        backgroundImage: `url(${heroAnder})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 35%',
        padding: '88px 40px',
        textAlign: 'center',
      }}
    >
      {/* オーバーレイ */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(10, 20, 40, 0.82)',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 860, margin: '0 auto' }}>

        {/* PC見出し */}
        <h2 className="urgency-heading-pc" style={{
          fontWeight: 800,
          fontSize: 42,
          color: '#ffffff',
          lineHeight: 1.5,
          margin: '0 0 28px',
        }}>
          売却市場が動いている<span style={{ color: ORANGE }}>今だからこそ</span>、<br />
          法人価値を確認する<span style={{ color: ORANGE }}>ベストタイミング</span>です。
        </h2>

        {/* SP見出し */}
        <h2 className="urgency-heading-sp" style={{
          display: 'none',
          fontWeight: 800,
          fontSize: 25,
          color: '#ffffff',
          lineHeight: 1.65,
          margin: '0 0 20px',
          letterSpacing: '0.02em',
        }}>
          売却市場が動いている<br />
          <span style={{ color: ORANGE }}>今だからこそ</span>、<br />
          法人価値を確認する<br />
          <span style={{ color: ORANGE }}>ベストタイミング</span>です。
        </h2>

        {/* PCサブ */}
        <p className="urgency-sub-pc" style={{
          fontWeight: 500,
          fontSize: 18,
          color: 'rgba(255,255,255,0.88)',
          lineHeight: 1.9,
          margin: 0,
        }}>
          売却を決める必要はありません。<br />
          まずは現在の価値だけ、<span style={{ color: ORANGE }}>無料</span>でご確認ください。
        </p>

        {/* SPサブ */}
        <p className="urgency-sub-sp" style={{
          display: 'none',
          fontWeight: 500,
          fontSize: 15.5,
          color: 'rgba(255,255,255,0.88)',
          lineHeight: 1.9,
          margin: 0,
        }}>
          売却を決める必要はありません。<br />
          まずは現在の価値だけ、<br />
          <span style={{ color: ORANGE }}>無料</span>でご確認ください。
        </p>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .urgency-banner { padding: 56px 24px !important; }
          .urgency-heading-pc { display: none !important; }
          .urgency-heading-sp { display: block !important; }
          .urgency-sub-pc { display: none !important; }
          .urgency-sub-sp { display: block !important; }
        }
      `}</style>
    </section>
  );
}
