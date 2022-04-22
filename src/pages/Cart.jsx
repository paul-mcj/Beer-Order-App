// components
import Receipt from "../components/layout/Receipt";

// context
import CartContext from "../context/cart/CartContext";

// react
import { Fragment, useContext } from "react";

const Cart = () => {
    const { beers } = useContext(CartContext);

    if (!beers.find((beer) => beer.amount > 0)) {
        return <p>Cart is empty! click here to see whats available!</p>;
    }

    return (
        <div className="mt-10">
            <Fragment>
                <header className="font-bold text-lg text-center mb-3">Your Order</header>
                <Receipt />
            </Fragment>
        </div>
    );
};

export default Cart;
