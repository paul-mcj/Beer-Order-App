// react
import PropTypes from "prop-types";

const Button = ({ children, handleClick }) => {
    return (
        <button
            className="btn-xs xsm:btn-sm tablet:btn-lg uppercase p-2 font-bold hover:text-secondary-focus"
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    handleClick: PropTypes.func,
};

export default Button;
