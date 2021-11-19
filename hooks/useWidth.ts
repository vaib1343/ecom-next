import { useEffect, useState } from "react";

const useScreenSize = () => {
    const [width, setWidth] = useState<number>();
    const [height, setHeight] = useState<number>();

    useEffect(() => {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }, [window.innerHeight, window.innerWidth]);
    return { height, width };
};

export default useScreenSize;
