// react & hooks
import PropTypes from "prop-types";

// components
import PaginationButton from "./PaginationButton";

const Pagination = ({ pageNum, setCurrentPage }) => {
    const activeButton = (num) => (
        <PaginationButton active setCurrentPage={setCurrentPage}>
            {num}
        </PaginationButton>
    );

    const notActiveButton = (num) => (
        <PaginationButton setCurrentPage={setCurrentPage}>{num}</PaginationButton>
    );

    return (
        <div className="justify-center btn-group mt-10">
            {pageNum === 1 ? activeButton(1) : notActiveButton(1)}
            {pageNum === 2 ? activeButton(2) : notActiveButton(2)}
            {pageNum === 3 ? activeButton(3) : notActiveButton(3)}
        </div>
    );
};

Pagination.propTypes = {
    setCurrentPage: PropTypes.func,
    pageNum: PropTypes.number,
};

export default Pagination;
