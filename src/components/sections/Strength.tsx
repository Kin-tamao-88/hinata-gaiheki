import { Zap } from 'lucide-react'

type Reason = {
  number: string
  titleLine1: string
  titleLine2: string
  body: string
}

const reasons: Reason[] = [
  {
    number: '01',
    titleLine1: '地域密着だから',
    titleLine2: '迅速対応',
    body: '急なトラブル・当日対応もご相談ください。',
  },
  {
    number: '02',
    titleLine1: '現地調査から施工まで',
    titleLine2: '一貫対応',
    body: '外注など頼らないことで、低コスト高クオリティを提供',
  },
  {
    number: '03',
    titleLine1: '明朗安心の',
    titleLine2: '適正価格',
    body: '追加費用一切ナシ お見積り書以外の請求はありません。',
  },
]

export function Strength() {
  return (
    <section id="strength" className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-content px-6">
        <div className="mb-2 flex items-center justify-center gap-2 text-center text-[13px] font-bold tracking-widest text-navy">
          <Zap className="h-4 w-4 text-chip" />
          レストレーションが
          <Zap className="h-4 w-4 text-chip" />
        </div>
        <h2 className="text-center text-[32px] font-black text-navy md:text-[44px]">
          選ばれる<span className="text-brandorange">3</span>つの理由
        </h2>
        <p className="mt-4 mb-8 text-center text-[15px] leading-relaxed text-[#374151] md:text-[16px]">
          山梨の住まいを守り続けて15年。
          <br />
          地域密着だからこそできる、安心のサービスをお約束します。
        </p>
        <div className="flex flex-col gap-10">
          {reasons.map((reason, index) => {
            const isEven = index % 2 === 1
            return (
              <div
                key={reason.number}
                className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="aspect-[4/3] w-full bg-gray-200 md:w-[55%]" />
                <div className="w-full py-6 px-8 md:w-[45%] md:px-10">
                  <div className="mb-0 text-[56px] font-black leading-none text-gray-200 md:text-[88px]">
                    {reason.number}
                  </div>
                  <div className="-mt-4 mb-4 ml-1 h-8 border-l-2 border-gray-300" />
                  <div className="text-[20px] font-bold text-navy md:text-[24px]">
                    {reason.titleLine1}
                  </div>
                  <div className="text-[20px] font-black text-brandorange md:text-[24px]">
                    {reason.titleLine2}
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#374151] md:text-[16px]">
                    {reason.body}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
