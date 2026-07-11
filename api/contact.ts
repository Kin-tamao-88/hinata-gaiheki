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

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return new Response(JSON.stringify({ error: 'Validation failed' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const { name, phone, email, type, message, honeypot } = parsed.data

  // honeypot に値があればスパムとして無視（正常レスポンスを返す）
  if (honeypot) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const now = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })
  const referer = req.headers.get('referer') ?? '不明'

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

  try {
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev',
      to: process.env.CONTACT_TO_EMAIL ?? '',
      subject: `【お問い合わせ】${name}様より（${type}）`,
      text: emailText,
      ...(email ? { replyTo: email } : {}),
    } as Parameters<typeof resend.emails.send>[0])
  } catch (err) {
    console.error('Resend error:', err)
    return new Response(JSON.stringify({ error: 'メール送信に失敗しました' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}
