import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Villa d'Exception Montpellier | 265m² Piscine Privée 6 Chambres",
  description: "Louez une villa de luxe avec piscine privée à Montpellier centre. 265m², 6 chambres, 12 voyageurs. Jardin tropical, garage, 7 min de la Comédie. Idéal familles & groupes.",
  manifest: "/images/favicons_maison/site.webmanifest",
  themeColor: "#ffffff",
  icons: {
    icon: [
      {
        url: "/images/favicons_maison/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/images/favicons_maison/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/favicons_maison/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/images/favicons_maison/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  keywords: [
    "location villa Montpellier",
    "villa piscine Montpellier",
    "location vacances Montpellier",
    "maison avec piscine Montpellier",
    "villa luxe Montpellier centre",
    "location grande maison Montpellier",
    "Airbnb Montpellier",
    "villa 6 chambres Montpellier",
    "location saisonnière Montpellier",
    "villa familiale Montpellier"
  ],
  authors: [{ name: "Agathe & Antoine" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://maisonmontpellier.fr/",
    title: "Villa Oasis Montpellier | Piscine Privée & Jardin Tropical",
    description: "265m² de luxe en plein centre de Montpellier. Piscine, 6 chambres, jardin tropical. Parfait pour 12 voyageurs.",
    siteName: "Villa Oasis Montpellier",
    images: [
      {
        url: "https://maisonmontpellier.fr/images/villa/hero-pool.webp",
        width: 1200,
        height: 630,
        alt: "Villa avec piscine privée Montpellier"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa Oasis Montpellier | Location de Luxe",
    description: "265m², piscine privée, 6 chambres. Le paradis urbain à Montpellier.",
    images: ["https://maisonmontpellier.fr/images/villa/hero-pool.webp"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://maisonmontpellier.fr/"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* JSON-LD Structured Data pour le SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VacationRental",
              "identifier": "villa-oasis-montpellier-34000",
              "additionalType": "https://schema.org/House",
              "name": "Villa Oasis Montpellier",
              "description": "Villa d'architecte de 265m² avec piscine privée, jardin tropical, 6 chambres pour 12 voyageurs au cœur de Montpellier.",
              "image": [
                "https://maisonmontpellier.fr/images/villa/hero-pool.webp",
                "https://maisonmontpellier.fr/images/villa/salon.jpeg",
                "https://maisonmontpellier.fr/images/villa/cuisine.jpeg",
                "https://maisonmontpellier.fr/images/villa/patio.jpeg",
                "https://maisonmontpellier.fr/images/villa/chambre1.webp",
                "https://maisonmontpellier.fr/images/villa/sdb-balneo.jpeg",
                "https://maisonmontpellier.fr/images/villa/chambre5.jpeg",
                "https://maisonmontpellier.fr/images/villa/repas.jpeg"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Quartier Celleneuve",
                "addressLocality": "Montpellier",
                "addressRegion": "Occitanie",
                "postalCode": "34000",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 43.610769,
                "longitude": 3.876716
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "45",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Marie D."
                  },
                  "datePublished": "2025-12-15",
                  "reviewBody": "Villa exceptionnelle ! Piscine magnifique, jardin tropical apaisant. Parfait pour notre réunion de famille de 10 personnes. Les hôtes sont adorables et très réactifs."
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Thomas L."
                  },
                  "datePublished": "2025-11-28",
                  "reviewBody": "Séjour inoubliable dans cette villa de rêve. Emplacement idéal à 7 minutes du centre. Les 6 chambres sont spacieuses et bien équipées."
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Sophie M."
                  },
                  "datePublished": "2025-10-10",
                  "reviewBody": "Un havre de paix en plein centre-ville. La cuisine est très bien équipée, idéal pour cuisiner en famille. Garage privé très pratique."
                }
              ],
              "containsPlace": [
                {
                  "@type": "Accommodation",
                  "name": "Suite Parentale",
                  "description": "Chambre principale avec salle de bain privative et dressing",
                  "occupancy": {
                    "@type": "QuantitativeValue",
                    "maxValue": 2
                  }
                },
                {
                  "@type": "Accommodation",
                  "name": "Chambre Double 1",
                  "occupancy": {
                    "@type": "QuantitativeValue",
                    "maxValue": 2
                  }
                },
                {
                  "@type": "Accommodation",
                  "name": "Chambre Double 2",
                  "occupancy": {
                    "@type": "QuantitativeValue",
                    "maxValue": 2
                  }
                },
                {
                  "@type": "Accommodation",
                  "name": "Chambre Enfants avec lits superposés",
                  "occupancy": {
                    "@type": "QuantitativeValue",
                    "maxValue": 4
                  }
                },
                {
                  "@type": "Accommodation",
                  "name": "Chambre Supplémentaire",
                  "occupancy": {
                    "@type": "QuantitativeValue",
                    "maxValue": 2
                  }
                }
              ],
              "amenityFeature": [
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Piscine privée",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Jardin tropical",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Garage privé",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Climatisation",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Wifi haut débit",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Cuisine équipée",
                  "value": true
                }
              ],
              "numberOfBedrooms": 6,
              "numberOfBathroomsTotal": 4,
              "floorSize": {
                "@type": "QuantitativeValue",
                "value": 265,
                "unitCode": "MTK"
              },
              "occupancy": {
                "@type": "QuantitativeValue",
                "maxValue": 12
              },
              "petsAllowed": false,
              "url": "https://maisonmontpellier.fr/",
              "landlord": {
                "@type": "Person",
                "name": "Agathe & Antoine",
                "description": "Superhôtes Airbnb expérimentés",
                "telephone": "+33-6-64-61-49-99"
              }
            })
          }}
        />

        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Accueil",
                  "item": "https://antoinebillotte.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Location Vacances Montpellier",
                  "item": "https://antoinebillotte.com"
                }
              ]
            })
          }}
        />

        {/* FAQPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Combien de personnes peuvent loger dans la Villa Oasis Montpellier ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La villa peut accueillir confortablement jusqu'à 12 voyageurs avec 6 chambres spacieuses et 4 salles de bain complètes."
                  }
                },
                {
                  "@type": "Question",
                  "name": "La villa dispose-t-elle d'une piscine privée ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, la villa dispose d'une magnifique piscine privée entourée d'un jardin tropical de 265m²."
                  }
                },
                {
                  "@type": "Question",
                  "name": "À quelle distance se trouve la villa du centre de Montpellier ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La villa est située à seulement 7 minutes en voiture de la Place de la Comédie, le cœur du centre-ville de Montpellier. Le tramway est accessible à 5 minutes à pied."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Un parking est-il disponible ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, la villa dispose d'un garage privé sécurisé pouvant accueillir plusieurs véhicules."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Les animaux de compagnie sont-ils acceptés ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Non, les animaux de compagnie ne sont pas acceptés dans cette location."
                  }
                }
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
