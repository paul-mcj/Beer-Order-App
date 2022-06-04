// react
import PropTypes from "prop-types";

const BeneathHeader = ({ children }) => {
    return (
        <div className="mb-10 xsm:mb-12 sm:mb-16 tablet:mb-20 lg:mb-24 px-6 lg:px-10 tablet:mt-5">
            {children}
        </div>
    );
};

BeneathHeader.propTypes = {
    children: PropTypes.node.isRequired,
};

export default BeneathHeader;
