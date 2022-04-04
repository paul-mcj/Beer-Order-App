// Components
import CartHeaderButton from "../ui/CartHeaderButton";

// React Router DOM
import { Link } from "react-router-dom";

//React & Hooks
import { useContext } from "react";

// Context
import ErrorContext from "../../context/error/ErrorContext";

const Navbar = () => {
    const { error } = useContext(ErrorContext);

    const clickable = (
        <Link className="text-2xl" to="/">
            <button className="font-bold">Beer Order App</button>
        </Link>
    );

    const disabled = (
        <div className="text-2xl">
            <h1 className="font-bold">Beer Order App</h1>
        </div>
    );

    return (
        <nav className="navbar bg-base-100 mt-5 shadow-xl rounded-box flex ">
            <div className="flex-1">{!error ? clickable : disabled}</div>
            <div className="flex-none">{!error && <CartHeaderButton />}</div>
        </nav>
    );
};

export default Navbar;
