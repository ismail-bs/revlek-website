import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const from = process.env.RESEND_FROM_EMAIL || 'no-reply@revlek.com'
    const to = process.env.CONTACT_TO_EMAIL || 'info.revlek@gmail.com'

    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[Contact] ${subject} - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })

    if (error) {
      console.error('Resend API error:', error)
      return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ ok: true, id: data?.id || null })
  } catch (err) {
    console.error('Email send error:', err)
    return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 })
  }
}