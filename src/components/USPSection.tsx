'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Quote } from 'lucide-react';

type USPContent = {
  title: string;
  subtitle: string;
  text: string;
  quote: string;
};

type USPSectionProps = {
  content: USPContent;
  isEN: boolean;
};

export default function USPSection({ content, isEN }: USPSectionProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
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
                <span className="text-indigo-400 font-bold uppercase tracking-widest text-sm">{content.subtitle}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.title}</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                {content.text}
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
                &ldquo;{content.quote}&rdquo;
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
  );
}
