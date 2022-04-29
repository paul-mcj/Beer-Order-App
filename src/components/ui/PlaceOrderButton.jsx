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
                <div className="animate-pulseDeep">
                    <Button handleClick={handleClick}>Place order</Button>
                </div>
            ) : (
                <Button handleClick={handleClick}>Place order</Button>
            )}
        </div>
    );
};

PlaceOrderButton.propTypes = { handleClick: PropTypes.func.isRequired };

export default PlaceOrderButton;
