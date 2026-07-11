import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1),
  phone: z.string().min(1),
  email: z.union([z.string().email(), z.literal('')]),
  type: z.enum(['外壁塗装', '屋根塗装', '雨漏り', 'その他']),
  message: z.string().min(1),
  honeypot: z.string(),
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' })
    return
  }

  const parsed = schema.safeParse(req.body)
  if (!parsed.success) {
    res.status(400).json({ error: 'Validation failed' })
    return
  }

  const { name, phone, email, type, message, honeypot } = parsed.data

  // honeypot に値があればスパムとして無視
  if (honeypot) {
    res.status(200).json({ ok: true })
    return
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    const now = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })
    const referer = (req.headers['referer'] as string) ?? '不明'

    const emailText = [
      `お名前: ${name}`,
      `電話番号: ${phone}`,
      `メールアドレス: ${email || '未入力'}`,
      `お問い合わせ種別: ${type}`,
      '',
      'お問い合わせ内容:',
      message,
      '',
      `送信日時: ${now}`,
      `送信元URL: ${referer}`,
    ].join('\n')

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev',
      to: process.env.CONTACT_TO_EMAIL ?? '',
      subject: `【お問い合わせ】${name}様より（${type}）`,
      text: emailText,
      ...(email ? { replyTo: email } : {}),
    } as any)

    res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Contact API error:', err)
    res.status(500).json({ error: 'メール送信に失敗しました' })
  }
}
