'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MapPin,
  Users,
  BedDouble,
  Waves,
  Wind,
  Car,
  Star,
  CheckCircle,
  ArrowRight,
  Info,
  User,
  Wifi,
  Tv,
  UtensilsCrossed
} from 'lucide-react';

// --- CONFIGURATION ---
const AIRBNB_URL = "https://www.airbnb.fr/h/villa-exception-montpellier";
const ABRITEL_URL = ""; // Ajouter le lien Abritel si disponible

const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function VillaLandingPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-200 selection:text-emerald-900">

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/profile" className="flex items-center gap-2 text-slate-900 hover:text-emerald-600 transition-colors">
            <User className="w-5 h-5" />
            <span className="font-bold">À propos</span>
          </Link>
          <Link
            href={AIRBNB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg"
            aria-label="Réserver la villa sur Airbnb"
          >
            Réserver
          </Link>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden mt-16">
        {/* Image Hero avec support WebP */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-slate-800 relative">
            <picture>
              {/* WebP optimisé pour performance */}
              <source srcSet="/images/villa/hero-pool.webp" type="image/webp" />
              {/* Fallback JPG */}
              <Image
                src="/images/villa/hero-pool.jpg"
                alt="Villa avec piscine privée à Montpellier centre, jardin tropical luxuriant"
                fill
                className="object-cover opacity-60"
                priority
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-slate-50/90" />
          </div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={FADE_UP}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100/10 backdrop-blur-md border border-emerald-200/20 text-emerald-300 text-sm font-medium tracking-wider mb-4">
              MONTPELLIER HYPER-CENTRE
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              L'Oasis Urbaine <br/> d'Exception
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto font-light">
              265m² de luxe et de sérénité. Piscine privée, 6 chambres, garage.
              Le calme absolu à 7 min de la Comédie.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={AIRBNB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                aria-label="Voir les disponibilités de la villa sur Airbnb"
              >
                Voir les disponibilités
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <a
                href="#visite"
                className="px-8 py-4 rounded-full font-semibold text-white border border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm"
                aria-label="Découvrir la visite virtuelle de la villa"
              >
                Visiter la villa
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* --- STATS / FEATURES (Sticky) --- */}
      <section className="py-12 border-b border-slate-200 bg-white sticky top-16 z-20 shadow-sm backdrop-blur-md bg-white/95" role="region" aria-label="Caractéristiques principales">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={STAGGER_CONTAINER}
          >
            <FeatureIcon icon={Users} label="12 Voyageurs" />
            <FeatureIcon icon={BedDouble} label="6 Chambres" />
            <FeatureIcon icon={Waves} label="Piscine Privée" />
            <FeatureIcon icon={Wind} label="Climatisation" />
            <FeatureIcon icon={Car} label="Garage Fermé" />
            <FeatureIcon icon={MapPin} label="Centre à pied" />
            <FeatureIcon icon={Wifi} label="Wifi Haut Débit" />
            <FeatureIcon icon={Tv} label="Smart TV" />
          </motion.div>
        </div>
      </section>

      {/* --- PRESENTATION --- */}
      <section className="py-20 md:py-32 container mx-auto px-4" id="visite">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              Un paradis caché <br/><span className="text-emerald-600">quartier Antigone</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Imaginez un jardin tropical luxuriant, entièrement clos, à seulement quelques minutes de l'effervescence de la ville.
              Cette villa d'architecte de 265m² est conçue pour les grandes familles et les groupes d'amis.
            </p>
            <ul className="space-y-3" role="list">
              <ListItem text="Pièce de vie de +100m² baignée de lumière" />
              <ListItem text="Suite parentale de 40m² avec balnéo" />
              <ListItem text="Cuisine d'été & terrasse en bois exotique" />
              <ListItem text="3 min du tram, 5 min de la Gare St Roch" />
              <ListItem text="Jardin tropical avec palmiers et bananiers" />
              <ListItem text="Barbecue Weber & plancha pour vos soirées" />
            </ul>

            <div className="pt-4 flex items-center gap-4">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-white flex items-center justify-center text-white font-bold shadow-lg" aria-hidden="true">A</div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-white font-bold shadow-lg" aria-hidden="true">A</div>
              </div>
              <div className="text-sm">
                <p className="font-bold text-slate-900">Hôtes : Agathe & Antoine</p>
                <div className="flex items-center gap-1 text-emerald-600">
                  <Star className="w-4 h-4 fill-current" aria-hidden="true" />
                  <span className="font-semibold">Superhôtes Airbnb</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Grid Photos avec lazy loading */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={STAGGER_CONTAINER}
          >
            <div className="space-y-4 mt-8">
              <PhotoCard src="/images/villa/salon" alt="Salon spacieux avec canapé et décoration moderne" aspectRatio="aspect-[3/4]" />
              <PhotoCard src="/images/villa/cuisine" alt="Cuisine équipée avec îlot central" aspectRatio="aspect-square" />
            </div>
            <div className="space-y-4">
              <PhotoCard src="/images/villa/repas" alt="Espace repas avec grande table" aspectRatio="aspect-square" />
              <PhotoCard src="/images/villa/patio" alt="Patio extérieur avec ambiance soirée" aspectRatio="aspect-[3/4]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CHAMBRES & SPA --- */}
      <section className="py-20 bg-slate-100" aria-labelledby="chambres-title">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="chambres-title" className="text-3xl md:text-4xl font-bold mb-4">Nuits douces & Détente</h2>
            <p className="text-slate-600">6 chambres climatisées et 4 salles de bain pour le confort de tous.</p>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={STAGGER_CONTAINER}
          >
            <RoomCard
              image="/images/villa/chambre1"
              title="Suite Parentale"
              desc="Lit King Size, Terrasse privée, Dressing"
              badge="40m²"
            />
            <RoomCard
              image="/images/villa/sdb-balneo"
              title="Espace Bien-être"
              desc="Baignoire Balnéo, Douche italienne"
              badge="Spa"
            />
            <RoomCard
              image="/images/villa/chambre5"
              title="Espace Enfants"
              desc="4 couchages (lits superposés), idéal pour les cousins"
              badge="4 lits"
            />
          </motion.div>

          <div className="mt-12 text-center">
            <Link
              href={AIRBNB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 font-semibold hover:underline inline-flex items-center gap-1"
              aria-label="Voir toutes les photos des 6 chambres sur Airbnb"
            >
              Voir toutes les photos des 6 chambres
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- AVIS & REASSURANCE --- */}
      <section className="py-20 container mx-auto px-4" aria-labelledby="avis-title">
        <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 rounded-3xl p-8 md:p-16 text-white text-center relative overflow-hidden shadow-2xl">
          {/* Décoration background */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" aria-hidden="true"></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="flex justify-center gap-1 mb-4" role="img" aria-label="Note 5 étoiles sur 5">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" aria-hidden="true" />)}
            </div>
            <h3 id="avis-title" className="text-3xl font-bold">"Exceptionnel 10/10"</h3>
            <blockquote className="text-emerald-100 text-lg italic">
              "Une perle rare : l'idéal pour des grillades en plein air et en toute décontraction. Maison magnifique, parfaitement équipée. Les hôtes sont aux petits soins."
            </blockquote>
            <cite className="text-sm text-emerald-300 not-italic">— Famille Martin, Août 2024</cite>

            <div className="pt-8 border-t border-emerald-700/50 grid md:grid-cols-3 gap-6 text-sm text-emerald-100">
              <div className="flex flex-col items-center gap-2">
                <CheckCircle className="w-6 h-6 text-emerald-400" aria-hidden="true" />
                <span className="font-semibold">Ménage pro inclus</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle className="w-6 h-6 text-emerald-400" aria-hidden="true" />
                <span className="font-semibold">Linge hôtelier fourni</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Info className="w-6 h-6 text-emerald-400" aria-hidden="true" />
                <span className="font-semibold">Animaux sur place (chats)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- LOCALISATION --- */}
      <section className="py-20 bg-white" aria-labelledby="localisation-title">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 id="localisation-title" className="text-3xl md:text-4xl font-bold mb-6">
              <MapPin className="w-8 h-8 inline-block text-emerald-600 mr-2" aria-hidden="true" />
              Emplacement Idéal
            </h2>
            <p className="text-lg text-slate-600">
              Au cœur de Montpellier, entre Antigone et Port Marianne.
              Accès rapide aux plages, à la gare et au centre historique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-4">
              <h3 className="font-bold text-lg mb-4">À proximité</h3>
              <LocationItem icon={MapPin} label="Place de la Comédie" distance="7 min à pied" />
              <LocationItem icon={MapPin} label="Gare Saint-Roch" distance="5 min en voiture" />
              <LocationItem icon={Waves} label="Plages du Grau-du-Roi" distance="25 min" />
              <LocationItem icon={UtensilsCrossed} label="Restaurants & Bars" distance="3 min" />
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg mb-4">Transports</h3>
              <LocationItem icon={MapPin} label="Arrêt Tram ligne 1" distance="3 min à pied" />
              <LocationItem icon={Car} label="Parking privé fermé" distance="Inclus" />
              <LocationItem icon={MapPin} label="Aéroport Montpellier" distance="15 min" />
              <LocationItem icon={MapPin} label="Autoroute A9" distance="10 min" />
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-20 text-center bg-gradient-to-b from-slate-50 to-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Prêt pour votre séjour à Montpellier ?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Réservez dès maintenant votre villa d'exception. Disponible toute l'année pour vos vacances, événements familiaux ou séjours professionnels.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={AIRBNB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-1"
              aria-label="Réserver la villa sur Airbnb"
            >
              Réserver sur Airbnb
              <ArrowRight className="w-6 h-6" aria-hidden="true" />
            </Link>

            {ABRITEL_URL && (
              <Link
                href={ABRITEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-10 py-5 rounded-full text-xl font-bold border-2 border-slate-900 hover:bg-slate-50 transition-all"
                aria-label="Réserver la villa sur Abritel"
              >
                Réserver sur Abritel
                <ArrowRight className="w-6 h-6" aria-hidden="true" />
              </Link>
            )}
          </div>

          <p className="text-sm text-slate-500">Réservation sécurisée • Annulation flexible • Paiement en ligne</p>
        </motion.div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-white py-12" role="contentinfo">
        <div className="container mx-auto px-4 text-center space-y-4">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Villa Oasis Montpellier - Agathe & Antoine
          </p>
          <div className="flex justify-center gap-6 text-sm text-slate-400">
            <Link href="/profile" className="hover:text-white transition-colors">
              À propos d'Antoine
            </Link>
            <span>•</span>
            <Link href={AIRBNB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Airbnb
            </Link>
          </div>
        </div>
      </footer>

    </main>
  );
}

// --- SUB-COMPONENTS ---

function FeatureIcon({ icon: Icon, label }: { icon: any, label: string }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors cursor-default"
      variants={FADE_UP}
      whileHover={{ scale: 1.05 }}
    >
      <div className="p-3 bg-slate-100 rounded-2xl text-slate-900 shadow-sm">
        <Icon className="w-6 h-6" aria-hidden="true" />
      </div>
      <span className="text-sm font-medium">{label}</span>
    </motion.div>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
      <span className="text-slate-700">{text}</span>
    </li>
  );
}

function PhotoCard({ src, alt, aspectRatio }: { src: string, alt: string, aspectRatio: string }) {
  return (
    <motion.div
      className={`${aspectRatio} rounded-2xl overflow-hidden relative shadow-lg group`}
      variants={FADE_UP}
    >
      <picture>
        <source srcSet={`${src}.webp`} type="image/webp" />
        <Image
          src={`${src}.jpg`}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </picture>
    </motion.div>
  );
}

function RoomCard({ image, title, desc, badge }: { image: string, title: string, desc: string, badge?: string }) {
  return (
    <motion.div
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
      variants={FADE_UP}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-64 overflow-hidden">
        {badge && (
          <div className="absolute top-4 right-4 z-10 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            {badge}
          </div>
        )}
        <picture>
          <source srcSet={`${image}.webp`} type="image/webp" />
          <Image
            src={`${image}.jpg`}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        </picture>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-sm text-slate-500">{desc}</p>
      </div>
    </motion.div>
  );
}

function LocationItem({ icon: Icon, label, distance }: { icon: any, label: string, distance: string }) {
  return (
    <div className="flex items-center gap-3 text-slate-700">
      <Icon className="w-5 h-5 text-emerald-600 shrink-0" aria-hidden="true" />
      <span className="flex-1">{label}</span>
      <span className="text-sm font-semibold text-slate-900">{distance}</span>
    </div>
  );
}
