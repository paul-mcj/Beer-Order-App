// react
import PropTypes from "prop-types";

const PaginationButton = ({ children, active, setCurrentPage }) => {
    // css class appended to JSX is dependant on active prop
    let btnState;
    if (active) btnState = "btn-active btn-disabled";
    else btnState = "btn-ghost hover:text-primary";

    return (
        <button
            className={`${btnState} btn btn-sm tablet:btn-lg`}
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
