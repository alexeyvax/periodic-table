import React from "react";
import { FormattedMessage } from "react-intl";
import cx from "classnames";

import { periods } from "../../../constants/table";
import { useData } from "../../../context/Data";
import { TableType } from "../../../types";
import sharedStyles from "../../../sharedStyles.css";
import AsideCategories from "./AsideCategories";
import styles from "./styles.css";

function Periods() {
    const { tableType } = useData();

    return (
        <div className={styles.container}>
            <div className={styles.periodsContainer}>
                <h4><FormattedMessage id="PeriodsTitle" /></h4>
                <ul className={styles.list}>
                    {periods.map((period, periodIndex) => (
                        <li
                            key={`${period}-${periodIndex}`}
                            className={cx(sharedStyles.periodItem, styles.item)}
                        >
                            {period}
                        </li>
                    ))}
                </ul>
            </div>
            {tableType === TableType.long && (
                <AsideCategories />
            )}
        </div>
    );
}

export default Periods;
