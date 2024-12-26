import React from "react";
import { FormattedMessage } from "react-intl";
import cx from "classnames";

import { categoriesLabels } from "../../constants/table";
import { useData } from "../../context/Data";
import { getClassNameByCategoryLabel } from "../../utils/getClassNameByCategoryLabel";
import sharedStyles from "../../sharedStyles.css";
import styles from "./styles.css";

function Categories() {
    const { selectedCategory, onSelectCategory } = useData();

    return (
        <div className={styles.container}>
            <ul className={styles.categories}>
                {categoriesLabels.map((categoryLabel) => (
                    <li
                        key={categoryLabel}
                        className={
                            cx(
                                styles.category,
                                { [styles.selectedCategory]: selectedCategory === categoryLabel }
                            )
                        }
                    >
                        <button onClick={onSelectCategory(categoryLabel)}>
                            <span
                                className={
                                    cx(
                                        styles.categoryIcon,
                                        sharedStyles[getClassNameByCategoryLabel(categoryLabel)]
                                    )
                                }
                            />
                            <FormattedMessage id={categoryLabel} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;
