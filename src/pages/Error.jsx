// context
import ErrorContext from "../context/error/ErrorContext";

// react & hooks
import { useContext } from "react";

// components
import TextButton from "../components/ui/TextButton";
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
                    <p>Warning!</p>
                </Header>
                <WarningIcon />
                <p className="mb-10 text-center">{message}</p>
                <TextButton
                    handleClick={redirectToHomePg}
                    btnText="reload"
                    animationType="pulseDeep"
                />
            </div>
        </PageWrapper>
    );
};

export default Error;
