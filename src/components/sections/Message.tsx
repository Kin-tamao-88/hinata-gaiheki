import profileImg from '../../assets/message/hinata-profile-cropped.jpg'

export function Message() {
  return (
    <section id="message" className="relative overflow-hidden bg-[#f7f3ea] py-14 md:pt-20 md:pb-10">
      {/* セクション背景テクスチャ: C-2感 15〜20% */}
      <div
        aria-hidden="true"
        className="tex-cream-board pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.12]"
      />
      <div
        aria-hidden="true"
        className="tex-paint-noise pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.06]"
      />
      <div
        aria-hidden="true"
        className="tex-concrete-dust pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.04]"
      />

      <div className="relative mx-auto max-w-content px-4 md:px-6">

        {/* ===== 上段: テキスト(60%) + 写真(40%) ===== */}
        {/* SP: 縦積み（テキスト → 写真）/ PC: 横並び */}
        <div className="flex flex-col md:flex-row md:items-start">

          {/* 左: テキスト列 60% */}
          <div className="md:w-[60%] md:pb-14 md:pr-12 md:pt-2">

            {/* 小見出し + オレンジブラシ下線 */}
            <div className="relative mb-3 inline-block">
              <span className="block text-[18px] font-bold text-navy md:text-[23px]">
                レストレーションの想い
              </span>
              <div className="absolute -bottom-1 left-0 h-[4px] w-[88%] bg-brandorange" />
            </div>

            {/* メイン見出し: C-2ハイライト + PC 2行固定 / SP 3行固定 */}
            <h2 className="mt-4 text-[31px] font-black leading-[1.4] tracking-tight text-navy md:mt-5 md:text-[50px] md:leading-[1.32]">
              {/* 1行目: PC・SP 共通 */}
              <span className="block">大切な住まいを、</span>
              {/*
                2行目 PC: 「誠実な仕事で守りたい。」
                2行目 SP: 「誠実な仕事で」
                3行目 SP: 「守りたい。」
              */}
              <span className="block">
                {/* 「誠実な仕事」: C-2 黄色ブラシハイライト + オレンジ文字 */}
                <span className="relative inline-block">
                  <div
                    aria-hidden="true"
                    className="tex-paint-stroke-yellow pointer-events-none absolute bottom-[0.08em] left-[-5%] z-0 h-[42%] w-[110%] opacity-[0.42]"
                  />
                  <span className="relative z-10 text-brandorange">誠実な仕事</span>
                </span>
                で
                {/* SP: block で「守りたい。」を3行目へ / PC: inline で同行に続ける */}
                守りたい。
              </span>
            </h2>

            {/* 理念本文: 3箇所のみオレンジ強調 */}
            <div className="mt-5 max-w-[620px] space-y-5 text-[15px] leading-[1.9] text-ink md:mt-7 md:text-[16px]">
              <p>
                私たちは、山梨の皆様の大切な住まいを守るため、一軒一軒に誠実に向き合うことを何よりも大切にしています。
              </p>
              <p>
                <span className="font-bold text-brandorange">必要な工事だけ</span>をご提案し、無駄な工事は勧めません。
                <span className="font-bold text-brandorange">地域密着</span>だからこそ、迅速な対応ときめ細かいアフターフォローを大切にし、工事が終わった後も、
                <span className="font-bold text-brandorange">末永く安心して</span>お付き合いいただける関係を目指します。
              </p>
            </div>
          </div>

          {/* 右: 日向さんの写真（黒帯除去済みクロップ版）*/}
          {/* SP: h-340px 全幅 / PC: h-580px 40%幅 */}
          <div className="relative mt-8 h-[340px] overflow-hidden md:mt-0 md:h-[580px] md:w-[40%]">
            <img
              src={profileImg}
              alt="代表 日向貴志"
              className="h-full w-full object-cover object-[center_38%]"
            />
            {/* 左端フェード: セクション背景色へ自然につなぐ（人物に被らない範囲） */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#f7f3ea] to-transparent"
            />
          </div>
        </div>

        {/* ===== 代表メッセージレター ===== */}
        {/* SP: 写真の下へ通常配置 / PC: 上段へ10〜20px重ねる */}
        <div className="relative z-10 mt-6 md:-mt-5">
          <div className="relative overflow-hidden rounded-[6px] border border-navy/[0.10] bg-[#f6f0e5]">

            {/* カード背景テクスチャ */}
            <div
              aria-hidden="true"
              className="tex-cream-board pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.18]"
            />
            <div
              aria-hidden="true"
              className="tex-paint-noise pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.05]"
            />
            <div
              aria-hidden="true"
              className="tex-concrete-dust pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.02]"
            />

            {/* 左上: 養生テープアクセント */}
            <div
              aria-hidden="true"
              className="tex-masking-tape pointer-events-none absolute -top-2 left-5 h-[22px] w-[88px] -rotate-[6deg] opacity-[0.68]"
            />

            {/* カードコンテンツ */}
            <div className="relative px-6 pb-8 pt-9 md:px-12 md:pb-12 md:pt-10">

              {/* 「代表メッセージ」見出し + 黄色ライン */}
              <div className="mb-6 inline-block">
                <div className="relative inline-block">
                  <h3 className="text-[24px] font-bold text-navy md:text-[29px]">
                    代表メッセージ
                  </h3>
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-[4px] w-full bg-chip opacity-[0.85]"
                  />
                </div>
              </div>

              {/* レター本文: 手書き風 / PCは用紙幅で収める */}
              <div className="space-y-4 font-handwritten text-[17px] leading-[1.85] tracking-tight text-ink md:max-w-[880px] md:tracking-normal md:text-[18px] md:leading-[1.8]">
                <p>はじめまして。</p>
                <p>レストレーション代表の日向です。</p>
                <p>
                  山梨で15年以上、住宅メンテナンスに
                  <br className="md:hidden" />
                  携わり、多くのお住まいのお悩みと
                  <br className="md:hidden" />
                  向き合ってきました。
                </p>
                <p>よくいただくのが、「工事は高額になりそう…」「まだ大丈夫かな…」というご相談です。</p>
                <p>小さな傷みも、放置すると大きな修繕につながり、結果として費用も大きくなることがあります。</p>
                <p>
                  一方で、早めにご相談いただければ、
                  <br className="md:hidden" />
                  最低限の補修だけで済むケースも
                  <br className="md:hidden" />
                  少なくありません。
                </p>
                <p>
                  現地調査・お見積りから施工まで、
                  <br className="md:hidden" />
                  私が責任を持って対応いたします。
                </p>
                <p>
                  どんな小さなことでも、お気軽に
                  <br className="md:hidden" />
                  ご相談ください。
                </p>
              </div>

              {/* 署名: 右下に添える（SP・PC共通） */}
              <div className="mt-4 flex justify-end md:mt-5">
                <div>
                  <p className="font-handwritten text-[13px] leading-none text-navy/70 md:text-[15px]">
                    レストレーション 代表
                  </p>
                  <div className="relative mt-2 inline-block md:mt-3">
                    <p className="font-handwritten text-[34px] leading-tight text-navy md:text-[46px]">
                      日向 哲也
                    </p>
                    <div
                      aria-hidden="true"
                      className="absolute -bottom-1 left-0 h-[4px] w-full bg-chip opacity-[0.85]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
