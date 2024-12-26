import React from "react";

import styles from "./styles.css";
import Link from "../Link";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span>{new Date().getFullYear()}</span>
            <Link
                href="/"
                content="alexeyvax"
                className={styles.link}
            />
        </footer>
    );
};

export default Footer;
