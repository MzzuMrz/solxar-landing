"use client"

import { useState, useMemo } from "react"
import { useLanguage } from "@/context/language-context"
import { mockMembers, skillColors } from "@/lib/members-data"
import { MemberCard } from "./member-card"
import { Input } from "@/components/ui/input"
import { Search, ExternalLink } from "lucide-react"
import type { CSSProperties } from "react"

export function CommunityMembers() {
  const { t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  const allSkills = useMemo(() => Array.from(new Set(mockMembers.flatMap(m => m.skills))).sort(), [])

  const filteredMembers = useMemo(() => {
    return mockMembers.filter(member => {
      const search = searchTerm.toLowerCase()
      const matchesSearch = search === '' || member.name.toLowerCase().includes(search) || member.role.toLowerCase().includes(search) || member.skills.some(s => s.toLowerCase().includes(search));
      const matchesSkill = !selectedSkill || member.skills.includes(selectedSkill)
      return matchesSearch && matchesSkill
    })
  }, [searchTerm, selectedSkill])

  return (
    <section className="superteam-section">
      <div className="text-center mb-12">
        <h2 className="superteam-section-title">{t("membersSection.title")}</h2>
        <p className="superteam-section-subtitle">{t("membersSection.subtitle")}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <Input type="text" placeholder={t("membersSection.searchPlaceholder")} value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-12 bg-black/40 border-white/10 h-12" />
        </div>
      </div>
      
      <div className="flex gap-2 flex-wrap justify-center mb-12">
        <button onClick={() => setSelectedSkill(null)} className={`filter-btn ${!selectedSkill ? 'active' : ''}`}>{t("membersSection.allSkills")}</button>
        {allSkills.map(skill => (
          <button key={skill} onClick={() => setSelectedSkill(skill === selectedSkill ? null : skill)} className={`filter-btn ${selectedSkill === skill ? 'active' : ''}`} style={selectedSkill === skill ? { '--skill-color-rgb': skillColors[skill] || "153, 69, 255", color: '#fff' } as CSSProperties : {}}>{skill}</button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map(member => <MemberCard key={member.id} member={member} />)}
      </div>

      {filteredMembers.length === 0 && (
        <div className="text-center py-16"><p className="text-gray-400 text-lg">{t("membersSection.noResults")}</p></div>
      )}

      <div className="text-center mt-16">
        <div className="superteam-card max-w-2xl mx-auto">
          <h3 className="superteam-card-title text-xl mb-4">{t("membersSection.joinTitle")}</h3>
          <p className="superteam-card-text mb-6">{t("membersSection.joinSubtitle")}</p>
          <a href="#" className="superteam-btn superteam-btn-gradient"><ExternalLink size={20} />{t("membersSection.joinButton")}</a>
        </div>
      </div>
    </section>
  )
}