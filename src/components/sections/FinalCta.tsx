import lineQr from '../../assets/contact/hinata-qr.jpg'
import { Phone, ChevronRight, Smartphone, Camera, MessageCircle } from 'lucide-react'

const steps = [
  { num: '①', Icon: Smartphone, title: '友だち追加', caption: '上のボタンから追加' },
  { num: '②', Icon: Camera, title: '写真を送る', caption: '気になる箇所を撮影' },
  { num: '③', Icon: MessageCircle, title: 'ご案内・ご提案', caption: '代表が直接ご返信します' },
]

export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#F5F2EC]">
      <div
        aria-hidden="true"
        className="tex-cream-board pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.08]"
      />

      {/* ─── ヘッダー ─── */}
      <div className="relative mx-auto max-w-content px-6 pb-8 pt-12 md:pt-16">
        <h2 className="mb-3 text-[22px] font-black text-green-600 md:text-[28px]">
          LINEでのご相談はとっても簡単！
        </h2>
        <p className="text-[14px] leading-relaxed text-[#374151] md:text-[15px]">
          気になる箇所のお写真を送っていただければ、代表の日向が内容を確認し、できる限り詳しくご案内いたします。
          <br className="hidden md:block" />
          「これって塗り替えが必要？」「まだ大丈夫？」そんなご相談も大歓迎です！
        </p>
      </div>

      {/* ─── STEPs ─── */}
      <div className="relative border-t border-gray-300/60">
        <div className="mx-auto max-w-content px-6 py-8">
          <div className="flex items-start gap-1 md:gap-4">
            {steps.map((s, i) => (
              <div key={s.num} className="contents">
                <div className="flex flex-1 flex-col items-center gap-2 text-center">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[14px] font-black text-white">
                    {s.num}
                  </div>
                  <s.Icon className="h-9 w-9 text-navy md:h-10 md:w-10" strokeWidth={1.5} />
                  <span className="text-[13px] font-bold text-navy md:text-[14px]">{s.title}</span>
                  <span className="text-[11px] text-[#374151] md:text-[12px]">{s.caption}</span>
                </div>
                {i < steps.length - 1 && (
                  <ChevronRight className="mt-8 h-4 w-4 flex-shrink-0 text-gray-400 md:mt-10 md:h-5 md:w-5" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── LINEカード ─── */}
      <div className="relative border-t border-gray-300/60">
        <div className="mx-auto max-w-content px-6 py-8 md:py-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-start">

            {/* LINE メインカード */}
            <div className="relative flex-1 overflow-hidden rounded-lg border border-green-400 bg-white p-5 md:p-6">
              <div
                aria-hidden="true"
                className="tex-cream-board pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.10]"
              />
              <div className="relative">
                <div className="mb-3">
                  <span className="rounded bg-green-500 px-3 py-1 text-[12px] font-bold text-white">
                    かんたん！写真を送るだけ！
                  </span>
                </div>
                <div className="mb-1 flex items-center gap-2 md:gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-500 md:h-12 md:w-12">
                    <span className="text-[12px] font-black text-white md:text-[13px]">LINE</span>
                  </div>
                  <span className="text-[19px] font-black text-green-600 md:text-[26px]">LINEで相談する</span>
                </div>
                <p className="mb-4 text-[13px] text-[#374151] md:text-[14px]">
                  代表の日向が直接ご返信します！
                </p>
                <button className="flex w-full items-center justify-center gap-2 rounded bg-green-500 px-5 py-3 text-[15px] font-bold text-white transition-colors hover:bg-green-600 md:w-auto md:px-8 md:text-[16px]">
                  友だち追加して相談する
                  <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
                </button>
              </div>
            </div>

            {/* QRコード（PCユーザー向け補助） */}
            <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white p-4 md:w-[152px]">
              <div
                aria-hidden="true"
                className="tex-cream-board pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.08]"
              />
              <div className="flex flex-col items-center gap-2 text-center">
                <img
                  src={lineQr}
                  alt="LINE QRコード"
                  className="h-[96px] w-[96px] object-contain"
                />
                <p className="text-[12px] leading-snug text-[#666666]">
                  スマホで読み取るだけ
                  <br />
                  友だち追加できます
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ─── 電話（急ぎの方のみ） ─── */}
      <div className="relative border-t border-gray-300/60">
        <div className="mx-auto max-w-content px-6 py-6 md:py-8">
          <p className="mb-3 text-center text-[13px] text-[#374151]">
            お急ぎの場合はお電話でもご相談いただけます
          </p>
          <div className="mx-auto max-w-[540px]">
            <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white p-4 md:p-5">
              <div
                aria-hidden="true"
                className="tex-cream-board pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.08]"
              />
              <div className="relative">
                <div className="mb-2 flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4 text-brandorange" />
                  <span className="text-[14px] font-bold text-brandorange">
                    お急ぎの方はお電話ください
                  </span>
                </div>
                <div className="mb-1 flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5 text-brandorange" />
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
                  <Phone className="h-5 w-5" />
                  今すぐ電話する
                  <ChevronRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="relative border-t border-gray-200 py-4 text-center text-[12px] text-[#374151]">
        ※LINEは24時間受付中です。営業時間内に順次ご返信いたします。
      </p>
    </section>
  )
}
