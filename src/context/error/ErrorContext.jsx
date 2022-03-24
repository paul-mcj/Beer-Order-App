// React & Hooks
import { createContext, useState } from "react";

// define context
const ErrorContext = createContext();

// named export for Provider component
export const ErrorProvider = (props) => {
    // initial state
    const [error, setError] = useState(false);

    // function to change state
    const updateErrState = () => setError(!error);

    return <ErrorProvider value={{ error, updateErrState }}>{props.children}</ErrorProvider>;
};

// default export of defined context
export default ErrorContext;
