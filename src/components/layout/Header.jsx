// react
import PropTypes from "prop-types";

const Header = ({ children }) => {
    return <header className="font-bold text-xl text-center mb-3">{children}</header>;
};

Header.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Header;
