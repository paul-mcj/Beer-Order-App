//fixme: Make sure to include in app description that is potential manufacturing of an error is part of showcasing additional routing skills

// context
import ErrorContext from "../context/error/ErrorContext";

// react & hooks
import { useContext } from "react";

// components
import Button from "../components/ui/Button";
import Header from "../components/layout/Header";
import WarningIcon from "../components/assets/WarningIcon";
import PageWrapper from "../components/layout/PageWrapper";

// utils
import { redirectToHomePg } from "../utils/functions";

const Error = () => {
    const { message } = useContext(ErrorContext);

    return (
        <PageWrapper>
            <div className="flex flex-col items-center gap-5">
                <Header>
                    <p className="-mb-10">Warning!</p>
                </Header>
                <WarningIcon />
                <p className="mb-10 text-center">{message}</p>
                <Button handleClick={redirectToHomePg}>reload</Button>
            </div>
        </PageWrapper>
    );
};

export default Error;
