// react
import { useContext } from "react";

// components
import Card from "./Card";
import CartDropdown from "./CartDropdown";
import CartIcon from "../assets/CartIcon";

// context
import CartContext from "../../context/cart/CartContext";

const CartHeaderIcon = () => {
    const { totalItems } = useContext(CartContext);

    return (
        <div className="dropdown dropdown-hover mx-2 px-4 dropdown-end">
            <label tabIndex="0">
                <div className="indicator">
                    <CartIcon />
                    <span className="badge badge-secondary indicator-item -my-1 -mx-1">
                        {totalItems}
                    </span>
                </div>
            </label>
            <div tabIndex="0" className="dropdown-content bg-base-100 shadow">
                <Card>
                    <CartDropdown />
                </Card>
            </div>
        </div>
    );
};

export default CartHeaderIcon;
