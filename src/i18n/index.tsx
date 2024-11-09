import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {en} from "./dictionnaries/en";
import { fr } from "./dictionnaries/fr";
import {de} from "./dictionnaries/de";
import {es} from "./dictionnaries/sp"
i18n.use(initReactI18next).init({
resources: {
en,
fr,
de,
es
},
lng: "en",
fallbackLng: "en",
interpolation: {
escapeValue: false,
},
});
export default i18n;