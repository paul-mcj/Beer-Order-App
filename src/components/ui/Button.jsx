// react
import PropTypes from "prop-types";

const Button = ({ children, handleClick }) => {
    return (
        <button
            className="uppercase p-2 font-bold hover:text-secondary-focus"
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
