'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Icons - Sélection "Action" & "Delivery"
import {
  Zap,            // Flash Diagnostic
  Users,          // Workshops / Adoption
  LayoutTemplate, // Delivery / Framework
  BrainCircuit,   // Tech Fluency
  ArrowRight,
  Target,         // ROI Focus
  ShieldCheck,    // Pragmatisme
  Building2,      // Corporate Trust
  Quote,
  Mail,
  Linkedin,
  Terminal        // Code culture
} from 'lucide-react';

type FormDataShape = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
};

const AdoptionArchitectPage = ({ locale = 'fr' }) => {
  const isEN = locale === 'en';

  // --- CONTENU DU SITE (STRATÉGIE "ADOPTION ARCHITECT") ---
  const t = {
    hero: {
      badge: isEN ? "AI ADOPTION ARCHITECT & DELIVERY LEAD" : "AI ADOPTION ARCHITECT & DELIVERY LEAD",
      title: isEN 
        ? "Turning AI Pilots into Production Value"
        : "Je transforme vos Pilotes IA en Valeur de Production",
      subtitle: isEN
        ? "Companies buy licenses. Users stay stuck. I bridge the gap between 'Buying AI' and 'Using AI' through rapid prototyping, workshops, and delivery management."
        : "Les entreprises achètent les licences. Les utilisateurs restent bloqués. Je comble le fossé entre l'Achat et l'Usage via le prototypage rapide, l'animation de workshops et le pilotage du delivery.",
      cta: isEN ? "My Methodology" : "Ma Méthodologie",
      trust: isEN ? "Former Director at:" : "Ancien Directeur chez :"
    },
    problem: {
      title: isEN ? "THE PROBLEM: THE 'USAGE GAP'" : "LE PROBLÈME : LE 'USAGE GAP'",
      text: isEN
        ? "You have Microsoft Copilot or ChatGPT Enterprise. You have a roadmap. But 6 months later, adoption is stuck at 10% and ROI is invisible. Why? Because slides don't change behaviors. Tools do."
        : "Vous avez Microsoft Copilot ou une roadmap IA. Mais 6 mois plus tard, l'adoption stagne à 10% et le ROI est invisible. Pourquoi ? Parce que les PowerPoints ne changent pas les comportements. Les outils et les preuves, si.",
      stat: "ROI = 0",
      statDesc: isEN ? "If adoption remains theoretical." : "Tant que l'adoption reste théorique."
    },
    mandates: {
      title: isEN ? "My 3 Intervention Modes" : "Mes 3 Modes d'Intervention",
      subtitle: isEN ? "Hands-on Strategy & Delivery" : "Stratégie Opérationnelle & Delivery",
      items: [
        {
          title: isEN ? "Flash Diagnostic" : "Flash Diagnostic",
          role: isEN ? "The Auditor" : "L'Auditeur (1-5 Jours)",
          desc: isEN 
            ? "Rapid assessment of your current AI maturity. Mapping of blocking points (Tech/Legal/Skills). Delivery of a pragmatic 30-day Action Plan to unblock the situation."
            : "Audit rapide de la maturité IA actuelle. Cartographie des points de blocage (Tech/Legal/Compétences). Livraison d'un Plan d'Action pragmatique à 30 jours pour débloquer la situation.",
          icon: <Zap className="h-8 w-8 text-yellow-600" />,
          target: isEN ? "Target: CDO / Head of Ops" : "Cible : CDO / Dir. Opérations"
        },
        {
          title: isEN ? "Workshops & Activation" : "Workshops & Activation",
          role: isEN ? "The Facilitator" : "Le Facilitateur (The Core)",
          desc: isEN
            ? "This is my sweet spot. Leading hands-on workshops to define use-cases. 'Train the Trainer' sessions. Creating the backlog and getting teams excited about using the tools."
            : "Ma zone d'excellence. Animation de workshops pratiques pour définir les cas d'usage. Sessions 'Train the Trainer'. Création du backlog et onboarding des équipes pour créer l'adhésion.",
          icon: <Users className="h-8 w-8 text-blue-600" />,
          target: isEN ? "Target: Business Teams (Sales/Legal)" : "Cible : Équipes Métier (Sales/Legal)"
        },
        {
          title: isEN ? "Delivery Control" : "Delivery Control",
          role: isEN ? "The Delivery Lead" : "Le Delivery Lead (1-3 Mois)",
          desc: isEN
            ? "Coordinating the rollout. Managing the backlog. Ensuring that what is promised is actually delivered by the tech teams. I act as the bridge ensuring the project lands safely."
            : "Coordination du déploiement. Gestion du backlog. Je m'assure que ce qui est promis est livré. Je fais le pont entre le Métier et la Tech pour garantir l'atterrissage du projet.",
          icon: <LayoutTemplate className="h-8 w-8 text-emerald-600" />,
          target: isEN ? "Target: Project Leaders" : "Cible : Chefs de Projet"
        }
      ]
    },
    usp: {
      title: isEN ? "Why a 'Tech-Fluent' Business Lead?" : "Pourquoi un Lead Business 'Tech-Fluent' ?",
      subtitle: isEN ? "I speak API & P&L" : "Je parle API & P&L",
      text: isEN 
        ? "I am not a Cloud Architect, but I understand the engine (LLMs, Tokens, APIs). I am not a developer, but I prototype to prove value. My strength is translation: I take your Business needs and turn them into a backlog that IT understands and respects."
        : "Je ne suis pas Architecte Cloud, mais je comprends le moteur (LLMs, Tokens, APIs). Je ne suis pas développeur, mais je prototype pour prouver la valeur. Ma force est la traduction : je transforme vos besoins Business en un backlog que la DSI comprend et respecte.",
      quote: isEN ? "I don't just write slides. I make sure the tools are actually used by real people." : "Je ne fais pas que des slides. Je m'assure que les outils sont réellement utilisés par de vraies personnes."
    },
    partner: {
      title: isEN ? "Scaling & Change Management" : "Scaling & Conduite du Changement",
      text: isEN 
        ? "For large-scale deployments requiring deep cultural transformation, I partner with specialized Change Directors."
        : "Pour les déploiements à grande échelle nécessitant une transformation culturelle profonde, je m'appuie sur des Directeurs du Changement spécialisés.",
      name: "Robin Pellaton",
      role: isEN ? "Adoption Partner" : "Adoption Partner",
      desc: isEN 
        ? "Expert in User Psychology and large-scale coaching. Ex-Marketing Director."
        : "Expert en psychologie utilisateur et coaching de masse. Ex-Directeur Marketing."
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

  // --- STATE & FORM ---
  const [formData, setFormData] = useState<FormDataShape>({
    firstName: '', lastName: '', email: '', company: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Animations simples
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
        const payload = { ...formData, source: 'adoption-architect-landing', locale };
        await fetch(process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL || '', {
          method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload),
        });
        setSubmitSuccess(true);
    } catch (err) { console.error(err); setIsSubmitting(false); }
    setSubmitSuccess(true);
    setIsSubmitting(false);
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* --- HERO SECTION (ACTION & DELIVERY) --- */}
      <section className="relative bg-slate-900 text-white pt-24 pb-20 overflow-hidden">
        {/* Fond : Plus dynamique, moins "Boardroom" */}
        <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-slate-950 to-black"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Texte Hero */}
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-bold tracking-widest uppercase mb-6">
              {t.hero.badge}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              ANTOINE BILLOTTE
              <span className="block text-indigo-400 text-2xl md:text-3xl mt-2 font-light">
                {t.hero.title}
              </span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#mandates" onClick={() => trackInternalLink?.('hero_mandates')} className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-all shadow-lg flex items-center justify-center">
                {t.hero.cta} <ArrowRight className="ml-2 h-5 w-5"/>
              </a>
              <a href="#contact" className="px-8 py-4 bg-transparent border border-slate-600 hover:bg-slate-800 text-white font-semibold rounded-lg transition-all flex items-center justify-center">
                Contact
              </a>
            </div>

            {/* TRUST BAR */}
            <div className="border-t border-slate-800 pt-8">
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-4 font-semibold">{t.hero.trust}</p>
              <div className="flex flex-wrap gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="text-xl font-bold tracking-tighter text-white">SONY</span>
                <span className="text-xl font-black tracking-widest text-white">MARS</span>
                <span className="text-xl font-bold italic text-white">Mastercard</span>
              </div>
            </div>
          </motion.div>

          {/* Photo Antoine */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="relative h-[500px] hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent rounded-3xl transform rotate-2"></div>
            <div className="absolute inset-0 bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
              <Image 
                src="/images/Antoine.png" 
                alt="Antoine Billotte - AI Adoption Architect" 
                fill 
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-30"></div>
            </div>
             {/* Badge Flottant "Maker" */}
             <div className="absolute bottom-8 -left-8 bg-white text-slate-900 p-4 rounded-xl shadow-xl border-l-4 border-indigo-600 hidden xl:block">
                <div className="flex items-center gap-3">
                    <Terminal className="h-6 w-6 text-indigo-600" />
                    <div>
                        <p className="text-xs font-bold uppercase text-slate-500">Tech Fluency</p>
                        <p className="font-bold">Python / Make / API</p>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PROBLEM SECTION (THE USAGE GAP) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{t.problem.title}</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {t.problem.text}
              </p>
              <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg border border-amber-100">
                <Target className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                <p className="text-sm text-amber-800 italic">
                  {isEN 
                    ? "Innovation Labs look good on slides, but Production Value happens in the messy reality of operations." 
                    : "Les Labs d'Innovation sont beaux sur les slides, mais la Valeur de Production se crée dans la réalité opérationnelle."}
                </p>
              </div>
            </div>
            {/* Statistique Visuelle */}
            <div className="bg-slate-900 text-white p-12 rounded-3xl text-center shadow-xl border border-slate-800">
              <div className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-400 mb-4">
                {t.problem.stat}
              </div>
              <p className="text-xl text-slate-300 font-medium">{t.problem.statDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- MANDATES SECTION (THE HANDS-ON OFFER) --- */}
      <section id="mandates" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-bold uppercase text-sm tracking-widest">{t.mandates.subtitle}</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">{t.mandates.title}</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {t.mandates.items.map((mandate, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="mb-6 p-3 bg-indigo-50 w-fit rounded-xl border border-indigo-100">
                  {mandate.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{mandate.title}</h3>
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold uppercase rounded-full mb-6 w-fit">
                  {mandate.role}
                </span>
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                  {mandate.desc}
                </p>
                <div className="mt-auto pt-6 border-t border-slate-50">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                    {mandate.target}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- USP SECTION (TECH FLUENCY) --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-slate-900 rounded-3xl p-8 md:p-16 text-white overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl -ml-16 -mb-16"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <BrainCircuit className="h-6 w-6 text-indigo-400" />
                  <span className="text-indigo-400 font-bold uppercase tracking-widest text-sm">{t.usp.subtitle}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.usp.title}</h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  {t.usp.text}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 italic text-xl text-indigo-100 font-light relative">
                <Quote className="absolute top-4 left-4 h-8 w-8 text-indigo-400/30" />
                <p className="pl-6 pt-2">"{t.usp.quote}"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PARTNER SECTION (ROBIN) --- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-10 w-10 text-purple-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 mb-4">{t.partner.title}</h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
            {t.partner.text}
          </p>

          {/* Robin Card */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 inline-flex items-center gap-6 text-left max-w-xl mx-auto hover:shadow-md transition-shadow">
            <div className="relative h-20 w-20 flex-shrink-0">
               <Image 
                  src="/images/Robin.png" 
                  alt="Robin Pellaton" 
                  fill 
                  className="object-cover rounded-full border-2 border-slate-100" 
                />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">{t.partner.name}</h3>
              <p className="text-purple-600 text-xs font-bold uppercase mb-1">{t.partner.role}</p>
              <p className="text-sm text-slate-500">{t.partner.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER / CONTACT --- */}
      <footer id="contact" className="bg-white border-t border-slate-200 pt-20 pb-10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Building2 className="h-12 w-12 text-slate-300 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.contact.title}</h2>
          <p className="text-xl text-slate-600 mb-10">
            {t.contact.text}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a 
              href="mailto:contact@tomorrow-solutions.com" 
              className="px-8 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="h-5 w-5" /> {t.contact.cta}
            </a>
            <a 
              href="https://www.linkedin.com/in/antoinebillotte/" 
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-white border border-slate-300 text-slate-700 font-bold rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
            >
              <Linkedin className="h-5 w-5" /> {t.contact.linkedin}
            </a>
          </div>
          
          <div className="text-slate-400 text-sm border-t border-slate-100 pt-8">
            <p>© {new Date().getFullYear()} Antoine Billotte / Tomorrow Solutions. AI Adoption Architect.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdoptionArchitectPage;