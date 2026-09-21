'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
    onCompleteAction: () => void;
}

export default function ArpitOSLoader({ onCompleteAction }: LoaderProps) {
    const [progress, setProgress] = useState(0);
    const [statusText, setStatusText] = useState('BOOTING ARPIT OS v1.0...');

    useEffect(() => {
        const statuses = [
            'BOOTING ARPIT OS v1.0...',
            'LOADING CORE MODULES...',
            'INITIALIZING AI ENGINE...',
            'ESTABLISHING GITHUB LINK...',
            'SYSTEM READY: ACCESS GRANTED'
        ];

        let current = 0;
        const interval = setInterval(() => {
            current += 2;
            setProgress(current);

            if (current === 20) setStatusText(statuses[1]);
            if (current === 45) setStatusText(statuses[2]);
            if (current === 70) setStatusText(statuses[3]);
            if (current === 90) setStatusText(statuses[4]);

            if (current >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    onCompleteAction();
                }, 600);
            }
        }, 25);

        return () => clearInterval(interval);
    }, [onCompleteAction]);

    return (
        <motion.div
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(12px)' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070707] font-mono text-cyan-400"
        >
            <div className="text-center space-y-6 max-w-md px-4">
                <div className="space-y-2">
          <span className="text-xs tracking-widest text-violet-400 border border-violet-500/30 px-3 py-1 rounded-full bg-violet-500/10">
            ARPIT OS v1.0
          </span>
                    <h1 className="text-4xl md:text-5xl font-black tracking-widest text-white uppercase font-heading drop-shadow-[0_0_25px_rgba(0,229,255,0.4)] mt-4">
                        {progress < 100 ? 'INITIALIZING' : 'ACCESS GRANTED'}
                    </h1>
                </div>

                <p className="text-xs font-mono text-cyan-300 tracking-wider h-6">
                    &gt; {statusText}
                </p>

                <div className="w-full bg-[#111111] border border-[#1C1C1C] rounded-full h-2.5 p-0.5 relative overflow-hidden shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                    <motion.div
                        className="bg-linear-to-r from-violet-600 via-cyan-400 to-emerald-400 h-full rounded-full"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <div className="flex justify-between text-xs text-neutral-500 font-bold">
                    <span>00%</span>
                    <span className="text-cyan-400">{progress}%</span>
                    <span>100%</span>
                </div>
            </div>
        </motion.div>
    );
}