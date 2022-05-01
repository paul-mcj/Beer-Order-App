// react-icons
import { ImSpinner9 as Loading } from "react-icons/im";

// components
import IconWrapper from "../layout/IconWrapper";

const LoadingIcon = () => {
    return (
        <IconWrapper>
            <Loading className="animate-spinSlow text-5xl text-primary" />
        </IconWrapper>
    );
};

export default LoadingIcon;
