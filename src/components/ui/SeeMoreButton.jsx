// react & hooks
import PropTypes from "prop-types";
import useAnimation from "../../hooks/use-animation";

// components
import DropdownIcon from "../assets/DropdownIcon";
import Button from "./Button";

const SeeMoreButton = ({ handleClick }) => {
    const { shouldAnimate } = useAnimation();

    return (
        <div className="mx-auto mt-10">
            {shouldAnimate ? (
                <div className="animate-bounceDown">
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
