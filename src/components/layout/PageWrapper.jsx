// react
import PropTypes from "prop-types";

const PageWrapper = ({ children }) => {
	return (
		<section className="px-10 py-14 tablet:px-16 lg:px-52 xl:px-72 2xl:px-96 min-h-screen bg-base-100">
			{children}
		</section>
	);
};

PageWrapper.propTypes = {
	children: PropTypes.node.isRequired
};

export default PageWrapper;
