import React from "react";

import { SupportLink } from "../../../types";
import styles from "./styles.css";

type Props = {
    data: SupportLink;
    onCopyAddressText: (address: string) => () => void;
};

function SupportItem({ data, onCopyAddressText }: Props) {
    return (
        <>
            <h3>{`${data.title} (${data.network})`}</h3>
            <div className={styles.content}>
                <span>{data.coins.join(", ")}</span>
                <div className={styles.address}>
                    <small className={styles.addressText}>{data.address}</small>
                    <button onClick={onCopyAddressText(data.address)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" fill="none">
                            <path d="M20.429 20.179V6.82a.35.35 0 0 0-.123-.27.35.35 0 0 0-.27-.122H6.679c-.107 0-.201.04-.283.122a.367.367 0 0 0-.11.27V20.18c0 .106.037.196.11.27a.388.388 0 0 0 .283.122h13.357a.35.35 0 0 0 .27-.122.35.35 0 0 0 .123-.27ZM22 6.82V20.18c0 .54-.192 1.002-.577 1.387a1.892 1.892 0 0 1-1.387.577H6.679c-.54 0-1.003-.192-1.388-.577a1.891 1.891 0 0 1-.577-1.387V6.82c0-.54.193-1.002.577-1.387a1.892 1.892 0 0 1 1.388-.577h13.357c.54 0 1.002.192 1.387.577.385.385.577.847.577 1.387Zm-4.714-4.714v1.964h-1.572V2.107a.35.35 0 0 0-.123-.27.35.35 0 0 0-.27-.123H1.964c-.106 0-.2.041-.282.123a.367.367 0 0 0-.11.27v13.357c0 .107.036.2.11.283a.41.41 0 0 0 .282.11H3.93v1.572H1.964c-.54 0-1.002-.193-1.387-.577A1.892 1.892 0 0 1 0 15.464V2.107C0 1.567.192 1.105.577.72A1.891 1.891 0 0 1 1.964.143h13.357c.54 0 1.003.192 1.388.577.384.385.577.847.577 1.387Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}

export default SupportItem;
