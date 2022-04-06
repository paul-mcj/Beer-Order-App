// react & hooks
import PropTypes from "prop-types";

const Card = ({ children }) => {
    return (
        <article className="card card-bordered border-white">
            <div className="card-body">{children}</div>
        </article>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Card;
