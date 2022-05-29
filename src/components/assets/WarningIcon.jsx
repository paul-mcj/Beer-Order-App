// react-icons
import { TiWarningOutline as Warning } from "react-icons/ti";

// components
import IconWrapper from "../layout/IconWrapper";

const WarningIcon = () => {
    return (
        <IconWrapper>
            <Warning className="text-warning text-6xl xsm:text-8xl animate-pulse" />
        </IconWrapper>
    );
};

export default WarningIcon;
