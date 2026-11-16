import { formatDate, POSTS } from "../_data/posts";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Joe Palala's Blog | Senior Full-Stack Engineer",
  description:
    "Articles by Joe Palala, a senior full-stack engineer working with Java, PHP and TypeScript.",
  alternates: { canonical: "/blog" },
  openGraph: { url: "/blog" },
};

export default function BlogPage() {
  return (
    <div className="hide-terminal mx-auto w-full max-w-2xl px-6 py-10">
      <a href="/" className="text-sm text-muted transition hover:text-accent">
        ← Back to portfolio
      </a>
      <h1 className="mt-10 mb-8 text-3xl font-bold md:text-4xl">Blog</h1>
      <ul className="flex flex-col gap-6">
        {POSTS.map((post) => (
          <li key={post.slug}>
            <a
              href={`/blog/${post.slug}`}
              className="group block rounded-lg border border-line bg-card p-6 transition-colors hover:border-accent"
            >
              <h2 className="mb-1 text-xl font-bold group-hover:underline">
                {post.title}
              </h2>
              <time dateTime={post.date} className="text-sm text-muted">
                {formatDate(post.date)}
              </time>
              <p className="mt-3 text-sm leading-6 text-muted">
                {post.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded bg-chip px-2 py-1 text-xs text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
