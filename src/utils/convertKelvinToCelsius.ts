import { round } from "./round";

const convertKelvinToCelsius = (kelvin: number | null | undefined) => {
    if (typeof kelvin !== "number") {
        return undefined;
    }

    return round(kelvin - 273.15)
};

export default convertKelvinToCelsius;
