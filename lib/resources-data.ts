import { BookOpen, Code, Video, FileText, Users, Lightbulb } from "lucide-react";

export const resourceData = [
  {
    categoryKey: "documentation",
    icon: BookOpen,
    items: [
      { key: "solanaDocs", link: "https://docs.solana.com/" },
      { key: "cookbook", link: "https://solanacookbook.com/" },
      { key: "anchor", link: "https://www.anchor-lang.com/" },
      { key: "cli", link: "https://docs.solana.com/cli/install-solana-cli-tools" },
      { key: "web3js", link: "https://solana-labs.github.io/solana-web3.js/" },
    ],
  },
  {
    categoryKey: "development",
    icon: Code,
    items: [{ key: "playground", link: "https://beta.solpg.io/" }],
  },
  {
    categoryKey: "tutorials",
    icon: Video,
    items: [
      { key: "university", link: "https://solana.com/developers" },
      { key: "soldev", link: "https://www.soldev.app/" },
      { key: "heavyDuty", link: "https://www.youtube.com/watch?v=qi8aqeam3YM&list=PLqGHwsp-WqwKCT3uPgPWkqdHHUqGeT1Hy" },
    ],
  },
  {
    categoryKey: "community",
    icon: Users,
    items: [
        { key: "forum", link: "https://forums.solana.com/" },
        { key: "discord", link: "https://discord.com/invite/solana" },
        { key: "telegram", link: "https://t.me/solx_ar" },
    ],
  },
  {
    categoryKey: "articles",
    icon: FileText,
    items: [
        { key: "blog", link: "https://solana.com/news" },
        { key: "daily", link: "https://solanadaily.io/" },
        { key: "compass", link: "https://solanacompass.com/" },
    ],
  },
  {
    categoryKey: "inspiration",
    icon: Lightbulb,
    items: [
        { key: "showcase", link: "https://solana.com/ecosystem" },
        { key: "breakpoint", link: "https://solana.com/breakpoint" },
        { key: "hackerHouse", link: "https://solana.com/events" },
    ],
  },
];