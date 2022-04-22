//fixme: Make sure to include in app description that is potential manufacturing of an error is part of showcasing additional routing skills

// context
import ErrorContext from "../context/error/ErrorContext";

// react & hooks
import { useContext } from "react";

// components
import Button from "../components/ui/Button";

// utils
import { redirectToHomePg } from "../utils/functions";

// react-icons
import { TiWarningOutline as WarningIcon } from "react-icons/ti";

const Error = () => {
    const { message } = useContext(ErrorContext);

    return (
        <div className="flex flex-col items-center gap-5">
            <WarningIcon className="text-9xl" />
            <p className="mb-10">{message}</p>
            <Button handleClick={redirectToHomePg}>reload</Button>
        </div>
    );
};

export default Error;
