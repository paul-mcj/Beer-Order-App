// react
import PropTypes from "prop-types";

// react-icons
import { BiLinkExternal as MoreInfo } from "react-icons/bi";

const ExternalIcon = ({ handleClick }) => {
    return (
        <button onClick={handleClick} className="absolute right-2 top-2">
            <MoreInfo className="text-accent hover:text-accent-focus" />
        </button>
    );
};

ExternalIcon.propTypes = {
    handleClick: PropTypes.func,
};

export default ExternalIcon;
