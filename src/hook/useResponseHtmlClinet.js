import { useState, useEffect } from "react";
function useResponseHtmlClinet() {
    const [w, setW] = useState(document.documentElement.clientWidth);
    const [h, setH] = useState(document.documentElement.clientHeight);
    useEffect(() => {
        const fn = (ev) => {
            setW((w) => document.documentElement.clientWidth);
            setH((h) => document.documentElement.clientHeight);
        };
        window.addEventListener("resize", fn, true);
        return window.removeEventListener("resize", fn);
    }, []);
    return {
        w,
        h,
    };

};
export default useResponseHtmlClinet;