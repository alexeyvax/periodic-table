import { useEffect, useRef } from "react";

function useClickOutside(callback: () => void) {
    const ref = useRef<HTMLDivElement>(null);

    function handleClick(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
            callback();
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    return ref;
}

export default useClickOutside;
