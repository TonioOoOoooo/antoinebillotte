import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const { pathname } = request.nextUrl;

  // Liste des domaines "Perso" qui doivent aller vers le CV
  const personalDomains = [
    'antoinebillotte.fr',
    'abillotte.fr',
    'www.antoinebillotte.fr',
    'www.abillotte.fr'
    // Note: 'localhost' n'est pas inclus, donc en local vous verrez la villa par défaut
    // Pour tester le CV en local: http://localhost:3000/profile
  ];

  // Est-ce que le visiteur vient d'un domaine perso ?
  const isPersonalDomain = personalDomains.some(domain => hostname.includes(domain));

  // LOGIQUE DE REDIRECTION :

  // 1. Redirection legacy /fr vers / (conservée pour compatibilité)
  if (pathname === '/fr') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // 2. Si on est sur un domaine Perso (CV) et qu'on demande l'accueil '/'
  //    -> On réécrit l'URL pour afficher le contenu de /profile sans changer l'URL du navigateur
  if (isPersonalDomain && pathname === '/') {
    return NextResponse.rewrite(new URL('/profile', request.url));
  }

  // 3. Si on est sur maisonmontpellier.fr et qu'on essaie d'aller sur /profile
  //    -> On peut rediriger vers l'accueil (optionnel)
  // if (!isPersonalDomain && pathname === '/profile') {
  //   return NextResponse.redirect(new URL('/', request.url));
  // }

  return NextResponse.next();
}

// Configuration pour éviter que le middleware ne s'exécute sur les images, fichiers statiques, etc.
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (votre dossier d'images public)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
};
