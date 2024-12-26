import React from "react";
import cx from "classnames";

import { tableTypeToPlacementMap } from "../../../constants/table";
import sharedStyles from "../../../sharedStyles.css";
import Cell from "../Cell";
import styles from "./styles.css";
import { useData } from "../../../context/Data";

function Rows() {
    const { tableType } = useData();

    const placement = tableTypeToPlacementMap[tableType];

    return (
        <ul className={styles.list}>
            {placement.map((row, rowIndex) => (
                <li
                    key={rowIndex}
                    className={cx(sharedStyles.row, styles.row)}
                >
                    <ul>
                        {row.map((cell, cellIndex) => (
                            <Cell
                                key={cellIndex}
                                cell={cell}
                            />
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
}

export default Rows;
