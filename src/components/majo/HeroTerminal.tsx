import React from 'react';
import { motion } from 'framer-motion';

const HeroTerminal = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center p-4 relative overflow-hidden">
            <div className="max-w-3xl w-full border border-gray-800 bg-black/90 p-2 rounded-lg shadow-[0_0_20px_rgba(0,243,255,0.2)]">
                {/* Terminal Header */}
                <div className="flex items-center justify-between bg-gray-900/50 p-2 border-b border-gray-800 mb-4 rounded-t">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-gray-500 font-mono">user@flippermen:~/mission-majo</div>
                </div>

                {/* Terminal Content */}
                <div className="p-4 font-mono text-sm md:text-base space-y-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-green-500"
                    >
                        $ ./init_protocol.sh --target="Majo"
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="text-gray-300"
                    >
                        [+] Establishing Secure Connection... <span className="text-green-500">SUCCESS</span><br />
                        [+] Loading Neural Network... <span className="text-green-500">DONE</span><br />
                        [+] Decrypting Valentine's Archive... <span className="text-green-500">100%</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.5 }}
                        className="border-l-2 border-[#ff0055] pl-4 py-2 mt-8 text-white"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold mb-2 glitch-text" style={{ fontFamily: '"Bangers", cursive', letterSpacing: '0.05em' }}>
                            PROJECT MAJO
                        </h1>
                        <p className="text-[#00f3ff] text-lg">THE RESCHEDULED MISSION</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.5 }}
                        className="mt-8 text-gray-400 cursor-blink"
                    >
                        &gt; Todo comenzó con un ping en la red...
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 5, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 text-gray-500 text-xs"
            >
                SCROLL TO DECRYPT
            </motion.div>
        </section>
    );
};

export default HeroTerminal;
