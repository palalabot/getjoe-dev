import "./globals.css";
import TerminalBackdrop from "./_components/TerminalBackdrop";

export const metadata = {
  title: "Joe.dev | Senior Fullstack Engineer",
  description:
    "Portfolio for Joe, a senior fullstack engineer focused on scalable systems and intentional engineering.",
};

export default function RootLayout({ children }) {
  const year = new Date().getFullYear();

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-background text-foreground">
        <TerminalBackdrop />
        <div className="flex min-h-screen flex-col">
          <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 print:hidden">
            <a href="/" className="text-xl font-bold tracking-tight">
              JOE.DEV
            </a>

            <a
              href="/resume?download=1"
              className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:bg-accent"
            >
              Download Resume
            </a>
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
