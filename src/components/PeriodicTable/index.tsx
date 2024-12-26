import React from "react";

import Periods from "./Periods";
import Groups from "./Groups";
import Rows from "./Rows";
import styles from "./styles.css";

function PeriodicTable() {
    return (
        <div className={styles.container}>
            <Periods />
            <div className={styles.scrollContainer}>
                <div>
                    <Groups />
                    <Rows />
                </div>
            </div>
        </div>
    );
}

export default PeriodicTable;
