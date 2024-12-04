// email logic

import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { fullName, email, message } = await req.json();

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
      

    const mailOptions = {
      from: email,
      replyTo: email, // Set the user's email for replies
      to: "nicole@namassociates.co.tz", // Replace with the recipient email
      subject: `New Message from ${fullName}`,
      text: `Message: ${message}\n\nFrom: ${fullName} (${email})`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
