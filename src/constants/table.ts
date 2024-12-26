import { ElementCategory, ElementCategoryLabel, TableType } from "../types";

function range(from: number, to: number) {
    const result = [];
    for (let i = from; i <= to; i++) result.push(i);
    return result;
}

const longTablePlacement: number[][] = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 7, 8, 9, 10],
    [11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 14, 15, 16, 17, 18],
    range(19, 36),
    range(37, 54),
    [55, 56, 0, ...range(72, 86)],
    [87, 88, 0, ...range(104, 118)],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, ...range(57, 71)],
    [0, 0, 0, ...range(89, 103)],
];
const superLongTablePlacement: number[][] = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 7, 8, 9, 10],
    [11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 14, 15, 16, 17, 18],
    [19, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ...range(21, 36)],
    [37, 38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ...range(39, 54)],
    range(55, 86),
    range(87, 118)
];

const longTableGroups = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];
const superLongTableGroups = ["1", "2", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];

export const periods = ["", "1", "2", "3", "4", "5", "6", "7"];

export const tableTypeToPlacementMap: Record<TableType, number[][]> = {
    [TableType.long]: longTablePlacement,
    [TableType.superLong]: superLongTablePlacement
};
export const tableTypeToGroupsMap: Record<TableType, string[]> = {
    [TableType.long]: longTableGroups,
    [TableType.superLong]: superLongTableGroups
};

export const categoriesLabels = [
    ElementCategoryLabel.AlkaliMetals,
    ElementCategoryLabel.AlkalineEarthMetals,
    ElementCategoryLabel.TransitionMetals,
    ElementCategoryLabel.PostTransitionMetals,
    ElementCategoryLabel.Metalloids,
    ElementCategoryLabel.ReactiveNonMetals,
    ElementCategoryLabel.NobleGases,
    ElementCategoryLabel.Lanthanides,
    ElementCategoryLabel.Actinides,
    ElementCategoryLabel.UnknownProperties
];
export const categoriesLabelMapToValues: Record<string, ElementCategory[]> = {
    [ElementCategoryLabel.AlkaliMetals]: [ElementCategory.AlkaliMetal],
    [ElementCategoryLabel.AlkalineEarthMetals]: [ElementCategory.AlkalineEarthMetal],
    [ElementCategoryLabel.TransitionMetals]: [ElementCategory.TransitionMetal],
    [ElementCategoryLabel.PostTransitionMetals]: [ElementCategory.PostTransitionMetal],
    [ElementCategoryLabel.Metalloids]: [ElementCategory.Metalloid],
    [ElementCategoryLabel.ReactiveNonMetals]: [ElementCategory.DiatomicNonmetal, ElementCategory.PolyatomicNonmetal],
    [ElementCategoryLabel.NobleGases]: [ElementCategory.NobleGas],
    [ElementCategoryLabel.Lanthanides]: [ElementCategory.Lanthanide],
    [ElementCategoryLabel.Actinides]: [ElementCategory.Actinide],
    [ElementCategoryLabel.UnknownProperties]: [
        ElementCategory.UnknownAlkaliMetal,
        ElementCategory.UnknownMetalloid,
        ElementCategory.UnknownNobleGas,
        ElementCategory.UnknownPostTransitionMetal,
        ElementCategory.UnknownTransitionMetal
    ]
};
