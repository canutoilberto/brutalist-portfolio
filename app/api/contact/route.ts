import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function isValidEmail(email: string): boolean {
  // Regex simples para validação de e-mail
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function logEvent(event: string, details: Record<string, any>) {
  // Log simples para auditoria (pode ser trocado por um serviço externo)
  // Não logar mensagem completa para evitar exposição de dados sensíveis
  console.log(`[Contato] ${event}:`, {
    ...details,
    timestamp: new Date().toISOString(),
  });
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) return false;
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${token}`,
    });
    const data = await res.json();
    return data.success && (data.score === undefined || data.score > 0.5);
  } catch (err) {
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message, recaptchaToken } = await req.json();

    logEvent("Tentativa de envio", { name, email, subject });

    // Validação do reCAPTCHA
    if (!recaptchaToken) {
      logEvent("reCAPTCHA ausente", {});
      return NextResponse.json(
        { message: "Falha na verificação do reCAPTCHA." },
        { status: 400 }
      );
    }
    const recaptchaValid = await verifyRecaptcha(recaptchaToken);
    if (!recaptchaValid) {
      logEvent("reCAPTCHA inválido", {});
      return NextResponse.json(
        { message: "Falha na verificação do reCAPTCHA." },
        { status: 400 }
      );
    }

    if (!name || !email || !subject || !message) {
      logEvent("Erro de validação", { name, email, subject });
      return NextResponse.json(
        { message: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }
    if (name.length < 2 || name.length > 100) {
      logEvent("Erro de validação nome", { name });
      return NextResponse.json(
        { message: "Nome deve ter entre 2 e 100 caracteres." },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      logEvent("Erro de validação email", { email });
      return NextResponse.json(
        { message: "E-mail inválido." },
        { status: 400 }
      );
    }
    if (subject.length < 3 || subject.length > 150) {
      logEvent("Erro de validação assunto", { subject });
      return NextResponse.json(
        { message: "Assunto deve ter entre 3 e 150 caracteres." },
        { status: 400 }
      );
    }
    if (message.length < 10 || message.length > 2000) {
      logEvent("Erro de validação mensagem", { messageLength: message.length });
      return NextResponse.json(
        { message: "Mensagem deve ter entre 10 e 2000 caracteres." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `[Contato] ${subject}`,
      text: message,
      html: `<p><b>Nome:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Assunto:</b> ${subject}</p>
             <p><b>Mensagem:</b><br/>${message}</p>`,
    });

    logEvent("Envio bem-sucedido", { name, email, subject });

    return NextResponse.json(
      { message: "Mensagem enviada com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    logEvent("Erro ao enviar e-mail", {
      error: error instanceof Error ? error.message : error,
    });
    return NextResponse.json(
      { message: "Erro ao enviar e-mail." },
      { status: 500 }
    );
  }
}
