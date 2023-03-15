import { getLocales,locale } from 'expo-localization';
import en from './translations/en';
import hi from './translations/hi';
import i18next from 'i18next';

export const LANGUAGES = [
    {
        label: 'English',
        value: 'en',
    },
    {
    label: 'हिंदी',
    value: 'hi',   
    }
]
const translations = {
 en,
 hi,
};


i18next.init({
  lng: getLocales()[0].languageCode, // if you're using a language detector, do not define the lng option
  debug: true,
  resources: translations,
});

export function getLanguage() {
    return i18next.language;
}
export function setLanguage(language: string) {
    i18next.changeLanguage(language);
}

export function translate(key: string) {
    return i18next.t(key);
}