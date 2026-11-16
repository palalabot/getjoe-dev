import { notFound } from "next/navigation";
import { formatDate, POSTS } from "../../_data/posts";

// Only the slugs in _data/posts.js exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map(({ slug }) => ({ slug }));
}

/** @param {{ params: Promise<{ slug: string }> }} props */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Joe Palala`,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { type: "article", url: `/blog/${slug}` },
  };
}

/** Renders `backtick` spans as inline code and [text](url) as links. @param {{ text: string }} props */
function Inline({ text }) {
  // The capture group keeps the matches: they land on the odd indexes.
  return text.split(/(`[^`]+`|\[[^\]]+\]\([^)]+\))/).map((part, i) => {
    if (i % 2 === 0) return part;
    const link = part.match(/^\[(.+)\]\((.+)\)$/);
    return link ? (
      <a
        // biome-ignore lint/suspicious/noArrayIndexKey: static split of a fixed string
        key={i}
        href={link[2]}
        className="text-accent underline underline-offset-2"
      >
        {link[1]}
      </a>
    ) : (
      <code
        // biome-ignore lint/suspicious/noArrayIndexKey: static split of a fixed string
        key={i}
        className="rounded bg-chip px-1.5 py-0.5 font-mono text-[0.9em] text-accent"
      >
        {part.slice(1, -1)}
      </code>
    );
  });
}

/** @param {{ params: Promise<{ slug: string }> }} props */
export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    author: {
      "@type": "Person",
      name: "Joe Palala",
      url: "https://getjoe.dev",
    },
    datePublished: post.date,
    mainEntityOfPage: `https://getjoe.dev/blog/${post.slug}`,
  };

  return (
    <article className="hide-terminal mx-auto w-full max-w-2xl px-6 py-10 text-[17px] leading-[1.8]">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD built from our own data, no user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="/blog"
        className="text-sm text-muted transition hover:text-accent"
      >
        ← All posts
      </a>
      <header className="mt-10 border-b border-line pb-8">
        <time
          dateTime={post.date}
          className="text-sm font-semibold uppercase tracking-[0.18em] text-accent"
        >
          {formatDate(post.date)}
        </time>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">
          {post.title}
        </h1>
        <ul className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <li
              key={tag}
              className="rounded bg-chip px-2 py-1 text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </header>

      {post.body.map((item, i) => {
        if (typeof item === "string") {
          const lead = i === 0;
          return (
            <p
              key={item}
              className={
                lead
                  ? "mt-8 text-xl font-medium leading-relaxed text-foreground"
                  : "mt-6 text-foreground/90"
              }
            >
              <Inline text={item} />
            </p>
          );
        }
        if ("heading" in item) {
          return (
            <h2 key={item.heading} className="mt-10 text-2xl font-bold">
              {item.heading}
            </h2>
          );
        }
        if ("code" in item) {
          return (
            <figure
              key={item.code}
              className="mt-6 overflow-hidden rounded-lg border border-line bg-card"
            >
              {item.label && (
                <figcaption className="border-b border-line bg-chip px-4 py-1.5 font-mono text-xs text-muted">
                  {item.label}
                </figcaption>
              )}
              <pre className="overflow-x-auto px-4 py-3 font-mono text-sm leading-7 text-accent">
                {item.code}
              </pre>
            </figure>
          );
        }
        return (
          <p
            key={item.callout}
            className="mt-8 border-l-4 border-accent pl-5 text-lg font-medium leading-relaxed text-foreground"
          >
            {item.callout}
          </p>
        );
      })}
    </article>
  );
}
