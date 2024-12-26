import React from "react";

type RenderValueOptions = {
    dimension?: string;
    returnEmpty?: boolean;
    hasBrackets?: boolean;
};

const renderValue = (
    value: string | number | null | undefined,
    {
        dimension: dimensionValue,
        returnEmpty = false,
        hasBrackets = false
    }: RenderValueOptions = {}
) => {
    const hasValue = (typeof value === "string" && value) || typeof value === "number";
    const dimension = dimensionValue ? ` ${dimensionValue}` : "";
    const emptyState = returnEmpty ? "" : " —";

    return hasValue
        ? (
            <span>
                {`${hasBrackets ? "(" : ""}${value}${dimension}${hasBrackets ? ")" : ""}`}
            </span>
        )
        : emptyState;
};

export default renderValue;
