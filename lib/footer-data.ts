import { Github, Twitter, Linkedin, ExternalLink } from "lucide-react";

export const socialLinksData = [
  { name: "Discord", href: "https://discord.gg/solxar", icon: ExternalLink, key: 'discord' },
  { name: "Twitter", href: "https://twitter.com/solxar", icon: Twitter, key: 'twitter' },
  { name: "GitHub", href: "https://github.com/solxar", icon: Github, key: 'github' },
  { name: "LinkedIn", href: "https://linkedin.com/company/solxar", icon: Linkedin, key: 'linkedin' },
];

export const footerSectionsData = [
  {
    key: "community",
    links: [
      { key: "join", href: "#community" },
      { key: "events", href: "#events" },
      { key: "members", href: "#members" },
      { key: "mentorship", href: "#mentorship" },
    ],
  },
  {
    key: "resources",
    links: [
      { key: "documentation", href: "/resources" },
      { key: "tutorials", href: "/resources#tutorials" },
      { key: "tools", href: "/resources#tools" },
      { key: "api", href: "/resources#api" },
    ],
  },
  {
    key: "projects",
    links: [
      { key: "explore", href: "/projects" },
      { key: "submit", href: "/projects#submit" },
      { key: "funding", href: "/projects#funding" },
      { key: "incubator", href: "/projects#incubator" },
    ],
  },
  {
    key: "company",
    links: [
      { key: "about", href: "#about" },
      { key: "team", href: "#team" },
      { key: "careers", href: "#careers" },
      { key: "contact", href: "#contact" },
    ],
  },
];
