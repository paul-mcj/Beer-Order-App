// react
import PropTypes from "prop-types";

// react-icons
import { MdCancelPresentation as Exit } from "react-icons/md";

// components
import IconWrapper from "../layout/IconWrapper";

const ExitIcon = ({ handleClick }) => {
    return (
        <IconWrapper>
            <button onClick={handleClick} className="absolute right-0 top-0">
                <Exit className="text-base-content hover:text-secondary-content" />
            </button>
        </IconWrapper>
    );
};

ExitIcon.propTypes = {
    handleClick: PropTypes.func,
};

export default ExitIcon;
