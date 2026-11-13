const LINES = [
  "joe@getjoe:~$ git status",
  "On branch main — nothing to commit, working tree clean",
  "joe@getjoe:~$ claude --resume",
  "> planning agent: 4 tasks queued   > review agent: idle",
  "joe@getjoe:~$ php artisan migrate --pretend",
  "  create table `experiments` (`id` bigint unsigned not null auto_increment primary key)",
  "joe@getjoe:~$ npm run build",
  "  ✓ Compiled successfully   ✓ Generating static pages (4/4)",
  "joe@getjoe:~$ mcp list-tools",
  "  fs.read  fs.write  git.log  git.diff  http.fetch  db.query",
  "joe@getjoe:~$ tail -f /var/log/agents.log",
  "[02:14:07] coding-agent   wrote src/app/page.js (+42 -7)",
  "[02:14:09] review-agent   flagged 1 risk: missing null check",
  "[02:14:12] human          approved with changes",
  "[02:14:15] testing-agent  12 passed, 0 failed",
  "joe@getjoe:~$ docker compose up -d",
  "  ✔ Container db     Started   ✔ Container api    Started",
  "joe@getjoe:~$ curl -s localhost:8080/health | jq .",
  '  { "status": "ok", "uptime": 86400, "mode": "continuously-learning" }',
  "joe@getjoe:~$ ./deploy.sh --env=staging",
  "  » build  » push  » migrate  » smoke-test  ✓ done in 48s",
  "01001010 01001111 01000101 00101110 01000100 01000101 01010110",
  "joe@getjoe:~$ git log --oneline -3",
  "  8b2f407 update project link   04eac75 revise titles   ba26d80 update links",
  "joe@getjoe:~$ █",
];

// Repeat so one copy is taller than any viewport.
const TEXT = Array(4).fill(LINES.join("\n")).join("\n");

// Decorative, CSS-only terminal behind the page. Text is rendered twice so the
// scroll animation (translateY -50%) loops without a visible seam.
export default function TerminalBackdrop() {
  return (
    <div className="terminal-backdrop" aria-hidden="true">
      <div className="terminal-backdrop__scroll">
        <pre className="terminal-backdrop__text">{TEXT}</pre>
        <pre className="terminal-backdrop__text">{TEXT}</pre>
      </div>
    </div>
  );
}
