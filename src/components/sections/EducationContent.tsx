import checklistPc from '../../assets/images/education-checklist-pc-set.webp'
import checklistSp from '../../assets/images/education-checklist-sp.webp'
import neglectPc from '../../assets/images/education-neglect-pc.webp'
import neglectSp from '../../assets/images/education-neglect-sp.webp'
import benefitsPc from '../../assets/images/education-benefits-pc.webp'
import benefitsSp from '../../assets/images/education-benefits-sp.webp'

export function EducationContent() {
  return (
    <section id="education" className="bg-cream">
      <div className="mx-auto w-full max-w-[1320px] px-0 md:px-6">

        <div className="mb-6 md:mb-[48px]">
          <picture>
            <source media="(min-width: 768px)" srcSet={checklistPc} />
            <img
              src={checklistSp}
              alt="外壁のひび割れ・コーキング劣化・防水性能低下・塗膜剥がれのチェック"
              className="block h-auto w-full"
            />
          </picture>
        </div>

        <div className="mb-6 md:mb-[48px]">
          <picture>
            <source media="(min-width: 768px)" srcSet={neglectPc} />
            <img
              src={neglectSp}
              alt="外壁劣化を放置した場合に起こる雨水侵入・腐食・大規模工事のリスク"
              className="block h-auto w-full"
            />
          </picture>
        </div>

        <div>
          <picture>
            <source media="(min-width: 768px)" srcSet={benefitsPc} />
            <img
              src={benefitsSp}
              alt="早めの点検と塗装で補修費を抑え住まいを長持ちさせるメリット"
              className="block h-auto w-full"
            />
          </picture>
        </div>

      </div>
    </section>
  )
}
