'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import {
    Circle,
    ExternalLink,
    X,
    Sparkles,
    Folder,
    CheckCircle2,
    TrendingUp,
    Layers,
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projectsData, Project } from '../../constants/portfolioData';

type CategoryType =
    | 'All'
    | 'Full-Stack'
    | 'Backend'
    | 'AI / ML'
    | 'Computer Vision'
    | 'Java';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [activeFilter, setActiveFilter] = useState<CategoryType>('All');

    const isDenseProject =
        selectedProject?.id === 'orbiq-workspace' ||
        selectedProject?.id === 'financial-risk-fraud-detection';

    const filteredProjects =
        activeFilter === 'All'
            ? projectsData
            : projectsData.filter((p) => p.category === activeFilter);

    return (
        <section
            id="projects"
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

            <div className="w-full max-w-7xl mx-auto">

                <div
                    className="
                        flex flex-col
                        lg:flex-row
                        lg:items-end
                        justify-between
                        mb-8 md:mb-12
                        gap-6
                    "
                >
                    <div className="min-w-0">

                        <span className="font-mono text-[10px] sm:text-xs text-[#38BDF8] font-bold tracking-widest uppercase mb-2 block">
                            $ ls ./projects
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
                                flex
                                flex-wrap
                                items-center
                                gap-2.5
                            "
                        >
                            <span>Things I&apos;ve Built</span>

                            <span className="text-[10px] sm:text-xs font-mono text-[#38BDF8] font-normal px-2.5 py-1 bg-[#38BDF8]/10 border border-[#38BDF8]/20 rounded-md whitespace-nowrap">
                                {projectsData.length} repos
                            </span>
                        </h2>

                        <div className="w-14 md:w-16 h-0.5 bg-[#38BDF8]/40 mt-3" />
                    </div>

                    <div
                        className="
                            flex
                            gap-2
                            font-mono
                            text-[10px] sm:text-xs
                            overflow-x-auto
                            pb-1
                            -mx-1
                            px-1
                            lg:max-w-[58%]
                            scrollbar-hide
                        "
                    >
                        {(
                            [
                                'All',
                                'Full-Stack',
                                'Backend',
                                'AI / ML',
                                'Computer Vision',
                                'Java',
                            ] as const
                        ).map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`
                                    clickable
                                    px-3 py-2
                                    sm:px-3.5 sm:py-2
                                    rounded-xl
                                    border
                                    transition-all duration-200
                                    whitespace-nowrap
                                    shrink-0
                                    ${
                                    activeFilter === cat
                                        ? 'bg-[#38BDF8]/10 border-[#38BDF8]/50 text-[#38BDF8] font-bold shadow-[0_0_12px_rgba(56,189,248,0.2)]'
                                        : 'bg-[#0D0D0D] border-[#1F1F1F] text-[#A3A3A3] hover:text-white hover:border-neutral-700'
                                }
                                `}
                            >
                                {activeFilter === cat ? `> ${cat}` : cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">

                    {filteredProjects.map((project: Project) => (
                        <Tilt
                            key={project.id}
                            tiltMaxAngleX={6}
                            tiltMaxAngleY={6}
                            perspective={800}
                            glareEnable={true}
                            glareMaxOpacity={0.12}
                            glareColor="#38BDF8"
                            className="h-full"
                        >
                            <motion.div
                                layout
                                whileHover={{ y: -8 }}
                                transition={{
                                    duration: 0.3,
                                    ease: 'easeOut',
                                }}
                                onClick={() => setSelectedProject(project)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        setSelectedProject(project);
                                    }
                                }}
                                style={{
                                    backgroundColor: project.backgroundColor,
                                }}
                                className="
                                    border border-[#1F1F1F]
                                    hover:border-[#38BDF8]/50
                                    hover:shadow-[0_10px_30px_rgba(56,189,248,0.15)]
                                    rounded-2xl
                                    overflow-hidden
                                    flex flex-col
                                    h-full
                                    group
                                    transition-all duration-300
                                    relative
                                    cursor-pointer
                                "
                            >

                                <div
                                    className="
                                        relative z-10
                                        bg-[#141414]/80
                                        px-3.5 sm:px-4
                                        py-2.5 sm:py-3
                                        border-b border-[#1F1F1F]
                                        flex items-center gap-3 sm:gap-4
                                    "
                                >
                                    <div className="flex gap-1.5 shrink-0">
                                        <Circle className="w-2.5 h-2.5 fill-red-500/80 text-red-500/80" />
                                        <Circle className="w-2.5 h-2.5 fill-yellow-500/80 text-yellow-500/80" />
                                        <Circle className="w-2.5 h-2.5 fill-green-500/80 text-green-500/80" />
                                    </div>

                                    <span className="font-mono text-[9px] sm:text-[10px] text-[#A3A3A3] flex items-center gap-1 min-w-0 flex-1">
                                        <Folder className="w-3 h-3 text-[#38BDF8]/80 shrink-0" />

                                        <span className="truncate">
                                            {project.id}.app
                                        </span>
                                    </span>

                                    {project.featured && (
                                        <span className="shrink-0 text-[8px] sm:text-[9px] font-mono font-bold text-amber-400 bg-amber-400/10 px-1.5 sm:px-2 py-0.5 rounded border border-amber-400/20 flex items-center gap-1">
                                            <Sparkles className="w-2.5 h-2.5" />
                                            FEATURED
                                        </span>
                                    )}

                                    {project.isFoundation && (
                                        <span className="shrink-0 text-[8px] sm:text-[9px] font-mono font-bold text-[#38BDF8] bg-[#38BDF8]/10 px-1.5 sm:px-2 py-0.5 rounded border border-[#38BDF8]/20 flex items-center gap-1">
                                            <Layers className="w-2.5 h-2.5" />
                                            FOUNDATION
                                        </span>
                                    )}
                                </div>

                                <div
                                    className="
                                        relative
                                        w-full
                                        h-44
                                        sm:h-52
                                        md:h-64
                                        overflow-hidden
                                        border-b border-[#1F1F1F]
                                        bg-black/20
                                    "
                                >
                                    <img
                                        src={project.backgroundImage}
                                        alt={`${project.title} project preview`}
                                        className="
                                            w-full h-full
                                            object-contain
                                            transition-transform
                                            duration-700
                                            group-hover:scale-[1.03]
                                        "
                                    />

                                    <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                                </div>

                                <div
                                    className="
                                        relative z-10
                                        p-4 sm:p-5 md:p-6
                                        flex-1
                                        flex flex-col
                                        justify-between
                                    "
                                >
                                    <div>

                                        <div className="flex gap-1.5 flex-wrap mb-3 md:mb-4 font-mono text-[9px] sm:text-[11px]">
                                            {project.tags.map(
                                                (tag: string, i: number) => (
                                                    <span
                                                        key={i}
                                                        className="
                                                            px-2 sm:px-2.5
                                                            py-0.5
                                                            rounded
                                                            bg-[#141414]/90
                                                            text-[#A3A3A3]
                                                            border border-[#1F1F1F]
                                                        "
                                                    >
                                                        {tag}
                                                    </span>
                                                )
                                            )}
                                        </div>

                                        <h3
                                            className="
                                                text-xl
                                                sm:text-2xl
                                                font-bold
                                                font-heading
                                                text-white
                                                group-hover:text-[#38BDF8]
                                                transition-colors
                                            "
                                        >
                                            {project.title}
                                        </h3>

                                        <p className="text-[#A3A3A3] text-[11px] sm:text-xs mt-2 font-sans leading-relaxed">
                                            {project.shortDesc}
                                        </p>
                                    </div>

                                    <div
                                        className="
                                            pt-4
                                            mt-4
                                            md:pt-5 md:mt-5
                                            border-t border-[#1C1C1C]
                                            flex items-center justify-between
                                            font-mono text-[10px] sm:text-xs
                                        "
                                    >
                                        <span className="text-[#38BDF8] font-bold flex items-center gap-1">
                                            <span>View Details</span>
                                            <span>→</span>
                                        </span>

                                        <div className="flex items-center gap-3 text-[#A3A3A3]">

                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                onClick={(e) =>
                                                    e.stopPropagation()
                                                }
                                                className="clickable hover:text-white transition"
                                                aria-label={`${project.title} GitHub repository`}
                                            >
                                                <FaGithub className="w-4 h-4" />
                                            </a>

                                            {project.demo && (
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    onClick={(e) =>
                                                        e.stopPropagation()
                                                    }
                                                    className="clickable hover:text-[#38BDF8] transition"
                                                    aria-label={`${project.title} live demo`}
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            )}

                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <div
                        className="
                            fixed inset-0
                            z-50
                            flex items-center justify-center
                            p-2 sm:p-3
                            bg-black/80
                            backdrop-blur-md
                        "
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                            className={`
                                bg-[#0D0D0D]
                                border border-[#1F1F1F]
                                rounded-2xl
                                max-w-3xl
                                w-full
                                relative
                                shadow-2xl
                                overflow-hidden
                                flex flex-col
                                ${
                                isDenseProject
                                    ? 'max-h-[94vh]'
                                    : 'max-h-[92vh]'
                            }
                            `}
                        >

                            <div
                                className={`
                                    relative
                                    w-full
                                    shrink-0
                                    overflow-hidden
                                    rounded-t-2xl
                                    border-b border-[#1F1F1F]
                                    bg-black/20
                                    ${
                                    isDenseProject
                                        ? 'h-24 sm:h-28 md:h-32'
                                        : 'h-36 sm:h-48 md:h-56'
                                }
                                `}
                            >
                                <img
                                    src={selectedProject.backgroundImage}
                                    alt={`${selectedProject.title} project preview`}
                                    className="w-full h-full object-contain"
                                />

                                <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                            </div>

                            <button
                                onClick={() => setSelectedProject(null)}
                                aria-label="Close project details"
                                className="
                                    clickable
                                    absolute
                                    top-2.5 right-2.5
                                    sm:top-4 sm:right-4
                                    z-20
                                    p-1.5 sm:p-2
                                    rounded-xl
                                    bg-[#141414]/80
                                    backdrop-blur-md
                                    border border-[#1F1F1F]
                                    text-[#A3A3A3]
                                    hover:text-white
                                    transition
                                "
                            >
                                <X className="w-4 h-4" />
                            </button>

                            <div
                                className="
                                    overflow-y-auto
                                    overscroll-contain
                                "
                            >
                                <div
                                    className={`
                                        ${
                                        isDenseProject
                                            ? 'p-3.5 sm:p-4 md:p-5 space-y-2.5'
                                            : 'p-4 sm:p-5 md:p-6 space-y-3'
                                    }
                                    `}
                                >

                                    <div
                                        className={
                                            isDenseProject
                                                ? 'space-y-1.5'
                                                : 'space-y-2'
                                        }
                                    >
                                        <div className="flex gap-1.5 sm:gap-2 font-mono text-[10px] sm:text-xs flex-wrap">
                                            {selectedProject.tags.map(
                                                (tag: string, i: number) => (
                                                    <span
                                                        key={i}
                                                        className="px-2 sm:px-2.5 py-1 rounded bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20"
                                                    >
                                                        {tag}
                                                    </span>
                                                )
                                            )}

                                            {selectedProject.isFoundation && (
                                                <span className="px-2 sm:px-2.5 py-1 rounded bg-[#8B5CF6]/10 text-[#8B5CF6] border border-[#8B5CF6]/20 font-mono text-[10px] sm:text-xs font-bold">
                                                    FOUNDATION MILESTONE
                                                </span>
                                            )}
                                        </div>

                                        <h2
                                            className={`
                                                font-black
                                                font-heading
                                                text-white
                                                ${
                                                isDenseProject
                                                    ? 'text-lg sm:text-xl md:text-2xl'
                                                    : 'text-xl sm:text-2xl md:text-3xl'
                                            }
                                            `}
                                        >
                                            {selectedProject.title}
                                        </h2>

                                        <p className="text-[#A3A3A3] text-xs sm:text-sm font-sans italic leading-relaxed">
                                            &quot;{selectedProject.tagline}&quot;
                                        </p>
                                    </div>

                                    <div
                                        className={`
                                            space-y-2
                                            ${
                                            isDenseProject
                                                ? 'text-[10px] sm:text-[11px] md:text-xs'
                                                : 'text-[11px] sm:text-xs md:text-sm'
                                        }
                                            font-sans
                                        `}
                                    >

                                        <div
                                            className={`
                                                bg-[#111111]
                                                rounded-xl
                                                border border-[#1C1C1C]
                                                space-y-1
                                                ${
                                                isDenseProject
                                                    ? 'p-2.5 sm:p-3'
                                                    : 'p-3 sm:p-4'
                                            }
                                            `}
                                        >
                                            <span className="font-mono text-[9px] sm:text-[10px] text-red-400 font-bold tracking-wider uppercase block">
                                                🔴 THE PROBLEM
                                            </span>

                                            <p
                                                className={`
                                                    text-neutral-300
                                                    leading-relaxed
                                                    ${
                                                    isDenseProject
                                                        ? 'text-[10px] sm:text-[11px] md:text-xs'
                                                        : ''
                                                }
                                                `}
                                            >
                                                {selectedProject.problem}
                                            </p>
                                        </div>

                                        <div
                                            className={`
                                                bg-[#111111]
                                                rounded-xl
                                                border border-[#1C1C1C]
                                                space-y-1
                                                ${
                                                isDenseProject
                                                    ? 'p-2.5 sm:p-3'
                                                    : 'p-3 sm:p-4'
                                            }
                                            `}
                                        >
                                            <span className="font-mono text-[9px] sm:text-[10px] text-[#38BDF8] font-bold tracking-wider uppercase block">
                                                🟢 THE SOLUTION &amp; ARCHITECTURE
                                            </span>

                                            <p
                                                className={`
                                                    text-neutral-300
                                                    leading-relaxed
                                                    ${
                                                    isDenseProject
                                                        ? 'text-[10px] sm:text-[11px] md:text-xs'
                                                        : ''
                                                }
                                                `}
                                            >
                                                {selectedProject.solution}
                                            </p>
                                        </div>

                                        {selectedProject.impact && (
                                            <div
                                                className={`
                                                    bg-[#111111]
                                                    rounded-xl
                                                    border border-[#1C1C1C]
                                                    space-y-1
                                                    ${
                                                    isDenseProject
                                                        ? 'p-2.5 sm:p-3'
                                                        : 'p-3 sm:p-4'
                                                }
                                                `}
                                            >
                                                <span className="font-mono text-[9px] sm:text-[10px] text-[#38BDF8] font-bold tracking-wider uppercase flex items-center gap-1.5">
                                                    <TrendingUp className="w-3.5 h-3.5" />
                                                    PROJECT IMPACT
                                                </span>

                                                <p
                                                    className={`
                                                        text-neutral-300
                                                        leading-relaxed
                                                        font-mono
                                                        ${
                                                        isDenseProject
                                                            ? 'text-[9px] sm:text-[10px] md:text-[11px]'
                                                            : 'text-[11px] sm:text-xs'
                                                    }
                                                    `}
                                                >
                                                    {selectedProject.impact}
                                                </p>
                                            </div>
                                        )}

                                        {selectedProject.features && (
                                            <div
                                                className={`
                                                    bg-[#111111]
                                                    rounded-xl
                                                    border border-[#1C1C1C]
                                                    space-y-2
                                                    ${
                                                    isDenseProject
                                                        ? 'p-2.5 sm:p-3'
                                                        : 'p-3 sm:p-4'
                                                }
                                                `}
                                            >
                                                <span className="font-mono text-[9px] sm:text-[10px] text-emerald-400 font-bold tracking-wider uppercase block">
                                                    ⚡ KEY FEATURES
                                                </span>

                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-neutral-300 text-[10px] sm:text-xs font-mono">
                                                    {selectedProject.features.map(
                                                        (
                                                            feat: string,
                                                            i: number
                                                        ) => (
                                                            <div
                                                                key={i}
                                                                className="flex items-start gap-2"
                                                            >
                                                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                                                <span>
                                                                    {feat}
                                                                </span>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div
                                        className="
                                            pt-3
                                            border-t border-[#1C1C1C]
                                            flex
                                            flex-col
                                            sm:flex-row
                                            gap-2.5 sm:gap-4
                                            font-mono text-[10px] sm:text-xs
                                        "
                                    >
                                        <a
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="
                                                clickable
                                                flex-1
                                                flex items-center justify-center gap-2
                                                bg-[#141414]
                                                hover:bg-[#1A1A1A]
                                                text-white
                                                font-bold
                                                py-2.5
                                                rounded-xl
                                                border border-[#1F1F1F]
                                                transition
                                            "
                                        >
                                            <FaGithub className="w-4 h-4" />
                                            <span>GitHub Repository</span>
                                        </a>

                                        {selectedProject.demo && (
                                            <a
                                                href={selectedProject.demo}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="
                                                    clickable
                                                    flex-1
                                                    flex items-center justify-center gap-2
                                                    bg-gradient-to-r
                                                    from-[#38BDF8]
                                                    to-teal-400
                                                    text-black
                                                    font-bold
                                                    py-2.5
                                                    rounded-xl
                                                    shadow-[0_0_20px_rgba(56,189,248,0.3)]
                                                    hover:scale-[1.02]
                                                    transition
                                                "
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                <span>Live Product Demo</span>
                                            </a>
                                        )}
                                    </div>

                                </div>
                            </div>

                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </section>
    );
}