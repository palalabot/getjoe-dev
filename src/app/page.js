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
          I architect scalable systems using{" "}
          <strong className="font-semibold text-foreground">
            Java, PHP, and TypeScript
          </strong>
          . Currently focused on{" "}
          <strong className="font-semibold text-foreground">
            Intentional Engineering
          </strong>
          : leveraging AI while keeping humans in control of critical systems.
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

        <p className="mt-6 text-sm">
          <span className="mr-2 font-semibold uppercase tracking-[0.18em] text-muted">
            Email
          </span>
          <a
            href="mailto:hello@getjoe.dev"
            className="font-mono text-accent hover:underline"
          >
            hello@getjoe.dev
          </a>
        </p>
      </section>

      <section>
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
