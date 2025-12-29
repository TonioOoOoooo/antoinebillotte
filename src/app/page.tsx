'use client'

import React from 'react';
import {
  Zap,
  Users,
  LayoutTemplate,
} from 'lucide-react';

// Import des composants
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import MandatesSection from '@/components/MandatesSection';
import USPSection from '@/components/USPSection';
import PartnerSection from '@/components/PartnerSection';
import ContactSection from '@/components/ContactSection';

// Hook de traductions
import { useTranslation, useIsEnglish } from '@/hooks/useTranslation';

const AdoptionArchitectPage = ({ locale = 'fr' }) => {
  const t = useTranslation(locale as 'fr' | 'en');
  const isEN = useIsEnglish(locale as 'fr' | 'en');

  // Enrichir les données avec les icônes (non sérialisables en JSON)
  const enrichedMandates = {
    ...t.mandates,
    items: t.mandates.items.map((item, idx) => ({
      ...item,
      icon: idx === 0 ? <Zap className="h-8 w-8" /> :
            idx === 1 ? <Users className="h-8 w-8" /> :
                        <LayoutTemplate className="h-8 w-8" />,
      gradient: idx === 0 ? "from-yellow-500/10 to-orange-500/10" :
                idx === 1 ? "from-indigo-500/10 to-purple-500/10" :
                            "from-green-500/10 to-emerald-500/10",
      borderColor: idx === 0 ? "border-yellow-500/20 hover:border-yellow-500/50" :
                   idx === 1 ? "border-indigo-500/30 hover:border-indigo-500/60" :
                               "border-green-500/20 hover:border-green-500/50",
      iconBg: idx === 0 ? "from-yellow-400 to-orange-500" :
              idx === 1 ? "from-indigo-500 to-purple-600" :
                          "from-green-500 to-emerald-600",
      highlighted: idx === 1
    }))
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <HeroSection content={t.hero} isEN={isEN} />
      <main role="main">
        <ProblemSection content={t.problem} isEN={isEN} />
        <MandatesSection content={enrichedMandates} isEN={isEN} />
        <USPSection content={t.usp} isEN={isEN} />
        <PartnerSection content={t.partner} />
      </main>
      <ContactSection content={t.contact} />
    </div>
  );
};

export default AdoptionArchitectPage;
