// react-icons
import { MdCancelPresentation as Exit } from "react-icons/md";

// components
import IconWrapper from "../layout/IconWrapper";

const ExitIcon = () => {
    return (
        <IconWrapper>
            <Exit className="text-base-content hover:text-secondary-content text-xl xsm:text-2xl sm:text-3xl" />
        </IconWrapper>
    );
};

export default ExitIcon;
