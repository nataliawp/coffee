import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ruJSON from './locales/ru.json'
import uzJSON from './locales/uz.json'
import engJSON from './locales/eng.json'

i18n.use(initReactI18next).init({
    resources: {
        eng: {
            translation: {...engJSON}
        },
        ru: {
            translation: {...ruJSON}

        },
        uz: {
            translation: {...uzJSON}
        }

    },
    lng: localStorage.getItem("language") || "ru"
})