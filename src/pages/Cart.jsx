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

// framer-motion
import { motion } from "framer-motion";

const Cart = () => {
    const { beers } = useContext(CartContext);

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
                        <Link to="/">
                            <TextButton btnText="go home" animationType="pulseDeep" />
                        </Link>
                    </div>
                </PageWrapper>
            </motion.div>
        );
    }

    return (
        <motion.div
            className="grid h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
        >
            <PageWrapper>
                <Header>Your Cart</Header>
                <Receipt />
            </PageWrapper>
        </motion.div>
    );
};

export default Cart;
