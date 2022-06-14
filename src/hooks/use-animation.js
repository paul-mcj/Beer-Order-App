// react
import { useState, useEffect } from "react";

const useAnimation = () => {
    // local state
    const [shouldAnimate, setShouldAnimate] = useState(false);

    // after 3 artificial seconds have passed, change state to allow for animation
    useEffect(() => {
        const animationTimer = setTimeout(() => {
            if (!shouldAnimate) setShouldAnimate(() => !shouldAnimate);
        }, 3000);
        return () => {
            clearTimeout(animationTimer);
        };
    }, [shouldAnimate]);

    return { shouldAnimate };
};

export default useAnimation;
