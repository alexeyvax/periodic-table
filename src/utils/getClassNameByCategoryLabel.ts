import { ElementCategoryLabel } from "../types";

export const getClassNameByCategoryLabel = (categoryLabel: ElementCategoryLabel) => {
    switch (true) {
        case categoryLabel === ElementCategoryLabel.NobleGases:
            return "nobleGas";

        case categoryLabel === ElementCategoryLabel.ReactiveNonMetals:
            return "diatomicNonMetals";

        case categoryLabel === ElementCategoryLabel.TransitionMetals:
            return "transitionMetal";

        case categoryLabel === ElementCategoryLabel.PostTransitionMetals:
            return "postTransitionMetal";

        case categoryLabel === ElementCategoryLabel.Metalloids:
            return "metalloid";

        case categoryLabel === ElementCategoryLabel.AlkaliMetals:
            return "alkaliMetal";

        case categoryLabel === ElementCategoryLabel.AlkalineEarthMetals:
            return "alkalineEarthMetal";

        case categoryLabel === ElementCategoryLabel.UnknownProperties:
            return "unknownProperties";

        case categoryLabel === ElementCategoryLabel.Actinides:
            return "actinide";

        case categoryLabel === ElementCategoryLabel.Lanthanides:
            return "lanthanide";

        default:
            return "";
    }
};
