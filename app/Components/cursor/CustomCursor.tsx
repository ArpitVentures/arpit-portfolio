'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const updateCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleHoverStart = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a, button, .clickable')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', updateCursor);
        window.addEventListener('mouseover', handleHoverStart);

        return () => {
            window.removeEventListener('mousemove', updateCursor);
            window.removeEventListener('mouseover', handleHoverStart);
        };
    }, []);

    return (
        <>

            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center rounded-full border border-cyan-400/50 bg-cyan-500/5 backdrop-blur-[1px]"
                animate={{
                    x: position.x - (isHovered ? 20 : 16),
                    y: position.y - (isHovered ? 20 : 16),
                    width: isHovered ? 40 : 32,
                    height: isHovered ? 40 : 32,
                    borderColor: isHovered ? '#00E5FF' : 'rgba(0, 229, 255, 0.3)',
                }}
                transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.1 }}
            >
                {isHovered && (
                    <span className="text-[10px] font-mono font-bold text-cyan-300">
            &gt;_
          </span>
                )}
            </motion.div>

            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-cyan-400 rounded-full pointer-events-none z-50 shadow-[0_0_10px_#00E5FF]"
                animate={{
                    x: position.x - 3,
                    y: position.y - 3,
                    scale: isHovered ? 0 : 1,
                }}
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            />
        </>
    );
}