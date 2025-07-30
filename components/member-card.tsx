"use client"

import { useLanguage } from "@/context/language-context"
import { roleColors, skillColors } from "@/lib/members-data"
import { Github, Twitter, Linkedin, MapPin } from "lucide-react"
import type { CSSProperties } from "react"

// Definimos los tipos de datos aquí para que el componente sea autocontenido
type Member = { id: number; name: string; role: string; location: string; skills: string[]; social: { github?: string; twitter?: string; linkedin?: string; }};
const socialIcons: { [key: string]: React.ElementType } = { github: Github, twitter: Twitter, linkedin: Linkedin };

export function MemberCard({ member }: { member: Member }) {
  const { t } = useLanguage()
  const roleColor = roleColors[member.role] || "153, 69, 255";
  const profileImage = `https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name.replace(/\s/g, '')}&backgroundColor=transparent`;

  return (
    <div className="member-card">
      <div className="flex items-center mb-4">
        <img src={profileImage} alt={member.name} className="w-16 h-16 rounded-full mr-4 border-2 border-white/20" />
        <div>
          <h3 className="text-lg font-semibold text-white">{member.name}</h3>
          <span className="role-badge" style={{ '--role-color-rgb': roleColor } as CSSProperties}>{member.role}</span>
        </div>
      </div>
      <div className="flex items-center text-gray-400 text-sm mb-4"><MapPin size={14} className="mr-2" />{member.location}</div>
      <div className="flex flex-wrap gap-2 mb-4">
        {member.skills.map(skill => (
          <span key={skill} className="skill-tag" style={{ '--skill-color-rgb': skillColors[skill] || "153, 69, 255" } as CSSProperties}>{skill}</span>
        ))}
      </div>
      <div className="flex gap-4 pt-4 border-t border-white/10">
        {Object.entries(member.social).map(([key, username]) => {
          const Icon = socialIcons[key];
          const url = key === 'linkedin' ? `https://linkedin.com/in/${username}` : `https://${key}.com/${username}`;
          return (
            <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label={`${member.name}'s ${key}`}>
              <Icon size={20} />
            </a>
          )
        })}
      </div>
    </div>
  )
}