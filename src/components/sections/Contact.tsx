import { useState, Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  ChevronRight,
  CheckCircle2,
  Phone,
  ClipboardList,
  UserCheck,
  UserPlus,
  Camera,
  MessageSquare,
} from 'lucide-react'
import emailjs from '@emailjs/browser'
import { trackConversion } from '../../utils/trackConversion'
import presidentImg from '../../assets/message/hinata-profile-cropped.jpg'

const serviceId = (import.meta.env.VITE_EMAILJS_SERVICE_ID as string)?.trim()
const templateId = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string)?.trim()
const publicKey = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string)?.trim()

const contactSchema = z.object({
  name: z.string().min(1, 'お名前を入力してください'),
  phone: z.string().min(1, '電話番号を入力してください'),
  email: z.union([
    z.string().email('メールアドレスの形式が正しくありません'),
    z.literal(''),
  ]),
  area: z.string().min(1, 'お住まいの地域を入力してください'),
  type: z.string().refine(
    (val) => ['外壁塗装', '屋根塗装', '雨漏り', 'その他'].includes(val),
    { message: 'お問い合わせ種別を選択してください' }
  ),
  message: z.string().min(1, 'お問い合わせ内容を入力してください'),
  honeypot: z.string(),
})

type FormValues = z.infer<typeof contactSchema>
type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

export function Contact() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      area: '',
      type: '',
      message: '',
      honeypot: '',
    },
  })

  const onSubmit = async (data: FormValues) => {
    setSubmitState('submitting')
    if (data.honeypot) {
      setSubmitState('success')
      return
    }
    try {
      emailjs.init(publicKey)
      await emailjs.send(serviceId, templateId, {
        from_name: data.name,
        phone: data.phone,
        reply_email: data.email?.trim() || '',
        area: data.area,
        inquiry_type: data.type,
        message: data.message,
      })
      setSubmitState('success')
      window.dataLayer?.push({ event: 'generate_lead', lead_type: 'contact_form' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setSubmitState('error')
    }
  }

  const inputBase =
    'w-full rounded-[6px] border px-4 py-3 text-[16px] text-ink bg-[#fffdf8] outline-none transition-colors focus:border-brandorange'

  const trustPoints = [
    {
      icon: <ClipboardList className="h-5 w-5" strokeWidth={1.5} />,
      sub: '現地調査・お見積り',
      label: '完全無料',
    },
    {
      icon: <span className="text-[18px] font-black leading-none">¥</span>,
      sub: 'お見積り後の',
      label: '追加費用なし',
    },
    {
      icon: <UserCheck className="h-5 w-5" strokeWidth={1.5} />,
      sub: '代表の日向が',
      label: '直接対応',
    },
  ]

  const steps = [
    {
      num: '1',
      icon: <UserPlus className="h-10 w-10 text-[#444]" strokeWidth={1.5} />,
      label: '友だち追加',
      sub: '（またはお電話）',
    },
    {
      num: '2',
      icon: <Camera className="h-10 w-10 text-[#444]" strokeWidth={1.5} />,
      label: '写真を送る',
      sub: '（気になる箇所）',
    },
    {
      num: '3',
      icon: <MessageSquare className="h-10 w-10 text-[#444]" strokeWidth={1.5} />,
      label: 'ご案内・ご提案',
      sub: '内容を確認後、',
    },
  ]

  return (
    <section id="contact" className="relative overflow-hidden bg-cream scroll-mt-24">
      <div
        aria-hidden="true"
        className="tex-cream-board pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.06]"
      />

      {/* SP: ネイビー見出し帯 */}
      <div className="relative overflow-hidden bg-navy px-5 py-8 md:hidden">
        <div aria-hidden="true" className="tex-navy-wall pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.68]" />
        <div aria-hidden="true" className="tex-paint-noise pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.12]" />
        <div className="relative text-center">
          <p className="mb-2 text-[12px] font-bold text-brandorange">
            ＼ ご相談・お見積りは無料です ／
          </p>
          <h2 className="text-[22px] font-black leading-tight tracking-tight text-white">
            無料お見積り・お問い合わせ
          </h2>
          <div className="mx-auto mt-3 h-[5px] w-4/5 bg-brandorange" />
        </div>
      </div>

      <div className="relative mx-auto max-w-content px-5 pb-8 pt-6 md:px-8 md:pb-24 md:pt-16">

        {/* PC: クリーム背景見出し */}
        <div className="mb-10 hidden text-center md:block">
          <p className="mb-2 text-[14px] font-bold text-brandorange">
            ＼ ご相談・お見積りは無料です ／
          </p>
          <h2 className="text-[52px] font-black leading-tight tracking-tight text-navy">
            無料お見積り・お問い合わせ
          </h2>
          <div className="mx-auto mt-3 h-[6px] w-[560px] bg-brandorange" />
          <p className="mt-6 text-[16px] leading-[1.9] text-ink">
            外壁塗装や住宅メンテナンスについて、気になることがございましたらお気軽にご相談ください。<br />
            1営業日以内に担当者より折り返しご連絡いたします。
          </p>
        </div>


        {/* 2カラムグリッド (PC) / 縦積み (SP) */}
        <div className="grid gap-6 md:grid-cols-[68fr_32fr]">

          {/* ─── 左カラム ─── */}
          <div className="flex flex-col gap-4">

            {/* LINE カード */}
            <div className="rounded-[12px] border border-[#06C755] bg-white px-8 py-7">
              <p className="mb-3 text-center text-[12px] font-bold text-[#06C755]">
                ＼ まずはLINEで気軽に相談してみませんか？ ／
              </p>
              <div className="mb-4 flex flex-col items-center gap-1.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-[44px] w-[44px] flex-shrink-0 items-center justify-center rounded-[10px] bg-[#06C755]">
                    <svg viewBox="0 0 32 30" width="28" height="26" fill="none">
                      <path
                        d="M16 1C8 1 1 6.8 1 14c0 6.4 5.6 11.8 13.2 13-.3 1.8-.9 4.2-1 4.5-.1.2.1.2.5 0 .5-.3 1.3-.8 13.2-7.7C29.6 21.3 31 17.8 31 14 31 6.8 24 1 16 1z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <p className="text-[28px] font-black leading-tight text-[#06C755]">
                    LINEで相談する
                  </p>
                </div>
                <span className="rounded-full border border-[#06C755] px-2.5 py-0.5 text-[12px] font-bold text-[#06C755]">
                  写真を送るだけ！
                </span>
                <div className="flex items-center gap-1.5">
                  <UserCheck className="h-[15px] w-[15px] flex-shrink-0 text-[#06C755]" strokeWidth={2} />
                  <p className="text-[14px] font-bold text-[#06C755]">代表の日向が直接ご返信します！</p>
                </div>
              </div>
              <a
                href="https://line.me/ti/p/YEthVfb_JD"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex h-[56px] w-full items-center justify-center rounded-[6px] bg-[#06C755] text-[16px] font-bold text-white transition-colors hover:bg-[#05a647]"
                onClick={() => trackConversion('line_click', 'contact')}
              >
                友だち追加して相談する
                <ChevronRight className="absolute right-5 h-5 w-5" strokeWidth={2.5} />
              </a>
            </div>

            {/* 安心ポイント */}
            <div className="rounded-[12px] border border-navy/20 bg-white pt-6 pb-4 px-7">
              <p className="mb-4 text-center text-[14px] font-bold text-[#444]">
                ── 安心してご相談いただくために ──
              </p>
              <div className="grid grid-cols-3 divide-x divide-navy/20">
                {trustPoints.map((pt, i) => (
                  <div key={i} className="flex min-h-[60px] flex-col items-center justify-center gap-2 px-3 text-center">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-brandorange text-brandorange">
                      {pt.icon}
                    </div>
                    <div>
                      <p className="text-[10px] leading-tight text-[#444]">{pt.sub}</p>
                      <p className="text-[17px] font-black text-brandorange">{pt.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 電話カード */}
            <div className="rounded-[12px] border border-brandorange bg-white px-8 py-6">
              <p className="mb-1 text-center text-[13px] font-bold text-brandorange">
                お急ぎの方はお電話ください
              </p>
              <div className="mb-1 flex items-center justify-center gap-3">
                <Phone className="h-7 w-7 flex-shrink-0 text-brandorange" strokeWidth={2} />
                <span className="text-[26px] font-black tracking-tight text-navy md:text-[36px]">
                  050-1882-4910
                </span>
              </div>
              <p className="mb-2 text-center text-[13px] text-[#444]">
                【受付時間】9:00〜17:30（日曜定休）
              </p>
              <a
                href="tel:05018824910"
                className="flex h-[56px] w-full items-center justify-center gap-2 rounded-[6px] bg-brandorange text-[16px] font-bold text-white transition-colors hover:bg-brandorange-dark"
                onClick={() => trackConversion('phone_click', 'contact')}
              >
                <Phone className="h-5 w-5 flex-shrink-0" strokeWidth={2} />
                今すぐ電話する
                <ChevronRight className="h-5 w-5 flex-shrink-0" strokeWidth={2.5} />
              </a>
            </div>

            {/* 3ステップ */}
            <div className="relative overflow-hidden rounded-[12px] border border-navy/20 bg-white px-7 pt-6 pb-5">
              <p className="mb-4 text-center text-[17px] font-black text-navy">
                ご相談はかんたん
                <span className="text-[25px] text-brandorange">3</span>
                ステップ！
              </p>
              <div className="flex items-start md:pr-[28%]">
                {steps.map((step, i) => (
                  <Fragment key={step.num}>
                    <div className="flex flex-1 flex-col items-center text-center">
                      <div className="mb-1.5 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#06C755] text-[14px] font-black text-white">
                        {step.num}
                      </div>
                      <div className="mb-0.5">{step.icon}</div>
                      <p className="hidden text-[12px] leading-tight text-[#444] md:block">{step.sub}</p>
                      <p className="mt-0.5 text-[14px] font-bold leading-tight text-navy">
                        {i === 2 ? <>ご案内・<br className="md:hidden" />ご提案</> : step.label}
                      </p>
                    </div>
                    {i < 2 && (
                      <div className="mt-[42px] flex-shrink-0 text-[#06C755]">
                        <ChevronRight className="h-6 w-6" strokeWidth={2} />
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>
              {/* 代表者エリア (PC only) */}
              <div className="absolute inset-y-0 right-0 hidden w-[28%] flex-col items-center justify-end pb-5 md:flex">
                <p className="mb-2 -rotate-2 text-center text-[13px] font-bold italic leading-snug text-brandorange">
                  私が直接<br />ご返信します！
                </p>
                <div className="h-[110px] w-[110px] overflow-hidden rounded-full border-2 border-navy/10">
                  <img
                    src={presidentImg}
                    alt="代表 日向"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* ─── 右カラム: フォーム ─── */}
          <div className="md:relative">
            {submitState === 'success' ? (
              <div
                role="status"
                className="relative md:absolute md:inset-0 overflow-hidden rounded-[12px] border border-navy/20 bg-[#fffdf8] px-6 py-16 text-center"
              >
                <div
                  aria-hidden="true"
                  className="tex-cream-board pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.10]"
                />
                <div className="relative">
                  <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-brandorange" strokeWidth={1.5} />
                  <h3 className="mb-3 text-[20px] font-black text-navy">
                    お問い合わせありがとうございます。
                  </h3>
                  <p className="text-[16px] leading-[1.9] text-ink">
                    内容を確認後、担当者より折り返しご連絡いたします。<br />
                    お急ぎの方はLINE・お電話でもお気軽にご相談ください。
                  </p>
                </div>
              </div>
            ) : (
              <div className="relative md:absolute md:inset-0 overflow-hidden rounded-[12px] border border-navy/20 bg-[#fffdf8]">
                <div
                  aria-hidden="true"
                  className="tex-cream-board pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.10]"
                />

                <div className="relative px-5 py-5 md:h-full md:overflow-y-auto md:px-6 md:py-8">

                {submitState === 'error' && (
                  <div
                    role="alert"
                    className="relative mb-6 rounded-[6px] border border-[#c0392b]/30 bg-[#fdf2f2] px-4 py-3 text-[15px] leading-[1.8] text-[#c0392b]"
                  >
                    送信できませんでした。<br />
                    時間をおいて再度お試しいただくか、LINE・お電話からお問い合わせください。
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative space-y-5 md:space-y-6">

                  <div aria-hidden="true" className="absolute h-0 w-0 overflow-hidden">
                    <input
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      {...register('honeypot')}
                    />
                  </div>

                  {/* お名前 */}
                  <div>
                    <label htmlFor="contact-name" className="mb-2 block text-[15px] font-bold text-navy">
                      お名前<span className="ml-1 text-[13px] font-bold text-brandorange">必須</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      placeholder="例）山田 太郎"
                      className={`${inputBase} ${errors.name ? 'border-[#c0392b]' : 'border-navy/30'}`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      {...register('name')}
                    />
                    {errors.name && (
                      <p id="contact-name-error" className="mt-1 text-[14px] text-[#c0392b]">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* 電話番号 */}
                  <div>
                    <label htmlFor="contact-phone" className="mb-2 block text-[15px] font-bold text-navy">
                      電話番号<span className="ml-1 text-[13px] font-bold text-brandorange">必須</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="例）090-1234-5678"
                      className={`${inputBase} ${errors.phone ? 'border-[#c0392b]' : 'border-navy/30'}`}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                      {...register('phone')}
                    />
                    {errors.phone && (
                      <p id="contact-phone-error" className="mt-1 text-[14px] text-[#c0392b]">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* メールアドレス */}
                  <div>
                    <label htmlFor="contact-email" className="mb-2 block text-[15px] font-bold text-navy">
                      メールアドレス<span className="ml-1 text-[13px] font-normal text-[#444]">任意</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      placeholder="例）example@email.com"
                      className={`${inputBase} ${errors.email ? 'border-[#c0392b]' : 'border-navy/30'}`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      {...register('email')}
                    />
                    {errors.email && (
                      <p id="contact-email-error" className="mt-1 text-[14px] text-[#c0392b]">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* お住まいの地域 */}
                  <div>
                    <label htmlFor="contact-area" className="mb-2 block text-[15px] font-bold text-navy">
                      お住まいの地域<span className="ml-1 text-[13px] font-bold text-brandorange">必須</span>
                    </label>
                    <input
                      id="contact-area"
                      type="text"
                      autoComplete="address-level2"
                      placeholder="例）甲府市、昭和町、甲斐市など"
                      className={`${inputBase} ${errors.area ? 'border-[#c0392b]' : 'border-navy/30'}`}
                      aria-invalid={!!errors.area}
                      aria-describedby={errors.area ? 'contact-area-error' : undefined}
                      {...register('area')}
                    />
                    {errors.area && (
                      <p id="contact-area-error" className="mt-1 text-[14px] text-[#c0392b]">
                        {errors.area.message}
                      </p>
                    )}
                  </div>

                  {/* お問い合わせ種別 */}
                  <div>
                    <label htmlFor="contact-type" className="mb-2 block text-[15px] font-bold text-navy">
                      お問い合わせ種別<span className="ml-1 text-[13px] font-bold text-brandorange">必須</span>
                    </label>
                    <select
                      id="contact-type"
                      className={`${inputBase} cursor-pointer ${errors.type ? 'border-[#c0392b]' : 'border-navy/30'}`}
                      aria-invalid={!!errors.type}
                      aria-describedby={errors.type ? 'contact-type-error' : undefined}
                      {...register('type')}
                    >
                      <option value="" disabled>選択してください</option>
                      <option value="外壁塗装">外壁塗装</option>
                      <option value="屋根塗装">屋根塗装</option>
                      <option value="雨漏り">雨漏り</option>
                      <option value="その他">その他</option>
                    </select>
                    {errors.type && (
                      <p id="contact-type-error" className="mt-1 text-[14px] text-[#c0392b]">
                        {errors.type.message}
                      </p>
                    )}
                  </div>

                  {/* お問い合わせ内容 */}
                  <div>
                    <label htmlFor="contact-message" className="mb-2 block text-[15px] font-bold text-navy">
                      お問い合わせ内容<span className="ml-1 text-[13px] font-bold text-brandorange">必須</span>
                    </label>
                    <textarea
                      id="contact-message"
                      placeholder="ご相談内容をご記入ください"
                      className={`${inputBase} min-h-[140px] resize-y md:min-h-[191px] ${errors.message ? 'border-[#c0392b]' : 'border-navy/30'}`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      {...register('message')}
                    />
                    {errors.message && (
                      <p id="contact-message-error" className="mt-1 text-[14px] text-[#c0392b]">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* 送信ボタン */}
                  <button
                    type="submit"
                    disabled={submitState === 'submitting'}
                    className="flex h-[56px] w-full items-center justify-center gap-2 rounded-[6px] bg-brandorange text-[16px] font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                  >
                    {submitState === 'submitting' ? (
                      <>
                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        送信中...
                      </>
                    ) : (
                      <>
                        送信する
                        <ChevronRight className="h-5 w-5 flex-shrink-0" strokeWidth={2.5} />
                      </>
                    )}
                  </button>
                </form>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* フッターノート */}
        <p className="mt-2 text-center text-[12px] text-[#444]">
          ※LINEは24時間受付中です。<br className="md:hidden" />営業時間内に順次ご返信いたします。
        </p>
      </div>
    </section>
  )
}
