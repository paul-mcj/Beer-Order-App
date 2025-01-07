// react & hooks
import PropTypes from "prop-types";

// components
import ExitIcon from "../assets/ExitIcon";

const ExitButton = ({ handleClick }) => {
	return (
		<button onClick={handleClick}>
			<ExitIcon />
		</button>
	);
};

ExitButton.propTypes = {
	handleClick: PropTypes.func
};

export default ExitButton;
