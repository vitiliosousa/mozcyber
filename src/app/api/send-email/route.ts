import { Resend } from "resend";
import { NextResponse } from "next/server";
import ContactEmail from "@/emails/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();


  try {
    const data = await resend.emails.send({
      from: `${process.env.EMAIL_FROM}`,
      to: [`${process.env.EMAIL_TO}`],
      subject: `${subject}`,
      html: `
        <h1>O formulario do website da mozcyber foi preenchido</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        <p><strong>Mensagem:</strong><br/>${message}</p>
      `,
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error });
  }
}
