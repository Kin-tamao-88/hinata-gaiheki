import { Mail } from 'lucide-react'
import { trackConversion } from '../../utils/trackConversion'

export function MobileFixedCta() {
  return (
    <a
      href="https://line.me/ti/p/YEthVfb_JD"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-2 bg-brandorange px-4 py-4 text-[16px] font-black text-white md:hidden"
      onClick={() => trackConversion('line_click', 'mobile_fixed')}
    >
      <Mail className="h-[18px] w-[18px]" strokeWidth={2} />
      無料お見積り・お問い合わせはこちら
    </a>
  )
}
