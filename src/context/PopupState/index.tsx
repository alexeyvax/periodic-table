import React, { PropsWithChildren, createContext, useContext, useState, useCallback } from "react";
import { hideBody } from "../../utils/addClassName";

type ValueType = {
    isOpen: boolean;
    onOpenPopup: () => void;
    onClosePopup: () => void;
};

const initialData: ValueType = {
    isOpen: false,
    onOpenPopup: () => {},
    onClosePopup: () => {}
};
const PopupStateContext = createContext(initialData);

const PopupStateContextProvider = ({ children }: PropsWithChildren) => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpenPopup = useCallback(() => {
        setIsOpen(true);
        hideBody(true);
    }, []);
    const onClosePopup = useCallback(() => {
        setIsOpen(false);
        hideBody(false);
    }, []);

    const value = {
        isOpen,
        onOpenPopup,
        onClosePopup
    };

    return (
        <PopupStateContext.Provider value={value}>
            {children}
        </PopupStateContext.Provider>
    );
};

const usePopupState = (): ValueType => useContext(PopupStateContext);

export {
    PopupStateContextProvider,
    usePopupState
};
