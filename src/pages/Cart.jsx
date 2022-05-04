// components
import Receipt from "../components/layout/Receipt";
import Header from "../components/layout/Header";
import PageWrapper from "../components/layout/PageWrapper";

// react-router-dom
import { Link } from "react-router-dom";

// context
import CartContext from "../context/cart/CartContext";

// react
import { useContext } from "react";
import TextButton from "../components/ui/TextButton";

const Cart = () => {
    const { beers } = useContext(CartContext);

    if (!beers.find((beer) => beer.amount > 0)) {
        return (
            <PageWrapper>
                <Header>Looks like your cart is empty!</Header>
                <div className="grid grid-rows-1 justify-items-center">
                    <Link to="/">
                        <TextButton btnText="go home" animationType={"pulseDeep"} />
                    </Link>
                </div>
            </PageWrapper>
        );
    }

    return (
        <div className="mt-10">
            <PageWrapper>
                <Header>Your Cart</Header>
                <Receipt />
            </PageWrapper>
        </div>
    );
};

export default Cart;
