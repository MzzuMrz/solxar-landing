
export type Member = {
  id: number;
  name: string;
  role: string;
  location: string;
  skills: string[];
  social: {
    twitter?: string;
  };
};

export const mockMembers: Member[] = [
  {
    id: 1,
    name: "Nicolás Fernández",
    role: "Head",
    location: "Buenos Aires",
    skills: [],
    social: { twitter: "https://x.com/f0x1777" },
  },
  {
    id: 2,
    name: "Juan Marchetto",
    role: "Developers Relations",
    location: "Buenos Aires",
    skills: [],
    social: { twitter: "https://x.com/marchedev" },
  },
  {
    id: 3,
    name: "Juan Cruz Fernández",
    role: "Operations & Finance",
    location: "Buenos Aires",
    skills: [],
    social: { twitter: "https://x.com/Sukoaa" },
  },
  {
    id: 4,
    name: "Axel Nieto",
    role: "Business Development",
    location: "Buenos Aires",
    skills: [],
    social: { twitter: "https://x.com/BlahAxl" },
  },
  {
    id: 5,
    name: "Nicoland",
    role: "Creative Director",
    location: "Buenos Aires",
    skills: [],
    social: { twitter: "https://x.com/nicolandfree" },
  },
];

export const skillColors: Record<string, string> = {};

export const roleColors: Record<string, string> = {
  Head: "153, 69, 255",
  "Developers Relations": "20, 241, 149",
  "Operations & Finance": "3, 225, 255",
  "Business Development": "255, 153, 0",
  "Creative Director": "255, 105, 180",
};