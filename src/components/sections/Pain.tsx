import concernPc from '../../assets/images/education-concern-pc.webp'
import concernSp from '../../assets/images/education-concern-sp.webp'

export function Pain() {
  return (
    <section id="pain" className="bg-cream pt-[48px] pb-[48px]">
      <div className="mx-auto w-full max-w-[1320px] px-0 md:px-6">
        <picture>
          <source media="(min-width: 768px)" srcSet={concernPc} />
          <img
            src={concernSp}
            alt="外壁塗装でよくあるお悩み"
            className="block h-auto w-full"
          />
        </picture>
      </div>
    </section>
  )
}
