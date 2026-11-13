import ProjectCard from "./_components/ProjectCard";
import { PROJECTS } from "./_data/projects";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12">
      <section className="mb-20 max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          Portfolio
        </p>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
          Senior Fullstack Engineer.
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
