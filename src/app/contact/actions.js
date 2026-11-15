"use server";

// Forwards every form field to CONTACT_API_URL (full endpoint URL, set in .env).
export async function sendContact(_prev, formData) {
  const url = process.env.CONTACT_API_URL;
  if (!url) return { ok: false, message: "Contact form is not configured." };

  // Drop React's internal $ACTION_* fields.
  const body = Object.fromEntries(
    [...formData].filter(([key]) => !key.startsWith("$ACTION_")),
  );

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.CONTACT_API_KEY ?? "",
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`API responded ${res.status}`);
    return { ok: true, message: "Thanks, your message was sent." };
  } catch {
    return { ok: false, message: "Could not send your message. Try again." };
  }
}
