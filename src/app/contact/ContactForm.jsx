"use client";

import { useActionState, useEffect, useState } from "react";
import { SERVICES } from "../_data/services";
import { sendContact } from "./actions";

const FIELD =
  "w-full rounded-md border border-line bg-card px-3 py-2 text-foreground";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContact, null);
  // Random pick after mount; the static HTML always gets the first one, so hydration matches.
  const [placeholder, setPlaceholder] = useState(SERVICES[0].subject);
  useEffect(() => {
    setPlaceholder(
      SERVICES[Math.floor(Math.random() * SERVICES.length)].subject,
    );
  }, []);

  return (
    <form action={formAction} className="flex max-w-xl flex-col gap-4">
      {/* Honeypot: hidden from people, bots fill it in. */}
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-px w-px opacity-0"
      />
      <label className="text-sm font-semibold text-foreground">
        Name
        <input
          name="name"
          autoComplete="name"
          required
          maxLength={200}
          className={FIELD}
        />
      </label>
      <label className="text-sm font-semibold text-foreground">
        Email
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={200}
          className={FIELD}
        />
      </label>
      <label className="text-sm font-semibold text-foreground">
        Subject
        <input
          name="subject"
          maxLength={200}
          placeholder={`e.g. ${placeholder}`}
          className={FIELD}
        />
      </label>
      <label className="text-sm font-semibold text-foreground">
        Message
        <textarea
          name="message"
          required
          rows={6}
          maxLength={5000}
          className={FIELD}
        />
      </label>
      <button
        type="submit"
        disabled={pending}
        className="self-start rounded-md bg-accent px-5 py-2 font-semibold text-background disabled:opacity-60"
      >
        {pending ? "Sending..." : "Send message"}
      </button>
      <p aria-live="polite" className="text-sm text-muted">
        {state?.message}
      </p>
    </form>
  );
}
