// React & Hooks
import { useState } from "react";

export const useNotification = () => {
    const [isNotification, setIsNotification] = useState(false);

    // function to change state to opposite of current state
    const updateNotificationState = () => {
        setIsNotification(() => !isNotification);
    };

    // closes the notification panel
    const closeNotification = () => {
        setIsNotification(() => false);
    };

    return { isNotification, closeNotification, updateNotificationState };
};

export default useNotification;
