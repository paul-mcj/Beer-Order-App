// React & Hooks
import { useContext, Fragment } from "react";

// Context
import CartContext from "../../context/cart/CartContext";

// React Router Dom
import { Link } from "react-router-dom";

const CartDropdown = () => {
    const { totalPrice } = useContext(CartContext);

    // dispatch action to reducer when the button click needs to be handled
    // const handleClick = cartContext.dispatch({ type: "NOT_LOADING" });

    return (
        <Fragment>
            <span className="text-info">Total: ${totalPrice.toFixed(2)}</span>
            <div className="card-ac">
                <Link to="/cart">
                    <button className="btn btn-accent">View Cart</button>
                </Link>
            </div>
        </Fragment>
    );
};

export default CartDropdown;
