import {useEffect, RefObject} from "react";

export function useOutsideClosing(ref: RefObject<HTMLElement>, onCloseHandler: () => void,) {
    useEffect(() => {

        function handleClickOutside(event: MouseEvent) {
            // @ts-ignore
            if (ref.current && !ref.current.contains(event.target)) {
                onCloseHandler();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, onCloseHandler]);
};
