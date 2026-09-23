'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArpitOSLoader from './Components/loader/ArpitOSLoader';
import Hero from './Components/hero/Hero';
import Navbar from './Components/navbar/Navbar';
import CustomCursor from './Components/cursor/CustomCursor';
import About from './Components/about/About';
import TechArsenal from './Components/tech/TechArsenal';
import Projects from './Components/projects/Projects';
import Journey from './Components/journey/Journey';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import ScrollToTop from './Components/scrollToTop/ScrollToTop';

const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
        {children}
    </motion.div>
);

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <main className="bg-[#050505] text-white min-h-screen relative selection:bg-[#38BDF8] selection:text-black overflow-x-hidden">
            <CustomCursor />

            <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
                <div className="particle-faint-1 absolute top-1/6 left-8 w-2 h-2 rounded-full bg-[#38BDF8]" />
                <div className="particle-faint-2 absolute top-1/3 right-12 w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                <div className="particle-faint-3 absolute top-2/3 left-16 w-2.5 h-2.5 rounded-full bg-[#1696E6]" />
                <div className="particle-faint-4 absolute bottom-1/6 right-1/4 w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                <div className="particle-faint-1 absolute top-1/2 left-1/4 w-2 h-2 rounded-full bg-[#8B5CF6]" />
                <div className="particle-faint-2 absolute bottom-1/3 left-2/3 w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                <div className="particle-faint-3 absolute top-1/12 right-1/3 w-2 h-2 rounded-full bg-[#38BDF8]" />
                <div className="particle-faint-4 absolute bottom-1/12 left-1/2 w-1 h-1 rounded-full bg-[#38BDF8]" />
            </div>

            <AnimatePresence mode="wait">
                {isLoading && (
                    <ArpitOSLoader key="loader" onCompleteAction={() => setIsLoading(false)} />
                )}
            </AnimatePresence>

            {!isLoading && (
                <div>
                    <Navbar />
                    <Hero />

                    <SectionWrapper>
                        <About />
                    </SectionWrapper>

                    <SectionWrapper>
                        <TechArsenal />
                    </SectionWrapper>

                    <SectionWrapper>
                        <Projects />
                    </SectionWrapper>

                    <SectionWrapper>
                        <Journey />
                    </SectionWrapper>

                    <SectionWrapper>
                        <Contact />
                    </SectionWrapper>

                    <Footer />
                    <ScrollToTop />
                </div>
            )}
        </main>
    );
}