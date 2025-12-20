// react
import { useContext } from "react";

// components
import Card from "./Card";
import CartDropdown from "./CartDropdown";
import CartIcon from "../assets/CartIcon";

// context
import CartContext from "../../context/cart/CartContext";

const CartHeaderIcon = () => {
	// destruct value from context to use dynamically in component
	const { totalItems } = useContext(CartContext);

	return (
		<div className="p-2 tablet:btn-lg dropdown lg:dropdown-hover dropdown-bottom cursor-pointer">
			<label tabIndex="0">
				<div className="indicator">
					<CartIcon />
					<span className="badge badge-secondary badge-sm badge-outline indicator-item -my-1 -mx-1">
						{totalItems}
					</span>
				</div>
			</label>
			<div
				tabIndex="0"
				className="dropdown-content rounded bg-base-300 cursor-pointer">
				<Card>
					<CartDropdown />
				</Card>
			</div>
		</div>
	);
};

export default CartHeaderIcon;
