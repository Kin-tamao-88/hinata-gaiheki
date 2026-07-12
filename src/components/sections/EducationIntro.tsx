import titleSp from '../../assets/images/education-title-sp.webp'

export function EducationIntro() {
  return (
    <section id="education-intro" className="bg-cream pb-8 md:hidden">
      <div className="mx-auto w-full max-w-[1320px] px-0 md:px-6">
        <picture>
          <img
            src={titleSp}
            alt="住まいを守るために、まず知っておきたいこと"
            className="block h-auto w-full"
          />
        </picture>
      </div>
    </section>
  )
}
