export default function sitemap() {
  return ["", "/resume", "/bayanihan", "/contact"].map((p) => ({
    url: `https://getjoe.dev${p}`,
  }));
}
