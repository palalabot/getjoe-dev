/** @type {import("next").Metadata} */
export const metadata = {
  title: "AI-assisted SDLC | Joe Palala",
  description:
    "How Joe Palala approaches the AI-assisted software development lifecycle: written specs, risk-based review, tests and traceable changes.",
  alternates: { canonical: "/ai-assisted-sdlc" },
  openGraph: { type: "article", url: "/ai-assisted-sdlc" },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI-assisted SDLC",
  author: { "@type": "Person", name: "Joe Palala", url: "https://getjoe.dev" },
  datePublished: "2026-11-16",
  dateModified: "2026-11-16", // update when content changes
  mainEntityOfPage: "https://getjoe.dev/ai-assisted-sdlc",
};

const POINTS = [
  [
    "Start from a written spec",
    "Work moves through three plain-text artifacts: requirements, design and tasks. AI can read them, flag gaps and suggest changes. People ask the questions and approve the spec.",
  ],
  [
    "Scale review with risk",
    "Formatting and documentation need little or no review. Architecture, security and releases need a human decision. Review effort follows risk, not volume.",
  ],
  [
    "Let tests define correct",
    "Unit, integration and end-to-end tests say what correct means, whoever wrote the code. They are the check that does not depend on trusting the author, human or AI.",
  ],
  [
    "Keep every change traceable",
    "Every change, from a person or an AI, arrives as a reviewed pull request. Architecture decision records note what was decided and why, so a bad change can be found and reverted.",
  ],
  [
    "Keep a person accountable",
    "Every role has a human owner and an AI assistant, and the human is accountable. AI assists the work. It does not own the outcome.",
  ],
];

export default function AiAssistedSdlcPage() {
  return (
    <article className="mx-auto w-full max-w-2xl px-6 py-10 text-[17px] leading-[1.75]">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD, no user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <a href="/" className="text-sm text-muted transition hover:text-accent">
        ← Back to portfolio
      </a>

      <header className="mt-10 border-b border-line pb-8">
        <h1 className="text-3xl font-bold leading-tight md:text-4xl">
          AI-assisted SDLC
        </h1>
        <p className="mt-4 text-muted">
          The software development lifecycle (SDLC) is how a team goes from a
          requirement to a released change. When AI helps with that work, the
          lifecycle still needs people who decide, review and own the outcome.
          This page summarizes how{" "}
          <a href="/" className="text-accent underline underline-offset-2">
            Joe Palala
          </a>{" "}
          approaches it.
        </p>
      </header>

      {POINTS.map(([title, text]) => (
        <section key={title} className="mt-8">
          <h2 className="mb-2 text-xl font-semibold">{title}</h2>
          <p className="text-muted">{text}</p>
        </section>
      ))}

      <aside className="mt-10 border-l-2 border-line pl-5 text-[15px] leading-relaxed text-muted">
        <p>
          <strong className="font-semibold text-foreground">Status.</strong>{" "}
          These ideas are a proposal I have written up. For now they are applied
          as skill prompting: written instructions that ask the AI to follow the
          process. They have not been tested across teams, and there are no
          metrics yet.
        </p>
        <p className="mt-3">
          <strong className="font-semibold text-foreground">
            Prompting versus harnesses.
          </strong>{" "}
          A harness is the tooling around the model that enforces the process
          instead of asking for it: hooks that run tests and linters after every
          change, permission rules, and required checks that block a change when
          they fail. Guardrails are part of a harness. That enforcement is the
          gap this proposal has not closed yet.
        </p>
      </aside>

      <p className="mt-10">
        Read the full write-up:{" "}
        <a
          href="/bayanihan"
          className="text-accent underline underline-offset-2"
        >
          Bayanihan Scrum, a collaboration-first workflow
        </a>
        .
      </p>
    </article>
  );
}
