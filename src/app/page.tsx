
'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
  UtensilsCrossed,
  Share2,
  Mail
} from 'lucide-react';

// --- CONFIGURATION ---
const AIRBNB_URL = "https://www.airbnb.fr/h/villa-exception-montpellier";
const ABRITEL_URL = "https://www.abritel.fr/location-vacances/p2582877?dateless=true";
const LEBONCOIN_URL = "https://www.leboncoin.fr/ad/locations_saisonnieres/3018502383";

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
  const [showAllRooms, setShowAllRooms] = useState(false);
  const [showAllGallery, setShowAllGallery] = useState(false);
  const [blockedDates, setBlockedDates] = useState<Set<string>>(new Set());
  const [calendarLoading, setCalendarLoading] = useState(true);
  const [calendarError, setCalendarError] = useState(false);

  useEffect(() => {
    fetch('/api/calendar')
      .then((res) => res.json())
      .then((data) => {
        if (data.blocked) {
          const dates = new Set<string>();
          for (const range of data.blocked) {
            const start = new Date(range.start);
            const end = new Date(range.end);
            for (let d = new Date(start); d < end; d.setDate(d.getDate() + 1)) {
              dates.add(d.toISOString().slice(0, 10));
            }
          }
          setBlockedDates(dates);
        }
        setCalendarLoading(false);
      })
      .catch(() => {
        setCalendarError(true);
        setCalendarLoading(false);
      });
  }, []);
  const heroVideos = useMemo(
    () => [
      '/images/villa/videos/PISCINE%20AV%20HAUT%20GOOD%20%28Vertical%29.mp4',
      '/images/villa/videos/PISCINE%20AR%20GOOD.mp4',
      '/images/villa/videos/PATIO.mp4',
      '/images/villa/videos/CUISINE.mp4',
      '/images/villa/videos/SAM.mp4',
      '/images/villa/videos/CHAMBRE.mp4',
      '/images/villa/videos/CHAMBRE%20AMBRE.mp4',
      '/images/villa/videos/PISCINE%20AR%20BAD.mp4',
    ],
    []
  );

  const shareUrl = useMemo(() => {
    if (typeof window === 'undefined') return 'https://maisonmontpellier.fr/';
    return window.location.href;
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 selection:bg-emerald-200 selection:text-emerald-900">

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_1px_0_0_rgba(15,23,42,0.06)]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-slate-900">
            <Waves className="w-5 h-5 text-emerald-600" />
            <span className="font-semibold tracking-tight text-emerald-700">maisonmontpellier.fr</span>
          </div>
          <Link
            href={LEBONCOIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-6 py-2.5 rounded-full font-semibold hover:from-emerald-700 hover:to-teal-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            aria-label="Réserver la villa sur Leboncoin"
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
            <HeroVideoBackground sources={heroVideos} />
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/55 via-sky-900/25 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08)_0%,transparent_35%,rgba(0,0,0,0.65)_100%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-slate-50/60" />
          </div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={FADE_UP}
          >
            <div className="inline-block rounded-3xl bg-white/20 border border-white/15 shadow-2xl px-6 py-8 md:px-10 md:py-10">
              <span className="inline-block py-1 px-3 rounded-full bg-emerald-100/10 backdrop-blur-md border border-emerald-200/20 text-emerald-200 text-sm font-medium tracking-wider mb-4">
                MONTPELLIER HYPER-CENTRE
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Villa de Luxe Montpellier <br/> Piscine Privée & 6 Chambres
              </h1>
              <p className="text-lg md:text-xl text-slate-100 mb-8 max-w-2xl mx-auto font-light">
                Vivez une expérience unique au cœur de Montpellier : demeure de 265m², oasis de calme avec jardin et piscine, à 7 min à pied de la place de la Comédie.
                Idéal pour 12 voyageurs. (Fêtes non autorisées)
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2 mb-8" aria-label="Tarif à partir de 595 euros la nuit">
                <span className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-4 py-1.5 text-sm font-semibold text-white">
                  À partir de 595 € / nuit
                </span>
                <span className="text-xs text-slate-100/80">Tarifs selon dates • voir calendrier ci-dessous</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#disponibilites"
                  className="group bg-gradient-to-r from-white via-white to-emerald-50 text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black/30"
                  aria-label="Voir les disponibilités"
                >
                  Voir les disponibilités
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
                <a
                  href="#visite"
                  className="px-8 py-4 rounded-full font-semibold text-white border border-white/25 bg-white/5 hover:bg-white/10 transition-all backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black/30"
                  aria-label="Découvrir la visite virtuelle de la villa"
                >
                  Visiter la villa
                </a>
              </div>
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

      {/* --- STATS / FEATURES --- */}
      <section className="py-8 md:py-12 border-b border-slate-200/60 bg-white/70 md:sticky md:top-16 z-20 shadow-sm backdrop-blur-xl" role="region" aria-label="Caractéristiques principales">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6 text-center"
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
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.05]">
              Location Villa Luxe Montpellier <br/><span className="text-emerald-600">Quartier Antigone</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              <strong>Villa de vacances haut de gamme à Montpellier</strong> : découvrez cette oasis citadine de 265m² avec jardin et piscine privée,
              nichée dans un jardin tropical luxuriant entièrement clos. Idéale pour location saisonnière en famille ou entre amis (jusqu'à 12 personnes).
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mt-3">
              Cette <strong>location de vacances premium</strong> combine le confort moderne d'une villa contemporaine avec le charme d'un véritable
              oasis urbain, à quelques minutes seulement de la Place de la Comédie et du quartier historique de Montpellier.
            </p>
            <ul className="space-y-3" role="list">
              <ListItem text="Pièce de vie de presque 100m² baignée de lumière" />
              <ListItem text="Suite parentale de presque 40m² avec douche et baignoire jacuzzi" />
              <ListItem text="Cuisine d'été équipée" />
              <ListItem text="Tout à pied : tram (3 min), gare (5 min), Comédie (7 min)" />
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
              <PhotoCard src="/images/villa/Autres/Terrace_Piscine.jpeg" alt="Terrasse et piscine privée en hyper-centre" aspectRatio="aspect-[3/4]" />
            </div>
            <div className="space-y-4">
              <PhotoCard src="/images/villa/repas" alt="Espace repas avec grande table" aspectRatio="aspect-square" />
              <PhotoCard src="/images/villa/patio" alt="Patio extérieur avec ambiance soirée" aspectRatio="aspect-[3/4]" />
              <PhotoCard src="/images/villa/SDB/SDB_Parents.jpeg" alt="Salle de bain parentale avec baignoire jacuzzi" aspectRatio="aspect-square" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CHAMBRES & SPA --- */}
      <section className="py-20 bg-gradient-to-b from-slate-100 via-slate-50 to-white" aria-labelledby="chambres-title">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="chambres-title" className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">6 Chambres Spacieuses & Espace Spa Privatif</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Hébergement haut de gamme avec 6 chambres climatisées, literie soignée, 4 salles de bain modernes dont une avec baignoire balnéo.
              Capacité totale : 12 voyageurs pour votre location de villa à Montpellier.
            </p>
          </div>

          {(() => {
            const rooms = [
              {
                image: '/images/villa/Chambres/Chambre_Parentale.jpeg',
                title: 'Suite Parentale',
                desc: "Lit King Size (200×200), dressing, terrasse privée, SDB avec douche & baignoire jacuzzi",
                badge: 'King',
              },
              {
                image: '/images/villa/Chambres/Chambre_Leo.jpeg',
                title: 'Chambre 2',
                desc: '2 lits simples (90×200), modulables en grand lit',
                badge: '2×90',
              },
              {
                image: '/images/villa/Chambres/Chambre_Ambre.jpeg',
                title: 'Chambre 3',
                desc: 'Lit Queen Size (160×200)',
                badge: 'Queen',
              },
              {
                image: '/images/villa/Chambres/Chambre_Theo.jpeg',
                title: 'Chambre 4',
                desc: 'Lit double (140×200)',
                badge: '140',
              },
              {
                image: '/images/villa/Chambres/Chambre_Theodore.jpeg',
                title: 'Chambre 5',
                desc: 'Lit double (140×200)',
                badge: '140',
              },
              {
                image: '/images/villa/Chambres/Chambre_RDC.jpeg',
                title: 'Chambre 6 (RDC)',
                desc: 'Lit 160×200 (non climatisée)',
                badge: 'RDC',
              },
            ];

            const visibleRooms = showAllRooms ? rooms : rooms.slice(0, 3);

            return (
              <>
                <motion.div
                  id="rooms-grid"
                  className="grid md:grid-cols-3 gap-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={STAGGER_CONTAINER}
                >
                  {visibleRooms.map((room) => (
                    <RoomCard
                      key={room.title}
                      image={room.image}
                      title={room.title}
                      desc={room.desc}
                      badge={room.badge}
                    />
                  ))}
                </motion.div>

                <div className="mt-10 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setShowAllRooms((v) => !v)}
                    aria-expanded={showAllRooms}
                    aria-controls="rooms-grid"
                    className="px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 hover:border-slate-300 hover:bg-white transition-all text-sm font-semibold text-slate-900"
                  >
                    {showAllRooms ? 'Voir moins' : 'Voir les 6 chambres'}
                  </button>
                </div>
              </>
            );
          })()}
        </div>
      </section>

      <section className="py-20 bg-white" aria-labelledby="galerie-title">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="galerie-title" className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Galerie</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Quelques photos pour vous projeter : jardin, piscine, cuisine d'été et salles de bain.
            </p>
          </div>

          {(() => {
            const items = [
              {
                src: '/images/villa/Autres/Vue_Maison_Haut.jpeg',
                alt: "Vue de la maison depuis l'étage",
                aspectRatio: 'aspect-[3/4]',
              },
              {
                src: '/images/villa/Autres/Terrace_Piscine.jpeg',
                alt: 'Terrasse avec piscine privée',
                aspectRatio: 'aspect-square',
              },
              {
                src: '/images/villa/Autres/Jardin_derriere.jpeg',
                alt: 'Jardin privé luxuriant',
                aspectRatio: 'aspect-square',
              },
              {
                src: '/images/villa/Autres/hero-pool.webp',
                alt: 'Piscine privée et jardin luxuriant',
                aspectRatio: 'aspect-[3/4]',
              },
              {
                src: '/images/villa/Autres/hero-pool3.webp',
                alt: 'Piscine privée vue depuis la terrasse',
                aspectRatio: 'aspect-square',
              },
              {
                src: '/images/villa/Autres/hero-pool%202.webp',
                alt: 'Piscine privée et espace détente',
                aspectRatio: 'aspect-square',
              },
              {
                src: "/images/villa/Autres/Cuisine_ete.jpeg",
                alt: "Cuisine d'été équipée",
                aspectRatio: 'aspect-[3/4]',
              },
              {
                src: '/images/villa/Autres/cuisine.webp',
                alt: 'Cuisine moderne entièrement équipée',
                aspectRatio: 'aspect-square',
              },
              {
                src: '/images/villa/Autres/Cuisine_ete_2.jpeg',
                alt: "Cuisine d'été et coin repas",
                aspectRatio: 'aspect-square',
              },
              {
                src: '/images/villa/Autres/patio.webp',
                alt: 'Patio extérieur',
                aspectRatio: 'aspect-[3/4]',
              },
              {
                src: '/images/villa/Autres/repas.webp',
                alt: 'Espace repas',
                aspectRatio: 'aspect-square',
              },
              {
                src: '/images/villa/Autres/salon.webp',
                alt: 'Salon',
                aspectRatio: 'aspect-square',
              },
              {
                src: '/images/villa/SDB/SDB_Parents.jpeg',
                alt: 'Salle de bain parentale avec baignoire jacuzzi',
                aspectRatio: 'aspect-square',
              },
              {
                src: '/images/villa/SDB/SDB_RDC.jpeg',
                alt: 'Salle de douche au rez-de-chaussée',
                aspectRatio: 'aspect-[3/4]',
              },
              {
                src: '/images/villa/SDB/SDB_Enfants1.jpeg',
                alt: 'Salle de bain enfants',
                aspectRatio: 'aspect-square',
              },
              {
                src: '/images/villa/Autres/Jardin_derriere_2.jpeg',
                alt: 'Jardin et terrasse côté piscine',
                aspectRatio: 'aspect-[3/4]',
              },
              {
                src: '/images/villa/Autres/Jardin_derriere_3.jpeg',
                alt: 'Jardin et coin détente',
                aspectRatio: 'aspect-square',
              },
            ];

            const visibleItems = showAllGallery ? items : items.slice(0, 6);

            return (
              <>
                <motion.div
                  id="gallery-grid"
                  className="grid grid-cols-2 md:grid-cols-3 gap-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={STAGGER_CONTAINER}
                >
                  {visibleItems.map((item) => (
                    <PhotoCard
                      key={item.src}
                      src={item.src}
                      alt={item.alt}
                      aspectRatio={item.aspectRatio}
                    />
                  ))}
                </motion.div>

                <div className="mt-10 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setShowAllGallery((v) => !v)}
                    aria-expanded={showAllGallery}
                    aria-controls="gallery-grid"
                    className="px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 hover:border-slate-300 hover:bg-white transition-all text-sm font-semibold text-slate-900"
                  >
                    {showAllGallery ? 'Voir moins' : 'Voir plus de photos'}
                  </button>
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* --- AVIS & REASSURANCE --- */}
      <section className="py-20 container mx-auto px-4" aria-labelledby="avis-title">
        <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 rounded-3xl p-8 md:p-16 text-white text-center relative overflow-hidden shadow-2xl">
          {/* Décoration background */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" aria-hidden="true"></div>

          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <div className="flex justify-center gap-1 mb-4" role="img" aria-label="Note 5 étoiles sur 5">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" aria-hidden="true" />)}
            </div>
            <h3 id="avis-title" className="text-3xl font-bold">"Vacances parfaites !"</h3>
            <blockquote className="text-emerald-100 text-base md:text-lg leading-relaxed text-left max-w-3xl mx-auto">
              <p className="mb-4">
                "Superbe séjour ensoleillé, superbe villa, superbes prestations et superbe relation avec les propriétaires du bien : toujours aux petits soins, très attentionnés avec leurs convives et une organisation sans faille de leur part !"
              </p>
              <p className="mb-4">
                "Maison vraiment idéalement située en termes de situation géographique, car en plein centre de l'ensoleillée ville de Montpellier (toute proche du quartier Antigone et donc de toutes commodités !)"
              </p>
              <p className="mb-4">
                "Pour résumer, un cadre absolument idéal pour des vacances parfaitement réussies en familles. Que demander de plus ?! Nous avons vraiment apprécié la très grande disponibilité d'Agathe dont les explications et conseils en tous genres furent très complets et grandement utiles."
              </p>
              <p className="mb-4">
                "Les enfants (tout comme les parents d'ailleurs) se sont régalés avec l'ensemble des prestations proposées (notamment et entre de nombreuses autres : la cuisine extérieure, la piscine entretenue quotidiennement et ce d'ailleurs, sans aucun dérangement d'aucune sorte pour les locataires etc.)."
              </p>
              <p className="mb-4">
                "Vous apprécierez aussi la présence de Lulu, l'adorable tortue qui a émerveillé tant les petits que les grands."
              </p>
              <p>
                "En bref, un véritable havre de paix, et nous y retournerions les yeux fermés ! Encore merci à Agathe pour sa très grande gentillesse et l'attention apportée avec une systématique bienveillance."
              </p>
            </blockquote>
            <cite className="text-sm text-emerald-300 not-italic">— Camille, Paris • Juillet 2021</cite>
            <p className="text-xs text-emerald-200/90 mt-2">
              Avis vérifié publié sur{' '}
              <Link href={AIRBNB_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">
                Airbnb
              </Link>
              .
            </p>

            <div className="pt-8 border-t border-emerald-700/50 grid md:grid-cols-3 gap-6 text-sm text-emerald-100">
              <div className="flex flex-col items-center gap-2">
                <CheckCircle className="w-6 h-6 text-emerald-400" aria-hidden="true" />
                <span className="font-semibold">Ménage pro inclus</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle className="w-6 h-6 text-emerald-400" aria-hidden="true" />
                <span className="font-semibold">Linge hôtelier et serviettes fournis</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Info className="w-6 h-6 text-emerald-400" aria-hidden="true" />
                <span className="font-semibold">Arrivée autonome</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- LOCALISATION --- */}
      <section className="py-20 bg-white" aria-labelledby="localisation-title">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 id="localisation-title" className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              <MapPin className="w-8 h-8 inline-block text-emerald-600 mr-2" aria-hidden="true" />
              Location Vacances Montpellier Centre - Emplacement Premium
            </h2>
<p className="text-lg text-slate-600">
  <strong>Situation exceptionnelle</strong> au cœur de Montpellier, entre le calme d'Antigone, Port Marianne et l'effervescence de l'Écusson.
  Proche de toutes commodités : tram ligne 1 à 3 min à pied, Gare Saint-Roch à 5 min à pied, et plages méditerranéennes à 20 min en voiture.
  Un emplacement stratégique à deux pas du centre historique et des principaux axes de transport.
</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-4">
              <h3 className="font-bold text-lg mb-4 text-slate-900">Points d'Intérêt Touristiques</h3>
              <LocationItem icon={MapPin} label="Place de la Comédie - Centre historique" distance="7 min à pied" />
              <LocationItem icon={MapPin} label="Gare TGV Saint-Roch" distance="5 min à pied" />
              <LocationItem icon={Waves} label="Plages méditerranéennes (Carnon, Palavas)" distance="20 min en voiture" />
              <LocationItem icon={UtensilsCrossed} label="Restaurants gastronomiques & Bars" distance="5 min à pied" />
              <LocationItem icon={MapPin} label="Musée Fabre & Opéra Comédie" distance="10 min à pied" />
              <LocationItem icon={MapPin} label="Jardin des Plantes" distance="8 min en voiture ou 20 min à pied" />
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg mb-4 text-slate-900">Accès & Transports</h3>
              <LocationItem icon={MapPin} label="Arrêt Tram ligne 1 (Antigone)" distance="3 min à pied" />
              <LocationItem icon={Car} label="Garage privé sécurisé (inclus)" distance="Sur place" />
              <LocationItem icon={MapPin} label="Aéroport Montpellier Méditerranée" distance="15 min en voiture" />
              <LocationItem icon={MapPin} label="Autoroute A9 (Paris-Barcelone)" distance="10 min en voiture" />
              <LocationItem icon={MapPin} label="Location vélos Vélomagg" distance="5 min à pied" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50" aria-labelledby="tarifs-title">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 id="tarifs-title" className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Tarifs</h2>
            <p className="text-lg text-slate-600">
              Tarifs indicatifs été 2026 (par nuit). Le prix exact dépend des dates et des disponibilités.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-slate-200/60">
            <div className="grid sm:grid-cols-3 gap-4 text-left">
              <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200/70">
                <p className="text-sm font-semibold text-slate-900">04/07/26 → 31/07/26</p>
                <p className="text-2xl font-bold text-emerald-700 mt-2">595 €</p>
                <p className="text-sm text-slate-600">/ nuit</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200/70">
                <p className="text-sm font-semibold text-slate-900">01/08/26 → 16/08/26</p>
                <p className="text-2xl font-bold text-emerald-700 mt-2">695 €</p>
                <p className="text-sm text-slate-600">/ nuit</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200/70">
                <p className="text-sm font-semibold text-slate-900">17/08/26 → 23/08/26</p>
                <p className="text-2xl font-bold text-emerald-700 mt-2">595 €</p>
                <p className="text-sm text-slate-600">/ nuit</p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link
                href={LEBONCOIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold shadow-lg hover:bg-emerald-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                aria-label="Vérifier les disponibilités et le prix exact sur Leboncoin"
              >
                Vérifier le prix exact sur Leboncoin
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <p className="text-xs text-slate-500 mt-3">
                Tarifs susceptibles d'évoluer. Conditions et frais éventuels selon plateforme.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" aria-labelledby="disponibilites-title">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 id="disponibilites-title" className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Disponibilités</h2>
            <p className="text-lg text-slate-600">
              Calendrier synchronisé en temps réel avec Airbnb. Les dates en rouge sont déjà réservées.
            </p>
          </div>

          <div id="disponibilites" className="max-w-5xl mx-auto scroll-mt-24">
            {calendarLoading ? (
              <div className="text-center py-16 text-slate-500">
                <div className="inline-block w-8 h-8 border-4 border-slate-200 border-t-emerald-600 rounded-full animate-spin mb-4" />
                <p>Chargement du calendrier…</p>
              </div>
            ) : calendarError ? (
              <div className="text-center py-16 text-slate-500">
                <p className="font-semibold text-slate-900">Impossible de charger le calendrier</p>
                <p className="mt-2 text-sm">Veuillez réessayer plus tard ou nous contacter directement.</p>
              </div>
            ) : (
              <AvailabilityCalendar blockedDates={blockedDates} />
            )}

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-emerald-100 border border-emerald-300" />
                <span>Disponible</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-red-100 border border-red-300" />
                <span>Réservé</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-slate-100 border border-slate-200" />
                <span>Passé</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-slate-500">
                Données synchronisées automatiquement depuis Airbnb. Pour réserver, contactez-nous ou passez par Leboncoin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT DIRECT --- */}
      <section className="py-20 bg-slate-100">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="container mx-auto px-4 max-w-3xl"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Location en direct</h2>
            <p className="text-lg text-slate-600 mb-8">
              Possibilité de louer directement sans commission. Contactez-nous pour discuter de votre projet !
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex flex-col items-center gap-2 p-4 bg-slate-50 rounded-xl">
                <p className="font-bold text-slate-900">Agathe Billotte</p>
                <a href="tel:+33645419495" className="text-emerald-600 font-semibold text-lg hover:underline">
                  06 45 41 94 95
                </a>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 bg-slate-50 rounded-xl">
                <p className="font-bold text-slate-900">Antoine Billotte</p>
                <a href="tel:+33784261944" className="text-emerald-600 font-semibold text-lg hover:underline">
                  07 84 26 19 44
                </a>
              </div>
            </div>

            <p className="text-sm text-slate-500">
              Réponse rapide • Conseils personnalisés • Tarifs préférentiels pour location longue durée
            </p>
          </div>
        </motion.div>
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
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Réservez Votre Location Saisonnière Montpellier</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Réservez dès maintenant votre villa de luxe à Montpellier sur nos plateformes partenaires de confiance.
            Paiement sécurisé, annulation flexible, disponibilités en temps réel. Location vacances Airbnb, Abritel et Leboncoin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
            <Link
              href={LEBONCOIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-10 py-5 rounded-full text-xl font-bold transition-all shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:from-emerald-700 hover:to-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              aria-label="Réserver la villa sur Leboncoin"
            >
              Réserver sur Leboncoin
              <ArrowRight className="w-6 h-6" aria-hidden="true" />
            </Link>

            <Link
              href={AIRBNB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur-md text-slate-900 px-10 py-5 rounded-full text-xl font-bold border border-slate-200 hover:border-slate-300 hover:bg-white transition-all shadow-xl hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              aria-label="Réserver la villa sur Airbnb"
            >
              Réserver sur Airbnb
              <ArrowRight className="w-6 h-6" aria-hidden="true" />
            </Link>

            <Link
              href={ABRITEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur-md text-slate-900 px-10 py-5 rounded-full text-xl font-bold border border-slate-200 hover:border-slate-300 hover:bg-white transition-all shadow-xl hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              aria-label="Réserver la villa sur Abritel"
            >
              Réserver sur Abritel
              <ArrowRight className="w-6 h-6" aria-hidden="true" />
            </Link>
          </div>

          <p className="text-sm text-slate-500">
            Aussi disponible sur Booking.com (lien à venir)
          </p>

          <div className="pt-6">
            <div className="inline-flex items-center gap-2 text-slate-600 text-sm font-semibold mb-3">
              <Share2 className="w-4 h-4" aria-hidden="true" />
              Partager
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 hover:border-slate-300 hover:bg-white transition-all text-sm font-semibold text-slate-800"
              >
                Facebook
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 hover:border-slate-300 hover:bg-white transition-all text-sm font-semibold text-slate-800"
              >
                LinkedIn
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 hover:border-slate-300 hover:bg-white transition-all text-sm font-semibold text-slate-800"
              >
                X
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 hover:border-slate-300 hover:bg-white transition-all text-sm font-semibold text-slate-800"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent('Villa de Luxe Montpellier - Piscine Privée')}&body=${encodeURIComponent(shareUrl)}`}
                className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 hover:border-slate-300 hover:bg-white transition-all text-sm font-semibold text-slate-800 inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                Email
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-white py-12" role="contentinfo">
        <div className="container mx-auto px-4 text-center space-y-4">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Villa Oasis Montpellier - Agathe & Antoine
          </p>
          <div className="flex justify-center gap-4 text-sm text-slate-400 flex-wrap">
            <Link href={AIRBNB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Airbnb
            </Link>
            <span>•</span>
            <Link href={ABRITEL_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Abritel
            </Link>
            <span>•</span>
            <Link href={LEBONCOIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Leboncoin
            </Link>
          </div>
          <div className="flex justify-center gap-4 text-xs text-slate-500">
            <a href="tel:+33645419495" className="hover:text-slate-300 transition-colors">
              📞 Agathe: 06 45 41 94 95
            </a>
            <span>•</span>
            <a href="tel:+33784261944" className="hover:text-slate-300 transition-colors">
              📞 Antoine: 07 84 26 19 44
            </a>
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
      className="flex flex-col items-center gap-2 text-slate-600 hover:text-emerald-700 transition-colors cursor-default"
      variants={FADE_UP}
      whileHover={{ scale: 1.05 }}
    >
      <div className="p-3 bg-white/70 backdrop-blur-md rounded-2xl text-slate-900 shadow-sm border border-slate-200/60">
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
  const resolvedSrc = /\.(avif|webp|jpe?g|png)$/i.test(src) ? src : `${src}.webp`;
  return (
    <motion.div
      className={`${aspectRatio} rounded-2xl overflow-hidden relative shadow-lg group border border-slate-200/60 bg-white`}
      initial="hidden"
      animate="visible"
      variants={FADE_UP}
    >
      <Image
        src={resolvedSrc}
        alt={alt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
        loading="lazy"
      />
    </motion.div>
  );
}

function RoomCard({ image, title, desc, badge }: { image: string, title: string, desc: string, badge?: string }) {
  const resolvedSrc = /\.(avif|webp|jpe?g|png)$/i.test(image) ? image : `${image}.webp`;
  return (
    <motion.div
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200/60 hover:border-slate-200"
      initial="hidden"
      animate="visible"
      variants={FADE_UP}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-64 overflow-hidden">
        {badge && (
          <div className="absolute top-4 right-4 z-10 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            {badge}
          </div>
        )}
        <Image
          src={resolvedSrc}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
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

function HeroVideoBackground({ sources }: { sources: string[] }) {
  const [index, setIndex] = useState(0);
  const [hasEverPlayed, setHasEverPlayed] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const src = sources[index % sources.length];

  const tryPlay = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    const p = el.play();
    if (p && typeof (p as any).catch === 'function') {
      (p as Promise<void>).catch(() => {});
    }
  }, []);

  const goNext = useCallback(() => {
    setIndex((v) => (v + 1) % sources.length);
  }, [sources.length]);

  useEffect(() => {
    tryPlay();
  }, [src, tryPlay]);

  if (sources.length === 0) return null;

  return (
    <div className="absolute inset-0">
      <Image
        src="/images/villa/hero-pool3.webp"
        alt="Villa avec piscine privée à Montpellier centre, jardin tropical luxuriant"
        fill
        className={`object-cover scale-105 filter saturate-170 contrast-130 brightness-85 transition-opacity duration-700 ${hasEverPlayed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        priority
      />
      <video
        ref={videoRef}
        key={src}
        className="absolute inset-0 h-full w-full object-cover scale-105 filter saturate-170 contrast-130 brightness-85"
        src={src}
        autoPlay
        muted
        playsInline
        preload="auto"
        onCanPlay={tryPlay}
        onPlaying={() => setHasEverPlayed(true)}
        onEnded={goNext}
        onError={goNext}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
    </div>
  );
}

function AvailabilityCalendar({ blockedDates }: { blockedDates: Set<string> }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const initialOffset = useMemo(() => {
    for (let m = 0; m < 12; m++) {
      const probe = new Date(today.getFullYear(), today.getMonth() + m, 1);
      const daysInMonth = new Date(probe.getFullYear(), probe.getMonth() + 1, 0).getDate();
      for (let d = 1; d <= daysInMonth; d++) {
        const ds = `${probe.getFullYear()}-${String(probe.getMonth() + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
        const date = new Date(probe.getFullYear(), probe.getMonth(), d);
        if (date >= today && !blockedDates.has(ds)) {
          return Math.floor(m / 4) * 4;
        }
      }
    }
    return 0;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blockedDates.size]);

  const [offset, setOffset] = useState(0);
  const MONTHS_PER_PAGE = 4;

  useEffect(() => {
    if (initialOffset > 0) setOffset(initialOffset);
  }, [initialOffset]);

  const months: { year: number; month: number }[] = [];
  const startMonth = new Date(today.getFullYear(), today.getMonth() + offset, 1);
  for (let i = 0; i < MONTHS_PER_PAGE; i++) {
    const d = new Date(startMonth);
    d.setMonth(d.getMonth() + i);
    months.push({ year: d.getFullYear(), month: d.getMonth() });
  }

  const DAYS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  const MONTH_NAMES = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre',
  ];

  function getDaysInMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
  }

  function getFirstDayOfWeek(year: number, month: number) {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setOffset((o) => Math.max(o - MONTHS_PER_PAGE, 0))}
          disabled={offset === 0}
          className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ← Précédent
        </button>
        <span className="text-sm text-slate-500 font-medium">
          {MONTH_NAMES[months[0].month]} {months[0].year} — {MONTH_NAMES[months[MONTHS_PER_PAGE - 1].month]} {months[MONTHS_PER_PAGE - 1].year}
        </span>
        <button
          onClick={() => setOffset((o) => o + MONTHS_PER_PAGE)}
          disabled={offset + MONTHS_PER_PAGE >= 12}
          className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Suivant →
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {months.map(({ year, month }) => {
          const daysInMonth = getDaysInMonth(year, month);
          const firstDay = getFirstDayOfWeek(year, month);
          const cells: React.ReactNode[] = [];

          for (let i = 0; i < firstDay; i++) {
            cells.push(<div key={`empty-${i}`} />);
          }

          for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const date = new Date(year, month, day);
            const isPast = date < today;
            const isBlocked = blockedDates.has(dateStr);

            let cellClass = 'rounded-lg text-center py-2 text-sm font-medium transition-colors ';
            if (isPast) {
              cellClass += 'bg-slate-50 text-slate-300 border border-slate-100';
            } else if (isBlocked) {
              cellClass += 'bg-red-50 text-red-700 border border-red-200';
            } else {
              cellClass += 'bg-emerald-50 text-emerald-800 border border-emerald-200';
            }

            cells.push(
              <div key={dateStr} className={cellClass}>
                {day}
              </div>
            );
          }

          return (
            <div
              key={`${year}-${month}`}
              className="bg-white rounded-2xl border border-slate-200/70 shadow-sm p-6"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-4 text-center">
                {MONTH_NAMES[month]} {year}
              </h3>
              <div className="grid grid-cols-7 gap-1 mb-2">
                {DAYS.map((d) => (
                  <div key={d} className="text-center text-xs font-semibold text-slate-400 py-1">
                    {d}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">{cells}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
