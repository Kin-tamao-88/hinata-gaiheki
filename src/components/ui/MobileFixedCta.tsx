import { useState, useEffect } from 'react'
import { ChevronRight } from 'lucide-react'
import { trackConversion } from '../../utils/trackConversion'

export function MobileFixedCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const pain = document.getElementById('pain')
    if (!pain) return

    if (pain.getBoundingClientRect().top < window.innerHeight) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0 }
    )
    observer.observe(pain)
    return () => observer.disconnect()
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-white px-4 pb-4 pt-2 md:hidden">
      {/* 白ボックス＋緑縁（PC版と同じ構造） */}
      <div className="rounded-[12px] border border-[#06C755] bg-white px-5 py-3">
        {/* 上部テキスト */}
        <p className="mb-1.5 text-center text-[11px] font-bold text-[#06C755]">
          ＼ まずはお気軽にご相談を！ ／
        </p>
        {/* バッジ */}
        <div className="mb-2 flex justify-center">
          <span className="rounded-full border border-[#06C755] px-2 py-0.5 text-[11px] font-bold text-[#06C755]">
            気になる箇所を写真で送るだけでもOK!!
          </span>
        </div>
        {/* 緑ボタン */}
        <a
          href="https://line.me/ti/p/YEthVfb_JD"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex h-[56px] w-full items-center justify-center rounded-[8px] bg-[#06C755] transition-colors active:bg-[#05a647]"
          onClick={() => trackConversion('line_click', 'mobile_fixed')}
        >
          <div className="absolute left-4 flex h-[36px] w-[36px] items-center justify-center rounded-[7px] bg-white">
            <svg viewBox="0 0 32 30" width="22" height="20" fill="none">
              <path
                d="M16 1C8 1 1 6.8 1 14c0 6.4 5.6 11.8 13.2 13-.3 1.8-.9 4.2-1 4.5-.1.2.1.2.5 0 .5-.3 1.3-.8 13.2-7.7C29.6 21.3 31 17.8 31 14 31 6.8 24 1 16 1z"
                fill="#06C755"
              />
            </svg>
          </div>
          <span className="text-[16px] font-black text-white">LINEで無料相談する</span>
          <div className="absolute right-4 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white">
            <ChevronRight className="h-5 w-5 text-[#06C755]" strokeWidth={2.5} />
          </div>
        </a>
      </div>
    </div>
  )
}
