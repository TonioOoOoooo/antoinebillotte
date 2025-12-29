import { useMemo } from 'react';
import frTranslations from '@/locales/fr.json';
import enTranslations from '@/locales/en.json';

type Locale = 'fr' | 'en';

type Translations = typeof frTranslations;

/**
 * Hook personnalisé pour la gestion des traductions
 * @param locale - 'fr' ou 'en'
 * @returns Objet de traductions pour la langue sélectionnée
 */
export function useTranslation(locale: Locale = 'fr'): Translations {
  const translations = useMemo(() => {
    return locale === 'en' ? enTranslations : frTranslations;
  }, [locale]);

  return translations;
}

/**
 * Helper pour savoir si on est en anglais
 */
export function useIsEnglish(locale: Locale = 'fr'): boolean {
  return locale === 'en';
}
