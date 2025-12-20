// react
import PropTypes from "prop-types";

const Card = ({ children, hover }) => {
	// defined absolute css classes
	const classes = "card card-bordered border border-base-300 rounded";

	if (hover) {
		return (
			<article
				className={`${classes} ease-in-out hover:bg-base-200 duration-500 transition hover:scale-102`}>
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
	hover: PropTypes.bool
};

export default Card;
