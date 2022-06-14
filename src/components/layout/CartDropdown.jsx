// react & hooks
import { useContext, Fragment } from "react";

// context
import CartContext from "../../context/cart/CartContext";

// react-router-dom
import { Link } from "react-router-dom";

// components
import Paragraph from "./Paragraph";

const CartDropdown = () => {
    // destruct value from context to use dynamically in component
    const { totalPrice } = useContext(CartContext);

    return (
        <Fragment>
            <span className="text-primary">
                <Paragraph>Total:</Paragraph>
                <Paragraph>${Math.abs(totalPrice).toFixed(2)}</Paragraph>
            </span>
            <Link to="/cart">
                <button className="mt-5 btn rounded uppercase font-bold btn-secondary hover:bg-secondary-focus hover:text-base-300 text-xs xsm:text-sm sm:text-base">
                    View Cart
                </button>
            </Link>
        </Fragment>
    );
};

export default CartDropdown;
