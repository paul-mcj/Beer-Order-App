// react-icons
import { GoPlus as More } from "react-icons/go";

// components
import IconWrapper from "../layout/IconWrapper";

const MoreIcon = () => {
    return (
        <IconWrapper>
            <More className="text-xs xsm:text-sm sm:text-base" />
        </IconWrapper>
    );
};

export default MoreIcon;
