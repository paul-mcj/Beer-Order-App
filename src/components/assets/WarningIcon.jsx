// react-icons
import { TiWarningOutline as Warning } from "react-icons/ti";

// components
import IconWrapper from "../layout/IconWrapper";

const WarningIcon = () => {
    return (
        <IconWrapper>
            <Warning className="text-warning text-8xl" />
        </IconWrapper>
    );
};

export default WarningIcon;
