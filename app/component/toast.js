'use client';

import { useEffect } from "react";


const Toast = ({ onClose, message, duration = 3000 }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
    }, [onClose, duration]);

    return (
        <div className="fixed bottom-40 left-0 right-0 flex flex-col animate-fadeIn">
            <div className="flex mx-auto bg-black text-white px-4 py-2 rounded shadow-lg">
                {message}
            </div>
        </div>
    );
}
export default Toast;
