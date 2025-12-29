'use client'

import React from 'react';
import { motion } from 'framer-motion';

type MandateItem = {
  title: string;
  tagline: string;
  desc: string;
  icon: React.ReactNode;
  duration: string;
  deliverables: string;
  badge: string;
  gradient: string;
  borderColor: string;
  iconBg: string;
  highlighted?: boolean;
};

type MandatesContent = {
  title: string;
  subtitle: string;
  items: MandateItem[];
};

type MandatesSectionProps = {
  content: MandatesContent;
  isEN: boolean;
};

export default function MandatesSection({ content, isEN }: MandatesSectionProps) {
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
            {content.title}
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {content.items.map((mandate, idx) => (
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
  );
}
