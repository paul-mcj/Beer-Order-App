// react & hooks
import PropTypes from "prop-types";
import { useState } from "react";

const Pagination = ({ pageNum, setCurrentPage }) => {
    // const [pageState, setPageState] = useState(paginationBeers);

    const pageOne = () => {
        setCurrentPage(() => 1);
    };

    const pageTwo = () => {
        setCurrentPage(() => 2);
    };

    const pageThree = () => {
        setCurrentPage(() => 3);
    };

    return (
        <div className="justify-center btn-group">
            {/* {pageNum === 1 && ( */}
            <button className="btn btn-ghost hover:text-accent" onClick={pageOne}>
                1
            </button>
            {/* )} */}
            <button className="btn btn-ghost hover:text-accent" onClick={pageTwo}>
                2
            </button>
            <button className="btn btn-ghost hover:text-accent" onClick={pageThree}>
                3
            </button>
        </div>
    );
};

Pagination.propTypes = {
    // beers: PropTypes.array.isRequired,
    // fixme: is required
    // paginationBeers: PropTypes.number,
};

export default Pagination;
