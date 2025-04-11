import { ui, defaultLang } from './ui';
import { hero } from './dict/hero';
import { about } from './dict/about';
import { farm } from './dict/farm';
import { menu } from './dict/menu';
import { gallery } from './dict/gallery';
import { contact } from './dict/contact';
import { franchise } from './dict/franchise';
import { footer } from './dict/footer';


// Create a dictionaries object that includes all translation dictionaries
const dictionaries = {
  ui,
  hero,
  about,
  farm,
  menu,
  gallery,
  contact,
  franchise,
  footer
};

export function getLangFromUrl(url: URL) {
  const pathname = url.pathname;
  const segments = pathname.split('/').filter(Boolean);
  
  const langIndex = import.meta.env.BASE_URL ? 1 : 0;
  
  if (segments.length > langIndex) {
    const lang = segments[langIndex];
    if (lang in ui) return lang;
  }
  
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string, dict: string = 'ui') {
    // Handle dot notation (e.g., 'button.exploreMenu')
    if (key.includes('.')) {
      const translation = ui[lang]?.[key as keyof typeof ui[typeof lang]];
      if (translation) return translation;
      
      // Fall back to default language
      return ui[defaultLang]?.[key as keyof typeof ui[typeof defaultLang]] || key;
    }
    
    // Handle dictionary-specific keys (e.g., 'reviews' in 'hero' dictionary)
    if (dict in dictionaries) {
      const dictionary = dictionaries[dict as keyof typeof dictionaries];
      const translation = dictionary[lang]?.[key as keyof typeof dictionary[typeof lang]];
      
      if (translation) return translation;
      
      // Fall back to default language
      return dictionary[defaultLang]?.[key as keyof typeof dictionary[typeof defaultLang]] || key;
    }
    
    // If dictionary not found, try in UI dictionary
    const translation = ui[lang]?.[key as keyof typeof ui[typeof lang]];
    if (translation) return translation;
    
    // Final fallback
    return ui[defaultLang]?.[key as keyof typeof ui[typeof defaultLang]] || key;
  };
}