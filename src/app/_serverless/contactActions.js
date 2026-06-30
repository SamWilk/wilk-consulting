"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function cleanField(value) {
  return String(value || "").trim();
}

export async function sendContactRequest(_previousState, formData) {
  const name = cleanField(formData.get("name"));
  const email = cleanField(formData.get("email"));
  const business = cleanField(formData.get("business"));
  const details = cleanField(formData.get("details"));

  if (!name || !email || !business || !details) {
    return {
      ok: false,
      message: "Please complete every field before sending your request.",
    };
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      ok: false,
      message: "This form is not configured yet. Please email samwilk1898@gmail.com.",
    };
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || "samwilk1898@gmail.com";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ||
    "Sam Wilk Consulting <onboarding@resend.dev>";

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New consulting inquiry from ${name}`,
      text: [
        "New website inquiry from the consulting site.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Business: ${business}`,
        "",
        "Project details:",
        details,
      ].join("\n"),
    });

    return {
      ok: true,
      message: "Request sent. Sam will follow up soon.",
    };
  } catch {
    return {
      ok: false,
      message: "The request could not be sent. Please email samwilk1898@gmail.com.",
    };
  }
}
