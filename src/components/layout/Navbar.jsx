// Components
import CartHeaderButton from "./CartHeaderButton";

const Navbar = () => {
    return (
        <nav className="navbar bg-base-100 mt-5 mb-40 shadow-xl rounded-box">
            <div className="flex-1">
                <h1 className="text-xl font-bold">Beer Order App</h1>
            </div>
            <div className="flex-none">
                <CartHeaderButton />
            </div>
        </nav>
    );
};

export default Navbar;
