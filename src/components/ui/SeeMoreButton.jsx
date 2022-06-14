// react & hooks
import PropTypes from "prop-types";
import useAnimation from "../../hooks/use-animation";

// components
import DropdownIcon from "../assets/DropdownIcon";
import Button from "./Button";

const SeeMoreButton = ({ handleClick }) => {
    // custom hook needed to display animation after user inactivity
    const { shouldAnimate } = useAnimation();
    const setAnimation = shouldAnimate ? "animate-bounceDown" : "";

    return (
        <div className="mx-auto mt-10">
            <div className={setAnimation}>
                <Button handleClick={handleClick}>
                    <DropdownIcon />
                </Button>
            </div>
        </div>
    );
};

SeeMoreButton.propTypes = {
    handleClick: PropTypes.func.isRequired,
};

export default SeeMoreButton;
