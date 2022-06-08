// react-icons
import { HiOutlineChevronDoubleDown as Down } from "react-icons/hi";

// components
import IconWrapper from "../layout/IconWrapper";

const DropdownIcon = () => {
    return (
        <IconWrapper>
            <Down className="text-2xl xsm:text-3xl sm:text-4xl" />
        </IconWrapper>
    );
};

export default DropdownIcon;
