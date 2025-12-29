'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

type ProblemContent = {
  title: string;
  subtitle: string;
  before: {
    label: string;
    adoption: string;
    roi: string;
    issues: string[];
  };
  after: {
    label: string;
    adoption: string;
    roi: string;
    benefits: string[];
  };
};

type ProblemSectionProps = {
  content: ProblemContent;
  isEN: boolean;
};

export default function ProblemSection({ content, isEN }: ProblemSectionProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
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
              {content.title}
            </h2>
            <p className="text-xl text-slate-600">
              {content.subtitle.split('.')[0]}. <span className="text-red-600 font-semibold">{content.subtitle.split('.')[1]}.</span>
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
                {content.before.label}
              </div>

              <div className="mt-8 space-y-6">
                {/* Taux d'adoption */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 font-semibold">{isEN ? "Adoption rate" : "Taux d'adoption"}</span>
                    <span className="text-4xl font-bold text-red-600">{content.before.adoption}</span>
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
                  <span className="text-5xl font-bold text-red-600">{content.before.roi}</span>
                </div>

                {/* Problèmes */}
                <div className="mt-6 p-4 bg-white/70 rounded-xl space-y-2">
                  {content.before.issues.map((issue, idx) => (
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
                {content.after.label}
              </div>

              <div className="mt-8 space-y-6">
                {/* Taux d'adoption */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 font-semibold">{isEN ? "Adoption rate" : "Taux d'adoption"}</span>
                    <span className="text-4xl font-bold text-green-600">{content.after.adoption}</span>
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
                    {content.after.roi}
                  </span>
                </div>

                {/* Bénéfices */}
                <div className="mt-6 p-4 bg-white rounded-xl shadow-md space-y-2">
                  {content.after.benefits.map((benefit, idx) => (
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
  );
}
