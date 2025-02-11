import useResizeObserver from "@react-hook/resize-observer";
import { useEffect, useState } from "react";

const useSize = (target) => {
    const [size, setSize] = useState();

    useEffect(() => {
        setSize(target.current.getBoundingClientRect());
    }, [target]);

    useResizeObserver(target, (entry) => setSize(entry.contentRect));
    return size;
};

export default useSize;
