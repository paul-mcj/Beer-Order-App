// components
import CartHeaderIcon from "../layout/CartHeaderIcon";
import Button from "../ui/Button";
import AboutIcon from "../assets/AboutIcon";
import HomeIcon from "../assets/HomeIcon";

// react-router-dom
import { Link } from "react-router-dom";

// react & hooks
import { useContext } from "react";

// context
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
            <div className="flex-1 px-10">{!error ? clickable : disabled}</div>
            <div className="flex flex-end px-10">
                <Link to="/">
                    <Button className="btn-primary text-lg">
                        <HomeIcon />
                    </Button>
                </Link>
                <Link to="/about">
                    <Button className="btn-primary text-lg">
                        <AboutIcon />
                    </Button>
                </Link>
                {!error && <CartHeaderIcon />}
            </div>
        </nav>
    );
};

export default Navbar;
