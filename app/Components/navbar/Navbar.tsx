'use client';

import { useEffect, useState } from 'react';
import { Menu, Terminal, X } from 'lucide-react';

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (window.innerWidth < 1024) {
                setShowNavbar(true);
                lastScrollY = currentScrollY;
                return;
            }

            if (currentScrollY <= 50) {
                setShowNavbar(true);
            } else if (currentScrollY > lastScrollY) {
                setShowNavbar(false);
            } else if (currentScrollY < lastScrollY) {
                setShowNavbar(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav
            className={`
                fixed z-50
                top-3 md:top-4
                left-1/2 -translate-x-1/2
                w-[calc(100%-1rem)]
                md:w-[calc(100%-2rem)]
                max-w-4xl
                transition-transform duration-300 ease-out
                ${
                !showNavbar
                    ? '-translate-y-[calc(100%+1rem)]'
                    : 'translate-y-0'
            }
            `}
        >
            <div
                className="
                    relative
                    bg-[#0D0D0D]/85
                    backdrop-blur-md
                    border border-[#1F1F1F]
                    rounded-full
                    px-3 py-2.5
                    sm:px-4
                    md:px-5 md:py-3
                    shadow-2xl
                "
            >

                <div className="flex items-center justify-between">

                    <button
                        type="button"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={menuOpen}
                        className="
                            lg:hidden
                            w-8 h-8
                            flex items-center justify-center
                            rounded-lg
                            text-[#A3A3A3]
                            hover:text-[#38BDF8]
                            hover:bg-[#38BDF8]/10
                            transition duration-200
                            shrink-0
                        "
                    >
                        {menuOpen ? (
                            <X className="w-4 h-4" />
                        ) : (
                            <Menu className="w-4 h-4" />
                        )}
                    </button>

                    <a
                        href="#"
                        onClick={closeMenu}
                        className="
                            flex items-center gap-1.5
                            md:gap-2
                            font-mono
                            text-[10px]
                            sm:text-xs
                            font-bold
                            text-white
                            hover:text-[#38BDF8]
                            transition duration-200
                            shrink-0
                        "
                    >
                        <Terminal className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#38BDF8]" />
                        <span>&gt;_ ARPIT.OS</span>
                    </a>

                    <div className="hidden lg:flex items-center gap-6 font-mono text-xs text-[#A3A3A3]">

                        <a
                            href="#about"
                            className="relative group py-1 hover:text-[#38BDF8] transition duration-200"
                        >
                            <span>whoami</span>
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#38BDF8] group-hover:w-full transition-all duration-300" />
                        </a>

                        <a
                            href="#skills"
                            className="relative group py-1 hover:text-[#38BDF8] transition duration-200"
                        >
                            <span>tech --list</span>
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#38BDF8] group-hover:w-full transition-all duration-300" />
                        </a>

                        <a
                            href="#projects"
                            className="relative group py-1 hover:text-[#38BDF8] transition duration-200"
                        >
                            <span>ls projects</span>
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#38BDF8] group-hover:w-full transition-all duration-300" />
                        </a>

                        <a
                            href="#journey"
                            className="relative group py-1 hover:text-[#38BDF8] transition duration-200"
                        >
                            <span>history</span>
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#38BDF8] group-hover:w-full transition-all duration-300" />
                        </a>

                    </div>

                    <a
                        href="#contact"
                        onClick={closeMenu}
                        className="
                            clickable
                            px-3 py-1.5
                            sm:px-4
                            rounded-full
                            bg-[#38BDF8]/10
                            border border-[#38BDF8]/40
                            text-[#38BDF8]
                            font-mono
                            text-[10px]
                            sm:text-xs
                            font-bold
                            hover:bg-[#38BDF8]
                            hover:text-black
                            transition duration-200
                            shrink-0
                        "
                    >
                        CONNECT
                    </a>
                </div>

                <div
                    className={`
                        lg:hidden
                        overflow-hidden
                        transition-all duration-300 ease-out
                        ${
                        menuOpen
                            ? 'max-h-72 opacity-100 mt-3 pt-3 border-t border-[#1F1F1F]'
                            : 'max-h-0 opacity-0 mt-0 pt-0 border-t border-transparent'
                    }
                    `}
                >
                    <div className="flex flex-col gap-1 pb-1">

                        <a
                            href="#about"
                            onClick={closeMenu}
                            className="
                                font-mono text-xs
                                text-[#A3A3A3]
                                hover:text-[#38BDF8]
                                hover:bg-[#38BDF8]/5
                                rounded-lg
                                px-3 py-2.5
                                transition duration-200
                            "
                        >
                            <span className="text-[#38BDF8] mr-2">$</span>
                            whoami
                        </a>

                        <a
                            href="#skills"
                            onClick={closeMenu}
                            className="
                                font-mono text-xs
                                text-[#A3A3A3]
                                hover:text-[#38BDF8]
                                hover:bg-[#38BDF8]/5
                                rounded-lg
                                px-3 py-2.5
                                transition duration-200
                            "
                        >
                            <span className="text-[#38BDF8] mr-2">$</span>
                            tech --list
                        </a>

                        <a
                            href="#projects"
                            onClick={closeMenu}
                            className="
                                font-mono text-xs
                                text-[#A3A3A3]
                                hover:text-[#38BDF8]
                                hover:bg-[#38BDF8]/5
                                rounded-lg
                                px-3 py-2.5
                                transition duration-200
                            "
                        >
                            <span className="text-[#38BDF8] mr-2">$</span>
                            ls projects
                        </a>

                        <a
                            href="#journey"
                            onClick={closeMenu}
                            className="
                                font-mono text-xs
                                text-[#A3A3A3]
                                hover:text-[#38BDF8]
                                hover:bg-[#38BDF8]/5
                                rounded-lg
                                px-3 py-2.5
                                transition duration-200
                            "
                        >
                            <span className="text-[#38BDF8] mr-2">$</span>
                            history
                        </a>

                    </div>
                </div>
            </div>
        </nav>
    );
}