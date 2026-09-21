'use client';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Terminal, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { systemProfile } from '../../constants/portfolioData';

export default function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-16 bg-[#050505] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#1c1c1c_1px,transparent_1px)] bg-size-[32px_32px] opacity-10 pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                <div className="lg:col-span-7 space-y-6">
                    <div className="flex flex-col items-start">
            <span className="font-mono text-xs text-[#38BDF8] font-bold tracking-widest uppercase mb-2">
              $ system --info
            </span>
                        <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-white uppercase flex items-center gap-2">
                            $ whoami
                        </h2>
                        <div className="w-16 h-0.5 bg-[#38BDF8]/40 mt-3" />
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-mono text-xs text-[#38BDF8] tracking-wide"
                    >
                        Every engineer has a story. Here&apos;s mine. ❤️
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#A3A3A3] text-base md:text-lg leading-relaxed font-sans"
                    >
                        {systemProfile.bio}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-5 bg-[#0D0D0D] border border-[#1F1F1F] rounded-xl space-y-3 font-mono text-xs"
                    >
                        <p className="text-[#38BDF8] font-bold tracking-wider uppercase text-[11px]">
                            Engineering Philosophy
                        </p>
                        <div className="space-y-2 text-neutral-200 font-sans pt-1">
                            {systemProfile.philosophy.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2.5 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="lg:col-span-5 w-full flex justify-center sticky top-28">
                    <Tilt
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        perspective={900}
                        glareEnable={true}
                        glareMaxOpacity={0.12}
                        glareColor="#38BDF8"
                        className="w-full max-w-sm"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-linear-to-b from-[#0D0D0D] to-[#050505] border border-[#1F1F1F] hover:border-[#38BDF8]/40 rounded-2xl p-6 shadow-2xl relative overflow-hidden group transition-all duration-300"
                        >
=
                            <div className="flex items-center justify-between border-b border-[#1F1F1F] pb-4 mb-4">
                                <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#A3A3A3]">
                                    <Terminal className="w-3.5 h-3.5 text-[#38BDF8]" />
                                    <span>identity_card.sys</span>
                                </div>
                                <div className="flex items-center gap-1 text-[10px] font-mono text-[#38BDF8]">
                                    <ShieldCheck className="w-3.5 h-3.5" />
                                    <span>VERIFIED</span>
                                </div>
                            </div>

                            <div className="w-full h-52 bg-[#141414] border border-[#1F1F1F] rounded-xl overflow-hidden relative mb-4 flex items-center justify-center group-hover:border-[#38BDF8]/30 transition">
                                <Image
                                    src="/profile.jpg"
                                    alt="Arpit Srivastava"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition duration-500"
                                />
                            </div>

                            <div className="space-y-2.5 font-mono text-xs">
                                {systemProfile.details.slice(0, 4).map((item, idx) => (
                                    <div key={idx} className="flex justify-between border-b border-[#141414] pb-1.5">
                                        <span className="text-[10px] uppercase text-[#A3A3A3]">{item.label}</span>
                                        <span className="text-white font-medium">{item.value}</span>
                                    </div>
                                ))}
                            </div>

                        </motion.div>
                    </Tilt>
                </div>

            </div>
        </section>
    );
}