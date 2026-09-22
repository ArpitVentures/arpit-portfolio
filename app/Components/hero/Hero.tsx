'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Terminal,
    ArrowDownRight,
    FileText,
    Cpu,
    CheckCircle2,
    ShieldCheck,
    Code2
} from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { systemProfile } from '../../constants/portfolioData';

const roles = [
    "Backend Engineering",
    "AI-powered Applications",
    "Clean Architecture",
    "Distributed Systems"
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3200);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-16 pt-28 pb-12 bg-[#050505] relative overflow-hidden">

            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                <div className="lg:col-span-7 space-y-6">

                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D0D0D] border border-[#1F1F1F] font-mono text-xs text-[#38BDF8]">
                        <Terminal className="w-3.5 h-3.5 text-[#38BDF8]" />
                        <span>Learning today. Building for tomorrow.</span>
                    </div>

                    <div className="space-y-0.5">
                        <motion.h1
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-white font-heading leading-none"
                        >
                            ARPIT
                        </motion.h1>

                        <motion.h1
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter apple-text-shine font-heading leading-none flex items-center [text-shadow:0_0_12px_rgba(56,189,248,0.12)]"
                        >
                            <span>SRIVASTAVA</span>
                            <span className="terminal-cursor inline-block w-2.5 sm:w-3.5 md:w-4 h-8 sm:h-12 md:h-16 bg-[#38BDF8] ml-2.5 rounded-sm shadow-[0_0_10px_#38BDF8]" />
                        </motion.h1>
                    </div>

                    <div className="h-8 font-mono text-lg sm:text-xl text-neutral-300 font-medium flex items-center gap-2 pt-1">
                        <span className="text-[#38BDF8] font-bold">&gt;</span>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={roles[roleIndex]}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.3 }}
                                className="text-white font-semibold"
                            >
                                {roles[roleIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </div>

                    <p className="text-[#A3A3A3] text-sm md:text-base font-sans leading-relaxed max-w-xl">
                        I build backend systems, AI-powered applications, and scalable software with a strong focus on clean architecture, performance, and practical problem solving.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
                        <a
                            href="#projects"
                            className="clickable px-6 py-3.5 rounded-xl bg-[#38BDF8] text-black font-bold flex items-center gap-2 hover:-translate-y-0.75 hover:shadow-[0_8px_25px_rgba(56,189,248,0.35)] transition duration-200"
                        >
                            <span>View Projects</span>
                            <ArrowDownRight className="w-4 h-4" />
                        </a>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="clickable px-7 py-3.5 rounded-xl bg-[#0D0D0D] border border-[#1F1F1F] text-white hover:border-[#38BDF8]/50 hover:-translate-y-0.75 hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)] transition duration-200 flex items-center gap-3"
                        >
                            <FileText className="w-4 h-4 text-[#38BDF8] shrink-0" />
                            <span>Resume ↗</span>
                        </a>
                    </div>

                    <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-[#A3A3A3]">
                        <Code2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                        <span>Building software that stays useful long after it&apos;s deployed.</span>
                    </div>

                </div>

                <div className="lg:col-span-5 w-full flex justify-center">
                    <Tilt
                        tiltMaxAngleX={8}
                        tiltMaxAngleY={8}
                        perspective={800}
                        glareEnable={true}
                        glareMaxOpacity={0.1}
                        glareColor="#38BDF8"
                        className="w-full max-w-md"
                    >
                        <div className="bg-[#0D0D0D] border border-[#1F1F1F] hover:border-[#38BDF8]/40 rounded-2xl p-6 shadow-2xl space-y-4 font-mono text-xs transition duration-300">

                            <div className="flex items-center justify-between border-b border-[#1F1F1F] pb-3 text-[11px] text-[#A3A3A3]">
                                <div className="flex items-center gap-2">
                                    <Cpu className="w-4 h-4 text-[#38BDF8]" />
                                    <span>system_status.sh</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                                    <ShieldCheck className="w-3.5 h-3.5" />
                                    <span>ONLINE</span>
                                </div>
                            </div>

                            <div className="space-y-3 pt-1">
                                <div className="flex justify-between items-center border-b border-[#141414] pb-2">
                                    <span className="text-[#A3A3A3]">SYSTEM</span>
                                    <span className="text-white font-semibold">ARPIT.OS v1.0.0</span>
                                </div>

                                <div className="flex justify-between items-center border-b border-[#141414] pb-2">
                                    <span className="text-[#A3A3A3]">CORE FOCUS</span>
                                    <span className="text-[#38BDF8] font-bold">Backend &amp; AI</span>
                                </div>

                                <div className="flex justify-between items-center border-b border-[#141414] pb-2">
                                    <span className="text-[#A3A3A3]">CURRENT PROJECT</span>
                                    <span className="text-white font-bold flex items-center gap-1.5">
    <Image
        src="/orbiq-icon.png"
        alt="ORBIQ"
        width={16}
        height={16}
        className="object-contain"
    />
    ORBIQ
</span>
                                </div>

                                <div className="flex justify-between items-center border-b border-[#141414] pb-2">
                                    <span className="text-[#A3A3A3]">LOCATION</span>
                                    <span className="text-white">India 🇮🇳</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-[#A3A3A3]">CURRENT STATUS</span>
                                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Available for Internships
                  </span>
                                </div>
                            </div>

                            <div className="p-3 bg-[#050505] rounded-xl border border-[#1C1C1C] text-[11px] text-[#A3A3A3]">
                                <p className="text-[#38BDF8] font-bold">&gt; {systemProfile.command}</p>
                                <p className="mt-1 text-neutral-400 leading-relaxed font-sans text-[11px]">
                                    B.TECH CSE (AI/ML) @ IILM University, Greater Noida
                                </p>
                            </div>

                        </div>
                    </Tilt>
                </div>

            </div>

        </section>
    );
}