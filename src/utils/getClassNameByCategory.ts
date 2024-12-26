import { ElementCategory } from "../types";

export const getClassNameByCategory = (category: ElementCategory) => {
    switch (true) {
        case category === ElementCategory.NobleGas:
            return "nobleGas";

        case (
            category === ElementCategory.DiatomicNonmetal
            || category === ElementCategory.PolyatomicNonmetal
        ):
            return "diatomicNonMetals";

        case category === ElementCategory.TransitionMetal:
            return "transitionMetal";

        case category === ElementCategory.PostTransitionMetal:
            return "postTransitionMetal";

        case category === ElementCategory.Metalloid:
            return "metalloid";

        case category === ElementCategory.AlkaliMetal:
            return "alkaliMetal";

        case category === ElementCategory.AlkalineEarthMetal:
            return "alkalineEarthMetal";

        case (
            category === ElementCategory.UnknownTransitionMetal
            || category === ElementCategory.UnknownPostTransitionMetal
            || category === ElementCategory.UnknownMetalloid
            || category === ElementCategory.UnknownNobleGas
            || category === ElementCategory.UnknownAlkaliMetal
        ):
            return "unknownProperties";

        case category === ElementCategory.Actinide:
            return "actinide";

        case category === ElementCategory.Lanthanide:
            return "lanthanide";

        default:
            return "";
    }
};
