// react
import PropTypes from "prop-types";

// react-icons
import { BiLinkExternal as MoreInfo } from "react-icons/bi";

// components
import IconWrapper from "../layout/IconWrapper";

const ExternalIcon = ({ handleClick }) => {
    return (
        <IconWrapper>
            <button onClick={handleClick}>
                <MoreInfo className="hover:text-accent" />
            </button>
        </IconWrapper>
    );
};

ExternalIcon.propTypes = {
    handleClick: PropTypes.func,
};

export default ExternalIcon;
