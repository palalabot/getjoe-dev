export default function sitemap() {
  return ["", "/resume", "/bayanihan"].map((p) => ({
    url: `https://getjoe.dev${p}`,
  }));
}
