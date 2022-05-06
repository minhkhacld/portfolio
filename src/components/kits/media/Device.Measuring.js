import { useState, useEffect, useCallback } from "react";

const xSmallMedia = window.matchMedia('(max-width: 599.99px)');
const smallMedia = window.matchMedia('(min-width: 600px) and (max-width: 959.99px)');
const mediumMedia = window.matchMedia('(min-width: 960px) and (max-width: 1279.99px)');
const largeMedia = window.matchMedia('(min-width: 1280px)');


function getScreenSize() {
    return {
        isXSmall: xSmallMedia.matches,
        isSmall: smallMedia.matches,
        isMedium: mediumMedia.matches,
        isLarge: largeMedia.matches,
    };
};

let handlers = [];
const subscribe = handler => handlers.push(handler);
const unsubscribe = handler => {
    handlers = handlers.filter(item => item !== handler);
};

[xSmallMedia, smallMedia, mediumMedia, largeMedia].forEach(media => {
    media.addListener((e) => {
        e.matches && handlers.forEach(handler => handler());
    });
});

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState(getScreenSize());
    const onSizeChanged = useCallback(() => {
        setScreenSize(getScreenSize());
    }, []);

    useEffect(() => {
        subscribe(onSizeChanged);
        return () => {
            unsubscribe(onSizeChanged);
        };
    }, [onSizeChanged]);

    return screenSize;
};

export default useScreenSize;