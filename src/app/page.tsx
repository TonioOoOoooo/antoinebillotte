'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

// Icons
import {
  Zap,
  Users,
  LayoutTemplate,
  BrainCircuit,
  ArrowRight,
  Target,
  ShieldCheck,
  Building2,
  Quote,
  Mail,
  Linkedin,
  Terminal,
  TrendingUp,
  CheckCircle2,
  XCircle,
  Sparkles,
  Rocket,
  BarChart3
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
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax effects
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse tracking pour effet interactif
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

  // --- STATE & FORM ---
  const [formData, setFormData] = useState<FormDataShape>({
    firstName: '', lastName: '', email: '', company: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const payload = { ...formData, source: 'adoption-architect-landing', locale };
      await fetch(process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL || '', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      setSubmitSuccess(true);
    } catch (err) {
      console.error(err);
    }
    setIsSubmitting(false);
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      
      {/* --- HERO SECTION ULTRA-MODERNE --- */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
        {/* Animated gradient background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        <motion.div 
          className="container mx-auto px-6 relative z-10"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Colonne gauche : Texte */}
            <motion.div 
              className="space-y-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <Sparkles className="h-4 w-4 text-cyan-400" />
                  <span className="text-sm text-white font-semibold">{t.hero.badge}</span>
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  <span className="block">Antoine Billotte</span>
                  <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {t.hero.title}
                  </span>
                  <span className="block text-3xl lg:text-4xl mt-4 text-white/90">
                    {t.hero.subtitle}
                  </span>
                </h1>
              </motion.div>

              <motion.p 
                className="text-xl text-white/70 leading-relaxed"
                variants={fadeInUp}
              >
                {t.hero.description}
              </motion.p>

              {/* CTA avec urgence */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={fadeInUp}
              >
                <a 
                  href="#diagnostic" 
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-cyan-500/50 transition-all flex items-center justify-center"
                >
                  {t.hero.ctaPrimary}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#results" 
                  className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center"
                >
                  {t.hero.ctaSecondary}
                </a>
              </motion.div>

              {/* Preuve sociale immédiate */}
              <motion.div 
                className="flex items-center gap-6 pt-4"
                variants={fadeInUp}
              >
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div 
                      key={i} 
                      className="w-12 h-12 rounded-full border-2 border-slate-900 bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs"
                    >
                      {i === 1 && '👨‍💼'}
                      {i === 2 && '👩‍⚖️'}
                      {i === 3 && '👨‍💻'}
                      {i === 4 && '👩‍💼'}
                    </div>
                  ))}
                </div>
                <div className="text-white/80">
                  <p className="font-semibold text-white text-sm">{t.hero.trust}</p>
                </div>
              </motion.div>

              {/* Logos entreprises */}
              <motion.div 
                className="flex items-center gap-8 pt-8 opacity-60"
                variants={fadeInUp}
              >
                <div className="text-white/50 text-sm font-semibold uppercase tracking-wide">
                  {isEN ? "Former Director at:" : "Ancien Directeur chez :"}
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-white font-bold text-xl">SONY</div>
                  <div className="text-white font-bold text-xl">MARS</div>
                  <div className="text-white font-bold text-xl">Mastercard</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Colonne droite : Image avec effet glassmorphism */}
            <motion.div 
              className="relative pb-12 pr-12"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/5 border-2 border-white/30 p-6 shadow-2xl">
                <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-inner">
                  <Image
                    src="/images/hero-transformation.png"
                    alt="AI Transformation - Before/After"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Overlay gradient subtil pour effet premium */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none"></div>
                </div>
                
                {/* Badge flottant ROI */}
                <motion.div 
                  className="absolute -bottom-6 -right-6 px-8 py-5 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 rounded-2xl shadow-2xl border-4 border-white z-10"
                  animate={{ 
                    rotate: [0, 3, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <p className="text-white font-black text-3xl drop-shadow-lg tracking-tight">+240% ROI</p>
                  <p className="text-white text-sm font-bold">{isEN ? "Avg. in 3 months" : "En 3 mois moy."}</p>
                </motion.div>
              </div>

              {/* Compétences flottantes */}
              <motion.div 
                className="absolute -top-4 -left-4 px-4 py-2 bg-white rounded-xl shadow-xl border-2 border-slate-200"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Tech Stack</p>
                <p className="text-sm font-bold text-slate-900">React • Make • APIs</p>
              </motion.div>

              {/* Badge experience grands groupes */}
              <motion.div 
                className="absolute -bottom-4 -left-4 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-xl"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-xs font-bold text-white/80 uppercase tracking-wide">Experience</p>
                <p className="text-sm font-bold text-white">Sony • Mars • Mastercard</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* --- SECTION ROI TRANSFORMÉE (DASHBOARD COMPARATIF) --- */}
      <section id="results" className="py-24 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Titre avec impact émotionnel */}
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-5xl font-bold text-slate-900 mb-4">
                {t.problem.title}
              </h2>
              <p className="text-xl text-slate-600">
                {t.problem.subtitle.split('.')[0]}. <span className="text-red-600 font-semibold">{t.problem.subtitle.split('.')[1]}.</span>
              </p>
            </motion.div>

            {/* Dashboard comparatif Before/After */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* AVANT : Situation actuelle */}
              <motion.div 
                className="relative p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl border-2 border-red-200"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute -top-4 left-8 px-4 py-2 bg-red-600 text-white text-sm font-bold rounded-full shadow-lg">
                  {t.problem.before.label}
                </div>
                
                <div className="mt-8 space-y-6">
                  {/* Taux d'adoption */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-700 font-semibold">{isEN ? "Adoption rate" : "Taux d'adoption"}</span>
                      <span className="text-4xl font-bold text-red-600">{t.problem.before.adoption}</span>
                    </div>
                    <div className="w-full bg-red-200 rounded-full h-3 overflow-hidden">
                      <motion.div 
                        className="bg-red-600 h-3 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '10%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </div>

                  {/* ROI */}
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-red-200">
                    <span className="text-slate-700 font-semibold">{isEN ? "Measured ROI" : "ROI Mesuré"}</span>
                    <span className="text-5xl font-bold text-red-600">{t.problem.before.roi}</span>
                  </div>

                  {/* Problèmes */}
                  <div className="mt-6 p-4 bg-white/70 rounded-xl space-y-2">
                    {t.problem.before.issues.map((issue, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                        <XCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                        <span>{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* APRÈS : Avec accompagnement */}
              <motion.div 
                className="relative p-8 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 rounded-3xl border-2 border-green-300 shadow-2xl"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute -top-4 left-8 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-bold rounded-full shadow-lg">
                  {t.problem.after.label}
                </div>
                
                <div className="mt-8 space-y-6">
                  {/* Taux d'adoption */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-700 font-semibold">{isEN ? "Adoption rate" : "Taux d'adoption"}</span>
                      <span className="text-4xl font-bold text-green-600">{t.problem.after.adoption}</span>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-3 overflow-hidden">
                      <motion.div 
                        className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '87%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </div>

                  {/* ROI */}
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-green-200">
                    <span className="text-slate-700 font-semibold">{isEN ? "Average ROI (3 months)" : "ROI Moyen (3 mois)"}</span>
                    <span className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      {t.problem.after.roi}
                    </span>
                  </div>

                  {/* Bénéfices */}
                  <div className="mt-6 p-4 bg-white rounded-xl shadow-md space-y-2">
                    {t.problem.after.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Badge animé */}
                <motion.div 
                  className="absolute -bottom-4 -right-4 px-6 py-3 bg-yellow-400 rounded-2xl shadow-xl"
                  animate={{ rotate: [3, 6, 3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <p className="text-slate-900 font-bold text-sm">{isEN ? "Guaranteed results" : "Résultats garantis"}</p>
                </motion.div>
              </motion.div>
            </div>

            {/* CTA intermédiaire */}
            <motion.div 
              className="mt-16 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <a 
                href="#mandates" 
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-bold rounded-2xl shadow-2xl hover:shadow-indigo-500/50 transition-all group"
              >
                {isEN ? "I want to unblock my pilot" : "Je veux débloquer mon pilote"}
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </a>
              <p className="mt-4 text-slate-500 text-sm">
                {isEN ? "Diagnosis in 72h • No commitment" : "Diagnostic en 72h • Sans engagement"}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3 MODES AMÉLIORÉE --- */}
      <section id="mandates" className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background effet */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 via-purple-900/10 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.1),transparent_70%)]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="px-4 py-2 bg-indigo-600 text-white text-sm font-bold rounded-full">
              {isEN ? "OPERATIONAL STRATEGY & DELIVERY" : "STRATÉGIE OPÉRATIONNELLE & DELIVERY"}
            </span>
            <h2 className="text-5xl font-bold text-white mt-6 mb-4">
              {t.mandates.title}
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              {t.mandates.subtitle}
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {t.mandates.items.map((mandate, idx) => (
              <motion.div
                key={idx}
                className={`group relative p-8 bg-gradient-to-br ${mandate.gradient} backdrop-blur-sm rounded-3xl border-2 ${mandate.borderColor} transition-all ${mandate.highlighted ? 'transform hover:scale-105' : 'hover:translate-y-[-8px]'} ${idx === 0 || idx === 2 ? 'bg-slate-800/50' : 'bg-slate-800/80'}`}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                {/* Icône 3D */}
                <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${mandate.iconBg} rounded-2xl flex items-center justify-center shadow-2xl text-white`}>
                  {mandate.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{mandate.title}</h3>
                <p className={`font-semibold mb-4 text-sm ${idx === 0 ? 'text-yellow-300' : idx === 1 ? 'text-indigo-300' : 'text-green-300'}`}>
                  {mandate.tagline}
                </p>

                <p className="text-slate-200 mb-6 leading-relaxed">
                  {mandate.desc}
                </p>

                <div className="space-y-2 text-sm text-slate-300 border-t border-white/20 pt-4">
                  <p>• <span className="text-white font-semibold">{isEN ? "Duration:" : "Durée:"}</span> {mandate.duration}</p>
                  <p>• <span className="text-white font-semibold">{isEN ? "Deliverables:" : "Livrables:"}</span> {mandate.deliverables}</p>
                </div>

                {/* Badge */}
                {mandate.badge && (
                  <div className={`absolute -top-3 -right-3 px-4 py-2 ${idx === 1 ? 'bg-gradient-to-r from-indigo-500 to-purple-600 animate-pulse' : idx === 0 ? 'bg-yellow-500' : 'bg-green-500'} ${idx === 1 ? 'text-white' : 'text-slate-900'} text-xs font-bold rounded-full shadow-xl ${idx === 0 ? 'rotate-12' : ''}`}>
                    {mandate.badge}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA final */}
          <motion.div 
            className="mt-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-slate-400 mb-6">
              {isEN ? "Not sure of your need? Start with the free diagnostic." : "Pas sûr de votre besoin ? Commencez par le diagnostic gratuit."}
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-10 py-5 bg-white text-slate-900 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-white/20 transition-all"
            >
              {isEN ? "Let's Discuss Your Situation" : "Discutons de Votre Situation"}
            </a>
          </motion.div>
        </div>
      </section>

      {/* --- USP SECTION (TECH FLUENCY) --- */}
      <section id="usp" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="relative bg-slate-900 rounded-3xl p-8 md:p-16 text-white overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -ml-16 -mb-16"></div>

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

                {/* Tech Stack visualisation */}
                <div className="space-y-3">
                  <p className="text-indigo-400 text-sm font-bold uppercase tracking-wide">
                    {isEN ? "Tech Ecosystem" : "Écosystème Tech"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React/JS', 'Make.com', 'N8N', 'APIs', 'Office 365', 'Google Cloud', 'AppScript'].map((tech) => (
                      <div key={tech} className="px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-xs font-semibold hover:bg-white/20 transition-colors">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote card */}
              <motion.div 
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 relative"
                whileHover={{ scale: 1.02 }}
              >
                <Quote className="absolute top-4 left-4 h-12 w-12 text-indigo-400/30" />
                <p className="text-xl text-indigo-100 font-light italic pl-8 pt-6">
                  "{t.usp.quote}"
                </p>
                <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold">
                    AB
                  </div>
                  <div>
                    <p className="font-semibold">Antoine Billotte</p>
                    <p className="text-sm text-slate-400">AI Adoption Architect</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PARTNER SECTION --- */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-white mb-6">
              <Users className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.partner.title}</h2>
            <p className="text-slate-600 mb-10 max-w-2xl mx-auto text-lg">
              {t.partner.text}
            </p>

            {/* Partner Card */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border-2 border-slate-200 inline-flex items-center gap-6 text-left max-w-xl mx-auto hover:shadow-2xl hover:border-indigo-300 transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-20 w-20 flex-shrink-0 rounded-full bg-gradient-to-br from-purple-500 via-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                <Users className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{t.partner.name}</h3>
                <p className="text-purple-600 text-sm font-bold uppercase mb-2 tracking-wide">{t.partner.role}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{t.partner.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER / CONTACT --- */}
      <footer id="contact" className="bg-white border-t border-slate-200 pt-20 pb-10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 text-white mb-6">
              <Building2 className="h-8 w-8" />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t.contact.title}</h2>
            <p className="text-xl text-slate-600 mb-10">
              {t.contact.text}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a 
                href="mailto:contact@tomorrow-solutions.com" 
                className="group px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Mail className="h-5 w-5" />
                {t.contact.cta}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://www.linkedin.com/in/antoinebillotte/" 
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-white border-2 border-slate-300 text-slate-700 font-bold rounded-xl hover:border-slate-400 hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                <Linkedin className="h-5 w-5" />
                {t.contact.linkedin}
              </a>
            </div>
            
            <div className="text-slate-400 text-sm border-t border-slate-100 pt-8">
              <p>© {new Date().getFullYear()} Antoine Billotte / Tomorrow Solutions. AI Adoption Architect.</p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default AdoptionArchitectPage;
