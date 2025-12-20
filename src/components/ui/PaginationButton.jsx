import PropTypes from "prop-types";

const PaginationButton = ({ children, active, setCurrentPage }) => {
	// In v5, use 'btn-active' for the current page.
	// Use 'join-item' if this button is part of a pagination group.
	const btnClass = active
		? "btn-active bg-secondary" // v5 looks great when the active page has a color
		: "btn-ghost hover:text-primary";

	return (
		<button
			// Use 'join-item' to make buttons sit flush against each other
			className={`btn btn-sm p-4 tablet:btn-lg join-item ${btnClass}`}
			onClick={() => setCurrentPage(+children)}>
			<span className="text-xs xsm:text-sm sm:text-base">
				{children}
			</span>
		</button>
	);
};

PaginationButton.propTypes = {
	children: PropTypes.node.isRequired,
	active: PropTypes.bool,
	setCurrentPage: PropTypes.func
};

export default PaginationButton;
