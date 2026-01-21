import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Villa d'Exception Montpellier | 265m² Piscine Privée 6 Chambres",
  description: "Louez une villa de luxe avec piscine privée à Montpellier centre. 265m², 6 chambres, 12 voyageurs. Jardin tropical, garage, 7 min de la Comédie. Idéal familles & groupes.",
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
    url: "https://antoinebillotte.com/villa-montpellier",
    title: "Villa Oasis Montpellier | Piscine Privée & Jardin Tropical",
    description: "265m² de luxe en plein centre de Montpellier. Piscine, 6 chambres, jardin tropical. Parfait pour 12 voyageurs.",
    siteName: "Villa Oasis Montpellier",
    images: [
      {
        url: "https://antoinebillotte.com/images/villa/hero-pool.jpg",
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
    images: ["https://antoinebillotte.com/images/villa/hero-pool.jpg"]
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
    canonical: "https://antoinebillotte.com/villa-montpellier"
  },
  verification: {
    google: "votre-code-google-verification", // À remplacer par votre code Google Search Console
  }
};

export default function VillaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD Structured Data pour le SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VacationRental",
            "name": "Villa Oasis Montpellier",
            "description": "Villa d'architecte de 265m² avec piscine privée, jardin tropical, 6 chambres pour 12 voyageurs au cœur de Montpellier.",
            "image": [
              "https://antoinebillotte.com/images/villa/hero-pool.jpg",
              "https://antoinebillotte.com/images/villa/salon.jpg",
              "https://antoinebillotte.com/images/villa/cuisine.jpg"
            ],
            "address": {
              "@type": "PostalAddress",
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
            "url": "https://antoinebillotte.com/villa-montpellier",
            "landlord": {
              "@type": "Person",
              "name": "Agathe & Antoine",
              "description": "Superhôtes Airbnb expérimentés"
            }
          })
        }}
      />
      {children}
    </>
  );
}
