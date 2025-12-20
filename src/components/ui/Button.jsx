// react
import PropTypes from "prop-types";

const Button = ({ children, handleClick }) => {
	return (
		<button
			className="btn-xs xsm:btn-sm tablet:btn-lg uppercase p-4 font-bold hover:text-secondary transition-colors duration-200 pointer:cursor"
			onClick={handleClick}>
			{children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	handleClick: PropTypes.func
};

export default Button;
