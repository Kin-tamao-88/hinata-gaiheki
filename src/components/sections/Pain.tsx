import painPc from '../../assets/sections/pain-pc.webp'
import painSp from '../../assets/sections/pain-sp.webp'

export function Pain() {
  return (
    <section id="pain" className="relative overflow-hidden bg-cream py-4 md:py-8">
      {/* 背景テクスチャ */}
      <div
        aria-hidden="true"
        className="tex-cream-board pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.18]"
      />

      <div className="relative mx-auto w-full max-w-[1320px] px-0 md:px-6">
        <picture>
          <source media="(min-width: 768px)" srcSet={painPc} />
          <img
            src={painSp}
            alt="外壁塗装でよくあるお悩み"
            className="w-full rounded-none md:rounded-[10px] md:border md:border-[#e6ded0]"
          />
        </picture>

      </div>
    </section>
  )
}
