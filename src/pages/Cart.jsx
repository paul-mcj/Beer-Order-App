// components
import Receipt from "../components/layout/Receipt";
import Header from "../components/layout/Header";
import Button from "../components/ui/Button";

// react-router-dom
import { Link } from "react-router-dom";

// context
import CartContext from "../context/cart/CartContext";

// react
import { Fragment, useContext } from "react";

const Cart = () => {
    const { beers } = useContext(CartContext);

    if (!beers.find((beer) => beer.amount > 0)) {
        return (
            <Fragment>
                <Header>Looks like your cart is empty!</Header>
                <div className="grid grid-rows-1 justify-items-center mt-5">
                    <Link to="/">
                        <Button>Go Home</Button>
                    </Link>
                </div>
            </Fragment>
        );
    }

    return (
        <div className="mt-10">
            <Fragment>
                <Header>
                    <div className="mb-10 text-2xl">Your Cart</div>
                </Header>
                <Receipt />
            </Fragment>
        </div>
    );
};

export default Cart;
