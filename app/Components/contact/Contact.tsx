'use client';
import { Mail, MapPin, ArrowUpRight, Send, Briefcase } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { contactInfo } from '../../constants/portfolioData';

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 md:px-16 bg-[#050505] relative overflow-hidden border-t border-[#1F1F1F]">
            <div className="absolute inset-0 bg-[radial-gradient(#1c1c1c_1px,transparent_1px)] bg-size-[32px_32px] opacity-10 pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                <div className="lg:col-span-5 space-y-6">
                    <div className="flex flex-col items-start">
                        <span className="font-mono text-xs text-[#38BDF8] font-bold tracking-widest uppercase mb-2">
                          $ socket --open
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black font-heading tracking-tight text-white uppercase leading-tight">
                            Available for internships, collaborations, and exciting software projects.
                        </h2>
                        <div className="w-16 h-0.5 bg-[#38BDF8]/40 mt-4" />
                    </div>

                    <p className="text-[#A3A3A3] text-sm leading-relaxed font-sans">
                        Reach out directly for software engineering opportunities, backend discussions, or technical inquiries.
                    </p>

                    <div className="space-y-3 font-mono text-xs pt-2">
                        <div className="flex items-center gap-3 text-neutral-300">
                            <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0" />
                            <span>{contactInfo.location}</span>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.personalEmail}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="clickable bg-[#0D0D0D] border border-[#1F1F1F] hover:border-[#38BDF8]/50 p-6 rounded-2xl group transition duration-300 flex flex-col justify-between h-48"
                    >
                        <div className="flex justify-between items-start">
                            <Mail className="w-6 h-6 text-[#38BDF8]" />
                            <ArrowUpRight className="w-4 h-4 text-[#A3A3A3] group-hover:text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                        </div>
                        <div>
                            <p className="font-mono text-[10px] text-[#38BDF8] font-bold uppercase tracking-wider">Personal</p>
                            <p className="font-bold text-white font-heading mt-1 text-xs group-hover:text-[#38BDF8] transition truncate">
                                {contactInfo.personalEmail}
                            </p>
                            <p className="text-[11px] text-[#A3A3A3] font-sans mt-1 line-clamp-2">
                                For internships, collaborations, project discussions, and general communication.
                            </p>
                        </div>
                    </a>

                    <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.businessEmail}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="clickable bg-[#0D0D0D] border border-[#1F1F1F] hover:border-[#8B5CF6]/50 p-6 rounded-2xl group transition duration-300 flex flex-col justify-between h-48"
                    >
                        <div className="flex justify-between items-start">
                            <Briefcase className="w-6 h-6 text-[#8B5CF6]" />
                            <ArrowUpRight className="w-4 h-4 text-[#A3A3A3] group-hover:text-[#8B5CF6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                        </div>
                        <div>
                            <p className="font-mono text-[10px] text-[#8B5CF6] font-bold uppercase tracking-wider">Professional &amp; Internships</p>
                            <p className="font-bold text-white font-heading mt-1 text-xs group-hover:text-[#8B5CF6] transition truncate">
                                {contactInfo.businessEmail}
                            </p>
                            <p className="text-[11px] text-[#A3A3A3] font-sans mt-1 line-clamp-2">
                                Reserved for future business inquiries, partnerships, and professional opportunities.
                            </p>
                        </div>
                    </a>

                    <a
                        href={contactInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="clickable bg-[#0D0D0D] border border-[#1F1F1F] hover:border-[#38BDF8]/50 p-6 rounded-2xl group transition duration-300 flex flex-col justify-between h-36"
                    >
                        <div className="flex justify-between items-start">
                            <FaGithub className="w-6 h-6 text-white" />
                            <ArrowUpRight className="w-4 h-4 text-[#A3A3A3] group-hover:text-[#38BDF8] transition" />
                        </div>
                        <div>
                            <p className="font-mono text-[10px] text-[#A3A3A3] uppercase">Repositories</p>
                            <p className="font-bold text-white font-heading mt-1 group-hover:text-[#38BDF8] transition">GitHub Profile ↗</p>
                        </div>
                    </a>

                    <div className="grid grid-cols-2 gap-4">

                        <a
                            href={contactInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="clickable bg-[#0D0D0D] border border-[#1F1F1F] hover:border-[#38BDF8]/50 p-5 rounded-2xl group transition duration-300 flex flex-col justify-between h-36"
                        >
                            <div className="flex justify-between items-start">
                                <FaLinkedin className="w-5 h-5 text-[#38BDF8]" />
                                <ArrowUpRight className="w-3.5 h-3.5 text-[#A3A3A3] group-hover:text-[#38BDF8] transition" />
                            </div>
                            <div>
                                <p className="font-mono text-[9px] text-[#A3A3A3] uppercase">Network</p>
                                <p className="font-bold text-white font-heading text-xs mt-1 group-hover:text-[#38BDF8] transition">LinkedIn</p>
                            </div>
                        </a>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="clickable bg-[#0D0D0D] border border-[#1F1F1F] hover:border-[#38BDF8]/50 p-5 rounded-2xl group transition duration-300 flex flex-col justify-between h-36"
                        >
                            <div className="flex justify-between items-start">
                                <Send className="w-5 h-5 text-[#38BDF8]" />
                                <ArrowUpRight className="w-3.5 h-3.5 text-[#A3A3A3] group-hover:text-[#38BDF8] transition" />
                            </div>
                            <div>
                                <p className="font-mono text-[9px] text-[#A3A3A3] uppercase">CV</p>
                                <p className="font-bold text-white font-heading text-xs mt-1 group-hover:text-[#38BDF8] transition">Resume ↗</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}