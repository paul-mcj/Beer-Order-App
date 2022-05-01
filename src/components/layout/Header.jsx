// react
import PropTypes from "prop-types";

const Header = ({ children }) => {
    return (
        <header className="font-bold text-2xl text-center text-secondary-focus mb-10">
            {children}
        </header>
    );
};

Header.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Header;
