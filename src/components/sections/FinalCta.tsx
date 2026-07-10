import lineQr from '../../assets/contact/hinata-qr.jpg'
import { Phone, ChevronRight, Smartphone, Camera, MessageCircle } from 'lucide-react'

const steps = [
  { num: '①', Icon: Smartphone, title: '友だち追加' },
  { num: '②', Icon: Camera, title: '写真を送る' },
  { num: '③', Icon: MessageCircle, title: 'ご案内・ご提案' },
]

export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#F5F2EC]">
      <div
        aria-hidden="true"
        className="tex-cream-board pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.08]"
      />

      {/* ─── ヘッダー ─── */}
      <div className="relative mx-auto max-w-content px-6 pb-4 pt-10 md:pt-12">
        <h2 className="mb-3 text-center text-[22px] font-black text-green-600 md:text-[28px]">
          LINEでもご相談ください！
        </h2>
        <p className="text-center text-[14px] leading-[1.9] text-[#1f2937] md:text-[15px] md:leading-relaxed md:text-[#374151]">
          気になる箇所のお写真を送っていただければ、
          <br />
          より詳細なご提案ができます。
        </p>
      </div>

      {/* ─── STEPs ─── */}
      <div className="relative border-t border-gray-300/60">
        <div className="mx-auto max-w-content px-6 py-3">
          <div className="flex items-center gap-1 md:gap-4">
            {steps.map((s, i) => (
              <div key={s.num} className="contents">
                <div className="flex flex-1 flex-col items-center gap-1.5 text-center">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[13px] font-black text-white">
                    {s.num}
                  </div>
                  <s.Icon className="h-7 w-7 text-navy md:h-8 md:w-8" strokeWidth={1.5} />
                  <span className="text-[12px] font-bold text-navy md:text-[13px]">{s.title}</span>
                </div>
                {i < steps.length - 1 && (
                  <ChevronRight className="h-4 w-4 flex-shrink-0 text-gray-400 md:h-5 md:w-5" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── LINEカード ─── */}
      <div className="relative border-t border-gray-300/60">
        <div className="mx-auto max-w-content px-6 py-5 md:py-6">
          <div className="mx-auto w-full max-w-[480px]">

            {/* LINE カード（QR内包） */}
            <div className="relative overflow-hidden rounded-lg border border-green-400 bg-white p-4 md:p-5">
              <div
                aria-hidden="true"
                className="tex-cream-board pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.10]"
              />
              <div className="relative flex items-stretch gap-4 md:gap-5">

                {/* 左: バッジ・タイトル・ボタン */}
                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="mb-3 text-center">
                    <span className="text-[12px] font-bold text-navy">
                      LINEは24時間受付中です!!
                    </span>
                  </div>
                  <button className="mt-auto flex w-full items-center justify-center gap-2 rounded bg-green-500 px-3 py-3 text-[14px] font-bold text-white transition-colors hover:bg-green-600 md:text-[15px]">
                    友だち追加して相談する
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                {/* 右: QR（PCのみ） */}
                <div className="hidden flex-shrink-0 flex-col items-center justify-center border-l border-green-200 pl-4 md:flex md:pl-5">
                  <img
                    src={lineQr}
                    alt="LINE QRコード"
                    className="h-[68px] w-[68px] object-contain"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

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
