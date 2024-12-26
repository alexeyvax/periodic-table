import { useEffect } from "react";

function useKeyboardHandler(callback: () => void) {
    useEffect(() => {
        function keyDownHandler(event: KeyboardEvent) {
            if (event.key === "Escape") {
                event.preventDefault();
                callback();
            }
        }

        document.addEventListener("keydown", keyDownHandler);

        return () => {
            document.removeEventListener("keydown", keyDownHandler);
        };
    }, []);
}

export default useKeyboardHandler;
