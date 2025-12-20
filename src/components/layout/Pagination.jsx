import PropTypes from "prop-types";
import PaginationButton from "../ui/PaginationButton";

const Pagination = ({ pageNum, setCurrentPage }) => {
	// Helper to render buttons cleanly
	const renderButton = (num) => (
		<PaginationButton
			active={pageNum === num}
			setCurrentPage={setCurrentPage}>
			{num}
		</PaginationButton>
	);

	return (
		<div className="flex justify-center mt-10 tablet:mt-16">
			<div className="join">
				{renderButton(1)}
				{renderButton(2)}
				{renderButton(3)}
			</div>
		</div>
	);
};

Pagination.propTypes = {
	setCurrentPage: PropTypes.func,
	pageNum: PropTypes.number
};

export default Pagination;
