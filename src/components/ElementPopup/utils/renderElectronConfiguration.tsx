import React from "react";

const re = /[a-zA-Z]([0-9]+)(\s|$)/g;

const renderElectronConfiguration = (value: string) => {
    const htmlString = value.replace(re, (match, degree, space) => (
        `${match[0]}<sup>${degree}</sup>${space}`
    ));

    return (
        <span dangerouslySetInnerHTML={{ __html: htmlString }} />
    );
};

export default renderElectronConfiguration;
