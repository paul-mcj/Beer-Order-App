// react & hooks
import PropTypes from "prop-types";

const Card = ({ children, hover }) => {
    const classes = "card card-bordered border-base-300 rounded";

    if (hover) {
        return (
            <article className={`${classes} hover:bg-base-200`}>
                <div className="card-body">{children}</div>
            </article>
        );
    } else
        return (
            <article className={classes}>
                <div className="card-body">{children}</div>
            </article>
        );
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    hover: PropTypes.bool,
};

export default Card;
