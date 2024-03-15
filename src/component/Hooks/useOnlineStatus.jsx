import { useEffect } from "react";
import { useState } from "react";

const useOnlineStatus = () => { 

    const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setOnlineStatus(true);
        const handleOffline = () => setOnlineStatus(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

       
    }, []);

    return onlineStatus;
};

export default useOnlineStatus;
