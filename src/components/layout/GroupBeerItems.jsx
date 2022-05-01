// react
import PropTypes from "prop-types";

const GroupBeerItems = ({ children }) => {
    return <div className="flex flex-col gap-3">{children}</div>;
};

GroupBeerItems.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GroupBeerItems;
