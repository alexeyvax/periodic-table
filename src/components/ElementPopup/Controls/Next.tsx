import React, { useMemo } from "react";
import cx from "classnames";

import { useData } from "../../../context/Data";
import styles from "./styles.css";

function Next() {
    const { periodicElements, selectedElement, onSelectElement } = useData();

    const nextElement = useMemo(() => {
        const nextElementNumber = selectedElement ? selectedElement.number + 1 : undefined;
        if (!nextElementNumber || nextElementNumber > periodicElements.length) {
            return undefined;
        }

        return periodicElements.find((element) => element.number === nextElementNumber);
    }, [selectedElement]);

    if (!nextElement) {
        return null;
    }

    return (
        <button
            title={nextElement.name}
            className={cx(styles.button, styles.next)}
            onClick={onSelectElement(nextElement)}
        />
    );
}

export default Next;
