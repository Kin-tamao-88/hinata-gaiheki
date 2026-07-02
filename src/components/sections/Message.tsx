import bgPaintSubtle from '../../assets/background/bg-paint-subtle.png'

export function Message() {
  return (
    <section id="message" className="relative overflow-hidden bg-white py-14 md:py-20">
      <img
        src={bgPaintSubtle}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-white/50" />
      <div className="relative mx-auto max-w-content px-6">
        <div className="md:grid md:grid-cols-2 md:gap-0 md:items-stretch">
          <div className="aspect-[4/3] w-full bg-gray-200 md:aspect-auto md:h-full" />

          <div className="px-6 py-8 md:px-10 md:py-12">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-[1px] flex-1 bg-gray-300" />
              <span className="text-[13px] tracking-widest text-[#374151]">
                代表の想い
              </span>
              <div className="h-[1px] flex-1 bg-gray-300" />
            </div>

            <h2 className="text-[22px] font-black leading-snug text-navy md:text-[34px]">
              大切なお住まいだからこそ、
            </h2>
            <h2 className="mb-2 text-[22px] font-black leading-snug text-brandorange md:text-[34px]">
              必要な工事を、必要な分だけ。
            </h2>

            <div className="mb-8 h-[3px] w-16 bg-brandorange" />

            <div className="space-y-4 text-[15px] leading-[1.75] text-[#374151] md:text-[16px]">
              <p>
                はじめまして。レストレーション代表の日向です。
                <br />
                山梨で住宅メンテナンスを始めて15年以上、
                <br />
                多くのお住まいのお悩みと向き合ってきました。
              </p>

              <p className="border-l-4 border-brandorange bg-[#FFF8F5] py-2 pl-4">
                その中で特に多いのが、
                <br />
                「工事は高額になりそう…」
                <br />
                「気になっているけど、まだ大丈夫かな…」
                <br />
                というご相談です。
              </p>

              <p>
                ですが、住宅も人の身体と同じように、小さな傷みを放置すると、
                後になって大きな修繕が必要になり、結果として費用も大きくなってしまうことがあります。
                一方で、早めにご相談いただければ、最低限の補修だけで済むケースも少なくありません。
              </p>

              <p className="border-l-4 border-brandorange bg-[#FFF8F5] py-2 pl-4">
                実際に施工後のお客様からは、
                <br />
                「想像していたより費用を抑えられました。」
                <br />
                「早めに相談して良かったです。」というお声をいただくことも多くあります。
              </p>

              <p>
                私は外注任せにはせず、現地調査・お見積りから施工まで責任を持って対応しております。
              </p>

              <p className="mt-2 text-[15px] font-bold text-brandorange md:text-[16px]">
                大切なお住まいだからこそ、必要な工事を、必要な分だけ。
              </p>

              <p>
                まずはお住まいの状態を知ることから始めてみませんか。
                <br />
                どんな小さなお悩みでも、お気軽にご相談ください。
              </p>
            </div>

            <div className="mt-8 text-right">
              <div className="text-[13px] text-[#374151]">レストレーション</div>
              <div className="text-[16px] font-bold text-navy">
                代表　日向 翔太
              </div>
              <div className="text-[18px] font-light italic text-[#374151]">
                Hinata Shota
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
