// components
import Receipt from "../components/layout/Receipt";
import Header from "../components/layout/Header";
import BeneathHeader from "../components/layout/BeneathHeader";
import PageWrapper from "../components/layout/PageWrapper";
import TextButton from "../components/ui/TextButton";

// react-router-dom
import { Link } from "react-router-dom";

// context
import CartContext from "../context/cart/CartContext";

// react
import { useContext } from "react";

// framer-motion
import { motion } from "framer-motion";

const Cart = () => {
    // destructure from cart context
    const { beers } = useContext(CartContext);

    // if no beers are in context, return this...
    if (!beers.find((beer) => beer.amount > 0)) {
        return (
            <motion.div
                className="grid h-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.25 } }}
            >
                <PageWrapper>
                    <div className="text-center">
                        <Header>Looks like your cart is empty!</Header>
                        <BeneathHeader>
                            <Link to="/">
                                <TextButton btnText="go home" animationType="pulseDeep" />
                            </Link>
                        </BeneathHeader>
                    </div>
                </PageWrapper>
            </motion.div>
        );
    }

    // ... else display beers user has added to cart
    return (
        <motion.div
            className="grid h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
        >
            <PageWrapper>
                <Header>Your Cart</Header>
                <BeneathHeader>
                    <Receipt />
                </BeneathHeader>
            </PageWrapper>
        </motion.div>
    );
};

export default Cart;
