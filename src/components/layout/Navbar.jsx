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

    return (
        <nav className="navbar bg-base-100 mt-5 shadow-xl rounded-box flex px-10">
            <div className="flex-1 text-2xl font-bold">Beer Order App</div>
            <div className="flex flex-end justify-between">
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
