import { useState, useEffect } from 'react';
import { PhoneIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export default function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-20 right-6 z-50 hidden md:block">
            <div className="flex flex-col gap-3">
                {/* Call Button */}
                <a
                    href="tel:4162892224"
                    className="group relative w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-2xl hover:shadow-3xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 animate-float magnetic"
                >
                    <PhoneIcon className="w-8 h-8 text-white" />
                    <div className="absolute -left-36 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
                        Call Anne: (416) 289-2224
                    </div>
                    <div className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-20"></div>
                </a>

                {/* Pre-Approval Button */}
                <a
                    href="/pre-approval"
                    className="group relative w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full shadow-2xl hover:shadow-3xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 magnetic animate-glow"
                >
                    <DocumentTextIcon className="w-8 h-8 text-white" />
                    <div className="absolute -left-28 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
                        Get Pre-Approved
                    </div>
                </a>
            </div>
        </div>
    );
}
