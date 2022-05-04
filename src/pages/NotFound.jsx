// components
import TextButton from "../components/ui/TextButton";
import Header from "../components/layout/Header";
import PageWrapper from "../components/layout/PageWrapper";

// utils
import { redirectToHomePg } from "../utils/functions";

const NotFound = () => {
    return (
        <PageWrapper>
            <div className="flex flex-col items-center">
                <Header>Oops!</Header>
                <p className="mb-10">Looks like the page you were looking for does not exist.</p>
                <TextButton
                    handleClick={redirectToHomePg}
                    animationType={"pulseDeep"}
                    btnText="go home"
                />
            </div>
        </PageWrapper>
    );
};

export default NotFound;
