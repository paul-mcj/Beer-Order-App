// react-icons
import { ImSpinner9 as Loading } from "react-icons/im";

const LoadingIcon = () => {
    return (
        <div className="flex flex-col items-center gap-5">
            <Loading className="animate-spin text-5xl" />
        </div>
    );
};

export default LoadingIcon;
