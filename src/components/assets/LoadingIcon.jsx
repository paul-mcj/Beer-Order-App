// react-icons
import { ImSpinner9 as Loading } from "react-icons/im";

// components
import IconWrapper from "../layout/IconWrapper";

const LoadingIcon = () => {
    return (
        <IconWrapper>
            <Loading className="animate-spin text-5xl" />
        </IconWrapper>
    );
};

export default LoadingIcon;
