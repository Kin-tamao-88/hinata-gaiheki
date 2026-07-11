import { useState } from 'react'
import { ChevronDown, ChevronRight, HelpCircle, MessageCircle } from 'lucide-react'

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
    <>
      {/* ===== FAQ セクション ===== */}
      <section id="faq" className="relative overflow-hidden bg-[#f7f4ed] pb-10 pt-6 md:pt-10 md:pb-20">
        {/* bg-paint-subtle: 塗装ペーパー質感 */}
        <div
          aria-hidden="true"
          className="bg-paint-subtle pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.18]"
        />
        {/* C-2 クリームテクスチャ 15〜20% */}
        <div
          aria-hidden="true"
          className="tex-cream-board pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.10]"
        />
        <div
          aria-hidden="true"
          className="tex-paint-noise pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.05]"
        />

        <div className="relative mx-auto max-w-content px-4 md:px-6">

          {/* ---- 見出しブロック ---- */}
          <div className="mb-12 text-center md:mb-16">
            {/* アイコン + FAQ ラベル */}
            <div className="mb-3 flex items-center justify-center gap-2">
              <HelpCircle className="h-5 w-5 text-[#ef6b13]" strokeWidth={2} />
              <span className="text-[12px] font-bold tracking-[0.22em] text-navy/60">FAQ</span>
            </div>

            {/* メイン見出し + brush-yellow アンダーライン */}
            <div className="relative inline-block">
              <h2 className="relative z-10 text-[42px] font-black leading-tight tracking-tight text-navy md:text-[56px]">
                よくある<span className="text-[#ef6b13]">ご質問</span>
              </h2>
              {/* brush-yellow: top-full で文字の真下に配置（文字に被らない） */}
              <div
                aria-hidden="true"
                className="tex-paint-stroke-yellow pointer-events-none absolute left-1/2 top-full z-0 h-[20px] w-[260px] -translate-x-1/2 -translate-y-[2px]"
              />
            </div>

            {/* 説明文 */}
            <p className="mx-auto mt-8 max-w-[620px] text-[15px] leading-[1.9] text-slate-700 md:text-[16px]">
              よくいただくご質問をまとめました。
              <br className="hidden md:block" />
              その他のご不明点は、お気軽にお問い合わせください。
            </p>
          </div>

          {/* ---- FAQ カード ---- */}
          {/* max-w-1100px / 中央配置 */}
          <div className="relative mx-auto max-w-[1100px]">
            {/* マスキングテープ: カード左上から少し飛び出す */}
            <div
              aria-hidden="true"
              className="tex-masking-tape pointer-events-none absolute -left-2 -top-4 z-10 h-[26px] w-[88px] -rotate-[12deg] opacity-[0.72]"
            />

            {/* カード本体 */}
            <div className="relative overflow-hidden rounded-[20px] border border-black/[0.05] bg-[#fbfaf7]">
              {/* cream-board 紙質テクスチャ: 印刷物を台紙に貼った温度感 */}
              <div
                aria-hidden="true"
                className="tex-cream-board pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.20]"
              />

              <div className="relative">
                {faqs.map((faq, idx) => {
                  const isOpen = openIdx === idx
                  const isLast = idx === faqs.length - 1
                  return (
                    <div
                      key={faq.q}
                      className={isLast ? '' : 'border-b border-black/[0.12]'}
                    >
                      {/* 質問行 */}
                      <button
                        onClick={() => toggle(idx)}
                        className="flex min-h-14 w-full items-start gap-4 px-5 py-[28px] text-left md:items-center md:px-[34px]"
                      >
                        {/* Q アイコン: SP 40px / PC 44px / 角丸12px / #072b61 */}
                        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[12px] bg-[#072b61] text-[14px] font-bold text-white md:h-11 md:w-11 md:text-[15px]">
                          Q
                        </span>
                        {/* 質問テキスト: font-black / PC 23-25px / SP 18-20px */}
                        <span className="flex-1 text-[14px] font-black leading-[1.45] text-navy md:text-[20px] md:leading-[1.6]">
                          {faq.q}
                        </span>
                        {/* 矢印: 右端 / #ef6b13 / 開閉で180度回転 / transition 0.25s */}
                        <ChevronDown
                          className={`mt-1 h-6 w-6 flex-shrink-0 text-[#ef6b13] transition-transform duration-[250ms] md:mt-0 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          strokeWidth={2.5}
                        />
                      </button>

                      {/* 回答: padding-top 22px / PC 18px / SP 16px / #404040 / line-height 2.0 */}
                      {isOpen && (
                        <div className="px-5 pb-[28px] md:px-[34px]">
                          <div className="pl-[56px] md:pl-[60px]">
                            <p className="pt-[22px] text-[16px] leading-[2.0] text-[#404040] md:text-[18px]">
                              {faq.a}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA 帯 (FAQ直後) ===== */}
      <div className="relative overflow-hidden bg-navy py-10 md:py-14">
        {/* navy-paint-wall テクスチャ: C-2感 強め */}
        <div
          aria-hidden="true"
          className="tex-navy-wall pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.68]"
        />
        {/* concrete-dust: 微細インク粒感 */}
        <div
          aria-hidden="true"
          className="tex-concrete-dust pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.06]"
        />
        {/* paint-noise 10〜15% */}
        <div
          aria-hidden="true"
          className="tex-paint-noise pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.12]"
        />
        {/* 上端ブラシ: ページ端まで自然に伸ばす */}
        <div
          aria-hidden="true"
          className="brush-navy pointer-events-none absolute inset-x-0 top-0 h-[40px] mix-blend-overlay opacity-[0.38]"
        />
        {/* 下端ブラシ */}
        <div
          aria-hidden="true"
          className="brush-navy pointer-events-none absolute inset-x-0 bottom-0 h-[40px] mix-blend-overlay opacity-[0.38]"
        />

        {/* コンテンツ */}
        <div className="relative px-4 text-center">
          {/* 1行目: 小さめ */}
          <p className="mb-2 text-[14px] font-bold tracking-wide text-white/70 md:text-[15px]">
            ご相談・お見積りは無料です！
          </p>
          {/* 2行目: 大きめ・白 */}
          <p className="mb-6 text-[22px] font-black text-white md:mb-7 md:text-[32px]">
            お気軽にご相談ください
          </p>
          {/* CTAボタン: 高さ72px / 角丸14px / #ef6b13 / 横幅SP100% / PC auto */}
          <a
            href="#contact"
            className="mx-auto flex h-[64px] w-full items-center justify-center gap-3 rounded-[14px] bg-[#ef6b13] px-10 text-[14px] font-bold text-white transition-colors hover:bg-[#d45e0e] md:h-[64px] md:w-auto md:text-[15px]"
          >
            <MessageCircle className="h-5 w-5 flex-shrink-0" strokeWidth={2} />
            無料でお見積りを依頼する
            <ChevronRight className="h-5 w-5 flex-shrink-0" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </>
  )
}
