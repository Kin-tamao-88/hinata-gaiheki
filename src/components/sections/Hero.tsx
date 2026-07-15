import { ChevronRight, CheckCircle2, Clock, MessageSquare, Phone } from 'lucide-react'
import heroWorkerBg from '../../assets/hero/hero-worker-background.webp'
import heroWorkerBgSp from '../../assets/hero/hero-worker-background-sp.webp'
import logoImage from '../../assets/logo/lr-logo.webp'
import brushBlackSubcaption from '../../assets/brush/brush-black-subcaption2.webp'
import brushNavySpeechbubble from '../../assets/brush/brush-navy-speechbubble3.webp'
import brushYellowUnderline from '../../assets/brush/brush-yellow-underline2.webp'
import heroOverlay from '../../assets/brush/hero-overlay-c2-blue.webp'
import maskingTape from '../../assets/textures/masking-tape-yellow.webp'
import badge5years from '../../assets/hero/badge-5years-warranty2.webp'
import badge350cases from '../../assets/hero/badge-350cases2.webp'
import badge0yen from '../../assets/hero/badge-0yen2.webp'
import badge5yearsCrop from '../../assets/hero/badge-5years-warranty2-crop.webp'
import badge350casesCrop from '../../assets/hero/badge-350cases2-crop.webp'
import badge0yenCrop from '../../assets/hero/badge-0yen2-crop.webp'
import { trackConversion } from '../../utils/trackConversion'

// ─── Features Bar アイテム ──────────────────────────────────
function FeatureItem({
  icon,
  label,
  value,
}: {
  icon: 'yen' | 'clock' | 'chat'
  label: string
  value: string
}) {
  return (
    <div className="flex items-center justify-center gap-2 px-2 py-4 md:gap-4 md:px-10 md:py-6">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-white md:h-12 md:w-12">
        {icon === 'yen' && (
          <span className="text-[15px] font-black leading-none text-white md:text-[16px]">¥0</span>
        )}
        {icon === 'clock' && (
          <Clock className="h-5 w-5 text-white md:h-6 md:w-6" strokeWidth={1.5} />
        )}
        {icon === 'chat' && (
          <MessageSquare className="h-5 w-5 text-white md:h-6 md:w-6" strokeWidth={1.5} />
        )}
      </div>
      <div>
        <p className="mb-1 text-[10px] font-semibold leading-none text-white md:text-[13px]">
          {label}
        </p>
        <p className="text-[17px] font-black leading-none text-yellow-400 md:text-[26px]">
          {value}
        </p>
      </div>
    </div>
  )
}

// ─── メインコンポーネント ───────────────────────────────────
export default function Hero() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="relative z-50 border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-3 md:h-[112px] md:py-0 md:pl-10 md:pr-8">

          {/* ロゴ + 縦区切り + タグライン */}
          <div className="flex items-center gap-3 md:gap-5">
            <img
              src={logoImage}
              alt="レストレーション"
              className="h-[53px] w-auto flex-shrink-0 md:h-[67px]"
            />
            <div className="hidden md:flex md:items-center md:gap-4">
              <div className="h-10 w-px flex-shrink-0 bg-gray-300" />
              <div className="leading-[1.65]">
                <p className="text-[15px] font-bold text-navy">山梨の外壁塗装専門店</p>
                <p className="text-[15px] font-bold text-navy">雨漏り、屋根修理・補強</p>
              </div>
            </div>
          </div>

          {/* 右：電話 + LINE ボタン */}
          <div className="flex items-center gap-3 md:gap-6">

            {/* カードブランド（PCのみ） */}
            <div className="hidden md:flex md:flex-col md:items-end md:gap-1">
              <div className="grid grid-cols-2 gap-[3px]">
                <div className="flex h-[20px] w-[34px] items-center justify-center rounded-[2px] bg-[#1A1F71]">
                  <span className="text-[8px] font-black italic tracking-tight text-white">VISA</span>
                </div>
                <div className="flex h-[20px] w-[34px] items-center justify-center rounded-[2px] bg-[#EB001B]">
                  <span className="text-center text-[5.5px] font-black leading-tight text-white">Master<br />card</span>
                </div>
                <div className="flex h-[20px] w-[34px] items-center justify-center rounded-[2px] bg-[#003087]">
                  <span className="text-[8px] font-black tracking-tight text-white">JCB</span>
                </div>
                <div className="flex h-[20px] w-[34px] items-center justify-center rounded-[2px] bg-[#2E77BC]">
                  <span className="text-[7px] font-black tracking-tighter text-white">AMEX</span>
                </div>
              </div>
              <p className="text-[10px] text-gray-400">各種カード対応</p>
            </div>

            <div className="hidden h-10 w-px bg-gray-200 md:block" />

            <div className="hidden text-right md:block">
              <p className="text-[13px] text-[#444]">お電話でのお問い合わせはこちら</p>
              <a
                href="tel:050-1882-4910"
                className="flex items-center justify-end gap-1.5 text-[22px] font-extrabold leading-none text-navy"
                onClick={() => trackConversion('phone_click', 'header')}
              >
                <Phone className="h-4 w-4 flex-shrink-0 fill-brandorange stroke-brandorange" strokeWidth={2} />
                050-1882-4910
              </a>
              <p className="text-[13px] text-[#444]">受付時間 9:00〜18:00（日曜定休）</p>
            </div>

            <a
              href="tel:050-1882-4910"
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded border border-navy text-navy md:hidden"
              aria-label="電話をかける"
              onClick={() => trackConversion('phone_click', 'header')}
            >
              <Phone className="h-5 w-5" strokeWidth={2} />
            </a>

            <a
              href="https://line.me/ti/p/YEthVfb_JD"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 items-center gap-2 rounded border-b-[3px] border-[#048537] bg-[#06B037] px-5 text-[15px] font-bold text-white transition-all hover:translate-y-px hover:border-b-[2px] hover:bg-[#059930] active:translate-y-[2px] active:border-b-0 md:h-12 md:px-5 md:text-[16px]"
              onClick={() => trackConversion('line_click', 'header')}
            >
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-sm bg-[#06C755]">
                <span className="text-[8px] font-black leading-none text-white">LINE</span>
              </span>
              LINEで無料相談
            </a>
          </div>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-cream">

        {/* ── PC：2カラム Hero ── */}
        <div className="hidden md:block">
          {/* テクスチャ */}
          <div
            aria-hidden="true"
            className="brush-cream-texture pointer-events-none absolute inset-0 opacity-[0.45] mix-blend-multiply"
          />
          {/* 塗装壁オーバーレイ */}
          <img
            src={heroOverlay}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.35]"
          />

          {/* PC：2カラム（42 : 58） */}
          <div className="relative z-10 mx-auto max-w-[1240px] md:flex md:items-stretch">

            {/* ─── 左カラム：テキスト（42%） ─── */}
            <div className="relative flex flex-col justify-center px-6 pb-10 pt-8 md:w-[42%] md:flex-shrink-0 md:pl-10 md:pr-0 md:pt-7 md:pb-6">
              <div aria-hidden="true" className="brush-cream-texture-tile pointer-events-none absolute inset-0 opacity-[0.40] mix-blend-multiply" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-[80px] bg-gradient-to-r from-transparent to-cream" />

              {/* バッジ（ブラシストローク） */}
              <div className="relative mb-4 md:mb-3 self-start -rotate-2">
                <img
                  src={brushBlackSubcaption}
                  alt=""
                  aria-hidden="true"
                  className="block h-auto w-[340px] md:w-[420px] [filter:brightness(0)_saturate(100%)_invert(9%)_sepia(87%)_saturate(520%)_hue-rotate(187deg)_brightness(115%)]"
                />
                <span className="absolute inset-0 flex items-center justify-center text-[19px] font-bold tracking-wider text-white md:text-[21px]">
                  地域密着！山梨で15年の実績
                </span>
              </div>

              {/* H1 */}
              <h1 className="mb-4 md:mb-3 font-black leading-[1.15] tracking-tight text-navy">
                <span className="block text-[42px] md:text-[61px]">高品質な施工を</span>
                <span className="block text-[42px] md:text-[61px]">
                  <span className="text-brandorange">適正価格</span>で。
                </span>
                {/* 黄色ブラシ下線：「適正価格で。」直下に密着 */}
                <img
                  src={brushYellowUnderline}
                  alt=""
                  aria-hidden="true"
                  className="block h-auto w-[290px] md:w-[420px]"
                />
              </h1>

              {/* サービスタグ＋サブテキスト：右カラムへ張り出し */}
              <div className="relative z-20 md:w-[135%]">
                <div className="mb-4 flex flex-wrap items-center gap-2 md:mb-3">
                  {['外壁塗装', '雨漏り修理', '屋根修理'].map((tag) => (
                    <span
                      key={tag}
                      className="border-2 border-navy px-4 py-2 text-[15px] font-bold text-navy md:text-[18px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mb-4 md:mb-3 text-[15px] font-bold leading-relaxed text-navy md:text-[18px]">
                  住まいのトラブル・塗り替えは私たちにお任せください。
                </p>
              </div>

              {/* チェックリスト */}
              <div className="flex flex-col gap-2">
                {[
                  '経験豊富な職人による安心施工',
                  '無理な営業は一切いたしません',
                  '他社見積もり相談OK',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2
                      className="h-4 w-4 flex-shrink-0 text-navy md:h-5 md:w-5"
                      strokeWidth={2}
                    />
                    <span className="text-[13px] font-semibold text-navy md:text-[15px]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ─── 右カラム：写真（58%） ─── */}
            <div className="relative hidden md:block md:w-[58%]">
              <img
                src={heroWorkerBg}
                alt="外壁塗装の施工の様子"
                className="absolute inset-0 h-full w-full object-cover object-right"
              />
              {/* 左端フェード */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 w-[16px] bg-gradient-to-r from-cream to-transparent"
              />
              {/* 右端フェード */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 w-[120px] bg-gradient-to-l from-cream to-transparent"
              />
              {/* ネイビー吹き出し テキストオーバーレイ */}
              <div className="absolute top-[66%] left-[3%] -rotate-2">
                <div className="relative">
                  <img
                    src={brushNavySpeechbubble}
                    alt=""
                    aria-hidden="true"
                    className="block h-auto w-[430px] brightness-125"
                  />
                  <div className="absolute inset-x-0 top-[58px] h-[90px] flex flex-col justify-center pl-20 pr-6">
                    <p className="font-black leading-snug tracking-tight text-white text-[17px] md:text-[19px]">
                      丁寧な仕事で
                    </p>
                    <p className="font-black leading-snug tracking-tight text-yellow-400 text-[17px] md:text-[19px]">
                      安心して任せられる塗装を。
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── SP：一体型写真＋フェード ── */}
        <div className="relative min-h-[400px] overflow-hidden md:hidden">

          {/* Layer 1：SP用背景写真 z-0 */}
          <img
            src={heroWorkerBgSp}
            className="absolute right-0 top-0 bottom-0 z-0 h-full w-[130%] object-cover object-right-top translate-x-[60px]"
            alt="外壁塗装の施工の様子"
          />

          {/* Layer 2：左フェード z-[2] */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-[55%] bg-[linear-gradient(to_right,rgba(245,242,236,1.0)_0%,rgba(245,242,236,0.85)_40%,rgba(245,242,236,0)_100%)]"
            aria-hidden="true"
          />

          {/* Layer 3：テキストコンテンツ z-10 */}
          <div className="relative z-10 px-5 pb-4 pt-4">

            {/* バッジ（ブラシストローク） */}
            <div className="relative mb-2 self-start -rotate-2">
              <img
                src={brushBlackSubcaption}
                alt=""
                aria-hidden="true"
                className="block h-auto w-[280px] [filter:brightness(0)_saturate(100%)_invert(9%)_sepia(87%)_saturate(520%)_hue-rotate(187deg)_brightness(115%)]"
              />
              <span className="absolute inset-0 flex items-center justify-center text-[16px] font-bold tracking-wider text-white">
                地域密着！山梨で15年の実績
              </span>
            </div>

            {/* H1 */}
            <h1 className="mb-2 font-black leading-[1.15] tracking-tight text-navy">
              <span className="block text-[38px]">高品質な施工を</span>
              <span className="block text-[38px]">
                <span className="text-brandorange">適正価格</span>で。
              </span>
              <img
                src={brushYellowUnderline}
                alt=""
                aria-hidden="true"
                className="block h-auto w-[240px]"
              />
            </h1>

            {/* サービスタグ＋サブテキスト */}
            <div className="mb-2 flex flex-wrap items-center gap-1.5">
              {['外壁塗装', '雨漏り修理', '屋根修理'].map((tag) => (
                <span
                  key={tag}
                  className="border-2 border-brandorange bg-white px-3 py-1 text-[14px] font-bold text-brandorange"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mb-2 text-[15px] font-bold leading-relaxed text-navy">
              住まいのトラブル・塗り替えは<br />私たちにお任せください。
            </p>

            {/* チェックリスト */}
            <div className="flex flex-col gap-1.5">
              {[
                '経験豊富な職人による安心施工',
                '無理な営業は一切いたしません',
                '他社見積もり相談OK',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2
                    className="h-4 w-4 flex-shrink-0 text-navy"
                    strokeWidth={2}
                  />
                  <span className="text-[13px] font-semibold text-navy">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </section>

      {/* ===== STATS（月桂樹） ===== */}
      <section className="relative z-20 overflow-hidden border-b border-gray-200/80 bg-cream md:-mt-4 md:pt-6 md:pb-6">
        {/* PC：マスキングテープ背景テクスチャ */}
        <img
          src={maskingTape}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 top-1/2 hidden w-full -translate-y-1/2 opacity-[0.45] mix-blend-multiply md:block"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-[1] hidden h-14 bg-gradient-to-b from-cream to-transparent md:block" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] hidden h-14 bg-gradient-to-t from-cream to-transparent md:block" />
        <div className="relative z-10 mx-auto max-w-[960px] px-2 md:px-6">
          <div className="grid grid-cols-3 items-center divide-x divide-gray-300/40">
            <div className="flex items-center justify-center">
              <img src={badge5years} alt="アフター保証5年間" className="w-[110px] h-auto -my-3 md:hidden" />
              <img src={badge5yearsCrop} alt="アフター保証5年間" className="hidden h-auto md:block md:w-[185px] md:contrast-[1.08] md:saturate-[1.08]" />
            </div>
            <div className="flex items-center justify-center">
              <img src={badge350cases} alt="施工実績350件以上" className="w-[110px] h-auto -my-3 md:hidden" />
              <img src={badge350casesCrop} alt="施工実績350件以上" className="hidden h-auto md:block md:w-[185px] md:contrast-[1.08] md:saturate-[1.08]" />
            </div>
            <div className="flex items-center justify-center">
              <img src={badge0yen} alt="追加費用0円" className="w-[110px] h-auto -my-3 md:hidden" />
              <img src={badge0yenCrop} alt="追加費用0円" className="hidden h-auto md:block md:w-[185px] md:contrast-[1.08] md:saturate-[1.08]" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES BAR（紺） ===== */}
      <section className="relative overflow-hidden bg-navy">
        <div
          aria-hidden="true"
          className="tex-paint-noise pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        />
        <div className="relative z-10 mx-auto max-w-[960px] px-4">
          <div className="grid grid-cols-3 divide-x divide-white/20">
            <FeatureItem icon="yen"   label="現地調査・お見積り" value="無料"    />
            <FeatureItem icon="clock" label="最短"               value="当日対応" />
            <FeatureItem icon="chat"  label="他社見積もり"       value="相談OK"  />
          </div>
        </div>
      </section>

      {/* ===== LINE CTA バー（緑） ===== */}
      <div className="px-4 py-5 md:px-6 md:py-6">
        <a
          href="https://line.me/ti/p/YEthVfb_JD"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto block max-w-[860px] rounded-[14px] border-b-4 border-[#047a30] bg-[#059A42] transition-all hover:bg-[#048537] active:translate-y-[2px] active:border-b-0"
          onClick={() => trackConversion('line_click', 'hero_line_bar')}
        >
          <div className="flex items-center justify-center gap-4 px-5 py-4 md:gap-6 md:px-8 md:py-5">

            {/* LINE アイコン：吹き出しの中にLINE文字 */}
            <div className="relative flex h-[62px] w-[62px] flex-shrink-0 items-center justify-center rounded-[14px] bg-white pb-2 md:h-[70px] md:w-[70px] md:pb-3">
              <MessageSquare className="absolute inset-0 h-full w-full p-[6px] text-[#059A42] md:p-[7px]" strokeWidth={1.5} />
              <span className="relative text-[12px] font-black leading-none text-[#059A42] md:text-[14px]">LINE</span>
            </div>

            {/* テキスト */}
            <div className="min-w-0">
              <p className="mb-1 text-[11px] font-bold text-white md:text-[13px]">
                24時間受付中・相談だけでも大歓迎！
              </p>
              <div className="flex items-center gap-2">
                <span className="text-[20px] font-black leading-tight text-white md:text-[28px]">
                  LINEで無料相談する
                </span>
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/20 md:h-8 md:w-8">
                  <ChevronRight className="h-4 w-4 text-white md:h-5 md:w-5" strokeWidth={3} />
                </div>
              </div>
            </div>

            {/* 簡単30秒バッジ */}
            <div className="hidden flex-shrink-0 items-center gap-3 sm:flex">
              <div className="flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-white md:h-[70px] md:w-[70px]">
                <span className="text-[10px] font-bold leading-none text-[#059A42]">簡単</span>
                <span className="text-[24px] font-black leading-none text-[#059A42] md:text-[26px]">30秒</span>
              </div>
              <p className="text-[12px] font-bold leading-snug text-[#FCE283] md:text-[13px]">
                写真を送るだけ<br />でもOK！
              </p>
            </div>

          </div>
        </a>
      </div>
    </>
  )
}
