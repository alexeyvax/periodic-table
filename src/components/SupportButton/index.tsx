import React from "react";
import { FormattedMessage } from "react-intl";

import { usePopupState } from "../../context/PopupState";
// @ts-ignore
import bitcoinImage from "../../assets/images/bitcoin.png";
import SupportPopup from "../SupportPopup";
import styles from "./styles.css";

const SupportButton = () => {
    const { isOpen, onOpenPopup } = usePopupState();

    return (
        <>
            <div className={styles.supportButtonContainer}>
                <button
                    className={styles.supportButton}
                    onClick={onOpenPopup}
                >
                    <FormattedMessage id="SupportMeTitle" />
                    <img src={bitcoinImage} alt="Crypto BTC" />
                </button>
            </div>
            {isOpen && <SupportPopup />}
        </>
    );
};

export default SupportButton;
