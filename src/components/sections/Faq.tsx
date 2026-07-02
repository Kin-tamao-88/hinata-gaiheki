import { useState } from 'react'
import { ChevronDown, PaintRoller } from 'lucide-react'
import bgPaintSubtle from '../../assets/background/bg-paint-subtle.png'

const faqs = [
  {
    q: '無料の現地調査・お見積りとは、具体的に何をしてもらえますか？',
    a: '専門スタッフが実際にお住まいの状態を確認し、必要な工事内容と費用を明確にしたお見積書をご提示します。調査・お見積りにかかる費用は一切いただきません。',
  },
  {
    q: '訪問営業や飛び込みの勧誘はありますか？',
    a: 'いいえ、しつこい訪問営業は一切行っておりません。お客様からのご相談・お問い合わせを起点に対応しております。',
  },
  {
    q: 'お見積り後に追加費用が発生することはありますか？',
    a: '基本的にございません。お見積り書に記載のない追加費用を請求することはございませんので、安心してご依頼いただけます。',
  },
  {
    q: '工事はどのくらいの期間がかかりますか？',
    a: '建物の規模や工事内容によって異なりますが、一般的な戸建て住宅の外壁塗装で約2週間程度が目安です。詳しい工期は現地調査時にご案内いたします。',
  },
  {
    q: '他社で見積りを取っていますが、相談だけでも大丈夫ですか？',
    a: 'もちろんです。他社のお見積り内容を拝見した上で、適正価格かどうかを客観的にアドバイスすることも可能です。お気軽にご相談ください。',
  },
  {
    q: '施工後の保証やアフターフォローはありますか？',
    a: 'はい、施工後も定期的な点検・アフターサポートを行っております。何か気になる点があれば、いつでもご連絡ください。',
  },
]

export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-20">
      <img
        src={bgPaintSubtle}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-white/50" />
      <div className="relative mx-auto max-w-content px-6">
        <div className="mb-2 flex items-center justify-center gap-2 text-center text-[13px] font-bold tracking-widest text-navy">
          <PaintRoller className="h-4 w-4 text-brandorange" />
          FAQ
        </div>
        <h2 className="mb-10 text-center text-[28px] font-black text-navy md:text-[40px]">
          よくある<span className="text-brandorange">ご質問</span>
        </h2>

        <div className="border-t border-gray-200">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div key={faq.q} className="border-b border-gray-200">
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center gap-4 py-5 text-left"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded bg-navy text-[14px] font-black text-white">
                    Q
                  </span>
                  <span className="flex-1 text-[15px] font-bold leading-relaxed text-navy md:text-[17px]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-brandorange transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="flex gap-4 bg-[#FFF8F5] px-4 py-5 md:px-6">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded border border-brandorange text-[14px] font-black text-brandorange">
                      A
                    </span>
                    <p className="text-[14px] leading-[1.9] text-[#374151] md:text-[15px]">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
