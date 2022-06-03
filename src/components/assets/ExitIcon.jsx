// react-icons
import { MdCancelPresentation as Exit } from "react-icons/md";

// components
import IconWrapper from "../layout/IconWrapper";

const ExitIcon = () => {
    return (
        <IconWrapper>
            <Exit className="text-base-content hover:text-secondary-content" />
        </IconWrapper>
    );
};

export default ExitIcon;
