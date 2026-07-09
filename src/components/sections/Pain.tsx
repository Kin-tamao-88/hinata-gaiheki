import painPc from '../../assets/sections/pain-pc.png'
import painSp from '../../assets/sections/pain-sp.png'

export function Pain() {
  return (
    <section id="pain" className="relative overflow-hidden bg-cream py-6 md:py-10">
      {/* 背景テクスチャ */}
      <div
        aria-hidden="true"
        className="tex-cream-board pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.18]"
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-4 md:px-8">
        <picture>
          <source media="(min-width: 768px)" srcSet={painPc} />
          <img
            src={painSp}
            alt="外壁塗装でよくあるお悩み"
            className="w-full rounded-[6px] border border-[#e6ded0] md:rounded-[10px]"
          />
        </picture>

        {/* 画像下補足テキスト */}
        <p className="mt-4 text-center text-[13px] leading-relaxed text-ink-muted md:mt-5 md:text-[14px]">
          ひとつでも当てはまったら、まずはレストレーションへご相談ください。<br className="hidden md:block" />
          現地調査・お見積りは完全無料です。
        </p>
      </div>
    </section>
  )
}
