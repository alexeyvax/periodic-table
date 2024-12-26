import { AvailableLanguages } from "../types";

function loadLocalesData(locale: AvailableLanguages) {
    switch (locale) {
        case AvailableLanguages.Russian:
            return [
                import("../context/Data/locales/ru.json"),
                import("../context/Data/PeriodicTable-ru.json")
            ];

        default:
            return [
                import("../context/Data/locales/en.json"),
                import("../context/Data/PeriodicTable-en.json")
            ];
    }
}

export default loadLocalesData;
