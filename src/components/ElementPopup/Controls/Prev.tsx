import React, { useMemo } from "react";
import cx from "classnames";

import { useData } from "../../../context/Data";
import styles from "./styles.css";

function Prev() {
    const { periodicElements, selectedElement, onSelectElement } = useData();

    const prevElement = useMemo(() => {
        const prevElementNumber = selectedElement ? selectedElement.number - 1 : undefined;
        if (!prevElementNumber) {
            return undefined;
        }

        return periodicElements.find((element) => element.number === prevElementNumber);
    }, [selectedElement]);

    if (!prevElement) {
        return null;
    }

    return (
        <button
            title={prevElement.name}
            className={cx(styles.button, styles.prev)}
            onClick={onSelectElement(prevElement)}
        />
    );
}

export default Prev;
