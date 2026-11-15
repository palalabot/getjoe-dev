# 1. Contact form posts to a separate serverless API

Date: 2026-11-15
Status: Accepted

## Context

The site has no backend, but needs a contact form that sends email.

## Decision

We will post the form to a separate serverless API, configured by environment
variable. The API sends the email using the provider in
[ADR 2](0002-use-resend-for-contact-form-email.md).

## Consequences

The site depends on that API being deployed and running.
