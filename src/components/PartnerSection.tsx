'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

type PartnerContent = {
  title: string;
  text: string;
  name: string;
  role: string;
  desc: string;
};

type PartnerSectionProps = {
  content: PartnerContent;
};

export default function PartnerSection({ content }: PartnerSectionProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{content.title}</h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto text-lg">
            {content.text}
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
              <h3 className="text-xl font-bold text-slate-900">{content.name}</h3>
              <p className="text-purple-600 text-sm font-bold uppercase mb-2 tracking-wide">{content.role}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{content.desc}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
