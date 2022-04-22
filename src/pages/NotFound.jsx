// components
import Button from "../components/ui/Button";
import Header from "../components/layout/Header";

// utils
import { redirectToHomePg } from "../utils/functions";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center">
            <Header>Oops!</Header>
            <p className="mb-10">Looks like the page you were looking for does not exist.</p>
            <Button handleClick={redirectToHomePg}>Go Home</Button>
        </div>
    );
};

export default NotFound;
