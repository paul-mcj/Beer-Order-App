// react
import PropTypes from "prop-types";

const PageWrapper = ({ children }) => {
    return <section className="py-12 px-6">{children}</section>;
};

PageWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PageWrapper;
