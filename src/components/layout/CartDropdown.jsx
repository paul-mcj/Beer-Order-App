// React & Hooks
import { useContext, Fragment } from "react";

// Context
import CartContext from "../../context/CartContext";

// React Router Dom
import { Link } from "react-router-dom";

const CartDropdown = () => {
    // context
    // const cartContext = useContext(CartContext);

    // dispatch action to reducer when the button click needs to be handled
    // const handleClick = cartContext.dispatch({ type: "OPEN_CART" });

    return (
        <Fragment>
            <span className="font-bold text-xl card-title">x Items</span>
            <span className="text-info">Total: $x</span>
            <div className="card-ac">
                <Link to="/cart">
                    <button className="btn btn-accent">View Cart</button>
                </Link>
            </div>
        </Fragment>
    );
};

export default CartDropdown;
