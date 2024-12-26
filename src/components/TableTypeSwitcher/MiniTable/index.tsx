import React from "react";
import cx from "classnames";

import { PeriodicTableElement } from "../../../types";
import { getClassNameByCategory } from "../../../utils/getClassNameByCategory";
import sharedStyles from "../../../sharedStyles.css";
import styles from "./styles.css";

type Props = {
    placement: number[][];
    periodicElements: PeriodicTableElement[];
}

function MiniTable({ placement, periodicElements }: Props) {
    return (
        <ul className={styles.list}>
            {placement.map((row, rowIndex) => (
                <li
                    key={rowIndex}
                    className={cx(sharedStyles.row, styles.row)}
                >
                    <ul>
                        {row.map((cell) => {
                            if (cell === 0) {
                                return <li className={cx(sharedStyles.emptyCell, styles.miniCell)}></li>;
                            }

                            const element = periodicElements[cell - 1];

                            return (
                                <li
                                    key={element.symbol}
                                    className={
                                        cx(
                                            sharedStyles.cell,
                                            styles.miniCell,
                                            { [sharedStyles[getClassNameByCategory(element.category)]]: true }
                                        )
                                    }
                                >
                                    <div className={styles.cellButton} />
                                </li>
                            );
                        })}
                    </ul>
                </li>
            ))}
        </ul>
    );
}

export default MiniTable;
