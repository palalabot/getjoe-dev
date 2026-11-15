const { timingSafeEqual } = require("node:crypto");

// shortcut: sandbox sender only delivers to the Resend account owner's email;
// switch `from` to a verified domain address to send elsewhere.
const FROM = "Contact <onboarding@resend.dev>";

// Fails closed when CONTACT_API_KEY is unset.
function authorized(headers = {}) {
  const key = process.env.CONTACT_API_KEY;
  const got = headers["x-api-key"];
  if (!key || !got) return false;
  const a = Buffer.from(got);
  const b = Buffer.from(key);
  return a.length === b.length && timingSafeEqual(a, b);
}

async function main(args) {
  if (!authorized(args.__ow_headers)) {
    return { statusCode: 401, body: { error: "unauthorized" } };
  }

  const { name, email, message } = args;
  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: { error: "name, email and message are required" },
    };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [process.env.CONTACT_TO],
      reply_to: email,
      subject: `Contact form: ${name}`,
      text: `${name} <${email}>\n\n${message}`,
    }),
  });

  return { statusCode: res.ok ? 200 : 502, body: { ok: res.ok } };
}

exports.main = main;
