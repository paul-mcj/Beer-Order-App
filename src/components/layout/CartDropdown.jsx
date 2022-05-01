// react & hooks
import { useContext, Fragment } from "react";

// context
import CartContext from "../../context/cart/CartContext";

// react-router-dom
import { Link } from "react-router-dom";

const CartDropdown = () => {
    const { totalPrice } = useContext(CartContext);

    return (
        <Fragment>
            <span className="text-primary">
                <p className="text-center">Total:</p>
                <p className="text-center">$ {Math.abs(totalPrice).toFixed(2)}</p>
            </span>
            <Link to="/cart">
                <button className="btn border-none btn-secondary hover:bg-secondary-focus hover:text-base-300">
                    View Cart
                </button>
            </Link>
        </Fragment>
    );
};

export default CartDropdown;
