'use client';

import { motion } from 'framer-motion';
import {
    Terminal,
    CheckCircle2,
    Clock,
    Sparkles,
} from 'lucide-react';
import {
    journeyEvents,
    JourneyEvent,
} from '../../constants/portfolioData';

export default function Journey() {
    return (
        <section
            id="journey"
            className="
                scroll-mt-24
                py-16 md:py-20 lg:py-24
                px-5 sm:px-6 md:px-16
                bg-[#050505]
                relative
                overflow-hidden
                border-t border-[#141414]
            "
        >
            <div className="absolute inset-0 bg-[radial-gradient(#1c1c1c_1px,transparent_1px)] bg-size-[32px_32px] opacity-10 pointer-events-none" />

            <div className="w-full max-w-5xl mx-auto">

                <div className="flex flex-col items-start mb-10 md:mb-16">

                    <span className="font-mono text-[10px] sm:text-xs text-[#38BDF8] font-bold tracking-widest uppercase mb-2">
                        $ system --log
                    </span>

                    <h2
                        className="
                            text-3xl
                            sm:text-4xl
                            md:text-5xl
                            font-black
                            font-heading
                            tracking-tight
                            text-white
                            uppercase
                            flex items-center gap-3
                        "
                    >
                        &gt; history
                    </h2>

                    <div className="w-14 md:w-16 h-0.5 bg-[#38BDF8]/40 mt-3" />
                </div>

                <div
                    className="
                        relative
                        ml-3
                        sm:ml-4
                        md:ml-32
                        space-y-7
                        sm:space-y-9
                        md:space-y-12
                    "
                >

                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1.2,
                            ease: 'easeInOut',
                        }}
                        className="
                            absolute
                            left-0
                            top-3
                            bottom-3
                            w-0.5
                            bg-linear-to-b
                            from-[#38BDF8]
                            via-[#38BDF8]/50
                            to-[#1F1F1F]
                            origin-top
                        "
                    />

                    {journeyEvents.map(
                        (event: JourneyEvent, idx: number) => {
                            const isCompleted =
                                event.status === 'COMPLETED';

                            const isInProgress =
                                event.status === 'IN_PROGRESS';

                            return (
                                <motion.div
                                    key={idx}
                                    initial={{
                                        opacity: 0,
                                        x: -20,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: idx * 0.1,
                                    }}
                                    className="
                                        relative
                                        pl-7
                                        sm:pl-8
                                        md:pl-12
                                        group
                                    "
                                >

                                    <div
                                        className="
                                            hidden
                                            md:flex
                                            absolute
                                            -left-32
                                            top-1
                                            w-24
                                            justify-end
                                            font-mono
                                            text-sm
                                            font-bold
                                            text-[#A3A3A3]
                                            group-hover:text-[#38BDF8]
                                            transition
                                        "
                                    >
                                        {event.year}
                                    </div>

                                    <div
                                        className="
                                            absolute
                                            -left-[15px]
                                            sm:-left-[16px]
                                            md:-left-[17px]
                                            top-1
                                            bg-[#050505]
                                            p-1
                                            rounded-full
                                            border border-[#1F1F1F]
                                            z-10
                                        "
                                    >
                                        {isCompleted && (
                                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                                        )}

                                        {isInProgress && (
                                            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#38BDF8] animate-pulse" />
                                        )}

                                        {!isCompleted &&
                                            !isInProgress && (
                                                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#38BDF8]" />
                                            )}
                                    </div>

                                    <div
                                        className="
                                            bg-[#0D0D0D]
                                            border border-[#1F1F1F]
                                            hover:border-[#38BDF8]/30
                                            rounded-2xl
                                            p-4
                                            sm:p-5
                                            md:p-6
                                            shadow-xl
                                            transition duration-300
                                        "
                                    >

                                        <div
                                            className="
                                                flex
                                                flex-wrap
                                                items-center
                                                justify-between
                                                gap-2
                                                border-b
                                                border-[#1C1C1C]
                                                pb-3
                                                mb-3
                                                md:mb-4
                                                font-mono
                                                text-[10px]
                                                sm:text-xs
                                            "
                                        >

                                            <span
                                                className="
                                                    text-[#38BDF8]
                                                    flex
                                                    items-center
                                                    gap-1.5
                                                    min-w-0
                                                    max-w-full
                                                "
                                            >
                                                <Terminal className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />

                                                <span className="truncate">
                                                    {event.cmd}
                                                </span>
                                            </span>

                                            <span
                                                className="
                                                    md:hidden
                                                    font-bold
                                                    text-[#A3A3A3]
                                                    ml-auto
                                                "
                                            >
                                                {event.year}
                                            </span>

                                            <span
                                                className={`
                                                    px-2
                                                    sm:px-2.5
                                                    py-0.5
                                                    rounded
                                                    text-[9px]
                                                    sm:text-[10px]
                                                    font-bold
                                                    whitespace-nowrap
                                                    ${
                                                    isCompleted
                                                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                                        : isInProgress
                                                            ? 'bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20'
                                                            : 'bg-neutral-800 text-neutral-400 border border-neutral-700'
                                                }
                                                `}
                                            >
                                                {event.status}
                                            </span>
                                        </div>

                                        <h3
                                            className="
                                                text-lg
                                                sm:text-xl
                                                font-bold
                                                font-heading
                                                text-white
                                            "
                                        >
                                            {event.title}
                                        </h3>

                                        <p
                                            className="
                                                text-[10px]
                                                sm:text-xs
                                                font-mono
                                                text-[#A3A3A3]
                                                mt-0.5
                                            "
                                        >
                                            {event.subtitle}
                                        </p>

                                        <p
                                            className="
                                                text-[#A3A3A3]
                                                text-[11px]
                                                sm:text-xs
                                                md:text-sm
                                                font-sans
                                                mt-3
                                                leading-relaxed
                                            "
                                        >
                                            {event.description}
                                        </p>

                                    </div>
                                </motion.div>
                            );
                        }
                    )}
                </div>
            </div>
        </section>
    );
}