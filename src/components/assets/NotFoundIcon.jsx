// react-icons
import { MdOutlineReportGmailerrorred as NotFound } from "react-icons/md";

// components
import IconWrapper from "../layout/IconWrapper";

const NotFoundIcon = () => {
    return (
        <IconWrapper>
            <NotFound className="text-error text-6xl xsm:text-8xl animate-pulse" />
        </IconWrapper>
    );
};

export default NotFoundIcon;
