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
	// destruct value from context to make sure users cannot go to cart when an error has occurred
	const { error } = useContext(ErrorContext);

	return (
		<nav className="rounded fixed top-20 left-2 z-10 ">
			<div className="flex flex-col justify-between gap-5">
				<Link
					to="/"
					className="cursor-pointer hover:text-secondary transition-colors duration-300">
					<Button>
						<HomeIcon />
					</Button>
				</Link>
				<Link
					to="/about"
					className="cursor-pointer hover:text-secondary transition-colors duration-300">
					<Button>
						<AboutIcon />
					</Button>
				</Link>
				{!error && (
					<div className="cursor-pointer hover:text-secondary transition-colors duration-300">
						<CartHeaderIcon />
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
