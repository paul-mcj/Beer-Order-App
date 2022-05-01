// react
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// components
import Button from "./Button";

const PlaceOrderButton = ({ handleClick }) => {
    const [shouldAnimate, setShouldAnimate] = useState(false);

    // after 3 seconds of user not clicking the button, add animation for UX
    useEffect(() => {
        const animationTimer = setTimeout(() => {
            if (!shouldAnimate) setShouldAnimate(() => !shouldAnimate);
        }, 3000);
        return () => {
            clearTimeout(animationTimer);
        };
    }, [shouldAnimate]);

    return (
        <div className="mx-auto mt-10">
            {shouldAnimate ? (
                <button
                    onClick={handleClick}
                    className="animate-pulseDeep btn border-none bg-secondary hover:bg-secondary-focus hover:text-base-300 text-secondary-content"
                >
                    place order
                </button>
            ) : (
                <button
                    onClick={handleClick}
                    className="btn border-none bg-secondary hover:bg-secondary-focus hover:text-base-300 text-secondary-content"
                >
                    place order
                </button>
            )}
        </div>
    );
};

PlaceOrderButton.propTypes = { handleClick: PropTypes.func.isRequired };

export default PlaceOrderButton;
