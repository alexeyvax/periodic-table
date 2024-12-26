// Deprecated!

import React from "react";
import { FormattedMessage } from "react-intl";
import cx from "classnames";

import { tableTypeToPlacementMap } from "../../constants/table";
import { useData } from "../../context/Data";
import { TableType } from "../../types";
import MiniTable from "./MiniTable";
import styles from "./styles.css";

function TableTypeSwitcher() {
    const { tableType, periodicElements, onSelectTableType } = useData();
    const longPlacement = tableTypeToPlacementMap[TableType.long];
    const superLongPlacement = tableTypeToPlacementMap[TableType.superLong];

    return (
        <div className={styles.container}>
            <button
                className={cx(styles.button, { [styles.active]: tableType === TableType.long })}
                onClick={onSelectTableType(TableType.long)}
            >
                <FormattedMessage id="LongTableTypeLabel" />
                <MiniTable placement={longPlacement} periodicElements={periodicElements} />
            </button>
            <button
                className={cx(styles.button, { [styles.active]: tableType === TableType.superLong })}
                onClick={onSelectTableType(TableType.superLong)}
            >
                <FormattedMessage id="SuperLongTableTypeLabel" />
                <MiniTable placement={superLongPlacement} periodicElements={periodicElements} />
            </button>
        </div>
    );
}

export default TableTypeSwitcher;
