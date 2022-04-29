// React & Hooks
import { createContext, useState } from "react";
import PropTypes from "prop-types";

// define context
const NotificationContext = createContext();

// named export for Provider component
export const NotificationProvider = ({ children }) => {
    // initial state
    const [isNotification, setIsNotification] = useState(false);

    // function to change context state
    const updateNotificationState = () => {
        setIsNotification(() => !isNotification);
    };

    // closes notification panel
    const closeNotification = () => {
        updateNotificationState(() => !isNotification);
    };

    return (
        <NotificationContext.Provider
            value={{
                isNotification,
                updateNotificationState,
                closeNotification,
            }}
        >
            {children}
        </NotificationContext.Provider>
    );
};

// assign proptypes
NotificationProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

// default export of defined context
export default NotificationContext;
