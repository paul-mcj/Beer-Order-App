// react
import { useState, useEffect } from "react";

const useAnimation = () => {
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        const animationTimer = setTimeout(() => {
            if (!shouldAnimate) setShouldAnimate(() => !shouldAnimate);
        }, 3000);
        return () => {
            clearTimeout(animationTimer);
        };
    }, [shouldAnimate]);

    return { shouldAnimate, setShouldAnimate };
};

export default useAnimation;
