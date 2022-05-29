// react
import PropTypes from "prop-types";

const Header = ({ children }) => {
    return (
        <header className="grid">
            <div className="font-bold text-lg xsm:text-xl text-center justify-self-center text-secondary-focus mb-10 xsm:mt-5">
                {children}
            </div>
        </header>
    );
};

Header.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Header;
