// react
import PropTypes from "prop-types";

const PageWrapper = ({ children }) => {
    return <section className="p-14 xsm:px-12">{children}</section>;
};

PageWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PageWrapper;
