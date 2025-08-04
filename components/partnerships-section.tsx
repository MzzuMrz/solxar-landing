"use client";

import { Button } from "@/components/ui/button";
import { Handshake } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import Link from "next/link";
import {
  partnershipTypesData,
  collaborationOptionsData,
  partnershipBenefits,
} from "@/lib/partnerships-data";

interface PartnershipsSectionProps {
  id?: string;
}

function PartnershipCard({
  dataKey,
}: {
  dataKey: "companies" | "institutions" | "communities";
}) {
  const { t, language } = useLanguage();

  const partnershipInfo = partnershipTypesData.find((p) => p.key === dataKey);
  if (!partnershipInfo) return null;

  const { icon: Icon, iconClass } = partnershipInfo;
  const benefits = partnershipBenefits[dataKey][language];

  return (
    <div className="backdrop-blur-md bg-black/60 p-8 rounded-xl text-center border border-white/10 h-full flex flex-col">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Icon className={`w-10 h-10 ${iconClass}`} />
        <h3 className="text-xl font-bold">
          {t(`partnerships.types.${dataKey}.title`)}
        </h3>
      </div>
      <p className="text-white/70 mb-6 flex-grow">
        {t(`partnerships.types.${dataKey}.description`)}
      </p>
      <ul className="space-y-2 text-left">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2">
            <span className="text-solana-teal mt-1">✓</span>
            <span className="text-white/80">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PartnershipsSection({ id }: PartnershipsSectionProps) {
  const { t } = useLanguage();

  return (
    <section id={id} className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Handshake className="w-8 h-8 text-solana-teal" />
            <h2 className="text-3xl md:text-4xl font-bold solana-text-gradient text-center">
              {t("partnerships.sectionTitle")}
            </h2>
          </div>
          <p className="text-white/70 mb-12 max-w-2xl mx-auto text-center">
            {t("partnerships.sectionSubtitle")}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {partnershipTypesData.map((type) => (
              <PartnershipCard key={type.key} dataKey={type.key} />
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-8 text-center">
            {t("partnerships.collaborationTitle")}
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {collaborationOptionsData.map((option) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.key}
                  className="flex gap-4 p-6 rounded-xl backdrop-blur-sm bg-black/20"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black/50 flex items-center justify-center">
                    <Icon className={`w-6 h-6 ${option.iconClass}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-2">
                      {t(`partnerships.options.${option.key}.title`)}
                    </h4>
                    <p className="text-white/70">
                      {t(`partnerships.options.${option.key}.description`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          
        </div>
      </div>
    </section>
  );
}