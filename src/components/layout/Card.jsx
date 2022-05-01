// react & hooks
import PropTypes from "prop-types";

const Card = ({ children, hover }) => {
    if (hover) {
        return (
            <article className="card card-bordered border-base-300 rounded hover:bg-base-200">
                <div className="card-body">{children}</div>
            </article>
        );
    } else
        return (
            <article className="card card-bordered border-base-300 rounded">
                <div className="card-body">{children}</div>
            </article>
        );
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    hover: PropTypes.bool,
};

export default Card;
