import React from "react";
import cx from "classnames";

import { categoriesLabelMapToValues } from "../../../constants/table";
import { useData } from "../../../context/Data";
import { getClassNameByCategory } from "../../../utils/getClassNameByCategory";
import { bigRound } from "../../../utils/round";
import sharedStyles from "../../../sharedStyles.css";
import styles from "./styles.css";

type Props = {
    cell: number;
}

function Cell({ cell }: Props) {
    const { periodicElements, selectedElement, selectedCategory, onSelectElement } = useData();

    if (cell === 0) {
        return <li className={sharedStyles.emptyCell}></li>;
    }

    const element = periodicElements[cell - 1];

    return (
        <li
            key={element.symbol}
            className={
                cx(
                    sharedStyles.cell,
                    styles.cell,
                    {
                        [sharedStyles[getClassNameByCategory(element.category)]]: true,
                        [styles.selectedCell]: (
                            (selectedCategory && categoriesLabelMapToValues[selectedCategory].includes(element.category))
                            || selectedElement?.symbol === element.symbol
                        )
                    }
                )
            }
        >
            <button
                className={styles.cellButton}
                onClick={onSelectElement(element)}
            >
                <div className={styles.top}>
                    <span>{element.number}</span>
                    <span>{bigRound(element.atomic_mass)}</span>
                </div>
                <strong className={styles.symbol}>{element.symbol}</strong>
                <span className={styles.elementName}>{element.name}</span>
            </button>
        </li>
    );
}

export default Cell;
