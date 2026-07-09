import reasonPc from '../../assets/sections/reason-pc.png'
import reasonSp from '../../assets/sections/reason-sp.png'

export function Strength() {
  return (
    <section id="strength" className="relative overflow-hidden bg-cream py-6 md:py-10">
      {/* 背景テクスチャ */}
      <div
        aria-hidden="true"
        className="tex-cream-board pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.18]"
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-4 md:px-8">
        <picture>
          <source media="(min-width: 768px)" srcSet={reasonPc} />
          <img
            src={reasonSp}
            alt="レストレーションが選ばれる3つの理由"
            className="w-full rounded-[6px] border border-[#e6ded0] md:rounded-[10px]"
          />
        </picture>

        {/* 画像下補足テキスト */}
        <p className="mt-4 text-center text-[13px] leading-relaxed text-ink-muted md:mt-5 md:text-[14px]">
          山梨密着15年・自社施工一貫体制だからこそ実現できる、安心の3つの強みです。
        </p>
      </div>
    </section>
  )
}
