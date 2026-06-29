import { Mail } from 'lucide-react';

export function MobileFixedCta() {
  return (
    <>
      <a
        href="#contact"
        className="mobile-fixed-cta"
        style={{
          display: 'none',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: '#e8550a',
          color: '#ffffff',
          padding: '16px',
          fontWeight: 900,
          fontSize: '1rem',
          textDecoration: 'none',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <Mail size={18} strokeWidth={2} />
        無料で法人価値を診断する
      </a>
      <style>{`
        @media (max-width: 768px) {
          .mobile-fixed-cta { display: flex !important; }
          body { padding-bottom: 60px; }
        }
      `}</style>
    </>
  );
}
