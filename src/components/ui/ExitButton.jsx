// react & hooks
import PropTypes from "prop-types";

// components
import ExitIcon from "../assets/ExitIcon";

const ExitButton = ({ handleClick }) => {
    return (
        <button onClick={handleClick} className="absolute left-2 top-2">
            <ExitIcon />
        </button>
    );
};

ExitButton.propTypes = {
    handleClick: PropTypes.func,
};

export default ExitButton;
