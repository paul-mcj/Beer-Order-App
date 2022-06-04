// react
import PropTypes from "prop-types";

const PaginationButton = ({ children, active, setCurrentPage }) => {
    if (active)
        return (
            <button
                className="btn-active btn-disabled btn btn-sm tablet:btn-lg"
                onClick={setCurrentPage.bind(null, +children)}
            >
                <span className="text-xs xsm:text-sm sm:text-base">{children}</span>
            </button>
        );
    else
        return (
            <button
                className="btn-ghost hover:text-primary btn btn-sm tablet:btn-lg"
                onClick={setCurrentPage.bind(null, +children)}
            >
                <span className="text-xs xsm:text-sm sm:text-base">{children}</span>
            </button>
        );
};

PaginationButton.propTypes = {
    children: PropTypes.node.isRequired,
    active: PropTypes.bool,
    setCurrentPage: PropTypes.func,
};

export default PaginationButton;
