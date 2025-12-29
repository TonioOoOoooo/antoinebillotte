'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Mail, Linkedin, ArrowRight } from 'lucide-react';

type ContactContent = {
  title: string;
  text: string;
  cta: string;
  linkedin: string;
};

type ContactSectionProps = {
  content: ContactContent;
};

export default function ContactSection({ content }: ContactSectionProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
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
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{content.title}</h2>
          <p className="text-xl text-slate-600 mb-10">
            {content.text}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="mailto:contact@tomorrow-solutions.com"
              className="group px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Mail className="h-5 w-5" />
              {content.cta}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/antoinebillotte/"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-white border-2 border-slate-300 text-slate-700 font-bold rounded-xl hover:border-slate-400 hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              <Linkedin className="h-5 w-5" />
              {content.linkedin}
            </a>
          </div>

          <div className="text-slate-400 text-sm border-t border-slate-100 pt-8">
            <p>© {new Date().getFullYear()} Antoine Billotte / Tomorrow Solutions. AI Adoption Architect.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
