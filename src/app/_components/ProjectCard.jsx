export default function ProjectCard({ title, description, tags, link }) {
  return (
    <a
      href={link}
      {...(link.startsWith("/")
        ? {}
        : { target: "_blank", rel: "noopener noreferrer" })}
      className="group block rounded-lg border border-line bg-card p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-accent"
    >
      <h3 className="mb-2 text-xl font-bold text-foreground group-hover:underline">
        {title}
      </h3>

      <p className="mb-4 text-sm leading-6 text-muted">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded bg-chip px-2 py-1 text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
