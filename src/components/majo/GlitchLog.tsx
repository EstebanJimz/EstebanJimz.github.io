import React from 'react';
import { motion } from 'framer-motion';

const GlitchLog = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-red-900/5 border-y border-red-900/20">
            {/* Glitch Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#ff0055_2px,#ff0055_4px)]"></div>

            <div className="max-w-2xl mx-auto px-4 relative z-10 text-center">
                <motion.div
                    animate={{ opacity: [1, 0.5, 1, 0.8, 1], x: [0, -2, 2, 0] }}
                    transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                    className="inline-block bg-red-600/20 text-red-500 font-mono px-4 py-1 mb-6 border border-red-500/50"
                >
                    CRITICAL ERROR: DATE_NIGHT_NOT_FOUND
                </motion.div>

                <h2 className="text-4xl text-white font-comic mb-8">THE 14-F GLITCH</h2>

                <div className="bg-black border border-red-500/30 p-6 text-left font-mono text-sm shadow-[0_0_30px_rgba(255,0,85,0.1)]">
                    <p className="text-gray-400 mb-4">> Analyzing System Logs...</p>

                    <div className="space-y-4">
                        <div className="flex">
                            <span className="text-red-500 w-24 shrink-0">[ERROR]</span>
                            <span className="text-gray-300">Conflict Detected: Mission Protocol Overlap.</span>
                        </div>
                        <div className="flex">
                            <span className="text-blue-400 w-24 shrink-0">[MAJO]</span>
                            <span className="text-gray-300">Priority Alpha: Support Unit (Mom). Status: BUSY.</span>
                        </div>
                        <div className="flex">
                            <span className="text-yellow-500 w-24 shrink-0">[PETER]</span>
                            <span className="text-gray-300">Priority Beta: Certification Exam. Status: STUDYING.</span>
                        </div>
                    </div>

                    <div className="mt-8 border-t border-gray-800 pt-4 text-gray-400 text-xs italic">
                        "A veces, ser un héroe (o un adulto responsable) significa posponer la diversión para cumplir con el deber."
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlitchLog;
