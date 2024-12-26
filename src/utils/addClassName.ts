type Params = {
    element: HTMLElement;
    isAddClassName: boolean;
    className: string;
};

function addClassName({ element, isAddClassName, className }: Params) {
    if (isAddClassName) {
        element.classList.add(className);
    } else {
        element.classList.remove(className);
    }
};

export function hideBody(isHide: boolean) {
    addClassName({
        element: document.body,
        isAddClassName: isHide,
        className: "hide"
    });
}
