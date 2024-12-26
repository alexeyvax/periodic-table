import React from "react";

import Link from "../../Link";
import renderValue from "./renderValue";

type Params = {
    href: string[] | null;
    content: string | null;
};

const re = /({{.*?}})/;

const renderValueWithLinks = ({ href, content }: Params) => {
    if (!href || !content) {
        return renderValue(content);
    }

    const rawParts = content.split(re).filter(Boolean);
    let counter = 0;

    return (
        <span>
            {rawParts.map((item) => {
                if (item.startsWith("{{") && item.endsWith("}}")) {
                    const link = (
                        <Link
                            key={item}
                            href={href[counter]}
                            content={item.slice(2, -2)}
                        />
                    );
                    counter += 1;

                    return link;
                }

                return item;
            })}
        </span>
    );
};

export default renderValueWithLinks;
