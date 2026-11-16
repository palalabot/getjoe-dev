import "./globals.css";
import TerminalBackdrop from "./_components/TerminalBackdrop";
import ThemeToggle from "./_components/ThemeToggle";

const TITLE = "Joe Palala | Senior Full-Stack Engineer";
const DESCRIPTION =
  "Joe Palala is a senior full-stack engineer in Metro Manila, Philippines, working in Node.js, React and Java. See selected projects and his resume.";

/** @type {import("next").Metadata} */
export const metadata = {
  metadataBase: new URL("https://getjoe.dev"),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "Joe Palala",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@joepalaladev",
    creator: "@joepalaladev",
    title: TITLE,
    description: DESCRIPTION,
  },
};

/** @param {{ children: import("react").ReactNode }} props */
export default function RootLayout({ children }) {
  const year = new Date().getFullYear();

  return (
    // suppressHydrationWarning: the inline script below may set data-theme
    // before React hydrates.
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full bg-background text-foreground">
        <script
          // Apply a saved theme before first paint, so there is no flash.
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static string, no user input
          dangerouslySetInnerHTML={{
            __html:
              'try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light")document.documentElement.dataset.theme=t}catch(e){}',
          }}
        />
        <TerminalBackdrop />
        <div className="flex min-h-screen flex-col">
          <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 print:hidden">
            <a
              href="/"
              className="logo-3d text-2xl font-extrabold tracking-tight"
            >
              JOE.DEV
            </a>

            <div className="flex items-center gap-3">
              <a
                href="/blog"
                className="text-sm font-medium text-muted transition hover:text-accent"
              >
                Blog
              </a>
              <ThemeToggle />
              <a
                href="/resume?download=1"
                className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:bg-accent"
              >
                Download Resume
              </a>
            </div>
          </nav>

          <main className="flex-1">{children}</main>

          <footer className="px-6 py-12 text-center text-sm text-muted print:hidden">
            (c) {year} - Built with Next.js and Intentional Engineering
          </footer>
        </div>
      </body>
    </html>
  );
}
