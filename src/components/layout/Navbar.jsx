// components
import CartHeaderIcon from "../layout/CartHeaderIcon";
import AboutIcon from "../assets/AboutIcon";
import HomeIcon from "../assets/HomeIcon";
import Button from "../ui/Button";

// react-router-dom
import { Link } from "react-router-dom";

// react & hooks
import { useContext } from "react";

// context
import ErrorContext from "../../context/error/ErrorContext";

const Navbar = () => {
    const { error } = useContext(ErrorContext);

    return (
        <nav className="navbar bg-base-300 mt-5 rounded flex px-10">
            <div className="flex-1 text-3xl font-bold">Beer Order App</div>
            <div className="flex flex-end justify-between gap-5">
                <Link to="/">
                    <Button>
                        <HomeIcon />
                    </Button>
                </Link>
                <Link to="/about">
                    <Button>
                        <AboutIcon />
                    </Button>
                </Link>
                {!error && <CartHeaderIcon />}
            </div>
        </nav>
    );
};

export default Navbar;
