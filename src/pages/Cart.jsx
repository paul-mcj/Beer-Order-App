// components
import Receipt from "../components/layout/Receipt";
import Header from "../components/layout/Header";
import Button from "../components/ui/Button";
import PageWrapper from "../components/layout/PageWrapper";

// react-router-dom
import { Link } from "react-router-dom";

// context
import CartContext from "../context/cart/CartContext";

// react
import { useContext } from "react";

const Cart = () => {
    const { beers } = useContext(CartContext);

    if (!beers.find((beer) => beer.amount > 0)) {
        return (
            <PageWrapper>
                <Header>Looks like your cart is empty!</Header>
                <div className="grid grid-rows-1 justify-items-center mt-5">
                    <Link to="/">
                        <Button>Go Home</Button>
                    </Link>
                </div>
            </PageWrapper>
        );
    }

    return (
        <div className="mt-10">
            <PageWrapper>
                <Header>
                    <div className="mb-10 text-2xl">Your Cart</div>
                </Header>
                <Receipt />
            </PageWrapper>
        </div>
    );
};

export default Cart;
