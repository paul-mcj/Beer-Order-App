// react
import PropTypes from "prop-types";

const PaginationButton = ({ children, active, setCurrentPage }) => {
    if (active)
        return (
            <button
                className="btn btn-active btn-base xsm:btn-lg btn-disabled"
                onClick={setCurrentPage.bind(null, +children)}
            >
                <span className="text-xs xsm:text-sm">{children}</span>
            </button>
        );
    else
        return (
            <button
                className="btn btn-ghost hover:text-primary btn-base xsm:btn-lg"
                onClick={setCurrentPage.bind(null, +children)}
            >
                <span className="text-xs xsm:text-sm">{children}</span>
            </button>
        );
};

PaginationButton.propTypes = {
    children: PropTypes.node.isRequired,
    active: PropTypes.bool,
    setCurrentPage: PropTypes.func,
};

export default PaginationButton;
