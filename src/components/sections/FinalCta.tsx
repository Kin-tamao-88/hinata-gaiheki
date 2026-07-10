import lineQr from '../../assets/contact/hinata-qr.jpg'
import {
  Phone,
  ChevronRight,
  ClipboardList,
  BadgeJapaneseYen,
  UserCheck,
  Smartphone,
  Camera,
  MessageCircle,
} from 'lucide-react'

const trustItems = [
  {
    icon: ClipboardList,
    label: '現地調査・お見積り',
    value: '完全無料',
  },
  {
    icon: BadgeJapaneseYen,
    label: 'お見積り後の',
    value: '追加費用なし',
  },
  {
    icon: UserCheck,
    label: '代表の日向が',
    value: '直接対応',
  },
]

export function FinalCta() {
  return (
    <>
      <section id="contact" className="bg-[#F5F2EC] pb-0 pt-14 md:pt-20">
        <div className="mx-auto max-w-content px-6">
          <div className="mb-5 flex items-center justify-center gap-2">
            <span className="text-[16px] font-bold text-brandorange">＼</span>
            <span className="text-[14px] font-bold tracking-wide text-brandorange">
              相談・お見積りは無料です
            </span>
            <span className="text-[16px] font-bold text-brandorange">／</span>
          </div>

          <h2 className="mb-2 text-center text-[28px] font-black leading-snug text-navy md:text-[40px]">
            まずは、お住まいの状態を
            <br />
            <span className="text-brandorange">知ること</span>
            から始めませんか？
          </h2>

          <div className="mx-auto mb-4 h-[3px] w-20 bg-brandorange" />

          {/* ① 見出し下余白: mb-10 → mb-5（約20px削減） */}
          <p className="mb-5 text-center text-[15px] text-[#374151] md:text-[16px]">
            しつこい営業は一切いたしませんので、安心してご相談ください。
          </p>

          <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-[1.15fr_1fr]">

            {/* ② LINEカード: border柔らか + cream-board質感 */}
            <div className="relative overflow-hidden rounded-lg border border-green-400 bg-white p-6 md:p-8">
              <div className="mx-auto mb-4 inline-block rounded bg-green-500 px-3 py-1 text-[12px] font-bold text-white">
                かんたん！写真を送るだけ！
              </div>
              <div className="mb-2 flex items-center justify-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500 md:h-14 md:w-14">
                  <span className="text-[13px] font-black text-white md:text-[14px]">
                    LINE
                  </span>
                </div>
                <span className="text-[26px] font-black text-green-600 md:text-[30px]">
                  LINEで相談する
                </span>
              </div>
              <p className="mb-6 text-center text-[14px] text-[#374151]">
                代表の日向が直接ご返信します！
              </p>
              <button className="flex w-full items-center justify-center gap-2 rounded bg-green-500 px-6 py-4 text-[17px] font-bold text-white transition-colors hover:bg-green-600 md:text-[18px]">
                友だち追加して相談する
                <ChevronRight className="h-5 w-5" />
              </button>
              {/* QR: SP・PC両方で表示 / SP=縦並び / PC=横並び */}
              <div className="mt-5 flex flex-col items-center gap-4 border-t border-green-100 pt-5 md:flex-row md:justify-center">
                <img
                  src={lineQr}
                  alt="LINE QRコード"
                  className="h-[92px] w-[92px] flex-shrink-0 object-contain md:h-[100px] md:w-[100px]"
                />
                <span className="text-[12px] text-[#374151]">
                  QRコードを読み取って友だち追加
                </span>
              </div>
              {/* C-2テイスト: 紙に印刷したカード程度 */}
              <div
                aria-hidden="true"
                className="tex-cream-board pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.10]"
              />
            </div>

            {/* ② 電話カード: border柔らか + cream-board質感 */}
            <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6">
              <div className="mb-3 flex items-center justify-center gap-2">
                <Phone className="h-4 w-4 text-brandorange" />
                <span className="text-[14px] font-bold text-brandorange">
                  お急ぎの方はお電話ください
                </span>
              </div>
              <div className="mb-1 flex items-center justify-center gap-2">
                <Phone className="h-5 w-5 text-brandorange" />
                <span className="text-center text-[28px] font-black text-navy md:text-[32px]">
                  090-1234-5678
                </span>
              </div>
              <p className="mb-6 text-center text-[13px] text-[#374151]">
                【受付時間】9:00〜17:30（日曜定休）
              </p>
              <a
                href="tel:09012345678"
                className="flex w-full items-center justify-center gap-2 rounded bg-brandorange px-6 py-4 text-[16px] font-bold text-white transition-colors hover:bg-brandorange-dark"
              >
                <Phone className="h-5 w-5" />
                今すぐ電話する
                <ChevronRight className="h-5 w-5" />
              </a>
              <div
                aria-hidden="true"
                className="tex-cream-board pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.08]"
              />
            </div>
          </div>

          {/* ③ 安心要素: icon拡大・ラベル大きく・余白詰め・横線薄く */}
          <div className="mb-10 border-t border-gray-300 pt-6">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-[15px] text-[#374151]">
                安心してご相談いただくために
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <div className="mx-auto grid max-w-[600px] grid-cols-3 gap-4">
              {trustItems.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <item.icon className="h-9 w-9 text-brandorange" />
                  <span className="text-[14px] text-[#374151]">
                    {item.label}
                  </span>
                  <span className="text-[16px] font-bold text-navy">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200 bg-white px-6 py-10">
        <div className="mx-auto max-w-content md:grid md:grid-cols-[1fr_2fr] md:items-center md:gap-10">
          <div>
            <h3 className="mb-3 text-[18px] font-black text-green-600 md:text-[20px]">
              LINEでのご相談はとっても簡単！
            </h3>
            <p className="mb-3 text-[14px] leading-relaxed text-[#374151] md:text-[15px]">
              気になる箇所のお写真を送っていただければ、
              代表の日向が内容を確認し、できる限り詳しく
              ご案内いたします。
            </p>
            <p className="text-[14px] font-bold text-brandorange">
              「これって塗り替えが必要？」「まだ大丈夫？」
              <br />
              そんなご相談も大歓迎です！
            </p>
          </div>

          {/* STEP: SP・PC ともに横並び */}
          <div className="mt-8 flex items-start gap-1 md:mt-0 md:items-center md:gap-4">
            {/* ① */}
            <div className="flex flex-1 flex-col items-center text-center">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-[14px] font-black text-white">
                ①
              </div>
              <Smartphone className="mb-1 h-9 w-9 text-navy md:h-10 md:w-10" />
              <span className="text-[13px] font-bold text-navy md:text-[14px]">
                友だち追加
              </span>
              <span className="text-[11px] text-[#374151] md:text-[12px]">
                上のボタンから友だち追加
              </span>
            </div>

            <ChevronRight className="mt-8 block h-4 w-4 flex-shrink-0 text-gray-400 md:mt-0 md:h-5 md:w-5" />

            {/* ② */}
            <div className="flex flex-1 flex-col items-center text-center">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-[14px] font-black text-white">
                ②
              </div>
              <Camera className="mb-1 h-9 w-9 text-navy md:h-10 md:w-10" />
              <span className="text-[13px] font-bold text-navy md:text-[14px]">
                写真を送る
              </span>
              <span className="text-[11px] text-[#374151] md:text-[12px]">
                気になる箇所の写真を送信
              </span>
            </div>

            <ChevronRight className="mt-8 block h-4 w-4 flex-shrink-0 text-gray-400 md:mt-0 md:h-5 md:w-5" />

            {/* ③ */}
            <div className="flex flex-1 flex-col items-center text-center">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-[14px] font-black text-white">
                ③
              </div>
              <MessageCircle className="mb-1 h-9 w-9 text-navy md:h-10 md:w-10" />
              <span className="text-[13px] font-bold text-navy md:text-[14px]">
                ご案内・ご提案
              </span>
              <span className="text-[11px] text-[#374151] md:text-[12px]">
                内容を確認後、詳しくご案内！
              </span>
              <span className="mt-1 text-[10px] font-bold italic text-brandorange md:text-[11px]">
                代表が直接返信します！
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="border-t border-gray-200 py-4 text-center text-[12px] text-[#374151]">
        ※LINEは24時間受付中です。営業時間内に順次ご返信いたします。
      </p>
    </>
  )
}
