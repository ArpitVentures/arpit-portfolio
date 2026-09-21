'use client';
import { Terminal } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="fixed top-4 inset-x-0 z-40 max-w-4xl mx-auto px-4">
            <div className="bg-[#0D0D0D]/80 backdrop-blur-md border border-[#1F1F1F] rounded-full px-5 py-3 flex items-center justify-between shadow-2xl">

                <a href="#" className="flex items-center gap-2 font-mono text-xs font-bold text-white hover:text-[#38BDF8] transition duration-200">
                    <Terminal className="w-4 h-4 text-[#38BDF8]" />
                    <span>&gt;_ ARPIT.OS</span>
                </a>

                <div className="hidden sm:flex items-center gap-6 font-mono text-xs text-[#A3A3A3]">
                    <a href="#about" className="relative group py-1 hover:text-[#38BDF8] transition duration-200">
                        <span>whoami</span>
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#38BDF8] group-hover:w-full transition-all duration-300" />
                    </a>
                    <a href="#skills" className="relative group py-1 hover:text-[#38BDF8] transition duration-200">
                        <span>tech --list</span>
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#38BDF8] group-hover:w-full transition-all duration-300" />
                    </a>
                    <a href="#projects" className="relative group py-1 hover:text-[#38BDF8] transition duration-200">
                        <span>ls projects</span>
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#38BDF8] group-hover:w-full transition-all duration-300" />
                    </a>
                    <a href="#journey" className="relative group py-1 hover:text-[#38BDF8] transition duration-200">
                        <span>history</span>
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#38BDF8] group-hover:w-full transition-all duration-300" />
                    </a>
                </div>

                <a
                    href="#contact"
                    className="clickable px-4 py-1.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/40 text-[#38BDF8] font-mono text-xs font-bold hover:bg-[#38BDF8] hover:text-black transition duration-200"
                >
                    CONNECT
                </a>
            </div>
        </nav>
    );
}