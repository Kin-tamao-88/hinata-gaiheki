import pricingPc from '../../assets/sections/pricing-pc2.webp'
import pricingSp from '../../assets/sections/pricing-sp3.webp'

export function Price() {
  return (
    <section id="price" className="relative overflow-hidden bg-cream py-4 md:py-8">
      <div
        aria-hidden="true"
        className="tex-cream-board pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.18]"
      />
      <div className="relative mx-auto w-full max-w-[1320px] px-0 md:px-6">
        <picture>
          <source media="(min-width: 768px)" srcSet={pricingPc} />
          <img
            src={pricingSp}
            alt="適正価格へのこだわり"
            className="w-full rounded-none md:rounded-[10px] md:border md:border-[#e6ded0]"
          />
        </picture>
      </div>
    </section>
  )
}
