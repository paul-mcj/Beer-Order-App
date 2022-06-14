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
import BeneathHeader from "../components/layout/BeneathHeader";
import Paragraph from "../components/layout/Paragraph";

// utils
import { redirectToHomePg } from "../utils/functions";

const Error = () => {
    // get message through error context to display to user
    const { message } = useContext(ErrorContext);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
        >
            <PageWrapper>
                <Header>Warning!</Header>
                <BeneathHeader>
                    <div className="flex flex-col h-screen">
                        <WarningIcon />
                        <div className="mt-10">
                            <Paragraph>
                                {message
                                    ? message
                                    : "Something went wrong. Please reload the application."}
                            </Paragraph>
                        </div>
                        <TextButton
                            handleClick={redirectToHomePg}
                            btnText="reload"
                            animationType="pulseDeep"
                        />
                    </div>
                </BeneathHeader>
            </PageWrapper>
        </motion.div>
    );
};

export default Error;
