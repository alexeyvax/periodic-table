import React from "react";
import { createPortal } from "react-dom";
import { FormattedMessage, useIntl } from "react-intl";

import { useData } from "../../context/Data";
import useClickOutside from "../../hooks/useClickOutside";
import useEscapeKey from "../../hooks/useEscapeKey";
import convertKelvinToCelsius from "../../utils/convertKelvinToCelsius";
import Link from "../Link";
import ModelViewer from "../ModelViewer";
import PrevElementButton from "./Controls/Prev";
import NextElementButton from "./Controls/Next";
import renderElectronConfiguration from "./utils/renderElectronConfiguration";
import renderValue from "./utils/renderValue";
import renderValueWithLinks from "./utils/renderValueWithLinks";
import styles from "./styles.css";

function ElementPopup() {
    const intl = useIntl();
    const { selectedElement, onSelectElement } = useData();

    const ref = useClickOutside(onSelectElement(undefined));
    useEscapeKey(onSelectElement(undefined));

    if (!selectedElement) {
        return null;
    }

    return createPortal(
        <div className={styles.backOverlay}>
            <div ref={ref} className={styles.container}>
                <button
                    title={intl.formatMessage({ id: "ClosePopupButtonTitle" })}
                    className={styles.closeButton}
                    onClick={onSelectElement(undefined)}
                />
                <PrevElementButton />
                <NextElementButton />
                <div className={styles.scrollContainer}>
                    <div className={styles.contentContainer}>
                        <ModelViewer
                            alt={selectedElement.summary}
                            src={selectedElement.bohr_model_3d}
                        />
                        <h2>{`${selectedElement.name} (${selectedElement.symbol})`}</h2>
                        <p>
                            {selectedElement.summary}
                            {" "}
                            <Link
                                href={selectedElement.source}
                                className={styles.linkToSource}
                                content={<FormattedMessage id="LinkToSource" />}
                            />
                        </p>
                        <ul>
                            <li>
                                <FormattedMessage id="Appearance" />
                                {renderValue(selectedElement.appearance)}
                            </li>
                            <li>
                                <FormattedMessage id="StandardAtomicWeight" />
                                {renderValue(selectedElement.atomic_mass)}
                            </li>
                        </ul>
                        <h3>
                            <FormattedMessage
                                id="NameInPeriodicTable"
                                values={{ name: selectedElement.name }}
                            />
                        </h3>
                        <ul>
                            <li>
                                <FormattedMessage id="AtomicNumber" />
                                {renderValue(selectedElement.number)}
                            </li>
                            <li>
                                <FormattedMessage id="Group" />
                                {renderValue(selectedElement.group)}
                            </li>
                            <li>
                                <FormattedMessage id="Period" />
                                {renderValue(selectedElement.period)}
                            </li>
                            <li>
                                <FormattedMessage id="Block" />
                                {renderValue(selectedElement.block)}
                            </li>
                        </ul>
                        <h3><FormattedMessage id="PhysicalProperties" /></h3>
                        <ul>
                            <li>
                                <FormattedMessage id="PhaseAtSTP" />
                                {renderValue(selectedElement.phase)}
                            </li>
                            <li>
                                <FormattedMessage id="MeltingPoint" />
                                <span className={styles.temperature}>
                                    {renderValue(selectedElement.melt, { dimension: "K" })}
                                    {renderValue(convertKelvinToCelsius(selectedElement.melt), { dimension: "°C", returnEmpty: true, hasBrackets: true })}
                                </span>
                            </li>
                            <li>
                                <FormattedMessage id="BoilingPoint" />
                                <span className={styles.temperature}>
                                    {renderValue(selectedElement.boil, { dimension: "K" })}
                                    {renderValue(convertKelvinToCelsius(selectedElement.boil), { dimension: "°C", returnEmpty: true, hasBrackets: true })}
                                </span>
                            </li>
                            <li>
                                <FormattedMessage id="Density" />
                                {renderValue(selectedElement.density, { dimension: "g/L" })}
                            </li>
                            <li>
                                <FormattedMessage id="MolarHeatCapacity" />
                                {renderValue(selectedElement.molar_heat, { dimension: "J/(mol·K)" })}
                            </li>
                        </ul>
                        <h3><FormattedMessage id="AtomicProperties" /></h3>
                        <ul>
                            <li>
                                <FormattedMessage id="ElectronConfiguration" />
                                <span className={styles.electronConfiguration}>
                                    {renderElectronConfiguration(selectedElement.electron_configuration)}
                                    {renderElectronConfiguration(selectedElement.electron_configuration_semantic)}
                                </span>
                            </li>
                            <li>
                                <FormattedMessage id="ElectronsPerShell" />
                                {renderValue(selectedElement.shells.join(", "))}
                            </li>
                            <li>
                                <FormattedMessage id="ElectronegativityPaulingScale" />
                                {renderValue(selectedElement.electronegativity_pauling)}
                            </li>
                            <li>
                                <FormattedMessage id="IonizationEnergies" />
                                {renderValue(selectedElement.ionization_energies.join(", "))}
                            </li>
                        </ul>
                        <h3><FormattedMessage id="History" /></h3>
                        <ul>
                            <li>
                                <FormattedMessage id="Naming" />
                                {renderValueWithLinks({
                                    href: selectedElement.naming_links,
                                    content: selectedElement.naming
                                })}
                            </li>
                            <li>
                                <FormattedMessage id="DiscoveredBy" />
                                {renderValueWithLinks({
                                    href: selectedElement.discovered_by_links,
                                    content: selectedElement.discovered_by
                                })}
                            </li>
                        </ul>
                        <img
                            src={selectedElement.image.url}
                            alt={selectedElement.image.title}
                            className={styles.image}
                        />
                        <small>{selectedElement.image.title}</small>
                        <small className={styles.attribution}>{selectedElement.image.attribution}</small>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}

export default ElementPopup;
