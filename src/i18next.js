import i18n from 'i18next';
import LanguagueDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './languages/en.json';
import uk from './languages/uk.json';
import ru from './languages/ru.json';
import en_benefit from '../benefits.json';
import uk_benefit from '../benefits.json';
import ru_benefit from '../benefits.json';


i18n
    .use(LanguagueDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        lng: 'en',
        resources: {
            en: {
                translation: en ? en : en_benefit,
            },
            uk: {
                translation: uk ? uk : uk_benefit,
            },
            ru: {
                translation: ru ? ru : ru_benefit,
            }
        },
        fallbaclLng: 'en',
        detection: {
            order: ['localStorage', 'cookie', 'navigator'], // Language detection priorities
            caches: ['localStorage', 'cookie'], // Save language preference
        },
})

export default i18n;
