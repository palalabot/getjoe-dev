import resume from "../_data/resume.json";

export const metadata = {
  title: `${resume.name} | Resume`,
  description: resume.summary,
};

function Section({ title, children }) {
  return (
    <section className="mt-6">
      <h2 className="mb-2 border-b border-neutral-300 pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function ResumePage() {
  const r = resume;

  return (
    <>
      <script
        // Nav "Download Resume" links here with ?download=1 to open the print dialog.
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static string, no user input
        dangerouslySetInnerHTML={{
          __html: 'location.search.includes("download")&&print()',
        }}
      />
      <article className="mx-auto my-6 w-full max-w-[8.5in] rounded-lg bg-white px-6 py-8 font-sans text-[15px] leading-relaxed text-neutral-900 shadow-sm sm:px-12 sm:py-10 print:my-0 print:max-w-none print:rounded-none print:p-0 print:text-[11px] print:shadow-none">
        <header>
          <h1 className="text-3xl font-bold tracking-tight">{r.name}</h1>
          <p className="text-neutral-600">{r.title}</p>
          <p className="mt-1 text-sm text-neutral-600">
            {r.location} ·{" "}
            <a href={`mailto:${r.email}`} className="underline">
              {r.email}
            </a>
            {r.links.map((l) => (
              <span key={l.url}>
                {" "}
                ·{" "}
                <a href={l.url} className="underline">
                  {l.label}
                </a>
              </span>
            ))}
          </p>
        </header>

        <p className="mt-5">{r.summary}</p>

        <Section title="Skills">
          <dl className="grid grid-cols-[6.5rem_1fr] gap-x-3 gap-y-1 text-sm">
            {r.skills.map((s) => (
              <div key={s.category} className="contents">
                <dt className="font-semibold">{s.category}</dt>
                <dd className="text-neutral-700">{s.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section title="Experience">
          <div className="space-y-4">
            {r.experience.map((job) => (
              <div key={job.company}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-semibold">
                    {job.company}
                    <span className="font-normal text-neutral-600">
                      {" "}
                      — {job.role}
                    </span>
                  </h3>
                  <span className="text-sm text-neutral-500">
                    {job.start} – {job.end}
                  </span>
                </div>
                <ul className="mt-1 list-disc space-y-0.5 pl-5">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <p className="mt-1 text-sm text-neutral-500">
                  {job.skills.join(" · ")}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-neutral-600">{r.earlier}</p>
        </Section>

        <Section title="Education & Speaking">
          <ul className="space-y-0.5 text-sm">
            {r.education.map((e) => (
              <li key={e.degree}>
                <span className="font-semibold">{e.degree}</span> — {e.school}
              </li>
            ))}
            {r.speaking.map((s) => (
              <li key={s}>
                <span className="font-semibold">Speaker</span> — {s}
              </li>
            ))}
          </ul>
        </Section>
      </article>
    </>
  );
}
