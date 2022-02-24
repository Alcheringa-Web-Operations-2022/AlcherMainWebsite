import { useEffect, useState } from 'react';

const useLoading = () => {
    const [loading, setLoading] = useState(true);
    const [windowLoading, setwindowLoading] = useState(true);

    const waitFor1s = () => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };
    useEffect(() => {
        window.onload = () => setwindowLoading(false);
        waitFor1s();
    }, []);

    return { loading, windowLoading };
};

export default useLoading;
