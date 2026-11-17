# 3. Contact form sends email from the Next.js server action

Date: 2026-11-17
Status: Accepted. Replaces [ADR 1](0001-contact-form-via-serverless-email-api.md).

## Context

ADR 1 assumed the site had no backend. It is a Next.js app on Vercel, and its
server actions run on the server, so they can hold a secret.

## Decision

`src/app/contact/actions.js` calls Resend directly. `RESEND_API_KEY` and
`CONTACT_TO` are set in the Vercel project's environment variables. The
separate API and `CONTACT_API_URL` / `CONTACT_API_KEY` are no longer used.

## Consequences

One deployment, no second service. The key must never be a `NEXT_PUBLIC_`
variable. The form has no spam protection yet.
