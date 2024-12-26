import React, { useCallback } from "react";
import { createPortal } from "react-dom";
import { useIntl } from "react-intl";

import { usePopupState } from "../../context/PopupState";
import { supportLinks } from "../../constants/support";
import useClickOutside from "../../hooks/useClickOutside";
import useEscapeKey from "../../hooks/useEscapeKey";
import SupportItem from "./SupportItem";
import styles from "./styles.css";

function SupportPopup() {
    const intl = useIntl();
    const { onClosePopup } = usePopupState();

    const ref = useClickOutside(onClosePopup);
    useEscapeKey(onClosePopup);

    const onCopyAddressText = useCallback((address: string) => () => {
        try {
            navigator.clipboard.writeText(address);
        } catch (error) {
            console.error(error);
        }
    }, []);

    return createPortal(
        <div className={styles.backOverlay}>
            <div ref={ref} className={styles.container}>
                <button
                    title={intl.formatMessage({ id: "ClosePopupButtonTitle" })}
                    className={styles.closeButton}
                    onClick={onClosePopup}
                />
                <div className={styles.scrollContainer}>
                    <div className={styles.contentContainer}>
                        <ul className={styles.list}>
                            {supportLinks.map((supportLinkData) => (
                                <li key={supportLinkData.title} className={styles.listItem}>
                                    <SupportItem
                                        data={supportLinkData}
                                        onCopyAddressText={onCopyAddressText}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}

export default SupportPopup;
