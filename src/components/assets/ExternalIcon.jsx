// react
import PropTypes from "prop-types";

// react-icons
import { BiLinkExternal as MoreInfo } from "react-icons/bi";

const ExternalIcon = ({ handleClick }) => {
    return (
        <button onClick={handleClick} className="ml-5 mt-1 self-start">
            <MoreInfo className="hover:text-accent" />
        </button>
    );
};

ExternalIcon.propTypes = {
    handleClick: PropTypes.func,
};

export default ExternalIcon;
