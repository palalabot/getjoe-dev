"use client";

import { useActionState } from "react";
import { sendContact } from "./actions";

const FIELD =
  "w-full rounded-md border border-line bg-card px-3 py-2 text-foreground";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContact, null);

  return (
    <>
      <p className="mb-6 max-w-xl rounded-md border border-line bg-chip px-4 py-3 text-sm text-foreground">
        The contact form is not available yet. It is still under construction.
      </p>
      <form action={formAction} className="flex max-w-xl flex-col gap-4">
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
    </>
  );
}
