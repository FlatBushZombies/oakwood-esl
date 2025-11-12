import type * as React from "react"

interface BookingData {
  firstName: string
  lastName: string
  email: string
  phone: string
  courseType: string
  level: string
  packageType: string
  preferredDate: string
  preferredTime: string
  goals: string
  hearAboutUs: string
}

interface BookingEmailTemplateProps {
  bookingData: BookingData
}

export const BookingEmailTemplate: React.FC<BookingEmailTemplateProps> = ({ bookingData }) => {
  const courseTypeLabels: Record<string, string> = {
    general: "General English",
    business: "Business English",
    conversation: "Conversation Practice",
    exam: "Exam Preparation (IELTS/TOEFL)",
    kids: "English for Kids",
    intensive: "Intensive Course",
  }

  const levelLabels: Record<string, string> = {
    beginner: "Beginner (A1)",
    elementary: "Elementary (A2)",
    intermediate: "Intermediate (B1)",
    "upper-intermediate": "Upper Intermediate (B2)",
    advanced: "Advanced (C1)",
    proficient: "Proficient (C2)",
    "not-sure": "Not Sure",
  }

  const packageLabels: Record<string, string> = {
    trial: "Trial Lesson Only (50% off)",
    starter: "Starter Package (8 lessons)",
    standard: "Standard Package (16 lessons)",
    intensive: "Intensive Package (24 lessons)",
    unlimited: "Unlimited Monthly",
  }

  const timeLabels: Record<string, string> = {
    morning: "Morning (9:00 AM - 12:00 PM)",
    afternoon: "Afternoon (12:00 PM - 5:00 PM)",
    evening: "Evening (5:00 PM - 9:00 PM)",
    flexible: "Flexible",
  }

  const hearAboutUsLabels: Record<string, string> = {
    google: "Google Search",
    social: "Social Media",
    friend: "Friend or Family",
    telegram: "Telegram",
    advertisement: "Advertisement",
    other: "Other",
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto", backgroundColor: "#f9fafb" }}>
      {/* Header */}
      <div style={{ backgroundColor: "#1f2937", color: "#ffffff", padding: "40px 24px", textAlign: "center" }}>
        <h1 style={{ margin: "0", fontSize: "28px", fontWeight: "bold" }}>🎉 New Booking Request</h1>
        <p style={{ margin: "8px 0 0", fontSize: "16px", opacity: "0.9" }}>
          A new student wants to book a trial lesson!
        </p>
      </div>

      {/* Content */}
      <div style={{ backgroundColor: "#ffffff", padding: "32px 24px" }}>
        {/* Student Information Section */}
        <div style={{ marginBottom: "32px" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#1f2937",
              marginBottom: "16px",
              paddingBottom: "8px",
              borderBottom: "2px solid #e5e7eb",
            }}
          >
            👤 Student Information
          </h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              <tr>
                <td
                  style={{
                    padding: "12px 0",
                    fontWeight: "600",
                    color: "#4b5563",
                    width: "40%",
                    verticalAlign: "top",
                  }}
                >
                  Full Name:
                </td>
                <td style={{ padding: "12px 0", color: "#1f2937" }}>
                  {bookingData.firstName} {bookingData.lastName}
                </td>
              </tr>
              <tr style={{ backgroundColor: "#f9fafb" }}>
                <td
                  style={{
                    padding: "12px 0",
                    fontWeight: "600",
                    color: "#4b5563",
                    width: "40%",
                    verticalAlign: "top",
                  }}
                >
                  Email:
                </td>
                <td style={{ padding: "12px 0", color: "#1f2937" }}>
                  <a href={`mailto:${bookingData.email}`} style={{ color: "#2563eb", textDecoration: "none" }}>
                    {bookingData.email}
                  </a>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "12px 0",
                    fontWeight: "600",
                    color: "#4b5563",
                    width: "40%",
                    verticalAlign: "top",
                  }}
                >
                  Phone:
                </td>
                <td style={{ padding: "12px 0", color: "#1f2937" }}>
                  <a href={`tel:${bookingData.phone}`} style={{ color: "#2563eb", textDecoration: "none" }}>
                    {bookingData.phone}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Course Details Section */}
        <div style={{ marginBottom: "32px" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#1f2937",
              marginBottom: "16px",
              paddingBottom: "8px",
              borderBottom: "2px solid #e5e7eb",
            }}
          >
            📚 Course Details
          </h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              <tr>
                <td
                  style={{
                    padding: "12px 0",
                    fontWeight: "600",
                    color: "#4b5563",
                    width: "40%",
                    verticalAlign: "top",
                  }}
                >
                  Course Type:
                </td>
                <td style={{ padding: "12px 0", color: "#1f2937" }}>
                  {courseTypeLabels[bookingData.courseType] || bookingData.courseType}
                </td>
              </tr>
              <tr style={{ backgroundColor: "#f9fafb" }}>
                <td
                  style={{
                    padding: "12px 0",
                    fontWeight: "600",
                    color: "#4b5563",
                    width: "40%",
                    verticalAlign: "top",
                  }}
                >
                  Current Level:
                </td>
                <td style={{ padding: "12px 0", color: "#1f2937" }}>
                  {levelLabels[bookingData.level] || bookingData.level}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "12px 0",
                    fontWeight: "600",
                    color: "#4b5563",
                    width: "40%",
                    verticalAlign: "top",
                  }}
                >
                  Package:
                </td>
                <td style={{ padding: "12px 0", color: "#1f2937" }}>
                  <strong>{packageLabels[bookingData.packageType] || bookingData.packageType}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Scheduling Section */}
        <div style={{ marginBottom: "32px" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#1f2937",
              marginBottom: "16px",
              paddingBottom: "8px",
              borderBottom: "2px solid #e5e7eb",
            }}
          >
            📅 Scheduling Preferences
          </h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              <tr>
                <td
                  style={{
                    padding: "12px 0",
                    fontWeight: "600",
                    color: "#4b5563",
                    width: "40%",
                    verticalAlign: "top",
                  }}
                >
                  Preferred Date:
                </td>
                <td style={{ padding: "12px 0", color: "#1f2937" }}>
                  {new Date(bookingData.preferredDate).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </td>
              </tr>
              <tr style={{ backgroundColor: "#f9fafb" }}>
                <td
                  style={{
                    padding: "12px 0",
                    fontWeight: "600",
                    color: "#4b5563",
                    width: "40%",
                    verticalAlign: "top",
                  }}
                >
                  Preferred Time:
                </td>
                <td style={{ padding: "12px 0", color: "#1f2937" }}>
                  {timeLabels[bookingData.preferredTime] || bookingData.preferredTime}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Additional Information Section */}
        {(bookingData.goals || bookingData.hearAboutUs) && (
          <div style={{ marginBottom: "32px" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#1f2937",
                marginBottom: "16px",
                paddingBottom: "8px",
                borderBottom: "2px solid #e5e7eb",
              }}
            >
              ℹ️ Additional Information
            </h2>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                {bookingData.goals && (
                  <tr>
                    <td
                      style={{
                        padding: "12px 0",
                        fontWeight: "600",
                        color: "#4b5563",
                        width: "40%",
                        verticalAlign: "top",
                      }}
                    >
                      Learning Goals:
                    </td>
                    <td style={{ padding: "12px 0", color: "#1f2937", lineHeight: "1.6" }}>{bookingData.goals}</td>
                  </tr>
                )}
                {bookingData.hearAboutUs && (
                  <tr style={{ backgroundColor: bookingData.goals ? "#f9fafb" : "transparent" }}>
                    <td
                      style={{
                        padding: "12px 0",
                        fontWeight: "600",
                        color: "#4b5563",
                        width: "40%",
                        verticalAlign: "top",
                      }}
                    >
                      How They Found Us:
                    </td>
                    <td style={{ padding: "12px 0", color: "#1f2937" }}>
                      {hearAboutUsLabels[bookingData.hearAboutUs] || bookingData.hearAboutUs}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* CTA Section */}
        <div
          style={{
            backgroundColor: "#f0fdf4",
            border: "1px solid #86efac",
            borderRadius: "8px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <p style={{ margin: "0 0 12px", color: "#166534", fontWeight: "600", fontSize: "16px" }}>
            ⏰ Action Required
          </p>
          <p style={{ margin: "0", color: "#15803d", fontSize: "14px", lineHeight: "1.6" }}>
            Please respond to this student within 24 hours to confirm their trial lesson and match them with an
            appropriate teacher.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div style={{ backgroundColor: "#f9fafb", padding: "24px", textAlign: "center", color: "#6b7280" }}>
        <p style={{ margin: "0", fontSize: "14px" }}>
          This is an automated notification from your English Lessons booking system.
        </p>
        <p style={{ margin: "8px 0 0", fontSize: "12px" }}>
          Booking submitted on {new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" })}
        </p>
      </div>
    </div>
  )
}
