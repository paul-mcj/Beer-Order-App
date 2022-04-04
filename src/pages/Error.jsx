//fixme: Make sure to include in app description that is potential manufacturing of an error is part of showcasing additional routing skills

// context
import ErrorContext from "../context/error/ErrorContext";

// react & kooks
import { useContext } from "react";

// components
import Button from "../components/ui/Button";

// utils
import { redirectToHomePg } from "../utils/functions";

const Error = () => {
    const { message } = useContext(ErrorContext);

    return (
        <div>
            <p>{message}</p>
            <Button handleClick={redirectToHomePg}>here to reload app</Button>
        </div>
    );
};

export default Error;
