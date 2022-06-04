// react
import PropTypes from "prop-types";

const Paragraph = ({ children }) => {
    return (
        <p className="text-center leading-6 xsm:leading-7 sm:leading-8 tablet:leading-9 lg:leading-10 text-sm xsm:text-base sm:text-lg tablet:text-xl lg:text-2xl">
            {children}
        </p>
    );
};

Paragraph.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Paragraph;
