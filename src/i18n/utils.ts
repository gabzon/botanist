import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        // Check if the key exists in the current language, otherwise fall back to default
        return ui[lang][key as keyof typeof ui[typeof lang]] || ui[defaultLang][key];
    }
}