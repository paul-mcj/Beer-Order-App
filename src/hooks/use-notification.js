// React & Hooks
import { useState } from "react";

export const useNotification = () => {
    // local state can identify if a notification has occurred
    const [isNotification, setIsNotification] = useState(false);

    // function to change state to opposite of current state
    const updateNotificationState = () => {
        setIsNotification(() => !isNotification);
    };

    return { isNotification, updateNotificationState };
};

export default useNotification;
