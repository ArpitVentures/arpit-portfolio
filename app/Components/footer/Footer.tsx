'use client';
import { Terminal, Code2 } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-12 px-6 md:px-16 bg-[#050505] border-t border-[#1F1F1F] font-mono text-xs text-[#A3A3A3]">
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">

                <div className="flex items-center gap-2 bg-[#0D0D0D] border border-[#1F1F1F] px-4 py-2 rounded-xl text-neutral-200 shadow-md">
                    <Terminal className="w-4 h-4 text-[#38BDF8]" />
                    <span className="font-bold tracking-wide">&gt;_ ARPIT.OS • Portfolio</span>
                </div>

                <div className="w-full max-w-md bg-[#0D0D0D] border border-[#1F1F1F] rounded-2xl overflow-hidden text-left shadow-2xl">

                    <div className="bg-[#141414] px-4 py-2 border-b border-[#1F1F1F] flex items-center justify-between text-[11px] text-[#A3A3A3]">
                        <div className="flex items-center gap-2">
                            <Code2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                            <span className="font-semibold text-neutral-300">mindset.cpp</span>
                        </div>
                        <span className="text-[10px] text-neutral-600">C++</span>
                    </div>

                    <div className="p-5 text-neutral-300 text-xs leading-relaxed">
                        <p className="text-[#A3A3A3]">while (alive) &#123;</p>
                        <p className="pl-6 text-[#38BDF8]">stayCurious();</p>
                        <p className="pl-6 text-[#38BDF8]">build();</p>
                        <p className="pl-6 text-[#38BDF8]">improve();</p>
                        <p className="text-[#A3A3A3]">&#125;</p>
                    </div>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-[#1F1F1F]/50 w-full max-w-md">
                    <p className="text-white font-medium font-sans">
                        © 2026 Arpit Srivastava
                    </p>
                    <p className="text-[11px] text-[#A3A3A3]">
                        Engineered with Next.js, Framer Motion &amp; Curiosity.
                    </p>
                </div>

            </div>
        </footer>
    );
}