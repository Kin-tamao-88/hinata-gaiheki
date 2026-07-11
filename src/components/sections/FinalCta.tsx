import { Phone, ChevronRight } from 'lucide-react'

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#F5F2EC]">
      <div
        aria-hidden="true"
        className="tex-cream-board pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.08]"
      />

      {/* ─── 電話（急ぎの方のみ） ─── */}
      <div className="relative border-t border-gray-300/60">
        <div className="mx-auto max-w-content px-6 py-6 md:py-8">
          <div className="mx-auto max-w-[540px]">
            <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white p-4 md:p-5">
              <div
                aria-hidden="true"
                className="tex-cream-board pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.08]"
              />
              <div className="relative">
                <div className="mb-1 flex items-center justify-center">
                  <span className="text-center text-[26px] font-black text-navy md:text-[30px]">
                    090-2766-9657
                  </span>
                </div>
                <p className="mb-4 text-center text-[13px] text-[#374151]">
                  【受付時間】9:00〜17:30（日曜定休）
                </p>
                <a
                  href="tel:09027669657"
                  className="flex w-full items-center justify-center gap-2 rounded bg-brandorange px-6 py-3 text-[15px] font-bold text-white transition-colors hover:bg-brandorange-dark"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span className="text-center">
                    お急ぎの場合はお電話にて
                    <br className="md:hidden" />
                    ご相談ください!!
                  </span>
                  <ChevronRight className="h-5 w-5 flex-shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
