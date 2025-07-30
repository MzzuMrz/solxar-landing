import {
  Building,
  GraduationCap,
  Users,
  Megaphone,
  Globe,
  Code,
  type LucideProps,
} from "lucide-react";
import { type FC, type SVGProps } from "react";

type IconComponent = FC<Omit<LucideProps, "ref"> & SVGProps<SVGSVGElement>>;

export const partnershipTypesData: {
  key: "companies" | "institutions" | "communities";
  icon: IconComponent;
  iconClass: string;
}[] = [
  { key: "companies", icon: Building, iconClass: "text-solana-purple" },
  { key: "institutions", icon: GraduationCap, iconClass: "text-solana-blue" },
  { key: "communities", icon: Users, iconClass: "text-solana-teal" },
];

export const partnershipBenefits = {
  companies: {
    es: ["Workshops técnicos", "Conexiones estratégicas", "Visibilidad de marca", "Acceso a talento"],
    en: ["Technical workshops", "Strategic connections", "Brand visibility", "Access to talent"],
  },
  institutions: {
    es: ["Material educativo", "Charlas y talleres", "Programas de pasantías", "Proyectos de investigación"],
    en: ["Educational material", "Talks and workshops", "Internship programs", "Research projects"],
  },
  communities: {
    es: ["Eventos conjuntos", "Intercambio de conocimientos", "Ampliación de red", "Proyectos colaborativos"],
    en: ["Joint events", "Knowledge exchange", "Network expansion", "Collaborative projects"],
  },
};

export const collaborationOptionsData: {
  key: string;
  icon: IconComponent;
  iconClass: string;
}[] = [
  { key: "communitySponsorship", icon: Users, iconClass: "text-solana-purple" },
  { key: "eventSponsorship", icon: Megaphone, iconClass: "text-solana-blue" },
  { key: "b2b", icon: Globe, iconClass: "text-solana-teal" },
  { key: "devPrograms", icon: Code, iconClass: "text-solana-purple" },
];