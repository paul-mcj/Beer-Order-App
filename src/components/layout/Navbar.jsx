// Components
import CartHeaderButton from "./CartHeaderButton";

// React Router DOM
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar bg-base-100 mt-5 shadow-xl rounded-box flex">
            <div className="flex-1">
                <Link className="text-2xl" to="/">
                    <button className="font-bold">Beer Order App</button>
                </Link>
            </div>
            <div className="flex-none">
                <CartHeaderButton />
            </div>
        </nav>
    );
};

export default Navbar;
