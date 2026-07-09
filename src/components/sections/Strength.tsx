import reasonPc from '../../assets/sections/reason-pc.png'
import reasonSp from '../../assets/sections/reason-sp.png'

export function Strength() {
  return (
    <section id="strength" className="py-2">
      <picture>
        <source media="(min-width: 768px)" srcSet={reasonPc} />
        <img
          src={reasonSp}
          alt="レストレーションが選ばれる3つの理由"
          className="w-full"
        />
      </picture>
    </section>
  )
}
