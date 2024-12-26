import React from "react";
import { FormattedMessage, IntlProvider } from "react-intl";
import cx from "classnames";

import { useData } from "../../context/Data";
import PeriodicTable from "../PeriodicTable";
import Categories from "../Categories";
import ElementPopup from "../ElementPopup";
import DonateButton from "../SupportButton";
import Switcher from "../Switcher";
import Title from "../Title";
import Footer from "../Footer";
import { TableType } from "../../types";
import sharedStyles from "../../sharedStyles.css";
import styles from "./styles.css";

const tableTypeOptions = [
    { label: <FormattedMessage id="LongTableTypeLabel" />, value: TableType.long },
    { label: <FormattedMessage id="SuperLongTableTypeLabel" />, value: TableType.superLong }
];

const App = () => {
    const { tableType, messages, language, isLoading, selectedElement, onSelectTableType } = useData();

    return (
        <IntlProvider locale={language} messages={messages}>
            <div className={styles.container}>
                {isLoading
                    ? <div className={styles.loader}>...</div>
                    : (
                        <>
                            <div>
                                <div className={sharedStyles.centerContainer}>
                                    <Title />
                                    <Switcher
                                        options={tableTypeOptions}
                                        currentValue={tableType}
                                        onSelectOption={onSelectTableType}
                                    />
                                </div>
                                <div
                                    className={
                                        cx(
                                            sharedStyles.centerContainer,
                                            {
                                                [sharedStyles.superLongCenterContainer]: tableType === TableType.superLong
                                            }
                                        )
                                    }
                                >
                                    <PeriodicTable />
                                </div>
                                <div className={sharedStyles.centerContainer}>
                                    <Categories />
                                </div>
                            </div>
                            <div>
                                <div className={sharedStyles.centerContainer}>
                                    <DonateButton />
                                </div>
                                <div className={styles.wideContainer}>
                                    <div className={sharedStyles.centerContainer}>
                                        <Footer />
                                    </div>
                                </div>
                            </div>
                            {selectedElement && <ElementPopup />}
                        </>
                    )}
            </div>
        </IntlProvider>
    );
};

export default App;
