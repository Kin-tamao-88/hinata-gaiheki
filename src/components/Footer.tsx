import { Building2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-navy-dark py-12 text-white/70">
      <div className="container-lp flex flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-gold">
              <Building2 className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <span className="text-lg font-extrabold text-white">法人売却センター</span>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="#hero" className="hover:text-white">
              トップ
            </a>
            <a href="#contact" className="hover:text-white">
              無料査定
            </a>
            <a href="#" className="hover:text-white">
              運営会社
            </a>
            <a href="#" className="hover:text-white">
              プライバシーポリシー
            </a>
          </nav>
        </div>
        <div className="border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} 法人売却センター. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
