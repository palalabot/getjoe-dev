/** @type {import("./types").BlogPost[]} Newest first. */
export const POSTS = [
  {
    slug: "env-files-in-spring-boot",
    title: "Using .env files in Java Spring Boot",
    description:
      "You can use .env files in Spring Boot with the spring-dotenv library: a small dependency that brings a familiar workflow from other ecosystems.",
    date: "2025-12",
    tags: [
      "Java",
      "Spring Boot",
      "DotEnv",
      "Backend Development",
      "Software Engineering",
      "Dev Journey",
    ],
    body: [
      "December realization: You can actually use `.env` files in Java Spring Boot. 👀",
      "Coming from other development ecosystems, I've gotten used to having a `.env` file where I can keep environment variables like:",
      {
        label: ".env",
        code: "DATABASE_URL\nDATABASE_USERNAME\nDATABASE_PASSWORD\nAPI_BASE_URL",
      },
      "So naturally, when working with Spring Boot, I initially thought `application.properties` or `application.yml` was the only way to manage these configurations.",
      "Turns out, there's another option.",
      "Spring Boot doesn't natively load `.env` files like some other frameworks do. But with an additional library like `spring-dotenv`, you can bring that familiar `.env` workflow into your Spring Boot application.",
      "Essentially, you can have a `.env` file locally, keep your credentials and environment-specific values there, and access them through Spring's Environment and configuration binding mechanisms.",
      "One small dependency, but a pretty convenient development experience.",
      "And that's what makes this interesting: Java and Spring Boot already have a powerful externalized configuration system. Sometimes, we just overlook the libraries that extend it to support familiar workflows from other ecosystems.",
      {
        callout:
          "The takeaway? Not every useful feature needs to be built into the framework itself. Sometimes, the community has already built the missing piece.",
      },
      "Another small but useful discovery before the year ends. 🎄",
    ],
  },
  {
    slug: "django-bug-tracker-instead-of-jira",
    title: "Trying an open-source Django bug tracker instead of Jira",
    description:
      "Our 10-person team fit Jira's free limit but did not want to be tied to it. We tried an open-source Python tracker with Docker. Here is how it went.",
    date: "2025-09",
    tags: [
      "Django",
      "Docker",
      "Python",
      "Bug Tracker",
      "Jira",
      "Open Source",
      "Dev Journey",
    ],
    body: [
      "Our tickets lived in Jira, so Jira is what we used. We are a small team: 7 developers and 3 QA. That is exactly 10 users, which fits Jira's 10-user limit, but only just. One more person and we would be paying, and by then every ticket we had would be sitting in a tool we could not easily leave.",
      "We did not want to get tied to it. So I went looking, and learned something I should have known already: there are open-source bug trackers written in Python that you can host yourself, instead of using or paying for Jira.",
      "Think [Taiga](https://github.com/kaleidos-ventures/taiga-back), or lighter options like [GlitchTip](https://gitlab.com/glitchtip/glitchtip-backend) and [django-helpdesk](https://github.com/django-helpdesk/django-helpdesk). They are Django apps.",
      { heading: "Why self-host a ticket system at all?" },
      "It is a fair question. A ticket system is a small line item, and it can simply be covered as part of the development costs.",
      "But this is a freelance setup, and in a freelance setup every cost that can be reduced is important. A subscription that grows with each person you add is exactly the kind of cost worth removing before it starts.",
      "And a small yay on top: these trackers are written in Python, a favorite language of mine. If something needs changing, I can read the code and change it.",
      { heading: "A bit old, and that was my worry" },
      "Some of these projects are a bit old, and an older Django app is not fun to install straight onto a current Linux machine.",
      "Modern distros block global `pip` installs with an `externally-managed-environment` error, and the system Python is often newer than the one the project expects. The database adapter wants system C libraries that need root to install. Then the app and Postgres have to find each other on ports that something else may already be using.",
      "That is an afternoon of setup before you have even seen a login screen, which is a lot to spend on a tool you only want to try.",
      { heading: "We tried it with Docker" },
      "Docker made it easy to try. The container carries the Python version, the libraries and the database the project wants, so its age stops mattering to the host. Nothing gets installed on the machine itself.",
      "We did not have to write the Docker setup ourselves either. Taiga publishes one, [taiga-docker](https://github.com/taigaio/taiga-docker/), and that is what we tried. It ran. There were some gotchas along the way, but nothing that stopped us from getting it up and clicking around.",
      { heading: "Where we ended up" },
      "The bigger problem is not the setup, and it is not Taiga, which is still maintained. It is our own history. All of our previous tasks are in Jira, and that history is going to be hard to let go.",
      "So I think we will switch back to tracking issues with GitHub Projects and issues. It is free, which answers the cost question, and it sits right next to the code.",
      {
        callout:
          "Trying an open-source alternative cost us very little, thanks to Docker. The hard part of changing a ticket system is not installing the new one. It is leaving your task history behind.",
      },
    ],
  },
  {
    slug: "pfsense-general-information",
    title: "pfSense General Information Configuration",
    description:
      "How to set the hostname, domain and DNS servers in pfSense's General Information settings, and why they matter before any other firewall setup.",
    date: "2025-08",
    tags: [
      "pfSense",
      "VLAN",
      "Networking",
      "Firewall",
      "Network Security",
      "DNS",
      "IT Infrastructure",
      "Network Administration",
    ],
    body: [
      "pfSense is a firewall that can split a network into VLANs (virtual LANs) and control which of them can talk to each other. That protects certain systems from others. For example, it can keep HR data away from non-HR users, including those who connect through a VPN.",
      "Basic subnetting helps you decide where each VLAN goes. The pfSense interface can feel terrible at first, but it is easy once you understand where everything goes.",
      "One of the first steps in configuring a pfSense firewall is setting up the General Information settings. These settings help establish the network identity of the firewall and ensure proper name resolution across the network.",
      "Here are the key configurations:",
      { heading: "1. Hostname" },
      "Set a unique hostname for your pfSense firewall. Example: `pfsense-firewall`. This identifies the firewall within your network.",
      { heading: "2. Domain" },
      "Configure a domain name for your local network. Example: `local.lan`. This helps organize and identify devices within the network.",
      { heading: "3. Primary DNS Server" },
      "Set the primary DNS server to Google DNS: `8.8.8.8`. This server translates domain names into IP addresses.",
      { heading: "4. Secondary DNS Server" },
      "Set the secondary DNS server to Google DNS: `8.8.4.4`. This serves as an alternative DNS server if the primary DNS server is unavailable.",
      { heading: "Why is this important?" },
      "Proper configuration of hostname, domain, and DNS servers helps ensure reliable network communication, efficient domain name resolution, and better network management.",
      {
        callout:
          "Configuring the General Information settings is an essential foundation when setting up a pfSense firewall. It helps establish a properly identified and connected network before proceeding with other firewall and security configurations.",
      },
    ],
  },
];

/** @param {string} date "YYYY-MM" or "YYYY-MM-DD" @returns {string} e.g. "December 2025" */
export function formatDate(date) {
  const [y, m, d] = date.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d || 1)).toLocaleDateString("en-US", {
    ...(d ? { day: "numeric" } : {}),
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
