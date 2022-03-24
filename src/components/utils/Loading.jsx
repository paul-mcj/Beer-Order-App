// React
import { Fragment } from "react";

// React Icons
import { SiSpinrilla as Spinner } from "react-icons/si";

const Loading = () => {
    return (
        <Fragment>
            {/* fixme: change size */}
            <Spinner className="animate-spin h-5 w-5" />
            Loading...
        </Fragment>
    );
};

export default Loading;
