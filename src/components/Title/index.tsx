import React from "react";
import { FormattedMessage } from "react-intl";

import Switcher from "../Switcher";
import styles from "./styles.css";
import { useData } from "../../context/Data";
import { AvailableLanguages } from "../../types";

const languages: { label: string; value: AvailableLanguages }[] = [
    { label: "Рус", value: AvailableLanguages.Russian },
    { label: "Eng", value: AvailableLanguages.English }
];

function Title() {
    const { language, onSelectLanguage } = useData();

    return (
        <header className={styles.header}>
            <h1>
                <FormattedMessage id="MainTitle" />
            </h1>
            <Switcher
                options={languages}
                currentValue={language}
                onSelectOption={onSelectLanguage}
            />
        </header>
    );
}

export default Title;
