import logoImage from '../assets/logo/lr-logo.webp'

const NAV_LINKS = [
  { label: 'お悩みの方へ',   href: '#pain' },
  { label: '選ばれる理由',   href: '#strength' },
  { label: '施工事例',       href: '#case-study' },
  { label: '料金について',   href: '#price' },
  { label: '代表メッセージ', href: '#message' },
  { label: 'よくある質問',   href: '#faq' },
  { label: 'お問い合わせ',   href: '#contact' },
]

export function Footer() {
  return (
    <footer className="bg-white py-10 border-t border-gray-200">
      <div className="mx-auto flex max-w-content flex-col gap-8 px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <img src={logoImage} alt="レストレーション" className="h-[52px] w-auto flex-shrink-0" />
            <div className="leading-[1.65]">
              <p className="text-[13px] font-bold text-navy">山梨の外壁塗装専門店</p>
              <p className="text-[13px] font-bold text-navy">雨漏り、屋根修理・補強</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-ink-muted">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-navy">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t border-gray-200 pt-5 text-[12px] text-ink-muted">
          © {new Date().getFullYear()} レストレーション. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
