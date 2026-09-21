'use client';
import { motion } from 'framer-motion';
import { techArsenal } from '../../constants/portfolioData';

export default function TechArsenal() {
    const duplicatedTech = [...techArsenal.marquee, ...techArsenal.marquee, ...techArsenal.marquee];

    return (
        <section id="skills" className="py-20 bg-[#050505] relative overflow-hidden border-t border-[#141414]">

            <div className="w-full max-w-7xl mx-auto px-6 md:px-16 mb-12 flex flex-col items-start">
        <span className="font-mono text-xs text-[#38BDF8] font-bold tracking-widest uppercase mb-2">
          $ query engine
        </span>
                <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-white uppercase">
                    &gt; tech --list
                </h2>
                <div className="w-16 h-0.5 bg-[#38BDF8]/40 mt-3" />
            </div>

            <div className="w-full bg-[#0D0D0D] border-y border-[#1F1F1F] py-6 overflow-hidden flex relative">
                <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

                <div className="animate-infinite-scroll flex gap-16 items-center">
                    {duplicatedTech.map((tech: string, idx: number) => (
                        <span
                            key={idx}
                            className="text-xl md:text-2xl font-heading font-black tracking-wide text-neutral-500 hover:text-[#38BDF8] transition-colors duration-300 font-mono uppercase shrink-0"
                        >
              {tech}
            </span>
                    ))}
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {techArsenal.categories.map((cat: { cmd: string; skills: string[] }, idx: number) => {
                    const folderName = idx === 0 ? "backend/" : "tools/";

                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-[#0D0D0D] border border-[#1F1F1F] hover:border-[#38BDF8]/30 rounded-2xl p-6 shadow-xl relative overflow-hidden group transition duration-300"
                        >
                            <div className="flex items-center gap-2 font-mono text-xs text-[#38BDF8] mb-4 pb-2 border-b border-[#1C1C1C]">
                                <span className="text-[#A3A3A3]">$ ls</span>
                                <span className="font-bold">{folderName}</span>
                            </div>

                            <div className="flex flex-wrap gap-2.5">
                                {cat.skills.map((skill: string, sIdx: number) => (
                                    <span
                                        key={sIdx}
                                        className="px-3.5 py-2 text-xs font-mono rounded-xl bg-[#050505] border border-[#1C1C1C] text-neutral-300 hover:border-[#38BDF8]/40 hover:text-white transition duration-200"
                                    >
                    {skill}
                  </span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>

        </section>
    );
}