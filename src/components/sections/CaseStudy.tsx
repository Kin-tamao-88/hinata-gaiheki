import case01Before from '../../assets/works/case01-before.jpg'
import customerMale from '../../assets/sections/customer-male.png'
import customerFemale from '../../assets/sections/customer-female.png'
import case01After from '../../assets/works/case01-after.jpg'
import case02Before from '../../assets/works/case02-before.jpg'
import case02After from '../../assets/works/case02-after.jpg'

type Seg = { text: string; hl?: boolean }
type VoiceLine = Seg[]

const cases: Array<{
  number: string
  property: string
  work: string
  before: string
  after: string
  beforeObjPos: string
  afterObjPos: string
  beforeTransform: string
  afterTransform: string
  voiceLines: VoiceLine[]
  voiceName: string
  avatar: string
}> = [
  {
    number: '01',
    property: '甲府市 S様邸',
    work: '外壁塗装',
    before: case01Before,
    after: case01After,
    // Before は右寄り撮影 → 左寄りトリミング＋微小右回転で正面に近づける
    beforeObjPos: 'object-[35%_50%]',
    afterObjPos: 'object-center',
    beforeTransform: 'rotate-[0.8deg] scale-[1.03]',
    afterTransform: '',
    voiceLines: [
      [
        { text: '現地調査の時から細かく説明していただき、' },
        { text: 'こちらの質問にも丁寧に答えてくださいました', hl: true },
        { text: '。' },
      ],
      [
        { text: '工事中も毎日状況を教えていただけたので、' },
        { text: 'とても安心してお任せできました', hl: true },
        { text: '。' },
      ],
      [
        { text: '仕上がりも想像以上に' },
        { text: 'きれいで大満足', hl: true },
        { text: 'です。' },
      ],
    ],
    voiceName: '甲府市 S様',
    avatar: customerFemale,
  },
  {
    number: '02',
    property: '昭和町 K様邸',
    work: '外壁塗装',
    before: case02Before,
    after: case02After,
    beforeObjPos: 'object-center',
    afterObjPos: 'object-center',
    beforeTransform: '',
    afterTransform: '',
    voiceLines: [
      [
        { text: '見積もりの内容がとても分かりやすく、' },
        { text: '追加費用も一切なく安心できました', hl: true },
        { text: '。' },
      ],
      [
        { text: '工事後も気になる点がないか声を掛けてくださり、' },
        { text: '最後まで誠実な対応', hl: true },
        { text: 'だったのが印象に残っています。' },
      ],
    ],
    voiceName: '昭和町 K様',
    avatar: customerMale,
  },
]

export function CaseStudy() {
  return (
    <section id="case-study" className="relative overflow-hidden bg-cream py-8 md:py-20">
      {/* セクション背景テクスチャ: C-2感 15〜20%に抑える */}
      <div
        aria-hidden="true"
        className="tex-cream-board pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.12]"
      />
      <div
        aria-hidden="true"
        className="tex-paint-noise pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.08]"
      />
      <div
        aria-hidden="true"
        className="tex-concrete-dust pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.05]"
      />

      <div className="relative mx-auto max-w-content px-3 md:px-5">

        {/* 見出し: グレー刷毛跡なし・オレンジブラシのみ */}
        <div className="mb-12 text-center md:mb-16">
          <div className="relative inline-block">
            <h2 className="leading-tight tracking-tight text-navy">
              <span className="mb-1 block text-[13px] font-bold tracking-widest text-navy/60 md:text-[14px]">
                山梨のお客様
              </span>
              <span className="block text-[44px] font-black md:text-[72px]">
                施工事例
              </span>
            </h2>
            <div className="absolute -bottom-2 left-0 h-[6px] w-full bg-brandorange" />
          </div>
          <p className="mt-6 text-[14px] leading-relaxed text-ink-muted md:text-[15px]">
            実際にレストレーションが手がけた施工事例の一部をご紹介します。
            <br className="hidden md:block" />
            丁寧な施工で、多くのお客様にご満足いただいています。
          </p>
        </div>

        {/* 施工事例一覧 */}
        <div>
          {cases.map((c, index) => (
            <div key={c.number}>
              {/* 養生テープセパレーター（2件目以降） */}
              {index > 0 && (
                <div
                  aria-hidden="true"
                  className="tex-masking-tape my-10 h-[22px] w-full -rotate-[0.2deg] opacity-55 md:my-14"
                />
              )}

              {/* ケースブロック */}
              <div className="relative overflow-hidden bg-white/20">
                <div
                  aria-hidden="true"
                  className="tex-cream-board pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.14]"
                />
                <div
                  aria-hidden="true"
                  className="tex-paint-noise pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.05]"
                />

                <div className="relative">
                  {/* 情報パネル + 写真: PC=横並び / SP=縦積み */}
                  <div className="flex flex-col md:flex-row">

                    {/* 左情報パネル */}
                    <div className="relative overflow-hidden border-b border-navy/10 md:w-[170px] md:flex-shrink-0 md:border-b-0 md:border-r md:border-navy/10">
                      <div
                        aria-hidden="true"
                        className="tex-cream-board pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.10]"
                      />
                      <div className="relative flex items-end gap-4 px-4 py-4 md:flex-col md:items-start md:gap-0 md:py-6 md:pl-5 md:pr-4">

                        {/* CASE + 番号 */}
                        <div className="md:mb-3">
                          <span className="block text-[10px] font-black tracking-widest text-brandorange">
                            CASE
                          </span>
                          <span className="num-ink-grain block text-[44px] font-black leading-none tracking-tight text-navy md:text-[60px]">
                            {c.number}
                          </span>
                        </div>

                        {/* 市町村: 主役 / 外壁塗装: 補足ラベル */}
                        <div>
                          <p className="text-[16px] font-black leading-snug text-navy md:text-[19px]">
                            {c.property}
                          </p>
                          <div className="mt-2">
                            <span className="border border-navy/25 px-2.5 py-1 text-[12px] font-bold text-navy/65">
                              {c.work}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Before / After 写真エリア: SP=縦積み / PC=横並び */}
                    <div className="relative flex flex-1 flex-col md:flex-row">
                      {/* 写真エリア下端のオレンジブラシ */}
                      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-[4px] bg-brandorange opacity-35" />

                      {/* Before */}
                      <div className="relative w-full overflow-hidden md:w-1/2">
                        <img
                          src={c.before}
                          alt={`${c.property} 施工前`}
                          className={`aspect-[4/3] w-full object-cover ${c.beforeObjPos} ${c.beforeTransform}`}
                        />
                        <span className="absolute left-0 top-0 bg-navy px-3 py-1.5 text-[11px] font-bold tracking-wider text-white">
                          Before
                        </span>
                      </div>

                      {/* SP: 縦向き矢印（下向き）*/}
                      <div className="flex items-center justify-center py-2 md:hidden">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brandorange">
                          <svg
                            className="h-4 w-4 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </div>
                      </div>

                      {/* PC: 横向き矢印（右向き・absolute中央） */}
                      <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:flex">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brandorange">
                          <svg
                            className="h-5 w-5 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </div>
                      </div>

                      {/* After */}
                      <div className="relative w-full overflow-hidden md:w-1/2">
                        <img
                          src={c.after}
                          alt={`${c.property} 施工後`}
                          className={`aspect-[4/3] w-full object-cover ${c.afterObjPos} ${c.afterTransform}`}
                        />
                        <span className="absolute left-0 top-0 bg-brandorange px-3 py-1.5 text-[11px] font-bold tracking-wider text-white">
                          After
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* お客様の声: 紙質感メッセージカード */}
                  <div className="px-4 pb-4 pt-4 md:px-5 md:pb-5 md:pt-4">
                    <div className="relative overflow-hidden rounded-[8px] border border-navy/[0.12] bg-[#f4ede0]">
                      {/* cream-board を主背景テクスチャに */}
                      <div
                        aria-hidden="true"
                        className="tex-cream-board pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.20]"
                      />
                      <div
                        aria-hidden="true"
                        className="tex-paint-noise pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.06]"
                      />
                      <div
                        aria-hidden="true"
                        className="tex-concrete-dust pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.03]"
                      />
                      {/* 右上テープ: 控えめサイズ */}
                      <div
                        aria-hidden="true"
                        className="tex-masking-tape pointer-events-none absolute right-3 -top-1 h-[22px] w-[80px] rotate-[3deg] opacity-[0.70]"
                      />

                      {/* コンテンツ */}
                      <div className="relative px-5 py-5 md:px-7 md:py-6">
                        {/*
                          SP: flex-col → アイコン行（上段）→ 本文（下段）
                          PC: flex-row → アイコン | 本文（横並び）
                        */}
                        <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-5">

                          {/* 人物アイコン + ラベル */}
                          <div className="flex flex-shrink-0 flex-col items-center gap-1.5">
                            <div className="h-14 w-14 overflow-hidden rounded-full md:h-16 md:w-16">
                              <img
                                src={c.avatar}
                                alt={c.voiceName}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                            <span className="text-[12px] font-bold text-navy">{c.voiceName}</span>
                          </div>

                          {/* 本文: SP=全幅 / PC=flex-1 */}
                          <div className="flex-1">
                            <div className="text-[15px] leading-[1.8] text-ink md:text-[16px] md:leading-[1.85]">
                              {c.voiceLines.map((line, li) => (
                                <p key={li} className="mb-2 last:mb-0">
                                  {line.map((seg, si) =>
                                    seg.hl ? (
                                      <span key={si} className="font-bold text-brandorange">
                                        {seg.text}
                                      </span>
                                    ) : (
                                      <span key={si}>{seg.text}</span>
                                    )
                                  )}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
