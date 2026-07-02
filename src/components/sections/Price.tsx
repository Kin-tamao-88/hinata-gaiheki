import {
  Home,
  ClipboardCheck,
  BadgeJapaneseYen,
  Info,
  Phone,
  Mail,
  ChevronRight,
} from 'lucide-react'

const features = [
  {
    icon: ClipboardCheck,
    title: '明細付きのお見積り',
    body: '工事項目を分かりやすくご説明します。',
  },
  {
    icon: BadgeJapaneseYen,
    title: '追加費用0円',
    body: 'お見積り書以外の費用は一切いただきません。',
  },
  {
    icon: Home,
    title: '必要な工事だけご提案',
    body: '不要な工事を無理におすすめすることはありません。',
  },
]

export function Price() {
  return (
    <>
      <section id="price" className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-content px-6">
          <div className="md:grid md:grid-cols-2 md:items-start md:gap-16">
            <div>
              <Home className="mb-3 h-8 w-8 text-[#B8860B]" />
              <h2 className="mb-2 text-[28px] font-black text-navy md:text-[36px]">
                適正価格へのこだわり
              </h2>
              <div className="mb-6 h-[3px] w-16 bg-brandorange" />
              <p className="mb-4 text-[20px] font-bold leading-snug text-navy md:text-[24px]">
                安さではなく、
                <span className="text-brandorange">納得できるお見積り</span>
                を。
              </p>
              <p className="mb-8 text-[15px] leading-relaxed text-[#374151] md:text-[16px]">
                外壁塗装は建物の状態によって必要な工事が異なります。
                <br />
                レストレーションでは現地調査を行い、必要な工事だけを
                <br />
                明確なお見積りでご提案。
                <br />
                お見積り後の追加費用もありませんので、安心してご相談いただけます。
              </p>

              {features.map((feature) => (
                <div key={feature.title} className="mb-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-navy">
                    <feature.icon className="h-5 w-5 text-[#B8860B]" />
                  </div>
                  <div>
                    <div className="mb-1 text-[17px] font-bold text-navy">
                      {feature.title}
                    </div>
                    <div className="mb-1 h-[2px] w-12 bg-brandorange" />
                    <div className="text-[14px] text-[#374151] md:text-[15px]">
                      {feature.body}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 md:mt-0">
              <div className="rounded-none border border-gray-200">
                <div className="bg-navy py-3 text-center text-[15px] font-bold text-white">
                  参考価格
                </div>

                <div className="border-b border-gray-200 px-6 py-8">
                  <div className="mb-3 flex items-center gap-2">
                    <Home className="h-6 w-6 text-navy" />
                    <span className="text-[14px] text-navy">30坪住宅</span>
                  </div>
                  <div>
                    <span className="text-[44px] font-black text-brandorange md:text-[52px]">
                      60〜90
                    </span>
                    <span className="ml-1 text-[18px] font-bold text-navy">
                      万円程度
                    </span>
                  </div>
                  <div className="mt-2 h-[3px] w-16 bg-brandorange" />
                </div>

                <div className="px-6 py-8">
                  <div className="mb-3 flex items-center gap-2">
                    <Home className="h-6 w-6 text-navy" />
                    <span className="text-[14px] text-navy">40坪住宅</span>
                  </div>
                  <div>
                    <span className="text-[44px] font-black text-brandorange md:text-[52px]">
                      80〜120
                    </span>
                    <span className="ml-1 text-[18px] font-bold text-navy">
                      万円程度
                    </span>
                  </div>
                  <div className="mt-2 h-[3px] w-16 bg-brandorange" />
                </div>
              </div>

              <div className="mt-6 flex items-start gap-3 bg-[#F5F2EC] px-5 py-4">
                <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-navy" />
                <p className="text-[13px] leading-relaxed text-[#374151]">
                  ※建物の劣化状況・使用する塗料により金額は変動します。
                  <br />
                  まずは
                  <span className="font-bold text-brandorange">
                    「無料の現地調査・お見積り」
                  </span>
                  をご利用ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto flex max-w-content flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2 text-[18px] font-bold text-navy md:text-[20px]">
              <Phone className="h-5 w-5 text-navy" />
              現地調査・お見積りは無料です。
            </div>
            <div className="text-[14px] text-[#374151]">
              しつこい営業は一切いたしませんので、お気軽にご相談ください。
            </div>
          </div>
          <button className="flex w-full items-center justify-center gap-2 rounded bg-brandorange px-8 py-4 text-[15px] font-bold text-white transition-colors hover:bg-brandorange-dark md:w-auto">
            <Mail className="h-4 w-4" />
            無料お見積り・お問い合わせはこちら
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </>
  )
}
