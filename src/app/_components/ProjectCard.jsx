const CARD =
  "group block rounded-lg border border-line bg-card p-6 shadow-sm backdrop-blur-sm transition-colors";

/** @param {Omit<import("../_data/types").Project, "category">} props */
export default function ProjectCard({ title, description, tags, link }) {
  const body = (
    <>
      <h3
        className={`mb-2 text-xl font-bold text-foreground ${link ? "group-hover:underline" : ""}`}
      >
        {title}
        {link && !link.startsWith("/") && (
          <span className="sr-only"> (opens in a new tab)</span>
        )}
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
    </>
  );

  // Cards without a link (past work with nothing to point to) are not anchors.
  if (!link) return <div className={CARD}>{body}</div>;

  return (
    <a
      href={link}
      {...(link.startsWith("/")
        ? {}
        : { target: "_blank", rel: "noopener noreferrer" })}
      className={`${CARD} hover:border-accent`}
    >
      {body}
    </a>
  );
}
