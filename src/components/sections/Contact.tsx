import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ChevronRight, CheckCircle2, MessageCircle, Phone } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(1, 'お名前を入力してください'),
  phone: z.string().min(1, '電話番号を入力してください'),
  email: z.union([
    z.string().email('メールアドレスの形式が正しくありません'),
    z.literal(''),
  ]),
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
      type: '',
      message: '',
      honeypot: '',
    },
  })

  const onSubmit = async (data: FormValues) => {
    setSubmitState('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setSubmitState('success')
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: 'form_submit', form_name: 'contact' })
    } catch {
      setSubmitState('error')
    }
  }

  const inputBase =
    'w-full rounded-[6px] border px-4 py-3 text-[16px] text-ink bg-[#fffdf8] outline-none transition-colors focus:border-brandorange'

  return (
    <section id="contact" className="relative overflow-hidden bg-cream scroll-mt-24">
      {/* テクスチャオーバーレイ */}
      <div
        aria-hidden="true"
        className="tex-cream-board pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.06]"
      />

      <div className="relative mx-auto max-w-content px-5 pb-20 pt-16 md:px-6 md:pb-24 md:pt-24">
        <div className="flex flex-col gap-10">

          {/* ─── 上段：見出し・説明・LINE・電話 ─── */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-brandorange" strokeWidth={2} />
              <span className="text-[12px] font-bold tracking-[0.22em] text-navy/60">CONTACT</span>
            </div>

            <div className="mb-3 inline-block -rotate-1 bg-chip px-4 py-1.5 text-[13px] font-bold tracking-wide text-navy">
              無料・追加費用なし
            </div>

            <h2 className="mt-2 text-[36px] font-black leading-tight tracking-tight text-navy md:text-[48px]">
              無料お見積り・<br />お問い合わせ
            </h2>

            <div
              aria-hidden="true"
              className="brush-orange-long mt-2 h-[8px] w-[240px]"
            />

            <p className="mt-6 text-[16px] leading-[1.9] text-ink">
              外壁塗装や住宅メンテナンスについて、
              気になることがございましたらお気軽にご相談ください。
              内容を確認後、担当者より折り返しご連絡いたします。
            </p>

            {/* LINE */}
            <div className="mt-8">
              <a
                href="https://line.me/ti/p/YEthVfb_JD"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-[6px] bg-[#06C755] px-4 py-3 text-[15px] font-bold text-white transition-colors hover:bg-[#05a647]"
              >
                <MessageCircle className="h-5 w-5 flex-shrink-0" strokeWidth={2} />
                LINEで相談する（24時間受付）
                <ChevronRight className="h-4 w-4 flex-shrink-0" />
              </a>
            </div>

            {/* 電話 */}
            <div className="mt-3">
              <a
                href="tel:09027669657"
                className="flex w-full items-center justify-center gap-2 rounded-[6px] border-2 border-navy px-4 py-3 text-[15px] font-bold text-navy transition-colors hover:bg-navy hover:text-white"
              >
                <Phone className="h-5 w-5 flex-shrink-0" strokeWidth={2} />
                090-2766-9657
              </a>
              <p className="mt-1.5 text-center text-[13px] text-ink-muted">
                受付時間 9:00〜17:30（日曜定休）
              </p>
            </div>
          </div>

          {/* ─── 下段：フォーム ─── */}
          <div>
            {submitState === 'success' ? (
              <div
                role="status"
                className="relative overflow-hidden rounded-[8px] border border-navy/20 bg-[#fffdf8] px-6 py-16 text-center md:px-10"
              >
                <div
                  aria-hidden="true"
                  className="tex-cream-board pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.10]"
                />
                <div className="relative">
                  <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-brandorange" strokeWidth={1.5} />
                  <h3 className="mb-3 text-[20px] font-black text-navy md:text-[24px]">
                    お問い合わせありがとうございます。
                  </h3>
                  <p className="text-[16px] leading-[1.9] text-ink">
                    内容を確認後、担当者より折り返しご連絡いたします。<br />
                    お急ぎの方はLINE・お電話でもお気軽にご相談ください。
                  </p>
                </div>
              </div>
            ) : (
              <div className="relative overflow-hidden rounded-[8px] border border-navy/20 bg-[#fffdf8] px-5 py-6 md:px-10 md:py-10">
                <div
                  aria-hidden="true"
                  className="tex-cream-board pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.10]"
                />

                {/* 送信エラー通知 */}
                {submitState === 'error' && (
                  <div
                    role="alert"
                    className="relative mb-6 rounded-[6px] border border-[#c0392b]/30 bg-[#fdf2f2] px-4 py-3 text-[15px] leading-[1.8] text-[#c0392b]"
                  >
                    送信できませんでした。<br />
                    時間をおいて再度お試しいただくか、LINE・お電話からお問い合わせください。
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative space-y-5">

                  {/* honeypot（スパム対策） */}
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
                    <label htmlFor="contact-name" className="mb-1.5 block text-[15px] font-bold text-navy">
                      お名前<span className="ml-1 text-[13px] font-bold text-brandorange">必須</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      placeholder="山田 太郎"
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
                    <label htmlFor="contact-phone" className="mb-1.5 block text-[15px] font-bold text-navy">
                      電話番号<span className="ml-1 text-[13px] font-bold text-brandorange">必須</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="090-1234-5678"
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
                    <label htmlFor="contact-email" className="mb-1.5 block text-[15px] font-bold text-navy">
                      メールアドレス<span className="ml-1 text-[13px] font-normal text-ink-muted">任意</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      placeholder="example@email.com"
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

                  {/* お問い合わせ種別 */}
                  <div>
                    <label htmlFor="contact-type" className="mb-1.5 block text-[15px] font-bold text-navy">
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
                    <label htmlFor="contact-message" className="mb-1.5 block text-[15px] font-bold text-navy">
                      お問い合わせ内容<span className="ml-1 text-[13px] font-bold text-brandorange">必須</span>
                    </label>
                    <textarea
                      id="contact-message"
                      placeholder="ご相談内容をご記入ください"
                      className={`${inputBase} resize-y min-h-[160px] md:min-h-[180px] ${errors.message ? 'border-[#c0392b]' : 'border-navy/30'}`}
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
                    className="flex w-full items-center justify-center gap-2 rounded-[6px] bg-brandorange px-6 py-4 text-[16px] font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                  >
                    {submitState === 'submitting' ? (
                      <>
                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        送信中...
                      </>
                    ) : (
                      <>
                        無料で問い合わせる
                        <ChevronRight className="h-5 w-5 flex-shrink-0" strokeWidth={2.5} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
