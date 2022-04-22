// react & hooks
import { Fragment, useContext } from "react";

// context
import ErrorContext from "../../context/error/ErrorContext";

const Footer = () => {
    const { error } = useContext(ErrorContext);

    if (!error) {
        return (
            <footer className="justify-self-center">
                <p className="my-5 text-sm text-primary-content">
                    Copyright &copy;2022 Paul McJannet | All Rights Reserved
                </p>
            </footer>
        );
    } else {
        return <Fragment />;
    }
};

export default Footer;
