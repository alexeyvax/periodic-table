import React from "react";
import cx from "classnames";

import styles from "./styles.css";

interface ModelViewerWebComponent
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    alt: string;
    src: string;
    ar: boolean;
    "shadow-intensity": string;
    "camera-controls": boolean;
    "touch-action": string;
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "model-viewer": ModelViewerWebComponent;
        }
    }
}

type Props = {
    alt: string;
    src: string;
    className?: string;
};

function ModelViewer({ alt, src, className }: Props) {
    return (
        <div className={cx(styles.container, className)}>
            <model-viewer
                alt={alt}
                src={src}
                ar
                shadow-intensity="0"
                camera-controls
                touch-action="pan-y"
            ></model-viewer>
        </div>
    );
}

export default ModelViewer;
