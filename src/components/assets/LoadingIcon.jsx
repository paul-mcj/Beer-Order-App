// react-icons
import { ImSpinner9 as Loading } from "react-icons/im";

// components
import IconWrapper from "../layout/IconWrapper";

const LoadingIcon = () => {
    return (
        <IconWrapper>
            <Loading className="animate-spinSlow text-3xl xsm:text-4xl sm:text-5xl tablet:text-6xl lg:text-7xl text-primary" />
        </IconWrapper>
    );
};

export default LoadingIcon;
