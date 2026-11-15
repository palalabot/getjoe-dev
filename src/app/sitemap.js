export default function sitemap() {
  // Add "/contact" once the contact form is live.
  return ["", "/resume", "/bayanihan"].map((p) => ({
    url: `https://getjoe.dev${p}`,
  }));
}
