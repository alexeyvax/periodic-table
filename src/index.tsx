import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";
import { DataContextProvider } from "./context/Data";
import { PopupStateContextProvider } from "./context/PopupState";
import "./styles.css";

const initApp = async () => {
    const container = document.getElementById("root")!;
    const root = createRoot(container);

    root.render(
        <DataContextProvider>
            <PopupStateContextProvider>
                <App />
            </PopupStateContextProvider>
        </DataContextProvider>
    );
};

initApp();
