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

const AdoptionArchitectPage = ({ locale = 'fr' }) => {
  const isEN = locale === 'en';

  // --- CONTENU DU SITE ---
  const t = {
    hero: {
      badge: "AI ADOPTION ARCHITECT & DELIVERY LEAD",
      title: isEN
        ? "Your AI Pilots Stuck?"
        : "Vos Pilotes IA Bloqués ?",
      subtitle: isEN
        ? "I Transform Them into Measurable Value."
        : "Je les Transforme en Valeur Mesurable.",
      description: isEN
        ? "Companies spend millions on Microsoft Copilot licenses. Result? 10% adoption, invisible ROI. I unblock the barriers with technical diagnosis + operational workshops + agile delivery."
        : "Les entreprises dépensent des millions en licences Microsoft Copilot. Résultat ? 10% d'adoption, ROI invisible. Je débloque les freins avec un diagnostic technique + workshops opérationnels + delivery agile.",
      ctaPrimary: isEN ? "Free Diagnostic (72h)" : "Diagnostic Gratuit (72h)",
      ctaSecondary: isEN ? "See Results" : "Voir les Résultats",
      trust: isEN ? "Trusted by 15+ Legal Departments" : "+15 Directions Juridiques ont débloqué leurs pilotes"
    },
    problem: {
      title: isEN ? "The Microsoft Copilot Paradox" : "Le Paradoxe Microsoft Copilot",
      subtitle: isEN
        ? "You pay for licenses. Your teams don't use them."
        : "Vous payez les licences. Vos équipes ne les utilisent pas.",
      before: {
        label: isEN ? "WITHOUT SUPPORT" : "SANS ACCOMPAGNEMENT",
        adoption: "10%",
        roi: "0€",
        issues: isEN
          ? ["Unused licenses", "Frustrated teams", "Wasted budget"]
          : ["Licences inutilisées", "Équipes frustrées", "Budget gaspillé"]
      },
      after: {
        label: isEN ? "WITH MY SUPPORT" : "AVEC MON ACCOMPAGNEMENT",
        adoption: "87%",
        roi: "+240%",
        benefits: isEN
          ? ["Autonomous teams", "12h/week saved per lawyer", "Documented ROI"]
          : ["Équipes autonomes", "Gain de 12h/semaine/juriste", "ROI documenté"]
      }
    },
    mandates: {
      title: isEN ? "My 3 Intervention Modes" : "Mes 3 Modes d'Intervention",
      subtitle: isEN ? "From express diagnostic to complete transformation, I adapt to your maturity" : "Du diagnostic express à la transformation complète, j'adapte mon approche à votre maturité",
      items: [
        {
          title: isEN ? "Flash Diagnostic" : "Flash Diagnostic",
          tagline: isEN ? "3 DAYS TO IDENTIFY BLOCKERS" : "3 JOURS POUR IDENTIFIER LES FREINS",
          desc: isEN
            ? "Root audit of current AI maturity. Mapping of blocking points (Reputation/Legal/Skills). Delivery of an organizational Action Plan & 30 days to unblock the situation."
            : "Audit racine de la maturité IA actuelle. Cartographie des points de blocage (Réputation/Légal/Compétences). Livraison d'un Plan d'Action organisationnel & 30 jours pour débloquer la situation.",
          icon: <Zap className="h-8 w-8" />,
          duration: isEN ? "3-5 days" : "3-5 jours",
          deliverables: isEN ? "Report + Roadmap" : "Rapport + Roadmap",
          badge: "⚡ EXPRESS",
          gradient: "from-yellow-500/10 to-orange-500/10",
          borderColor: "border-yellow-500/20 hover:border-yellow-500/50",
          iconBg: "from-yellow-400 to-orange-500"
        },
        {
          title: isEN ? "Workshops & Activation" : "Workshops & Activation",
          tagline: isEN ? "THE SOLUTION FOR STUCK PILOTS" : "LA SOLUTION POUR LES PILOTES BLOQUÉS",
          desc: isEN
            ? "My zone of excellence: Animation of practical workshops to anchor use cases. 'Train the Trainer' sessions. Creation of operational backlog. Creation of an agile priming corpus to quickly launch adoption."
            : "Ma zone d'excellence: Animation de workshops pratiques pour ancrer les use cases. Sessions 'Train the Trainer'. Création de backlog opérationnel. Création d'un corpus d'amorçage agile pour lancer l'adhésion rapidement.",
          icon: <Users className="h-8 w-8" />,
          duration: isEN ? "2-4 weeks" : "2-4 semaines",
          deliverables: isEN ? "Business teams involved" : "Équipes métier impliquées",
          badge: "⭐ RECOMMANDÉ",
          gradient: "from-indigo-500/10 to-purple-500/10",
          borderColor: "border-indigo-500/30 hover:border-indigo-500/60",
          iconBg: "from-indigo-500 to-purple-600",
          highlighted: true
        },
        {
          title: isEN ? "Delivery Control" : "Delivery Control",
          tagline: isEN ? "AGILE DEPLOYMENT • 3-6 MONTHS" : "LE DÉPLOIEMENT AGILE • 3-6 MOIS",
          desc: isEN
            ? "Deployment coordination: Backlog management. I train your teams that I deliver with prompts + Tech pack (templates). User testing. Tech pack (templates) and piloting of driver handover kickoff."
            : "Coordination du déploiement: Gestion du backlog. J'instruis vos équipes que je livre avec prompts + Tech pack (gabarits). Tests utilisateurs. Tech pack (gabarits) et pilotage du démarrage de l'héritage du driver.",
          icon: <LayoutTemplate className="h-8 w-8" />,
          duration: isEN ? "3-6 months" : "3-6 mois",
          deliverables: isEN ? "AI Project Managers • Tech" : "Chefs de projets IA • Tech",
          badge: "🎯 SCALE",
          gradient: "from-green-500/10 to-emerald-500/10",
          borderColor: "border-green-500/20 hover:border-green-500/50",
          iconBg: "from-green-500 to-emerald-600"
        }
      ]
    },
    usp: {
      title: isEN ? "Why a 'Tech-Fluent' Business Lead?" : "Pourquoi un Lead Business 'Tech-Fluent' ?",
      subtitle: isEN ? "I speak API & P&L" : "Je parle API & P&L",
      text: isEN
        ? "20+ years in Business Development at Sony, Mars, Mastercard. I'm not a Cloud Architect, but I understand the engine (LLMs, APIs, Office 365). I'm not a developer, but I build React prototypes and automate with Make/N8N to prove value. My strength: translating C-level needs into IT backlog that tech teams respect."
        : "20+ ans en Business Development chez Sony, Mars, Mastercard. Je ne suis pas Architecte Cloud, mais je comprends le moteur (LLMs, APIs, Office 365). Je ne suis pas développeur, mais je prototype en React et automatise avec Make/N8N pour prouver la valeur. Ma force : traduire les besoins Direction en backlog IT que les équipes tech respectent.",
      quote: isEN ? "I don't just write slides. I make sure the tools are actually used by real people." : "Je ne fais pas que des slides. Je m'assure que les outils sont réellement utilisés par de vraies personnes."
    },
    partner: {
      title: isEN ? "Scaling & Change Management" : "Scaling & Conduite du Changement",
      text: isEN
        ? "For large-scale deployments requiring deep cultural transformation, I leverage my network of specialized Change Directors."
        : "Pour les déploiements à grande échelle nécessitant une transformation culturelle profonde, je m'appuie sur mon réseau de Directeurs du Changement spécialisés.",
      name: "Network Partners",
      role: isEN ? "Scalable Capacity" : "Capacité Étendue",
      desc: isEN
        ? "Access to specialized profiles (Legal Ops, HR Change) activated on demand."
        : "Accès à des profils spécialisés (Legal Ops, HR Change) activés à la demande."
    },
    contact: {
      title: isEN ? "Availability" : "Disponibilité",
      text: isEN
        ? "Available for short-term missions (Workshops/Diagnostic) or mid-term Delivery mandates (3-6 months)."
        : "Disponible pour missions courtes (Workshops/Diagnostic) ou mandats de Delivery moyen terme (3-6 mois).",
      cta: isEN ? "Contact me" : "Me contacter par Email",
      linkedin: isEN ? "My LinkedIn Profile" : "Mon Profil LinkedIn"
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <HeroSection content={t.hero} isEN={isEN} />
      <main role="main">
        <ProblemSection content={t.problem} isEN={isEN} />
        <MandatesSection content={t.mandates} isEN={isEN} />
        <USPSection content={t.usp} isEN={isEN} />
        <PartnerSection content={t.partner} />
      </main>
      <ContactSection content={t.contact} />
    </div>
  );
};

export default AdoptionArchitectPage;
