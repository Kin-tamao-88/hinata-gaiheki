import { Home } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-navy-dark py-12 text-white/70">
      <div className="mx-auto flex max-w-content flex-col gap-8 px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-brandorange">
              <Home className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <span className="text-lg font-extrabold text-white">レストレーション</span>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="#pain" className="hover:text-white">
              トップ
            </a>
            <a href="#case-study" className="hover:text-white">
              施工事例
            </a>
            <a href="#price" className="hover:text-white">
              料金
            </a>
            <a href="#contact" className="hover:text-white">
              お問い合わせ
            </a>
          </nav>
        </div>
        <div className="border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} レストレーション. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
