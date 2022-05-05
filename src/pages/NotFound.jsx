// components
import TextButton from "../components/ui/TextButton";
import Header from "../components/layout/Header";
import PageWrapper from "../components/layout/PageWrapper";

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
                <div className="flex flex-col items-center">
                    <Header>Oops!</Header>
                    <p className="mb-10">
                        Looks like the page you were looking for does not exist.
                    </p>
                    <TextButton
                        handleClick={redirectToHomePg}
                        animationType={"pulseDeep"}
                        btnText="go home"
                    />
                </div>
            </PageWrapper>
        </motion.div>
    );
};

export default NotFound;
