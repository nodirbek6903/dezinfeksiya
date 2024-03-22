import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import ruTranslation from "../languages/ru.json"
import uzTranslation from "../languages/uz.json"

const resources = {
    ru:{
        translation:ruTranslation,
    },
    uz: {
        translation: uzTranslation,
    }
};

i18next
.use(initReactI18next)
.init({
    resources,
    lng:"ru",
    fallbackLng:"ru",
    interpolation:{
        escapeValue:false
    }
})

export default i18next