import React, { ReactNode } from "react";
import cx from "classnames";

import styles from "./styles.css";

type Props = {
    href: string;
    className?: Object | null;
    content: ReactNode;
}

function Link({ href, className, content }: Props) {
    return (
        <a
            href={href}
            className={cx(styles.link, className)}
            target="_blank"
            rel="nofollow noopener"
        >
            {content}
        </a>
    );
}

export default Link;
