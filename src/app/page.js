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
    "Research: AI-assisted SDLC",
    "Notes on using AI across the software lifecycle: specs, review, tests",
    "/ai-assisted-sdlc",
  ],
  [
    "Research: Bayanihan Scrum",
    "A side interest: notes on Agile for teams that work with AI",
    "/bayanihan",
  ],
];

// Card sections in page order: linked projects first, then hobbies.
/** @type {["project" | "hobby", string][]} */
const PROJECT_GROUPS = [
  ["project", "Selected Projects"],
  ["hobby", "Hobbies"],
];

const SKILLS = [
  [
    "Full-stack development",
    "Node.js and React, with some Java, on Shopify and SaaS systems",
  ],
  ["Linux and Docker", "Server setup, containers and deployments"],
  ["Network setup", "Basic LAN setup: routers, Wi-Fi and pfSense"],
];

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD, no user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <section className="hero-beside-terminal mb-20 max-w-3xl">
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
          on Shopify and SaaS systems. I am also comfortable with Linux, Docker
          and basic network setup. Agile and AI-assisted delivery are side
          interests I research and write about.
        </p>

        <p className="mt-4 text-base text-muted">
          Read{" "}
          <a
            href="/resume"
            className="text-accent underline underline-offset-2"
          >
            Joe Palala&apos;s resume
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
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="mb-4 text-2xl font-bold text-foreground">What I Do</h2>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {SKILLS.map(([title, text]) => (
            <li
              key={title}
              className="rounded-lg border border-line bg-card p-5 backdrop-blur-sm"
            >
              <p className="font-semibold text-foreground">{title}</p>
              <p className="mt-1 text-sm text-muted">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <nav aria-label="On this site" className="mb-20">
        <ul className="space-y-4">
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
      </nav>

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

      <section className="mb-20">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Background</h2>
        <p className="mb-6 max-w-3xl text-sm text-muted">
          I held various roles in web development until 2020. The{" "}
          <a
            href="/resume"
            className="text-accent underline underline-offset-2"
          >
            resume
          </a>{" "}
          is shortened to the recent ones, so this is the longer path.
        </p>
        <ol className="max-w-3xl space-y-4 border-l border-line pl-5">
          {resume.background.map(({ title, period, text }) => (
            <li key={title}>
              <p className="font-semibold text-foreground">
                {title}
                {period && (
                  <span className="ml-2 text-sm font-normal text-muted">
                    {period}
                  </span>
                )}
              </p>
              <p className="mt-1 text-sm text-muted">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      {PROJECT_GROUPS.map(([category, heading], i) => (
        <section
          key={category}
          id={i === 0 ? "projects" : undefined}
          className={`scroll-mt-8 ${i === 0 ? "mb-20" : ""}`}
        >
          <h2 className="mb-8 text-2xl font-bold text-foreground">{heading}</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.filter((p) => p.category === category).map(
              ({ category: _category, ...project }) => (
                <ProjectCard key={project.title} {...project} />
              ),
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
