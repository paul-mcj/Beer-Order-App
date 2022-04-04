// react & hooks
import { Fragment, useContext } from "react";

// react-router-dom
import { Link } from "react-router-dom";

// context
import ErrorContext from "../../context/error/ErrorContext";

// components
import Button from "../ui/Button";

const Footer = () => {
    const { error } = useContext(ErrorContext);

    if (!error) {
        return (
            <footer className="justify-self-center self-end">
                <div className="flex gap-3 justify-center mb-3">
                    <Link to="/">
                        <Button className="btn-primary text-lg">Home</Button>
                    </Link>
                    <Link to="/about">
                        <Button className="btn-primary text-lg">About</Button>
                    </Link>
                </div>
                <p className="mb-5 text-sm text-black">
                    Copyright &copy;2022 Paul McJannet | All Rights Reserved
                </p>
            </footer>
        );
    } else {
        return <Fragment />;
    }
};

export default Footer;
