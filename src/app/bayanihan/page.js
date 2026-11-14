export const metadata = {
  title: "Bayanihan Scrum | Joe.dev",
  description:
    "A working paper on human-led, AI-assisted Agile, built on Filipino team culture.",
};

const REPO = "https://github.com/palalabot/bayanihan-scrum";

const PRINCIPLES = [
  ["Problems are gifts", "Finding a defect helps the team."],
  ["Disagreement is respect", "Silence is not respect."],
  ["Failure is data", "Hidden mistakes are the real failure."],
  ["Ask early", "A question today is cheaper than a bug next week."],
  ["Challenge ideas, never people", "Critique requirements, designs and code."],
  ["Improve continuously", "Do not wait for the retrospective."],
  ["Everyone teaches", "No single point of failure."],
  ["Safety is everyone's job", "Not only the Scrum Master's."],
];

const PHASES = [
  [
    "Discover",
    "requirements.md",
    "Reads docs, flags gaps",
    "Team questions assumptions",
  ],
  [
    "Design",
    "design.md",
    "Pattern pre-check",
    "Senior developer decides; team challenges",
  ],
  [
    "Plan",
    "tasks.md",
    "Spots missing criteria",
    "Scrum Master owns the stories",
  ],
  [
    "Build",
    "code, tests",
    "Suggests code and tests",
    "Developers review; QA challenges",
  ],
];

const PRACTICES = [
  [
    "GitOps",
    "Git is the single source of truth. Every change, from a person or an AI, arrives as a reviewed pull request, so history shows who decided what and a bad change can be reverted.",
  ],
  [
    "DevSecOps",
    "Security checks run automatically with every change: dependency, secret and static analysis scans, alongside the tests.",
  ],
  [
    "Continuous integration and delivery (CI/CD)",
    "Each change is built, tested and packaged by an automated pipeline, and released in small, frequent steps.",
  ],
  [
    "Automated testing",
    "Unit, integration and end-to-end tests, often written first (TDD) or from acceptance criteria (BDD), define what correct means independently of who wrote the code.",
  ],
  [
    "Code review",
    "A teammate reads each change before it merges, checking design, readability and risk. It is also how knowledge spreads.",
  ],
  [
    "Infrastructure as code",
    "Servers, networks and environments are described in versioned files, so they can be reviewed, reproduced and rebuilt.",
  ],
  [
    "Observability",
    "Logs, metrics and traces show what a running system is doing, so problems are found and explained quickly.",
  ],
  [
    "Feature flags",
    "New behavior ships switched off and is enabled gradually, so a release can be reversed without a redeploy.",
  ],
  [
    "Architecture decision records",
    "Short notes record what was decided and why, so later readers, human or AI, do not have to guess.",
  ],
];

const REFERENCES = [
  [
    "Lokalisadong Scrum.",
    "LinkedIn post.",
    "https://www.linkedin.com/posts/joel-alcarez-89331321_lokalisadong-scrumpdf-activity-7480535089668435968-nfie",
  ],
  [
    "Schwaber, K. & Sutherland, J. The Scrum Guide.",
    "",
    "https://scrumguides.org",
  ],
  [
    "Edmondson, A. (1999). Psychological safety and learning behavior in work teams.",
    "Administrative Science Quarterly, 44(2), 350–383.",
    "https://doi.org/10.2307/2666999",
  ],
  ["Hofstede, G. (1980). Culture's Consequences.", "Sage.", ""],
  ["AWS. Kiro: spec-driven development.", "", "https://kiro.dev"],
  [
    "Madison, B. The BMAD Method.",
    "",
    "https://github.com/bmad-code-org/BMAD-METHOD",
  ],
  [
    "Böckeler, B. Understanding Spec-Driven-Development: Kiro, spec-kit, and Tessl.",
    "martinfowler.com.",
    "https://www.martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html",
  ],
  [
    "Fried, J. & Heinemeier Hansson, D. (2013). Remote: Office Not Required.",
    "Crown Business.",
    "https://en.wikipedia.org/wiki/37signals",
  ],
  [
    "Meyer, E. (2014). The Culture Map: Breaking Through the Invisible Boundaries of Global Business.",
    "PublicAffairs.",
    "https://en.wikipedia.org/wiki/Erin_Meyer",
  ],
];

function Section({ n, title, children }) {
  return (
    <section className="mt-10">
      <h2 className="mb-3 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
        {n}. {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

const link = "text-accent underline underline-offset-2";

export default function BayanihanPage() {
  return (
    <article className="mx-auto w-full max-w-2xl px-6 py-10 font-serif text-[17px] leading-[1.75]">
      <a
        href="/"
        className="font-sans text-sm text-muted transition hover:text-accent"
      >
        ← Back to portfolio
      </a>

      <header className="mt-10 border-b border-line pb-8 text-center">
        <h1 className="text-3xl font-bold leading-tight md:text-4xl">
          Bayanihan Scrum
        </h1>
        <p className="mt-2 text-lg italic text-muted">
          Human-led, AI-assisted Agile for Filipino software teams
        </p>
        <p className="mt-4 font-sans text-sm text-muted">
          Joe Palala · Working paper · 2026
        </p>
      </header>

      <section className="mt-8 border-l-2 border-accent pl-5">
        <h2 className="mb-2 font-sans text-sm font-semibold uppercase tracking-[0.14em]">
          Abstract
        </h2>
        <p className="text-muted">
          Scrum assumes people will speak up, disagree and admit mistakes. Many
          Filipino teams find that costly. This paper proposes replacing status
          standups with collaboration sessions, and adding AI as an assistive
          tool without making it a gate. AI reads, analyzes and flags. People
          ask the questions, check the design and approve the spec.
          Collaboration stays human.
        </p>
      </section>

      <Section n="1" title="Problem">
        <p>
          The Scrum Guide assumes team members are comfortable speaking in
          public, challenging estimates and questioning authority. In
          organizations with high power distance [4][9], silence is often read
          as agreement, QA softens feedback, and juniors defer to seniors.
          Feedback arrives late and quality suffers.
        </p>
        <p>
          Adding AI raises a second problem. If one person must approve every AI
          output, the team has swapped one bottleneck for another.
        </p>
      </Section>

      <Section n="2" title="Practices for team culture">
        <p>
          Building on <em>Lokalisadong Scrum</em> [1], the daily standup becomes
          a collaboration session: where does someone need help, which
          assumptions should be challenged, which decisions deserve a second
          opinion. <em>Hiya</em> is redefined as shame over hiding problems, not
          over making mistakes. The principles below follow from this and from
          psychological safety research [3]. Remote teams have to cultivate this
          on purpose: power structures still exist at a distance, and they need
          to align so everyone works together (see [8], [9]).
        </p>
        <ul className="grid gap-3 font-sans sm:grid-cols-2">
          {PRINCIPLES.map(([title, text]) => (
            <li key={title} className="rounded-md border border-line p-3">
              <p className="text-sm font-semibold">{title}</p>
              <p className="text-sm text-muted">{text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section n="3" title="AI as an assistive tool">
        <p>
          Three rules keep people in the loop without slowing them down. First,
          there is no central approver: each role validates the work it owns.
          Second, review scales with risk, not volume. Formatting and
          documentation need none; architecture, security and releases need a
          human decision. Third, approval gates become short group sessions, so
          Scrum Masters and the whole team take part.
        </p>
      </Section>

      <Section n="4" title="Structure">
        <p>
          Work moves through three plain-text artifacts, following the
          requirements, design and tasks flow of Kiro [5], with roles borrowed
          from the BMAD Method [6]. Every role has a human owner and an AI
          assistant, and the human is accountable.
        </p>
        <div className="overflow-x-auto font-sans">
          <table className="w-full border-y border-line text-left text-sm">
            <caption className="mb-2 text-left text-muted">
              Table 1. What AI assists with, and what humans decide.
            </caption>
            <thead className="border-b border-line text-muted">
              <tr>
                <th className="py-2 pr-3">Phase</th>
                <th className="py-2 pr-3">Artifact</th>
                <th className="py-2 pr-3">AI assists</th>
                <th className="py-2">Humans decide</th>
              </tr>
            </thead>
            <tbody>
              {PHASES.map(([phase, ...cells]) => (
                <tr key={phase} className="border-b border-line last:border-0">
                  <td className="py-2 pr-3 font-semibold">{phase}</td>
                  {cells.map((c) => (
                    <td key={c} className="py-2 pr-3 text-muted last:pr-0">
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section n="5" title="The Scrum Master's role">
        <p>
          AI does not remove the Scrum Master; it sharpens the job. The Scrum
          Master owns story preparation, facilitates the session at each phase
          boundary, limits work in progress so review queues do not pile up, and
          watches for silence, such as no one questioning an AI suggestion this
          week.
        </p>
      </Section>

      <Section n="6" title="Limitations">
        <p>
          This is a proposal. It has not been tested across teams, and there are
          no metrics yet. Risk tiers and role boundaries will need tuning in
          practice.
        </p>
      </Section>

      <Section n="Appendix A" title="Supporting practices">
        <p>
          Short descriptions of delivery practices that keep AI-assisted work
          traceable, tested and reversible instead of vibe-coded.
        </p>
        <dl className="space-y-3">
          {PRACTICES.map(([term, text]) => (
            <div key={term}>
              <dt className="inline font-semibold">{term}. </dt>
              <dd className="inline text-muted">{text}</dd>
            </div>
          ))}
        </dl>
        <p>
          Protected branches and required approvers can also enforce the risk
          tiers in section 3.
        </p>
      </Section>

      <aside className="mt-10 border-l-2 border-line pl-5 text-[15px] leading-relaxed text-muted">
        <p>
          <strong className="font-semibold text-foreground">
            Author&apos;s note.
          </strong>{" "}
          The author is a software developer who has worked in Agile teams since
          2007. The ideas here come from that practice.
        </p>
      </aside>

      <section className="mt-12 border-t border-line pt-6">
        <h2 className="mb-3 font-sans text-sm font-semibold uppercase tracking-[0.14em]">
          References
        </h2>
        <ol className="space-y-2 pl-6 text-[15px] leading-relaxed text-muted [list-style:decimal]">
          {REFERENCES.map(([cite, venue, url]) => (
            <li key={cite}>
              {cite} {venue}{" "}
              {url && (
                <a href={url} className={link}>
                  {url.replace(/^https?:\/\/(www\.)?/, "").slice(0, 48)}
                </a>
              )}
            </li>
          ))}
        </ol>
        <p className="mt-6 font-sans text-sm">
          <a href={`${REPO}/blob/main/HUMAN_IN_THE_LOOP.md`} className={link}>
            Full human-in-the-loop document
          </a>{" "}
          ·{" "}
          <a href={REPO} className={link}>
            Source on GitHub
          </a>
        </p>
        <p className="mt-6">
          <a
            href="/"
            className="font-sans text-sm text-muted transition hover:text-accent"
          >
            ← Back to portfolio
          </a>
        </p>
      </section>
    </article>
  );
}
