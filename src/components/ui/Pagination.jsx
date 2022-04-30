// react & hooks
import PropTypes from "prop-types";

const Pagination = ({ pageNum, setCurrentPage }) => {
    if (pageNum === 1) {
        return (
            <div className="justify-center btn-group">
                <button
                    className="btn btn-active btn-ghost hover:text-neutral"
                    onClick={setCurrentPage.bind(null, 1)}
                >
                    1
                </button>
                <button
                    className="btn btn-ghost hover:text-primary"
                    onClick={setCurrentPage.bind(null, 2)}
                >
                    2
                </button>
                <button
                    className="btn btn-ghost hover:text-primary"
                    onClick={setCurrentPage.bind(null, 3)}
                >
                    3
                </button>
            </div>
        );
    }
    if (pageNum === 2) {
        return (
            <div className="justify-center btn-group">
                <button
                    className="btn btn-ghost hover:text-primary"
                    onClick={setCurrentPage.bind(null, 1)}
                >
                    1
                </button>
                <button
                    className="btn btn-active btn-ghost hover:text-neutral"
                    onClick={setCurrentPage.bind(null, 2)}
                >
                    2
                </button>
                <button
                    className="btn btn-ghost hover:text-primary"
                    onClick={setCurrentPage.bind(null, 3)}
                >
                    3
                </button>
            </div>
        );
    } else
        return (
            <div className="justify-center btn-group">
                <button
                    className="btn btn-ghost hover:text-primary"
                    onClick={setCurrentPage.bind(null, 1)}
                >
                    1
                </button>
                <button
                    className="btn btn-ghost hover:text-primary"
                    onClick={setCurrentPage.bind(null, 2)}
                >
                    2
                </button>
                <button
                    className="btn btn-active btn-ghost hover:text-neutral"
                    onClick={setCurrentPage.bind(null, 3)}
                >
                    3
                </button>
            </div>
        );
};

Pagination.propTypes = {
    setCurrentPage: PropTypes.func,
    pageNum: PropTypes.number,
};

export default Pagination;
