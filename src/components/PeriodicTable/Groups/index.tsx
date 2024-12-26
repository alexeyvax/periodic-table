import React from "react";
import { FormattedMessage } from "react-intl";
import cx from "classnames";

import { tableTypeToGroupsMap } from "../../../constants/table";
import { useData } from "../../../context/Data";
import sharedStyles from "../../../sharedStyles.css";
import styles from "./styles.css";

function Groups() {
    const { tableType } = useData();

    const groups = tableTypeToGroupsMap[tableType];

    return (
        <div className={styles.container}>
            <h4><FormattedMessage id="GroupsTitle" /></h4>
            <ul className={cx(sharedStyles.groups, styles.list)}>
                {groups.map((group, groupIndex) => (
                    <li
                        key={`${group}-${groupIndex}`}
                        className={sharedStyles.groupItem}
                    >
                        {group}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Groups;
