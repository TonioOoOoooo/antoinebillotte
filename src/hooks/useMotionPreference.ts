import { useState, useEffect } from 'react';

/**
 * Hook pour détecter si l'utilisateur préfère des animations réduites
 * Respecte prefers-reduced-motion (accessibilité)
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}

/**
 * Hook pour détecter si on est sur mobile
 * Basé sur la taille d'écran et le user agent
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    const isMobileSize = window.innerWidth < 768;
    const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    return isMobileSize || isMobileUA;
  });

  useEffect(() => {
    const checkMobile = () => {
      const isMobileSize = window.innerWidth < 768;
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      setIsMobile(isMobileSize || isMobileUA);
    };

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

/**
 * Hook combiné pour gérer les préférences d'animation
 * Retourne le nombre optimal de particules selon l'appareil et les préférences
 */
export function useAnimationConfig(): {
  shouldAnimate: boolean;
  particleCount: number;
  reducedMotion: boolean;
  isMobile: boolean;
} {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  // Si prefers-reduced-motion, désactiver complètement les animations
  if (prefersReducedMotion) {
    return {
      shouldAnimate: false,
      particleCount: 0,
      reducedMotion: true,
      isMobile
    };
  }

  // Sur mobile, réduire le nombre de particules pour performance
  const particleCount = isMobile ? 10 : 30;

  return {
    shouldAnimate: true,
    particleCount,
    reducedMotion: false,
    isMobile
  };
}
