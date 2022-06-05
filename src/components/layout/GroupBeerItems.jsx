// react
import PropTypes from "prop-types";

const GroupBeerItems = ({ children }) => {
    return (
        <div className="flex flex-col gap-3 xsm:gap-4 sm:gap-5 tablet:gap-6 px-4 xsm:px-6 tablet:px-12">
            {children}
        </div>
    );
};

GroupBeerItems.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GroupBeerItems;
