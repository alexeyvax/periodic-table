import { languageAvailableLanguageMap } from "../constants/languages";
import { AvailableLanguages } from "../types";

function detectLanguage() {
    const currentLanguage = navigator.language;

    return languageAvailableLanguageMap[currentLanguage];
}

function getInitLanguage() {
    return detectLanguage() || AvailableLanguages.Russian;
}

export default getInitLanguage;
