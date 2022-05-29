// react
import PropTypes from "prop-types";

const PageWrapper = ({ children }) => {
    return <section className="p-12 xsm:px-10">{children}</section>;
};

PageWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PageWrapper;
