export default function sitemap() {
  // Add "/contact" once the contact form is live.
  return ["", "/resume", "/bayanihan", "/ai-assisted-sdlc"].map((p) => ({
    url: `https://getjoe.dev${p}`,
  }));
}
