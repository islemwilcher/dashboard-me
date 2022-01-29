import { useEffect } from "react";

export default function useBurger(ref, handler) {
    useEffect(() => {
        const listener = event => {
            const el = ref?.current

            if ( !el || el.contains(event.targer)) {
                return
            }
            handler(event)
        }

        return () => {
        }
    }, [ref, handler]);
};

