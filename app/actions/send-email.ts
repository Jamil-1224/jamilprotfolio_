"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !subject || !message) {
    return { success: false, error: "All fields are required" };
  }

  console.log("--- SMTP AUTH DEBUG ---");
  console.log("Using Username:", process.env.MAIL_USERNAME);
  console.log("Password Length:", process.env.MAIL_PASSWORD ? process.env.MAIL_PASSWORD.length : 0);
  console.log("If these do not match your .env file, YOU MUST RESTART THE SERVER.");
  console.log("-----------------------");

  const isGmail = process.env.MAIL_HOST?.includes("gmail.com");
  
  const transporter = nodemailer.createTransport(
    isGmail 
      ? {
          service: "gmail",
          auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
          },
        }
      : {
          host: process.env.MAIL_HOST,
          port: Number(process.env.MAIL_PORT) || 587,
          secure: process.env.MAIL_ENCRYPTION === "tls" ? false : true,
          auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
          },
        }
  );

  try {
    const info = await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: process.env.MAIL_TO_ADDRESS,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <h3>Message:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    console.log("Message sent: %s", info.messageId);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return { success: false, error: `SMTP Error: ${errorMessage}` };
  }
}
