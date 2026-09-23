'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="
                fixed bottom-6 right-6 z-50
                w-11 h-11
                rounded-full
                bg-[#0D0D0D]/50
                backdrop-blur-md
                border border-[#38BDF8]/30
                text-[#38BDF8]
                flex items-center justify-center
                shadow-lg shadow-[#38BDF8]/10
                transition-all duration-300
                hover:bg-[#38BDF8]/10
                hover:border-[#38BDF8]/70
                hover:-translate-y-1
            "
        >
            <ArrowUp className="w-4 h-4" />
        </button>
    );
}