import ProjectCard from "./_components/ProjectCard";
import { PROJECTS } from "./_data/projects";
import resume from "./_data/resume.json";

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joe Palala",
    jobTitle: "Senior Full-Stack Engineer",
    url: "https://getjoe.dev",
    sameAs: [...resume.links.map((l) => l.url), "https://x.com/joepalaladev"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Joe Palala",
    url: "https://getjoe.dev",
  },
];

const COMPANIES = [
  { name: "HeroTeams" },
  { name: "Gappify" },
  { name: "EnablesGroup" },
  { name: "Myridius" },
  { name: "Stratpoint", current: true },
];

const SECTIONS = [
  ["Resume", "My one-page CV, also available as JSON", "/resume"],
  ["Projects", "Selected things I've built", "#projects"],
  [
    "AI-assisted SDLC",
    "How I approach AI across the software lifecycle: specs, review, tests",
    "/ai-assisted-sdlc",
  ],
  [
    "Bayanihan Scrum",
    "A collaboration-first, AI-assisted workflow I wrote up",
    "/bayanihan",
  ],
];

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD, no user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <section className="mb-20 max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          Portfolio
        </p>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
          Joe Palala, Senior Full-Stack Engineer
        </h1>

        <p className="text-lg leading-relaxed text-muted">
          Hi, I&apos;m Joe, a senior full-stack engineer from Metro Manila,
          Philippines. I work in{" "}
          <strong className="font-semibold text-foreground">
            Node.js, React, and some Java
          </strong>{" "}
          on e-commerce and SaaS systems. I focus on how teams build with AI
          across the lifecycle: specs, design, review, testing and release, with
          a person accountable at each step.
        </p>

        <p className="mt-4 text-base text-muted">
          Read{" "}
          <a href="/resume" className="text-accent hover:underline">
            Joe Palala&apos;s resume
          </a>{" "}
          or{" "}
          <a href="/bayanihan" className="text-accent hover:underline">
            Bayanihan Scrum, a collaboration-first workflow
          </a>
          .
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href="mailto:hello@getjoe.dev"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-background transition hover:opacity-90"
          >
            Email me
          </a>
          {resume.links.map((l) => (
            <a
              key={l.label}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-accent hover:underline"
            >
              {l.label}
            </a>
          ))}
        </div>

        <ul className="mt-12 space-y-4">
          {SECTIONS.map(([title, text, href]) => (
            <li key={title}>
              <a href={href} className="group block">
                <span className="font-semibold text-foreground group-hover:text-accent group-hover:underline">
                  {title}
                </span>
                <span className="block text-sm text-muted">{text}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-20">
        <h2 className="mb-4 text-2xl font-bold text-foreground">
          Where I&apos;ve Worked
        </h2>
        <ul className="flex flex-wrap gap-3">
          {COMPANIES.map(({ name, current }) => (
            <li
              key={name}
              className="rounded-full border border-line bg-card px-4 py-1.5 text-sm font-semibold text-foreground"
            >
              {name}
              {current && (
                <span className="ml-2 text-xs font-medium text-accent">
                  current
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section id="projects" className="scroll-mt-8">
        <h2 className="mb-8 text-2xl font-bold text-foreground">
          Selected Projects
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
