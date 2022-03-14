// React Router DOM
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="justify-self-center self-end">
            <div className="flex gap-3 justify-center mb-3">
                <Link className="btn btn-ghost btn-primary text-lg" to="/">
                    <button>Home</button>
                </Link>
                <Link className="btn btn-ghost btn-primary text-lg" to="/about">
                    <button>About</button>
                </Link>
            </div>
            <p className="mb-5 text-sm text-black">Copyright &copy;2022 | All Rights Reserved</p>
        </footer>
    );
};

export default Footer;
