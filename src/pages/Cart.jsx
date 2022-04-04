// components
import Button from "../components/ui/Button";
import Receipt from "../components/layout/Receipt";

// react-router-dom
import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <div className="mt-10">
            <header className="font-bold text-lg text-center mb-3">Your Order</header>
            <Link to="/">
                <Button>Go Home</Button>
            </Link>
            <Receipt />
        </div>
    );
};

export default Cart;
