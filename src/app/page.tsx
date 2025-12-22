'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

// Icons - Sélection "Action" & "Delivery"
import {
  Zap,            // Flash Diagnostic
  Users,          // Workshops / Adoption
  LayoutTemplate, // Delivery / Framework
  BrainCircuit,   // Tech Fluency
  ArrowRight,
  TrendingUp,     // Success
  CheckCircle2,   // Validation
  Building2,      // Corporate Trust
  Quote,
  Mail,
  Linkedin,
  Terminal,       // Code culture
  XCircle,        // Failure icon
  AlertTriangle   // Warning
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
      badge: "AI ADOPTION ARCHITECT & DELIVERY LEAD",
      titleLine1: isEN ? "Stuck AI Pilots?" : "Vos Pilotes IA Bloqués ?",
      titleLine2: isEN ? "I Turn them into Value." : "Je les Transforme en Valeur.",
      subtitle: isEN
        ? "Companies buy licenses. Users stay stuck. I bridge the gap between 'Buying AI' and 'Using AI' through rapid prototyping, workshops, and delivery management."
        : "Les entreprises dépensent des millions en licences Microsoft Copilot. Résultat ? 10% d'adoption, ROI invisible. Je débloque les freins par le terrain : Diagnostic Tech + Workshops Opérationnels + Delivery Agile.",
      ctaPrimary: isEN ? "Flash Diagnostic (72h)" : "Diagnostic Flash (72h)",
      ctaSecondary: isEN ? "See Results" : "Voir les Résultats",
      trust: isEN ? "Former Director at:" : "Ancien Directeur chez :"
    },
    dashboard: {
      title: isEN ? "The Copilot Paradox" : "Le Paradoxe Copilot",
      subtitle: isEN ? "You pay for licenses. Your teams don't use them." : "Vous payez les licences. Vos équipes ne les utilisent pas.",
      before: {
        title: isEN ? "WITHOUT ADOPTION" : "SANS ACCOMPAGNEMENT",
        stat1Label: isEN ? "Adoption Rate" : "Taux d'Adoption",
        stat2Label: isEN ? "Measured ROI" : "ROI Mesuré",
        pain: isEN ? "⚠️ Wasted Budget • Frustrated Teams" : "⚠️ Budget Gaspillé • Équipes Frustrées"
      },
      after: {
        title: isEN ? "WITH ARCHITECT" : "AVEC MON DELIVERY",
        stat1Label: isEN ? "Adoption Rate" : "Taux d'Adoption",
        stat2Label: isEN ? "Projected ROI" : "ROI Projeté",
        gain: isEN ? "✅ Autonomous Teams • +12h/week saved" : "✅ Équipes Autonomes • +12h/sem gagnées",
        badge: isEN ? "Guaranteed Result" : "Résultat Garanti"
      }
    },
    mandates: {
      title: isEN ? "3 Modes of Intervention" : "Mes 3 Modes d'Intervention",
      subtitle: isEN ? "Hands-on Strategy & Delivery" : "Stratégie Opérationnelle & Delivery",
      items: [
        {
          title: isEN ? "Flash Diagnostic" : "Flash Diagnostic",
          role: isEN ? "The Auditor" : "L'Auditeur (2-5 Jours)",
          desc: isEN 
            ? "Rapid assessment of AI maturity. Mapping blockers (Tech/Legal/Skills). Delivering a pragmatic 30-day Action Plan."
            : "Audit racine de la maturité IA actuelle. Cartographie des points de blocage (Réputation/Légal/Compétences). Livraison d'un Plan d'Action à 30 jours pour débloquer la situation.",
          icon: <Zap className="h-8 w-8 text-yellow-400" />,
          gradient: "from-yellow-500/20 to-orange-500/20",
          border: "border-yellow-500/30",
          badge: "⚡ EXPRESS"
        },
        {
          title: isEN ? "Workshops & Activation" : "Workshops & Activation",
          role: isEN ? "The Facilitator" : "Le Facilitateur (The Core)",
          desc: isEN
            ? "My sweet spot. Leading hands-on workshops. 'Train the Trainer' sessions. Creating the backlog and getting teams excited."
            : "Ma zone d'excellence. Animation de workshops pratiques pour ancrer les use cases. Sessions 'Train the Trainer'. Création de backlog opérationnel pour lancer l'adhésion.",
          icon: <Users className="h-8 w-8 text-indigo-400" />,
          gradient: "from-indigo-500/20 to-purple-500/20",
          border: "border-indigo-500/50",
          badge: "⭐ RECOMMANDÉ"
        },
        {
          title: isEN ? "Delivery Control" : "Delivery Control",
          role: isEN ? "The Delivery Lead" : "Le Delivery Lead (3-6 Mois)",
          desc: isEN
            ? "Coordinating rollout. Managing backlog. Ensuring tech delivers on promises. Bridging Business and Tech."
            : "Coordination du déploiement agile. Gestion du backlog. J'instruis vos équipes et je pilote la livraison des Prompts & Tech Packs. Je garantis l'atterrissage du projet.",
          icon: <LayoutTemplate className="h-8 w-8 text-emerald-400" />,
          gradient: "from-emerald-500/20 to-teal-500/20",
          border: "border-emerald-500/30",
          badge: "🚀 SCALING"
        }
      ]
    },
    usp: {
      title: isEN ? "Why a 'Tech-Fluent' Lead?" : "Pourquoi un Lead 'Tech-Fluent' ?",
      subtitle: isEN ? "I speak API & P&L" : "Je parle API & P&L",
      text: isEN 
        ? "I am not a Cloud Architect, but I understand the engine (LLMs, Tokens, APIs). I am not a developer, but I prototype to prove value. My strength is translation: I take your Business needs and turn them into a backlog that IT understands and respects."
        : "Je ne suis pas Architecte Cloud, mais je comprends le moteur (LLMs, Tokens, APIs). Je ne suis pas développeur, mais je prototype pour prouver la valeur. Ma force est la traduction : je transforme vos besoins Business en un backlog que la DSI comprend et respecte.",
      quote: isEN ? "I don't just write slides. I make sure the tools are actually used." : "Je ne fais pas que des slides. Je m'assure que les outils sont réellement utilisés."
    },
    partner: {
      title: isEN ? "Scaling & Change Management" : "Scaling & Conduite du Changement",
      text: isEN 
        ? "For large-scale deployments requiring deep cultural transformation, I leverage my network of specialized Change Directors."
        : "Pour les déploiements à grande échelle nécessitant une transformation culturelle profonde, je m'appuie sur mon réseau de Directeurs du Changement spécialisés.",
    },
    contact: {
      title: isEN ? "Ready to Unblock?" : "Prêt à Débloquer votre Pilote ?",
      text: isEN 
        ? "Available for short-term missions (Workshops/Diagnostic) or mid-term Delivery mandates (3-6 months)."
        : "Disponible pour missions courtes (Workshops/Diagnostic) ou mandats de Delivery moyen terme (3-6 mois).",
      cta: isEN ? "Contact me" : "Me contacter par Email",
      linkedin: isEN ? "My LinkedIn Profile" : "Mon Profil LinkedIn"
    }
  };

  // --- PARTICLES ANIMATION (Fix Hydration) ---
  const [particles, setParticles] = useState<Array<{left: number, top: number, delay: number}>>([]);
  
  useEffect(() => {
    // Génération côté client uniquement pour éviter mismatch serveur/client
    setParticles([...Array(20)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5
    })));
  }, []);

  // --- SCROLL ANIMATIONS ---
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);

  // CSS INJECTÉ (Pour être autonome sans globals.css)
  const styles = `
    .particle {
      position: absolute;
      width: 4px;
      height: 4px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      animation: float 15s infinite ease-in-out;
    }
    @keyframes float {
      0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
      50% { transform: translateY(-100vh) translateX(50px); opacity: 1; }
    }
    .glass-card {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .animated-gradient-text {
      background: linear-gradient(to right, #818cf8, #38bdf8, #818cf8);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      background-size: 200% auto;
      animation: gradient-text 5s ease infinite;
    }
    @keyframes gradient-text {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `;

  return (
    <div className="bg-slate-950 min-h-screen font-sans text-white selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      <style>{styles}</style>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Animé */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
             {/* Grid pattern simple */}
             <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
        </div>
        
        {/* Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((p, i) => (
            <div key={i} className="particle" style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDelay: `${p.delay}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}></div>
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pt-20">
          
          {/* Texte Hero */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-2 bg-indigo-500/10 backdrop-blur-md rounded-full border border-indigo-500/30">
              <span className="text-sm font-bold text-indigo-300 tracking-wider">{t.hero.badge}</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="block text-white">{t.hero.titleLine1}</span>
              <span className="block mt-2 animated-gradient-text">
                {t.hero.titleLine2}
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#mandates" className="group px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center">
                {t.hero.ctaPrimary}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#dashboard" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all flex items-center justify-center">
                {t.hero.ctaSecondary}
              </a>
            </div>

            {/* Trust Bar */}
            <div className="pt-8 opacity-60 border-t border-white/10 mt-8">
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-4 font-semibold">{t.hero.trust}</p>
              <div className="flex gap-8 items-center">
                 <span className="text-xl font-bold text-white tracking-tighter">SONY</span>
                 <span className="text-xl font-black text-white tracking-widest">MARS</span>
                 <span className="text-xl font-bold text-white italic">Mastercard</span>
              </div>
            </div>
          </motion.div>

          {/* Image Hero (Carte 3D) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            style={{ y: y1 }}
            className="relative hidden lg:block perspective-1000"
          >
            <div className="relative rounded-3xl overflow-hidden glass-card p-2 border border-white/10 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
               <div className="relative h-[600px] w-full bg-slate-800 rounded-2xl overflow-hidden">
                  <Image 
                    src="/images/Antoine.png" 
                    alt="Antoine Billotte" 
                    fill 
                    className="object-cover object-top opacity-90 hover:opacity-100 transition-opacity"
                    priority
                  />
                  {/* Overlay Gradient pour intégration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Badge Flottant ROI */}
                  <div className="absolute bottom-8 right-8 bg-slate-900/80 backdrop-blur-xl p-4 rounded-2xl border border-emerald-500/30 shadow-2xl">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-emerald-500 rounded-lg text-white">
                            <TrendingUp size={24} />
                        </div>
                        <div>
                            <p className="text-emerald-400 font-bold text-2xl">+240% ROI</p>
                            <p className="text-slate-300 text-xs">Moyenne clients (3 mois)</p>
                        </div>
                    </div>
                  </div>

                  {/* Badge Flottant Tech */}
                  <div className="absolute top-8 left-8 glass-card p-3 rounded-xl border border-white/20">
                    <div className="flex items-center gap-3">
                        <Terminal className="w-5 h-5 text-indigo-400" />
                        <div>
                            <p className="text-[10px] text-slate-400 uppercase font-bold">Tech Stack</p>
                            <p className="text-white font-mono text-sm">Python • Make • API</p>
                        </div>
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- DASHBOARD SECTION (THE ROI GAP) --- */}
      <section id="dashboard" className="py-24 bg-slate-50 text-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">{t.dashboard.title}</h2>
            <p className="text-xl text-slate-600">{t.dashboard.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card: BEFORE */}
            <div className="relative p-8 bg-red-50 rounded-3xl border-2 border-red-100">
              <div className="absolute -top-4 left-8 px-4 py-2 bg-red-600 text-white text-sm font-bold rounded-full shadow-lg">
                {t.dashboard.before.title}
              </div>
              <div className="mt-8 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 font-medium">{t.dashboard.before.stat1Label}</span>
                  <span className="text-3xl font-bold text-red-600">10%</span>
                </div>
                <div className="w-full bg-red-200 rounded-full h-3">
                  <div className="bg-red-600 h-3 rounded-full" style={{width: '10%'}}></div>
                </div>
                
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-red-200">
                   <div className="flex items-center gap-3">
                      <XCircle className="w-8 h-8 text-red-500" />
                      <span className="text-slate-700 font-bold text-lg">{t.dashboard.before.stat2Label}</span>
                   </div>
                   <span className="text-3xl font-bold text-slate-400">0€</span>
                </div>
                 <div className="mt-4 p-3 bg-red-100 rounded-lg flex gap-2 text-sm text-red-800 font-medium">
                    <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                    {t.dashboard.before.pain}
                 </div>
              </div>
            </div>

            {/* Card: AFTER */}
            <div className="relative p-8 bg-white rounded-3xl border-2 border-emerald-400 shadow-2xl transform md:-translate-y-4">
               <div className="absolute -top-4 left-8 px-4 py-2 bg-emerald-600 text-white text-sm font-bold rounded-full shadow-lg">
                {t.dashboard.after.title}
              </div>
              <div className="mt-8 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 font-medium">{t.dashboard.after.stat1Label}</span>
                  <span className="text-3xl font-bold text-emerald-600">85%</span>
                </div>
                <div className="w-full bg-emerald-100 rounded-full h-3">
                  <div className="bg-emerald-500 h-3 rounded-full" style={{width: '85%'}}></div>
                </div>
                
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
                   <div className="flex items-center gap-3">
                      <TrendingUp className="w-8 h-8 text-emerald-500" />
                      <span className="text-slate-900 font-bold text-lg">{t.dashboard.after.stat2Label}</span>
                   </div>
                   <span className="text-3xl font-bold text-emerald-600">+240%</span>
                </div>

                <div className="mt-4 p-3 bg-emerald-50 rounded-lg flex gap-2 text-sm text-emerald-800 font-medium border border-emerald-100">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    {t.dashboard.after.gain}
                 </div>

                {/* Badge Bounce */}
                <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-slate-900 font-bold px-6 py-3 rounded-xl shadow-xl rotate-3">
                    {t.dashboard.after.badge}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MANDATES SECTION (OFFER) --- */}
      <section id="mandates" className="py-24 bg-slate-900 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-indigo-900 text-indigo-300 text-sm font-bold rounded-full border border-indigo-500/30">
              {t.mandates.subtitle}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-6">{t.mandates.title}</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {t.mandates.items.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className={`group relative p-8 rounded-3xl border bg-gradient-to-br ${item.gradient} ${item.border} hover:scale-105 transition-transform duration-300`}
              >
                <div className="w-16 h-16 mb-6 bg-slate-900 rounded-2xl flex items-center justify-center border border-white/10 shadow-xl">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm font-bold text-white/60 mb-4 uppercase tracking-wider">{item.role}</p>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  {item.desc}
                </p>
                
                {/* Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-xs font-bold text-white">
                  {item.badge}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- USP SECTION (TECH FLUENCY) --- */}
      <section className="py-24 bg-indigo-950 overflow-hidden relative">
         {/* Decor */}
         <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16">
                <div className="flex items-center gap-4 mb-8">
                    <BrainCircuit className="w-10 h-10 text-cyan-400" />
                    <h2 className="text-3xl font-bold text-white">{t.usp.title}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            {t.usp.text}
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-2xl opacity-20 blur-lg"></div>
                        <div className="relative bg-slate-800 p-6 rounded-2xl border border-white/10">
                            <Quote className="w-8 h-8 text-indigo-400 mb-4" />
                            <p className="text-xl text-white font-light italic">
                                "{t.usp.quote}"
                            </p>
                            <div className="mt-4 flex items-center gap-3">
                                <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-xs">AB</div>
                                <p className="text-xs text-slate-400 font-bold">Antoine Billotte</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- PARTNER & CONTACT --- */}
      <footer id="contact" className="py-24 bg-slate-950 border-t border-white/5">
        <div className="container mx-auto px-6 text-center max-w-4xl">
            {/* Partner Section (Light) */}
            <div className="mb-20">
                <Users className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{t.partner.title}</h3>
                <p className="text-slate-400 max-w-2xl mx-auto">{t.partner.text}</p>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl p-12 border border-indigo-500/30">
                <Building2 className="w-12 h-12 text-indigo-400 mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-white mb-6">{t.contact.title}</h2>
                <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">{t.contact.text}</p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a href="mailto:contact@tomorrow-solutions.com" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-3">
                        <Mail className="w-5 h-5" />
                        {t.contact.cta}
                    </a>
                    <a href="https://www.linkedin.com/in/antoinebillotte/" target="_blank" rel="noreferrer" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-3">
                        <Linkedin className="w-5 h-5" />
                        {t.contact.linkedin}
                    </a>
                </div>
            </div>
            
            <p className="mt-12 text-slate-600 text-sm">
                © {new Date().getFullYear()} Antoine Billotte. AI Adoption Architect.
            </p>
        </div>
      </footer>
    </div>
  );
};

export default AdoptionArchitectPage;