// react & hooks
import PropTypes from "prop-types";

// components
import PaginationButton from "./PaginationButton";

const Pagination = ({ pageNum, setCurrentPage }) => {
    if (pageNum === 1) {
        return (
            <div className="justify-center btn-group mt-3">
                <PaginationButton active setCurrentPage={setCurrentPage}>
                    1
                </PaginationButton>
                <PaginationButton setCurrentPage={setCurrentPage}>2</PaginationButton>
                <PaginationButton setCurrentPage={setCurrentPage}>3</PaginationButton>
            </div>
        );
    }
    if (pageNum === 2) {
        return (
            <div className="justify-center btn-group mt-3">
                <PaginationButton setCurrentPage={setCurrentPage}>1</PaginationButton>
                <PaginationButton active setCurrentPage={setCurrentPage}>
                    2
                </PaginationButton>
                <PaginationButton setCurrentPage={setCurrentPage}>3</PaginationButton>
            </div>
        );
    } else
        return (
            <div className="justify-center btn-group mt-3">
                <PaginationButton setCurrentPage={setCurrentPage}>1</PaginationButton>
                <PaginationButton setCurrentPage={setCurrentPage}>2</PaginationButton>
                <PaginationButton active setCurrentPage={setCurrentPage}>
                    3
                </PaginationButton>
            </div>
        );
};

Pagination.propTypes = {
    setCurrentPage: PropTypes.func,
    pageNum: PropTypes.number,
};

export default Pagination;
