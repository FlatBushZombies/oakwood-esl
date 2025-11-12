import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { BookingEmailTemplate } from "@/components/booking-email-template"
import React from "react"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const bookingData = await request.json()

    const { data, error } = await resend.emails.send({
      from: "English Lessons <onboarding@resend.dev>", // Replace with your verified domain
      to: [process.env.NOTIFICATION_EMAIL || "makanjirabrian@gmail.com"], // Replace with your email
      replyTo: bookingData.email,
      subject: `New Booking Request from ${bookingData.firstName} ${bookingData.lastName}`,
      react: React.createElement(BookingEmailTemplate, { bookingData }),
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error) {
    console.error("Error processing booking:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
