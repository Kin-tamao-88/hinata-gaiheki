import { ChevronRight, MessageCircle, CheckCircle2 } from 'lucide-react'

type Case = {
  number: string
  property: string
  tagsFull: string
  otherPrice: string
  ourPrice: string
  costDown: string
  reasons: string[]
  voice: string
  voiceName: string
}

const cases: Case[] = [
  {
    number: '01',
    property: '甲府市 S様邸',
    tagsFull: '第18年・戸建て・外壁塗装・屋根塗装',
    otherPrice: '148万円',
    ourPrice: '118万円',
    costDown: '30万円のコストダウンを実現！',
    reasons: [
      '自社施工で中間マージンを削減',
      '必要のない工事はご提案しません',
      '明細付き見積で安心・納得',
    ],
    voice:
      '他社では屋根のカバー工法をすすめられましたが、レストレーションさんは塗装で十分だと丁寧に説明してくれました。結果、費用も抑えられて仕上がりも大満足です。',
    voiceName: '（甲府市 S様）',
  },
  {
    number: '02',
    property: '昭和町 K様邸',
    tagsFull: '第12年・戸建て・外壁塗装',
    otherPrice: '123万円',
    ourPrice: '96万円',
    costDown: '27万円のコストダウンを実現！',
    reasons: [
      '外注に頼らないためコストを圧縮',
      '耐久性を考えた最適な塗料をご提案',
      '追加費用なしの明朗会計',
    ],
    voice:
      '見積もりの内訳がとても分かりやすく、追加費用の心配がないのが決め手になりました。職人さんの対応も丁寧で、安心してお任せできました。',
    voiceName: '（昭和町 K様）',
  },
  {
    number: '03',
    property: '南アルプス市 T様邸',
    tagsFull: '第20年・戸建て・外壁塗装・付帯部塗装',
    otherPrice: '135万円',
    ourPrice: '105万円',
    costDown: '30万円のコストダウンを実現！',
    reasons: [
      '自社職人による高品質施工',
      '現地調査を丁寧に行い無駄な工事をカット',
      '地域密着だからこその適正価格',
    ],
    voice:
      '他社よりも安くて不安もありましたが、職人さんの仕事がとても丁寧で、想像以上の仕上がりでした。ご近所にも自信を持っておすすめできます。',
    voiceName: '（南アルプス市 T様）',
  },
]

function getTags(tagsFull: string): string[] {
  const parts = tagsFull.split('・')
  if (parts.length <= 3) return parts
  return [parts[0], parts[1], parts.slice(2).join('・')]
}

export function CaseStudy() {
  return (
    <section id="case-study" className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-content px-6">
        <div className="mb-2 text-center text-[12px] tracking-[0.3em] text-[#374151]">
          WORKS
        </div>
        <h2 className="mb-2 text-center text-[36px] font-black tracking-[0.2em] text-navy md:text-[52px]">
          施 工 事 例
        </h2>
        <div className="mx-auto mb-5 h-[3px] w-12 bg-brandorange" />
        <p className="mb-12 text-center text-[15px] leading-relaxed text-[#374151] md:text-[16px]">
          レストレーションが手がけた施工事例の一部をご紹介します。
          <br />
          適正価格と確かな技術で、お客様の住まいを美しく生まれわらせます。
        </p>

        {cases.map((c, index) => (
          <div
            key={c.number}
            className={`flex flex-col gap-6 md:flex-row md:items-start md:gap-6 ${
              index > 0 ? 'mt-8 border-t border-gray-200 pt-8' : ''
            }`}
          >
            <div className="relative flex-shrink-0">
              <div className="w-[90px] bg-navy px-2 py-3 text-center text-white">
                <div className="text-[11px]">Case</div>
                <div className="text-[28px] font-black">{c.number}</div>
              </div>
              <div className="absolute -bottom-2 left-0 h-0 w-0 border-r-[8px] border-t-[8px] border-r-transparent border-t-navy" />
            </div>

            <div className="flex-1">
              <div className="text-[18px] font-black text-navy md:text-[20px]">
                {c.property}
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {getTags(c.tagsFull).map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-gray-100 px-2 py-0.5 text-[12px] text-[#374151]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-3">
                <div>
                  <div className="text-[13px] text-[#374151]">他社見積り</div>
                  <div className="text-[24px] font-bold text-[#374151] line-through decoration-2">
                    {c.otherPrice}
                  </div>
                </div>
                <ChevronRight className="h-6 w-6 text-gray-400" />
                <div>
                  <span className="inline-block rounded bg-brandorange px-2 py-0.5 text-[12px] font-bold text-white">
                    レストレーション見積り
                  </span>
                  <div className="text-[38px] font-black text-brandorange md:text-[44px]">
                    {c.ourPrice}
                  </div>
                </div>
              </div>

              <div className="mt-1 inline-block border border-brandorange bg-orange-50 px-3 py-1 text-[14px] font-bold text-brandorange">
                {c.costDown}
              </div>

              <div className="mt-3 mb-1 text-[12px] text-[#374151]">
                コストを抑えられた理由
              </div>
              <div className="flex flex-wrap gap-4">
                {c.reasons.map((reason) => (
                  <div key={reason} className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-brandorange" />
                    <span className="text-[13px] text-[#374151]">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex w-full flex-shrink-0 md:w-[420px]">
              <div className="relative aspect-[4/3] w-1/2 bg-gray-200">
                <span className="absolute top-2 left-2 bg-[#374151] px-2 py-0.5 text-[11px] font-bold text-white">
                  Before
                </span>
              </div>
              <div className="relative aspect-[4/3] w-1/2 bg-gray-200">
                <span className="absolute top-2 left-2 bg-brandorange px-2 py-0.5 text-[11px] font-bold text-white">
                  After
                </span>
              </div>
              <ChevronRight className="absolute top-1/2 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-brandorange" />
            </div>

            <div className="w-full flex-shrink-0 md:w-[220px]">
              <div className="flex items-center gap-1">
                <MessageCircle className="h-4 w-4 text-navy" />
                <span className="text-[13px] font-bold text-navy">お客様の声</span>
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-[#374151]">
                {c.voice}
              </p>
              <p className="mt-3 text-right text-[12px] text-[#374151]">
                {c.voiceName}
              </p>
            </div>
          </div>
        ))}

        <p className="mt-8 text-center text-[12px] text-[#374151]">
          ※上記は一例です。建物の状態や使用する塗料によって価格は変動します。まずは無料の現地調査・お見積りをご利用ください。
        </p>
      </div>
    </section>
  )
}
