import { useEffect } from "react";
import { useRef } from "react"

export const useOutsideClick = (cb, when) => {
    const ref = useRef();
    const cbRef = useRef(cb);
    const handler = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            cb()
        }
    }

    useEffect(() => {
        if (when) {
            document.addEventListener('click', handler);
            return () => {
                document.removeEventListener('click',handler)
            }
        }
    }, [when])
    
    return ref
}