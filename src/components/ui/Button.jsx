// react
import PropTypes from "prop-types";

const Button = ({ children, handleClick }) => {
    return (
        <button
            className="btn btn-ghost mx-2 hover:bg-secondary-focus hover:text-black"
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
