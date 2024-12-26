import React from "react";
import { FormattedMessage } from "react-intl";

import styles from "./styles.css";

const asideCategories = [
    <FormattedMessage id="Lanthanides" />,
    <FormattedMessage id="Actinides" />
];

function AsideCategories() {
    return (
        <ul className={styles.categories}>
            {asideCategories.map((asideCategory, asideCategoryIndex) => (
                <li
                    key={`${asideCategoryIndex}`}
                    className={styles.category}
                >
                    {asideCategory}
                </li>
            ))}
        </ul>
    );
}

export default AsideCategories;
