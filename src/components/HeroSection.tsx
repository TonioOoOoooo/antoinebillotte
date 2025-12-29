/* eslint-disable react-hooks/purity */
'use client'

import React, { useMemo } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useAnimationConfig } from '@/hooks/useMotionPreference';

type HeroContent = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  trust: string;
};

type HeroSectionProps = {
  content: HeroContent;
  isEN: boolean;
};

export default function HeroSection({ content, isEN }: HeroSectionProps) {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Détection mobile et préférence d'animation (accessibilité)
  const { shouldAnimate, particleCount } = useAnimationConfig();

  // Générer les positions des particules une seule fois
  // Nombre adapté : 30 sur desktop, 10 sur mobile, 0 si prefers-reduced-motion
  const particles = useMemo(() =>
    Array.from({ length: particleCount }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    })),
    [particleCount]
  );

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

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating particles - Adapté selon appareil et préférences accessibilité */}
      {shouldAnimate && particles.length > 0 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </div>
      )}

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
                <span className="text-sm text-white font-semibold">{content.badge}</span>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                <span className="block">Antoine Billotte</span>
                <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {content.title}
                </span>
                <span className="block text-3xl lg:text-4xl mt-4 text-white/90">
                  {content.subtitle}
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl text-white/70 leading-relaxed"
              variants={fadeInUp}
            >
              {content.description}
            </motion.p>

            {/* CTA avec urgence */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
            >
              <a
                href="#diagnostic"
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-cyan-500/50 transition-all flex items-center justify-center"
                aria-label={isEN ? "Request free diagnostic in 72 hours" : "Demander un diagnostic gratuit en 72 heures"}
              >
                <span>{content.ctaPrimary}</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
              <a
                href="#results"
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center"
                aria-label={isEN ? "See transformation results" : "Voir les résultats de transformation"}
              >
                <span>{content.ctaSecondary}</span>
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
                <p className="font-semibold text-white text-sm">{content.trust}</p>
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
                <picture className="w-full h-full">
                  {/* WebP optimisé (300-400KB au lieu de 2.5MB) */}
                  <source srcSet="/images/optimized/hero-transformation.webp" type="image/webp" />
                  {/* Fallback PNG pour anciens navigateurs */}
                  <Image
                    src="/images/hero-transformation.png"
                    alt="Tableau de bord comparatif : transformation IA avant et après accompagnement, montrant +240% ROI"
                    fill
                    className="object-cover"
                    priority
                  />
                </picture>
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
  );
}
