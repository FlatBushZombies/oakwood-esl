import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json()

    await resend.emails.send({
      from: "Oakwood Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_RECEIVER_EMAIL!,
      replyTo: email,
      subject: `New Contact Inquiry: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Resend error:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
