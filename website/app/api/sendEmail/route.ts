import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message, recaptchaToken } = body as {
      name: string;
      email: string;
      message: string;
      recaptchaToken: string;
    };

    if (!name || !email || !message || !recaptchaToken) {
      return NextResponse.json(
        { error: "All fields and reCAPTCHA token are required" },
        { status: 400 }
      );
    }

    const recaptchaSecret = process.env.GOOGLE_SECRET_KEY;
    const recaptchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
      }
    );

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GOOGLE_EMAIL as string,
        pass: process.env.GOOGLE_APP_PASSWORD as string,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.GOOGLE_EMAIL as string,
      subject: "QOL | New Message from Website!",
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
