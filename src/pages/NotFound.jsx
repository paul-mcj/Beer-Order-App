// components
import TextButton from "../components/ui/TextButton";
import Header from "../components/layout/Header";
import BeneathHeader from "../components/layout/BeneathHeader";
import PageWrapper from "../components/layout/PageWrapper";
import NotFoundIcon from "../components/assets/NotFoundIcon";
import Paragraph from "../components/layout/Paragraph";

// utils
import { redirectToHomePg } from "../utils/functions";

// framer-motion
import { motion } from "framer-motion";

const NotFound = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
        >
            <PageWrapper>
                <Header>Oops!</Header>
                <BeneathHeader>
                    <div className="flex flex-col h-screen">
                        <NotFoundIcon />
                        <div className="mt-10">
                            <Paragraph>
                                Looks like the page you were looking for does not exist.
                            </Paragraph>
                        </div>
                        <TextButton
                            handleClick={redirectToHomePg}
                            animationType={"pulseDeep"}
                            btnText="go home"
                        />
                    </div>
                </BeneathHeader>
            </PageWrapper>
        </motion.div>
    );
};

export default NotFound;
