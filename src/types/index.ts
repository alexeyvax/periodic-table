import { Dispatch, SetStateAction } from "react";

export type UseState<T> = Dispatch<SetStateAction<T>>;

export enum ElementCategory {
    NobleGas = "noble gas",

    DiatomicNonmetal = "diatomic nonmetal",
    PolyatomicNonmetal = "polyatomic nonmetal",

    TransitionMetal = "transition metal",

    PostTransitionMetal = "post-transition metal",

    Metalloid = "metalloid",

    AlkaliMetal = "alkali metal",

    AlkalineEarthMetal = "alkaline earth metal",

    UnknownTransitionMetal = "unknown, probably transition metal",
    UnknownPostTransitionMetal = "unknown, probably post-transition metal",
    UnknownMetalloid = "unknown, probably metalloid",
    UnknownNobleGas = "unknown, predicted to be noble gas",
    UnknownAlkaliMetal = "unknown, but predicted to be an alkali metal",

    Actinide = "actinide",

    Lanthanide = "lanthanide"
}

export enum ElementCategoryLabel {
    NobleGases = "Noble gases",
    ReactiveNonMetals = "Reactive non-metals",
    TransitionMetals = "Transition metals",
    PostTransitionMetals = "Post-transition metals",
    Metalloids = "Metalloids",
    AlkaliMetals = "Alkali metals",
    AlkalineEarthMetals = "Alkaline earth metals",
    UnknownProperties = "Unknown properties",
    Actinides = "Actinides",
    Lanthanides = "Lanthanides"
}

export interface PeriodicTableElement {
    name: string;
    appearance: string | null;
    atomic_mass: number;
    boil: number | null;
    category: ElementCategory;
    density: number;
    discovered_by: string | null;
    discovered_by_links: string[] | null;
    melt: number | null;
    molar_heat: number | null;
    naming: string | null;
    naming_links: string[] | null;
    number: number;
    period: number;
    group: number;
    phase: string;
    source: string;
    bohr_model_image: string;
    bohr_model_3d: string;
    spectral_img: string;
    summary: string;
    symbol: string;
    shells: number[]
    electron_configuration: string;
    electron_configuration_semantic: string;
    electron_affinity: number;
    electronegativity_pauling: number | null;
    ionization_energies: number[];
    image: {
        title: string;
        url: string;
        attribution: string;
    };
    block: string;
}

export enum AvailableLanguages {
    English = "en",
    Russian = "ru"
}

export enum TableType {
    // short = "Короткая",
    long = "Длинная",
    superLong = "Сверхдлинная"
}

/*
В «сверхдлинном» варианте каждый период занимает ровно одну строчку.
В «длинном» варианте лантаноиды и актиноиды вынесены из общей таблицы, делая её более компактной.
В «короткой» форме записи, в дополнение к этому, четвёртый и последующие периоды занимают по 2 строчки; символы элементов главных и побочных подгрупп выравниваются относительно разных краёв клеток.

Водород иногда помещают в 7-ю («короткая» форма) или 17-ю («длинная» форма) группу таблицы
*/

export type SupportLink = {
    title: string;
    network: string;
    coins: string[];
    address: string;
};
