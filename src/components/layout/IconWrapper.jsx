// react
import React from "react";
import PropTypes from "prop-types";

const IconWrapper = ({ children }) => {
    return <div className="flex flex-col self-center items-center">{children}</div>;
};

IconWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default IconWrapper;
