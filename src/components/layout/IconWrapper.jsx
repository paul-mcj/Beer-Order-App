// react
import PropTypes from "prop-types";

const IconWrapper = ({ children }) => {
    return (
        <div className="flex flex-col self-center items-center">
            <div className="text-xl xsm:text-2xl">{children}</div>
        </div>
    );
};

IconWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default IconWrapper;
