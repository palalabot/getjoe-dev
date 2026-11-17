"use server";

/** @typedef {{ ok: boolean, message: string }} ContactState */

// getjoe.dev must be a verified domain in Resend, or every send fails.
const FROM = "Contact <contact@getjoe.dev>";
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Spam filter: only .com/.ph domains, or Gmail/Yahoo/Outlook on any country TLD.
const ALLOWED =
  /@((gmail|yahoo|outlook)\.(co\.)?[a-z]{2,3}(\.[a-z]{2})?|[^\s@]+\.(com|ph))$/i;

// Env vars (Vercel project settings, never in the repo):
//   RESEND_API_KEY  Resend sending key
//   CONTACT_TO      inbox that receives messages
/**
 * @param {FormDataEntryValue | null} v
 * @param {number} max
 */
const field = (v, max) => (typeof v === "string" ? v.trim().slice(0, max) : "");

/**
 * @param {ContactState | null} _prev
 * @param {FormData} formData
 * @returns {Promise<ContactState>}
 */
export async function sendContact(_prev, formData) {
  const { RESEND_API_KEY, CONTACT_TO } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO) {
    return { ok: false, message: "Contact form is not configured." };
  }

  // Honeypot filled: pretend success so the bot moves on.
  if (formData.get("website")) {
    return { ok: true, message: "Thanks, your message was sent." };
  }

  // Newlines stripped so the name cannot break the subject line.
  const name = field(formData.get("name"), 200).replace(/[\r\n]+/g, " ");
  const email = field(formData.get("email"), 200);
  const subject = field(formData.get("subject"), 200).replace(/[\r\n]+/g, " ");
  const message = field(formData.get("message"), 5000);
  if (!name || !message || !EMAIL.test(email)) {
    return {
      ok: false,
      message: "Enter your name, a valid email and a message.",
    };
  }

  // Disallowed domain: pretend success, like the honeypot, so nothing is sent.
  if (!ALLOWED.test(email)) {
    return { ok: true, message: "Thanks, your message was sent." };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [CONTACT_TO],
        reply_to: email,
        subject: `Contact form: ${subject || name}`,
        text: `${name} <${email}>\n\n${message}`,
      }),
    });
    if (!res.ok) throw new Error(`Resend responded ${res.status}`);
    return { ok: true, message: "Thanks, your message was sent." };
  } catch {
    return { ok: false, message: "Could not send your message. Try again." };
  }
}
