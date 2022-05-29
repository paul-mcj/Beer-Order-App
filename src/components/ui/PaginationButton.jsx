// react
import PropTypes from "prop-types";

const PaginationButton = ({ children, active, setCurrentPage }) => {
    if (active)
        return (
            <button
                className="btn btn-active btn-disabled"
                onClick={setCurrentPage.bind(null, +children)}
            >
                <span className="text-xs">{children}</span>
            </button>
        );
    else
        return (
            <button
                className="btn btn-ghost hover:text-primary"
                onClick={setCurrentPage.bind(null, +children)}
            >
                <span className="text-xs">{children}</span>
            </button>
        );
};

PaginationButton.propTypes = {
    children: PropTypes.node.isRequired,
    active: PropTypes.bool,
    setCurrentPage: PropTypes.func,
};

export default PaginationButton;
