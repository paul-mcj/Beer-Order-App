// react
import PropTypes from "prop-types";

const Header = ({ children }) => {
	return (
		<header className="grid mx-auto">
			<div className=" font-bold text-center justify-self-center text-secondary mb-10 text-lg xsm:text-xl sm:text-2xl tablet:text-3xl lg:text-4xl">
				{children}
			</div>
		</header>
	);
};

Header.propTypes = {
	children: PropTypes.node.isRequired
};

export default Header;
