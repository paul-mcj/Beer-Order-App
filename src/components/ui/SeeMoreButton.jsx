// react
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

// components
import DropdownIcon from "../assets/DropdownIcon";
import Button from "./Button";

const SeeMoreButton = ({ handleClick }) => {
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
                <div className="animate-bounce">
                    <Button handleClick={handleClick}>
                        <DropdownIcon />
                    </Button>
                </div>
            ) : (
                <Button handleClick={handleClick}>
                    <DropdownIcon />
                </Button>
            )}
        </div>
    );
};

SeeMoreButton.propTypes = {
    handleClick: PropTypes.func.isRequired,
};

export default SeeMoreButton;
