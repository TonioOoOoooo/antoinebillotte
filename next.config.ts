import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // Indispensable pour ton VPS (génère le dossier /out)
  images: { 
    unoptimized: true    // Nécessaire car l'optimisation d'image Next.js requiert un serveur Node actif
  },
};

export default nextConfig;