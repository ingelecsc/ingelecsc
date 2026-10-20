import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL_TO = process.env.EMAIL_TO ?? "info@ingelecsc.com";

const FROM = "INGELEC San Carlos <noreply@ingelecsc.com>";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, phone, subject, message, position, cv_link, type } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Nombre y email son requeridos." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "El email no tiene un formato válido." },
        { status: 400 }
      );
    }

    const isJobApplication = type === "job_application";

    const htmlContent = isJobApplication
      ? `
        <h2 style="color:#2D003A">Nueva postulación — INGELEC San Carlos</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px">
          <tr><td style="padding:6px 12px;color:#666">Nombre</td><td style="padding:6px 12px"><strong>${name}</strong></td></tr>
          <tr style="background:#f9f9f9"><td style="padding:6px 12px;color:#666">Email</td><td style="padding:6px 12px">${email}</td></tr>
          <tr><td style="padding:6px 12px;color:#666">Teléfono</td><td style="padding:6px 12px">${phone || "—"}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding:6px 12px;color:#666">Perfil</td><td style="padding:6px 12px">${position || "—"}</td></tr>
          <tr><td style="padding:6px 12px;color:#666">Experiencia</td><td style="padding:6px 12px">${message || "—"}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding:6px 12px;color:#666">CV / Link</td><td style="padding:6px 12px">${cv_link ? `<a href="${cv_link}">${cv_link}</a>` : "—"}</td></tr>
        </table>
      `
      : `
        <h2 style="color:#2D003A">Nueva consulta — INGELEC San Carlos</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px">
          <tr><td style="padding:6px 12px;color:#666">Nombre</td><td style="padding:6px 12px"><strong>${name}</strong></td></tr>
          <tr style="background:#f9f9f9"><td style="padding:6px 12px;color:#666">Empresa</td><td style="padding:6px 12px">${company || "—"}</td></tr>
          <tr><td style="padding:6px 12px;color:#666">Email</td><td style="padding:6px 12px">${email}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding:6px 12px;color:#666">Teléfono</td><td style="padding:6px 12px">${phone || "—"}</td></tr>
          <tr><td style="padding:6px 12px;color:#666">Servicio</td><td style="padding:6px 12px">${subject || "—"}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding:6px 12px;color:#666">Mensaje</td><td style="padding:6px 12px">${message || "—"}</td></tr>
        </table>
      `;

    const emailSubject = isJobApplication
      ? `Postulación: ${position || "Sin perfil"} — ${name}`
      : `Consulta web: ${subject || "Sin asunto"} — ${name}`;

    const { error } = await resend.emails.send({
      from: FROM,
      to: [EMAIL_TO],
      replyTo: email,
      subject: emailSubject,
      html: htmlContent,
    });

    if (error) {
      console.error("[INGELEC Contact] Resend error:", error);
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje. Intentá por WhatsApp." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { ok: true, message: "Mensaje recibido correctamente." },
      { status: 200 }
    );
  } catch (err) {
    console.error("[INGELEC Contact] Error:", err);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
