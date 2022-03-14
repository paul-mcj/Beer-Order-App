// Icons
import { AiOutlineShoppingCart as CartIcon } from "react-icons/ai";

// Components
import Card from "./Card";
import CartDropdown from "./CartDropdown";

const CartHeaderButton = () => {
    return (
        <div className="dropdown dropdown-left">
            <label tabIndex="0" className="btn btn-ghost rounded-btn">
                <div className="indicator">
                    <CartIcon className="w-7 h-7" />
                    <span className="badge badge-secondary indicator-item">8</span>
                </div>
            </label>
            <div tabIndex="0" className="mt-3 dropdown-content bg-base-100 shadow">
                <Card>
                    <CartDropdown />
                </Card>
            </div>
        </div>
    );
};

export default CartHeaderButton;
