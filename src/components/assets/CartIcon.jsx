// react-icons
import { AiOutlineShoppingCart as Cart } from "react-icons/ai";

// components
import IconWrapper from "../layout/IconWrapper";

const CartIcon = () => {
    return (
        <IconWrapper>
            <Cart className="text-2xl" />
        </IconWrapper>
    );
};

export default CartIcon;
