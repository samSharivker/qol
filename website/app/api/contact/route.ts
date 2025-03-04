import emailjs from "@emailjs/browser";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Parse request body (since it's a POST request)
    const { name, email, message } = await req.json();

    // Environment variables
    const service_ID = process.env.EMAIL_SERVICE_ID;
    const template_ID = process.env.EMAIL_TEMPLATE_ID;
    const public_key = process.env.EMAIL_PUBLIC_KEY;

    // Validate input
    if (
      !name ||
      !email ||
      !message ||
      !service_ID ||
      !template_ID ||
      !public_key
    ) {
      return new Response(
        JSON.stringify({ error: "Missing a Required Field!" }),
        {
          headers: { "Content-Type": "application/json" },
          status: 400,
        }
      );
    }

    // Prepare email data
    const options = {
      user_name: name,
      user_email: email,
      message: message,
    };

    // Send email using EmailJS
    await emailjs.send(service_ID, template_ID, options, public_key);

    return new Response(JSON.stringify({ sent: true }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      { headers: { "Content-Type": "application/json" }, status: 500 }
    );
  }
}
