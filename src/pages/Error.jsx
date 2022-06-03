// context
import ErrorContext from "../context/error/ErrorContext";

// react & hooks
import { useContext } from "react";

// framer-motion
import { motion } from "framer-motion";

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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
        >
            <PageWrapper>
                <div className="flex flex-col items-center h-full px-6">
                    <Header>
                        <p>Warning!</p>
                    </Header>
                    <WarningIcon />
                    <p className="text-center leading-6 xsm:leading-8 mt-6 text-sm xsm:text-base">
                        {message ? message : "Something went wrong. Please reload the application."}
                    </p>
                    <TextButton
                        handleClick={redirectToHomePg}
                        btnText="reload"
                        animationType="pulseDeep"
                    />
                </div>
            </PageWrapper>
        </motion.div>
    );
};

export default Error;
