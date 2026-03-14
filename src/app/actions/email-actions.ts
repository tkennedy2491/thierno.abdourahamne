
'use server';

import nodemailer from 'nodemailer';

/**
 * Action serveur pour envoyer un email de contact.
 */
export async function sendContactEmail(data: { name: string; email: string; subject: string; message: string }) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${data.name}" <${data.email}>`,
      to: "thierno.241991@gmail.com",
      subject: `Portfolio - Nouveau message : ${data.subject}`,
      text: `Nom: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #6366f1;">Nouveau message de contact</h2>
          <p><strong>Nom :</strong> ${data.name}</p>
          <p><strong>Email :</strong> ${data.email}</p>
          <p><strong>Sujet :</strong> ${data.subject}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>Message :</strong></p>
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    return { success: false, error: "Impossible d'envoyer le message pour le moment." };
  }
}

/**
 * Action serveur pour l'inscription à la newsletter.
 */
export async function subscribeNewsletter(email: string) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // Confirmation à l'utilisateur
    await transporter.sendMail({
      from: '"Thierno Portfolio" <thierno.241991@gmail.com>',
      to: email,
      subject: "Confirmation d'inscription à la newsletter",
      html: `
        <div style="font-family: sans-serif; padding: 20px; text-align: center;">
          <h2 style="color: #6366f1;">Merci de votre inscription !</h2>
          <p>Vous êtes maintenant inscrit à ma newsletter. Vous recevrez prochainement mes dernières actualités et articles.</p>
          <p>À bientôt,<br><strong>Thierno Abdourahmane Diallo</strong></p>
        </div>
      `,
    });

    // Notification à Thierno
    await transporter.sendMail({
      from: '"Portfolio Bot" <thierno.241991@gmail.com>',
      to: "thierno.241991@gmail.com",
      subject: "Nouvel abonné Newsletter",
      text: `Un nouvel utilisateur s'est inscrit : ${email}`,
    });

    return { success: true };
  } catch (error) {
    console.error("Erreur newsletter :", error);
    return { success: false, error: "L'inscription a échoué." };
  }
}
