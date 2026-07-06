import { Home } from 'lucide-react'

const worries = [
  '相場が分からず、適正価格なのか判断できない',
  '必要のない工事まで勧められないか心配',
  '工事後に追加費用を請求されないか不安',
  '信頼できる会社へお願いしたい',
  '訪問営業を受けたけれど、本当に塗装が必要か分からない',
]

export function Pain() {
  return (
    <section id="pain" className="relative overflow-hidden bg-white py-10 md:py-14">
      <div
        aria-hidden="true"
        className="brush-cream-texture mix-blend-multiply pointer-events-none absolute inset-0 opacity-[0.08]"
      />
      <div className="relative mx-auto max-w-content px-6">
        <div className="flex justify-center">
          <Home className="h-8 w-8 text-navy" />
        </div>
        <h2 className="mt-4 mb-5 text-center text-[28px] font-black leading-snug text-navy md:text-[40px]">
          外壁塗装の業者選びで、
          <br />
          こんなお悩みありませんか？
        </h2>
        <p className="mb-8 text-center text-[15px] leading-relaxed text-[#374151] md:text-[16px]">
          外壁塗装は専門性が高く、はじめての方にとって分かりづらいことも少なくありません。
          <br />
          多くのお客様が、まずは業者選びに不安を感じています。
        </p>
        <ul className="border-t border-gray-200">
          {worries.map((worry) => (
            <li
              key={worry}
              className="border-b border-gray-200 py-4 text-[16px] font-medium text-navy md:text-[18px]"
            >
              {worry}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
