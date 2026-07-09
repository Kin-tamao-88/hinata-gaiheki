import { MessageCircle } from 'lucide-react'

const cases = [
  {
    number: '01',
    property: '甲府市 S様邸',
    work: '外壁塗装',
    voice:
      '現地調査の時から細かく説明していただき、こちらの質問にも丁寧に答えてくださいました。工事中も毎日状況を教えていただけたので、とても安心してお任せできました。仕上がりも想像以上にきれいで大満足です。',
    voiceName: '甲府市 S様',
  },
  {
    number: '02',
    property: '昭和町 K様邸',
    work: '外壁塗装',
    voice:
      '見積もりの内容がとても分かりやすく、追加費用も一切なく安心できました。工事後も気になる点がないか声を掛けてくださり、最後まで誠実な対応だったのが印象に残っています。',
    voiceName: '昭和町 K様',
  },
]

export function CaseStudy() {
  return (
    <section id="case-study" className="relative overflow-hidden bg-cream py-12 md:py-20">
      {/* 背景テクスチャ */}
      <div
        aria-hidden="true"
        className="brush-cream-texture pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.06]"
      />

      <div className="relative mx-auto max-w-content px-4 md:px-6">
        {/* セクション見出し */}
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-2 text-[11px] font-bold tracking-[0.3em] text-navy/50 md:text-[12px]">
            WORKS
          </p>
          <div className="relative inline-block">
            <h2 className="text-[30px] font-black leading-tight tracking-tight text-navy md:text-[52px]">
              山梨のお客様施工事例
            </h2>
            <div
              aria-hidden="true"
              className="brush-orange-long pointer-events-none absolute -bottom-2 left-0 h-[8px] w-full opacity-75"
            />
          </div>
          <p className="mt-6 text-[14px] leading-relaxed text-ink-muted md:text-[15px]">
            レストレーションが手がけた外壁塗装の一部をご紹介します。
            <br className="hidden md:block" />
            丁寧な施工と誠実な対応で、多くのお客様にご満足いただいています。
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
                  className="tex-masking-tape my-8 h-[22px] w-full -rotate-[0.2deg] opacity-60 md:my-12"
                />
              )}

              {/* ケースカード */}
              <div className="relative overflow-hidden border border-gray-300/50 bg-white/92">
                {/* 紙質テクスチャ */}
                <div
                  aria-hidden="true"
                  className="brush-cream-texture pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.09]"
                />

                <div className="relative">
                  {/* 上部: 情報パネル + Before/After写真 */}
                  <div className="flex flex-col md:flex-row">

                    {/* 情報パネル
                        SP: flex横並び（数字左・物件名右）
                        PC: flex縦積み（左サイドバー） */}
                    <div className="flex items-end gap-3 border-b border-gray-200/60 p-5 md:w-[200px] md:flex-shrink-0 md:flex-col md:items-start md:gap-0 md:border-b-0 md:border-r md:border-gray-200/60 md:py-7 md:pl-7 md:pr-5">
                      {/* CASE番号 */}
                      <div className="md:mb-4">
                        <span className="block text-[10px] font-black tracking-[0.25em] text-brandorange">
                          CASE
                        </span>
                        <span className="block text-[54px] font-black leading-none tracking-tight text-navy md:text-[72px]">
                          {c.number}
                        </span>
                      </div>

                      {/* 物件情報 */}
                      <div>
                        <p className="text-[15px] font-black leading-snug text-navy md:text-[16px]">
                          {c.property}
                        </p>
                        <div className="mt-2">
                          <span className="bg-navy px-2.5 py-1 text-[10px] font-bold text-white">
                            {c.work}
                          </span>
                        </div>
                      </div>

                      {/* 施工内容 PCのみ左パネル下部に表示 */}
                      <div className="hidden md:mt-auto md:block md:pt-5">
                        <div className="relative mb-1.5 inline-block">
                          <span className="text-[11px] font-bold text-ink-muted">施工内容</span>
                          <div
                            aria-hidden="true"
                            className="tex-paint-stroke-yellow pointer-events-none absolute -bottom-0.5 left-0 h-[3px] w-full opacity-70"
                          />
                        </div>
                        <p className="text-[13px] font-medium text-navy">{c.work}</p>
                      </div>
                    </div>

                    {/* Before/After写真エリア */}
                    <div className="relative flex flex-1">
                      {/* Before */}
                      <div className="relative w-1/2 overflow-hidden">
                        <div className="aspect-[4/3] w-full bg-gray-300" />
                        <span className="absolute top-3 left-3 bg-navy px-2.5 py-1 text-[11px] font-bold text-white">
                          Before
                        </span>
                      </div>

                      {/* 矢印（写真中央） */}
                      <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brandorange md:h-11 md:w-11">
                          <svg
                            className="h-4 w-4 text-white md:h-5 md:w-5"
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
                      <div className="relative w-1/2 overflow-hidden">
                        <div className="aspect-[4/3] w-full bg-gray-300" />
                        <span className="absolute top-3 left-3 bg-brandorange px-2.5 py-1 text-[11px] font-bold text-white">
                          After
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 施工内容 SPのみ（写真直下） */}
                  <div className="flex items-center gap-3 border-t border-gray-200/60 px-5 py-3 md:hidden">
                    <div className="relative inline-block">
                      <span className="text-[11px] font-bold text-ink-muted">施工内容</span>
                      <div
                        aria-hidden="true"
                        className="tex-paint-stroke-yellow pointer-events-none absolute -bottom-0.5 left-0 h-[3px] w-full opacity-70"
                      />
                    </div>
                    <span className="text-[13px] font-medium text-navy">{c.work}</span>
                  </div>

                  {/* お客様の声 */}
                  <div className="flex items-start gap-4 border-t border-gray-200/60 px-5 py-5 md:px-7 md:py-6">
                    {/* ネイビー円アイコン */}
                    <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center rounded-full bg-navy">
                      <span className="text-[7px] font-bold leading-tight text-white">お客様</span>
                      <MessageCircle className="mt-0.5 h-4 w-4 text-white" strokeWidth={1.5} />
                      <span className="text-[7px] font-bold leading-tight text-white">の声</span>
                    </div>
                    {/* レビューテキスト */}
                    <div className="flex-1">
                      <p className="text-[14px] leading-relaxed text-ink md:text-[15px]">
                        {c.voice}
                      </p>
                      <p className="mt-2 text-right text-[12px] text-ink-muted">
                        （{c.voiceName}）
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 注記 */}
        <p className="mt-8 text-center text-[12px] text-ink-muted">
          ※建物の状態や使用する塗料によって仕上がりは異なります。まずは無料の現地調査・お見積りをご利用ください。
        </p>
      </div>
    </section>
  )
}
