import reasonPc from '../../assets/images/education-reason-pc.webp'
import reasonSp from '../../assets/images/education-reason-sp.webp'

export function Strength() {
  return (
    <section id="strength" className="relative overflow-hidden bg-cream py-4 md:py-8">
      <div
        aria-hidden="true"
        className="tex-cream-board pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.18]"
      />

      <div className="relative mx-auto w-full max-w-[1320px] px-0 md:px-6">
        <picture>
          <source media="(min-width: 768px)" srcSet={reasonPc} />
          <img
            src={reasonSp}
            alt="レストレーションが選ばれる3つの理由"
            className="block h-auto w-full"
          />
        </picture>
      </div>
    </section>
  )
}
