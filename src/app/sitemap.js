import { POSTS } from "./_data/posts";

/** @returns {import("next").MetadataRoute.Sitemap} */
export default function sitemap() {
  return [
    "",
    "/resume",
    "/contact",
    "/bayanihan",
    "/ai-assisted-sdlc",
    "/blog",
    ...POSTS.map((p) => `/blog/${p.slug}`),
  ].map((p) => ({
    url: `https://getjoe.dev${p}`,
  }));
}
