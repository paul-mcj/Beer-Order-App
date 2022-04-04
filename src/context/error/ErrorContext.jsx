// React & Hooks
import { createContext, useState } from "react";

// define context
const ErrorContext = createContext();

// named export for Provider component
export const ErrorProvider = (props) => {
    // initial state
    const [error, setError] = useState(false);
    const [message, setMessage] = useState();

    // change state of the message that will be displayed in the error page
    const updateMsgState = (msg) => {
        setMessage(() => msg);
        updateErrState();
    };

    // change the error state
    const updateErrState = () => {
        setError(() => !error);
    };

    return (
        <ErrorContext.Provider value={{ error, message, updateErrState, updateMsgState }}>
            {props.children}
        </ErrorContext.Provider>
    );
};

// default export of defined context
export default ErrorContext;
