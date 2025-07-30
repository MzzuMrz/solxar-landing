export const mockMembers = [
  { id: 1, name: "María González", role: "Full Stack Developer", location: "Buenos Aires, Argentina", skills: ["Rust", "React", "Solana", "DeFi"], social: { github: "mariagonzalez", twitter: "maria_builds", linkedin: "mariagonzalez" }},
  { id: 2, name: "Carlos Mendoza", role: "Blockchain Developer", location: "Mexico City, Mexico", skills: ["Solana", "Anchor", "TypeScript", "Web3"], social: { github: "carlosmendoza", twitter: "carlos_solana" }},
  { id: 3, name: "Ana Silva", role: "Product Designer", location: "São Paulo, Brazil", skills: ["UI/UX", "Figma", "Web3 Design"], social: { linkedin: "anasilva", twitter: "ana_designs" }},
  { id: 4, name: "Diego Ramírez", role: "Community Manager", location: "Bogotá, Colombia", skills: ["Community", "Marketing", "Events"], social: { twitter: "diego_community", linkedin: "diegoramirez" }},
  { id: 5, name: "Sofía Torres", role: "Data Analyst", location: "Santiago, Chile", skills: ["Python", "Analytics", "DeFi"], social: { github: "sofiatorres", linkedin: "sofiatorres" }},
  { id: 6, name: "Roberto Vega", role: "DevOps Engineer", location: "Lima, Peru", skills: ["AWS", "Docker", "Kubernetes"], social: { github: "robertovega", twitter: "roberto_devops" }},
];

export const skillColors: Record<string, string> = { Rust: "206, 66, 43", React: "97, 218, 251", Solana: "153, 69, 255", DeFi: "20, 241, 149", Anchor: "255, 140, 0", TypeScript: "49, 120, 198", Web3: "241, 104, 34", "UI/UX": "255, 105, 180", Figma: "242, 78, 30", Python: "55, 118, 171", Analytics: "3, 225, 255", Community: "191, 255, 0", Marketing: "220, 31, 255", AWS: "255, 153, 0", Docker: "36, 150, 237", Kubernetes: "50, 108, 229" };
export const roleColors: Record<string, string> = { "Full Stack Developer": "153, 69, 255", "Blockchain Developer": "20, 241, 149", "Product Designer": "255, 105, 180", "Community Manager": "191, 255, 0", "Data Analyst": "3, 225, 255", "DevOps Engineer": "255, 140, 0" };