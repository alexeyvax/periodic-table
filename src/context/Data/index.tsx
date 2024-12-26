import React, { PropsWithChildren, createContext, useContext, useState, useEffect, useCallback } from "react";

import { AvailableLanguages, PeriodicTableElement, ElementCategoryLabel, TableType } from "../../types";
import { hideBody } from "../../utils/addClassName";
import getInitLanguage from "../../utils/getInitLanguage";
import loadLocalesData from "../../utils/loadLocalesData";

type ValueType = {
    tableType: TableType;
    language: AvailableLanguages;
    messages: Record<string, string>;
    isLoading: boolean;
    periodicElements: PeriodicTableElement[];
    selectedElement: PeriodicTableElement | undefined;
    selectedCategory: ElementCategoryLabel | undefined;
    onSelectTableType: (tableType: TableType) => () => void;
    onSelectLanguage: (language: AvailableLanguages) => () => void;
    onSelectElement: (element: PeriodicTableElement | undefined) => () => void;
    onSelectCategory: (categoryLabel: ElementCategoryLabel | undefined) => () => void;
};

const initialData: ValueType = {
    tableType: TableType.long,
    language: getInitLanguage(),
    messages: {},
    isLoading: true,
    periodicElements: [],
    selectedElement: undefined,
    selectedCategory: undefined,
    onSelectTableType: () => () => {},
    onSelectLanguage: () => () => {},
    onSelectElement: () => () => {},
    onSelectCategory: () => () => {}
};
const DataContext = createContext(initialData);

const DataContextProvider = ({ children }: PropsWithChildren) => {
    const [tableType, setTableType] = useState(initialData.tableType);

    const [language, setLanguage] = useState(initialData.language);
    const [messages, setMessages] = useState(initialData.messages);

    const [isLoading, setIsLoading] = useState(initialData.isLoading);
    const [periodicElements, setPeriodicElements] = useState(initialData.periodicElements);
    const [selectedElement, setSelectedElement] = useState(initialData.selectedElement);
    const [selectedCategory, setSelectedCategory] = useState(initialData.selectedCategory);

    const onSelectTableType = useCallback((tableType: TableType) => () => {
        setTableType(tableType);
    }, []);
    const onSelectLanguage = useCallback((language: AvailableLanguages) => () => {
        setLanguage(language);
    }, []);
    const onSelectElement = useCallback((element: PeriodicTableElement | undefined) => () => {
        hideBody(Boolean(element && element?.symbol !== selectedElement?.symbol));
        setSelectedCategory(undefined);
        setSelectedElement(element?.symbol === selectedElement?.symbol ? undefined : element);
    }, [selectedElement]);
    const onSelectCategory = useCallback((categoryLabel: ElementCategoryLabel | undefined) => () => {
        setSelectedCategory(categoryLabel === selectedCategory ? undefined : categoryLabel);
        setSelectedElement(undefined);
    }, [selectedCategory]);

    useEffect(() => {
        async function loadData() {
            try {
                const [
                    loadedMessages,
                    loadedPeriodicTable
                ] = await Promise.all<[
                    { default: Record<string, string> },
                    { default: PeriodicTableElement[] }
                ]>(
                    // @ts-ignore
                    loadLocalesData(language)
                );

                if (loadedMessages && loadedMessages.default && loadedMessages.default.MainTitle) {
                    document.title = loadedMessages.default.MainTitle;
                }

                setMessages(loadedMessages.default);
                setPeriodicElements(loadedPeriodicTable.default);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        }

        loadData();
    }, [language]);

    const value = {
        tableType,
        language,
        messages,
        isLoading,
        periodicElements,
        selectedElement,
        selectedCategory,
        onSelectTableType,
        onSelectLanguage,
        onSelectElement,
        onSelectCategory
    };

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
};

const useData = (): ValueType => useContext(DataContext);

export {
    DataContextProvider,
    useData
};
