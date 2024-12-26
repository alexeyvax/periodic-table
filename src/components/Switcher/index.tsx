import React, { ReactNode } from "react";
import cx from "classnames";

import styles from "./styles.css";

type Props<T> = {
    options: { label: ReactNode; value: T }[];
    currentValue: T;
    onSelectOption: (value: T) => () => void;
};

function Switcher<T>({ options, currentValue, onSelectOption }: Props<T>) {
    return (
        <ul className={styles.container}>
            {options.map((item, index) => (
                <li
                    key={`${item.value}-${index}`}
                    className={cx({ [styles.active]: item.value === currentValue })}
                >
                    <button onClick={onSelectOption(item.value)}>
                        {item.label}
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default Switcher;
