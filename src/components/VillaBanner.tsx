'use client'

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowRight, MapPin, Users, Waves } from 'lucide-react';

type VillaBannerProps = {
  isEN?: boolean;
};

export default function VillaBanner({ isEN = false }: VillaBannerProps) {
  const content = {
    badge: isEN ? "ALSO AVAILABLE" : "ÉGALEMENT DISPONIBLE",
    title: isEN ? "Need a place to stay in Montpellier?" : "Besoin d'un hébergement à Montpellier ?",
    subtitle: isEN
      ? "Discover our luxury villa with private pool"
      : "Découvrez notre villa de luxe avec piscine privée",
    features: {
      size: "265m²",
      guests: isEN ? "12 guests" : "12 voyageurs",
      location: isEN ? "City center" : "Centre-ville"
    },
    cta: isEN ? "Discover the villa" : "Découvrir la villa"
  };

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/villa-montpellier"
            className="block group"
            aria-label={isEN ? "Discover our luxury villa in Montpellier" : "Découvrir notre villa de luxe à Montpellier"}
          >
            <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-emerald-100 group-hover:border-emerald-300">

              {/* Gradient background animé */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

              <div className="relative grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">

                {/* Colonne gauche : Texte */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                    <Home className="w-4 h-4" aria-hidden="true" />
                    <span>{content.badge}</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {content.title}
                  </h2>

                  <p className="text-lg text-slate-600">
                    {content.subtitle}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <FeaturePill icon={Home} text={content.features.size} />
                    <FeaturePill icon={Users} text={content.features.guests} />
                    <FeaturePill icon={Waves} text="Piscine" />
                    <FeaturePill icon={MapPin} text={content.features.location} />
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-emerald-600 font-semibold pt-4 group-hover:gap-4 transition-all">
                    <span>{content.cta}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </div>

                {/* Colonne droite : Image placeholder avec icône */}
                <div className="relative h-64 md:h-80 rounded-2xl bg-gradient-to-br from-emerald-100 via-blue-50 to-emerald-50 flex items-center justify-center overflow-hidden">
                  {/* Placeholder - Sera remplacé par une vraie photo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg" aria-hidden="true">
                        <Home className="w-10 h-10 text-emerald-600" />
                      </div>
                      <p className="text-emerald-700 font-semibold">Villa Oasis</p>
                      <p className="text-sm text-emerald-600">Montpellier</p>
                    </div>
                  </div>

                  {/* Motif décoratif */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/30 rounded-full blur-3xl" aria-hidden="true" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl" aria-hidden="true" />
                </div>

              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturePill({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-full text-sm text-slate-700 border border-slate-200">
      <Icon className="w-4 h-4 text-emerald-600" aria-hidden="true" />
      <span className="font-medium">{text}</span>
    </div>
  );
}
