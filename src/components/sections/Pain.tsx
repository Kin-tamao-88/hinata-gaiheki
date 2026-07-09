import painPc from '../../assets/sections/pain-pc.png'
import painSp from '../../assets/sections/pain-sp.png'

export function Pain() {
  return (
    <section id="pain" className="py-2">
      <picture>
        <source media="(min-width: 768px)" srcSet={painPc} />
        <img
          src={painSp}
          alt="外壁塗装でよくあるお悩み"
          className="w-full"
        />
      </picture>
    </section>
  )
}
